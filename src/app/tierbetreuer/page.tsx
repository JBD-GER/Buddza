import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HandHeart, MapPin, Plus, Search, SearchX } from "lucide-react";
import { SitterCard } from "@/components/tierbetreuer/sitter-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { getCategories } from "@/lib/inserate";
import { absoluteUrl, createSeoMetadata, jsonLdScript, toAbsoluteUrl } from "@/lib/seo";
import { getSitters } from "@/lib/tierbetreuer";
import { getUser } from "@/lib/supabase/server";

export const metadata = createSeoMetadata({
  title: "Tierbetreuer finden",
  description:
    "Tierbetreuer in deiner Nähe finden: Profile nach PLZ, Radius und Tierart suchen, Verfügbarkeit prüfen und passende Betreuung kontaktieren.",
  path: "/tierbetreuer",
  keywords: ["Tierbetreuer finden", "Tierbetreuung anbieten", "Haustiersitter", "Hundesitter", "Katzensitter", "PLZ Suche"],
});

type SittersPageProps = {
  searchParams: Promise<{
    postalCode?: string;
    radius?: string;
    category?: string;
  }>;
};

function parseRadius(value?: string) {
  const radius = Number(value ?? 50);
  return [5, 10, 25, 50, 100, 250].includes(radius) ? radius : 50;
}

export default async function SittersPage({ searchParams }: SittersPageProps) {
  const params = await searchParams;
  const user = await getUser();
  const postalCode = params.postalCode?.match(/^[0-9]{5}$/) ? params.postalCode : undefined;
  const radius = parseRadius(params.radius);
  const category = params.category || undefined;

  const [categories, sitters] = await Promise.all([
    getCategories(),
    getSitters({ postalCode, radiusKm: radius, categorySlug: category }),
  ]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tierbetreuer finden",
    url: absoluteUrl("/tierbetreuer"),
    description:
      "Aktive Tierbetreuer-Profile mit PLZ-Region, Radius, Tierkategorien, Verfügbarkeit und Stundensatz.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: sitters.slice(0, 24).map((sitter, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: sitter.headline,
          description: sitter.description,
          image: toAbsoluteUrl(sitter.profile_image_url),
          serviceType: "Tierbetreuung",
          areaServed: sitter.city ? `${sitter.postal_code} ${sitter.city}` : sitter.postal_code,
          offers: {
            "@type": "Offer",
            price: (sitter.hourly_rate_cents / 100).toFixed(2),
            priceCurrency: "EUR",
            unitText: "Stunde",
          },
          provider: {
            "@type": "Person",
            name: sitter.profile?.full_name ?? "Buddza Tierbetreuer",
          },
        },
      })),
    },
  };

  return (
    <main className="flex-1 bg-[#fbf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="relative isolate overflow-hidden bg-[#202833] text-white">
        <Image
          src="/images/generated/dogs-ages-hero.jpg"
          alt="Hunde verschiedener Altersstufen zuhause"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111820]/62" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-1.5 text-xs font-black uppercase tracking-normal ring-1 ring-white/18 backdrop-blur">
              <HandHeart className="size-4 text-[#F5C86B]" />
              Tierbetreuer
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Tierbetreuer in deiner Nähe
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/78">
              Finde Menschen, die Betreuung anbieten, ihren Umkreis nennen und klar zeigen,
              für welche Tiere sie da sind.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#262C36]/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          <form action="/tierbetreuer" className="grid gap-3 lg:grid-cols-[1fr_11rem_1fr_auto]">
            <label className="sr-only" htmlFor="postalCode">
              Postleitzahl
            </label>
            <div className="relative">
              <MapPin className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#D97863]" />
              <Input
                id="postalCode"
                name="postalCode"
                inputMode="numeric"
                pattern="[0-9]{5}"
                defaultValue={postalCode}
                placeholder="PLZ"
                className="pl-9"
              />
            </div>

            <label className="sr-only" htmlFor="radius">
              Radius
            </label>
            <Select id="radius" name="radius" defaultValue={String(radius)}>
              <option value="5">5 km</option>
              <option value="10">10 km</option>
              <option value="25">25 km</option>
              <option value="50">50 km</option>
              <option value="100">100 km</option>
              <option value="250">250 km</option>
            </Select>

            <label className="sr-only" htmlFor="category">
              Tierart
            </label>
            <Select id="category" name="category" defaultValue={category ?? ""}>
              <option value="">Alle Tierarten</option>
              {categories.map((item) => (
                <option key={item.id} value={item.slug}>
                  {item.name}
                </option>
              ))}
            </Select>

            <Button>
              <Search />
              Suchen
            </Button>
          </form>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-black tracking-normal text-[#262C36]">Aktive Tierbetreuer</h2>
            <p className="mt-1 text-sm text-[#262C36]/60">
              {postalCode
                ? `${sitters.length} Treffer im Umkreis von ${radius} km um ${postalCode}`
                : `${sitters.length} Tierbetreuer mit aktivem Profil`}
            </p>
          </div>
          <Button asChild>
            <Link href={user ? "/tierbetreuer/neu" : "/registrieren?next=/tierbetreuer/neu"}>
              <Plus />
              Betreuung anbieten
            </Link>
          </Button>
        </div>

        {sitters.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sitters.map((sitter) => (
              <SitterCard key={sitter.id} sitter={sitter} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
            <SearchX className="mx-auto size-9 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-[#262C36]">Keine passenden Tierbetreuer</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Erweitere den Radius oder erstelle das erste Betreuer-Profil in deiner Region.
            </p>
            <Button asChild className="mt-5">
              <Link href={user ? "/tierbetreuer/neu" : "/registrieren?next=/tierbetreuer/neu"}>Betreuung anbieten</Link>
            </Button>
          </div>
        )}
      </section>

      <section className="bg-[#F5FBF8] py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-black text-[#262C36]">Du willst selbst Tierbetreuung anbieten?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#262C36]/68">
              Erstelle dein Profil mit Bild, Zeiten, Radius und bis zu drei Tierkategorien.
            </p>
          </div>
          <Button asChild variant="secondary">
            <Link href={user ? "/tierbetreuer/neu" : "/registrieren?next=/tierbetreuer/neu"}>
              Profil erstellen
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
