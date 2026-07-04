-- Refresh Buddza pet categories without changing the base schema file.
-- Run this after supabase/schema.sql in the Supabase SQL editor.

update public.pet_categories
set
  slug = 'sonstiges-tier',
  name = 'Sonstiges Tier',
  sort_order = 190
where slug = 'sonstiges'
  and not exists (
    select 1
    from public.pet_categories existing
    where existing.slug = 'sonstiges-tier'
  );

insert into public.pet_categories (slug, name, emoji, sort_order)
values
  ('hund', 'Hund', null, 10),
  ('katze', 'Katze', null, 20),
  ('kleintier', 'Kleintier', null, 30),
  ('vogel', 'Vogel', null, 40),
  ('fisch', 'Fisch', null, 50),
  ('aquarium', 'Aquarium', null, 60),
  ('reptil', 'Reptil', null, 70),
  ('amphibie', 'Amphibie', null, 80),
  ('insekt', 'Insekt', null, 90),
  ('wirbelloses', 'Wirbelloses', null, 100),
  ('pferd', 'Pferd', null, 110),
  ('pony', 'Pony', null, 120),
  ('hoftier', 'Hoftier', null, 130),
  ('nutztier', 'Nutztier', null, 140),
  ('exotisches-tier', 'Exotisches Tier', null, 150),
  ('wildtier', 'Wildtier', null, 160),
  ('auffangstation', 'Auffangstation', null, 170),
  ('zoo-oder-parktier', 'Zoo- oder Parktier', null, 180),
  ('sonstiges-tier', 'Sonstiges Tier', null, 190)
on conflict (slug) do update set
  name = excluded.name,
  emoji = excluded.emoji,
  sort_order = excluded.sort_order;

delete from public.pet_categories category
where category.slug not in (
  'hund',
  'katze',
  'kleintier',
  'vogel',
  'fisch',
  'aquarium',
  'reptil',
  'amphibie',
  'insekt',
  'wirbelloses',
  'pferd',
  'pony',
  'hoftier',
  'nutztier',
  'exotisches-tier',
  'wildtier',
  'auffangstation',
  'zoo-oder-parktier',
  'sonstiges-tier'
)
and not exists (
  select 1
  from public.listings listing
  where listing.category_id = category.id
);
