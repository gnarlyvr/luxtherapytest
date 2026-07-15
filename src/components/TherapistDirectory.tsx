"use client";

import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";
import { CmsImage } from "@/components/CmsImage";
import type { Therapist } from "@/lib/therapist-shared";

type FormatFilter = "All" | "In-person" | "Virtual";

type TherapistDirectoryProps = {
  therapists: Therapist[];
  specialties: string[];
};

function TherapistCard({ therapist }: { therapist: Therapist }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="animate-soft-rise overflow-hidden rounded-lg border border-lux-border bg-white">
      <div className="aspect-[4/3] overflow-hidden bg-lux-mist">
        {therapist.image ? (
          <CmsImage
            src={therapist.image}
            alt={`Portrait of ${therapist.name}`}
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      <div className="p-6">
        <h2 className="font-display text-2xl text-lux-moss-deep">
          {therapist.name}
          {therapist.credentials ? `, ${therapist.credentials}` : ""}
        </h2>
        <p className="mt-1 text-sm font-medium text-lux-ink-muted">
          {therapist.role}
        </p>

        {!expanded ? (
          <p className="mt-4 text-sm leading-relaxed text-lux-ink-muted">
            {therapist.statement}
          </p>
        ) : (
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-lux-ink-muted">
            {therapist.bio.map((paragraph, index) => (
              <p key={`${therapist.id}-bio-${index}`}>{paragraph}</p>
            ))}
          </div>
        )}

        <button
          type="button"
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-lux-moss transition-colors hover:text-lux-moss-deep"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read full bio"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          />
        </button>

        <div className="mt-4 flex flex-wrap gap-2">
          {therapist.specializations.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-lux-foam px-2.5 py-1 text-xs font-medium text-lux-moss-deep"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function TherapistDirectory({
  therapists,
  specialties,
}: TherapistDirectoryProps) {
  const [specialty, setSpecialty] = useState("All");
  const [format, setFormat] = useState<FormatFilter>("All");

  const filtered = useMemo(() => {
    return therapists.filter((therapist) => {
      const specialtyMatch =
        specialty === "All" || therapist.specializations.includes(specialty);
      const formatMatch =
        format === "All" || therapist.formats.includes(format);
      return specialtyMatch && formatMatch;
    });
  }, [therapists, specialty, format]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-lg border border-lux-border bg-white p-4 sm:flex-row sm:items-end sm:p-5">
        <div className="flex-1">
          <label htmlFor="specialty" className="block text-sm font-semibold text-lux-ink">
            Specialty
          </label>
          <select
            id="specialty"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
          >
            <option value="All">All specialties</option>
            {specialties.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="format" className="block text-sm font-semibold text-lux-ink">
            Format
          </label>
          <select
            id="format"
            value={format}
            onChange={(e) => setFormat(e.target.value as FormatFilter)}
            className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
          >
            <option value="All">Virtual &amp; In-person (MA)</option>
            <option value="Virtual">Virtual</option>
            <option value="In-person">In-person (MA office)</option>
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-lux-ink-muted" aria-live="polite">
        Showing {filtered.length} clinician{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {filtered.map((therapist) => (
          <TherapistCard key={therapist.id} therapist={therapist} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 rounded-lg border border-dashed border-lux-border bg-lux-foam/50 p-8 text-center text-lux-ink-muted">
          No clinicians match those filters. Try another specialty or format - or{" "}
          <a href="/contact" className="font-semibold text-lux-moss underline-offset-2 hover:underline">
            reach out
          </a>{" "}
          and we&apos;ll help you find a fit.
        </p>
      )}
    </div>
  );
}
