import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, ListChecks } from "lucide-react";
import { ChatRoom } from "@/components/chat/chat-room";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getChat, getChatContext, getMessages, markChatRead } from "@/lib/anfragen";
import { getUser } from "@/lib/supabase/server";

type ChatDetailPageProps = {
  params: Promise<{ chatId: string }>;
};

export default async function ChatDetailPage({ params }: ChatDetailPageProps) {
  const [{ chatId }, user] = await Promise.all([params, getUser()]);

  if (!user) {
    redirect(`/einloggen?next=/anfragen/${chatId}`);
  }

  const chat = await getChat(chatId);

  if (!chat) {
    notFound();
  }

  await markChatRead(chatId);
  const messages = await getMessages(chatId);

  const context = getChatContext(chat, user.id);
  const other = context.other;
  const canOpenListing = context.listingIsVisible || context.isListingOwner;

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-5 sm:px-6">
      <div className="mb-4 flex items-center gap-3">
        <Button asChild variant="ghost" size="icon" aria-label="Zurück">
          <Link href="/anfragen">
            <ArrowLeft />
          </Link>
        </Button>
        <p className="text-sm font-black uppercase tracking-normal text-[#225966]">Anfrage</p>
      </div>

      <Card className="mb-4 overflow-hidden">
        <CardContent className="grid gap-4 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
          <Avatar className="size-12">
            <AvatarImage src={other?.avatar_url ?? undefined} alt="" />
            <AvatarFallback name={other?.full_name} />
          </Avatar>
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="truncate text-xl font-black text-[#262C36]">{other?.full_name || "Buddza Kontakt"}</h1>
              <Badge
                variant={context.isListingOwner ? "default" : "secondary"}
                className={context.isListingOwner ? "bg-[#F0917B] text-[#262C36]" : ""}
              >
                {context.roleLabel}
              </Badge>
              {context.listingStatus !== "active" ? (
                <Badge variant="amber">{context.listingStatusLabel}</Badge>
              ) : null}
            </div>
            <p className="mt-1 text-sm text-slate-600">{context.roleDescription}</p>
            {canOpenListing ? (
              <Link
                href={`/inserate/${chat.listing_id}`}
                className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-md bg-[#F5FBF8] px-2.5 py-1.5 text-sm font-bold text-[#262C36] hover:bg-[#E8F4EF]"
              >
                <ListChecks className="size-4 shrink-0 text-[#2F7A68]" />
                <span className="truncate">{context.listingTitle}</span>
              </Link>
            ) : (
              <div className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-md bg-[#F5FBF8] px-2.5 py-1.5 text-sm font-bold text-[#262C36]/70">
                <ListChecks className="size-4 shrink-0 text-[#2F7A68]" />
                <span className="truncate">{context.listingTitle}</span>
              </div>
            )}
          </div>
          {canOpenListing ? (
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <Link href={`/inserate/${chat.listing_id}`}>
                Inserat öffnen
                <ArrowRight />
              </Link>
            </Button>
          ) : null}
        </CardContent>
      </Card>

      <ChatRoom chatId={chatId} currentUserId={user.id} initialMessages={messages} />
    </main>
  );
}
