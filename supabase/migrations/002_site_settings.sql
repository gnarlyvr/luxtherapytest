-- New Aviv: site settings (social links, etc.)
-- Run in Supabase Dashboard → SQL Editor

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create or replace function public.set_site_settings_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists site_settings_set_updated_at on public.site_settings;
create trigger site_settings_set_updated_at
  before update on public.site_settings
  for each row
  execute function public.set_site_settings_updated_at();

alter table public.site_settings enable row level security;

drop policy if exists "Public can read site settings" on public.site_settings;
create policy "Public can read site settings"
  on public.site_settings
  for select
  to anon, authenticated
  using (true);

drop policy if exists "Authenticated users can insert site settings" on public.site_settings;
create policy "Authenticated users can insert site settings"
  on public.site_settings
  for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated users can update site settings" on public.site_settings;
create policy "Authenticated users can update site settings"
  on public.site_settings
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated users can delete site settings" on public.site_settings;
create policy "Authenticated users can delete site settings"
  on public.site_settings
  for delete
  to authenticated
  using (true);

insert into public.site_settings (key, value)
values (
  'social_links',
  '{
    "instagram": "",
    "facebook": "",
    "linkedin": "",
    "youtube": "",
    "tiktok": "",
    "x": ""
  }'::jsonb
)
on conflict (key) do nothing;
