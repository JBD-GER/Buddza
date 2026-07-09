"use client";

import Script from "next/script";
import { useConsent } from "@/components/consent/use-consent";

type GoogleTagProps = {
  tagId?: string;
};

export function GoogleTag({ tagId }: GoogleTagProps) {
  const { consent, isLoaded } = useConsent();

  if (!tagId || !isLoaded || (!consent?.analytics && !consent?.marketing)) return null;

  const serializedTagId = JSON.stringify(tagId);

  return (
    <>
      <Script
        id="buddza-google-tag-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId)}`}
      />
      <Script id="buddza-google-tag-config" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('config', ${serializedTagId}, { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
