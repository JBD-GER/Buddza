export const CONSENT_VERSION = 1;
export const CONSENT_STORAGE_KEY = "buddza_cookie_consent_v1";
export const CONSENT_COOKIE_NAME = "buddza_cookie_consent";
export const CONSENT_EVENT_NAME = "buddza:consentchange";
export const OPEN_CONSENT_SETTINGS_EVENT_NAME = "buddza:openConsentSettings";

export type ConsentSettings = {
  version: typeof CONSENT_VERSION;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export type ConsentDraft = Pick<ConsentSettings, "analytics" | "marketing">;

export type GoogleConsentValue = "granted" | "denied";

export function createConsentSettings(draft: ConsentDraft): ConsentSettings {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: Boolean(draft.analytics),
    marketing: Boolean(draft.marketing),
    updatedAt: new Date().toISOString(),
  };
}

export function normalizeConsent(value: unknown): ConsentSettings | null {
  if (!value || typeof value !== "object") return null;

  const consent = value as Partial<ConsentSettings>;

  if (consent.version !== CONSENT_VERSION) return null;

  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: consent.analytics === true,
    marketing: consent.marketing === true,
    updatedAt: typeof consent.updatedAt === "string" ? consent.updatedAt : new Date().toISOString(),
  };
}

export function getStoredConsent(storage: Storage): ConsentSettings | null {
  const storedConsent = storage.getItem(CONSENT_STORAGE_KEY);

  if (!storedConsent) return null;

  try {
    return normalizeConsent(JSON.parse(storedConsent));
  } catch {
    return null;
  }
}

export function toGoogleConsentState(consent: ConsentSettings): Record<string, GoogleConsentValue> {
  return {
    ad_storage: consent.marketing ? "granted" : "denied",
    ad_user_data: consent.marketing ? "granted" : "denied",
    ad_personalization: consent.marketing ? "granted" : "denied",
    analytics_storage: consent.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: consent.marketing ? "granted" : "denied",
  };
}
