-- Buddza MVP schema for Supabase.
-- Run this in the Supabase SQL editor before connecting the Next.js app.

create extension if not exists postgis with schema extensions;
create extension if not exists pgcrypto with schema extensions;
create extension if not exists pg_trgm with schema extensions;

do $$ begin
  create type public.profile_role as enum ('owner', 'sitter', 'both');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.care_location as enum ('owner_home', 'sitter_home', 'outdoor', 'flexible');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.care_frequency as enum ('once', 'daily', 'weekly', 'weekends', 'flexible');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.duration_unit as enum ('hours', 'days');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.listing_status as enum ('active', 'paused', 'closed');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.ad_placement as enum ('listings_feed', 'listing_detail');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.ad_event_type as enum ('impression', 'click');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.message_media_type as enum ('image', 'video', 'document');
exception when duplicate_object then null;
end $$;

create table if not exists public.postal_codes (
  postal_code text primary key check (postal_code ~ '^[0-9]{5}$'),
  city text not null,
  state text not null,
  latitude numeric(9, 6) not null check (latitude between 47 and 56),
  longitude numeric(9, 6) not null check (longitude between 5 and 16),
  geog extensions.geography(point, 4326) generated always as (
    extensions.st_setsrid(extensions.st_makepoint(longitude, latitude), 4326)::extensions.geography
  ) stored
);

create index if not exists postal_codes_geog_idx on public.postal_codes using gist (geog);
create index if not exists postal_codes_city_trgm_idx on public.postal_codes using gin (city gin_trgm_ops);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  avatar_url text,
  role public.profile_role not null default 'both',
  postal_code text references public.postal_codes(postal_code) on update cascade,
  bio text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pet_categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9-]+$'),
  name text not null unique,
  emoji text,
  sort_order integer not null default 100,
  created_at timestamptz not null default now()
);

create table if not exists public.listings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references public.profiles(id) on delete cascade,
  category_id uuid not null references public.pet_categories(id) on delete restrict,
  title text not null check (char_length(title) between 4 and 90),
  description text not null check (char_length(description) between 20 and 1200),
  postal_code text not null references public.postal_codes(postal_code) on update cascade,
  care_location public.care_location not null,
  frequency public.care_frequency not null,
  duration_value integer not null check (duration_value between 1 and 90),
  duration_unit public.duration_unit not null,
  starts_at date,
  main_image_path text not null,
  video_path text,
  status public.listing_status not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists listings_owner_idx on public.listings(owner_id);
create index if not exists listings_category_idx on public.listings(category_id);
create index if not exists listings_status_created_idx on public.listings(status, created_at desc);
create index if not exists listings_postal_code_idx on public.listings(postal_code);

create table if not exists public.chats (
  id uuid primary key default gen_random_uuid(),
  listing_id uuid not null references public.listings(id) on delete cascade,
  owner_id uuid not null references public.profiles(id) on delete cascade,
  sitter_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint chats_no_self_chat check (owner_id <> sitter_id),
  constraint chats_listing_id_owner_id_sitter_id_key unique (listing_id, owner_id, sitter_id)
);

create index if not exists chats_owner_idx on public.chats(owner_id);
create index if not exists chats_sitter_idx on public.chats(sitter_id);
create index if not exists chats_listing_idx on public.chats(listing_id);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  chat_id uuid not null references public.chats(id) on delete cascade,
  sender_id uuid not null references public.profiles(id) on delete cascade,
  body text check (body is null or char_length(body) <= 4000),
  media_path text,
  media_type public.message_media_type,
  read_at timestamptz,
  created_at timestamptz not null default now(),
  constraint messages_body_or_media check (coalesce(nullif(trim(body), ''), media_path) is not null),
  constraint messages_media_consistency check (
    (media_path is null and media_type is null) or
    (media_path is not null and media_type is not null)
  )
);

create index if not exists messages_chat_created_idx on public.messages(chat_id, created_at);
create index if not exists messages_sender_idx on public.messages(sender_id);
create index if not exists messages_unread_by_chat_idx
on public.messages(chat_id, sender_id, read_at)
where read_at is null;

create table if not exists public.ads (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9-]+$'),
  placement public.ad_placement not null,
  label text not null default 'Anzeige',
  advertiser_name text not null,
  title text not null check (char_length(title) between 4 and 90),
  description text not null check (char_length(description) between 20 and 240),
  image_url text check (image_url is null or image_url ~* '^(https?://|/)'),
  target_url text not null check (target_url ~* '^(https?://|mailto:|/)'),
  cta_label text not null default 'Mehr erfahren',
  status text not null default 'active' check (status in ('active', 'paused', 'archived')),
  priority integer not null default 100,
  starts_at timestamptz not null default now(),
  ends_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint ads_date_window check (ends_at is null or ends_at > starts_at)
);

create index if not exists ads_active_placement_idx
on public.ads (placement, status, priority, starts_at, ends_at);

create table if not exists public.ad_events (
  id bigint generated always as identity primary key,
  ad_id uuid references public.ads(id) on delete set null,
  placement public.ad_placement not null,
  event_type public.ad_event_type not null,
  page_path text not null check (char_length(page_path) between 1 and 500),
  listing_id uuid references public.listings(id) on delete set null,
  session_key text check (session_key is null or char_length(session_key) <= 80),
  user_agent text check (user_agent is null or char_length(user_agent) <= 500),
  referrer text check (referrer is null or char_length(referrer) <= 500),
  occurred_at timestamptz not null default now()
);

create index if not exists ad_events_ad_time_idx on public.ad_events (ad_id, occurred_at desc);
create index if not exists ad_events_type_time_idx on public.ad_events (event_type, occurred_at desc);
create index if not exists ad_events_listing_time_idx on public.ad_events (listing_id, occurred_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists listings_set_updated_at on public.listings;
create trigger listings_set_updated_at
before update on public.listings
for each row execute function public.set_updated_at();

drop trigger if exists chats_set_updated_at on public.chats;
create trigger chats_set_updated_at
before update on public.chats
for each row execute function public.set_updated_at();

create or replace function public.touch_chat_after_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.chats
  set updated_at = now()
  where id = new.chat_id;
  return new;
end;
$$;

drop trigger if exists messages_touch_chat on public.messages;
create trigger messages_touch_chat
after insert on public.messages
for each row execute function public.touch_chat_after_message();

drop trigger if exists ads_set_updated_at on public.ads;
create trigger ads_set_updated_at
before update on public.ads
for each row execute function public.set_updated_at();

create or replace function public.mark_chat_read(p_chat_id uuid)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  current_user_id uuid := auth.uid();
  updated_count integer := 0;
begin
  if current_user_id is null then
    raise exception 'Not authenticated';
  end if;

  if not exists (
    select 1
    from public.chats
    where chats.id = p_chat_id
      and current_user_id in (chats.owner_id, chats.sitter_id)
  ) then
    raise exception 'Chat not found';
  end if;

  update public.messages
  set read_at = now()
  where chat_id = p_chat_id
    and sender_id <> current_user_id
    and read_at is null;

  get diagnostics updated_count = row_count;
  return updated_count;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1), ''),
    new.raw_user_meta_data ->> 'avatar_url'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.postal_codes enable row level security;
alter table public.pet_categories enable row level security;
alter table public.listings enable row level security;
alter table public.chats enable row level security;
alter table public.messages enable row level security;
alter table public.ads enable row level security;
alter table public.ad_events enable row level security;

drop policy if exists "Postal codes are public" on public.postal_codes;
create policy "Postal codes are public"
on public.postal_codes for select
using (true);

drop policy if exists "Profiles are readable" on public.profiles;
create policy "Profiles are readable"
on public.profiles for select
using (true);

drop policy if exists "Users update own profile" on public.profiles;
create policy "Users update own profile"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Users insert own profile" on public.profiles;
create policy "Users insert own profile"
on public.profiles for insert
with check (auth.uid() = id);

drop policy if exists "Categories are public" on public.pet_categories;
create policy "Categories are public"
on public.pet_categories for select
using (true);

drop policy if exists "Active listings are public, owners see own" on public.listings;
create policy "Active listings are public, owners see own"
on public.listings for select
using (status = 'active' or owner_id = auth.uid());

drop policy if exists "Owners create listings" on public.listings;
create policy "Owners create listings"
on public.listings for insert
with check (owner_id = auth.uid());

drop policy if exists "Owners update listings" on public.listings;
create policy "Owners update listings"
on public.listings for update
using (owner_id = auth.uid())
with check (owner_id = auth.uid());

drop policy if exists "Owners delete listings" on public.listings;
create policy "Owners delete listings"
on public.listings for delete
using (owner_id = auth.uid());

drop policy if exists "Chat participants read chats" on public.chats;
create policy "Chat participants read chats"
on public.chats for select
using (auth.uid() in (owner_id, sitter_id));

drop policy if exists "Sitters create listing chats" on public.chats;
create policy "Sitters create listing chats"
on public.chats for insert
with check (
  sitter_id = auth.uid()
  and owner_id <> auth.uid()
  and owner_id = (select listings.owner_id from public.listings where listings.id = listing_id)
);

drop policy if exists "Chat participants update chats" on public.chats;
create policy "Chat participants update chats"
on public.chats for update
using (auth.uid() in (owner_id, sitter_id))
with check (auth.uid() in (owner_id, sitter_id));

drop policy if exists "Chat participants read messages" on public.messages;
create policy "Chat participants read messages"
on public.messages for select
using (
  exists (
    select 1
    from public.chats
    where chats.id = messages.chat_id
      and auth.uid() in (chats.owner_id, chats.sitter_id)
  )
);

drop policy if exists "Chat participants send messages" on public.messages;
create policy "Chat participants send messages"
on public.messages for insert
with check (
  sender_id = auth.uid()
  and exists (
    select 1
    from public.chats
    where chats.id = messages.chat_id
      and auth.uid() in (chats.owner_id, chats.sitter_id)
  )
);

drop policy if exists "Senders update own messages" on public.messages;
create policy "Senders update own messages"
on public.messages for update
using (sender_id = auth.uid())
with check (sender_id = auth.uid());

drop policy if exists "Active ads are public" on public.ads;
create policy "Active ads are public"
on public.ads for select
using (
  status = 'active'
  and starts_at <= now()
  and (ends_at is null or ends_at >= now())
);

create or replace view public.active_listing_map_points
with (security_invoker = true)
as
select
  listings.id,
  listings.title,
  listings.postal_code,
  postal_codes.city,
  postal_codes.latitude,
  postal_codes.longitude,
  pet_categories.slug as category_slug,
  pet_categories.name as category_name,
  listings.created_at
from public.listings
join public.postal_codes on postal_codes.postal_code = listings.postal_code
join public.pet_categories on pet_categories.id = listings.category_id
where listings.status = 'active';

create or replace function public.search_listings_by_radius(
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

create or replace function public.start_chat_for_listing(p_listing_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  current_user_id uuid := auth.uid();
  listing_owner_id uuid;
  chat_id uuid;
begin
  if current_user_id is null then
    raise exception 'Not authenticated';
  end if;

  select owner_id into listing_owner_id
  from public.listings
  where id = p_listing_id and status = 'active';

  if listing_owner_id is null then
    raise exception 'Listing not found';
  end if;

  if listing_owner_id = current_user_id then
    raise exception 'Owners cannot contact themselves';
  end if;

  insert into public.chats (listing_id, owner_id, sitter_id)
  values (p_listing_id, listing_owner_id, current_user_id)
  on conflict on constraint chats_listing_id_owner_id_sitter_id_key
  do update set updated_at = now()
  returning id into chat_id;

  return chat_id;
end;
$$;

create or replace function public.track_ad_event(
  p_ad_id uuid,
  p_placement public.ad_placement,
  p_event_type public.ad_event_type,
  p_page_path text,
  p_listing_id uuid default null,
  p_session_key text default null,
  p_user_agent text default null,
  p_referrer text default null
)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  p_page_path := left(coalesce(nullif(trim(p_page_path), ''), '/'), 500);
  p_session_key := left(nullif(trim(coalesce(p_session_key, '')), ''), 80);
  p_user_agent := left(nullif(trim(coalesce(p_user_agent, '')), ''), 500);
  p_referrer := left(nullif(trim(coalesce(p_referrer, '')), ''), 500);

  if p_listing_id is not null and not exists (
    select 1 from public.listings where id = p_listing_id
  ) then
    p_listing_id := null;
  end if;

  if not exists (
    select 1
    from public.ads
    where id = p_ad_id
      and placement = p_placement
      and status = 'active'
      and starts_at <= now()
      and (ends_at is null or ends_at >= now())
  ) then
    return;
  end if;

  insert into public.ad_events (
    ad_id,
    placement,
    event_type,
    page_path,
    listing_id,
    session_key,
    user_agent,
    referrer
  )
  values (
    p_ad_id,
    p_placement,
    p_event_type,
    p_page_path,
    p_listing_id,
    p_session_key,
    p_user_agent,
    p_referrer
  );
end;
$$;

create or replace view public.ad_daily_stats
with (security_invoker = true)
as
select
  ads.id as ad_id,
  ads.slug,
  ads.placement,
  ads.advertiser_name,
  date_trunc('day', ad_events.occurred_at)::date as day,
  count(*) filter (where ad_events.event_type = 'impression') as impressions,
  count(*) filter (where ad_events.event_type = 'click') as clicks,
  round(
    (
      count(*) filter (where ad_events.event_type = 'click')
    )::numeric
    / nullif(count(*) filter (where ad_events.event_type = 'impression'), 0)
    * 100,
    2
  ) as ctr_percent
from public.ads
left join public.ad_events on ad_events.ad_id = ads.id
group by ads.id, ads.slug, ads.placement, ads.advertiser_name, date_trunc('day', ad_events.occurred_at)::date;

grant execute on function public.search_listings_by_radius(text, numeric, text) to anon, authenticated;
grant execute on function public.start_chat_for_listing(uuid) to authenticated;
grant execute on function public.mark_chat_read(uuid) to authenticated;
grant select on public.ads to anon, authenticated;
grant execute on function public.track_ad_event(
  uuid,
  public.ad_placement,
  public.ad_event_type,
  text,
  uuid,
  text,
  text,
  text
) to anon, authenticated;

insert into public.ads (
  id,
  slug,
  placement,
  advertiser_name,
  title,
  description,
  image_url,
  target_url,
  cta_label,
  priority
)
values
  (
    '6cbfd216-1d8e-43e2-9d0b-7c1c2c92304b',
    'werbeplatz-inserate',
    'listings_feed',
    'Buddza Media',
    'Hier können Tiermarken werben',
    'Erreiche Menschen, die gerade aktiv Tierbetreuung suchen oder anbieten. Sichere dir einen lokalen Werbeplatz.',
    '/images/generated/dogs-ages-hero.jpg',
    'mailto:werbung@buddza.de?subject=Werbeplatz%20auf%20Buddza',
    'Werbeplatz anfragen',
    10
  ),
  (
    '8af54ff1-8bed-4bd1-9b2d-0f95f786ee5b',
    'werbeplatz-inserat-detail',
    'listing_detail',
    'Buddza Media',
    'Sichtbar neben passenden Gesuchen',
    'Platziere dein Angebot direkt dort, wo Halter eine konkrete Betreuung planen.',
    '/images/generated/login-dog-hallway.jpg',
    'mailto:werbung@buddza.de?subject=Werbeplatz%20in%20Inseratsdetails',
    'Werbung buchen',
    10
  )
on conflict (id) do update set
  slug = excluded.slug,
  placement = excluded.placement,
  advertiser_name = excluded.advertiser_name,
  title = excluded.title,
  description = excluded.description,
  image_url = excluded.image_url,
  target_url = excluded.target_url,
  cta_label = excluded.cta_label,
  priority = excluded.priority,
  status = 'active';

insert into public.pet_categories (slug, name, emoji, sort_order)
values
  ('hund', 'Hund', null, 10),
  ('katze', 'Katze', null, 20),
  ('kleintier', 'Kleintier', null, 30),
  ('vogel', 'Vogel', null, 40),
  ('reptil', 'Reptil', null, 50),
  ('sonstiges', 'Sonstiges', null, 90)
on conflict (slug) do update set
  name = excluded.name,
  emoji = excluded.emoji,
  sort_order = excluded.sort_order;

-- Demo PLZ centroids. For production, import a complete German PLZ centroid dataset
-- into public.postal_codes; the GiST index above keeps radius queries fast.
insert into public.postal_codes (postal_code, city, state, latitude, longitude)
values
  ('10115', 'Berlin', 'Berlin', 52.5326, 13.3849),
  ('20095', 'Hamburg', 'Hamburg', 53.5507, 10.0014),
  ('80331', 'München', 'Bayern', 48.1374, 11.5755),
  ('50667', 'Köln', 'Nordrhein-Westfalen', 50.9384, 6.9599),
  ('60311', 'Frankfurt am Main', 'Hessen', 50.1123, 8.6833),
  ('70173', 'Stuttgart', 'Baden-Württemberg', 48.7784, 9.1800),
  ('01067', 'Dresden', 'Sachsen', 51.0577, 13.7333),
  ('04109', 'Leipzig', 'Sachsen', 51.3397, 12.3731),
  ('90402', 'Nürnberg', 'Bayern', 49.4521, 11.0767),
  ('28195', 'Bremen', 'Bremen', 53.0758, 8.8072),
  ('30159', 'Hannover', 'Niedersachsen', 52.3745, 9.7386),
  ('48143', 'Münster', 'Nordrhein-Westfalen', 51.9624, 7.6257)
on conflict (postal_code) do update set
  city = excluded.city,
  state = excluded.state,
  latitude = excluded.latitude,
  longitude = excluded.longitude;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('listing-media', 'listing-media', true, 52428800, array['image/jpeg', 'image/png', 'image/webp', 'video/mp4', 'video/webm']),
  (
    'chat-media',
    'chat-media',
    false,
    104857600,
    array[
      'image/jpeg',
      'image/png',
      'image/webp',
      'video/mp4',
      'video/webm',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ]
  )
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Listing media public read" on storage.objects;
create policy "Listing media public read"
on storage.objects for select
using (bucket_id = 'listing-media');

drop policy if exists "Users upload own listing media" on storage.objects;
create policy "Users upload own listing media"
on storage.objects for insert
with check (
  bucket_id = 'listing-media'
  and auth.role() = 'authenticated'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "Users manage own listing media" on storage.objects;
create policy "Users manage own listing media"
on storage.objects for update
using (
  bucket_id = 'listing-media'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'listing-media'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "Users delete own listing media" on storage.objects;
create policy "Users delete own listing media"
on storage.objects for delete
using (
  bucket_id = 'listing-media'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "Chat media read by participants" on storage.objects;
create policy "Chat media read by participants"
on storage.objects for select
using (
  bucket_id = 'chat-media'
  and exists (
    select 1
    from public.chats
    where chats.id::text = (storage.foldername(name))[1]
      and auth.uid() in (chats.owner_id, chats.sitter_id)
  )
);

drop policy if exists "Chat participants upload chat media" on storage.objects;
create policy "Chat participants upload chat media"
on storage.objects for insert
with check (
  bucket_id = 'chat-media'
  and (storage.foldername(name))[2] = auth.uid()::text
  and exists (
    select 1
    from public.chats
    where chats.id::text = (storage.foldername(name))[1]
      and auth.uid() in (chats.owner_id, chats.sitter_id)
  )
);

alter table public.messages replica identity full;

do $$
begin
  alter publication supabase_realtime add table public.messages;
exception
  when duplicate_object then null;
  when undefined_object then null;
end $$;
