import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Crisis and community support resources from New Aviv, including the 988 Suicide & Crisis Lifeline and other national hotlines.",
};

const hotlines = [
  { name: "Suicide & Crisis Lifeline", detail: "Call or text 988" },
  {
    name: "National Domestic Violence Hotline",
    detail: "1-800-799-7233",
  },
  {
    name: "National Hopeline Network",
    detail: "1-800-SUICIDE (800-784-2433)",
  },
  {
    name: "National Sexual Assault Hotline",
    detail: "1-800-656-4673",
  },
  {
    name: "Crisis Text Line",
    detail: 'Text “DESERVE” to 741-741',
  },
  {
    name: "Lifeline Crisis Chat",
    detail: "https://suicidepreventionlifeline.org/chat/",
  },
  {
    name: "Self-Harm Hotline",
    detail: "1-800-DONT CUT (1-800-366-8288)",
  },
  {
    name: "Essential local and community services",
    detail: "211 · https://www.211.org/",
  },
  {
    name: "Planned Parenthood Hotline",
    detail: "1-800-230-PLAN (7526)",
  },
  {
    name: "American Association of Poison Control Centers",
    detail: "1-800-222-1222",
  },
  {
    name: "National Council on Alcoholism & Drug Dependency Hope Line",
    detail: "1-800-622-2255",
  },
  {
    name: "National Crisis Line - Anorexia and Bulimia",
    detail: "1-800-233-4357",
  },
  {
    name: "LGBTQ National Help Center",
    detail: "1-888-843-4564",
  },
  {
    name: "TREVOR Crisis Hotline",
    detail: "1-866-488-7386",
  },
  {
    name: "AIDS Crisis Line",
    detail: "1-800-221-7044",
  },
  {
    name: "Veterans Crisis Line",
    detail: "https://www.veteranscrisisline.net",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Support when you need it most"
        description="If you are experiencing a medical emergency, contact 911 or your local emergency services immediately. Helpful affiliated resources are listed below."
        backdropImage="https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-lux-warning/30 bg-lux-warning-bg p-6 sm:p-8">
          <div className="flex items-center gap-2 text-lux-warning">
            <Phone size={20} />
            <h2 className="font-semibold">Crisis &amp; community resources</h2>
          </div>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {hotlines.map((line) => (
              <li key={line.name}>
                <p className="font-semibold text-lux-ink">{line.name}</p>
                <p className="text-sm text-lux-ink-muted">{line.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
