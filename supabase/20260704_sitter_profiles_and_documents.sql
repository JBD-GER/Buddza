-- Adds sitter profiles, limited sitter categories, availability and document attachments for chats.

alter type public.message_media_type add value if not exists 'document';

create table if not exists public.sitter_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references public.profiles(id) on delete cascade,
  headline text not null check (char_length(headline) between 5 and 90),
  description text not null check (char_length(description) between 40 and 1600),
  profile_image_path text not null,
  postal_code text not null references public.postal_codes(postal_code) on update cascade,
  radius_km integer not null check (radius_km between 1 and 250),
  hourly_rate_cents integer not null check (hourly_rate_cents between 0 and 50000),
  status text not null default 'active' check (status in ('active', 'paused')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists sitter_profiles_user_idx on public.sitter_profiles(user_id);
create index if not exists sitter_profiles_status_created_idx on public.sitter_profiles(status, created_at desc);
create index if not exists sitter_profiles_postal_code_idx on public.sitter_profiles(postal_code);

create table if not exists public.sitter_profile_categories (
  sitter_profile_id uuid not null references public.sitter_profiles(id) on delete cascade,
  category_id uuid not null references public.pet_categories(id) on delete restrict,
  created_at timestamptz not null default now(),
  primary key (sitter_profile_id, category_id)
);

create index if not exists sitter_profile_categories_category_idx on public.sitter_profile_categories(category_id);

create table if not exists public.sitter_profile_availability (
  sitter_profile_id uuid not null references public.sitter_profiles(id) on delete cascade,
  weekday smallint not null check (weekday between 1 and 7),
  created_at timestamptz not null default now(),
  primary key (sitter_profile_id, weekday)
);

create or replace function public.enforce_sitter_category_limit()
returns trigger
language plpgsql
as $$
begin
  if (
    select count(*)
    from public.sitter_profile_categories
    where sitter_profile_id = new.sitter_profile_id
  ) >= 3 then
    raise exception 'Tierbetreuer duerfen maximal 3 Kategorien auswaehlen.';
  end if;

  return new;
end;
$$;

drop trigger if exists sitter_category_limit on public.sitter_profile_categories;
create trigger sitter_category_limit
before insert on public.sitter_profile_categories
for each row execute function public.enforce_sitter_category_limit();

drop trigger if exists sitter_profiles_set_updated_at on public.sitter_profiles;
create trigger sitter_profiles_set_updated_at
before update on public.sitter_profiles
for each row execute function public.set_updated_at();

alter table public.sitter_profiles enable row level security;
alter table public.sitter_profile_categories enable row level security;
alter table public.sitter_profile_availability enable row level security;

drop policy if exists "Active sitter profiles are public, owners see own" on public.sitter_profiles;
create policy "Active sitter profiles are public, owners see own"
on public.sitter_profiles for select
using (status = 'active' or user_id = auth.uid());

drop policy if exists "Users create own sitter profile" on public.sitter_profiles;
create policy "Users create own sitter profile"
on public.sitter_profiles for insert
with check (user_id = auth.uid());

drop policy if exists "Users update own sitter profile" on public.sitter_profiles;
create policy "Users update own sitter profile"
on public.sitter_profiles for update
using (user_id = auth.uid())
with check (user_id = auth.uid());

drop policy if exists "Users delete own sitter profile" on public.sitter_profiles;
create policy "Users delete own sitter profile"
on public.sitter_profiles for delete
using (user_id = auth.uid());

drop policy if exists "Sitter categories are readable" on public.sitter_profile_categories;
create policy "Sitter categories are readable"
on public.sitter_profile_categories for select
using (
  exists (
    select 1
    from public.sitter_profiles
    where sitter_profiles.id = sitter_profile_categories.sitter_profile_id
      and (sitter_profiles.status = 'active' or sitter_profiles.user_id = auth.uid())
  )
);

drop policy if exists "Users manage own sitter categories" on public.sitter_profile_categories;
create policy "Users manage own sitter categories"
on public.sitter_profile_categories for all
using (
  exists (
    select 1
    from public.sitter_profiles
    where sitter_profiles.id = sitter_profile_categories.sitter_profile_id
      and sitter_profiles.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.sitter_profiles
    where sitter_profiles.id = sitter_profile_categories.sitter_profile_id
      and sitter_profiles.user_id = auth.uid()
  )
);

drop policy if exists "Sitter availability is readable" on public.sitter_profile_availability;
create policy "Sitter availability is readable"
on public.sitter_profile_availability for select
using (
  exists (
    select 1
    from public.sitter_profiles
    where sitter_profiles.id = sitter_profile_availability.sitter_profile_id
      and (sitter_profiles.status = 'active' or sitter_profiles.user_id = auth.uid())
  )
);

drop policy if exists "Users manage own sitter availability" on public.sitter_profile_availability;
create policy "Users manage own sitter availability"
on public.sitter_profile_availability for all
using (
  exists (
    select 1
    from public.sitter_profiles
    where sitter_profiles.id = sitter_profile_availability.sitter_profile_id
      and sitter_profiles.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.sitter_profiles
    where sitter_profiles.id = sitter_profile_availability.sitter_profile_id
      and sitter_profiles.user_id = auth.uid()
  )
);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values
  ('sitter-media', 'sitter-media', true, 10485760, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

update storage.buckets
set allowed_mime_types = array[
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
where id = 'chat-media';

drop policy if exists "Sitter media public read" on storage.objects;
create policy "Sitter media public read"
on storage.objects for select
using (bucket_id = 'sitter-media');

drop policy if exists "Users upload own sitter media" on storage.objects;
create policy "Users upload own sitter media"
on storage.objects for insert
with check (
  bucket_id = 'sitter-media'
  and auth.role() = 'authenticated'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "Users manage own sitter media" on storage.objects;
create policy "Users manage own sitter media"
on storage.objects for update
using (
  bucket_id = 'sitter-media'
  and (storage.foldername(name))[1] = auth.uid()::text
)
with check (
  bucket_id = 'sitter-media'
  and (storage.foldername(name))[1] = auth.uid()::text
);

drop policy if exists "Users delete own sitter media" on storage.objects;
create policy "Users delete own sitter media"
on storage.objects for delete
using (
  bucket_id = 'sitter-media'
  and (storage.foldername(name))[1] = auth.uid()::text
);
