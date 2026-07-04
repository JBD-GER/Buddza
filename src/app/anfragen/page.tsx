import Link from "next/link";
import { Inbox, ListChecks, MessageCircle, Plus } from "lucide-react";
import { ConfigNotice } from "@/components/app/config-notice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { isSupabaseConfigured } from "@/lib/config";
import { getChatContext, getChatSummaries } from "@/lib/anfragen";
import { getUser } from "@/lib/supabase/server";
import { formatDateTime } from "@/lib/utils";

export default async function ChatsPage() {
  const user = await getUser();
  const chats = user ? await getChatSummaries(user.id) : [];
  const unreadCount = chats.reduce((sum, chat) => sum + chat.unread_count, 0);

  return (
    <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-8 sm:px-6">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-black uppercase tracking-normal text-[#225966]">Anfragen</p>
          <h1 className="mt-1 text-3xl font-black tracking-normal text-[#262C36]">Nachrichten zu Betreuungen</h1>
          <p className="mt-1 text-sm text-slate-600">
            Jede Kontaktaufnahme wird hier als Anfrage mit Echtzeit-Chat gesammelt.
            {unreadCount > 0 ? ` ${unreadCount} neue Nachricht${unreadCount === 1 ? "" : "en"} wartet.` : ""}
          </p>
        </div>
        <Button asChild variant="secondary">
          <Link href="/#feed">
            <Plus />
            Inserate finden
          </Link>
        </Button>
      </div>

      {!isSupabaseConfigured ? (
        <div className="mb-5">
          <ConfigNotice />
        </div>
      ) : null}

      {!user && isSupabaseConfigured ? (
        <Card>
          <CardContent className="flex flex-col items-start gap-4 p-5">
            <p className="text-sm text-slate-600">Bitte melde dich an, um deine Nachrichten zu sehen.</p>
            <Button asChild>
              <Link href="/einloggen?next=/anfragen">Einloggen</Link>
            </Button>
          </CardContent>
        </Card>
      ) : chats.length ? (
        <div className="grid gap-3">
          {chats.map((chat) => {
            const context = user ? getChatContext(chat, user.id) : null;
            const other = context?.other;
            const lastMessageText =
              chat.last_message?.body ||
              (chat.last_message?.media_path ? "Anhang" : "Noch keine Nachricht");
            const lastMessagePrefix =
              chat.last_message?.sender_id === user?.id ? "Du: " : "";

            return (
              <Link key={chat.id} href={`/anfragen/${chat.id}`} className="block">
                <Card className={chat.unread_count > 0 ? "overflow-hidden border-[#F0917B]/45 bg-[#FFF8F5] transition-colors hover:bg-[#FFF1ED]" : "overflow-hidden transition-colors hover:bg-slate-50"}>
                  <CardContent className="grid gap-3 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <Avatar className="size-12">
                      <AvatarImage src={other?.avatar_url ?? undefined} alt="" />
                      <AvatarFallback name={other?.full_name} />
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="truncate font-bold text-[#262C36]">{other?.full_name || "Buddza Kontakt"}</p>
                        {context ? (
                          <Badge
                            variant={context.isListingOwner ? "default" : "secondary"}
                            className={context.isListingOwner ? "bg-[#F0917B] text-[#262C36]" : ""}
                          >
                            {context.roleLabel}
                          </Badge>
                        ) : null}
                        {context && context.listingStatus !== "active" ? (
                          <Badge variant="amber">{context.listingStatusLabel}</Badge>
                        ) : null}
                      </div>
                      <p className="mt-1 flex min-w-0 items-center gap-1.5 text-sm font-semibold text-[#262C36]/74">
                        <ListChecks className="size-4 shrink-0 text-[#2F7A68]" />
                        <span className="truncate">{context?.listingTitle ?? chat.listing?.title ?? "Inserat"}</span>
                      </p>
                      <p className="mt-1 flex min-w-0 items-center gap-1.5 text-sm text-slate-600">
                        <MessageCircle className="size-4 shrink-0 text-[#F0917B]" />
                        <span className="truncate">
                          {lastMessagePrefix}
                          {lastMessageText}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                      {chat.unread_count > 0 ? (
                        <Badge className="shrink-0 bg-[#F0917B] text-[#262C36]">{chat.unread_count} neu</Badge>
                      ) : (
                        <span className="text-xs font-bold uppercase tracking-normal text-[#262C36]/40">gelesen</span>
                      )}
                      <span className="shrink-0 text-xs text-slate-500">{formatDateTime(chat.updated_at)}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center px-5 py-10 text-center">
            <Inbox className="size-10 text-slate-400" />
            <h2 className="mt-4 text-lg font-bold text-[#262C36]">Noch keine Anfragen</h2>
            <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
              Sobald du ein Inserat kontaktierst oder jemand dich anschreibt, erscheint die Unterhaltung hier.
            </p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}
