import { createClient } from "@/lib/supabase/server";
import type { BlogPost, BlogPostStatus } from "@/lib/blog-shared";

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
  content: string[] | null;
  author: string;
  author_credentials: string;
  tags: string[] | null;
  image: string;
  status: BlogPostStatus;
  published_at: string | null;
  created_at: string;
  updated_at: string;
};

function mapRow(row: BlogPostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    content: row.content ?? [],
    author: row.author,
    authorCredentials: row.author_credentials,
    tags: row.tags ?? [],
    image: row.image,
    status: row.status,
    publishedAt: row.published_at,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data as BlogPostRow[]).map(mapRow);
}

export async function getPublishedPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) throw new Error(error.message);
  return data ? mapRow(data as BlogPostRow) : null;
}

export async function getAllPostsForAdmin(): Promise<BlogPost[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("updated_at", { ascending: false });

  if (error) throw new Error(error.message);
  return (data as BlogPostRow[]).map(mapRow);
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
