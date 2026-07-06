import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, FolderOpen, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { guideCategories, guideTopics } from "@/lib/ratgeber";
import { absoluteUrl, buildTitle, jsonLdScript } from "@/lib/seo";

export const metadata: Metadata = {
  title: buildTitle("Ratgeber für Tierbetreuung"),
  description:
    "Buddza Ratgeber für Tierbetreuung: Checklisten, Tipps und Planung für Hund, Katze, Kleintiere, Aquarium, Pferd, Hof und Exoten.",
  alternates: {
    canonical: "/ratgeber",
  },
  openGraph: {
    title: "Ratgeber für Tierbetreuung",
    description:
      "Praktische Tipps und Checklisten für Betreuung, Übergabe, PLZ-Suche, Tierarten und sichere Absprachen.",
    url: "/ratgeber",
    type: "website",
  },
};

export default function GuideIndexPage() {
  const featuredTopics = guideTopics.slice(0, 8);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Buddza Ratgeber",
    url: absoluteUrl("/ratgeber"),
    description:
      "Ratgeber und Checklisten für Tierbetreuung, Betreuungsgesuche, Tierbetreuer-Profile und sichere Übergaben.",
    blogPost: guideTopics.map((topic) => ({
      "@type": "BlogPosting",
      headline: topic.title,
      url: absoluteUrl(`/ratgeber/${topic.slug}`),
      datePublished: topic.publishedAt,
      image: topic.image ? absoluteUrl(topic.image.src) : undefined,
    })),
  };

  return (
    <main className="flex-1 bg-[#fbf8f4] text-[#262C36]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="bg-[#202833] text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <Badge className="bg-white/14 text-white ring-1 ring-white/18">
              <BookOpen className="mr-1 size-3" />
              Ratgeber
            </Badge>
            <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-normal [overflow-wrap:anywhere] sm:text-5xl">
              Tierbetreuung besser planen.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
              Checklisten, klare Übergaben und praktische Tipps für Halter und Tierbetreuer.
              Von Hundebetreuung bis Aquarium, von PLZ-Suche bis Notfallkontakt.
            </p>
          </div>
          <div className="grid gap-2 rounded-lg bg-white/10 p-3 ring-1 ring-white/14 sm:grid-cols-3">
            <div className="rounded-md bg-white/10 p-3">
              <p className="text-2xl font-black">{guideTopics.length}</p>
              <p className="text-xs font-bold uppercase tracking-normal text-white/68">Themen</p>
            </div>
            <div className="rounded-md bg-white/10 p-3">
              <p className="text-2xl font-black">{guideCategories.length}</p>
              <p className="text-xs font-bold uppercase tracking-normal text-white/68">Kategorien</p>
            </div>
            <div className="rounded-md bg-white/10 p-3">
              <p className="text-2xl font-black">2026</p>
              <p className="text-xs font-bold uppercase tracking-normal text-white/68">Buddza Start</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">Kategorien</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal sm:text-3xl">Schnell einsteigen</h2>
          </div>
          <Button asChild variant="secondary">
            <Link href="#alle-themen">
              Alle Themen
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {guideCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/ratgeber/kategorie/${category.slug}`}
              className="group rounded-lg border border-[#262C36]/10 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F0917B]/50"
            >
              <FolderOpen className="size-5 text-[#D97863]" />
              <h3 className="mt-3 text-base font-black leading-snug">{category.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#262C36]/64">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-8 sm:py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-5">
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">Aktuelle Leitfäden</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal sm:text-3xl">Beliebte Ratgeber-Themen</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {featuredTopics.map((topic, index) => (
              <Link key={topic.slug} href={`/ratgeber/${topic.slug}`} className="block">
                <Card className="h-full overflow-hidden transition hover:border-[#F0917B]/45 hover:bg-[#FFF8F5]">
                  {topic.image ? (
                    <div className="relative aspect-[16/9] bg-[#F5FBF8]">
                      <Image
                        src={topic.image.src}
                        alt={topic.image.alt}
                        fill
                        priority={index < 2}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <CardContent className="p-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">
                        {guideCategories.find((category) => category.slug === topic.categorySlug)?.name}
                      </Badge>
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-[#262C36]/55">
                        <Clock className="size-3.5" />
                        {topic.readingMinutes} Min.
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-black leading-tight [overflow-wrap:anywhere]">{topic.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#262C36]/66">{topic.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="alle-themen" className="bg-[#F5FBF8] py-8 sm:py-12">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="mb-5 flex items-center gap-2">
            <Search className="size-5 text-[#2F7A68]" />
            <h2 className="text-2xl font-black tracking-normal">Alle Themen</h2>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {guideTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/ratgeber/${topic.slug}`}
                className="rounded-md border border-[#262C36]/10 bg-white px-3 py-3 text-sm font-bold text-[#262C36] shadow-sm hover:border-[#F0917B]/45"
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
