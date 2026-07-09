import Link from "next/link";
import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { LegalShell } from "@/components/legal/legal-shell";
import { legalCompany, legalUpdatedAt } from "@/lib/legal";
import { createSeoMetadata } from "@/lib/seo";

export const metadata = createSeoMetadata({
  title: "Datenschutz",
  description:
    "Datenschutzhinweise für Buddza: Konto, Inserate, Nachrichten, Hosting, Supabase, Vercel, Cookies und Google Consent Mode.",
  path: "/datenschutz",
  keywords: ["Buddza Datenschutz", "Cookie Consent", "Google Consent Mode", "Tierbetreuung Datenschutz"],
});

function LegalSection({
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

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow={`Stand: ${legalUpdatedAt}`}
      title="Datenschutz"
      description="Wir verarbeiten personenbezogene Daten nur, soweit dies für Betrieb, Sicherheit, Konto-Funktionen, Inserate, Nachrichten und erlaubte Dienste erforderlich ist."
    >
      <LegalSection title="Verantwortlicher">
        <p className="font-bold text-[#262C36]">{legalCompany.name}</p>
        <p>{legalCompany.address}</p>
        <p>
          E-Mail:{" "}
          <a className="font-black text-[#D97863] hover:underline" href={`mailto:${legalCompany.email}`}>
            {legalCompany.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title="Welche Daten wir verarbeiten">
        <p>
          Beim Besuch der Website werden technisch erforderliche Daten verarbeitet, etwa IP-Adresse,
          Zeitpunkt, angeforderte Seiten, Browser- und Geräteinformationen sowie Sicherheits- und
          Server-Logdaten.
        </p>
        <p>
          Wenn du Buddza nutzt, können zusätzlich Konto- und Profildaten, Inseratsdaten,
          Tierkategorien, PLZ-Regionen, Nachrichten, hochgeladene Bilder oder Videos,
          Anfrageinhalte und Statusinformationen verarbeitet werden.
        </p>
      </LegalSection>

      <LegalSection title="Zwecke und Rechtsgrundlagen">
        <p>
          Wir verarbeiten Daten zur Bereitstellung der Plattform, Registrierung, Anmeldung,
          Inseratsverwaltung, Suche, Kontaktaufnahme zwischen Nutzern, Missbrauchsvermeidung,
          Sicherheit und Kommunikation. Rechtsgrundlagen sind je nach Vorgang Art. 6 Abs. 1 lit. b,
          lit. f, lit. c oder bei einwilligungsbasierten Diensten lit. a DSGVO.
        </p>
        <p>
          Einwilligungen für Analyse- und Marketing-Dienste kannst du jederzeit mit Wirkung für die
          Zukunft ändern oder widerrufen.
        </p>
        <CookieSettingsButton className="inline-flex rounded-md bg-[#F0917B] px-3 py-2 text-sm font-black text-[#262C36] no-underline hover:bg-[#D97863] hover:no-underline">
          Cookie-Einstellungen öffnen
        </CookieSettingsButton>
      </LegalSection>

      <LegalSection title="Cookies, lokaler Speicher und Consent Mode">
        <p>
          Notwendige Cookies und lokale Speichereinträge dienen dem Login, der Sicherheit, der
          Formularfunktion, der Session-Verwaltung und der Speicherung deiner Cookie-Auswahl.
        </p>
        <p>
          Analyse- und Marketing-Dienste werden nur nach deiner Zustimmung geladen. Der Google
          Consent Mode v2 ist so vorbereitet, dass <code>ad_storage</code>, <code>ad_user_data</code>,{" "}
          <code>ad_personalization</code> und <code>analytics_storage</code> standardmäßig abgelehnt
          sind und erst nach deiner Auswahl aktualisiert werden.
        </p>
      </LegalSection>

      <LegalSection title="Hosting, Datenbank und Authentifizierung">
        <p>
          Buddza wird technisch über Vercel ausgeliefert. Für Authentifizierung, Datenbank,
          Dateispeicher und Echtzeitfunktionen nutzen wir Supabase. Diese Dienstleister verarbeiten
          Daten als technische Anbieter, soweit dies für Betrieb, Sicherheit und Bereitstellung der
          Plattform erforderlich ist.
        </p>
        <p>
          Je nach Hosting- und Dienstleisterstruktur kann eine Übermittlung in Drittländer stattfinden.
          Wir achten auf vertragliche Schutzmaßnahmen, insbesondere Auftragsverarbeitung und geeignete
          Garantien, soweit erforderlich.
        </p>
      </LegalSection>

      <LegalSection title="Analyse und Marketing">
        <p>
          Mit deiner Analyse-Einwilligung können wir Vercel Analytics und später Google Analytics
          einsetzen, um Reichweite, Nutzung und technische Qualität der Plattform zu verstehen.
        </p>
        <p>
          Mit deiner Marketing-Einwilligung können Google AdSense, Google Ads Conversion-Tracking
          oder vergleichbare Google-Werbefunktionen eingesetzt werden. Anbieter ist regelmäßig Google
          Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Dabei können Nutzungsdaten,
          Geräteinformationen, Referrer, ungefähre Standortdaten und Interaktionen mit Anzeigen oder
          Formularen verarbeitet werden.
        </p>
      </LegalSection>

      <LegalSection title="Inserate, Profile und Nachrichten">
        <p>
          Inhalte, die du veröffentlichst, können für andere Nutzer sichtbar sein. Dazu gehören zum
          Beispiel Titel, Beschreibung, Tierkategorie, PLZ-Region, Betreuungswunsch, Profilangaben
          und freiwillig hochgeladene Medien.
        </p>
        <p>
          Nachrichten und Anfragen sind für die beteiligten Nutzer und technisch notwendige
          Systemprozesse zugänglich. Öffentlich zeigen wir keine genaue Straße an, sondern arbeiten
          mit PLZ-Regionen.
        </p>
      </LegalSection>

      <LegalSection title="Speicherdauer">
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie sie für die genannten Zwecke
          erforderlich sind, gesetzliche Pflichten bestehen oder berechtigte Interessen wie
          Sicherheit, Nachweis und Missbrauchsabwehr dies erfordern.
        </p>
        <p>
          Du kannst Konto-, Profil- oder Inseratsänderungen über die vorgesehenen Funktionen
          vornehmen oder uns unter {legalCompany.email} kontaktieren.
        </p>
      </LegalSection>

      <LegalSection title="Deine Rechte">
        <p>
          Du hast im Rahmen der gesetzlichen Voraussetzungen Rechte auf Auskunft, Berichtigung,
          Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Du kannst
          außerdem erteilte Einwilligungen widerrufen und dich bei einer Datenschutzaufsichtsbehörde
          beschweren.
        </p>
      </LegalSection>

      <LegalSection title="Weitere rechtliche Hinweise">
        <p>
          Anbieterangaben stehen im <Link className="font-black text-[#D97863] hover:underline" href="/impressum">Impressum</Link>.
          Die Nutzungsbedingungen findest du in den{" "}
          <Link className="font-black text-[#D97863] hover:underline" href="/agb">
            AGB
          </Link>
          .
        </p>
      </LegalSection>
    </LegalShell>
  );
}
