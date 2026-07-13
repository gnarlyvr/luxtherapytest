import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { TherapistDirectory } from "@/components/TherapistDirectory";

export const metadata: Metadata = {
  title: "Meet our Therapists",
  description:
    "Meet the New Aviv clinicians. With over 20 years of combined experience, our therapists are ready to address challenges the way you want to address them.",
};

export default function TherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our Therapists"
        title="Thoughtful clinicians. Real human connection."
        description="With over 20 years of combined experience, our therapists are ready to address challenges the way you want to address them. Most sessions are virtual; in-person care is available at our Massachusetts office."
        backdropImage="https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <TherapistDirectory />
        <div className="mt-14 rounded-lg bg-lux-foam px-6 py-8 sm:px-8">
          <h2 className="font-display text-2xl text-lux-moss-deep">
            Not sure who to choose?
          </h2>
          <p className="mt-3 max-w-2xl text-lux-ink-muted">
            Tell us a little about what you&apos;re looking for and we&apos;ll
            help match you with a clinician—or recommend next steps if we
            aren&apos;t the right fit.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact">Help me find a match</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
