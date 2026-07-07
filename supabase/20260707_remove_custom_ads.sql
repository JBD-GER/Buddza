-- Cleanup for the removed custom ad backend. Safe to run if the objects exist;
-- fresh setups only need supabase/schema.sql.

do $$
begin
  if to_regclass('public.ads') is not null then
    drop policy if exists "Active ads are public" on public.ads;
  end if;
end $$;

drop view if exists public.ad_daily_stats;

do $$
begin
  if exists (
    select 1
    from pg_proc
    join pg_namespace on pg_namespace.oid = pg_proc.pronamespace
    where pg_namespace.nspname = 'public'
      and pg_proc.proname = 'track_ad_event'
  ) then
    execute 'drop function public.track_ad_event(uuid, public.ad_placement, public.ad_event_type, text, uuid, text, text, text)';
  end if;
end $$;

drop table if exists public.ad_events;
drop table if exists public.ads;
drop type if exists public.ad_event_type;
drop type if exists public.ad_placement;
