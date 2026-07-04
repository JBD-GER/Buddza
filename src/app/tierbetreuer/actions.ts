"use server";

import { redirect } from "next/navigation";
import { isSupabaseConfigured } from "@/lib/config";
import { createClient, getUser } from "@/lib/supabase/server";
import { sanitizeFileName } from "@/lib/utils";
import { sitterProfileSchema } from "@/lib/validators/tierbetreuer";

const NEW_SITTER_PATH = "/tierbetreuer/neu";
const MAX_PROFILE_IMAGE_BYTES = 10 * 1024 * 1024;
const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

function redirectWithError(path: string, message: string): never {
  redirect(`${path}?${new URLSearchParams({ error: message }).toString()}`);
}

function getFile(formData: FormData, name: string) {
  const value = formData.get(name);
  return value instanceof File && value.size > 0 ? value : null;
}

async function uploadProfileImage(
  file: File,
  userId: string,
  supabase: NonNullable<Awaited<ReturnType<typeof createClient>>>,
) {
  const extensionName = sanitizeFileName(file.name) || "profilbild.jpg";
  const path = `${userId}/tierbetreuer/images/${crypto.randomUUID()}-${extensionName}`;

  const { error } = await supabase.storage.from("sitter-media").upload(path, file, {
    cacheControl: "3600",
    upsert: false,
    contentType: file.type,
  });

  if (error) {
    throw new Error(error.message);
  }

  return path;
}

export async function createSitterProfileAction(formData: FormData) {
  if (!isSupabaseConfigured) {
    redirectWithError(NEW_SITTER_PATH, "Supabase ist noch nicht konfiguriert.");
  }

  const supabase = await createClient();
  const user = await getUser();

  if (!supabase || !user) {
    redirect(`/einloggen?next=${NEW_SITTER_PATH}`);
  }

  const parsed = sitterProfileSchema.safeParse({
    headline: formData.get("headline"),
    description: formData.get("description"),
    postalCode: formData.get("postalCode"),
    radiusKm: formData.get("radiusKm"),
    hourlyRate: formData.get("hourlyRate"),
    categoryIds: formData.getAll("categoryIds"),
    availability: formData.getAll("availability"),
  });

  if (!parsed.success) {
    redirectWithError(NEW_SITTER_PATH, parsed.error.issues[0]?.message ?? "Bitte prüfe deine Eingaben.");
  }

  const { data: existingProfile } = await supabase
    .from("sitter_profiles")
    .select("id, profile_image_path")
    .eq("user_id", user.id)
    .maybeSingle();

  const profileImage = getFile(formData, "profileImage");
  let profileImagePath = typeof existingProfile?.profile_image_path === "string" ? existingProfile.profile_image_path : null;

  if (!profileImage && !profileImagePath) {
    redirectWithError(NEW_SITTER_PATH, "Bitte lade ein Profilbild hoch.");
  }

  if (profileImage && (!IMAGE_TYPES.includes(profileImage.type) || profileImage.size > MAX_PROFILE_IMAGE_BYTES)) {
    redirectWithError(NEW_SITTER_PATH, "Das Profilbild muss JPG, PNG oder WebP sein und unter 10 MB bleiben.");
  }

  const { data: postalCode } = await supabase
    .from("postal_codes")
    .select("postal_code")
    .eq("postal_code", parsed.data.postalCode)
    .maybeSingle();

  if (!postalCode) {
    redirectWithError(
      NEW_SITTER_PATH,
      "Diese PLZ konnte nicht gefunden werden. Bitte prüfe die fünfstellige Postleitzahl.",
    );
  }

  const { data: categories, error: categoryError } = await supabase
    .from("pet_categories")
    .select("id")
    .in("id", parsed.data.categoryIds);

  if (categoryError || (categories ?? []).length !== parsed.data.categoryIds.length) {
    redirectWithError(NEW_SITTER_PATH, "Bitte wähle gültige Kategorien.");
  }

  try {
    if (profileImage) {
      profileImagePath = await uploadProfileImage(profileImage, user.id, supabase);
    }

    if (!profileImagePath) {
      throw new Error("Bitte lade ein Profilbild hoch.");
    }

    const hourlyRateCents = Math.round(parsed.data.hourlyRate * 100);

    const { data: sitterProfile, error: profileError } = await supabase
      .from("sitter_profiles")
      .upsert(
        {
          user_id: user.id,
          headline: parsed.data.headline,
          description: parsed.data.description,
          profile_image_path: profileImagePath,
          postal_code: parsed.data.postalCode,
          radius_km: parsed.data.radiusKm,
          hourly_rate_cents: hourlyRateCents,
          status: "active",
        },
        { onConflict: "user_id" },
      )
      .select("id")
      .single();

    if (profileError) {
      throw new Error(profileError.message);
    }

    const profileId = sitterProfile.id as string;

    await supabase.from("sitter_profile_categories").delete().eq("sitter_profile_id", profileId);
    await supabase.from("sitter_profile_availability").delete().eq("sitter_profile_id", profileId);

    const { error: categoriesError } = await supabase.from("sitter_profile_categories").insert(
      parsed.data.categoryIds.map((categoryId) => ({
        sitter_profile_id: profileId,
        category_id: categoryId,
      })),
    );

    if (categoriesError) {
      throw new Error(categoriesError.message);
    }

    const { error: availabilityError } = await supabase.from("sitter_profile_availability").insert(
      parsed.data.availability.map((weekday) => ({
        sitter_profile_id: profileId,
        weekday: Number(weekday),
      })),
    );

    if (availabilityError) {
      throw new Error(availabilityError.message);
    }

    await supabase.from("profiles").update({ role: "both" }).eq("id", user.id);
  } catch (error) {
    redirectWithError(
      NEW_SITTER_PATH,
      error instanceof Error ? error.message : "Dein Tierbetreuer-Profil konnte nicht gespeichert werden.",
    );
  }

  redirect("/uebersicht?tierbetreuer=erstellt");
}
