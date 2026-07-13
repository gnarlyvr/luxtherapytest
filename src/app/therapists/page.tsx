import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { TherapistDirectory } from "@/components/TherapistDirectory";

export const metadata: Metadata = {
  title: "Meet our Therapists",
  description:
    "Meet the Lux Therapy clinicians. Filter by specialty or in-person vs. virtual care to find the right therapeutic match.",
};

export default function TherapistsPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet our Therapists"
        title="Thoughtful clinicians. Real human connection."
        description="Every therapist at Lux brings specialized training and a warm presence. Use the filters below to explore specialties and session formats."
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
