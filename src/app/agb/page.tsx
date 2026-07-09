import Link from "next/link";
import { LegalShell } from "@/components/legal/legal-shell";
import { legalCompany, legalUpdatedAt } from "@/lib/legal";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen für die Nutzung von Buddza, der Plattform für lokale Tierbetreuung.",
  path: "/agb",
  keywords: ["Buddza AGB", "Nutzungsbedingungen", "Tierbetreuung Plattform"],
});

function TermsSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-black tracking-normal">{title}</h2>
      <div className="space-y-3 text-sm leading-6 text-[#262C36]/72">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow={`Stand: ${legalUpdatedAt}`}
      title="Allgemeine Geschäftsbedingungen"
      description="Diese Bedingungen regeln die Nutzung von Buddza als Plattform für lokale Tierbetreuung, Inserate, Profile und Nachrichten."
    >
      <TermsSection title="1. Anbieter und Geltungsbereich">
        <p>
          Buddza wird betrieben von der {legalCompany.name}, {legalCompany.address}. Diese AGB gelten
          für die Nutzung der Website, Konten, Inserate, Tierbetreuer-Profile, Suchfunktionen,
          Nachrichten und sonstigen Plattformfunktionen.
        </p>
        <p>
          Abweichende Bedingungen der Nutzer gelten nur, wenn wir ihnen ausdrücklich zugestimmt haben.
        </p>
      </TermsSection>

      <TermsSection title="2. Leistung von Buddza">
        <p>
          Buddza stellt eine Online-Plattform bereit, über die Tierhalter Betreuungsgesuche erstellen
          und Tierbetreuer Profile oder Angebote sichtbar machen können. Die Plattform erleichtert die
          Suche, Darstellung und Kontaktaufnahme.
        </p>
        <p>
          Buddza wird nicht selbst Partei eines Betreuungsvertrags zwischen Nutzern und übernimmt keine
          Durchführung, Beaufsichtigung, Versicherung oder Garantie für eine konkrete Tierbetreuung.
        </p>
      </TermsSection>

      <TermsSection title="3. Registrierung und Konto">
        <p>
          Für bestimmte Funktionen ist ein Konto erforderlich. Bei der Registrierung sind richtige und
          aktuelle Angaben zu machen. Zugangsdaten sind vertraulich zu behandeln.
        </p>
        <p>
          Wir dürfen Konten vorübergehend sperren oder löschen, wenn Anhaltspunkte für Missbrauch,
          falsche Angaben, Rechtsverstöße oder erhebliche Verstöße gegen diese AGB bestehen.
        </p>
      </TermsSection>

      <TermsSection title="4. Inserate, Profile und Inhalte">
        <p>
          Nutzer sind für die von ihnen eingestellten Inhalte verantwortlich. Inhalte müssen wahr,
          rechtmäßig, verständlich und frei von Rechten Dritter sein. Das gilt besonders für Texte,
          Bilder, Videos, Namen, Beschreibungen und Profilangaben.
        </p>
        <p>
          Unzulässig sind insbesondere irreführende, beleidigende, diskriminierende, gefährliche,
          rechtswidrige oder fremde Rechte verletzende Inhalte. Wir können Inhalte moderieren,
          ausblenden oder entfernen, wenn ein sachlicher Grund besteht.
        </p>
      </TermsSection>

      <TermsSection title="5. Kontakt und Vereinbarungen zwischen Nutzern">
        <p>
          Nutzer entscheiden eigenverantwortlich, ob und mit wem sie eine Tierbetreuung vereinbaren.
          Vor Übergabe eines Tieres sollten Umfang, Zeitraum, Ort, Schlüsselübergabe, Notfallkontakte,
          Fütterung, Medikamente, Kosten und Haftungsfragen eindeutig geklärt werden.
        </p>
        <p>
          Jeder Nutzer bleibt dafür verantwortlich, gesetzliche Vorgaben, Tierschutz, Sicherheit,
          Sorgfaltspflichten und gegebenenfalls Versicherungsfragen zu beachten.
        </p>
      </TermsSection>

      <TermsSection title="6. Preise und Early Access">
        <p>
          Buddza ist derzeit im Early Access kostenlos nutzbar. Es fallen aktuell keine
          Plattformgebühren, Provisionen oder Zahlungsdatenpflichten an.
        </p>
        <p>
          Wenn später kostenpflichtige Funktionen, Pakete, Provisionen oder Einschränkungen eingeführt
          werden, informieren wir registrierte Nutzer rechtzeitig. Kostenpflichtige Leistungen entstehen
          nur auf Grundlage einer gesonderten Information und Zustimmung.
        </p>
      </TermsSection>

      <TermsSection title="7. Verfügbarkeit und Weiterentwicklung">
        <p>
          Wir entwickeln Buddza laufend weiter. Funktionen können angepasst, ergänzt oder entfernt
          werden, wenn dies für Betrieb, Sicherheit, Produktentwicklung oder rechtliche Anforderungen
          sinnvoll ist.
        </p>
        <p>
          Eine jederzeitige, störungsfreie Verfügbarkeit kann nicht garantiert werden. Wartung,
          Sicherheitsmaßnahmen, technische Probleme oder externe Dienstleister können die Nutzung
          zeitweise beeinflussen.
        </p>
      </TermsSection>

      <TermsSection title="8. Haftung">
        <p>
          Wir haften unbeschränkt bei Vorsatz, grober Fahrlässigkeit, Verletzung von Leben, Körper
          oder Gesundheit sowie nach zwingenden gesetzlichen Vorschriften.
        </p>
        <p>
          Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten und
          begrenzt auf den vertragstypischen, vorhersehbaren Schaden. Für Vereinbarungen,
          Handlungen oder Versäumnisse zwischen Nutzern sind die beteiligten Nutzer selbst verantwortlich.
        </p>
      </TermsSection>

      <TermsSection title="9. Nutzungsrechte">
        <p>
          Nutzer räumen Buddza an ihren eingestellten Inhalten die Rechte ein, die erforderlich sind,
          um die Inhalte auf der Plattform zu speichern, technisch zu verarbeiten, darzustellen,
          zu optimieren und im Rahmen der Plattformfunktionen zugänglich zu machen.
        </p>
        <p>
          Die Rechte verbleiben im Übrigen bei den jeweiligen Rechteinhabern.
        </p>
      </TermsSection>

      <TermsSection title="10. Laufzeit und Beendigung">
        <p>
          Nutzer können die Plattformnutzung grundsätzlich jederzeit beenden. Gesetzliche
          Aufbewahrungspflichten, Sicherheitsinteressen und erforderliche Nachweise können einer
          sofortigen vollständigen Löschung einzelner Daten entgegenstehen.
        </p>
      </TermsSection>

      <TermsSection title="11. Datenschutz und Kontakt">
        <p>
          Informationen zur Verarbeitung personenbezogener Daten stehen in der{" "}
          <Link className="font-black text-[#D97863] hover:underline" href="/datenschutz">
            Datenschutzerklärung
          </Link>
          . Anbieterangaben findest du im{" "}
          <Link className="font-black text-[#D97863] hover:underline" href="/impressum">
            Impressum
          </Link>
          .
        </p>
        <p>
          Kontakt:{" "}
          <a className="font-black text-[#D97863] hover:underline" href={`mailto:${legalCompany.email}`}>
            {legalCompany.email}
          </a>
        </p>
      </TermsSection>

      <TermsSection title="12. Schlussbestimmungen">
        <p>
          Es gilt deutsches Recht. Zwingende Verbraucherschutzvorschriften des Staates, in dem ein
          Verbraucher seinen gewöhnlichen Aufenthalt hat, bleiben unberührt.
        </p>
        <p>
          Sollte eine Regelung dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen
          unberührt.
        </p>
      </TermsSection>
    </LegalShell>
  );
}
