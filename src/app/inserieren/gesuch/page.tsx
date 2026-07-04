import Link from "next/link";
import { CalendarDays, CheckCircle2, HeartHandshake, MapPin } from "lucide-react";
import { ConfigNotice } from "@/components/app/config-notice";
import { ListingRequestForm } from "@/components/inserate/listing-request-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { isSupabaseConfigured } from "@/lib/config";
import { getCategories } from "@/lib/inserate";
import { getUser } from "@/lib/supabase/server";

type NewListingRequestPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function NewListingRequestPage({ searchParams }: NewListingRequestPageProps) {
  const params = await searchParams;
  const [categories, user] = await Promise.all([getCategories(), getUser()]);

  if (!user && isSupabaseConfigured) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 items-center px-4 py-10 sm:px-6">
        <Card>
          <CardHeader>
            <CardTitle>Anmeldung erforderlich</CardTitle>
            <CardDescription>Du brauchst ein Konto, um ein Inserat zu erstellen.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/einloggen?next=/inserieren/gesuch">Einloggen</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/registrieren?next=/inserieren/gesuch">Registrieren</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#F5FBF8] px-4 py-8 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_21rem] lg:items-start">
        <section className="space-y-6">
          <div className="overflow-hidden rounded-lg bg-[#202833] p-5 text-white shadow-xl shadow-[#262C36]/12 sm:p-7">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-1.5 text-xs font-black uppercase tracking-normal ring-1 ring-white/18">
              <HeartHandshake className="size-4 text-[#F5C86B]" />
              Tierbetreuung suchen
            </div>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-5xl">
              Ein gutes Gesuch in wenigen Schritten.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/76 sm:text-base">
              Je klarer Tier, Alltag und Zeitraum beschrieben sind, desto schneller melden sich passende Betreuer.
            </p>
          </div>

          {!isSupabaseConfigured ? <ConfigNotice /> : null}

          <ListingRequestForm categories={categories} initialError={params.error} />
        </section>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <div className="rounded-lg border border-[#262C36]/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-[#262C36]">So wird dein Gesuch besser</h2>
            <div className="mt-4 grid gap-3">
              {[
                { icon: MapPin, title: "Privat bleiben", text: "Es reicht die PLZ. Die genaue Adresse gehört erst in die Anfrage." },
                { icon: CalendarDays, title: "Zeitraum nennen", text: "Datum, Dauer und Häufigkeit helfen bei schneller Rückmeldung." },
                { icon: CheckCircle2, title: "Besonderheiten", text: "Medikamente, Ängste, Futter oder Routinen direkt erwähnen." },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-3 rounded-md bg-[#F5FBF8] p-3">
                    <Icon className="mt-0.5 size-5 shrink-0 text-[#2F7A68]" />
                    <div>
                      <p className="font-black text-[#262C36]">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-[#262C36]/64">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-lg border border-[#F0917B]/20 bg-[#FFF1ED] p-5">
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">Danach</p>
            <p className="mt-2 text-sm leading-6 text-[#262C36]/70">
              Sobald jemand dein Inserat anfragt, entsteht automatisch eine Unterhaltung unter “Anfragen”.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
