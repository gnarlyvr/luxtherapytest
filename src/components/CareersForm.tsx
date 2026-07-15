"use client";

import { FormEvent, useState } from "react";
import { practiceInfo } from "@/data/site";
import {
  getEmploymentFormspreeEndpoint,
  submitToFormspree,
} from "@/lib/formspree";

export function CareersForm() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("_subject", "New Aviv – Employment application");

    try {
      const endpoint = getEmploymentFormspreeEndpoint();
      const result = await submitToFormspree(endpoint, formData);
      if (!result.ok) {
        setError(result.message);
        setPending(false);
        return;
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send right now.");
      setPending(false);
    }
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
      encType="multipart/form-data"
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
          Resume / CV link
        </label>
        <input
          id="resume"
          name="resume_link"
          type="url"
          inputMode="url"
          required
          placeholder="https:// (Google Drive, Dropbox, or similar)"
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
        <p className="mt-2 text-xs text-lux-ink-muted">
          Paste a shareable link to your resume. Make sure anyone with the link
          can view it.
        </p>
      </div>
      <div>
        <label htmlFor="note" className="block text-sm font-semibold text-lux-ink">
          Brief introduction
        </label>
        <textarea
          id="note"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
      </div>
      <p className="text-xs text-lux-ink-muted">
        Prefer to attach a file by email instead? Send materials to{" "}
        <a
          href={`mailto:${practiceInfo.careersEmail}`}
          className="font-semibold text-lux-moss underline-offset-2 hover:underline"
        >
          {practiceInfo.careersEmail}
        </a>
        .
      </p>
      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={pending}
        className="rounded-md bg-lux-accent px-5 py-3 text-sm font-semibold text-lux-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-lux-accent-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {pending ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
