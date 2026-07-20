import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  HandHeart,
  HeartHandshake,
  Home,
  MapPin,
  MessageCircle,
  PawPrint,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { AnimalCareCategories } from "@/components/marketing/animal-care-categories";
import { ListingMap } from "@/components/marketing/listing-map";
import { Button } from "@/components/ui/button";
import { getMapPoints } from "@/lib/inserate";
import { publishedGuideTopics } from "@/lib/ratgeber";
import { absoluteUrl, createSeoMetadata, jsonLdScript, siteName } from "@/lib/seo";
import { getUser } from "@/lib/supabase/server";

export const metadata = createSeoMetadata({
  title: "Tierbetreuung finden: Hundesitter, Katzensitter und Haustierbetreuung in der Nähe",
  description:
    "Tierbetreuung finden mit Buddza: Suche per PLZ nach Hundesittern, Katzensittern, Gassi-Service und Haustierbetreuung in deiner Nähe.",
  path: "/tierbetreuung-finden",
  keywords: [
    "Tierbetreuung finden",
    "Tierbetreuung in der Nähe",
    "Hundesitter finden",
    "Katzensitter finden",
    "Haustierbetreuung",
    "Gassi Service",
    "Tiersitter",
    "PLZ Suche",
  ],
});

const trustItems = [
  "PLZ-Suche statt öffentlicher Adresse",
  "Für Hunde, Katzen und viele weitere Tierarten",
  "Kostenlos im Early Access starten",
];

const careTypes = [
  {
    icon: PawPrint,
    title: "Hundebetreuung",
    description:
      "Gassi-Service, Tagesbetreuung, Übernachtung oder regelmäßige Hilfe für Hunde.",
    href: "/inserate?category=hund",
  },
  {
    icon: Home,
    title: "Katzenbetreuung",
    description:
      "Ruhige Hausbesuche für Futter, Wasser, Katzenklo, Medikamente und kurze Updates.",
    href: "/inserate?category=katze",
  },
  {
    icon: HandHeart,
    title: "Weitere Tierarten",
    description:
      "Auch Kleintiere, Vögel, Aquarien, Reptilien, Pferde und Hoftiere brauchen klare Routinen.",
    href: "/inserate",
  },
];

const steps = [
  {
    icon: MapPin,
    title: "Region eingrenzen",
    description:
      "Starte mit deiner PLZ und einem passenden Radius. Die genaue Adresse bleibt privat, bis du sie teilen möchtest.",
  },
  {
    icon: CalendarDays,
    title: "Bedarf beschreiben",
    description:
      "Tierart, Zeitraum, Ort der Betreuung, Futter, Gassi, Medikamente und Besonderheiten gehören früh in die Anfrage.",
  },
  {
    icon: MessageCircle,
    title: "Passung abstimmen",
    description:
      "Vergleiche Antworten nach Erfahrung, Verfügbarkeit und ruhigem Umgang mit deinem Tier.",
  },
];

const checklistItems = [
  "Tierart, Alter, Verhalten und Gesundheitsinfos vorbereiten",
  "Futter, Wasser, Zubehör, Schlüssel und Notfallkontakt klären",
  "Besuchsdauer, Uhrzeiten und Betreuungsort realistisch beschreiben",
  "Vor dem ersten Termin ein Kennenlernen oder eine klare Übergabe planen",
];

const faqItems = [
  {
    question: "Wie finde ich Tierbetreuung in meiner Nähe?",
    answer:
      "Gib deine PLZ ein, wähle einen passenden Radius und prüfe Inserate oder Profile nach Tierart, Zeitraum, Betreuungsort und Erfahrung.",
  },
  {
    question: "Welche Tierbetreuung passt zu Hund oder Katze?",
    answer:
      "Für Hunde passen oft Gassi-Service, Tagesbetreuung oder Übernachtbetreuung. Für Katzen sind ruhige Hausbesuche in der vertrauten Wohnung meist sinnvoll.",
  },
  {
    question: "Muss meine genaue Adresse öffentlich sein?",
    answer:
      "Nein. Buddza arbeitet öffentlich mit PLZ-Regionen. Die genaue Adresse gehört erst in die direkte Abstimmung, wenn Vertrauen und Bedarf passen.",
  },
  {
    question: "Was sollte ich vor der ersten Betreuung klären?",
    answer:
      "Wichtig sind Futter, Wasser, Schlüssel, Notfallkontakte, Tierarzt, Medikamente, normale Routinen, Warnzeichen und klare Regeln für Wohnung oder Spaziergänge.",
  },
];

export default async function TierbetreuungFindenPage() {
  const [points, user] = await Promise.all([getMapPoints(), getUser()]);
  const createListingHref = user ? "/inserieren" : "/registrieren?next=/inserieren";
  const becomeSitterHref = user ? "/tierbetreuer/neu" : "/registrieren?next=/tierbetreuer/neu";
  const featuredGuideTopics = publishedGuideTopics.slice(0, 4);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Tierbetreuung finden",
      serviceType: "Tierbetreuung",
      provider: {
        "@type": "Organization",
        name: siteName,
        url: absoluteUrl("/"),
      },
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      url: absoluteUrl("/tierbetreuung-finden"),
      description:
        "Lokale Suche nach Tierbetreuung, Hundesittern, Katzensittern und Betreuungsgesuchen per PLZ.",
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
          name: "Startseite",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tierbetreuung finden",
          item: absoluteUrl("/tierbetreuung-finden"),
        },
      ],
    },
  ];

  return (
    <main className="flex-1 bg-[#FAF7F2] text-[#262C36]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />

      <section className="relative isolate min-h-[calc(78svh-4rem)] overflow-hidden bg-[#202833] text-white">
        <Image
          src="/images/generated/dogs-ages-hero.jpg"
          alt="Hunde in einem Zuhause als Symbol für lokale Tierbetreuung"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#101721]/62" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(78svh-4rem)] w-full max-w-6xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6 lg:pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-1.5 text-xs font-black uppercase tracking-normal text-white ring-1 ring-white/18 backdrop-blur">
              <Sparkles className="size-4 text-[#F5C86B]" aria-hidden="true" />
              Lokal nach PLZ suchen
            </div>

            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Tierbetreuung finden
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-bold leading-8 text-white sm:text-2xl">
              Finde passende Betreuung für Hund, Katze und andere Tiere in deiner Nähe.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 sm:text-lg">
              Buddza hilft dir, Betreuungsgesuche, Tierbetreuer und Ratgeber an einem Ort zu verbinden:
              lokal, klar und ohne öffentliche genaue Adresse.
            </p>

            <form
              action="/inserate"
              className="mt-7 grid w-full gap-2 rounded-lg bg-white p-2 shadow-2xl shadow-black/20 sm:max-w-2xl sm:grid-cols-[1fr_auto]"
            >
              <input type="hidden" name="radius" value="50" />
              <label className="sr-only" htmlFor="tierbetreuung-postal-code">
                Postleitzahl
              </label>
              <div className="flex h-12 items-center gap-2 rounded-md bg-[#F5FBF8] px-3">
                <MapPin className="size-5 shrink-0 text-[#2F7A68]" aria-hidden="true" />
                <input
                  id="tierbetreuung-postal-code"
                  name="postalCode"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  placeholder="Deine PLZ"
                  className="h-full min-w-0 flex-1 bg-transparent text-base font-bold text-[#262C36] outline-none placeholder:text-[#262C36]/38"
                />
              </div>
              <Button size="lg" className="h-12 w-full sm:w-auto">
                <Search />
                Betreuung suchen
              </Button>
            </form>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href={createListingHref}>
                  <Plus />
                  Inserat erstellen
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="w-full bg-white/14 text-white ring-1 ring-white/18 hover:bg-white/22 sm:w-auto"
              >
                <Link href="/tierbetreuer">
                  Tierbetreuer ansehen
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-2 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="flex min-h-12 items-center gap-2 rounded-md bg-white/12 px-3 text-sm font-bold text-white ring-1 ring-white/14 backdrop-blur"
              >
                <BadgeCheck className="size-4 shrink-0 text-[#F5C86B]" aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
              Haustierbetreuung in Deutschland
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Erst den Bedarf klären, dann passende Menschen finden.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262C36]/70">
              Gute Tierbetreuung ist mehr als ein freier Termin. Es geht um Routinen, Erfahrung,
              Verlässlichkeit und darum, dass dein Tier in seinem Alltag verstanden wird.
            </p>
            <div className="mt-6 grid gap-3">
              {checklistItems.map((item) => (
                <div key={item} className="flex gap-3 rounded-lg bg-[#F5FBF8] p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#2F7A68]" aria-hidden="true" />
                  <p className="text-sm font-bold leading-6 text-[#262C36]/74">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-lg bg-[#202833] shadow-xl shadow-[#262C36]/12 sm:min-h-[30rem]">
            <Image
              src="/images/generated/guide-tiersitter-in-der-naehe-finden.jpg"
              alt="Übergabe für lokale Tierbetreuung mit Hund, Katze und Zubehör"
              fill
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <AnimalCareCategories className="bg-[#F5FBF8]" />

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">
              Betreuungsformen
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Von Gassi bis Urlaubsbetreuung.
            </h2>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {careTypes.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group rounded-lg border border-[#262C36]/10 bg-[#FAF7F2] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F0917B]/45"
                >
                  <span className="flex size-12 items-center justify-center rounded-md bg-[#F0917B]/14 text-[#D97863] transition group-hover:bg-[#F0917B] group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-xl font-black text-[#262C36]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#262C36]/68">{item.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBF8] py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
              So startest du
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Eine gute Anfrage ist schon die halbe Betreuung.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#262C36]/70">
              Je klarer du Aufgabe, Zeitraum, Tierart und Besonderheiten beschreibst, desto
              schneller erkennst du, wer wirklich passt.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={createListingHref}>
                  Inserat erstellen
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={becomeSitterHref}>Betreuung anbieten</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            {steps.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-lg border border-[#262C36]/10 bg-white p-5 shadow-sm sm:grid-cols-[3rem_1fr]"
                >
                  <span className="flex size-12 items-center justify-center rounded-md bg-[#2F7A68] text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-[#262C36]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#262C36]/68">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">
              Lokale Suche
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Sieh, wo gerade Betreuung gesucht wird.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#262C36]/70">
              Die Karte zeigt Gesuche nach PLZ-Regionen. So bleibt Buddza lokal, ohne private
              Adressen öffentlich zu machen.
            </p>
          </div>
          <ListingMap points={points} />
        </div>
      </section>

      <section className="bg-[#202833] py-12 text-white sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Private Details bleiben privat",
                description:
                  "Öffentlich reicht die PLZ-Region. Adresse, Schlüssel und sensible Infos gehören in die direkte Abstimmung.",
              },
              {
                icon: HeartHandshake,
                title: "Passung vor Geschwindigkeit",
                description:
                  "Gerade bei Tieren zählen Erfahrung, Ruhe und klare Grenzen mehr als eine schnelle Zusage.",
              },
              {
                icon: BookOpen,
                title: "Ratgeber für Übergaben",
                description:
                  "Checklisten helfen bei Futter, Medikamenten, Notfallkontakt, Urlaub und besonderen Tierarten.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="rounded-lg bg-white/10 p-5 ring-1 ring-white/14">
                  <Icon className="size-6 text-[#F5C86B]" aria-hidden="true" />
                  <h3 className="mt-4 text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/72">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
                Ratgeber
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
                Mehr Sicherheit für die erste Übergabe.
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/ratgeber">
                Alle Ratgeber
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-4">
            {featuredGuideTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/ratgeber/${topic.slug}`}
                className="rounded-lg border border-[#262C36]/10 bg-[#FAF7F2] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F0917B]/45"
              >
                <BookOpen className="size-5 text-[#D97863]" aria-hidden="true" />
                <h3 className="mt-3 text-base font-black leading-tight text-[#262C36]">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#262C36]/66">{topic.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF7F2] py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">
              Fragen
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Kurz geklärt.
            </h2>
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-2">
            {faqItems.map((item) => (
              <article key={item.question} className="rounded-lg bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-[#262C36]">{item.question}</h3>
                <p className="mt-2 text-sm leading-6 text-[#262C36]/68">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
