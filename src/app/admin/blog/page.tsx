import Link from "next/link";
import { SignOutButton } from "@/components/admin/SignOutButton";
import { formatPostDate, getAllPostsForAdmin } from "@/lib/blog";

export const metadata = {
  title: "Blog posts",
};

export default async function AdminBlogListPage() {
  const posts = await getAllPostsForAdmin();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Blog posts</h1>
          <p className="mt-1 text-sm text-black/60">
            Create drafts, edit copy, and publish to the public blog.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <SignOutButton />
          <Link
            href="/admin/blog/new"
            className="rounded-md bg-[#4A3728] px-4 py-2.5 text-sm font-semibold text-white"
          >
            New post
          </Link>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        {posts.length === 0 ? (
          <p className="p-6 text-sm text-black/60">No posts yet.</p>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-black/10 bg-black/[0.02] text-xs uppercase tracking-wide text-black/50">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium" />
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-b border-black/5 last:border-0">
                  <td className="px-4 py-3">
                    <div className="font-medium">{post.title}</div>
                    <div className="text-xs text-black/45">/{post.slug}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={
                        post.status === "published"
                          ? "rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800"
                          : "rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-800"
                      }
                    >
                      {post.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-black/60">
                    {formatPostDate(post.publishedAt ?? post.createdAt)}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/blog/${post.id}`}
                      className="font-medium text-[#4A3728] hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
