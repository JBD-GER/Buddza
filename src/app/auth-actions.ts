"use server";

import { redirect } from "next/navigation";
import { getSiteUrl, isSupabaseConfigured } from "@/lib/config";
import { createClient } from "@/lib/supabase/server";

function redirectWithMessage(path: string, key: "error" | "message", value: string): never {
  const params = new URLSearchParams({ [key]: value });
  redirect(`${path}?${params.toString()}`);
}

function safeNext(value: FormDataEntryValue | null) {
  const next = typeof value === "string" ? value : "";
  return next.startsWith("/") && !next.startsWith("//") ? next : "/uebersicht";
}

export async function signInAction(formData: FormData) {
  if (!isSupabaseConfigured) {
    redirectWithMessage("/einloggen", "error", "Supabase ist noch nicht konfiguriert.");
  }

  const supabase = await createClient();
  if (!supabase) {
    redirectWithMessage("/einloggen", "error", "Supabase ist noch nicht erreichbar.");
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const next = safeNext(formData.get("next"));

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirectWithMessage("/einloggen", "error", "E-Mail oder Passwort ist nicht korrekt.");
  }

  redirect(next);
}

export async function signUpAction(formData: FormData) {
  if (!isSupabaseConfigured) {
    redirectWithMessage("/registrieren", "error", "Supabase ist noch nicht konfiguriert.");
  }

  const supabase = await createClient();
  if (!supabase) {
    redirectWithMessage("/registrieren", "error", "Supabase ist noch nicht erreichbar.");
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");
  const fullName = String(formData.get("fullName") ?? "").trim();
  const next = safeNext(formData.get("next"));

  if (password.length < 8) {
    redirectWithMessage("/registrieren", "error", "Das Passwort muss mindestens 8 Zeichen haben.");
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: `${getSiteUrl()}/authentifizierung/rueckruf?next=${encodeURIComponent(next)}`,
    },
  });

  if (error) {
    redirectWithMessage("/registrieren", "error", error.message);
  }

  if (data.session) {
    redirect(next);
  }

  redirectWithMessage(
    "/einloggen",
    "message",
    "Fast geschafft. Bitte bestätige deine E-Mail und melde dich dann an.",
  );
}

export async function resetPasswordAction(formData: FormData) {
  if (!isSupabaseConfigured) {
    redirectWithMessage("/passwort-vergessen", "error", "Supabase ist noch nicht konfiguriert.");
  }

  const supabase = await createClient();
  if (!supabase) {
    redirectWithMessage("/passwort-vergessen", "error", "Supabase ist noch nicht erreichbar.");
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${getSiteUrl()}/authentifizierung/rueckruf?next=/passwort-aktualisieren`,
  });

  if (error) {
    redirectWithMessage("/passwort-vergessen", "error", error.message);
  }

  redirectWithMessage(
    "/passwort-vergessen",
    "message",
    "Wir haben dir einen sicheren Link zum Zurücksetzen geschickt.",
  );
}

export async function updatePasswordAction(formData: FormData) {
  if (!isSupabaseConfigured) {
    redirectWithMessage("/passwort-aktualisieren", "error", "Supabase ist noch nicht konfiguriert.");
  }

  const supabase = await createClient();
  if (!supabase) {
    redirectWithMessage("/passwort-aktualisieren", "error", "Supabase ist noch nicht erreichbar.");
  }

  const password = String(formData.get("password") ?? "");

  if (password.length < 8) {
    redirectWithMessage("/passwort-aktualisieren", "error", "Das Passwort muss mindestens 8 Zeichen haben.");
  }

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    redirectWithMessage("/passwort-aktualisieren", "error", error.message);
  }

  redirect("/uebersicht");
}

export async function signOutAction() {
  const supabase = await createClient();
  await supabase?.auth.signOut();
  redirect("/");
}
