"use client";

import { useCallback, useEffect, useRef } from "react";
import Script from "next/script";
import { CookieSettingsButton } from "@/components/consent/cookie-settings-button";
import { useConsent } from "@/components/consent/use-consent";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

type GoogleAdSenseUnitProps = {
  client: string;
  slot: string;
  label?: string;
  variant?: "feed" | "sidebar";
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const adBoxStyles = {
  feed: {
    display: "block",
    width: "100%",
    minWidth: "250px",
    maxWidth: "970px",
    height: "90px",
  },
  sidebar: {
    display: "block",
    width: "100%",
    minWidth: "250px",
    maxWidth: "336px",
    height: "280px",
  },
} satisfies Record<string, CSSProperties>;

export function GoogleAdSenseUnit({
  client,
  slot,
  label = "Anzeige",
  variant = "feed",
  className,
}: GoogleAdSenseUnitProps) {
  const pushedRef = useRef(false);
  const { consent, isLoaded } = useConsent();
  const hasMarketingConsent = consent?.marketing === true;

  const pushAd = useCallback(() => {
    if (pushedRef.current) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      pushedRef.current = true;
    }
  }, []);

  useEffect(() => {
    if (hasMarketingConsent) {
      pushAd();
    }
  }, [hasMarketingConsent, pushAd]);

  if (!isLoaded || !hasMarketingConsent) {
    return (
      <aside
        aria-label={label}
        className={cn(
          "rounded-lg border border-[#262C36]/10 bg-white p-3 shadow-sm",
          variant === "feed" ? "mx-auto w-full max-w-5xl" : "w-full",
          className,
        )}
      >
        <div className="mb-2 text-[11px] font-black uppercase tracking-normal text-[#262C36]/46">
          {label}
        </div>
        <div
          className={cn(
            "flex flex-col items-center justify-center rounded-md border border-dashed border-[#262C36]/16 bg-[#fbf8f4] px-4 py-8 text-center",
            variant === "sidebar" ? "min-h-[280px]" : "min-h-[90px]",
          )}
        >
          <p className="max-w-md text-sm font-bold leading-6 text-[#262C36]/68">
            Anzeigen werden nach deiner Marketing-Einwilligung geladen.
          </p>
          <CookieSettingsButton className="mt-3 rounded-md bg-[#F0917B] px-3 py-2 text-sm font-black text-[#262C36] no-underline hover:bg-[#D97863] hover:no-underline">
            Cookie-Einstellungen
          </CookieSettingsButton>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label={label}
      className={cn(
        "rounded-lg border border-[#262C36]/10 bg-white p-3 shadow-sm",
        variant === "feed" ? "mx-auto w-full max-w-5xl" : "w-full",
        className,
      )}
    >
      <Script
        id={`adsense-${client}`}
        async
        strategy="afterInteractive"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`}
        crossOrigin="anonymous"
        onReady={pushAd}
      />
      <div className="mb-2 text-[11px] font-black uppercase tracking-normal text-[#262C36]/46">
        {label}
      </div>
      <div className={cn("flex justify-center", variant === "sidebar" ? "overflow-hidden" : "")}>
        <ins
          key={`${client}-${slot}`}
          className="adsbygoogle"
          style={adBoxStyles[variant]}
          data-ad-client={client}
          data-ad-slot={slot}
        />
      </div>
    </aside>
  );
}
