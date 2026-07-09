/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from "next/script";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";

const googleConsentModeScript = `
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: "denied",
    wait_for_update: 500
  });

  try {
    var storedConsent = window.localStorage.getItem("${CONSENT_STORAGE_KEY}");
    if (!storedConsent) return;

    var consent = JSON.parse(storedConsent);
    var analytics = consent && consent.version === 1 && consent.analytics === true;
    var marketing = consent && consent.version === 1 && consent.marketing === true;

    window.gtag("consent", "update", {
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
      analytics_storage: analytics ? "granted" : "denied",
      functionality_storage: "granted",
      security_storage: "granted",
      personalization_storage: marketing ? "granted" : "denied"
    });
  } catch (error) {}
})();
`;

export function GoogleConsentModeScript() {
  return (
    <Script
      id="buddza-google-consent-mode"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: googleConsentModeScript }}
    />
  );
}
