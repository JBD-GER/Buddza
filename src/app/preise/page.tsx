import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeEuro, Bell, Check, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { absoluteUrl, createSeoMetadata, jsonLdScript, siteName } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Preise",
  description:
    "Buddza ist aktuell kostenlos im Early Access: Tierbetreuung suchen, Inserate erstellen, Nachrichten nutzen und Profile ansehen ohne Zahlungsdaten.",
  path: "/preise",
  keywords: ["Buddza Preise", "Tierbetreuung kostenlos", "Early Access", "Haustierbetreuung Kosten"],
});

const included = [
  "Inserate ansehen",
  "Inserat erstellen",
  "Nachrichten nach dem Login",
  "PLZ-basierte Suche",
  "Alle aktuellen Tierkategorien",
  "Keine Zahlungsdaten",
];

export default function PricingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    name: "Buddza Early Access",
    url: absoluteUrl("/preise"),
    price: "0.00",
    priceCurrency: "EUR",
    category: "Tierbetreuung",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: siteName,
      url: absoluteUrl("/"),
    },
    itemOffered: {
      "@type": "Service",
      name: "Lokale Tierbetreuung per PLZ suchen und anbieten",
      areaServed: "Deutschland",
    },
  };

  return (
    <main className="flex-1 bg-[#FAF7F2] text-[#262C36]">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md bg-[#F0917B]/16 px-3 py-1.5 text-xs font-black uppercase tracking-normal text-[#262C36]">
            <BadgeEuro className="size-4 text-[#D97863]" />
            Early Access
          </div>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-normal sm:text-5xl">
            Buddza ist aktuell kostenlos.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#262C36]/72 sm:text-lg">
            In der Early-Access-Phase kannst du Buddza ohne Zahlungsdaten nutzen. Du kannst
            suchen, inserieren und die Plattform kennenlernen, während wir sie weiter ausbauen.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/registrieren">
                Kostenlos starten
                <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/inserate">Inserate ansehen</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[24rem] overflow-hidden rounded-lg shadow-xl shadow-[#262C36]/12 lg:min-h-[34rem]">
          <Image
            src="/images/generated/login-dog-hallway.jpg"
            alt="Freundlicher Hund wartet im Flur"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="rounded-lg border border-[#262C36]/10 bg-[#202833] p-6 text-white shadow-sm">
            <p className="text-sm font-black uppercase tracking-normal text-[#F5C86B]">
              Aktueller Preis
            </p>
            <div className="mt-4 flex items-end gap-2">
              <span className="text-6xl font-black leading-none">0 €</span>
              <span className="pb-2 text-sm font-bold text-white/70">Early Access</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Keine Einrichtungsgebühr, keine Zahlungsdaten und keine Provision in dieser Phase.
            </p>
          </article>

          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div
                key={item}
                className="flex min-h-12 items-center gap-2 rounded-lg border border-[#262C36]/10 bg-[#F5FBF8] px-3 text-sm font-black text-[#262C36]"
              >
                <Check className="size-4 text-[#2F7A68]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2">
          <article className="rounded-lg border border-[#262C36]/10 bg-white p-5 shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-md bg-[#F0917B]/16 text-[#D97863]">
              <Bell className="size-5" />
            </div>
            <h2 className="mt-4 text-xl font-black tracking-normal">Vor Änderungen informieren wir dich.</h2>
            <p className="mt-2 text-sm leading-6 text-[#262C36]/68">
              Wenn wir später Preise, Pakete oder Limits ändern, informieren wir registrierte
              Nutzer rechtzeitig und transparent.
            </p>
          </article>

          <article className="rounded-lg border border-[#262C36]/10 bg-white p-5 shadow-sm">
            <div className="flex size-11 items-center justify-center rounded-md bg-[#2F7A68]/16 text-[#2F7A68]">
              <ShieldCheck className="size-5" />
            </div>
            <h2 className="mt-4 text-xl font-black tracking-normal">Du kannst ohne Risiko testen.</h2>
            <p className="mt-2 text-sm leading-6 text-[#262C36]/68">
              Early Access heißt: erst nutzen, Feedback geben, mitgestalten. Buddza soll
              wachsen, ohne dass der Einstieg schwer wird.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
