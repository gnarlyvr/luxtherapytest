import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn the origin story, mission, and core values behind Lux Therapy—an inclusive, client-centered group practice in Portland, Oregon.",
};

const values = [
  {
    title: "Inclusivity",
    text: "We welcome clients of all identities, backgrounds, and family structures. Affirming care is a practice, not a slogan.",
  },
  {
    title: "Evidence-based care",
    text: "Our clinicians draw from proven modalities—CBT, ACT, EFT, EMDR, and more—matched thoughtfully to your needs.",
  },
  {
    title: "Client-centered approach",
    text: "You are the expert on your life. We collaborate with you, honor your pace, and measure success by what matters to you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Lux Therapy"
        title="Built on the belief that healing deserves light and steadiness"
        description="Lux Therapy began as a small circle of clinicians who wanted a practice that felt as human as the work itself—warm rooms, clear communication, and care without hierarchy."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
        <div className="prose-lux text-lg leading-relaxed text-lux-ink-muted">
          <p>
            Our founding clinicians saw too many people waiting months for help,
            or bouncing between providers who never quite fit. Lux Therapy was
            created to offer something different: a group practice with enough
            specialization to match complex needs, and enough heart to make the
            first conversation feel safe.
          </p>
          <p>
            Today we serve individuals, couples, and families across Portland
            and Oregon through in-person and telehealth care. Whether you are
            navigating anxiety, trauma, relationship strain, or a quiet sense
            that something needs to change—we are here to walk with you.
          </p>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg sm:aspect-[5/4]">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            alt="Bright, welcoming therapy office with natural light"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="border-y border-lux-border bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-3xl text-lux-moss-deep sm:text-4xl">
            Our mission
          </h2>
          <p className="mt-5 max-w-3xl text-xl leading-relaxed text-lux-ink-muted">
            To provide accessible, culturally responsive mental health care that
            helps people feel rooted, connected, and capable of growth—at every
            stage of life.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-display text-3xl text-lux-moss-deep sm:text-4xl">
          Core values
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
          <ButtonLink href="/contact">Connect with our team</ButtonLink>
        </div>
      </section>
    </>
  );
}
