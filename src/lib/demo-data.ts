import { distanceKm } from "@/lib/geo";
import type { Listing, MapPoint, PetCategory, SitterProfile } from "@/lib/types";

export const demoCategories: PetCategory[] = [
  { id: "cat-hund", slug: "hund", name: "Hund", emoji: null, sort_order: 10 },
  { id: "cat-katze", slug: "katze", name: "Katze", emoji: null, sort_order: 20 },
  { id: "cat-kleintier", slug: "kleintier", name: "Kleintier", emoji: null, sort_order: 30 },
  { id: "cat-vogel", slug: "vogel", name: "Vogel", emoji: null, sort_order: 40 },
  { id: "cat-fisch", slug: "fisch", name: "Fisch", emoji: null, sort_order: 50 },
  { id: "cat-aquarium", slug: "aquarium", name: "Aquarium", emoji: null, sort_order: 60 },
  { id: "cat-reptil", slug: "reptil", name: "Reptil", emoji: null, sort_order: 70 },
  { id: "cat-amphibie", slug: "amphibie", name: "Amphibie", emoji: null, sort_order: 80 },
  { id: "cat-insekt", slug: "insekt", name: "Insekt", emoji: null, sort_order: 90 },
  { id: "cat-wirbelloses", slug: "wirbelloses", name: "Wirbelloses", emoji: null, sort_order: 100 },
  { id: "cat-pferd", slug: "pferd", name: "Pferd", emoji: null, sort_order: 110 },
  { id: "cat-pony", slug: "pony", name: "Pony", emoji: null, sort_order: 120 },
  { id: "cat-hoftier", slug: "hoftier", name: "Hoftier", emoji: null, sort_order: 130 },
  { id: "cat-nutztier", slug: "nutztier", name: "Nutztier", emoji: null, sort_order: 140 },
  { id: "cat-exotisches-tier", slug: "exotisches-tier", name: "Exotisches Tier", emoji: null, sort_order: 150 },
  { id: "cat-wildtier", slug: "wildtier", name: "Wildtier", emoji: null, sort_order: 160 },
  { id: "cat-auffangstation", slug: "auffangstation", name: "Auffangstation", emoji: null, sort_order: 170 },
  { id: "cat-zoo-oder-parktier", slug: "zoo-oder-parktier", name: "Zoo- oder Parktier", emoji: null, sort_order: 180 },
  { id: "cat-sonstiges-tier", slug: "sonstiges-tier", name: "Sonstiges Tier", emoji: null, sort_order: 190 },
];

export const demoPostalCodes = [
  { postal_code: "10115", city: "Berlin", state: "Berlin", latitude: 52.5326, longitude: 13.3849 },
  { postal_code: "20095", city: "Hamburg", state: "Hamburg", latitude: 53.5507, longitude: 10.0014 },
  { postal_code: "80331", city: "München", state: "Bayern", latitude: 48.1374, longitude: 11.5755 },
  { postal_code: "50667", city: "Köln", state: "NRW", latitude: 50.9384, longitude: 6.9599 },
  { postal_code: "60311", city: "Frankfurt", state: "Hessen", latitude: 50.1123, longitude: 8.6833 },
  { postal_code: "01067", city: "Dresden", state: "Sachsen", latitude: 51.0577, longitude: 13.7333 },
  { postal_code: "48143", city: "Münster", state: "NRW", latitude: 51.9624, longitude: 7.6257 },
];

export const demoListings: Listing[] = [
  {
    id: "demo-1",
    owner_id: "owner-1",
    title: "Welpe Momo sucht Nachmittagsbetreuung",
    description:
      "Momo ist noch jung und braucht an zwei Nachmittagen pro Woche kurze, ruhige Besuche mit Spielzeit und kleinen Gassi-Runden.",
    postal_code: "10115",
    city: "Berlin",
    care_location: "flexible",
    frequency: "weekly",
    duration_value: 2,
    duration_unit: "hours",
    main_image_path: "demo/example-puppy",
    main_image_url: "/images/generated/example-puppy.jpg",
    status: "active",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
    category_slug: "hund",
    category_name: "Hund",
    owner_name: "Lea",
    latitude: 52.5326,
    longitude: 13.3849,
  },
  {
    id: "demo-2",
    owner_id: "owner-2",
    title: "Bruno braucht seine Abendrunde",
    description:
      "Bruno ist erwachsen, freundlich und sucht abends jemanden für eine verlässliche Runde in der Nachbarschaft.",
    postal_code: "20095",
    city: "Hamburg",
    care_location: "outdoor",
    frequency: "daily",
    duration_value: 1,
    duration_unit: "hours",
    main_image_path: "demo/example-adult-dog",
    main_image_url: "/images/generated/example-adult-dog.jpg",
    status: "active",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    category_slug: "hund",
    category_name: "Hund",
    owner_name: "Jonas",
    latitude: 53.5507,
    longitude: 10.0014,
  },
  {
    id: "demo-3",
    owner_id: "owner-3",
    title: "Seniorhündin Lotte mag es ruhig",
    description:
      "Lotte ist eine liebe Seniorhündin und braucht ruhige, kurze Betreuung mit Geduld und festen Routinen.",
    postal_code: "50667",
    city: "Köln",
    care_location: "owner_home",
    frequency: "weekends",
    duration_value: 2,
    duration_unit: "hours",
    main_image_path: "demo/example-senior-dog",
    main_image_url: "/images/generated/example-senior-dog.jpg",
    status: "active",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    category_slug: "hund",
    category_name: "Hund",
    owner_name: "Amira",
    latitude: 50.9384,
    longitude: 6.9599,
  },
];

export const demoSitters: SitterProfile[] = [
  {
    id: "sitter-1",
    user_id: "sitter-user-1",
    headline: "Ruhige Gassi-Runden und Besuchsdienst",
    description:
      "Ich betreue Hunde im Alltag mit festen Routinen, klarer Absprache und viel Ruhe. Besonders gern übernehme ich Spaziergänge, Fütterung und kurze Hausbesuche.",
    profile_image_path: "demo/sitter-mara",
    profile_image_url: "/images/generated/example-adult-dog.jpg",
    postal_code: "10115",
    city: "Berlin",
    radius_km: 8,
    hourly_rate_cents: 2200,
    status: "active",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 9).toISOString(),
    categories: demoCategories.filter((category) => ["hund", "katze", "kleintier"].includes(category.slug)),
    availability: [1, 2, 3, 4, 5],
    profile: {
      id: "sitter-user-1",
      full_name: "Mara Stein",
      avatar_url: null,
    },
    latitude: 52.5326,
    longitude: 13.3849,
  },
  {
    id: "sitter-2",
    user_id: "sitter-user-2",
    headline: "Katzen, Kleintiere und ruhige Betreuung zuhause",
    description:
      "Ich komme zu dir nach Hause, halte Futterzeiten ein, reinige kleine Bereiche und sende nach dem Besuch kurze Updates. Ideal für Katzen und Kleintiere.",
    profile_image_path: "demo/sitter-nina",
    profile_image_url: "/images/generated/register-dog-desk.jpg",
    postal_code: "50667",
    city: "Köln",
    radius_km: 12,
    hourly_rate_cents: 1800,
    status: "active",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 16).toISOString(),
    categories: demoCategories.filter((category) => ["katze", "kleintier", "vogel"].includes(category.slug)),
    availability: [2, 3, 4, 6],
    profile: {
      id: "sitter-user-2",
      full_name: "Nina Albers",
      avatar_url: null,
    },
    latitude: 50.9384,
    longitude: 6.9599,
  },
  {
    id: "sitter-3",
    user_id: "sitter-user-3",
    headline: "Seniorhunde, Medikamente und geduldige Routinen",
    description:
      "Ich habe Erfahrung mit älteren Hunden, langsameren Runden und genauer Dokumentation. Vor dem ersten Termin klären wir Gewohnheiten und Notfallkontakte.",
    profile_image_path: "demo/sitter-tobias",
    profile_image_url: "/images/generated/example-senior-dog.jpg",
    postal_code: "20095",
    city: "Hamburg",
    radius_km: 10,
    hourly_rate_cents: 2600,
    status: "active",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
    categories: demoCategories.filter((category) => ["hund", "pferd"].includes(category.slug)),
    availability: [1, 3, 5, 7],
    profile: {
      id: "sitter-user-3",
      full_name: "Tobias Kern",
      avatar_url: null,
    },
    latitude: 53.5507,
    longitude: 10.0014,
  },
];

export function getDemoMapPoints(): MapPoint[] {
  return demoListings.map((listing) => ({
    id: listing.id,
    title: listing.title,
    postal_code: listing.postal_code,
    city: listing.city ?? "",
    latitude: listing.latitude ?? 0,
    longitude: listing.longitude ?? 0,
    category_slug: listing.category_slug ?? "",
    category_name: listing.category_name ?? "",
    created_at: listing.created_at,
  }));
}

export function searchDemoListings(postalCode?: string, radiusKm = 50, categorySlug?: string) {
  const center = demoPostalCodes.find((item) => item.postal_code === postalCode);

  return demoListings
    .filter((listing) => !categorySlug || listing.category_slug === categorySlug)
    .map((listing) => {
      if (!center || !listing.latitude || !listing.longitude) {
        return { ...listing, distance_km: null };
      }

      return {
        ...listing,
        distance_km: Number(
          distanceKm(center, {
            latitude: listing.latitude,
            longitude: listing.longitude,
          }).toFixed(1),
        ),
      };
    })
    .filter((listing) => listing.distance_km === null || listing.distance_km <= radiusKm)
    .sort((a, b) => (a.distance_km ?? 9999) - (b.distance_km ?? 9999));
}

export function searchDemoSitters(postalCode?: string, radiusKm = 50, categorySlug?: string) {
  const center = demoPostalCodes.find((item) => item.postal_code === postalCode);

  return demoSitters
    .filter((sitter) => !categorySlug || sitter.categories.some((category) => category.slug === categorySlug))
    .map((sitter) => {
      if (!center || !sitter.latitude || !sitter.longitude) {
        return { ...sitter, distance_km: null };
      }

      return {
        ...sitter,
        distance_km: Number(
          distanceKm(center, {
            latitude: sitter.latitude,
            longitude: sitter.longitude,
          }).toFixed(1),
        ),
      };
    })
    .filter((sitter) => sitter.distance_km === null || sitter.distance_km <= radiusKm)
    .sort((a, b) => (a.distance_km ?? 9999) - (b.distance_km ?? 9999));
}
