import Link from "next/link";
import { Plus } from "lucide-react";
import { EmptyListings } from "@/components/inserate/empty-listings";
import { ListingCard } from "@/components/inserate/listing-card";
import { SearchPanel } from "@/components/inserate/search-panel";
import { Button } from "@/components/ui/button";
import { getCategories, getListings } from "@/lib/inserate";
import { getUser } from "@/lib/supabase/server";

type ListingsPageProps = {
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

export default async function ListingsPage({ searchParams }: ListingsPageProps) {
  const params = await searchParams;
  const user = await getUser();
  const postalCode = params.postalCode?.match(/^[0-9]{5}$/) ? params.postalCode : undefined;
  const radius = parseRadius(params.radius);
  const category = params.category || undefined;

  const [categories, listings] = await Promise.all([
    getCategories(),
    getListings({ postalCode, radiusKm: radius, categorySlug: category }),
  ]);

  return (
    <main className="flex-1 bg-[#fbf8f4]">
      <section className="border-b border-[#262C36]/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-normal text-[#F0917B]">Inserate finden</p>
              <h1 className="mt-2 text-3xl font-black tracking-normal text-[#262C36] sm:text-4xl">
                Betreuungsgesuche in deiner Nähe
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#262C36]/68">
                Suche per PLZ und Radius, filtere nach Tierart und öffne passende Gesuche direkt aus der Liste.
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
                ? `${listings.length} Treffer im Umkreis von ${radius} km um ${postalCode}`
                : `${listings.length} aktive Gesuche aus Deutschland`}
            </p>
          </div>
        </div>

        {listings.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <EmptyListings />
        )}
      </section>
    </main>
  );
}
