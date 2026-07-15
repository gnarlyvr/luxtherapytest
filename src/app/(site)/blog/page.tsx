import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CmsImage } from "@/components/CmsImage";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";
import { formatPostDate, getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog & Newsletter",
  description:
    "Articles and mental health insights from the New Aviv team - plus a newsletter for calm, practical guidance delivered to your inbox.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog & Newsletter"
        title="Insights for hope, care, and healing"
        description="Practical reflections from our clinicians - plus a newsletter for mental health insights delivered to your inbox."
        backdropImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {posts.length === 0 ? (
          <p className="text-lux-ink-muted">
            New articles will appear here once they are published.
          </p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden rounded-2xl border border-lux-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  <div className="aspect-[16/9] overflow-hidden bg-lux-foam">
                    {post.image ? (
                      <CmsImage
                        src={post.image}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : null}
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-wide text-lux-ink-muted">
                      {formatPostDate(post.publishedAt)} · {post.author}
                      {post.authorCredentials
                        ? `, ${post.authorCredentials}`
                        : ""}
                    </p>
                    <h2 className="mt-3 font-display text-2xl text-lux-moss-deep transition-colors group-hover:text-lux-accent">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-lux-ink-muted">
                      {post.excerpt}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lux-moss">
                      Read article <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="bg-lux-moss-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Get mental health insights in your inbox
          </h2>
          <p className="mt-4 max-w-xl text-lux-mist">
            Occasional notes on coping, relationships, and finding hope - never
            spam, always easy to unsubscribe.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
