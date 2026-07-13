import type { Metadata } from "next";
import { BookOpen, Download, Phone } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Mental health resources from Lux Therapy—including crisis hotlines, recommended reading, intake form downloads, and newsletter insights.",
};

const readings = [
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    note: "A foundational look at trauma and pathways to recovery.",
  },
  {
    title: "Attached",
    author: "Amir Levine & Rachel Heller",
    note: "Accessible guidance on attachment styles in relationships.",
  },
  {
    title: "Self-Compassion",
    author: "Kristin Neff",
    note: "Practical tools for relating to yourself with more kindness.",
  },
  {
    title: "Hold Me Tight",
    author: "Sue Johnson",
    note: "Emotionally focused insights for couples seeking connection.",
  },
];

const hotlines = [
  { name: "988 Suicide & Crisis Lifeline", detail: "Call or text 988 (24/7)" },
  { name: "Crisis Text Line", detail: "Text HOME to 741741" },
  {
    name: "Trevor Project (LGBTQ+ youth)",
    detail: "1-866-488-7386 or text START to 678678",
  },
  {
    name: "National Domestic Violence Hotline",
    detail: "1-800-799-7233",
  },
];

const articles = [
  {
    title: "How to know when it's time to start therapy",
    excerpt:
      "A gentle guide to recognizing readiness—and what the first few sessions often look like.",
    status: "Coming soon",
  },
  {
    title: "Telehealth tips for a more grounded session",
    excerpt:
      "Small environment shifts that help remote therapy feel private, focused, and effective.",
    status: "Coming soon",
  },
  {
    title: "Supporting a partner who's struggling",
    excerpt:
      "Ways to show up with care without taking on the role of therapist yourself.",
    status: "Coming soon",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Support you can use today—and insights for the road ahead"
        description="Psychoeducational materials, crisis contacts, and intake downloads to help you take the next step with clarity."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 text-lux-sage">
              <BookOpen size={22} />
              <h2 className="font-display text-3xl text-lux-moss-deep">
                Recommended reading
              </h2>
            </div>
            <ul className="mt-8 space-y-6">
              {readings.map((book) => (
                <li key={book.title} className="border-b border-lux-border pb-6">
                  <p className="font-semibold text-lux-ink">{book.title}</p>
                  <p className="text-sm text-lux-sage">{book.author}</p>
                  <p className="mt-2 text-sm text-lux-ink-muted">{book.note}</p>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <div className="rounded-lg border border-lux-warning/30 bg-lux-warning-bg p-6">
              <div className="flex items-center gap-2 text-lux-warning">
                <Phone size={20} />
                <h2 className="font-semibold">Crisis hotlines</h2>
              </div>
              <ul className="mt-4 space-y-4 text-sm">
                {hotlines.map((line) => (
                  <li key={line.name}>
                    <p className="font-semibold text-lux-ink">{line.name}</p>
                    <p className="text-lux-ink-muted">{line.detail}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-lux-border bg-white p-6">
              <div className="flex items-center gap-2 text-lux-sage">
                <Download size={20} />
                <h2 className="font-semibold text-lux-ink">Intake forms</h2>
              </div>
              <p className="mt-3 text-sm text-lux-ink-muted">
                Download placeholders for new-client paperwork. Your clinician
                will confirm which forms apply after scheduling.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="font-medium text-lux-moss underline-offset-2 hover:underline"
                  >
                    Adult Intake Packet (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-lux-moss underline-offset-2 hover:underline"
                  >
                    Telehealth Consent (PDF)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="font-medium text-lux-moss underline-offset-2 hover:underline"
                  >
                    Release of Information (PDF)
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-lux-border bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-lux-moss-deep">
            Insights &amp; articles
          </h2>
          <p className="mt-3 max-w-2xl text-lux-ink-muted">
            A placeholder for our growing library of psychoeducational posts.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="rounded-lg border border-lux-border bg-lux-paper p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-lux-sage">
                  {article.status}
                </p>
                <h3 className="mt-2 font-display text-xl text-lux-moss-deep">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-lux-ink-muted">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-lux-moss-deep">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Get mental health insights delivered to your inbox
          </h2>
          <p className="mt-4 max-w-xl text-lux-mist">
            Occasional notes on coping skills, relationships, and navigating
            care—never spam, always opt-out friendly.
          </p>
          <div className="mt-8">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
