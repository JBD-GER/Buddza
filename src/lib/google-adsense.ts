export type GoogleAdPlacement = "listingsFeed" | "listingDetail";

export type GoogleAdSenseSlot = {
  client: string;
  slot: string;
};

const defaultGoogleAdSenseAccount = "ca-pub-6925611740640618";

export const googleAdSenseAccount =
  process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT?.trim() || defaultGoogleAdSenseAccount;

const slotByPlacement: Record<GoogleAdPlacement, string | undefined> = {
  listingsFeed: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_LISTINGS_SLOT?.trim(),
  listingDetail: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_DETAIL_SLOT?.trim(),
};

export function getGoogleAdSenseClient() {
  return googleAdSenseAccount;
}

export function getGoogleAdSenseSlot(placement: GoogleAdPlacement): GoogleAdSenseSlot | null {
  const slot = slotByPlacement[placement];

  if (!slot) {
    return null;
  }

  return {
    client: googleAdSenseAccount,
    slot,
  };
}
