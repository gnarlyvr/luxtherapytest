-- New Aviv: blog posts CMS (Phase 1)
-- Run this in Supabase Dashboard → SQL Editor → New query → Run

create extension if not exists "pgcrypto";

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null default '',
  content text[] not null default '{}',
  author text not null default '',
  author_credentials text not null default '',
  tags text[] not null default '{}',
  image text not null default '',
  status text not null default 'draft'
    check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists blog_posts_status_published_at_idx
  on public.blog_posts (status, published_at desc nulls last);

create index if not exists blog_posts_slug_idx
  on public.blog_posts (slug);

create or replace function public.set_blog_posts_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row
  execute function public.set_blog_posts_updated_at();

alter table public.blog_posts enable row level security;

drop policy if exists "Public can read published blog posts" on public.blog_posts;
create policy "Public can read published blog posts"
  on public.blog_posts
  for select
  to anon, authenticated
  using (status = 'published');

drop policy if exists "Authenticated users can read all blog posts" on public.blog_posts;
create policy "Authenticated users can read all blog posts"
  on public.blog_posts
  for select
  to authenticated
  using (true);

drop policy if exists "Authenticated users can insert blog posts" on public.blog_posts;
create policy "Authenticated users can insert blog posts"
  on public.blog_posts
  for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated users can update blog posts" on public.blog_posts;
create policy "Authenticated users can update blog posts"
  on public.blog_posts
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated users can delete blog posts" on public.blog_posts;
create policy "Authenticated users can delete blog posts"
  on public.blog_posts
  for delete
  to authenticated
  using (true);

-- Seed: existing sample post from the site (safe to re-run)
insert into public.blog_posts (
  slug,
  title,
  excerpt,
  content,
  author,
  author_credentials,
  tags,
  image,
  status,
  published_at
)
values (
  'finding-hope-when-anxiety-feels-heavy',
  'Finding Hope When Anxiety Feels Heavy',
  'Anxiety can make the future feel shut down. Here''s a compassionate, practical look at rebuilding hope - one small, strength-based step at a time.',
  array[
    'As a therapist, I know that hope is obtainable despite feelings of depression or anxiety. Imagining life with hope and happiness can be challenging, but it is possible to achieve.',
    'Many of the people I work with describe anxiety as more than worry. It can feel like a full-body experience - tightness in the chest, restless thoughts, and a sense that something is wrong even when life looks “fine” from the outside. In those moments, hope can feel out of reach. That does not mean hope is gone. It means we may need a warmer, more realistic path back to it.',
    'At New Aviv, I utilize a strength-based approach with multiple behavioral health techniques and therapies to personalize care for couples or individuals. Tools such as Cognitive Behavioral Therapy (CBT) and Dialectical Behavioral Therapy (DBT) can help people notice patterns, challenge unhelpful thoughts, and build skills for emotional regulation - without dismissing how hard things feel.',
    'I also believe creating a warm, accepting, and safe environment is important to the therapeutic process. Healing rarely happens through pressure. It happens through connection: feeling understood, identifying goals that matter to you, and developing positive growth at a pace that respects your nervous system.',
    'If anxiety has been taking up more space in your life lately, consider these gentle starting points:',
    'Name what is happening without judgment. Saying “I am feeling anxious right now” can create just enough distance to respond with care instead of self-criticism.',
    'Choose one small, workable goal. Hope often returns through action that feels doable - a short walk, a text to someone safe, or a five-minute breathing practice - not through forcing yourself to feel better overnight.',
    'Ask for support. Therapy is a place to develop a plan collaboratively so we address challenges the way you want to address them. You do not have to build a hopeful future alone.',
    'If you are ready for a brief consultation, I would welcome the chance to talk about your goals and whether we can work together toward greater well-being.'
  ],
  'Christopher Diddle',
  'LICSW',
  array['Anxiety', 'Hope', 'Mental Health'],
  'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1400&q=80',
  'published',
  '2026-07-15T12:00:00Z'
)
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  content = excluded.content,
  author = excluded.author,
  author_credentials = excluded.author_credentials,
  tags = excluded.tags,
  image = excluded.image,
  status = excluded.status,
  published_at = excluded.published_at,
  updated_at = now();
