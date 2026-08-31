/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";
import { ArrowLeft, CalendarDays, LogIn, MapPin, MessageCircle, ShieldCheck, UserPlus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { createNoIndexMetadata, createSeoMetadata } from "@/lib/seo";
import { formatAvailability, formatHourlyRate, getSitterProfileById } from "@/lib/tierbetreuer";
import { getUser } from "@/lib/supabase/server";

type SitterDetailPageProps = {
  params: Promise<{ id: string }>;
};

const getCachedSitterProfileById = cache(getSitterProfileById);

export async function generateMetadata({ params }: SitterDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const sitter = await getCachedSitterProfileById(id);

  if (!sitter) return createNoIndexMetadata("Tierbetreuer nicht gefunden");

  const location = sitter.city ? `${sitter.postal_code} ${sitter.city}` : sitter.postal_code;
  return createSeoMetadata({
    title: sitter.headline,
    description: `${sitter.profile?.full_name || "Tierbetreuer"} bietet Tierbetreuung in ${location} an. Profil, Verfügbarkeit und Stundensatz ansehen.`,
    path: `/tierbetreuer/${sitter.id}`,
    image: sitter.profile_image_url ?? undefined,
    imageAlt: `${sitter.profile?.full_name || "Tierbetreuer"} bei Buddza`,
    keywords: ["Tierbetreuer", "Tiersitter", location, ...sitter.categories.map((category) => category.name)],
  });
}

export default async function SitterDetailPage({ params }: SitterDetailPageProps) {
  const [{ id }, user] = await Promise.all([params, getUser()]);
  const sitter = await getCachedSitterProfileById(id);

  if (!sitter) notFound();

  const isOwnProfile = user?.id === sitter.user_id;
  const next = `/tierbetreuer/${sitter.id}`;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 sm:py-8">
      <Button asChild variant="ghost" className="mb-4">
        <Link href="/tierbetreuer">
          <ArrowLeft />
          Alle Tierbetreuer
        </Link>
      </Button>

      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="overflow-hidden rounded-lg border border-[#262C36]/10 bg-slate-200 shadow-sm">
          <div className="aspect-[4/3]">
            {sitter.profile_image_url ? (
              <img
                src={sitter.profile_image_url}
                alt={`${sitter.profile?.full_name || "Tierbetreuer"} bei Buddza`}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center bg-[#F0917B]/15 text-xl font-black text-[#262C36]">
                Buddza
              </div>
            )}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <Card>
            <CardContent className="space-y-5 p-5 sm:p-6">
              <div className="flex flex-wrap gap-2">
                {sitter.categories.map((category) => (
                  <Badge key={category.id} variant="secondary">{category.name}</Badge>
                ))}
                <Badge>{formatHourlyRate(sitter.hourly_rate_cents)} / Stunde</Badge>
              </div>

              <div>
                <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
                  {sitter.profile?.full_name || "Tierbetreuer"}
                </p>
                <h1 className="mt-1 text-3xl font-black leading-tight tracking-normal text-[#262C36]">
                  {sitter.headline}
                </h1>
                <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-[#262C36]/72">
                  {sitter.description}
                </p>
              </div>

              <Separator />

              <div className="grid gap-3 text-sm text-[#262C36]/72">
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 text-[#D97863]" />
                  {sitter.postal_code} {sitter.city || ""}
                </span>
                <span className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-[#D97863]" />
                  Verfügbar: {formatAvailability(sitter.availability)}
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-[#D97863]" />
                  Betreuung im Umkreis von bis zu {sitter.radius_km} km
                </span>
              </div>

              {isOwnProfile ? (
                <Button asChild className="w-full" variant="secondary">
                  <Link href="/tierbetreuer/neu">Eigenes Profil bearbeiten</Link>
                </Button>
              ) : user ? (
                <div className="rounded-md bg-[#F5FBF8] p-4">
                  <p className="text-sm font-bold text-[#262C36]">Du möchtest diese Betreuung anfragen?</p>
                  <p className="mt-1 text-sm leading-6 text-[#262C36]/68">
                    Erstelle ein Betreuungsgesuch. Darüber könnt ihr anschließend sicher Kontakt aufnehmen.
                  </p>
                  <Button asChild className="mt-3 w-full">
                    <Link href="/inserieren/gesuch">
                      <MessageCircle />
                      Betreuungsgesuch erstellen
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="rounded-md bg-[#F5FBF8] p-4">
                  <p className="text-sm font-bold text-[#262C36]">Kontakt nach kostenloser Anmeldung</p>
                  <p className="mt-1 text-sm leading-6 text-[#262C36]/68">
                    Das vollständige Profil ist öffentlich. Zum Kontaktieren brauchst du ein Buddza-Konto.
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <Button asChild>
                      <Link href={`/registrieren?next=${encodeURIComponent(next)}`}>
                        <UserPlus />
                        Registrieren
                      </Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <Link href={`/einloggen?next=${encodeURIComponent(next)}`}>
                        <LogIn />
                        Einloggen
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </aside>
      </div>
    </main>
  );
}
