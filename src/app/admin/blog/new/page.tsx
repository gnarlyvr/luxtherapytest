import { BlogPostForm } from "@/components/admin/BlogPostForm";
import { getTherapistsForAuthorSelect } from "@/lib/therapists";

export const metadata = {
  title: "New post",
};

type NewPostPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function NewBlogPostPage({ searchParams }: NewPostPageProps) {
  const { error } = await searchParams;
  const therapists = await getTherapistsForAuthorSelect();

  return (
    <div>
      <h1 className="text-2xl font-semibold">New blog post</h1>
      <p className="mt-1 text-sm text-black/60">
        Save as draft, or publish immediately to the public blog.
      </p>
      <div className="mt-6">
        <BlogPostForm therapists={therapists} error={error ?? null} />
      </div>
    </div>
  );
}
