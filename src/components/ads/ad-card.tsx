/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef } from "react";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { AdCampaign } from "@/lib/ads";
import { cn } from "@/lib/utils";

type AdCardProps = {
  ad: AdCampaign;
  listingId?: string;
  variant?: "feed" | "sidebar";
};

type AdEventType = "impression" | "click";

function getSessionKey() {
  const key = "buddza_ad_session";

  try {
    const existing = window.sessionStorage.getItem(key);
    if (existing) return existing;

    const sessionKey =
      typeof window.crypto?.randomUUID === "function"
        ? window.crypto.randomUUID()
        : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    window.sessionStorage.setItem(key, sessionKey);
    return sessionKey;
  } catch {
    return null;
  }
}

function trackAdEvent(ad: AdCampaign, eventType: AdEventType, listingId?: string) {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify({
    adId: ad.id,
    placement: ad.placement,
    eventType,
    pagePath: `${window.location.pathname}${window.location.search}`,
    listingId,
    sessionKey: getSessionKey(),
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/ad-events", new Blob([payload], { type: "application/json" }));
    return;
  }

  void fetch("/api/ad-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: payload,
    keepalive: true,
  });
}

export function AdCard({ ad, listingId, variant = "feed" }: AdCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const trackedImpressionRef = useRef(false);
  const impressionTimerRef = useRef<number | null>(null);
  const isExternalTarget = /^https?:\/\//i.test(ad.targetUrl);

  useEffect(() => {
    const node = cardRef.current;
    if (!node || trackedImpressionRef.current) return;

    const trackImpression = () => {
      if (trackedImpressionRef.current) return;
      trackedImpressionRef.current = true;
      trackAdEvent(ad, "impression", listingId);
    };

    if (typeof IntersectionObserver === "undefined") {
      impressionTimerRef.current = window.setTimeout(trackImpression, 900);
      return () => {
        if (impressionTimerRef.current) window.clearTimeout(impressionTimerRef.current);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (trackedImpressionRef.current) {
          observer.disconnect();
          return;
        }

        if (entry?.isIntersecting && entry.intersectionRatio >= 0.5) {
          impressionTimerRef.current = window.setTimeout(trackImpression, 800);
          return;
        }

        if (impressionTimerRef.current) {
          window.clearTimeout(impressionTimerRef.current);
          impressionTimerRef.current = null;
        }
      },
      { threshold: [0, 0.5, 1] },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (impressionTimerRef.current) window.clearTimeout(impressionTimerRef.current);
    };
  }, [ad, listingId]);

  return (
    <article
      ref={cardRef}
      className={cn(
        "grid h-full overflow-hidden rounded-lg border border-[#262C36]/10 bg-[#202833] text-white shadow-sm",
        variant === "sidebar" ? "h-auto" : "",
      )}
    >
      {ad.imageUrl ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-[#111820]">
          <img src={ad.imageUrl} alt="" className="size-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-[#111820]/36" aria-hidden="true" />
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            <Badge className="bg-white text-[#262C36]">{ad.label}</Badge>
            <Badge className="bg-[#F5C86B] text-[#262C36]">{ad.advertiserName}</Badge>
          </div>
        </div>
      ) : null}
      <div className="grid gap-3 p-4">
        {!ad.imageUrl ? (
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-white text-[#262C36]">{ad.label}</Badge>
            <Badge className="bg-[#F5C86B] text-[#262C36]">{ad.advertiserName}</Badge>
          </div>
        ) : null}
        <div>
          <h3 className="text-lg font-black leading-tight tracking-normal">{ad.title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/74">{ad.description}</p>
        </div>
        <a
          href={ad.targetUrl}
          target={isExternalTarget ? "_blank" : undefined}
          rel="sponsored noopener noreferrer"
          onClick={() => trackAdEvent(ad, "click", listingId)}
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-white px-3 text-sm font-black text-[#262C36] transition-colors hover:bg-[#F5C86B]"
        >
          {ad.ctaLabel}
          <ExternalLink className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
