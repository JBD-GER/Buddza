import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/config";

export const siteName = "Buddza";
export const defaultSeoImage = "/images/generated/dogs-ages-hero.jpg";
export const defaultSeoImageAlt = "Hunde in einem Zuhause als Symbol für lokale Tierbetreuung";
export const defaultDescription =
  "Buddza ist eine lokale Plattform für Tierbetreuung mit PLZ-basierter Suche, Inseraten, Tierbetreuer-Profilen und Ratgeber.";
export const defaultKeywords = [
  "Tierbetreuung",
  "Hundebetreuung",
  "Katzenbetreuung",
  "Tierbetreuer",
  "Haustiersitter",
  "Gassi-Service",
  "PLZ Suche",
  "Deutschland",
];

type SeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
  robots?: Metadata["robots"];
};

export function absoluteUrl(path = "/") {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function toAbsoluteUrl(path?: string | null) {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  return absoluteUrl(path);
}

export function buildTitle(title: string) {
  return title;
}

export function createSeoMetadata({
  title,
  description,
  path,
  image = defaultSeoImage,
  imageAlt = defaultSeoImageAlt,
  keywords = defaultKeywords,
  type = "website",
  publishedTime,
  tags,
  robots,
}: SeoMetadataOptions): Metadata {
  return {
    title: buildTitle(title),
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    robots,
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: "de_DE",
      type,
      publishedTime,
      tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 800,
          alt: imageAlt,
        },
      ],
    } as Metadata["openGraph"],
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function createNoIndexMetadata(title?: string): Metadata {
  return {
    title,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        "max-image-preview": "none",
        "max-snippet": 0,
        "max-video-preview": 0,
      },
    },
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
  };
}
