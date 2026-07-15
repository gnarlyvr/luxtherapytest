import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";
import { blogPosts, formatPostDate } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog & Newsletter",
  description:
    "Articles and mental health insights from the New Aviv team - plus a newsletter for calm, practical guidance delivered to your inbox.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog & Newsletter"
        title="Insights for hope, care, and healing"
        description="Practical reflections from our clinicians - plus a newsletter for mental health insights delivered to your inbox."
        backdropImage="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-lux-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/9] bg-lux-foam">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-lux-ink-muted">
                    {formatPostDate(post.date)} · {post.author},{" "}
                    {post.authorCredentials}
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
      </section>

      <section className="bg-lux-moss-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Get mental health insights in your inbox
          </h2>
          <p className="mt-4 max-w-xl text-lux-mist">
            Occasional notes on coping, relationships, and finding hope - never spam,
            always easy to unsubscribe.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
