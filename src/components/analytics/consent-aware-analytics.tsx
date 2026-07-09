"use client";

import { Analytics } from "@vercel/analytics/next";
import { useConsent } from "@/components/consent/use-consent";

export function ConsentAwareAnalytics() {
  const { consent, isLoaded } = useConsent();

  if (!isLoaded || !consent?.analytics) return null;

  return <Analytics />;
}
