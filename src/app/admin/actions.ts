"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  paragraphsToContent,
  slugify,
  type BlogPostStatus,
} from "@/lib/blog-shared";
import { createClient } from "@/lib/supabase/server";

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }
  return supabase;
}

function parseTags(value: string): string[] {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function readPostFields(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const author = String(formData.get("author") ?? "").trim();
  const authorCredentials = String(
    formData.get("authorCredentials") ?? "",
  ).trim();
  const image = String(formData.get("image") ?? "").trim();
  const tags = parseTags(String(formData.get("tags") ?? ""));
  const content = paragraphsToContent(String(formData.get("content") ?? ""));
  const status = String(formData.get("status") ?? "draft") as BlogPostStatus;
  const slug = slugify(slugInput || title);

  if (!title) throw new Error("Title is required.");
  if (!slug) throw new Error("Slug is required.");
  if (status !== "draft" && status !== "published") {
    throw new Error("Invalid status.");
  }

  return {
    title,
    slug,
    excerpt,
    author,
    author_credentials: authorCredentials,
    image,
    tags,
    content,
    status,
    published_at:
      status === "published" ? new Date().toISOString() : null,
  };
}

export async function createBlogPost(formData: FormData) {
  const supabase = await requireUser();
  const fields = readPostFields(formData);

  const { data, error } = await supabase
    .from("blog_posts")
    .insert(fields)
    .select("id")
    .single();

  if (error) {
    redirect(`/admin/blog/new?error=${encodeURIComponent(error.message)}`);
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect(`/admin/blog/${data.id}?saved=1`);
}

export async function updateBlogPost(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "");
  if (!id) throw new Error("Missing post id.");

  const fields = readPostFields(formData);

  // Keep original published_at if already published and staying published
  if (fields.status === "published") {
    const { data: existing } = await supabase
      .from("blog_posts")
      .select("published_at, status")
      .eq("id", id)
      .maybeSingle();

    if (existing?.status === "published" && existing.published_at) {
      fields.published_at = existing.published_at;
    }
  }

  const { error } = await supabase
    .from("blog_posts")
    .update(fields)
    .eq("id", id);

  if (error) {
    redirect(
      `/admin/blog/${id}?error=${encodeURIComponent(error.message)}`,
    );
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${fields.slug}`);
  revalidatePath("/admin/blog");
  redirect(`/admin/blog/${id}?saved=1`);
}

export async function deleteBlogPost(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "");
  if (!id) throw new Error("Missing post id.");

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) {
    redirect(
      `/admin/blog/${id}?error=${encodeURIComponent(error.message)}`,
    );
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");
  redirect("/admin/blog");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateSocialLinks(formData: FormData) {
  const supabase = await requireUser();

  const value = {
    instagram: String(formData.get("instagram") ?? "").trim(),
    facebook: String(formData.get("facebook") ?? "").trim(),
    linkedin: String(formData.get("linkedin") ?? "").trim(),
    youtube: String(formData.get("youtube") ?? "").trim(),
    tiktok: String(formData.get("tiktok") ?? "").trim(),
    x: String(formData.get("x") ?? "").trim(),
  };

  const { error } = await supabase.from("site_settings").upsert(
    {
      key: "social_links",
      value,
    },
    { onConflict: "key" },
  );

  if (error) {
    redirect(
      `/admin/settings?error=${encodeURIComponent(error.message)}`,
    );
  }

  revalidatePath("/", "layout");
  revalidatePath("/contact");
  revalidatePath("/admin/settings");
  redirect("/admin/settings?saved=1");
}
