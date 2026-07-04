import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const geoNamesPath = resolve(rootDir, "data/geonames_de_postal_codes.txt");
const wzbPath = resolve(rootDir, "data/plz_geocoord.csv");
const outputPath = resolve(rootDir, "supabase/20260705_full_german_postal_codes.sql");
const radiusFunctionsSql = `create or replace function public.search_listings_by_radius(
  search_postal_code text,
  search_radius_km numeric default 25,
  search_category_slug text default null
)
returns table (
  id uuid,
  owner_id uuid,
  title text,
  description text,
  postal_code text,
  city text,
  care_location public.care_location,
  frequency public.care_frequency,
  duration_value integer,
  duration_unit public.duration_unit,
  main_image_path text,
  video_path text,
  status public.listing_status,
  created_at timestamptz,
  category_slug text,
  category_name text,
  owner_name text,
  latitude numeric,
  longitude numeric,
  distance_km numeric
)
language sql
stable
set search_path = public, extensions
as $$
  with center as (
    select geog
    from public.postal_codes
    where postal_code = search_postal_code
    limit 1
  )
  select
    l.id,
    l.owner_id,
    l.title,
    l.description,
    l.postal_code,
    pc.city,
    l.care_location,
    l.frequency,
    l.duration_value,
    l.duration_unit,
    l.main_image_path,
    l.video_path,
    l.status,
    l.created_at,
    c.slug as category_slug,
    c.name as category_name,
    p.full_name as owner_name,
    pc.latitude,
    pc.longitude,
    round((extensions.st_distance(pc.geog, center.geog) / 1000)::numeric, 2) as distance_km
  from public.listings l
  join center on true
  join public.postal_codes pc on pc.postal_code = l.postal_code
  join public.pet_categories c on c.id = l.category_id
  join public.profiles p on p.id = l.owner_id
  where l.status = 'active'
    and extensions.st_dwithin(pc.geog, center.geog, least(greatest(search_radius_km, 1), 250) * 1000)
    and (search_category_slug is null or c.slug = search_category_slug)
  order by distance_km asc, l.created_at desc;
$$;

grant execute on function public.search_listings_by_radius(text, numeric, text) to anon, authenticated;

create or replace function public.search_sitter_profile_ids_by_radius(
  search_postal_code text,
  search_radius_km numeric default 25,
  search_category_slug text default null
)
returns table (
  id uuid,
  distance_km numeric
)
language sql
stable
set search_path = public, extensions
as $$
  with center as (
    select geog
    from public.postal_codes
    where postal_code = search_postal_code
    limit 1
  )
  select
    sp.id,
    round((extensions.st_distance(pc.geog, center.geog) / 1000)::numeric, 2) as distance_km
  from public.sitter_profiles sp
  join center on true
  join public.postal_codes pc on pc.postal_code = sp.postal_code
  where sp.status = 'active'
    and extensions.st_dwithin(pc.geog, center.geog, least(greatest(search_radius_km, 1), 250) * 1000)
    and extensions.st_dwithin(pc.geog, center.geog, least(greatest(sp.radius_km::numeric, 1), 250) * 1000)
    and (
      search_category_slug is null
      or exists (
        select 1
        from public.sitter_profile_categories spc
        join public.pet_categories c on c.id = spc.category_id
        where spc.sitter_profile_id = sp.id
          and c.slug = search_category_slug
      )
    )
  order by distance_km asc, sp.created_at desc;
$$;

grant execute on function public.search_sitter_profile_ids_by_radius(text, numeric, text) to anon, authenticated;
`;

const businessPattern = /\b(gmbh|ag|kg|se|mbh|versicherung|bank|sparkasse|verwaltung|holding|vertrieb|deutschland|stiftung|service|logistik|immobilien|gesellschaft|company|brand)\b/i;
const germanStateNames = new Map([
  ["Baden-Wurttemberg", "Baden-Württemberg"],
  ["Baden-Württemberg", "Baden-Württemberg"],
  ["Bavaria", "Bayern"],
  ["Bayern", "Bayern"],
  ["Berlin", "Berlin"],
  ["Brandenburg", "Brandenburg"],
  ["Bremen", "Bremen"],
  ["Hamburg", "Hamburg"],
  ["Hesse", "Hessen"],
  ["Hessen", "Hessen"],
  ["Lower Saxony", "Niedersachsen"],
  ["Niedersachsen", "Niedersachsen"],
  ["Mecklenburg-Vorpommern", "Mecklenburg-Vorpommern"],
  ["North Rhine-Westphalia", "Nordrhein-Westfalen"],
  ["Nordrhein-Westfalen", "Nordrhein-Westfalen"],
  ["Rheinland-Pfalz", "Rheinland-Pfalz"],
  ["Saarland", "Saarland"],
  ["Saxony", "Sachsen"],
  ["Sachsen", "Sachsen"],
  ["Saxony-Anhalt", "Sachsen-Anhalt"],
  ["Sachsen-Anhalt", "Sachsen-Anhalt"],
  ["Schleswig-Holstein", "Schleswig-Holstein"],
  ["Thuringia", "Thüringen"],
  ["Thüringen", "Thüringen"],
]);

function sql(value) {
  return `'${String(value).replaceAll("'", "''")}'`;
}

function numberSql(value) {
  return Number(value).toFixed(6);
}

function normalizeCityName(value) {
  return String(value ?? "")
    .replace(/^Kreisfreie\s+Stadt\s+/i, "")
    .replace(/^Stadt\s+/i, "")
    .replace(/^Gemeinde\s+/i, "")
    .replace(/^Stadtkreis\s+/i, "")
    .replace(/^Landkreis\s+/i, "")
    .replace(/\s+Landkreis$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeStateName(value) {
  const state = String(value ?? "").trim() || "Deutschland";
  return germanStateNames.get(state) ?? state;
}

function pickMostUsefulCity(rows) {
  const candidates = rows
    .flatMap((row) => {
      const placeName = normalizeCityName(row.placeName);
      const adminName3 = normalizeCityName(row.adminName3);
      const adminName2 = normalizeCityName(row.adminName2);
      const adminName3IsCity = /^(Kreisfreie Stadt|Stadtkreis)\s+/i.test(row.adminName3);
      const adminCandidates = [adminName3IsCity ? adminName3 : "", adminName2].filter(Boolean);

      if (placeName && !businessPattern.test(placeName)) {
        return [placeName, ...adminCandidates];
      }

      return [adminName3, adminName2].filter(Boolean);
    })
    .filter(Boolean);

  if (!candidates.length) {
    return normalizeCityName(rows[0]?.placeName) || "Deutschland";
  }

  const counts = new Map();
  for (const candidate of candidates) {
    counts.set(candidate, (counts.get(candidate) ?? 0) + 1);
  }

  return [...counts.entries()].sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].length - b[0].length;
  })[0][0];
}

function readWzbCoordinates() {
  const coordinates = new Map();
  const lines = readFileSync(wzbPath, "utf8").trim().split(/\r?\n/).slice(1);

  for (const line of lines) {
    const [postalCode, latitude, longitude] = line.split(",");
    const lat = Number(latitude);
    const lng = Number(longitude);

    if (/^[0-9]{5}$/.test(postalCode) && Number.isFinite(lat) && Number.isFinite(lng)) {
      coordinates.set(postalCode, { latitude: lat, longitude: lng });
    }
  }

  return coordinates;
}

function readGeoNamesRows() {
  const rows = [];
  const lines = readFileSync(geoNamesPath, "utf8").trim().split(/\r?\n/);

  for (const line of lines) {
    const columns = line.split("\t");
    const postalCode = columns[1];
    const latitude = Number(columns[9]);
    const longitude = Number(columns[10]);

    if (!/^[0-9]{5}$/.test(postalCode) || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
      continue;
    }

    rows.push({
      postalCode,
      placeName: columns[2] ?? "",
      state: columns[3] || "Deutschland",
      adminName2: columns[5] ?? "",
      adminName3: columns[7] ?? "",
      latitude,
      longitude,
    });
  }

  return rows;
}

const wzbCoordinates = readWzbCoordinates();
const rowsByPostalCode = new Map();

for (const row of readGeoNamesRows()) {
  const current = rowsByPostalCode.get(row.postalCode) ?? [];
  current.push(row);
  rowsByPostalCode.set(row.postalCode, current);
}

const postalCodes = [...rowsByPostalCode.entries()]
  .map(([postalCode, rows]) => {
    const wzbCoordinate = wzbCoordinates.get(postalCode);
    const latitude =
      wzbCoordinate?.latitude ??
      rows.reduce((sum, row) => sum + row.latitude, 0) / rows.length;
    const longitude =
      wzbCoordinate?.longitude ??
      rows.reduce((sum, row) => sum + row.longitude, 0) / rows.length;

    const stateCounts = rows.reduce((counts, row) => {
      counts.set(row.state, (counts.get(row.state) ?? 0) + 1);
      return counts;
    }, new Map());

    const state = normalizeStateName([...stateCounts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0]);

    return {
      postalCode,
      city: pickMostUsefulCity(rows),
      state,
      latitude,
      longitude,
    };
  })
  .filter((row) => row.latitude >= 47 && row.latitude <= 56 && row.longitude >= 5 && row.longitude <= 16)
  .sort((a, b) => a.postalCode.localeCompare(b.postalCode));

const chunks = [];
const chunkSize = 450;

for (let index = 0; index < postalCodes.length; index += chunkSize) {
  const chunk = postalCodes.slice(index, index + chunkSize);
  chunks.push(`insert into public.postal_codes (postal_code, city, state, latitude, longitude)\nvalues\n${chunk
    .map((row) =>
      `  (${sql(row.postalCode)}, ${sql(row.city)}, ${sql(row.state)}, ${numberSql(row.latitude)}, ${numberSql(row.longitude)})`,
    )
    .join(",\n")}\non conflict (postal_code) do update set\n  city = excluded.city,\n  state = excluded.state,\n  latitude = excluded.latitude,\n  longitude = excluded.longitude;\n`);
}

const output = `-- Full German postal code import for Buddza.\n-- Sources:\n-- - GeoNames DE postal code dump, Creative Commons Attribution 4.0: https://download.geonames.org/export/zip/\n-- - WZB PLZ geocoordinates, Apache License 2.0: https://github.com/WZBSocialScienceCenter/plz_geocoord\n-- Generated by scripts/generate-postal-codes-sql.mjs.\n\n${radiusFunctionsSql}\n${chunks.join("\n")}`;

writeFileSync(outputPath, output);

console.log(`Wrote ${postalCodes.length} postal codes to ${outputPath}`);
