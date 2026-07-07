import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/config";
import { categoryPages } from "@/lib/category-pages";
import { guideCategories, guideTopics } from "@/lib/ratgeber";
import { defaultSeoImage } from "@/lib/seo";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  includeDefaultImage?: boolean;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1, includeDefaultImage: true },
  { path: "/inserate", changeFrequency: "daily", priority: 0.92, includeDefaultImage: true },
  { path: "/tierbetreuer", changeFrequency: "daily", priority: 0.9, includeDefaultImage: true },
  { path: "/inserieren", changeFrequency: "monthly", priority: 0.82 },
  { path: "/preise", changeFrequency: "monthly", priority: 0.72, includeDefaultImage: true },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7, includeDefaultImage: true },
  { path: "/ratgeber", changeFrequency: "weekly", priority: 0.86, includeDefaultImage: true },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const lastModified = new Date("2026-07-07");
  const defaultImageUrl = `${siteUrl}${defaultSeoImage}`;

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: route.includeDefaultImage ? [defaultImageUrl] : undefined,
    })),
    ...categoryPages.map((page) => ({
      url: `${siteUrl}/tierbetreuung/${page.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.84,
      images: [defaultImageUrl],
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
      images: topic.image ? [`${siteUrl}${topic.image.src}`] : [defaultImageUrl],
    })),
  ];
}
