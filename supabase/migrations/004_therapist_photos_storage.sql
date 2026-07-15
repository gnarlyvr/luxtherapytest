-- New Aviv: therapist photo uploads (Supabase Storage)
-- Run in Supabase Dashboard → SQL Editor after 003_therapists.sql

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'therapist-photos',
  'therapist-photos',
  true,
  5242880, -- 5MB
  array['image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can read therapist photos" on storage.objects;
create policy "Public can read therapist photos"
  on storage.objects
  for select
  to anon, authenticated
  using (bucket_id = 'therapist-photos');

drop policy if exists "Authenticated users can upload therapist photos" on storage.objects;
create policy "Authenticated users can upload therapist photos"
  on storage.objects
  for insert
  to authenticated
  with check (bucket_id = 'therapist-photos');

drop policy if exists "Authenticated users can update therapist photos" on storage.objects;
create policy "Authenticated users can update therapist photos"
  on storage.objects
  for update
  to authenticated
  using (bucket_id = 'therapist-photos')
  with check (bucket_id = 'therapist-photos');

drop policy if exists "Authenticated users can delete therapist photos" on storage.objects;
create policy "Authenticated users can delete therapist photos"
  on storage.objects
  for delete
  to authenticated
  using (bucket_id = 'therapist-photos');
