export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
};

export const isSupabaseConfigured = Boolean(
  env.supabaseUrl &&
    env.supabaseAnonKey &&
    !env.supabaseUrl.includes("your-project") &&
    !env.supabaseAnonKey.includes("your-anon-key"),
);

export function getSiteUrl() {
  if (env.siteUrl) {
    return env.siteUrl.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
