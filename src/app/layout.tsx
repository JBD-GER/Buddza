import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { ConsentAwareAnalytics } from "@/components/analytics/consent-aware-analytics";
import { GoogleTag } from "@/components/analytics/google-tag";
import { AppFooter } from "@/components/app/app-footer";
import { AppHeader } from "@/components/app/app-header";
import { CookieConsentBanner } from "@/components/consent/cookie-consent-banner";
import { GoogleConsentModeScript } from "@/components/consent/google-consent-mode-script";
import {
  absoluteUrl,
  defaultDescription,
  defaultKeywords,
  defaultSeoImage,
  defaultSeoImageAlt,
  siteName,
} from "@/lib/seo";
import "maplibre-gl/dist/maplibre-gl.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: "Buddza - Tierbetreuung in deiner Nähe",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  applicationName: siteName,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Tierbetreuung",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName,
    title: "Buddza - Tierbetreuung in deiner Nähe",
    description:
      "Tierbetreuung lokal per PLZ finden oder anbieten: Inserate, Tierbetreuer, Anfragen und Ratgeber.",
    url: "/",
    images: [
      {
        url: defaultSeoImage,
        width: 1200,
        height: 800,
        alt: defaultSeoImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buddza - Tierbetreuung in deiner Nähe",
    description: "Lokale Tierbetreuung per PLZ finden oder anbieten.",
    images: [defaultSeoImage],
  },
  icons: {
    icon: "/images/Buddza_Favicon.png",
    shortcut: "/images/Buddza_Favicon.png",
    apple: "/images/Buddza_Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const googleTagId = process.env.NEXT_PUBLIC_GOOGLE_TAG_ID?.trim();

  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fbf8f4] text-[#262C36]">
        <GoogleConsentModeScript />
        <div className="flex min-h-screen flex-col">
          <AppHeader />
          {children}
          <AppFooter />
        </div>
        <Toaster richColors closeButton position="top-center" />
        <GoogleTag tagId={googleTagId} />
        <ConsentAwareAnalytics />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
