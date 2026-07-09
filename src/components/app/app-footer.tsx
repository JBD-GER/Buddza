import Link from "next/link";
import {
  BadgeEuro,
  BookOpen,
  Cookie,
  FileText,
  HandHeart,
  HeartHandshake,
  ListChecks,
  Mail,
  MapPin,
  Scale,
  Search,
  ShieldCheck,
} from "lucide-react";
import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { guideTopics } from "@/lib/ratgeber";

const footerLinks = [
  { href: "/tierbetreuung-finden", label: "Tierbetreuung finden", icon: Search },
  { href: "/inserate", label: "Inserate", icon: ListChecks },
  { href: "/tierbetreuer", label: "Tierbetreuer", icon: HandHeart },
  { href: "/ratgeber", label: "Ratgeber", icon: BookOpen },
  { href: "/ueber-uns", label: "Über uns", icon: HeartHandshake },
  { href: "/preise", label: "Preis", icon: BadgeEuro },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum", icon: Scale },
  { href: "/datenschutz", label: "Datenschutz", icon: ShieldCheck },
  { href: "/agb", label: "AGB", icon: FileText },
];

export function AppFooter() {
  const footerGuideTopics = guideTopics.slice(0, 4);

  return (
    <footer className="border-t border-[#262C36]/10 bg-[#202833] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.72fr_0.9fr_1fr]">
        <div>
          <Link href="/" className="relative block h-10 w-36 overflow-hidden" aria-label="Buddza Startseite">
            <img
              src="/images/Buddza_Logo_Header.png"
              alt="Buddza"
              width="144"
              height="50"
              loading="lazy"
              className="size-full object-contain object-left brightness-0 invert"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/72">
            Buddza ist 2026 neu gegründet und baut eine freundliche, lokale Plattform für
            Tierbetreuung: sichtbar nach PLZ, sparsam mit Daten und offen für fast jede Tierart.
          </p>
        </div>

        <nav aria-label="Footer Navigation" className="grid gap-2">
          <p className="text-sm font-black uppercase tracking-normal text-[#F0917B]">Menü</p>
          {footerLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-10 items-center gap-2 text-sm font-bold text-white/78 hover:text-white"
              >
                <Icon className="size-4 text-[#F0917B]" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <nav aria-label="Ratgeber im Footer" className="grid content-start gap-2">
          <p className="text-sm font-black uppercase tracking-normal text-[#F0917B]">Ratgeber</p>
          {footerGuideTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/ratgeber/${topic.slug}`}
              className="text-sm font-bold leading-6 text-white/78 hover:text-white"
            >
              {topic.title}
            </Link>
          ))}
          <Link href="/ratgeber" className="mt-1 text-sm font-black text-[#F0917B] hover:text-white">
            Alle Ratgeber öffnen
          </Link>
        </nav>

        <div className="grid content-start gap-8">
          <div>
            <p className="text-sm font-black uppercase tracking-normal text-[#F0917B]">Early Access</p>
            <div className="mt-3 grid gap-2 text-sm leading-6 text-white/72">
              <p className="flex gap-2">
                <BadgeEuro className="mt-1 size-4 shrink-0 text-[#F0917B]" aria-hidden="true" />
                Aktuell kostenlos. Vor Preisänderungen informieren wir registrierte Nutzer rechtzeitig.
              </p>
              <p className="flex gap-2">
                <MapPin className="mt-1 size-4 shrink-0 text-[#F0917B]" aria-hidden="true" />
                Fokus auf lokale Suche in Deutschland.
              </p>
              <p className="flex gap-2">
                <Mail className="mt-1 size-4 shrink-0 text-[#F0917B]" aria-hidden="true" />
                Kontakt und Community-Funktionen wachsen mit der Plattform.
              </p>
            </div>
          </div>

          <nav aria-label="Rechtliches im Footer" className="grid gap-2">
            <p className="text-sm font-black uppercase tracking-normal text-[#F0917B]">Rechtliches</p>
            {legalLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-9 items-center gap-2 text-sm font-bold text-white/78 hover:text-white"
                >
                  <Icon className="size-4 text-[#F0917B]" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
            <CookieSettingsButton className="flex min-h-9 items-center gap-2 text-sm font-bold text-white/78 no-underline hover:text-white hover:no-underline">
              <Cookie className="size-4 text-[#F0917B]" aria-hidden="true" />
              Cookie-Einstellungen
            </CookieSettingsButton>
          </nav>
        </div>
      </div>
    </footer>
  );
}
