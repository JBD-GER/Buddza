"use client";

import Link from "next/link";
import { BarChart3, Check, Cookie, Megaphone, Save, Settings2, ShieldCheck, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CONSENT_COOKIE_NAME,
  CONSENT_EVENT_NAME,
  CONSENT_STORAGE_KEY,
  OPEN_CONSENT_SETTINGS_EVENT_NAME,
  createConsentSettings,
  getStoredConsent,
  toGoogleConsentState,
  type ConsentDraft,
  type ConsentSettings,
} from "@/lib/consent";
import { cn } from "@/lib/utils";

type GtagFunction = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFunction;
    buddzaOpenCookieSettings?: () => void;
  }
}

const defaultDraft: ConsentDraft = {
  analytics: false,
  marketing: false,
};

const cookieMaxAge = 60 * 60 * 24 * 180;

function applyGoogleConsent(consent: ConsentSettings) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    ((...args: unknown[]) => {
      window.dataLayer?.push(args);
    });

  window.gtag("consent", "update", toGoogleConsentState(consent));
  window.dataLayer.push({
    event: "buddza_consent_update",
    buddza_consent: {
      analytics: consent.analytics,
      marketing: consent.marketing,
    },
  });
}

function persistConsent(consent: ConsentSettings) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify({
      version: consent.version,
      analytics: consent.analytics,
      marketing: consent.marketing,
    }),
  )}; Path=/; Max-Age=${cookieMaxAge}; SameSite=Lax`;
  applyGoogleConsent(consent);
  window.dispatchEvent(new CustomEvent<ConsentSettings>(CONSENT_EVENT_NAME, { detail: consent }));
}

function ConsentToggle({
  checked,
  disabled,
  icon: Icon,
  label,
  description,
  onChange,
}: {
  checked: boolean;
  disabled?: boolean;
  icon: LucideIcon;
  label: string;
  description: string;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label
      className={cn(
        "grid gap-3 rounded-lg border border-[#262C36]/10 bg-white p-4 sm:grid-cols-[1fr_auto] sm:items-center",
        disabled ? "opacity-80" : "cursor-pointer",
      )}
    >
      <span className="flex gap-3">
        <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F0917B]/16 text-[#D97863]">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <span>
          <span className="block text-sm font-black text-[#262C36]">{label}</span>
          <span className="mt-1 block text-sm leading-6 text-[#262C36]/66">{description}</span>
        </span>
      </span>
      <span className="inline-flex items-center justify-end">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange?.(event.target.checked)}
        />
        <span
          aria-hidden="true"
          className="relative h-7 w-12 rounded-full bg-[#262C36]/18 transition-colors peer-checked:bg-[#2F7A68] peer-checked:[&>span]:translate-x-5 peer-focus-visible:ring-2 peer-focus-visible:ring-[#F0917B] peer-focus-visible:ring-offset-2 peer-disabled:bg-[#2F7A68]/70"
        >
          <span className="absolute left-1 top-1 size-5 rounded-full bg-white shadow-sm transition-transform" />
        </span>
      </span>
    </label>
  );
}

export function CookieConsentBanner() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [hasStoredConsent, setHasStoredConsent] = useState(false);
  const [draft, setDraft] = useState<ConsentDraft>(defaultDraft);

  useEffect(() => {
    let isCancelled = false;

    function openSettings() {
      const currentConsent = getStoredConsent(window.localStorage);

      setHasStoredConsent(Boolean(currentConsent));
      setDraft(
        currentConsent
          ? {
              analytics: currentConsent.analytics,
              marketing: currentConsent.marketing,
            }
          : defaultDraft,
      );
      setIsSettingsOpen(true);
      setIsVisible(true);
    }

    window.buddzaOpenCookieSettings = openSettings;
    window.addEventListener(OPEN_CONSENT_SETTINGS_EVENT_NAME, openSettings);

    queueMicrotask(() => {
      if (isCancelled) return;

      const storedConsent = getStoredConsent(window.localStorage);

      if (storedConsent) {
        setHasStoredConsent(true);
        setDraft({
          analytics: storedConsent.analytics,
          marketing: storedConsent.marketing,
        });
        applyGoogleConsent(storedConsent);
      } else {
        setIsVisible(true);
      }

      setIsLoaded(true);
    });

    return () => {
      isCancelled = true;
      window.removeEventListener(OPEN_CONSENT_SETTINGS_EVENT_NAME, openSettings);
      if (window.buddzaOpenCookieSettings === openSettings) {
        window.buddzaOpenCookieSettings = undefined;
      }
    };
  }, []);

  function saveConsent(nextDraft: ConsentDraft) {
    const consent = createConsentSettings(nextDraft);
    persistConsent(consent);
    setDraft(nextDraft);
    setHasStoredConsent(true);
    setIsVisible(false);
    setIsSettingsOpen(false);
  }

  if (!isLoaded || !isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5">
      <section
        aria-labelledby="cookie-consent-title"
        className="mx-auto w-full max-w-4xl rounded-lg border border-[#262C36]/12 bg-[#202833] p-4 text-white shadow-2xl shadow-[#262C36]/25 sm:p-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F0917B] text-[#262C36]">
              <Cookie className="size-5" aria-hidden="true" />
            </span>
            <div>
              <h2 id="cookie-consent-title" className="text-lg font-black tracking-normal">
                Cookies und Tracking
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/76">
                Wir nutzen notwendige Speicherungen für Login, Sicherheit und deine Auswahl.
                Analyse- und Marketing-Dienste, darunter Google-Signale, starten nur mit deiner Zustimmung.
              </p>
              <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold text-white/62">
                <Link href="/datenschutz" className="hover:text-white">
                  Datenschutz
                </Link>
                <Link href="/impressum" className="hover:text-white">
                  Impressum
                </Link>
              </div>
            </div>
          </div>
          {hasStoredConsent ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="shrink-0 text-white hover:bg-white/10 hover:text-white"
              aria-label="Cookie-Einstellungen schließen"
              onClick={() => {
                setIsVisible(false);
                setIsSettingsOpen(false);
              }}
            >
              <X />
            </Button>
          ) : null}
        </div>

        {isSettingsOpen ? (
          <div className="mt-5 grid gap-3 rounded-lg bg-[#fbf8f4] p-3 text-[#262C36]">
            <ConsentToggle
              checked
              disabled
              icon={ShieldCheck}
              label="Notwendig"
              description="Login, Sicherheit, Formularschutz und Speicherung deiner Cookie-Auswahl."
            />
            <ConsentToggle
              checked={draft.analytics}
              icon={BarChart3}
              label="Analyse"
              description="Datensparsame Reichweitenmessung und optional Google Analytics mit Consent Mode."
              onChange={(analytics) => setDraft((current) => ({ ...current, analytics }))}
            />
            <ConsentToggle
              checked={draft.marketing}
              icon={Megaphone}
              label="Marketing"
              description="Google AdSense, spätere Google Ads Conversions und personalisierte Werbesignale."
              onChange={(marketing) => setDraft((current) => ({ ...current, marketing }))}
            />
          </div>
        ) : null}

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          {isSettingsOpen ? (
            <Button type="button" variant="secondary" onClick={() => saveConsent(draft)}>
              <Save />
              Auswahl speichern
            </Button>
          ) : (
            <Button type="button" variant="secondary" onClick={() => setIsSettingsOpen(true)}>
              <Settings2 />
              Auswahl anpassen
            </Button>
          )}
          <Button type="button" variant="outline" className="border-white/18 text-white hover:bg-white/10" onClick={() => saveConsent(defaultDraft)}>
            <ShieldCheck />
            Nur notwendige
          </Button>
          <Button
            type="button"
            onClick={() =>
              saveConsent({
                analytics: true,
                marketing: true,
              })
            }
          >
            <Check />
            Alle akzeptieren
          </Button>
        </div>
      </section>
    </div>
  );
}
