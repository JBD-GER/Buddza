import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/config";
import { categoryPages } from "@/lib/category-pages";
import { guideCategories, guideTopics } from "@/lib/ratgeber";

const staticRoutes = [
  "/",
  "/inserate",
  "/tierbetreuer",
  "/inserieren",
  "/preise",
  "/ueber-uns",
  "/ratgeber",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date("2026-07-06");

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified,
      changeFrequency: route === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: route === "/" ? 1 : 0.8,
    })),
    ...categoryPages.map((page) => ({
      url: `${siteUrl}/tierbetreuung/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.82,
    })),
    ...guideCategories.map((category) => ({
      url: `${siteUrl}/ratgeber/kategorie/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
    ...guideTopics.map((topic) => ({
      url: `${siteUrl}/ratgeber/${topic.slug}`,
      lastModified: new Date(topic.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.68,
    })),
  ];
}
