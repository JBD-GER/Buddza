export type GoogleAdPlacement = "listingsFeed" | "listingDetail";

export type GoogleAdSenseSlot = {
  client: string;
  slot: string;
};

const googleAdSenseClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT?.trim();

const slotByPlacement: Record<GoogleAdPlacement, string | undefined> = {
  listingsFeed: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_LISTINGS_SLOT?.trim(),
  listingDetail: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_DETAIL_SLOT?.trim(),
};

export function getGoogleAdSenseClient() {
  return googleAdSenseClient;
}

export function getGoogleAdSenseSlot(placement: GoogleAdPlacement): GoogleAdSenseSlot | null {
  const slot = slotByPlacement[placement];

  if (!googleAdSenseClient || !slot) {
    return null;
  }

  return {
    client: googleAdSenseClient,
    slot,
  };
}
