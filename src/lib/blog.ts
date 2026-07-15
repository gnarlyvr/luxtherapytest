import type { BlogPost, BlogPostStatus } from "@/lib/blog-shared";
import type { BlogAuthor } from "@/lib/therapist-shared";
import { createPublicClient } from "@/lib/supabase/public";
import { createClient } from "@/lib/supabase/server";

export type { BlogPost, BlogPostStatus } from "@/lib/blog-shared";
export {
  contentToParagraphs,
  formatPostDate,
  paragraphsToContent,
  slugify,
} from "@/lib/blog-shared";

export type BlogPostWithAuthor = BlogPost & {
  authorProfile: BlogAuthor | null;
};

type TherapistRow = {
  id: string;
  name: string;
  credentials: string;
  image: string;
  role: string;
};

type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[] | null | string;
  author: string;
  author_credentials: string;
  author_id?: string | null;
  tags: string[] | null | string;
  image: string;
  status: BlogPostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

function asStringArray(value: string[] | string | null | undefined): string[] {
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  if (typeof value === "string" && value.trim()) {
    return value
      .split(/\n\s*\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }
  return [];
}

async function loadAuthorsById(
  supabase: ReturnType<typeof createPublicClient>,
  authorIds: string[],
): Promise<Map<string, BlogAuthor>> {
  const unique = Array.from(new Set(authorIds.filter(Boolean)));
  const map = new Map<string, BlogAuthor>();
  if (unique.length === 0) return map;

  const { data, error } = await supabase
    .from("therapists")
    .select("id, name, credentials, image, role")
    .in("id", unique);

  if (error) {
    console.error("Failed to load blog authors:", error.message);
    return map;
  }

  for (const row of (data as TherapistRow[]) ?? []) {
    map.set(row.id, {
      id: row.id,
      name: row.name,
      credentials: row.credentials ?? "",
      image: row.image ?? "",
      role: row.role ?? "",
    });
  }
  return map;
}

function mapRow(
  row: BlogPostRow,
  authors: Map<string, BlogAuthor>,
): BlogPostWithAuthor {
  const authorProfile =
    (row.author_id ? authors.get(row.author_id) : null) ??
    (row.author
      ? {
          id: row.author_id ?? "",
          name: row.author,
          credentials: row.author_credentials ?? "",
          image: "",
          role: "",
        }
      : null);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? "",
    content: asStringArray(row.content),
    author: authorProfile?.name ?? row.author ?? "",
    authorCredentials:
      authorProfile?.credentials ?? row.author_credentials ?? "",
    authorId: row.author_id ?? null,
    tags: asStringArray(row.tags),
    image: row.image ?? "",
    status: row.status,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    authorProfile,
  };
}

async function withAuthors(
  supabase: ReturnType<typeof createPublicClient>,
  rows: BlogPostRow[],
): Promise<BlogPostWithAuthor[]> {
  const authors = await loadAuthorsById(
    supabase,
    rows.map((row) => row.author_id ?? ""),
  );
  return rows.map((row) => mapRow(row, authors));
}

export async function getPublishedPosts(): Promise<BlogPostWithAuthor[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw new Error(error.message);
  return withAuthors(supabase, (data as BlogPostRow[]) ?? []);
}

export async function getPublishedPostBySlug(
  slug: string,
): Promise<BlogPostWithAuthor | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data) return null;
  const [post] = await withAuthors(supabase, [data as BlogPostRow]);
  return post;
}

export async function getAllPostsForAdmin(): Promise<BlogPostWithAuthor[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw new Error(error.message);
  return withAuthors(supabase, (data as BlogPostRow[]) ?? []);
}

export async function getPostByIdForAdmin(
  id: string,
): Promise<BlogPostWithAuthor | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  if (!data) return null;
  const [post] = await withAuthors(supabase, [data as BlogPostRow]);
  return post;
}
