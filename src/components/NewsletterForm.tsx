"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }

  if (done) {
    return (
      <p className="text-sm font-medium text-lux-foam" role="status">
        You&apos;re on the list. Look for calm, practical insights in your inbox soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
      aria-label="Newsletter signup"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-3 text-white placeholder:text-lux-mist outline-none transition focus:border-white/50 focus:ring-2 focus:ring-white/20 sm:max-w-sm"
      />
      <button
        type="submit"
        className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-lux-moss-deep transition-all duration-200 hover:-translate-y-0.5 hover:bg-lux-foam"
      >
        Subscribe
      </button>
    </form>
  );
}
