import Link from "next/link";
import { HandHeart, Search, Sparkles } from "lucide-react";
import { ConfigNotice } from "@/components/app/config-notice";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { isSupabaseConfigured } from "@/lib/config";
import { getUser } from "@/lib/supabase/server";

export default async function NewListingPage() {
  const user = await getUser();

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
              <Link href="/einloggen?next=/inserieren">Einloggen</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/registrieren?next=/inserieren">Registrieren</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#F5FBF8] px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-6 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-black uppercase tracking-normal text-[#2F7A68] shadow-sm">
            <Sparkles className="size-4" />
            Neuer Eintrag
          </div>
          <h1 className="text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-5xl">
            Was möchtest du inserieren?
          </h1>
          <p className="text-sm leading-6 text-[#262C36]/68 sm:text-base">
            Starte mit einem Gesuch, wenn du Betreuung brauchst. Oder erstelle ein
            Tierbetreuer-Profil, wenn du Betreuung anbieten willst.
          </p>
          {!isSupabaseConfigured ? <ConfigNotice /> : null}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Link href="/inserieren/gesuch" className="group block h-full">
            <Card className="h-full overflow-hidden border-[#262C36]/10 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="grid h-full gap-5 p-5 sm:p-6">
                <span className="flex size-12 items-center justify-center rounded-md bg-[#F0917B]/16 text-[#D97863]">
                  <Search className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">Ich suche</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-[#262C36]">
                    Tierbetreuung suchen
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#262C36]/68">
                    Erstelle ein Gesuch mit Tierart, Ort, Zeitraum, Bildern und allem,
                    was Betreuer vorher wissen sollen.
                  </p>
                </div>
                <Button className="w-full sm:w-fit">
                  Gesuch erstellen
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/tierbetreuer/neu" className="group block h-full">
            <Card className="h-full overflow-hidden border-[#262C36]/10 bg-white transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="grid h-full gap-5 p-5 sm:p-6">
                <span className="flex size-12 items-center justify-center rounded-md bg-[#2F7A68]/14 text-[#2F7A68]">
                  <HandHeart className="size-6" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">Ich biete an</p>
                  <h2 className="mt-2 text-2xl font-black leading-tight text-[#262C36]">
                    Tierbetreuung anbieten
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-[#262C36]/68">
                    Lege dein Profil mit Foto, Verfügbarkeit, Stundensatz, Umkreis
                    und bis zu drei Tierkategorien an.
                  </p>
                </div>
                <Button variant="secondary" className="w-full sm:w-fit">
                  Profil erstellen
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </main>
  );
}
