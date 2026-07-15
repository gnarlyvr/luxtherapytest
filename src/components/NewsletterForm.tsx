"use client";

import { FormEvent, useId, useState } from "react";

type NewsletterFormProps = {
  /** Visual style for dark charcoal bands vs light surfaces */
  variant?: "onDark" | "onLight";
};

export function NewsletterForm({ variant = "onDark" }: NewsletterFormProps) {
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        setError(data?.error || "Unable to subscribe right now.");
        setPending(false);
        return;
      }

      setDone(true);
    } catch {
      setError("Unable to subscribe right now. Please try again.");
      setPending(false);
    }
  }

  if (done) {
    return (
      <p
        className={`text-sm font-medium ${
          variant === "onDark" ? "text-lux-foam" : "text-lux-moss-deep"
        }`}
        role="status"
      >
        You&apos;re on the list. Look for calm, practical insights in your inbox
        soon.
      </p>
    );
  }

  const inputClass =
    variant === "onDark"
      ? "w-full rounded-md border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-lux-mist outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20 sm:max-w-sm"
      : "w-full rounded-md border border-lux-border bg-lux-paper px-3 py-3 text-lux-ink placeholder:text-lux-ink-muted outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist sm:max-w-sm";

  const buttonClass =
    variant === "onDark"
      ? "rounded-md bg-white px-5 py-3 text-sm font-semibold text-lux-moss-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-lux-foam disabled:opacity-60"
      : "rounded-md bg-lux-accent px-5 py-3 text-sm font-semibold text-lux-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-lux-accent-hover disabled:opacity-60";

  const errorClass =
    variant === "onDark" ? "text-sm text-red-200" : "text-sm text-red-700";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3"
      aria-label="Newsletter signup"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          disabled={pending}
          className={inputClass}
        />
        <button type="submit" disabled={pending} className={buttonClass}>
          {pending ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {error ? (
        <p className={errorClass} role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
