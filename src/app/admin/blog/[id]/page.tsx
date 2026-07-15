import { notFound } from "next/navigation";
import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { getPostByIdForAdmin } from "@/lib/blog";

export const metadata = {
  title: "Edit post",
};

type EditPostPageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
};

export default async function EditBlogPostPage({
  params,
  searchParams,
}: EditPostPageProps) {
  const { id } = await params;
  const { saved, error } = await searchParams;
  const post = await getPostByIdForAdmin(id);
  if (!post) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Edit post</h1>
      <p className="mt-1 text-sm text-black/60">
        Update content and switch between draft and published.
      </p>
      <div className="mt-6">
        <BlogPostForm
          post={post}
          notice={saved ? "Saved." : null}
          error={error ?? null}
        />
      </div>
    </div>
  );
}
