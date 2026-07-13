"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { allSpecialties, therapists } from "@/data/therapists";

type FormatFilter = "All" | "In-person" | "Virtual";

export function TherapistDirectory() {
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
  }, [specialty, format]);

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
            {allSpecialties.map((item) => (
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
            <option value="All">In-person &amp; Virtual</option>
            <option value="In-person">In-person</option>
            <option value="Virtual">Virtual</option>
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-lux-ink-muted" aria-live="polite">
        Showing {filtered.length} clinician{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {filtered.map((therapist) => (
          <article
            key={therapist.id}
            className="animate-soft-rise overflow-hidden rounded-lg border border-lux-border bg-white"
          >
            <div className="relative aspect-[4/3] bg-lux-mist">
              <Image
                src={therapist.image}
                alt={`Portrait of ${therapist.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <h2 className="font-display text-2xl text-lux-moss-deep">
                {therapist.name}, {therapist.credentials}
              </h2>
              <p className="mt-1 text-sm font-medium text-lux-sage">{therapist.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-lux-ink-muted">
                {therapist.statement}
              </p>
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
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-lux-ink-muted">
                {therapist.formats.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 rounded-lg border border-dashed border-lux-border bg-lux-foam/50 p-8 text-center text-lux-ink-muted">
          No clinicians match those filters. Try another specialty or format—or{" "}
          <a href="/contact" className="font-semibold text-lux-moss underline-offset-2 hover:underline">
            reach out
          </a>{" "}
          and we&apos;ll help you find a fit.
        </p>
      )}
    </div>
  );
}
