import Image from "next/image";
import Link from "next/link";
import { BadgeEuro, HandHeart, HeartHandshake, ListChecks, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { href: "/inserate", label: "Inserate", icon: ListChecks },
  { href: "/tierbetreuer", label: "Tierbetreuer", icon: HandHeart },
  { href: "/ueber-uns", label: "Über uns", icon: HeartHandshake },
  { href: "/preise", label: "Preis", icon: BadgeEuro },
];

export function AppFooter() {
  return (
    <footer className="border-t border-[#262C36]/10 bg-[#202833] text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Link href="/" className="relative block h-10 w-36 overflow-hidden" aria-label="Buddza Startseite">
            <Image
              src="/images/Buddza_Logo.png"
              alt="Buddza"
              fill
              sizes="144px"
              className="object-contain object-left brightness-0 invert"
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
      </div>
    </footer>
  );
}
