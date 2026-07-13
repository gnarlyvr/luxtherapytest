import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CareersForm } from "@/components/CareersForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Employment",
  description:
    "Join the Lux Therapy team. Learn about our group practice culture, clinician benefits, and current openings for licensed therapists.",
};

const benefits = [
  "Supportive clinical consultation and peer community",
  "Flexible scheduling with hybrid and telehealth options",
  "Competitive compensation and streamlined administrative support",
  "Marketing and referral systems that help you build a caseload",
  "A values-driven culture centered on inclusivity and work-life balance",
];

const openings = [
  {
    title: "Licensed Therapist (LCSW, LMFT, LPC, or PsyD)",
    type: "Full-time or part-time · Portland / Hybrid",
    summary:
      "Seeking clinicians with strong clinical foundations and a collaborative spirit. Specialties in trauma, couples, or perinatal mental health are especially welcome.",
  },
  {
    title: "Associate / Pre-licensed Clinician",
    type: "Part-time · Supervised practice",
    summary:
      "Grow under supportive supervision while serving a diverse caseload. Ideal for associates seeking meaningful hours and mentorship in a group setting.",
  },
];

export default function EmploymentPage() {
  return (
    <>
      <PageHero
        eyebrow="Employment"
        title="Grow with a practice that protects the work—and the worker"
        description="Lux Therapy is expanding thoughtfully. We look for licensed clinicians who value excellence, humility, and the quiet courage it takes to sit with people in hard seasons."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl text-lux-moss-deep">
              Practice culture
            </h2>
            <p className="mt-4 leading-relaxed text-lux-ink-muted">
              We believe clinicians do their best work when they feel respected,
              resourced, and not alone. Our group practice blends autonomy with
              connection—space to practice in your authentic style, plus a team
              ready to consult when cases are complex.
            </p>
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-lux-ink-muted">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-lux-sage"
                    size={20}
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <CareersForm />
        </div>
      </section>

      <section className="border-t border-lux-border bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-lux-moss-deep">
            Current openings
          </h2>
          <div className="mt-8 space-y-6">
            {openings.map((job) => (
              <article
                key={job.title}
                className="rounded-lg border border-lux-border bg-lux-paper p-6"
              >
                <h3 className="font-display text-2xl text-lux-moss-deep">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-lux-sage">{job.type}</p>
                <p className="mt-3 leading-relaxed text-lux-ink-muted">
                  {job.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
