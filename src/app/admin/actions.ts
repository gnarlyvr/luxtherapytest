"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  paragraphsToContent,
  slugify,
  type BlogPostStatus,
} from "@/lib/blog-shared";
import { buildTherapistId } from "@/lib/therapists";
import { createClient } from "@/lib/supabase/server";
import type { SupabaseClient } from "@supabase/supabase-js";

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

function parseList(value: string): string[] {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseFormats(value: FormData): string[] {
  const selected = value.getAll("formats").map(String);
  return selected.filter((item) => item === "In-person" || item === "Virtual");
}

async function readPostFields(
  formData: FormData,
  supabase: SupabaseClient,
) {
  const title = String(formData.get("title") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const authorId = String(formData.get("authorId") ?? "").trim() || null;
  const image = String(formData.get("image") ?? "").trim();
  const tags = parseList(String(formData.get("tags") ?? ""));
  const content = paragraphsToContent(String(formData.get("content") ?? ""));
  const status = String(formData.get("status") ?? "draft") as BlogPostStatus;
  const slug = slugify(slugInput || title);

  if (!title) throw new Error("Title is required.");
  if (!slug) throw new Error("Slug is required.");
  if (status !== "draft" && status !== "published") {
    throw new Error("Invalid status.");
  }

  let author = "";
  let authorCredentials = "";

  if (authorId) {
    const { data: therapist, error } = await supabase
      .from("therapists")
      .select("name, credentials")
      .eq("id", authorId)
      .maybeSingle();

    if (error) throw new Error(error.message);
    if (!therapist) throw new Error("Selected therapist was not found.");
    author = therapist.name;
    authorCredentials = therapist.credentials ?? "";
  }

  return {
    title,
    slug,
    excerpt,
    author,
    author_credentials: authorCredentials,
    author_id: authorId,
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
  let fields;
  try {
    fields = await readPostFields(formData, supabase);
  } catch (error) {
    redirect(
      `/admin/blog/new?error=${encodeURIComponent(
        error instanceof Error ? error.message : "Invalid post",
      )}`,
    );
  }

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

  let fields;
  try {
    fields = await readPostFields(formData, supabase);
  } catch (error) {
    redirect(
      `/admin/blog/${id}?error=${encodeURIComponent(
        error instanceof Error ? error.message : "Invalid post",
      )}`,
    );
  }

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

function readTherapistFields(formData: FormData, existingId?: string) {
  const name = String(formData.get("name") ?? "").trim();
  const credentials = String(formData.get("credentials") ?? "").trim();
  const role = String(formData.get("role") ?? "").trim() || "Therapist";
  const image = String(formData.get("image") ?? "").trim();
  const statement = String(formData.get("statement") ?? "").trim();
  const bio = paragraphsToContent(String(formData.get("bio") ?? ""));
  const specializations = parseList(String(formData.get("specializations") ?? ""));
  const formats = parseFormats(formData);
  const sortOrder = Number(formData.get("sortOrder") ?? 0);
  const isActive = formData.get("isActive") === "on";
  const idInput = String(formData.get("id") ?? "").trim();
  const id = existingId || buildTherapistId(name, idInput);

  if (!name) throw new Error("Name is required.");
  if (!id) throw new Error("ID is required.");

  return {
    id,
    name,
    credentials,
    role,
    image,
    statement,
    bio,
    specializations,
    formats,
    sort_order: Number.isFinite(sortOrder) ? sortOrder : 0,
    is_active: isActive,
  };
}

export async function createTherapist(formData: FormData) {
  const supabase = await requireUser();
  let fields;
  try {
    fields = readTherapistFields(formData);
  } catch (error) {
    redirect(
      `/admin/therapists/new?error=${encodeURIComponent(
        error instanceof Error ? error.message : "Invalid therapist",
      )}`,
    );
  }

  const { error } = await supabase.from("therapists").insert(fields);
  if (error) {
    redirect(
      `/admin/therapists/new?error=${encodeURIComponent(error.message)}`,
    );
  }

  revalidatePath("/therapists");
  revalidatePath("/admin/therapists");
  revalidatePath("/blog");
  redirect(`/admin/therapists/${fields.id}?saved=1`);
}

export async function updateTherapist(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "").trim();
  if (!id) throw new Error("Missing therapist id.");

  let fields;
  try {
    fields = readTherapistFields(formData, id);
  } catch (error) {
    redirect(
      `/admin/therapists/${id}?error=${encodeURIComponent(
        error instanceof Error ? error.message : "Invalid therapist",
      )}`,
    );
  }

  const { id: _id, ...update } = fields;
  const { error } = await supabase
    .from("therapists")
    .update(update)
    .eq("id", id);

  if (error) {
    redirect(
      `/admin/therapists/${id}?error=${encodeURIComponent(error.message)}`,
    );
  }

  // Keep denormalized blog author fields in sync
  await supabase
    .from("blog_posts")
    .update({
      author: fields.name,
      author_credentials: fields.credentials,
    })
    .eq("author_id", id);

  revalidatePath("/therapists");
  revalidatePath("/admin/therapists");
  revalidatePath("/blog");
  redirect(`/admin/therapists/${id}?saved=1`);
}

export async function deleteTherapist(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "").trim();
  if (!id) throw new Error("Missing therapist id.");

  const { error } = await supabase.from("therapists").delete().eq("id", id);
  if (error) {
    redirect(
      `/admin/therapists/${id}?error=${encodeURIComponent(error.message)}`,
    );
  }

  revalidatePath("/therapists");
  revalidatePath("/admin/therapists");
  revalidatePath("/blog");
  redirect("/admin/therapists");
}
