import { unstable_noStore as noStore } from "next/cache";
import { isSupabaseConfigured } from "@/lib/config";
import { createClient } from "@/lib/supabase/server";
import type { ChatSummary, ListingStatus, Message, Profile } from "@/lib/types";

type SupabaseServerClient = NonNullable<Awaited<ReturnType<typeof createClient>>>;
type SupabaseRow = Record<string, unknown>;

type ChatDetail = ChatSummary & {
  listing?: ChatSummary["listing"] | null;
  owner?: Profile | null;
  sitter?: Profile | null;
};

export function getChatContext(chat: Pick<ChatSummary, "owner_id" | "sitter_id" | "owner" | "sitter" | "listing">, userId: string) {
  const isListingOwner = userId === chat.owner_id;
  const other = isListingOwner ? chat.sitter : chat.owner;
  const listingStatus = chat.listing?.status ?? "active";
  const listingStatusLabel =
    listingStatus === "closed" ? "Inserat gelöscht" : listingStatus === "paused" ? "Inserat pausiert" : "Inserat aktiv";
  const listingIsVisible = listingStatus === "active";

  return {
    other,
    isListingOwner,
    listingStatus,
    listingStatusLabel,
    listingIsVisible,
    roleLabel: isListingOwner ? "Du wurdest angefragt" : "Du hast angefragt",
    roleDescription:
      listingStatus === "closed"
        ? "Dieses Inserat wurde gelöscht. Der Chat bleibt als Verlauf erhalten."
        : listingStatus === "paused"
          ? "Dieses Inserat ist pausiert und gerade nicht öffentlich sichtbar."
          : isListingOwner
            ? "Anfrage zu deinem Inserat"
            : "Deine Anfrage zu diesem Inserat",
    listingTitle: listingStatus === "closed" ? "Gelöschtes Inserat" : chat.listing?.title ?? "Inserat",
  };
}

async function signChatMedia(supabase: SupabaseServerClient, path?: string | null) {
  if (!path) return null;
  const { data, error } = await supabase.storage.from("chat-media").createSignedUrl(path, 60 * 30);
  if (error) {
    console.error("Failed to sign chat media", error);
    return null;
  }
  return data.signedUrl;
}

function asRow(value: unknown): SupabaseRow | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as SupabaseRow) : null;
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asNumber(value: unknown, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function hasSupabaseCode(error: unknown, code: string) {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === code);
}

function normalizeMessage(row: SupabaseRow): Message {
  return {
    id: asString(row.id),
    chat_id: asString(row.chat_id),
    sender_id: asString(row.sender_id),
    body: asString(row.body, "") || null,
    media_path: asString(row.media_path, "") || null,
    media_type: (asString(row.media_type, "") || null) as Message["media_type"],
    media_url: asString(row.media_url, "") || null,
    read_at: asString(row.read_at, "") || null,
    created_at: asString(row.created_at),
    sender: (asRow(row.profiles) ?? asRow(row.sender)) as Message["sender"],
  };
}

async function getUnreadCountsByChat(
  supabase: SupabaseServerClient,
  chatIds: string[],
  userId: string,
) {
  if (!chatIds.length) return new Map<string, number>();

  const { data, error } = await supabase
    .from("messages")
    .select("chat_id")
    .in("chat_id", chatIds)
    .neq("sender_id", userId)
    .is("read_at", null);

  if (error) {
    console.error("Failed to load unread counts", error);
    return new Map<string, number>();
  }

  return (data ?? []).reduce((counts, row: SupabaseRow) => {
    const chatId = asString(row.chat_id);
    counts.set(chatId, (counts.get(chatId) ?? 0) + 1);
    return counts;
  }, new Map<string, number>());
}

export async function getChatSummaries(userId: string): Promise<ChatSummary[]> {
  noStore();

  if (!isSupabaseConfigured) return [];

  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("chats")
    .select(
      `
        id,
        listing_id,
        owner_id,
        sitter_id,
        created_at,
        updated_at,
        listings!chats_listing_id_fkey(id, title, main_image_path, status),
        owner:profiles!chats_owner_id_fkey(id, full_name, avatar_url),
        sitter:profiles!chats_sitter_id_fkey(id, full_name, avatar_url)
      `,
    )
    .or(`owner_id.eq.${userId},sitter_id.eq.${userId}`)
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Failed to load chats", error);
    return [];
  }

  const chatIds = (data ?? []).map((row: SupabaseRow) => asString(row.id)).filter(Boolean);
  const unreadCounts = await getUnreadCountsByChat(supabase, chatIds, userId);

  const summaries = await Promise.all(
    (data ?? []).map(async (row: SupabaseRow) => {
      const { data: lastMessage } = await supabase
        .from("messages")
        .select("id, chat_id, sender_id, body, media_path, media_type, read_at, created_at")
        .eq("chat_id", row.id)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      const listingRow = asRow(row.listings);
      const listingPath = asString(listingRow?.main_image_path);
      const listing = listingRow
        ? {
            id: asString(listingRow.id),
            title: asString(listingRow.title),
            main_image_path: asString(listingRow.main_image_path),
            status: asString(listingRow.status, "active") as ListingStatus,
            main_image_url: listingPath
              ? supabase.storage.from("listing-media").getPublicUrl(listingPath).data.publicUrl
              : null,
          }
        : null;

      return {
        id: asString(row.id),
        listing_id: asString(row.listing_id),
        owner_id: asString(row.owner_id),
        sitter_id: asString(row.sitter_id),
        created_at: asString(row.created_at),
        updated_at: asString(row.updated_at),
        listing,
        owner: asRow(row.owner) as Profile | null,
        sitter: asRow(row.sitter) as Profile | null,
        last_message: lastMessage ? normalizeMessage(lastMessage as SupabaseRow) : null,
        unread_count: unreadCounts.get(asString(row.id)) ?? 0,
      };
    }),
  );

  return summaries;
}

export async function getUnreadMessageCount(userId: string) {
  noStore();

  if (!isSupabaseConfigured) return 0;

  const supabase = await createClient();
  if (!supabase) return 0;

  const { data: chats, error: chatError } = await supabase
    .from("chats")
    .select("id")
    .or(`owner_id.eq.${userId},sitter_id.eq.${userId}`);

  if (chatError) {
    console.error("Failed to load chats for unread count", chatError);
    return 0;
  }

  const chatIds = (chats ?? []).map((row: SupabaseRow) => asString(row.id)).filter(Boolean);
  if (!chatIds.length) return 0;

  const { count, error } = await supabase
    .from("messages")
    .select("id", { count: "exact", head: true })
    .in("chat_id", chatIds)
    .neq("sender_id", userId)
    .is("read_at", null);

  if (error) {
    console.error("Failed to load unread message count", error);
    return 0;
  }

  return asNumber(count);
}

export async function getChat(chatId: string): Promise<ChatDetail | null> {
  noStore();

  if (!isSupabaseConfigured) return null;

  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("chats")
    .select(
      `
        id,
        listing_id,
        owner_id,
        sitter_id,
        created_at,
        updated_at,
        listings!chats_listing_id_fkey(id, title, main_image_path, status),
        owner:profiles!chats_owner_id_fkey(id, full_name, avatar_url),
        sitter:profiles!chats_sitter_id_fkey(id, full_name, avatar_url)
      `,
    )
    .eq("id", chatId)
    .single();

  if (error) {
    if (hasSupabaseCode(error, "PGRST116")) {
      return null;
    }
    console.error("Failed to load chat", error);
    return null;
  }

  const row = data as SupabaseRow;
  const listingRow = asRow(row.listings);
  const listingPath = asString(listingRow?.main_image_path);

  return {
    id: asString(row.id),
    listing_id: asString(row.listing_id),
    owner_id: asString(row.owner_id),
    sitter_id: asString(row.sitter_id),
    created_at: asString(row.created_at),
    updated_at: asString(row.updated_at),
    unread_count: 0,
    owner: asRow(row.owner) as Profile | null,
    sitter: asRow(row.sitter) as Profile | null,
    listing: listingRow
      ? {
          id: asString(listingRow.id),
          title: asString(listingRow.title),
          main_image_path: asString(listingRow.main_image_path),
          status: asString(listingRow.status, "active") as ListingStatus,
          main_image_url: listingPath
            ? supabase.storage.from("listing-media").getPublicUrl(listingPath).data.publicUrl
            : null,
        }
      : null,
  };
}

export async function getMessages(chatId: string): Promise<Message[]> {
  noStore();

  if (!isSupabaseConfigured) return [];

  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("messages")
    .select(
      `
        id,
        chat_id,
        sender_id,
        body,
        media_path,
        media_type,
        read_at,
        created_at,
        profiles!messages_sender_id_fkey(id, full_name, avatar_url)
      `,
    )
    .eq("chat_id", chatId)
    .order("created_at", { ascending: true })
    .limit(200);

  if (error) {
    console.error("Failed to load messages", error);
    return [];
  }

  return Promise.all(
    (data ?? []).map(async (row: SupabaseRow) => ({
      ...normalizeMessage(row),
      media_url: await signChatMedia(supabase, asString(row.media_path, "") || null),
    })),
  );
}

export async function markChatRead(chatId: string) {
  noStore();

  if (!isSupabaseConfigured) return 0;

  const supabase = await createClient();
  if (!supabase) return 0;

  const { data, error } = await supabase.rpc("mark_chat_read", {
    p_chat_id: chatId,
  });

  if (error) {
    console.error("Failed to mark chat as read", error);
    return 0;
  }

  return asNumber(data);
}
