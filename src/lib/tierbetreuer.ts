import { unstable_noStore as noStore } from "next/cache";
import { demoSitters, searchDemoSitters } from "@/lib/demo-data";
import { distanceKm } from "@/lib/geo";
import { isSupabaseConfigured } from "@/lib/config";
import { createClient } from "@/lib/supabase/server";
import type { PetCategory, SitterProfile, Weekday } from "@/lib/types";

type SupabaseRow = Record<string, unknown>;
type SupabaseClient = NonNullable<Awaited<ReturnType<typeof createClient>>>;
type SitterSearchParams = {
  postalCode?: string;
  radiusKm?: number;
  categorySlug?: string;
};
type SitterDistanceRow = {
  id?: unknown;
  distance_km?: unknown;
};
type PostalCodeCenter = {
  latitude: number;
  longitude: number;
};

const sitterSelect = `
  id,
  user_id,
  headline,
  description,
  profile_image_path,
  postal_code,
  radius_km,
  hourly_rate_cents,
  status,
  created_at,
  profiles!sitter_profiles_user_id_fkey(id, full_name, avatar_url),
  postal_codes!sitter_profiles_postal_code_fkey(city, latitude, longitude),
  sitter_profile_categories(
    pet_categories!sitter_profile_categories_category_id_fkey(id, slug, name, emoji, sort_order)
  ),
  sitter_profile_availability(weekday)
`;

export const weekdayOptions: Array<{ value: Weekday; label: string; longLabel: string }> = [
  { value: 1, label: "Mo", longLabel: "Montag" },
  { value: 2, label: "Di", longLabel: "Dienstag" },
  { value: 3, label: "Mi", longLabel: "Mittwoch" },
  { value: 4, label: "Do", longLabel: "Donnerstag" },
  { value: 5, label: "Fr", longLabel: "Freitag" },
  { value: 6, label: "Sa", longLabel: "Samstag" },
  { value: 7, label: "So", longLabel: "Sonntag" },
];

function getPublicUrl(
  supabase: NonNullable<Awaited<ReturnType<typeof createClient>>> | undefined,
  path?: unknown,
) {
  if (!supabase || typeof path !== "string" || !path) return null;
  const { data } = supabase.storage.from("sitter-media").getPublicUrl(path);
  return data.publicUrl;
}

function asRow(value: unknown): SupabaseRow | null {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as SupabaseRow) : null;
}

function asRows(value: unknown): SupabaseRow[] {
  return Array.isArray(value) ? (value.filter(Boolean) as SupabaseRow[]) : [];
}

function asString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function asNumber(value: unknown) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function hasSupabaseCode(error: unknown, code: string) {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === code);
}

function parseDistanceRows(rows: SitterDistanceRow[] | null) {
  return (rows ?? [])
    .map((row) => ({
      id: asString(row.id),
      distanceKm: asNumber(row.distance_km),
    }))
    .filter((row) => row.id);
}

function normalizeSitter(
  row: SupabaseRow,
  supabase?: SupabaseClient,
): SitterProfile {
  const profile = asRow(row.profiles) ?? asRow(row.profile);
  const postalCode = asRow(row.postal_codes);
  const categories = asRows(row.sitter_profile_categories)
    .map((item) => asRow(item.pet_categories) ?? asRow(item.category))
    .filter(Boolean) as PetCategory[];
  const availability = asRows(row.sitter_profile_availability)
    .map((item) => Number(item.weekday))
    .filter((weekday): weekday is Weekday => weekday >= 1 && weekday <= 7);

  return {
    id: asString(row.id),
    user_id: asString(row.user_id),
    headline: asString(row.headline),
    description: asString(row.description),
    profile_image_path: asString(row.profile_image_path),
    profile_image_url: asString(row.profile_image_url, "") || getPublicUrl(supabase, row.profile_image_path),
    postal_code: asString(row.postal_code),
    city: asString(row.city ?? postalCode?.city, "") || null,
    radius_km: Number(row.radius_km),
    hourly_rate_cents: Number(row.hourly_rate_cents),
    status: row.status as SitterProfile["status"],
    created_at: asString(row.created_at),
    categories,
    availability,
    profile: profile as SitterProfile["profile"],
    latitude: asNumber(row.latitude ?? postalCode?.latitude),
    longitude: asNumber(row.longitude ?? postalCode?.longitude),
    distance_km: row.distance_km === undefined || row.distance_km === null ? null : Number(row.distance_km),
  };
}

function filterByCategory(sitters: SitterProfile[], categorySlug?: string) {
  return categorySlug
    ? sitters.filter((sitter) => sitter.categories.some((category) => category.slug === categorySlug))
    : sitters;
}

function filterByDistance(sitters: SitterProfile[], center?: PostalCodeCenter | null, radiusKm = 50) {
  if (!center) return [];

  return sitters
    .map((sitter) => {
      if (!sitter.latitude || !sitter.longitude) return { ...sitter, distance_km: null };

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
    .filter((sitter) => {
      if (sitter.distance_km === null) return false;
      return sitter.distance_km <= radiusKm && sitter.distance_km <= sitter.radius_km;
    })
    .sort((a, b) => (a.distance_km ?? 9999) - (b.distance_km ?? 9999));
}

async function loadActiveSittersWithClientFilters(
  supabase: SupabaseClient,
  params: SitterSearchParams,
  radiusKm: number,
  limit = 120,
) {
  const { data, error } = await supabase
    .from("sitter_profiles")
    .select(sitterSelect)
    .eq("status", "active")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Failed to load sitters", error);
    return [];
  }

  const filteredByCategory = filterByCategory(
    (data ?? []).map((row: SupabaseRow) => normalizeSitter(row, supabase)),
    params.categorySlug,
  );

  if (!params.postalCode) return filteredByCategory;

  const { data: center } = await supabase
    .from("postal_codes")
    .select("latitude, longitude")
    .eq("postal_code", params.postalCode)
    .maybeSingle();

  return filterByDistance(
    filteredByCategory,
    center
      ? {
          latitude: Number(center.latitude),
          longitude: Number(center.longitude),
        }
      : null,
    radiusKm,
  );
}

export async function getSitters(params: SitterSearchParams = {}): Promise<SitterProfile[]> {
  noStore();

  const radiusKm = params.radiusKm ?? 50;

  if (!isSupabaseConfigured) {
    return searchDemoSitters(params.postalCode, radiusKm, params.categorySlug);
  }

  const supabase = await createClient();
  if (!supabase) return demoSitters;

  if (params.postalCode) {
    const { data: distanceRows, error: distanceError } = await supabase.rpc("search_sitter_profile_ids_by_radius", {
      search_postal_code: params.postalCode,
      search_radius_km: radiusKm,
      search_category_slug: params.categorySlug || null,
    });

    if (distanceError) {
      if (!hasSupabaseCode(distanceError, "PGRST202")) {
        console.error("Failed to search sitters by radius", distanceError);
      }
      return loadActiveSittersWithClientFilters(supabase, params, radiusKm, 500);
    }

    const distances = parseDistanceRows(distanceRows as SitterDistanceRow[] | null);
    if (!distances.length) return [];

    const orderedIds = distances.map((row) => row.id);
    const distanceById = new Map(distances.map((row) => [row.id, row.distanceKm]));

    const { data, error } = await supabase
      .from("sitter_profiles")
      .select(sitterSelect)
      .in("id", orderedIds);

    if (error) {
      console.error("Failed to load sitters", error);
      return [];
    }

    const sitterById = new Map<string, SitterProfile>();
    for (const row of data ?? []) {
      const sitter = normalizeSitter(row as SupabaseRow, supabase);
      sitterById.set(sitter.id, {
        ...sitter,
        distance_km: distanceById.get(sitter.id) ?? sitter.distance_km ?? null,
      });
    }

    const orderedSitters: SitterProfile[] = [];
    for (const id of orderedIds) {
      const sitter = sitterById.get(id);
      if (sitter) orderedSitters.push(sitter);
    }

    return orderedSitters;
  }

  return loadActiveSittersWithClientFilters(supabase, params, radiusKm);
}

export async function getUserSitterProfile(userId: string): Promise<SitterProfile | null> {
  noStore();

  if (!isSupabaseConfigured) return null;

  const supabase = await createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("sitter_profiles")
    .select(sitterSelect)
    .eq("user_id", userId)
    .maybeSingle();

  if (error) {
    console.error("Failed to load sitter profile", error);
    return null;
  }

  return data ? normalizeSitter(data as SupabaseRow, supabase) : null;
}

export function formatHourlyRate(cents: number) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(cents / 100);
}

export function formatAvailability(days: Weekday[]) {
  if (days.length === 7) return "Mo-So";
  return weekdayOptions
    .filter((day) => days.includes(day.value))
    .map((day) => day.label)
    .join(", ");
}
