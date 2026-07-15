import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { formatPostDate, getPostBySlug, blogPosts } from "@/data/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
            {formatPostDate(post.date)}
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-lux-moss-deep sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lux-ink-muted">
            By {post.author}, {post.authorCredentials}
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

      <div className="mx-auto mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-5 text-lg leading-relaxed text-lux-ink-muted">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-lux-border bg-lux-foam p-6 sm:p-8">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Ready to talk?
          </h2>
          <p className="mt-3 text-lux-ink-muted">
            If this article resonated, Christopher and the New Aviv team are here
            to help you take a next step toward hope and healing.
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
