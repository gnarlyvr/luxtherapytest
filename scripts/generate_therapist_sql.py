"""Generate 003_therapists.sql from src/data/therapists.ts"""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(r"C:\luxtherapytest")
SRC = ROOT / "src" / "data" / "therapists.ts"
OUT = ROOT / "supabase" / "migrations" / "003_therapists.sql"


def sql_str(value: str) -> str:
    return "'" + value.replace("'", "''") + "'"


def sql_text_array(items: list[str]) -> str:
    if not items:
        return "'{}'"
    return "ARRAY[" + ", ".join(sql_str(i) for i in items) + "]"


def extract_objects(text: str) -> list[dict]:
    # remove export preamble until array start
    start = text.index("export const therapists")
    body = text[start:]
    # split on top-level object starts after [
    objs = []
    # crude: find each id: "..."
    pattern = re.compile(
        r'\{\s*id:\s*"(?P<id>[^"]+)",\s*'
        r'name:\s*"(?P<name>(?:\\.|[^"\\])*)",\s*'
        r'credentials:\s*"(?P<credentials>(?:\\.|[^"\\])*)",\s*'
        r'role:\s*"(?P<role>(?:\\.|[^"\\])*)",\s*'
        r'image:\s*`\$\{cdn\}(?P<image>[^`]+)`,\s*'
        r"specializations:\s*\[(?P<specs>.*?)\],\s*"
        r"formats:\s*\[(?P<formats>.*?)\],\s*"
        r'statement:\s*"(?P<statement>(?:\\.|[^"\\])*)",\s*'
        r"bio:\s*\[(?P<bio>.*?)\],\s*"
        r"\},",
        re.S,
    )
    cdn = "https://images.squarespace-cdn.com/content/v1/62a90d994f9cd65136626afd"

    def unescape(s: str) -> str:
        return bytes(s, "utf-8").decode("unicode_escape") if "\\" in s else s

    def parse_string_list(block: str) -> list[str]:
        return [unescape(m) for m in re.findall(r'"((?:\\.|[^"\\])*)"', block)]

    for i, m in enumerate(pattern.finditer(body)):
        d = m.groupdict()
        objs.append(
            {
                "id": d["id"],
                "name": unescape(d["name"]),
                "credentials": unescape(d["credentials"]),
                "role": unescape(d["role"]),
                "image": cdn + d["image"],
                "specializations": parse_string_list(d["specs"]),
                "formats": parse_string_list(d["formats"]),
                "statement": unescape(d["statement"]),
                "bio": parse_string_list(d["bio"]),
                "sort_order": i,
            }
        )
    return objs


def main() -> None:
    text = SRC.read_text(encoding="utf-8")
    therapists = extract_objects(text)
    if len(therapists) < 10:
        raise SystemExit(f"Expected many therapists, got {len(therapists)}")

    inserts = []
    for t in therapists:
        inserts.append(
            "  ("
            + ", ".join(
                [
                    sql_str(t["id"]),
                    sql_str(t["name"]),
                    sql_str(t["credentials"]),
                    sql_str(t["role"]),
                    sql_str(t["image"]),
                    sql_text_array(t["specializations"]),
                    sql_text_array(t["formats"]),
                    sql_str(t["statement"]),
                    sql_text_array(t["bio"]),
                    str(t["sort_order"]),
                    "true",
                ]
            )
            + ")"
        )

    seed = ",\n".join(inserts)

    sql = f"""-- New Aviv: therapists CMS + blog author linking
-- Run in Supabase Dashboard → SQL Editor

create table if not exists public.therapists (
  id text primary key,
  name text not null,
  credentials text not null default '',
  role text not null default 'Therapist',
  image text not null default '',
  specializations text[] not null default '{{}}',
  formats text[] not null default '{{}}',
  statement text not null default '',
  bio text[] not null default '{{}}',
  sort_order int not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists therapists_active_sort_idx
  on public.therapists (is_active, sort_order);

create or replace function public.set_therapists_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists therapists_set_updated_at on public.therapists;
create trigger therapists_set_updated_at
  before update on public.therapists
  for each row
  execute function public.set_therapists_updated_at();

alter table public.therapists enable row level security;

drop policy if exists "Public can read active therapists" on public.therapists;
create policy "Public can read active therapists"
  on public.therapists
  for select
  to anon, authenticated
  using (is_active = true);

drop policy if exists "Authenticated users can read all therapists" on public.therapists;
create policy "Authenticated users can read all therapists"
  on public.therapists
  for select
  to authenticated
  using (true);

drop policy if exists "Authenticated users can insert therapists" on public.therapists;
create policy "Authenticated users can insert therapists"
  on public.therapists
  for insert
  to authenticated
  with check (true);

drop policy if exists "Authenticated users can update therapists" on public.therapists;
create policy "Authenticated users can update therapists"
  on public.therapists
  for update
  to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated users can delete therapists" on public.therapists;
create policy "Authenticated users can delete therapists"
  on public.therapists
  for delete
  to authenticated
  using (true);

-- Link blog posts to therapists (keeps legacy author text as denormalized fallback)
alter table public.blog_posts
  add column if not exists author_id text references public.therapists (id) on delete set null;

create index if not exists blog_posts_author_id_idx on public.blog_posts (author_id);

insert into public.therapists (
  id, name, credentials, role, image, specializations, formats, statement, bio, sort_order, is_active
)
values
{seed}
on conflict (id) do update set
  name = excluded.name,
  credentials = excluded.credentials,
  role = excluded.role,
  image = excluded.image,
  specializations = excluded.specializations,
  formats = excluded.formats,
  statement = excluded.statement,
  bio = excluded.bio,
  sort_order = excluded.sort_order,
  is_active = excluded.is_active,
  updated_at = now();

-- Point existing Christopher post at his therapist profile when present
update public.blog_posts
set author_id = 'christopher-diddle',
    author = 'Christopher Diddle',
    author_credentials = 'LICSW'
where slug = 'finding-hope-when-anxiety-feels-heavy';
"""

    OUT.write_text(sql, encoding="utf-8")
    print(f"Wrote {OUT} with {len(therapists)} therapists")


if __name__ == "__main__":
    main()
