import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const requestedNext = requestUrl.searchParams.get("next") ?? "";
  const next = requestedNext.startsWith("/") && !requestedNext.startsWith("//")
    ? requestedNext
    : "/uebersicht";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase?.auth.exchangeCodeForSession(code) ?? { error: new Error("Supabase unavailable") };

    if (!error) {
      return NextResponse.redirect(new URL(next, request.url));
    }
  }

  const loginUrl = new URL("/einloggen", request.url);
  loginUrl.searchParams.set("error", "Der Bestätigungslink ist ungültig oder abgelaufen. Fordere bitte eine neue E-Mail an.");
  loginUrl.searchParams.set("next", next);
  return NextResponse.redirect(loginUrl);
}
