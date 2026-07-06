import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, CheckCircle2, MapPin, SearchX, ShieldCheck } from "lucide-react";
import { ListingCard } from "@/components/inserate/listing-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { categoryPages, getCategoryPage } from "@/lib/category-pages";
import { getListings } from "@/lib/inserate";
import { getGuideTopicsByCareCategory } from "@/lib/ratgeber";
import { absoluteUrl, buildTitle, jsonLdScript } from "@/lib/seo";

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
    title: buildTitle(`${page.title} finden`),
    description: `${page.title}: Betreuung per PLZ suchen, Inserate finden und passende Hilfe für ${page.categoryName.toLowerCase()} organisieren. ${page.intro}`,
    alternates: {
      canonical: `/tierbetreuung/${page.slug}`,
    },
    openGraph: {
      title: `${page.title} finden`,
      description: page.intro,
      url: `/tierbetreuung/${page.slug}`,
      type: "website",
    },
  };
}

export default async function CategoryCarePage({ params }: CategoryCarePageProps) {
  const { slug } = await params;
  const page = getCategoryPage(slug);

  if (!page) {
    notFound();
  }

  const listings = await getListings({ categorySlug: page.categorySlug });
  const guideTopics = getGuideTopicsByCareCategory(page.categorySlug);
  const faqItems = [
    {
      question: `Wie finde ich ${page.title}?`,
      answer:
        "Starte mit deiner PLZ, wähle einen passenden Radius und prüfe Inserate nach Tierart, Aufgabe, Zeitraum und Betreuungsort.",
    },
    {
      question: "Welche Angaben gehören in ein gutes Inserat?",
      answer:
        "Hilfreich sind Tierart, Alter, Verhalten, Zeitraum, Dauer, PLZ-Region, gewünschter Ablauf und wichtige Hinweise zu Futter, Gesundheit oder Routinen.",
    },
    {
      question: "Bleibt meine Adresse öffentlich sichtbar?",
      answer:
        "Nein. Buddza arbeitet öffentlich mit PLZ-Regionen. Genaue Adressen gehören erst in eine direkte Anfrage, wenn beide Seiten weiter planen möchten.",
    },
  ];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      serviceType: "Tierbetreuung",
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      provider: {
        "@type": "Organization",
        name: "Buddza",
        url: absoluteUrl("/"),
      },
      url: absoluteUrl(`/tierbetreuung/${page.slug}`),
      description: page.intro,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Tierbetreuung",
          item: absoluteUrl("/inserate"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: absoluteUrl(`/tierbetreuung/${page.slug}`),
        },
      ],
    },
  ];

  return (
    <main className="flex-1 bg-[#fbf8f4]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="border-b border-[#262C36]/10 bg-[#202833] text-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Badge className="bg-white/14 text-white ring-1 ring-white/18">{page.categoryName}</Badge>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal [overflow-wrap:anywhere] sm:text-5xl">
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

      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
              {page.title} in Deutschland
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Lokal suchen, klar abstimmen, passend betreuen.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262C36]/70">
              Buddza verbindet Betreuungsgesuche mit Menschen in erreichbarer Nähe.
              Die Suche beginnt bewusst mit PLZ und Radius, damit die genaue Adresse privat bleibt.
              Für {page.categoryName.toLowerCase()} zählt vor allem, dass Aufgabe, Erfahrung und Alltag zusammenpassen.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              "PLZ-Region statt öffentlicher Adresse",
              "Direkt passende Inserate nach Tierart filtern",
              "Routinen, Zeiten und Besonderheiten vorab klären",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-lg border border-[#262C36]/10 bg-[#F5FBF8] p-4"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#2F7A68]" />
                <p className="text-sm font-bold leading-6 text-[#262C36]/74">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBF8] py-8 sm:py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 sm:px-6 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <MapPin className="size-6 text-[#D97863]" />
            <h2 className="mt-3 text-xl font-black text-[#262C36]">Region wählen</h2>
            <p className="mt-2 text-sm leading-6 text-[#262C36]/66">
              Gib eine PLZ ein und entscheide, welcher Umkreis für die Betreuung realistisch ist.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <ShieldCheck className="size-6 text-[#2F7A68]" />
            <h2 className="mt-3 text-xl font-black text-[#262C36]">Passung prüfen</h2>
            <p className="mt-2 text-sm leading-6 text-[#262C36]/66">
              Achte auf Erfahrung, Verfügbarkeit, Tierart, Betreuungsort und klare Absprachen.
            </p>
          </div>
          <div className="rounded-lg bg-white p-5 shadow-sm">
            <BookOpen className="size-6 text-[#D97863]" />
            <h2 className="mt-3 text-xl font-black text-[#262C36]">Gut vorbereiten</h2>
            <p className="mt-2 text-sm leading-6 text-[#262C36]/66">
              Ratgeber und Checklisten helfen bei Übergabe, Notfallkontakten und Routinen.
            </p>
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

      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">Ratgeber</p>
              <h2 className="mt-1 text-2xl font-black tracking-normal text-[#262C36]">
                Mehr zu {page.categoryName.toLowerCase()} und Betreuung
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/ratgeber">
                Alle Ratgeber
                <ArrowRight />
              </Link>
            </Button>
          </div>

          {guideTopics.length ? (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {guideTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/ratgeber/${topic.slug}`}
                  className="overflow-hidden rounded-lg border border-[#262C36]/10 bg-[#FAF7F2] shadow-sm hover:border-[#F0917B]/45"
                >
                  {topic.image ? (
                    <div className="relative aspect-[16/9] bg-[#F5FBF8]">
                      <Image
                        src={topic.image.src}
                        alt={topic.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-4">
                    <h3 className="text-base font-black leading-tight text-[#262C36] [overflow-wrap:anywhere]">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#262C36]/64">{topic.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-6 text-[#262C36]/66">
              Weitere Ratgeber zu dieser Tierart sind in Vorbereitung.
            </p>
          )}
        </div>
      </section>

      <section className="bg-[#F5FBF8] py-8 sm:py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-3 md:grid-cols-3">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-lg bg-white p-5 shadow-sm">
                <h2 className="text-lg font-black leading-tight text-[#262C36]">{item.question}</h2>
                <p className="mt-2 text-sm leading-6 text-[#262C36]/66">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
