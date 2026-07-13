"use client";

import { FormEvent, useState } from "react";
import { practiceInfo } from "@/data/site";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-lux-border bg-lux-foam p-6" role="status">
        <p className="font-semibold text-lux-moss-deep">Application received</p>
        <p className="mt-2 text-sm text-lux-ink-muted">
          Thank you for your interest. Our clinical leadership will review your
          materials and follow up if there&apos;s a potential fit.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-lg border border-lux-border bg-white p-6 shadow-sm"
    >
      <div>
        <label htmlFor="clinician-name" className="block text-sm font-semibold text-lux-ink">
          Full name
        </label>
        <input
          id="clinician-name"
          name="name"
          required
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
      </div>
      <div>
        <label htmlFor="clinician-email" className="block text-sm font-semibold text-lux-ink">
          Email
        </label>
        <input
          id="clinician-email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
      </div>
      <div>
        <label htmlFor="license" className="block text-sm font-semibold text-lux-ink">
          License / credential
        </label>
        <input
          id="license"
          name="license"
          required
          placeholder="e.g., LCSW, LMFT, PsyD"
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
      </div>
      <div>
        <label htmlFor="resume" className="block text-sm font-semibold text-lux-ink">
          Resume / CV
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          required
          className="mt-2 block w-full text-sm text-lux-ink-muted file:mr-4 file:rounded-md file:border-0 file:bg-lux-foam file:px-4 file:py-2 file:text-sm file:font-semibold file:text-lux-moss-deep hover:file:bg-lux-mist"
        />
      </div>
      <div>
        <label htmlFor="note" className="block text-sm font-semibold text-lux-ink">
          Brief introduction
        </label>
        <textarea
          id="note"
          name="note"
          rows={4}
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
      </div>
      <p className="text-xs text-lux-ink-muted">
        Prefer email? Send materials to{" "}
        <a
          href={`mailto:${practiceInfo.careersEmail}`}
          className="font-semibold text-lux-moss underline-offset-2 hover:underline"
        >
          {practiceInfo.careersEmail}
        </a>
        .
      </p>
      <button
        type="submit"
        className="rounded-md bg-lux-accent px-5 py-3 text-sm font-semibold text-lux-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-lux-accent-hover hover:shadow-md"
      >
        Submit application
      </button>
    </form>
  );
}
