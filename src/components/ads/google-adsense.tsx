"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
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

  useEffect(() => {
    if (pushedRef.current) return;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
      pushedRef.current = true;
    } catch {
      pushedRef.current = true;
    }
  }, [client, slot]);

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
