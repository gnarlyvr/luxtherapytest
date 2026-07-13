import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { practiceInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about New Aviv—hope, care, and healing for young adults, couples, and families, primarily through virtual care, with in-person sessions at our Somerville office.",
};

const values = [
  {
    title: "Hope",
    text: "Imagining life with hope and happiness can be challenging, but it is possible. We walk with you toward the goals that matter.",
  },
  {
    title: "Care",
    text: "We approach relationships with a positive, caring, and growth mindset—tailoring sessions so you feel accepted and supported.",
  },
  {
    title: "Healing",
    text: "Most care is virtual, with in-person options at our Massachusetts office—so you can heal in a format that feels safe and workable.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About New Aviv"
        title="What is New Aviv?"
        description="Hope. Care. Healing. We collaborate with you to identify your goals in a safe, comfortable space."
        backdropImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="relative mx-auto grid max-w-6xl gap-12 overflow-hidden px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="prose-lux text-lg leading-relaxed text-lux-ink-muted">
          <p>
            Most appointments are virtual. In-person sessions are available at
            our office in Somerville, Massachusetts. Our clinicians also
            specialize in family, couples, and marriage counseling.
          </p>
          <p>
            We are compassionate and accepting of the challenges that you may be
            facing and will tailor counseling sessions to best suit your needs.
            Together, we will develop hope. Whether you’re looking to address
            difficult emotions or specific challenges, we’re committed to helping
            you achieve your goals.
          </p>
          <blockquote className="mt-8 border-l-4 border-lux-sage pl-5 font-display text-xl text-lux-moss-deep">
            “{practiceInfo.quote}”
            <footer className="mt-2 font-sans text-sm font-medium text-lux-ink-muted">
              — {practiceInfo.quoteAttribution}
            </footer>
          </blockquote>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm sm:aspect-[5/4]">
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
            alt="Warm, inviting room with soft natural light and calm furnishings"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="border-y border-lux-border bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl text-lux-moss-deep sm:text-4xl">
            Our pillars
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title}>
                <h3 className="font-display text-2xl text-lux-moss">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-lux-ink-muted">{value.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/services">Learn About Our Services</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
