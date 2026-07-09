import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, MapPin, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { absoluteUrl, createSeoMetadata, jsonLdScript, siteName } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Über uns",
  description:
    "Buddza wurde 2026 gegründet, um lokale Tierbetreuung einfacher, persönlicher und datensparsam über PLZ-Regionen zu organisieren.",
  path: "/ueber-uns",
  keywords: ["Buddza", "Tierbetreuung Plattform", "lokale Tierbetreuung", "Haustierbetreuung Deutschland"],
});

const values = [
  {
    icon: MapPin,
    title: "Lokal statt anonym",
    description:
      "Buddza startet über PLZ-Regionen. So finden sich Menschen in erreichbarer Nähe, ohne genaue Adressen öffentlich zu machen.",
  },
  {
    icon: HeartHandshake,
    title: "Tiere zuerst",
    description:
      "Ein gutes Inserat erzählt nicht nur, wann Betreuung gebraucht wird, sondern auch, wie ein Tier sich wohlfühlt.",
  },
  {
    icon: ShieldCheck,
    title: "Ruhig wachsen",
    description:
      "Wir bauen Early Access bewusst Schritt für Schritt und informieren Nutzer, bevor sich wichtige Bedingungen ändern.",
  },
];

export default function AboutPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "Über Buddza",
      url: absoluteUrl("/ueber-uns"),
      description:
        "Buddza ist eine lokale Plattform für Tierbetreuung in Deutschland mit PLZ-basierter Suche und datensparsamer Kontaktaufnahme.",
      mainEntity: {
        "@type": "Organization",
        name: siteName,
        url: absoluteUrl("/"),
        logo: absoluteUrl("/images/Buddza_Logo_Header.png"),
        foundingDate: "2026",
        areaServed: "Deutschland",
      },
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
          name: "Über uns",
          item: absoluteUrl("/ueber-uns"),
        },
      ],
    },
  ];

  return (
    <main className="flex-1 bg-[#FAF7F2] text-[#262C36]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="bg-[#202833] text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-md bg-white/12 px-3 py-1.5 text-xs font-black uppercase tracking-normal ring-1 ring-white/14">
              <Sparkles className="size-4 text-[#F5C86B]" />
              2026 neu gegründet
            </div>
            <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
              Buddza entsteht für Menschen, die Tierbetreuung menschlicher machen wollen.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 sm:text-lg">
              Die Idee kam aus einem ganz normalen Problem: Urlaube, Arbeitstage,
              Krankheit, spontane Termine. Immer wieder brauchte jemand Hilfe für ein Tier,
              und immer wieder war die Suche verstreut über Chats, Nachbarschaftsgruppen
              und Zufall.
            </p>
            <Button asChild className="mt-6">
              <Link href="/registrieren">
                Kostenlos starten
                <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="relative min-h-[24rem] overflow-hidden rounded-lg lg:min-h-[34rem]">
            <Image
              src="/images/generated/dogs-ages-hero.jpg"
              alt="Drei Hunde unterschiedlicher Altersstufen"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">
              Unsere Geschichte
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight tracking-normal sm:text-4xl">
              Aus Nachbarschaftshilfe wird eine Plattform.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-[#262C36]/72">
            <p>
              Buddza wurde 2026 gegründet, weil Tierbetreuung oft zu wichtig ist, um sie
              nebenbei in endlosen Chatverläufen zu organisieren. Wir wollen die Suche
              strukturieren, ohne sie kalt zu machen.
            </p>
            <p>
              Deshalb beginnt Buddza mit wenigen, klaren Dingen: Tierart, PLZ, Zeitraum,
              Betreuungsort und ehrliche Beschreibung. Daraus soll ein Ort wachsen, an dem
              Halter und Betreuer einander schnell einschätzen können.
            </p>
            <p>
              Unser Ziel ist nicht, Tierliebe zu automatisieren. Unser Ziel ist, die
              Organisation drumherum leichter zu machen, damit am Ende mehr Zeit für das
              Tier bleibt.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="rounded-lg border border-[#262C36]/10 bg-[#F5FBF8] p-5 shadow-sm"
                >
                  <div className="flex size-11 items-center justify-center rounded-md bg-[#2F7A68] text-white">
                    <Icon className="size-5" />
                  </div>
                  <h2 className="mt-4 text-xl font-black tracking-normal">{value.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-[#262C36]/68">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
