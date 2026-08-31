import type { MetadataRoute } from "next";
import { getSiteUrl, isSupabaseConfigured } from "@/lib/config";
import { publishedGuideCategories, publishedGuideTopics } from "@/lib/ratgeber";
import { defaultSeoImage } from "@/lib/seo";
import { createClient } from "@/lib/supabase/server";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  includeDefaultImage?: boolean;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1, includeDefaultImage: true },
  { path: "/tierbetreuung-finden", changeFrequency: "weekly", priority: 0.94, includeDefaultImage: true },
  { path: "/inserate", changeFrequency: "daily", priority: 0.92, includeDefaultImage: true },
  { path: "/tierbetreuer", changeFrequency: "daily", priority: 0.9, includeDefaultImage: true },
  { path: "/inserieren", changeFrequency: "monthly", priority: 0.82 },
  { path: "/preise", changeFrequency: "monthly", priority: 0.72, includeDefaultImage: true },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7, includeDefaultImage: true },
  { path: "/ratgeber", changeFrequency: "weekly", priority: 0.86, includeDefaultImage: true },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.32 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.32 },
  { path: "/agb", changeFrequency: "yearly", priority: 0.32 },
];

type SitterSitemapRow = {
  id: string;
  created_at: string;
  updated_at: string;
};

async function getSitterSitemapEntries(siteUrl: string): Promise<MetadataRoute.Sitemap> {
  if (!isSupabaseConfigured) return [];

  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("sitter_profiles")
    .select("id, created_at, updated_at")
    .eq("status", "active")
    .order("updated_at", { ascending: false });

  if (error) {
    console.error("Failed to load sitter profiles for sitemap", error);
    return [];
  }

  return ((data as SitterSitemapRow[] | null) ?? []).map((sitter) => ({
    url: `${siteUrl}/tierbetreuer/${sitter.id}`,
    lastModified: new Date(sitter.updated_at || sitter.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.78,
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const lastModified = new Date("2026-07-09");
  const defaultImageUrl = `${siteUrl}${defaultSeoImage}`;
  const sitterEntries = await getSitterSitemapEntries(siteUrl);

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: route.includeDefaultImage ? [defaultImageUrl] : undefined,
    })),
    ...publishedGuideCategories.map((category) => ({
      url: `${siteUrl}/ratgeber/kategorie/${category.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
    ...publishedGuideTopics.map((topic) => ({
      url: `${siteUrl}/ratgeber/${topic.slug}`,
      lastModified: new Date(topic.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.68,
      images: topic.image ? [`${siteUrl}${topic.image.src}`] : [defaultImageUrl],
    })),
    ...sitterEntries,
  ];
}
