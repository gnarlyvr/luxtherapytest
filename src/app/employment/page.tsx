import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CareersForm } from "@/components/CareersForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Employment",
  description:
    "Join the New Aviv team. Open roles for MSW, LCSW, LICSW, LMHC, and PMHNP/FNP clinicians who foster hope from a strengths-based perspective.",
};

const credentials = ["MSW", "LCSW", "LICSW", "LMHC", "PMHNP/FNP"];

export default function EmploymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Employment"
        title="Fostering hope from a strengths-based perspective"
        description="Do you have a passion for helping others and instilling hope? Grow professionally with a team that approaches relationships with care and a growth mindset."
        backdropImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="bg-lux-paper">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <h2 className="font-display text-3xl text-lux-moss-deep">
              Our approach
            </h2>
            <p className="mt-4 leading-relaxed text-lux-ink-muted">
              We develop hope in others by approaching relationships with a
              positive, caring, and growth mindset. A helping hand may be all
              that’s needed to continue a healthy journey.
            </p>

            <div className="mt-10 rounded-2xl border border-lux-border bg-lux-foam p-6 sm:p-8">
              <h3 className="font-display text-2xl text-lux-moss-deep">
                Open roles
              </h3>
              <p className="mt-3 text-lux-ink-muted">
                We currently welcome applications from clinicians with the
                following credentials:
              </p>
              <ul className="mt-6 space-y-3">
                {credentials.map((item) => (
                  <li key={item} className="flex gap-3 text-lux-ink-muted">
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-lux-accent"
                      size={20}
                    />
                    <span className="font-medium text-lux-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <CareersForm />
        </div>
      </section>
    </>
  );
}
