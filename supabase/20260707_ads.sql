do $$ begin
  create type public.ad_placement as enum ('listings_feed', 'listing_detail');
exception when duplicate_object then null;
end $$;

do $$ begin
  create type public.ad_event_type as enum ('impression', 'click');
exception when duplicate_object then null;
end $$;

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

drop trigger if exists ads_set_updated_at on public.ads;
create trigger ads_set_updated_at
before update on public.ads
for each row execute function public.set_updated_at();

alter table public.ads enable row level security;
alter table public.ad_events enable row level security;

drop policy if exists "Active ads are public" on public.ads;
create policy "Active ads are public"
on public.ads for select
using (
  status = 'active'
  and starts_at <= now()
  and (ends_at is null or ends_at >= now())
);

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
