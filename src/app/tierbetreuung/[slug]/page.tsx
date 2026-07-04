import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, SearchX } from "lucide-react";
import { ListingCard } from "@/components/inserate/listing-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categoryPages, getCategoryPage } from "@/lib/category-pages";
import { getListings } from "@/lib/inserate";

type CategoryCarePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return categoryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: CategoryCarePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getCategoryPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: `${page.title} - Buddza`,
    description: `${page.title}: ${page.intro}`,
  };
}

export default async function CategoryCarePage({ params }: CategoryCarePageProps) {
  const { slug } = await params;
  const page = getCategoryPage(slug);

  if (!page) {
    notFound();
  }

  const listings = await getListings({ categorySlug: page.categorySlug });

  return (
    <main className="flex-1 bg-[#fbf8f4]">
      <section className="border-b border-[#262C36]/10 bg-[#202833] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Badge className="bg-white/14 text-white ring-1 ring-white/18">{page.categoryName}</Badge>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            {page.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/76 sm:text-lg">
            {page.intro}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={`/inserate?category=${page.categorySlug}`}>
                Inserate ansehen
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/inserieren">Inserat erstellen</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">
              Aktuelle Inserate
            </p>
            <h2 className="mt-1 text-2xl font-black tracking-normal text-[#262C36]">
              {page.title}: passende Gesuche
            </h2>
          </div>
          <Button asChild variant="secondary">
            <Link href={`/inserate?category=${page.categorySlug}`}>
              Alle gefilterten Inserate
              <ArrowRight />
            </Link>
          </Button>
        </div>

        {listings.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-slate-300 bg-white px-5 py-10 text-center">
            <SearchX className="mx-auto size-9 text-slate-400" />
            <h3 className="mt-4 text-lg font-bold text-[#262C36]">Noch keine passenden Inserate</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">
              Für diese Kategorie gibt es gerade keine aktiven Gesuche. Du kannst direkt das erste Inserat erstellen.
            </p>
            <Button asChild className="mt-5">
              <Link href="/inserieren">Inserat erstellen</Link>
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
