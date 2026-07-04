"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/config";
import { getListingFormValues, type ListingFormState } from "@/lib/listing-form-state";
import { listingSchema } from "@/lib/validators/inserat";
import { createClient, getUser } from "@/lib/supabase/server";
import { sanitizeFileName } from "@/lib/utils";

const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const MAX_VIDEO_BYTES = 50 * 1024 * 1024;
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const VIDEO_TYPES = ["video/mp4", "video/webm"];
const NEW_LISTING_REQUEST_PATH = "/inserieren/gesuch";
const DASHBOARD_PATH = "/uebersicht";

function redirectWithError(path: string, message: string): never {
  redirect(`${path}?${new URLSearchParams({ error: message }).toString()}`);
}

function listingFormError(message: string, formData: FormData): ListingFormState {
  return {
    error: message,
    values: getListingFormValues(formData),
  };
}

function getFile(formData: FormData, name: string) {
  const value = formData.get(name);
  return value instanceof File && value.size > 0 ? value : null;
}

function getRequiredListingId(formData: FormData) {
  const listingId = String(formData.get("listingId") ?? "");
  if (!listingId) {
    redirectWithDashboardError("Dieses Inserat konnte nicht gefunden werden.");
  }
  return listingId;
}

function redirectWithDashboardError(message: string): never {
  redirect(`${DASHBOARD_PATH}?${new URLSearchParams({ error: message }).toString()}`);
}

function redirectWithListingStatus(status: "aktiviert" | "pausiert" | "geloescht"): never {
  redirect(`${DASHBOARD_PATH}?${new URLSearchParams({ inserat: status }).toString()}`);
}

async function getAuthedSupabaseForDashboard() {
  if (!isSupabaseConfigured) {
    redirectWithDashboardError("Supabase ist noch nicht konfiguriert.");
  }

  const supabase = await createClient();
  const user = await getUser();

  if (!supabase || !user) {
    redirect(`/einloggen?next=${DASHBOARD_PATH}`);
  }

  return { supabase, user };
}

async function uploadMedia(
  file: File,
  userId: string,
  folder: "images" | "videos",
  supabase: NonNullable<Awaited<ReturnType<typeof createClient>>>,
) {
  const extensionName = sanitizeFileName(file.name) || `${folder.slice(0, -1)}.bin`;
  const path = `${userId}/inserate/${folder}/${crypto.randomUUID()}-${extensionName}`;

  const { error } = await supabase.storage.from("listing-media").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type,
  });

  if (error) {
    throw new Error(error.message);
  }

  return path;
}

export async function createListingAction(
  previousState: ListingFormState,
  formData: FormData,
): Promise<ListingFormState> {
  void previousState;

  if (!isSupabaseConfigured) {
    return listingFormError("Supabase ist noch nicht konfiguriert.", formData);
  }

  const supabase = await createClient();
  const user = await getUser();

  if (!supabase || !user) {
    redirect(`/einloggen?next=${NEW_LISTING_REQUEST_PATH}`);
  }

  const parsed = listingSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    categoryId: formData.get("categoryId"),
    postalCode: formData.get("postalCode"),
    careLocation: formData.get("careLocation"),
    frequency: formData.get("frequency"),
    durationValue: formData.get("durationValue"),
    durationUnit: formData.get("durationUnit"),
    startsAt: formData.get("startsAt") || undefined,
  });

  if (!parsed.success) {
    return listingFormError(parsed.error.issues[0]?.message ?? "Bitte prüfe deine Eingaben.", formData);
  }

  const image = getFile(formData, "mainImage");
  const video = getFile(formData, "video");

  if (!image) {
    return listingFormError("Bitte lade ein Hauptbild hoch.", formData);
  }

  if (!IMAGE_TYPES.includes(image.type) || image.size > MAX_IMAGE_BYTES) {
    return listingFormError("Das Hauptbild muss JPG, PNG oder WebP sein und unter 10 MB bleiben.", formData);
  }

  if (video && (!VIDEO_TYPES.includes(video.type) || video.size > MAX_VIDEO_BYTES)) {
    return listingFormError("Das Video muss MP4 oder WebM sein und unter 50 MB bleiben.", formData);
  }

  const { data: postalCode } = await supabase
    .from("postal_codes")
    .select("postal_code")
    .eq("postal_code", parsed.data.postalCode)
    .maybeSingle();

  if (!postalCode) {
    return listingFormError(
      "Diese PLZ konnte nicht gefunden werden. Bitte prüfe die fünfstellige Postleitzahl.",
      formData,
    );
  }

  let createdListingId: string | null = null;

  try {
    const mainImagePath = await uploadMedia(image, user.id, "images", supabase);
    const videoPath = video ? await uploadMedia(video, user.id, "videos", supabase) : null;

    const { data, error } = await supabase
      .from("listings")
      .insert({
        owner_id: user.id,
        category_id: parsed.data.categoryId,
        title: parsed.data.title,
        description: parsed.data.description,
        postal_code: parsed.data.postalCode,
        care_location: parsed.data.careLocation,
        frequency: parsed.data.frequency,
        duration_value: parsed.data.durationValue,
        duration_unit: parsed.data.durationUnit,
        starts_at: parsed.data.startsAt || null,
        main_image_path: mainImagePath,
        video_path: videoPath,
        status: "active",
      })
      .select("id")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    createdListingId = data.id as string;
  } catch (error) {
    return listingFormError(
      error instanceof Error ? error.message : "Das Inserat konnte nicht erstellt werden.",
      formData,
    );
  }

  redirect(`/inserate/${createdListingId}`);
}

export async function pauseListingAction(formData: FormData) {
  const listingId = getRequiredListingId(formData);
  const { supabase, user } = await getAuthedSupabaseForDashboard();

  const { data, error } = await supabase
    .from("listings")
    .update({ status: "paused" })
    .eq("id", listingId)
    .eq("owner_id", user.id)
    .neq("status", "closed")
    .select("id")
    .maybeSingle();

  if (error) {
    redirectWithDashboardError(error.message);
  }

  if (!data) {
    redirectWithDashboardError("Dieses Inserat gehört nicht zu deinem Konto oder wurde bereits gelöscht.");
  }

  revalidatePath(DASHBOARD_PATH);
  revalidatePath("/inserate");
  redirectWithListingStatus("pausiert");
}

export async function activateListingAction(formData: FormData) {
  const listingId = getRequiredListingId(formData);
  const { supabase, user } = await getAuthedSupabaseForDashboard();

  const { data, error } = await supabase
    .from("listings")
    .update({ status: "active" })
    .eq("id", listingId)
    .eq("owner_id", user.id)
    .neq("status", "closed")
    .select("id")
    .maybeSingle();

  if (error) {
    redirectWithDashboardError(error.message);
  }

  if (!data) {
    redirectWithDashboardError("Dieses Inserat gehört nicht zu deinem Konto oder wurde bereits gelöscht.");
  }

  revalidatePath(DASHBOARD_PATH);
  revalidatePath("/inserate");
  redirectWithListingStatus("aktiviert");
}

export async function deleteListingAction(formData: FormData) {
  const listingId = getRequiredListingId(formData);
  const { supabase, user } = await getAuthedSupabaseForDashboard();

  const { data: listing, error: listingError } = await supabase
    .from("listings")
    .select("id, main_image_path, video_path")
    .eq("id", listingId)
    .eq("owner_id", user.id)
    .maybeSingle();

  if (listingError) {
    redirectWithDashboardError(listingError.message);
  }

  if (!listing) {
    redirectWithDashboardError("Dieses Inserat gehört nicht zu deinem Konto oder wurde bereits gelöscht.");
  }

  const mediaPaths = [listing.main_image_path, listing.video_path].filter(
    (path): path is string => typeof path === "string" && Boolean(path),
  );

  if (mediaPaths.length) {
    const { error: mediaError } = await supabase.storage.from("listing-media").remove(mediaPaths);
    if (mediaError) {
      console.error("Failed to delete listing media", mediaError);
    }
  }

  const { error } = await supabase
    .from("listings")
    .update({
      title: "Gelöschtes Inserat",
      description: "Dieses Inserat wurde gelöscht. Der Chat bleibt als Verlauf erhalten.",
      main_image_path: "",
      video_path: null,
      status: "closed",
    })
    .eq("id", listingId)
    .eq("owner_id", user.id);

  if (error) {
    redirectWithDashboardError(error.message);
  }

  revalidatePath(DASHBOARD_PATH);
  revalidatePath("/inserate");
  revalidatePath(`/inserate/${listingId}`);
  revalidatePath("/anfragen");
  redirectWithListingStatus("geloescht");
}

export async function startChatAction(formData: FormData) {
  const listingId = String(formData.get("listingId") ?? "");

  if (!isSupabaseConfigured) {
    redirect(`/einloggen?next=/inserate/${listingId}`);
  }

  const supabase = await createClient();
  const user = await getUser();

  if (!supabase || !user) {
    redirect(`/einloggen?next=/inserate/${listingId}`);
  }

  const { data, error } = await supabase.rpc("start_chat_for_listing", {
    p_listing_id: listingId,
  });

  if (error) {
    redirectWithError(`/inserate/${listingId}`, error.message);
  }

  redirect(`/anfragen/${data}`);
}
