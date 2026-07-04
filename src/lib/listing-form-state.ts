export const LISTING_TITLE_MIN_LENGTH = 4;
export const LISTING_TITLE_MAX_LENGTH = 90;
export const LISTING_DESCRIPTION_MIN_LENGTH = 20;
export const LISTING_DESCRIPTION_MAX_LENGTH = 1200;

export type ListingFormValues = {
  title: string;
  description: string;
  categoryId: string;
  postalCode: string;
  careLocation: string;
  frequency: string;
  durationValue: string;
  durationUnit: string;
  startsAt: string;
};

export type ListingFormState = {
  error?: string;
  values: ListingFormValues;
};

export const initialListingFormValues: ListingFormValues = {
  title: "",
  description: "",
  categoryId: "",
  postalCode: "",
  careLocation: "owner_home",
  frequency: "once",
  durationValue: "1",
  durationUnit: "hours",
  startsAt: "",
};

export const initialListingFormState: ListingFormState = {
  values: initialListingFormValues,
};

export function getListingFormValues(formData: FormData): ListingFormValues {
  return {
    title: String(formData.get("title") ?? ""),
    description: String(formData.get("description") ?? ""),
    categoryId: String(formData.get("categoryId") ?? ""),
    postalCode: String(formData.get("postalCode") ?? ""),
    careLocation: String(formData.get("careLocation") ?? initialListingFormValues.careLocation),
    frequency: String(formData.get("frequency") ?? initialListingFormValues.frequency),
    durationValue: String(formData.get("durationValue") ?? initialListingFormValues.durationValue),
    durationUnit: String(formData.get("durationUnit") ?? initialListingFormValues.durationUnit),
    startsAt: String(formData.get("startsAt") ?? ""),
  };
}
