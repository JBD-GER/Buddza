import { LegalShell } from "@/components/legal/legal-shell";
import { legalCompany } from "@/lib/legal";
import { absoluteUrl, createSeoMetadata, jsonLdScript, siteName } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung der Buddza Plattform.",
  path: "/impressum",
  keywords: ["Buddza Impressum", "Flaaq Holding GmbH", "Anbieterkennzeichnung"],
});

export default function ImprintPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: legalCompany.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/images/Buddza_Logo_Header.png"),
    email: legalCompany.email,
    telephone: legalCompany.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Großer Kamp 5a",
      postalCode: "31633",
      addressLocality: "Leese",
      addressCountry: "DE",
    },
    brand: {
      "@type": "Brand",
      name: siteName,
    },
  };

  return (
    <LegalShell
      eyebrow="Rechtliches"
      title="Impressum"
      description="Anbieterkennzeichnung für Buddza, betrieben durch die Flaaq Holding GmbH."
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(structuredData)} />

      <section className="space-y-3">
        <p className="text-sm font-black uppercase tracking-normal text-[#D97863]">Angaben gemäß § 5 DDG</p>
        <h2 className="text-2xl font-black tracking-normal">Anbieter</h2>
        <div className="space-y-1 text-sm leading-6 text-[#262C36]/72">
          <p className="font-bold text-[#262C36]">{legalCompany.name}</p>
          <p>{legalCompany.address}</p>
          <p>Vertretungsberechtigt: {legalCompany.representedBy}</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-black tracking-normal">Kontakt</h2>
        <div className="space-y-1 text-sm leading-6 text-[#262C36]/72">
          <p>Telefon: {legalCompany.phone}</p>
          <p>
            E-Mail:{" "}
            <a className="font-black text-[#D97863] hover:underline" href={`mailto:${legalCompany.email}`}>
              {legalCompany.email}
            </a>
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-black tracking-normal">Register und Steuern</h2>
        <div className="space-y-1 text-sm leading-6 text-[#262C36]/72">
          <p>Registergericht / HRB: {legalCompany.registry}</p>
          <p>Umsatzsteuer-ID: {legalCompany.vatId}</p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-black tracking-normal">Verbraucherstreitbeilegung</h2>
        <div className="space-y-3 text-sm leading-6 text-[#262C36]/72">
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
            <a
              className="font-black text-[#D97863] hover:underline"
              href="https://ec.europa.eu/consumers/odr"
              rel="noreferrer"
              target="_blank"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            . Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </section>
    </LegalShell>
  );
}
