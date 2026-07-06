import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getGuideCategory,
  getGuideTopicsByCategory,
  guideCategories,
} from "@/lib/ratgeber";
import { absoluteUrl, buildTitle, jsonLdScript } from "@/lib/seo";

type GuideCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: GuideCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getGuideCategory(slug);

  if (!category) return {};

  return {
    title: buildTitle(`${category.name} Ratgeber`),
    description: `${category.name} Ratgeber für Tierbetreuung: ${category.description}`,
    alternates: {
      canonical: `/ratgeber/kategorie/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} Ratgeber`,
      description: category.description,
      url: `/ratgeber/kategorie/${category.slug}`,
      type: "website",
    },
  };
}

export default async function GuideCategoryPage({ params }: GuideCategoryPageProps) {
  const { slug } = await params;
  const category = getGuideCategory(slug);

  if (!category) {
    notFound();
  }

  const topics = getGuideTopicsByCategory(category.slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Ratgeber`,
    url: absoluteUrl(`/ratgeber/kategorie/${category.slug}`),
    description: category.description,
    mainEntity: topics.map((topic) => ({
      "@type": "BlogPosting",
      headline: topic.title,
      url: absoluteUrl(`/ratgeber/${topic.slug}`),
      image: topic.image ? absoluteUrl(topic.image.src) : undefined,
    })),
  };

  return (
    <main className="flex-1 bg-[#fbf8f4] text-[#262C36]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="border-b border-[#262C36]/10 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
          <Button asChild variant="ghost" className="-ml-3 mb-4">
            <Link href="/ratgeber">
              <ArrowLeft />
              Ratgeber
            </Link>
          </Button>
          <Badge>{category.name}</Badge>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-normal [overflow-wrap:anywhere] sm:text-5xl">
            {category.name} Ratgeber
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#262C36]/68 sm:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-3 md:grid-cols-2">
          {topics.map((topic, index) => (
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
                    <Badge variant="secondary">{category.name}</Badge>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#262C36]/55">
                      <Clock className="size-3.5" />
                      {topic.readingMinutes} Min.
                    </span>
                  </div>
                  <h2 className="mt-3 text-lg font-black leading-tight [overflow-wrap:anywhere]">{topic.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#262C36]/66">{topic.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-black text-[#D97863]">
                    Lesen
                    <ArrowRight className="size-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
