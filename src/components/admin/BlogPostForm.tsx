"use client";

import Link from "next/link";
import {
  contentToParagraphs,
  type BlogPost,
  type BlogPostStatus,
} from "@/lib/blog-shared";
import { createBlogPost, deleteBlogPost, updateBlogPost } from "@/app/admin/actions";

type BlogPostFormProps = {
  post?: BlogPost;
  notice?: string | null;
  error?: string | null;
};

const fieldClass =
  "mt-1 w-full rounded-md border border-black/15 px-3 py-2 text-sm outline-none focus:border-black/40";
const labelClass = "block text-sm font-medium";

export function BlogPostForm({ post, notice, error }: BlogPostFormProps) {
  const action = post ? updateBlogPost : createBlogPost;
  const status: BlogPostStatus = post?.status ?? "draft";

  return (
    <form action={action} className="space-y-5 rounded-xl border border-black/10 bg-white p-6 shadow-sm">
      {post ? <input type="hidden" name="id" value={post.id} /> : null}

      {notice ? (
        <p className="rounded-md bg-emerald-50 px-3 py-2 text-sm text-emerald-800">
          {notice}
        </p>
      ) : null}
      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <label className={labelClass}>
        Title
        <input
          name="title"
          required
          defaultValue={post?.title ?? ""}
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Slug
        <input
          name="slug"
          defaultValue={post?.slug ?? ""}
          placeholder="auto-generated-from-title-if-blank"
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Excerpt
        <textarea
          name="excerpt"
          rows={3}
          defaultValue={post?.excerpt ?? ""}
          className={fieldClass}
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelClass}>
          Author
          <input
            name="author"
            defaultValue={post?.author ?? ""}
            className={fieldClass}
          />
        </label>
        <label className={labelClass}>
          Credentials
          <input
            name="authorCredentials"
            defaultValue={post?.authorCredentials ?? ""}
            placeholder="LICSW"
            className={fieldClass}
          />
        </label>
      </div>

      <label className={labelClass}>
        Tags (comma-separated)
        <input
          name="tags"
          defaultValue={post?.tags.join(", ") ?? ""}
          placeholder="Anxiety, Hope, Mental Health"
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Image URL
        <input
          name="image"
          type="url"
          defaultValue={post?.image ?? ""}
          placeholder="https://..."
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Content
        <span className="mt-1 block text-xs font-normal text-black/50">
          Separate paragraphs with a blank line.
        </span>
        <textarea
          name="content"
          required
          rows={16}
          defaultValue={post ? contentToParagraphs(post.content) : ""}
          className={fieldClass}
        />
      </label>

      <label className={labelClass}>
        Status
        <select name="status" defaultValue={status} className={fieldClass}>
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </label>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="submit"
          className="rounded-md bg-[#4A3728] px-4 py-2.5 text-sm font-semibold text-white"
        >
          {post ? "Save changes" : "Create post"}
        </button>
        <Link
          href="/admin/blog"
          className="rounded-md border border-black/15 px-4 py-2.5 text-sm font-medium"
        >
          Cancel
        </Link>
        {post ? (
          <button
            formAction={deleteBlogPost}
            formNoValidate
            className="ml-auto rounded-md border border-red-200 px-4 py-2.5 text-sm font-medium text-red-700"
            onClick={(e) => {
              if (!confirm("Delete this post permanently?")) {
                e.preventDefault();
              }
            }}
          >
            Delete
          </button>
        ) : null}
      </div>
    </form>
  );
}
