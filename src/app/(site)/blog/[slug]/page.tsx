import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CmsImage } from "@/components/CmsImage";
import {
  formatPostDate,
  getPublishedPostBySlug,
  getPublishedPosts,
} from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPublishedPostBySlug(slug);
  if (!post) notFound();

  return (
    <article>
      <header className="border-b border-lux-border/80 bg-lux-paper">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lux-ink-muted">
            <Link href="/blog" className="transition-colors hover:text-lux-moss">
              Blog
            </Link>
            <span className="mx-2">·</span>
            {formatPostDate(post.publishedAt)}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-lux-moss-deep sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lux-ink-muted">
            By {post.author}
            {post.authorCredentials ? `, ${post.authorCredentials}` : ""}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-lux-foam px-2.5 py-1 text-xs font-medium text-lux-moss-deep"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {post.image ? (
        <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-lux-foam">
            <CmsImage
              src={post.image}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      ) : null}

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-5 text-lg leading-relaxed text-lux-ink-muted">
          {post.content.map((paragraph, index) => (
            <p key={`${post.id}-${index}`}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-lux-border bg-lux-foam p-6 sm:p-8">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Ready to talk?
          </h2>
          <p className="mt-3 text-lux-ink-muted">
            If this article resonated, the New Aviv team is here to help you
            take a next step toward hope and healing.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/contact">Schedule a Consultation</ButtonLink>
            <ButtonLink href="/blog" variant="secondary">
              Back to Blog
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
