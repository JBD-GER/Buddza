import { unstable_noStore as noStore } from "next/cache";
import { demoCategories, demoListings, getDemoMapPoints, searchDemoListings } from "@/lib/demo-data";
import { isSupabaseConfigured } from "@/lib/config";
import { createClient } from "@/lib/supabase/server";
import type { Listing, MapPoint, PetCategory } from "@/lib/types";

type SupabaseRow = Record<string, unknown>;
type ListingSearchParams = {
  postalCode?: string;
  radiusKm?: number;
  categorySlug?: string;
};

function getPublicUrl(
  supabase: NonNullable<Awaited<ReturnType<typeof createClient>>> | undefined,
  path?: unknown,
) {
  if (!supabase || typeof path !== "string" || !path) return null;
  const { data } = supabase.storage.from("listing-media").getPublicUrl(path);
  return data.publicUrl;
}

function asRow(value: unknown): SupabaseRow | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as SupabaseRow) : null;
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asNumber(value: unknown) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function normalizeListing(row: SupabaseRow, supabase?: NonNullable<Awaited<ReturnType<typeof createClient>>>): Listing {
  const category = asRow(row.pet_categories) ?? asRow(row.category);
  const profile = asRow(row.profiles) ?? asRow(row.profile);
  const postalCode = asRow(row.postal_codes);

  return {
    id: asString(row.id),
    owner_id: asString(row.owner_id),
    title: asString(row.title),
    description: asString(row.description),
    postal_code: asString(row.postal_code),
    city: asString(row.city ?? postalCode?.city, "") || null,
    care_location: row.care_location as Listing["care_location"],
    frequency: row.frequency as Listing["frequency"],
    duration_value: Number(row.duration_value),
    duration_unit: row.duration_unit as Listing["duration_unit"],
    starts_at: asString(row.starts_at, "") || null,
    main_image_path: asString(row.main_image_path),
    main_image_url: asString(row.main_image_url, "") || getPublicUrl(supabase, row.main_image_path),
    video_path: asString(row.video_path, "") || null,
    video_url: asString(row.video_url, "") || getPublicUrl(supabase, row.video_path),
    status: row.status as Listing["status"],
    created_at: asString(row.created_at),
    category_slug: asString(row.category_slug ?? category?.slug, ""),
    category_name: asString(row.category_name ?? category?.name, ""),
    category: category as Listing["category"],
    owner_name: asString(row.owner_name ?? profile?.full_name, "") || null,
    profile: profile as Listing["profile"],
    latitude: asNumber(row.latitude ?? postalCode?.latitude),
    longitude: asNumber(row.longitude ?? postalCode?.longitude),
    distance_km: row.distance_km === undefined || row.distance_km === null ? null : Number(row.distance_km),
  };
}

export async function getCategories(): Promise<PetCategory[]> {
  noStore();

  if (!isSupabaseConfigured) {
    return demoCategories;
  }

  const supabase = await createClient();
  if (!supabase) return demoCategories;

  const { data, error } = await supabase
    .from("pet_categories")
    .select("id, slug, name, emoji, sort_order")
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to load categories", error);
    return [];
  }

  return data ?? [];
}

export async function getMapPoints(): Promise<MapPoint[]> {
  noStore();

  if (!isSupabaseConfigured) {
    return getDemoMapPoints();
  }

  const supabase = await createClient();
  if (!supabase) return getDemoMapPoints();

  const { data, error } = await supabase
    .from("active_listing_map_points")
    .select("id, title, postal_code, city, latitude, longitude, category_slug, category_name, created_at")
    .order("created_at", { ascending: false })
    .limit(2000);

  if (error) {
    console.error("Failed to load map points", error);
    return [];
  }

  return (data ?? []).map((point: SupabaseRow) => ({
    id: asString(point.id),
    title: asString(point.title),
    postal_code: asString(point.postal_code),
    city: asString(point.city),
    latitude: Number(point.latitude),
    longitude: Number(point.longitude),
    category_slug: asString(point.category_slug),
    category_name: asString(point.category_name),
    created_at: asString(point.created_at),
  }));
}

export async function getListings(params: ListingSearchParams = {}): Promise<Listing[]> {
  noStore();

  const radiusKm = params.radiusKm ?? 50;

  if (!isSupabaseConfigured) {
    return searchDemoListings(params.postalCode, radiusKm, params.categorySlug);
  }

  const supabase = await createClient();
  if (!supabase) return demoListings;

  if (params.postalCode) {
    const { data, error } = await supabase.rpc("search_listings_by_radius", {
      search_postal_code: params.postalCode,
      search_radius_km: radiusKm,
      search_category_slug: params.categorySlug || null,
    });

    if (error) {
      console.error("Failed to search listings", error);
      return [];
    }

    return (data ?? []).map((row: SupabaseRow) => normalizeListing(row, supabase));
  }

  let query = supabase
    .from("listings")
    .select(
      `
        id,
        owner_id,
        title,
        description,
        postal_code,
        care_location,
        frequency,
        duration_value,
        duration_unit,
        starts_at,
        main_image_path,
        video_path,
        status,
        created_at,
        pet_categories!listings_category_id_fkey(id, slug, name, emoji),
        profiles!listings_owner_id_fkey(id, full_name, avatar_url),
        postal_codes!listings_postal_code_fkey(city, latitude, longitude)
      `,
    )
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(36);

  if (params.categorySlug) {
    query = query.eq("pet_categories.slug", params.categorySlug);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Failed to load listings", error);
    return [];
  }

  return (data ?? []).map((row: SupabaseRow) => normalizeListing(row, supabase));
}

export async function getListingById(id: string): Promise<Listing | null> {
  noStore();

  if (!isSupabaseConfigured) {
    return demoListings.find((listing) => listing.id === id) ?? null;
  }

  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("listings")
    .select(
      `
        id,
        owner_id,
        title,
        description,
        postal_code,
        care_location,
        frequency,
        duration_value,
        duration_unit,
        starts_at,
        main_image_path,
        video_path,
        status,
        created_at,
        pet_categories!listings_category_id_fkey(id, slug, name, emoji),
        profiles!listings_owner_id_fkey(id, full_name, avatar_url),
        postal_codes!listings_postal_code_fkey(city, latitude, longitude)
      `,
    )
    .eq("id", id)
    .single();

  if (error) {
    console.error("Failed to load listing", error);
    return null;
  }

  return normalizeListing(data, supabase);
}

export async function getUserListings(userId: string): Promise<Listing[]> {
  noStore();

  if (!isSupabaseConfigured) {
    return [];
  }

  const supabase = await createClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("listings")
    .select(
      `
        id,
        owner_id,
        title,
        description,
        postal_code,
        care_location,
        frequency,
        duration_value,
        duration_unit,
        starts_at,
        main_image_path,
        video_path,
        status,
        created_at,
        pet_categories!listings_category_id_fkey(id, slug, name, emoji),
        postal_codes!listings_postal_code_fkey(city, latitude, longitude)
      `,
    )
    .eq("owner_id", userId)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to load user listings", error);
    return [];
  }

  return (data ?? []).map((row: SupabaseRow) => normalizeListing(row, supabase));
}
