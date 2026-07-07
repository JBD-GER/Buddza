import Link from "next/link";
import { Fragment } from "react";
import { Plus } from "lucide-react";
import { GoogleAdSenseUnit } from "@/components/ads/google-adsense";
import { EmptyListings } from "@/components/inserate/empty-listings";
import { ListingCard } from "@/components/inserate/listing-card";
import { SearchPanel } from "@/components/inserate/search-panel";
import { Button } from "@/components/ui/button";
import { getGoogleAdSenseSlot } from "@/lib/google-adsense";
import { careLocationLabels } from "@/lib/labels";
import { getCategories, getListings } from "@/lib/inserate";
import { absoluteUrl, createSeoMetadata, jsonLdScript, toAbsoluteUrl } from "@/lib/seo";
import { getUser } from "@/lib/supabase/server";
import type { CareLocation } from "@/lib/types";

export const metadata = createSeoMetadata({
  title: "Tierbetreuung finden",
  description:
    "Aktuelle Betreuungsgesuche für Haustiere in Deutschland finden: Suche per PLZ, Radius und Tierart nach passenden Inseraten auf Buddza.",
  path: "/inserate",
  keywords: ["Tierbetreuung finden", "Betreuungsgesuche", "Haustierbetreuung", "Hundesitter", "Katzensitter", "PLZ Suche"],
});

type ListingsPageProps = {
  searchParams: Promise<{
    postalCode?: string;
    radius?: string;
    category?: string;
    careLocation?: string;
  }>;
};

function parseRadius(value?: string) {
  const radius = Number(value ?? 50);
  return [5, 10, 25, 50, 100, 250].includes(radius) ? radius : 50;
}

function parseCareLocation(value?: string): CareLocation | undefined {
  return value && value in careLocationLabels ? (value as CareLocation) : undefined;
}

export default async function ListingsPage({ searchParams }: ListingsPageProps) {
  const params = await searchParams;
  const postalCode = params.postalCode?.match(/^[0-9]{5}$/) ? params.postalCode : undefined;
  const radius = parseRadius(params.radius);
  const category = params.category || undefined;
  const careLocation = parseCareLocation(params.careLocation);

  const [user, categories, listings] = await Promise.all([
    getUser(),
    getCategories(),
    getListings({ postalCode, radiusKm: radius, categorySlug: category, careLocation }),
  ]);
  const feedAdSlot = getGoogleAdSenseSlot("listingsFeed");
  const feedAdIndex = listings.length >= 6 ? 5 : listings.length >= 3 ? listings.length - 1 : -1;
  const activeFilterLabel = careLocation ? ` · ${careLocationLabels[careLocation]}` : "";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Tierbetreuung finden",
    url: absoluteUrl("/inserate"),
    description:
      "Aktuelle Betreuungsgesuche für Haustiere mit PLZ-basierter Suche nach Radius und Tierart.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: listings.slice(0, 24).map((listing, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/inserate/${listing.id}`),
        item: {
          "@type": "CreativeWork",
          name: listing.title,
          description: listing.description,
          image: toAbsoluteUrl(listing.main_image_url),
          datePublished: listing.created_at,
          about: listing.category_name,
          spatialCoverage: listing.city
            ? `${listing.postal_code} ${listing.city}`
            : listing.postal_code,
        },
      })),
    },
  };

  return (
    <main className="flex-1 bg-[#fbf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="border-b border-[#262C36]/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-[#F0917B]">Inserate finden</p>
              <h1 className="mt-2 text-3xl font-black tracking-normal text-[#262C36] sm:text-4xl">
                Betreuungsgesuche in deiner Nähe
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#262C36]/68">
                Suche per PLZ und Radius, filtere nach Tierart und Betreuungsort und öffne passende Gesuche direkt aus der Liste.
              </p>
            </div>
            <Button asChild>
              <Link href={user ? "/inserieren" : "/registrieren?next=/inserieren"}>
                <Plus />
                Inserat erstellen
              </Link>
            </Button>
          </div>

          <SearchPanel
            categories={categories}
            defaults={{
              postalCode,
              radius: String(radius),
              category,
              careLocation,
            }}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-black tracking-normal text-[#262C36]">Aktuelle Gesuche</h2>
            <p className="mt-1 text-sm text-[#262C36]/60">
              {postalCode
                ? `${listings.length} Treffer im Umkreis von ${radius} km um ${postalCode}${activeFilterLabel}`
                : `${listings.length} aktive Gesuche aus Deutschland${activeFilterLabel}`}
            </p>
          </div>
        </div>

        {listings.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing, index) => (
              <Fragment key={listing.id}>
                <ListingCard listing={listing} />
                {feedAdSlot && index === feedAdIndex ? (
                  <div className="sm:col-span-2 lg:col-span-3">
                    <GoogleAdSenseUnit
                      client={feedAdSlot.client}
                      slot={feedAdSlot.slot}
                      variant="feed"
                    />
                  </div>
                ) : null}
              </Fragment>
            ))}
          </div>
        ) : (
          <EmptyListings />
        )}
      </section>
    </main>
  );
}
