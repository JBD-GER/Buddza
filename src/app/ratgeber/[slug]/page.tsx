import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, Clock, ListChecks } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  getGuideCategory,
  getGuideTopic,
  getGuideTopicsByCategory,
  publishedGuideTopics,
} from "@/lib/ratgeber";
import { absoluteUrl, buildTitle, defaultSeoImage, jsonLdScript, siteName } from "@/lib/seo";

type GuideArticlePageProps = {
  params: Promise<{ slug: string }>;
};

const guideDateFormatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
});

function formatGuideDate(date: string) {
  return guideDateFormatter.format(new Date(`${date}T00:00:00`));
}

export function generateStaticParams() {
  return publishedGuideTopics.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({ params }: GuideArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getGuideTopic(slug);

  if (!topic) return {};

  const articleImage = topic.image?.src ?? defaultSeoImage;

  return {
    title: buildTitle(topic.title),
    description: topic.excerpt,
    alternates: {
      canonical: `/ratgeber/${topic.slug}`,
    },
    keywords: topic.tags,
    openGraph: {
      title: topic.title,
      description: topic.excerpt,
      url: `/ratgeber/${topic.slug}`,
      siteName,
      locale: "de_DE",
      type: "article",
      publishedTime: topic.publishedAt,
      tags: topic.tags,
      images: [
        {
          url: articleImage,
          width: topic.image?.width ?? 1200,
          height: topic.image?.height ?? 800,
          alt: topic.image?.alt ?? topic.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: topic.title,
      description: topic.excerpt,
      images: [articleImage],
    },
  };
}

export default async function GuideArticlePage({ params }: GuideArticlePageProps) {
  const { slug } = await params;
  const topic = getGuideTopic(slug);

  if (!topic) {
    notFound();
  }

  const category = getGuideCategory(topic.categorySlug);
  const relatedTopics = getGuideTopicsByCategory(topic.categorySlug)
    .filter((relatedTopic) => relatedTopic.slug !== topic.slug)
    .slice(0, 3);
  const articleSections = topic.articleSections;
  const articleImage = topic.image?.src ?? defaultSeoImage;
  const articleImageAlt = topic.image?.alt ?? topic.title;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: topic.title,
      description: topic.excerpt,
      image: absoluteUrl(articleImage),
      datePublished: topic.publishedAt,
      dateModified: topic.publishedAt,
      author: {
        "@type": "Organization",
        name: siteName,
        url: absoluteUrl("/"),
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: absoluteUrl("/images/Buddza_Logo_Header.png"),
        },
      },
      mainEntityOfPage: absoluteUrl(`/ratgeber/${topic.slug}`),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ratgeber",
          item: absoluteUrl("/ratgeber"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: category?.name ?? "Kategorie",
          item: absoluteUrl(`/ratgeber/kategorie/${topic.categorySlug}`),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: topic.title,
          item: absoluteUrl(`/ratgeber/${topic.slug}`),
        },
      ],
    },
  ];

  return (
    <main className="flex-1 bg-[#fbf8f4] text-[#262C36]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <article>
        <section className="border-b border-[#262C36]/10 bg-white">
          <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
            <Button asChild variant="ghost" className="-ml-3 mb-4">
              <Link href="/ratgeber">
                <ArrowLeft />
                Ratgeber
              </Link>
            </Button>
            <div className="flex flex-wrap items-center gap-2">
              {category ? (
                <Link href={`/ratgeber/kategorie/${category.slug}`}>
                  <Badge>{category.name}</Badge>
                </Link>
              ) : null}
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#262C36]/55">
                <Clock className="size-3.5" />
                {topic.readingMinutes} Min. Lesezeit
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#262C36]/55">
                <CalendarDays className="size-3.5" />
                <time dateTime={topic.publishedAt}>{formatGuideDate(topic.publishedAt)}</time>
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight tracking-normal [overflow-wrap:anywhere] sm:text-5xl">
              {topic.title}
            </h1>
            <p className="mt-4 text-lg leading-8 text-[#262C36]/70">{topic.excerpt}</p>
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-lg border border-[#262C36]/10 bg-[#F5FBF8] shadow-sm">
              <Image
                src={articleImage}
                alt={articleImageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 896px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="space-y-5">
            {articleSections.map((section) => (
              <Card key={section.title}>
                <CardContent className="p-5 sm:p-6">
                  <h2 className="text-2xl font-black tracking-normal [overflow-wrap:anywhere]">{section.title}</h2>
                  {section.intro ? (
                    <p className="mt-3 text-base leading-7 text-[#262C36]/70">{section.intro}</p>
                  ) : null}
                  {section.paragraphs?.length ? (
                    <div className="mt-4 space-y-3 text-base leading-7 text-[#262C36]/72">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  <ul className="mt-4 grid gap-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-7 text-[#262C36]/72">
                        <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#2F7A68]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-[#202833] text-white">
              <CardContent className="p-5 sm:p-6">
                <h2 className="text-2xl font-black tracking-normal">Der nächste sinnvolle Schritt</h2>
                <p className="mt-3 text-base leading-7 text-white/76">
                  Wenn du Betreuung suchst, beschreibe Tier, Zeitraum, PLZ-Region und Aufgabe so
                  konkret wie möglich. Wenn du Betreuung anbietest, helfen Profilbild,
                  Verfügbarkeit, Preis und passende Tierkategorien.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <Link href="/inserate">
                      Inserate ansehen
                      <ArrowRight />
                    </Link>
                  </Button>
                  <Button asChild variant="secondary">
                    <Link href="/inserieren">Inserat erstellen</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <Card>
              <CardContent className="p-4">
                <p className="text-xs font-black uppercase tracking-normal text-[#2F7A68]">Verwandte Themen</p>
                <div className="mt-3 grid gap-2">
                  {relatedTopics.map((relatedTopic) => (
                    <Link
                      key={relatedTopic.slug}
                      href={`/ratgeber/${relatedTopic.slug}`}
                      className="rounded-md border border-[#262C36]/10 px-3 py-2 text-sm font-bold hover:border-[#F0917B]/45"
                    >
                      {relatedTopic.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <p className="text-xs font-black uppercase tracking-normal text-[#D97863]">Merken</p>
                <p className="mt-2 flex gap-2 text-sm leading-6 text-[#262C36]/66">
                  <ListChecks className="mt-1 size-4 shrink-0 text-[#D97863]" />
                  Gute Tierbetreuung ist selten kompliziert. Sie wird besser, wenn alle
                  Beteiligten dieselben Erwartungen kennen.
                </p>
              </CardContent>
            </Card>
          </aside>
        </section>
      </article>
    </main>
  );
}
