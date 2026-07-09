"use client";

import { useSyncExternalStore } from "react";
import { CONSENT_EVENT_NAME, getStoredConsent, type ConsentSettings } from "@/lib/consent";

function getConsentSnapshot(): ConsentSettings | null {
  if (typeof window === "undefined") return null;

  return getStoredConsent(window.localStorage);
}

function subscribeToConsent(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener(CONSENT_EVENT_NAME, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CONSENT_EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useConsent() {
  const consent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, () => null);

  return {
    consent,
    isLoaded: true,
  };
}
