import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BadgeEuro,
  BookOpen,
  Clock,
  HandHeart,
  HeartHandshake,
  MapPin,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { AnimalCareCategories } from "@/components/marketing/animal-care-categories";
import { ListingMap } from "@/components/marketing/listing-map";
import { Button } from "@/components/ui/button";
import { getMapPoints } from "@/lib/inserate";
import { guideTopics } from "@/lib/ratgeber";
import { absoluteUrl, jsonLdScript, siteName } from "@/lib/seo";
import { getUser } from "@/lib/supabase/server";

const trustItems = [
  "Kostenlos im Early Access",
  "Suche nach PLZ-Region",
  "Für viele Tierarten gedacht",
];

const featuredListings = [
  {
    title: "Welpe Momo sucht Nachmittagsbetreuung",
    age: "Jung",
    city: "Berlin",
    image: "/images/generated/example-puppy.jpg",
    description:
      "Momo braucht an zwei Nachmittagen pro Woche kurze Besuche, kleine Gassi-Runden und ruhige Spielzeit.",
  },
  {
    title: "Bruno braucht seine Abendrunde",
    age: "Mittleres Alter",
    city: "Hamburg",
    image: "/images/generated/example-adult-dog.jpg",
    description:
      "Bruno ist freundlich, erwachsen und sucht abends jemanden für eine verlässliche Runde in der Nachbarschaft.",
  },
  {
    title: "Seniorhündin Lotte mag es ruhig",
    age: "Senior",
    city: "Köln",
    image: "/images/generated/example-senior-dog.jpg",
    description:
      "Lotte braucht ruhige Betreuung mit Geduld, festen Routinen und einem weichen Platz zum Ausruhen.",
  },
];

const workflow = [
  {
    icon: MapPin,
    title: "Region wählen",
    description: "PLZ und Radius reichen für den Start. Die genaue Adresse bleibt privat.",
  },
  {
    icon: HeartHandshake,
    title: "Passung prüfen",
    description: "Tierart, Zeitraum, Betreuungsort und Alltag müssen zusammenpassen.",
  },
  {
    icon: Clock,
    title: "Direkt abstimmen",
    description: "Nach dem Einloggen laufen Inserate und Nachrichten an einem Ort zusammen.",
  },
];

export default async function HomePage() {
  const [points, user] = await Promise.all([getMapPoints(), getUser()]);
  const createListingHref = user ? "/inserieren" : "/registrieren?next=/inserieren";
  const featuredGuideTopics = guideTopics.slice(0, 3);
  const structuredData = [
    {
      "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/Buddza_Logo_Header.png"),
      foundingDate: "2026",
      areaServed: "Deutschland",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: absoluteUrl("/"),
      potentialAction: {
        "@type": "SearchAction",
        target: `${absoluteUrl("/inserate")}?postalCode={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <main className="flex-1 bg-[#FAF7F2] text-[#262C36]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="relative isolate min-h-[calc(86svh-4rem)] overflow-hidden bg-[#202833] text-white">
        <Image
          src="/images/generated/dogs-ages-hero.jpg"
          alt="Junger Hund, erwachsener Hund und Seniorhund in einem Zuhause"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111820]/55" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[calc(86svh-4rem)] w-full max-w-6xl flex-col justify-end px-4 pb-10 pt-20 sm:px-6 lg:pb-14">
          <div className="min-w-0 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-md bg-white/14 px-3 py-1.5 text-xs font-black uppercase tracking-normal text-white ring-1 ring-white/18 backdrop-blur">
              <Sparkles className="size-4 text-[#F5C86B]" />
              2026 neu gestartet
            </div>

            <h1 className="mt-5 text-5xl font-black leading-none tracking-normal sm:text-6xl lg:text-7xl">
              Tierbetreuung in deiner Nähe
            </h1>
            <p className="mt-4 max-w-[22rem] text-xl font-bold leading-8 text-white sm:max-w-2xl sm:text-2xl">
              Finde liebevolle Betreuung oder biete Unterstützung für Tiere in deiner Region.
            </p>
            <p className="mt-4 max-w-[22rem] text-base leading-7 text-white/78 sm:max-w-2xl sm:text-lg">
              Für Menschen, die Tiere nicht einfach “unterbringen” wollen, sondern passende
              Betreuung in ihrer Nähe suchen.
            </p>

            <form
              action="/inserate"
              className="mt-7 grid w-full gap-2 rounded-lg bg-white p-2 shadow-2xl shadow-black/20 sm:max-w-2xl sm:grid-cols-[1fr_auto]"
            >
              <input type="hidden" name="radius" value="50" />
              <label className="sr-only" htmlFor="hero-postal-code">
                Postleitzahl
              </label>
              <div className="flex h-12 items-center gap-2 rounded-md bg-[#F5FBF8] px-3">
                <MapPin className="size-5 shrink-0 text-[#2F7A68]" />
                <input
                  id="hero-postal-code"
                  name="postalCode"
                  inputMode="numeric"
                  pattern="[0-9]{5}"
                  placeholder="Deine PLZ"
                  className="h-full min-w-0 flex-1 bg-transparent text-base font-bold text-[#262C36] outline-none placeholder:text-[#262C36]/38"
                />
              </div>
              <Button size="lg" className="h-12 w-full sm:w-auto">
                <Search />
                Inserate finden
              </Button>
            </form>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                <Link href={createListingHref}>
                  <Plus />
                  Inserat erstellen
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full bg-white/14 text-white ring-1 ring-white/18 hover:bg-white/22 sm:w-auto">
                <Link href="/inserate">
                  Alle Inserate
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
                <BadgeCheck className="size-4 shrink-0 text-[#F5C86B]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimalCareCategories />

      <section className="bg-[#F5FBF8] py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-72 overflow-hidden rounded-lg bg-[#202833] shadow-xl shadow-[#262C36]/12 sm:min-h-96">
            <Image
              src="/images/generated/login-dog-hallway.jpg"
              alt="Hund wartet freundlich zuhause"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-black uppercase tracking-normal text-[#2F7A68] shadow-sm">
              <HandHeart className="size-4" />
              Tierbetreuer
            </div>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Menschen finden, die Tiere liebevoll betreuen.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#262C36]/70">
              Sieh Profile mit Verfügbarkeit, PLZ-Region, Umkreis, Stundensatz und passenden Tierkategorien.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/tierbetreuer">
                  Tierbetreuer finden
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={user ? "/tierbetreuer/neu" : "/registrieren?next=/tierbetreuer/neu"}>
                  Betreuung anbieten
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">
                Aktuelle Inserate
              </p>
              <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
                Drei Hunde suchen Betreuung
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/inserate">
                Inserate ansehen
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {featuredListings.map((listing) => (
              <article
                key={listing.title}
                className="overflow-hidden rounded-lg border border-[#262C36]/10 bg-[#FAF7F2] shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-black leading-tight tracking-normal text-[#262C36]">
                      {listing.title}
                    </h3>
                    <span className="rounded-md bg-[#8FCAD7]/24 px-2.5 py-1 text-xs font-black text-[#225966]">
                      {listing.age}
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-sm font-bold text-[#262C36]/62">
                    <MapPin className="size-4 text-[#D97863]" />
                    {listing.city}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#262C36]/70">
                    {listing.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F5FBF8] py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">
              So funktioniert Buddza
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Schnell genug für Alltag. Persönlich genug für Tiere.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#262C36]/70">
              Buddza bleibt bewusst klar: erst finden, dann prüfen, dann sauber abstimmen.
              Kein Lärm, keine genaue Adresse im öffentlichen Inserat.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={createListingHref}>
                  Inserat erstellen
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/ueber-uns">Mehr über Buddza</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid gap-4 rounded-lg border border-[#262C36]/10 bg-white p-5 shadow-sm sm:grid-cols-[3rem_1fr]"
                >
                  <span className="flex size-12 items-center justify-center rounded-md bg-[#2F7A68] text-white">
                    <Icon className="size-5" />
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
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-[#2F7A68]">Ratgeber</p>
              <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
                Gute Betreuung beginnt mit guten Fragen.
              </h2>
            </div>
            <Button asChild variant="secondary">
              <Link href="/ratgeber">
                Ratgeber öffnen
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {featuredGuideTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/ratgeber/${topic.slug}`}
                className="rounded-lg border border-[#262C36]/10 bg-[#FAF7F2] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F0917B]/45"
              >
                <BookOpen className="size-5 text-[#D97863]" />
                <h3 className="mt-3 text-lg font-black leading-tight text-[#262C36]">{topic.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#262C36]/66">{topic.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">
              Karte
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Sieh, wo gerade Betreuung gesucht wird.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#262C36]/70">
              Die Karte zeigt Inserate über PLZ-Regionen. So bleibt die Suche lokal, ohne
              private Details öffentlich zu machen.
            </p>
          </div>
          <ListingMap points={points} />
        </div>
      </section>

      <section id="ueber-uns" className="bg-[#202833] py-12 text-white sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-normal text-[#F5C86B]">
              Über uns
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
              Neu gegründet, aber mit einem sehr alten Gefühl: Tiere gehören gut begleitet.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/76">
              Buddza ist 2026 aus einer einfachen Beobachtung entstanden: Tierbetreuung
              wird oft über Chatgruppen, Zettel und Zufälle organisiert. Wir wollen daraus
              einen freundlichen Ort machen, an dem Halter und Betreuer schneller zueinanderfinden.
            </p>
            <Button asChild className="mt-6">
              <Link href="/ueber-uns">
                Unsere Geschichte
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="preise" className="bg-[#FAF7F2] py-12 sm:py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-[#F0917B]/16 px-3 py-1.5 text-xs font-black uppercase tracking-normal text-[#262C36]">
              <BadgeEuro className="size-4 text-[#D97863]" />
              Early Access
            </div>
            <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-normal text-[#262C36] sm:text-4xl">
              Aktuell ist Buddza kostenlos.
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#262C36]/70">
              Inserieren, suchen und starten kostet in der Early-Access-Phase nichts. Wenn
              sich daran später etwas ändert, informieren wir registrierte Nutzer rechtzeitig.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:w-[28rem]">
            {["Keine Zahlungsdaten", "Keine Provision im Early Access", "Info vor Änderungen", "Kostenlos starten"].map((item) => (
              <div
                key={item}
                className="flex min-h-12 items-center gap-2 rounded-md bg-white px-3 text-sm font-black text-[#262C36] shadow-sm"
              >
                <ShieldCheck className="size-4 text-[#2F7A68]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
