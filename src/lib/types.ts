export type CareLocation = "owner_home" | "sitter_home" | "outdoor" | "flexible";
export type CareFrequency = "once" | "daily" | "weekly" | "weekends" | "flexible";
export type DurationUnit = "hours" | "days";
export type ListingStatus = "active" | "paused" | "closed";
export type SitterStatus = "active" | "paused";
export type MessageMediaType = "image" | "video" | "document";
export type Weekday = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type PetCategory = {
  id: string;
  slug: string;
  name: string;
  emoji: string | null;
  sort_order?: number;
};

export type Profile = {
  id: string;
  full_name: string;
  avatar_url: string | null;
  postal_code?: string | null;
};

export type Listing = {
  id: string;
  owner_id: string;
  title: string;
  description: string;
  postal_code: string;
  city?: string | null;
  care_location: CareLocation;
  frequency: CareFrequency;
  duration_value: number;
  duration_unit: DurationUnit;
  starts_at?: string | null;
  main_image_path: string;
  main_image_url?: string | null;
  video_path?: string | null;
  video_url?: string | null;
  status: ListingStatus;
  created_at: string;
  category_slug?: string;
  category_name?: string;
  category?: PetCategory | null;
  owner_name?: string | null;
  profile?: Profile | null;
  latitude?: number | null;
  longitude?: number | null;
  distance_km?: number | null;
};

export type SitterProfile = {
  id: string;
  user_id: string;
  headline: string;
  description: string;
  profile_image_path: string;
  profile_image_url?: string | null;
  postal_code: string;
  city?: string | null;
  radius_km: number;
  hourly_rate_cents: number;
  status: SitterStatus;
  created_at: string;
  categories: PetCategory[];
  availability: Weekday[];
  profile?: Profile | null;
  latitude?: number | null;
  longitude?: number | null;
  distance_km?: number | null;
};

export type MapPoint = {
  id: string;
  title: string;
  postal_code: string;
  city: string;
  latitude: number;
  longitude: number;
  category_slug: string;
  category_name: string;
  created_at: string;
};

export type ChatSummary = {
  id: string;
  listing_id: string;
  owner_id: string;
  sitter_id: string;
  created_at: string;
  updated_at: string;
  listing?: Pick<Listing, "id" | "title" | "main_image_path" | "main_image_url" | "status"> | null;
  owner?: Profile | null;
  sitter?: Profile | null;
  last_message?: Message | null;
  unread_count: number;
};

export type Message = {
  id: string;
  chat_id: string;
  sender_id: string;
  body: string | null;
  media_path: string | null;
  media_type: MessageMediaType | null;
  media_url?: string | null;
  read_at?: string | null;
  created_at: string;
  sender?: Profile | null;
};
