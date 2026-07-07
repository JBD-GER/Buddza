import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import type { AdPlacement } from "@/lib/ads";

type AdEventType = "impression" | "click";
type AdEventPayload = {
  adId?: unknown;
  placement?: unknown;
  eventType?: unknown;
  pagePath?: unknown;
  listingId?: unknown;
  sessionKey?: unknown;
};

const adPlacements = new Set<AdPlacement>(["listings_feed", "listing_detail"]);
const adEventTypes = new Set<AdEventType>(["impression", "click"]);
const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function asUuid(value: unknown) {
  return typeof value === "string" && uuidPattern.test(value) ? value : null;
}

function asPlacement(value: unknown) {
  return typeof value === "string" && adPlacements.has(value as AdPlacement)
    ? (value as AdPlacement)
    : null;
}

function asEventType(value: unknown) {
  return typeof value === "string" && adEventTypes.has(value as AdEventType)
    ? (value as AdEventType)
    : null;
}

function asPagePath(value: unknown) {
  if (typeof value !== "string" || !value.startsWith("/")) return "/";
  return value.slice(0, 500);
}

function asOptionalText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

function hasSupabaseCode(error: unknown, code: string) {
  return Boolean(error && typeof error === "object" && "code" in error && error.code === code);
}

export async function POST(request: NextRequest) {
  const payload = (await request.json().catch(() => null)) as AdEventPayload | null;

  if (!payload) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const adId = asUuid(payload.adId);
  const placement = asPlacement(payload.placement);
  const eventType = asEventType(payload.eventType);

  if (!adId || !placement || !eventType) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const supabase = await createClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.rpc("track_ad_event", {
    p_ad_id: adId,
    p_placement: placement,
    p_event_type: eventType,
    p_page_path: asPagePath(payload.pagePath),
    p_listing_id: asUuid(payload.listingId),
    p_session_key: asOptionalText(payload.sessionKey, 80),
    p_user_agent: asOptionalText(request.headers.get("user-agent"), 500),
    p_referrer: asOptionalText(request.headers.get("referer"), 500),
  });

  if (error) {
    if (!hasSupabaseCode(error, "PGRST202")) {
      console.error("Failed to track ad event", error);
    }
    return NextResponse.json({ ok: true, stored: false }, { status: 202 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
