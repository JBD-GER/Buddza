import { getSiteUrl } from "@/lib/config";

export const siteName = "Buddza";
export const defaultSeoImage = "/images/generated/dogs-ages-hero.jpg";

export function absoluteUrl(path = "/") {
  const siteUrl = getSiteUrl();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

export function buildTitle(title: string) {
  return title;
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replaceAll("<", "\\u003c"),
  };
}
