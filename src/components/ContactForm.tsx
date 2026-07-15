"use client";

import { FormEvent, useState } from "react";

const careTypes = [
  "Individual Therapy",
  "Couples Therapy and Marriage Counseling",
  "Family Counseling",
  "Teen Counseling",
  "Group Counseling",
  "Not sure yet",
];

const appointmentFormats = [
  "Virtual (preferred)",
  "In-person at Massachusetts office",
  "No preference / not sure",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="rounded-lg border border-lux-border bg-lux-foam p-8 text-center"
        role="status"
      >
        <h3 className="font-display text-2xl text-lux-moss-deep">Thank you</h3>
        <p className="mt-3 text-lux-ink-muted">
          We received your message and will respond within 1-2 business days.
          If this is urgent, please call our office or use the crisis resources
          listed on this page.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-lg border border-lux-border bg-white p-6 shadow-sm sm:p-8"
      noValidate={false}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-lux-ink">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-lux-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-lux-ink">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-lux-ink">
          Preferred method of contact
        </legend>
        <div className="mt-3 flex flex-wrap gap-4">
          {["Email", "Phone"].map((method) => (
            <label key={method} className="inline-flex items-center gap-2 text-sm text-lux-ink">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                defaultChecked={method === "Email"}
                className="accent-lux-moss"
                required
              />
              {method}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="service" className="block text-sm font-semibold text-lux-ink">
          Preferred service
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        >
          <option value="" disabled>
            Select a service
          </option>
          {careTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="format" className="block text-sm font-semibold text-lux-ink">
          Preferred appointment format
        </label>
        <select
          id="format"
          name="format"
          required
          defaultValue="Virtual (preferred)"
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        >
          {appointmentFormats.map((format) => (
            <option key={format} value={format}>
              {format}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-lux-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-md border border-lux-border bg-lux-paper px-3 py-2.5 text-lux-ink outline-none transition focus:border-lux-sage focus:ring-2 focus:ring-lux-mist"
        />
      </div>

      <p className="text-xs leading-relaxed text-lux-ink-muted">
        By submitting, you agree that New Aviv may contact you about scheduling.
        This form is not encrypted for clinical documentation and should not include
        sensitive medical details beyond what you are comfortable sharing. See our
        privacy practices for how we handle inquiry information.
      </p>

      <button
        type="submit"
        className="w-full rounded-md bg-lux-accent px-5 py-3 text-sm font-semibold text-lux-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-lux-accent-hover hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lux-moss sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
