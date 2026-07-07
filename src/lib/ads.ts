import { unstable_noStore as noStore } from "next/cache";
import { isSupabaseConfigured } from "@/lib/config";
import { createClient } from "@/lib/supabase/server";

export type AdPlacement = "listings_feed" | "listing_detail";

export type AdCampaign = {
  id: string;
  slug: string;
  placement: AdPlacement;
  label: string;
  advertiserName: string;
  title: string;
  description: string;
  imageUrl: string | null;
  targetUrl: string;
  ctaLabel: string;
};

type AdRow = Record<string, unknown>;

const fallbackAds: AdCampaign[] = [
  {
    id: "6cbfd216-1d8e-43e2-9d0b-7c1c2c92304b",
    slug: "werbeplatz-inserate",
    placement: "listings_feed",
    label: "Anzeige",
    advertiserName: "Buddza Media",
    title: "Hier können Tiermarken werben",
    description:
      "Erreiche Menschen, die gerade aktiv Tierbetreuung suchen oder anbieten. Sichere dir einen lokalen Werbeplatz.",
    imageUrl: "/images/generated/dogs-ages-hero.jpg",
    targetUrl: "mailto:werbung@buddza.de?subject=Werbeplatz%20auf%20Buddza",
    ctaLabel: "Werbeplatz anfragen",
  },
  {
    id: "8af54ff1-8bed-4bd1-9b2d-0f95f786ee5b",
    slug: "werbeplatz-inserat-detail",
    placement: "listing_detail",
    label: "Anzeige",
    advertiserName: "Buddza Media",
    title: "Sichtbar neben passenden Gesuchen",
    description:
      "Platziere dein Angebot direkt dort, wo Halter eine konkrete Betreuung planen.",
    imageUrl: "/images/generated/login-dog-hallway.jpg",
    targetUrl: "mailto:werbung@buddza.de?subject=Werbeplatz%20in%20Inseratsdetails",
    ctaLabel: "Werbung buchen",
  },
];

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function normalizeAd(row: AdRow): AdCampaign {
  return {
    id: asString(row.id),
    slug: asString(row.slug),
    placement: row.placement as AdPlacement,
    label: asString(row.label, "Anzeige"),
    advertiserName: asString(row.advertiser_name),
    title: asString(row.title),
    description: asString(row.description),
    imageUrl: asString(row.image_url, "") || null,
    targetUrl: asString(row.target_url),
    ctaLabel: asString(row.cta_label, "Mehr erfahren"),
  };
}

function hasSupabaseCode(error: unknown, code: string) {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === code);
}

function getFallbackAds(placement: AdPlacement, limit: number) {
  return fallbackAds.filter((ad) => ad.placement === placement).slice(0, limit);
}

export async function getAdsForPlacement(placement: AdPlacement, limit = 1): Promise<AdCampaign[]> {
  noStore();

  if (!isSupabaseConfigured) {
    return getFallbackAds(placement, limit);
  }

  const supabase = await createClient();
  if (!supabase) return getFallbackAds(placement, limit);

  const now = new Date().toISOString();
  const { data, error } = await supabase
    .from("ads")
    .select("id, slug, placement, label, advertiser_name, title, description, image_url, target_url, cta_label")
    .eq("placement", placement)
    .eq("status", "active")
    .lte("starts_at", now)
    .or(`ends_at.is.null,ends_at.gte.${now}`)
    .order("priority", { ascending: true })
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    if (!hasSupabaseCode(error, "PGRST205")) {
      console.error("Failed to load ads", error);
    }
    return getFallbackAds(placement, limit);
  }

  const ads = (data ?? []).map((row: AdRow) => normalizeAd(row));
  return ads.length ? ads : getFallbackAds(placement, limit);
}
