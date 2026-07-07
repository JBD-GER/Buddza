import Link from "next/link";
import { ArrowRight, HandHeart, Inbox, ListChecks, Plus, Sparkles } from "lucide-react";
import { ConfigNotice } from "@/components/app/config-notice";
import { ListingCard } from "@/components/inserate/listing-card";
import { ListingOwnerActions } from "@/components/inserate/listing-owner-actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getChatContext, getChatSummaries } from "@/lib/anfragen";
import { isSupabaseConfigured } from "@/lib/config";
import { getUserListings } from "@/lib/inserate";
import { createNoIndexMetadata } from "@/lib/seo";
import { formatAvailability, formatHourlyRate, getUserSitterProfile } from "@/lib/tierbetreuer";
import { getUser } from "@/lib/supabase/server";
import { formatDateTime } from "@/lib/utils";

export const metadata = createNoIndexMetadata("Übersicht");

type DashboardPageProps = {
  searchParams: Promise<{ error?: string; inserat?: string; tierbetreuer?: string }>;
};

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const query = await searchParams;
  const user = await getUser();
  const [listings, sitterProfile, chats] = user
    ? await Promise.all([getUserListings(user.id), getUserSitterProfile(user.id), getChatSummaries(user.id)])
    : [[], null, []];
  const latestChats = chats.slice(0, 3);
  const unreadCount = chats.reduce((sum, chat) => sum + chat.unread_count, 0);
  const activeListingsCount = listings.filter((listing) => listing.status === "active").length;
  const pausedListingsCount = listings.filter((listing) => listing.status === "paused").length;
  const listingStatusMessage =
    query.inserat === "aktiviert"
      ? "Dein Inserat ist wieder aktiv."
      : query.inserat === "pausiert"
        ? "Dein Inserat ist pausiert und wird nicht öffentlich angezeigt."
        : query.inserat === "geloescht"
          ? "Dein Inserat wurde komplett gelöscht."
          : null;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
      <section className="mb-5 overflow-hidden rounded-lg bg-[#202833] p-5 text-white shadow-xl shadow-[#262C36]/12 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-1.5 text-xs font-black uppercase tracking-normal ring-1 ring-white/18">
              <Sparkles className="size-4 text-[#F5C86B]" />
              Übersicht
            </div>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-5xl">
              Bereit für deine nächste Tierbetreuung?
            </h1>
            <p className="mt-3 text-sm leading-6 text-white/72 sm:text-base">
              {user?.email
                ? `Angemeldet als ${user.email}.`
                : "Verbinde Supabase, um echte Kontodaten zu sehen."}{" "}
              Gesuche, Tierbetreuer-Profil und Anfragen laufen hier zusammen.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg" className="w-full sm:w-auto lg:w-56">
              <Link href="/inserieren">
                <Plus />
                Inserat erstellen
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto lg:w-56">
              <Link href="/anfragen">
                <Inbox />
                Anfragen öffnen
                {unreadCount > 0 ? (
                  <span className="ml-auto rounded-full bg-[#F0917B] px-2 py-0.5 text-xs font-black text-[#262C36]">
                    {unreadCount}
                  </span>
                ) : null}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {!isSupabaseConfigured ? (
        <div className="mb-5">
          <ConfigNotice />
        </div>
      ) : null}

      {query.tierbetreuer === "erstellt" ? (
        <div className="mb-5 rounded-lg border border-[#2F7A68]/20 bg-[#F5FBF8] px-4 py-3 text-sm font-bold text-[#235F51]">
          Dein Tierbetreuer-Profil ist aktiv.
        </div>
      ) : null}

      {listingStatusMessage ? (
        <div className="mb-5 rounded-lg border border-[#2F7A68]/20 bg-[#F5FBF8] px-4 py-3 text-sm font-bold text-[#235F51]">
          {listingStatusMessage}
        </div>
      ) : null}

      {query.error ? (
        <div className="mb-5 rounded-lg border border-[#D97863]/25 bg-[#FFF1ED] px-4 py-3 text-sm font-bold text-[#8B3B2F]">
          {query.error}
        </div>
      ) : null}

      <section className="mb-8 grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <span className="flex size-11 items-center justify-center rounded-md bg-[#F0917B]/16 text-[#D97863]">
              <ListChecks className="size-5" />
            </span>
            <div>
              <p className="text-2xl font-black text-[#262C36]">{listings.length}</p>
              <p className="text-sm font-bold text-[#262C36]/62">
                Inserate · {activeListingsCount} aktiv
                {pausedListingsCount ? ` · ${pausedListingsCount} pausiert` : ""}
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <span className="flex size-11 items-center justify-center rounded-md bg-[#2F7A68]/14 text-[#2F7A68]">
              <HandHeart className="size-5" />
            </span>
            <div>
              <p className="text-2xl font-black text-[#262C36]">{sitterProfile ? "Aktiv" : "Offen"}</p>
              <p className="text-sm font-bold text-[#262C36]/62">Tierbetreuer</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-3 p-4">
            <span className="flex size-11 items-center justify-center rounded-md bg-[#8FCAD7]/22 text-[#225966]">
              <Inbox className="size-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-2xl font-black text-[#262C36]">{chats.length}</p>
              <p className="text-sm font-bold text-[#262C36]/62">Anfragen</p>
            </div>
            {unreadCount > 0 ? (
              <Badge className="shrink-0 bg-[#F0917B] text-[#262C36]">{unreadCount} neu</Badge>
            ) : null}
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section id="inserate" className="space-y-4">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">Inserate</p>
              <h2 className="text-2xl font-black text-[#262C36]">Meine Gesuche</h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/inserieren">
                Neu inserieren
                <ArrowRight />
              </Link>
            </Button>
          </div>

          {listings.length ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {listings.map((listing) => (
                <div key={listing.id} className="overflow-hidden rounded-lg">
                  <ListingCard listing={listing} />
                  <ListingOwnerActions listing={listing} />
                </div>
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Noch keine Inserate</CardTitle>
                <CardDescription>Erstelle dein erstes Gesuch und erscheine sofort in Feed und Karte.</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <Link href="/inserieren">Inserat erstellen</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </section>

        <aside className="space-y-6">
          <section id="tierbetreuer" className="space-y-4">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">Tierbetreuer</p>
              <h2 className="text-2xl font-black text-[#262C36]">Dein Angebot</h2>
            </div>

            {sitterProfile ? (
              <Card>
                <CardContent className="space-y-4 p-5">
                  <div>
                    <h3 className="text-lg font-black leading-tight text-[#262C36]">{sitterProfile.headline}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#262C36]/66">{sitterProfile.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sitterProfile.categories.map((category) => (
                      <Badge key={category.id} variant="secondary">
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                  <div className="grid gap-2 text-sm font-bold text-[#262C36]/68">
                    <span>{formatHourlyRate(sitterProfile.hourly_rate_cents)} pro Stunde</span>
                    <span>{formatAvailability(sitterProfile.availability)}</span>
                    <span>
                      {sitterProfile.postal_code} {sitterProfile.city ? sitterProfile.city : ""} · {sitterProfile.radius_km} km
                    </span>
                  </div>
                  <Button asChild variant="secondary" className="w-full">
                    <Link href="/tierbetreuer/neu">Profil bearbeiten</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Betreuung anbieten</CardTitle>
                  <CardDescription>Erstelle ein Profil mit Bild, Zeiten, Preis, Umkreis und bis zu drei Tierkategorien.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link href="/tierbetreuer/neu">Tierbetreuer-Profil erstellen</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </section>

          <section className="space-y-4">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#225966]">Anfragen</p>
              <h2 className="text-2xl font-black text-[#262C36]">Neue Gespräche</h2>
            </div>

            {latestChats.length ? (
              <div className="grid gap-3">
                {latestChats.map((chat) => {
                  const context = user ? getChatContext(chat, user.id) : null;
                  const other = context?.other;

                  return (
                    <Link key={chat.id} href={`/anfragen/${chat.id}`} className="block">
                      <Card className="transition-colors hover:bg-[#F5FBF8]">
                        <CardContent className="flex items-center gap-3 p-4">
                          <Avatar>
                            <AvatarImage src={other?.avatar_url ?? undefined} alt="" />
                            <AvatarFallback name={other?.full_name} />
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="truncate font-black text-[#262C36]">{other?.full_name || "Buddza Kontakt"}</p>
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
                            <p className="mt-1 flex min-w-0 items-center gap-1.5 text-sm text-[#262C36]/62">
                              <ListChecks className="size-4 shrink-0 text-[#2F7A68]" />
                              <span className="truncate">{context?.listingTitle ?? chat.listing?.title ?? "Inserat"}</span>
                            </p>
                          </div>
                          <div className="flex shrink-0 flex-col items-end gap-2">
                            {chat.unread_count > 0 ? (
                              <Badge className="bg-[#F0917B] text-[#262C36]">{chat.unread_count}</Badge>
                            ) : null}
                            <span className="text-xs text-[#262C36]/48">{formatDateTime(chat.updated_at)}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
                <Button asChild variant="secondary">
                  <Link href="/anfragen">Alle Anfragen ansehen</Link>
                </Button>
              </div>
            ) : (
              <Card>
                <CardContent className="p-5">
                  <p className="text-sm leading-6 text-[#262C36]/66">
                    Sobald du ein Inserat kontaktierst oder jemand dich anschreibt, entsteht hier eine Anfrage mit Unterhaltung.
                  </p>
                </CardContent>
              </Card>
            )}
          </section>
        </aside>
      </div>
    </main>
  );
}
