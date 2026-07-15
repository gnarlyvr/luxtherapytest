import type { BlogPost, BlogPostStatus } from "@/lib/blog-shared";
import { createPublicClient } from "@/lib/supabase/public";
import { createClient } from "@/lib/supabase/server";

export type { BlogPost, BlogPostStatus } from "@/lib/blog-shared";
export {
  contentToParagraphs,
  formatPostDate,
  paragraphsToContent,
  slugify,
} from "@/lib/blog-shared";

type BlogPostRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[] | null | string;
  author: string;
  author_credentials: string;
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

function mapRow(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt ?? "",
    content: asStringArray(row.content),
    author: row.author ?? "",
    authorCredentials: row.author_credentials ?? "",
    tags: asStringArray(row.tags),
    image: row.image ?? "",
    status: row.status,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

/** Public site reads — cookie-free so ISR/static works in production. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw new Error(error.message);
  return ((data as BlogPostRow[]) ?? []).map(mapRow);
}

export async function getPublishedPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ? mapRow(data as BlogPostRow) : null;
}

/** Admin reads — require authenticated cookie session. */
export async function getAllPostsForAdmin(): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw new Error(error.message);
  return ((data as BlogPostRow[]) ?? []).map(mapRow);
}

export async function getPostByIdForAdmin(
  id: string,
): Promise<BlogPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ? mapRow(data as BlogPostRow) : null;
}
