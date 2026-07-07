import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  CalendarDays,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  Euro,
  Info,
  MapPin,
  PawPrint,
  ShieldCheck,
} from "lucide-react";
import { AuthMessage } from "@/components/auth/auth-message";
import { ConfigNotice } from "@/components/app/config-notice";
import { MediaDropzone } from "@/components/inserate/media-dropzone";
import { CategoryLimitPicker } from "@/components/tierbetreuer/category-limit-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { SubmitButton } from "@/components/ui/submit-button";
import { Textarea } from "@/components/ui/textarea";
import { createSitterProfileAction } from "@/app/tierbetreuer/actions";
import { isSupabaseConfigured } from "@/lib/config";
import { getCategories } from "@/lib/inserate";
import { createNoIndexMetadata } from "@/lib/seo";
import { getUserSitterProfile, weekdayOptions } from "@/lib/tierbetreuer";
import { getUser } from "@/lib/supabase/server";

export const metadata = createNoIndexMetadata("Tierbetreuer-Profil erstellen");

type NewSitterPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function NewSitterPage({ searchParams }: NewSitterPageProps) {
  const params = await searchParams;
  const [categories, user] = await Promise.all([getCategories(), getUser()]);
  const sitterProfile = user ? await getUserSitterProfile(user.id) : null;

  if (!user && isSupabaseConfigured) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 items-center px-4 py-10 sm:px-6">
        <Card>
          <CardHeader>
            <CardTitle>Anmeldung erforderlich</CardTitle>
            <CardDescription>Du brauchst ein Konto, um Tierbetreuung anzubieten.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/einloggen?next=/tierbetreuer/neu">Einloggen</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/registrieren?next=/tierbetreuer/neu">Registrieren</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="flex-1 bg-[#F5FBF8] px-4 py-8 sm:px-6">
      <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1fr_22rem] lg:items-start">
        <section className="space-y-6">
          <div className="overflow-hidden rounded-lg bg-[#202833] p-5 text-white shadow-xl shadow-[#262C36]/12 sm:p-7">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-1.5 text-xs font-black uppercase tracking-normal ring-1 ring-white/18">
              <PawPrint className="size-4 text-[#F5C86B]" />
              Tierbetreuung anbieten
            </div>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-normal sm:text-5xl">
              {sitterProfile ? "Tierbetreuer-Profil bearbeiten" : "Tierbetreuer-Profil erstellen"}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/76 sm:text-base">
              Zeig klar, für welche Tiere du da bist, wann du Zeit hast und in welchem Umkreis du Anfragen annehmen willst.
            </p>
          </div>

          {!isSupabaseConfigured ? <ConfigNotice /> : null}

          <Card className="overflow-hidden border-[#262C36]/10">
            <CardContent className="p-5 sm:p-6">
              <form action={createSitterProfileAction} className="space-y-8">
                <AuthMessage error={params.error} />

                <section className="grid gap-5 lg:grid-cols-[1fr_18rem]">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F0917B]/16 text-[#D97863]">
                        <BadgeCheck className="size-5" />
                      </span>
                      <div>
                        <h2 className="text-xl font-black text-[#262C36]">1. Auftritt und Vertrauen</h2>
                        <p className="mt-1 text-sm leading-6 text-[#262C36]/62">
                          Dein Titel und deine Beschreibung entscheiden, ob Halter dich sofort einordnen können.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg border border-[#F0917B]/20 bg-[#FFF1ED] p-4 text-sm leading-6 text-[#262C36]/72">
                      <div className="flex gap-2">
                        <Info className="mt-0.5 size-4 shrink-0 text-[#D97863]" />
                        Nenne Erfahrung, Umgang mit Tieren, Grenzen und wie eine typische Betreuung bei dir abläuft.
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="headline">Profil-Titel</Label>
                        <Input
                          id="headline"
                          name="headline"
                          placeholder="z. B. Liebevolle Hundebetreuung am Nachmittag"
                          defaultValue={sitterProfile?.headline}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Beschreibung</Label>
                        <Textarea
                          id="description"
                          name="description"
                          placeholder="Erzähle kurz, welche Erfahrung du hast, wie Betreuung bei dir abläuft und was dir wichtig ist."
                          defaultValue={sitterProfile?.description}
                          className="min-h-40"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#262C36]">
                      <Camera className="size-4 text-[#D97863]" />
                      Profilbild
                    </div>
                    <MediaDropzone
                      name="profileImage"
                      label={sitterProfile ? "Neues Profilbild hochladen" : "Profilbild hochladen"}
                      accept="image/jpeg,image/png,image/webp"
                      kind="image"
                      maxSizeMb={10}
                      required={!sitterProfile}
                    />
                    <p className="text-xs leading-5 text-[#262C36]/56">
                      Ein freundliches, echtes Bild macht dein Profil persönlicher. Beim Bearbeiten kannst du das bestehende Bild behalten.
                    </p>
                  </div>
                </section>

                <section className="space-y-4 border-t border-[#262C36]/10 pt-7">
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#2F7A68]/14 text-[#2F7A68]">
                      <CircleDollarSign className="size-5" />
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-[#262C36]">2. Preis und Region</h2>
                      <p className="mt-1 text-sm leading-6 text-[#262C36]/62">
                        So wissen Halter direkt, ob Entfernung und Budget passen.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="hourlyRate">Pro Stunde</Label>
                      <div className="relative">
                        <Euro className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#D97863]" />
                        <Input
                          id="hourlyRate"
                          name="hourlyRate"
                          type="number"
                          min="0"
                          max="500"
                          step="0.5"
                          placeholder="22"
                          defaultValue={sitterProfile ? String(sitterProfile.hourly_rate_cents / 100) : undefined}
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postalCode">PLZ</Label>
                      <div className="relative">
                        <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#D97863]" />
                        <Input
                          id="postalCode"
                          name="postalCode"
                          inputMode="numeric"
                          pattern="[0-9]{5}"
                          placeholder="10115"
                          defaultValue={sitterProfile?.postal_code}
                          className="pl-9"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="radiusKm">Umkreis</Label>
                      <Select id="radiusKm" name="radiusKm" defaultValue={sitterProfile ? String(sitterProfile.radius_km) : "10"} required>
                        <option value="5">5 km</option>
                        <option value="10">10 km</option>
                        <option value="25">25 km</option>
                        <option value="50">50 km</option>
                        <option value="100">100 km</option>
                        <option value="250">250 km</option>
                      </Select>
                    </div>
                  </div>
                </section>

                <section className="space-y-4 border-t border-[#262C36]/10 pt-7">
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#8FCAD7]/24 text-[#225966]">
                      <CalendarDays className="size-5" />
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-[#262C36]">3. Verfügbarkeit</h2>
                      <p className="mt-1 text-sm leading-6 text-[#262C36]/62">
                        Wähle alle Tage aus, an denen du grundsätzlich Anfragen annehmen möchtest.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
                    {weekdayOptions.map((day) => (
                      <label key={day.value} className="cursor-pointer">
                        <input
                          type="checkbox"
                          name="availability"
                          value={day.value}
                          defaultChecked={sitterProfile?.availability.includes(day.value)}
                          className="peer sr-only"
                        />
                        <span className="flex min-h-12 items-center justify-center rounded-md border border-[#262C36]/12 bg-white px-3 text-sm font-black text-[#262C36] transition-colors peer-checked:border-[#2F7A68] peer-checked:bg-[#2F7A68] peer-checked:text-white">
                          {day.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>

                <section className="space-y-4 border-t border-[#262C36]/10 pt-7">
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F5C86B]/22 text-[#9B6A00]">
                      <PawPrint className="size-5" />
                    </span>
                    <div>
                      <h2 className="text-xl font-black text-[#262C36]">4. Tierkategorien</h2>
                      <p className="mt-1 text-sm leading-6 text-[#262C36]/62">
                        Wähle maximal drei Kategorien, damit dein Profil spezialisiert und glaubwürdig bleibt.
                      </p>
                    </div>
                  </div>

                  <CategoryLimitPicker
                    categories={categories}
                    defaultSelectedIds={sitterProfile?.categories.map((category) => category.id)}
                  />
                </section>

                <div className="flex flex-col-reverse gap-3 border-t border-[#262C36]/10 pt-7 sm:flex-row sm:justify-end">
                  <Button asChild variant="secondary">
                    <Link href="/inserieren">Zurück</Link>
                  </Button>
                  <SubmitButton>Tierbetreuer-Profil speichern</SubmitButton>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <div className="relative min-h-64 overflow-hidden rounded-lg bg-[#202833] text-white shadow-xl shadow-[#262C36]/12">
            <Image
              src="/images/generated/login-dog-hallway.jpg"
              alt="Freundlicher Hund wartet im Flur"
              fill
              sizes="(min-width: 1024px) 22rem, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#111820]/34" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-2xl font-black leading-tight">Dein Profil soll Vertrauen auf den ersten Blick geben.</p>
            </div>
          </div>

          <div className="rounded-lg border border-[#262C36]/10 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-black text-[#262C36]">Profil-Check</h2>
            <div className="mt-4 grid gap-3">
              {[
                "Profilbild wirkt freundlich und klar",
                "Beschreibung nennt Erfahrung und Grenzen",
                "Preis, PLZ und Umkreis sind eindeutig",
                "Maximal drei Tierkategorien ausgewählt",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm font-bold leading-6 text-[#262C36]/70">
                  <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#2F7A68]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#F0917B]/20 bg-[#FFF1ED] p-5">
            <div className="flex items-start gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F0917B]/16 text-[#D97863]">
                <ShieldCheck className="size-5" />
              </span>
              <p className="text-sm leading-6 text-[#262C36]/70">
                Im Profil erscheint nur deine PLZ-Region. Genaue Adressen klärt ihr erst in der Anfrage.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
