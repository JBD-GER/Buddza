"use client";

import { useMemo, useSyncExternalStore } from "react";
import {
  CONSENT_EVENT_NAME,
  CONSENT_STORAGE_KEY,
  normalizeConsent,
  type ConsentSettings,
} from "@/lib/consent";

function getConsentSnapshot(): string | null {
  if (typeof window === "undefined") return null;

  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY);
  } catch {
    return null;
  }
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
  const storedConsent = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, () => null);
  const consent = useMemo<ConsentSettings | null>(() => {
    if (!storedConsent) return null;

    try {
      return normalizeConsent(JSON.parse(storedConsent));
    } catch {
      return null;
    }
  }, [storedConsent]);

  return {
    consent,
    isLoaded: true,
  };
}
