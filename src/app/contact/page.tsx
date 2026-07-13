import type { Metadata } from "next";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { practiceInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Lux Therapy to schedule a consultation. Find our Portland address, phone, email, FAQ, and secure inquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's begin with a conversation"
        description="Share a little about what you're looking for and our team will follow up within 1–2 business days to discuss next steps."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 rounded-lg border border-lux-warning/40 bg-lux-warning-bg px-5 py-4 text-sm leading-relaxed text-lux-warning">
          <strong>Important:</strong> This form is not for urgent or crisis
          communication and is not monitored 24/7. If you are in danger or
          experiencing a mental health emergency, call or text{" "}
          <strong>988</strong>, or dial <strong>911</strong>.
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl text-lux-moss-deep">
                Practice details
              </h2>
              <ul className="mt-5 space-y-4 text-lux-ink-muted">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 shrink-0 text-lux-sage" size={20} />
                  <span>
                    {practiceInfo.address.line1}
                    <br />
                    {practiceInfo.address.line2}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 shrink-0 text-lux-sage" size={20} />
                  <a
                    href={`tel:${practiceInfo.phone.replace(/\D/g, "")}`}
                    className="transition-colors hover:text-lux-moss"
                  >
                    {practiceInfo.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 shrink-0 text-lux-sage" size={20} />
                  <a
                    href={`mailto:${practiceInfo.email}`}
                    className="transition-colors hover:text-lux-moss"
                  >
                    {practiceInfo.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Printer className="mt-0.5 shrink-0 text-lux-sage" size={20} />
                  <span>Fax: {practiceInfo.fax}</span>
                </li>
              </ul>
              <p className="mt-5 text-sm text-lux-ink-muted">
                {practiceInfo.telehealthNote}
              </p>
            </div>

            <div className="overflow-hidden rounded-lg border border-lux-border bg-lux-mist">
              <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 px-6 text-center">
                <MapPin className="text-lux-moss" size={28} />
                <p className="font-semibold text-lux-moss-deep">Map placeholder</p>
                <p className="max-w-sm text-sm text-lux-ink-muted">
                  Google Maps embed can be added here with your final address.
                  Visitors can also use the street address above for directions.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <section className="border-t border-lux-border bg-white/70">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-lux-moss-deep">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-lux-ink-muted">
            A few answers that often help before you reach out.
          </p>
          <div className="mt-8">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
