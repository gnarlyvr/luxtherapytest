import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
import { practiceInfo } from "@/data/site";
import { getActiveSocialLinks } from "@/lib/site-settings";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact New Aviv at (857) 284-8639 to schedule a consultation. Primarily virtual care, with in-person appointments at 240 Elm St, Somerville, Massachusetts.",
};

export default async function ContactPage() {
  const socialLinks = await getActiveSocialLinks();

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Take the next step toward hope"
        description="Share a little about what you’re looking for and our team will follow up to discuss next steps or a brief consultation."
        backdropImage="https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1800&q=70"
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 rounded-lg border border-lux-warning/40 bg-lux-warning-bg px-5 py-4 text-sm leading-relaxed text-lux-warning">
          <strong>Important:</strong> This form is not for urgent or crisis
          communication. If you are in danger or experiencing a mental health
          emergency, call or text <strong>988</strong>, or dial{" "}
          <strong>911</strong>.
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
              </ul>
              <p className="mt-5 text-sm text-lux-ink-muted">
                {practiceInfo.telehealthNote}
              </p>
              {socialLinks.length > 0 ? (
                <div className="mt-6">
                  <p className="text-sm font-semibold text-lux-moss-deep">
                    Follow us
                  </p>
                  <SocialLinks
                    links={socialLinks}
                    className="mt-3"
                    variant="light"
                  />
                </div>
              ) : null}
            </div>

            <div className="overflow-hidden rounded-lg border border-lux-border bg-lux-mist/40 p-8">
              <p className="font-semibold text-lux-moss-deep">How we meet</p>
              <p className="mt-2 text-sm text-lux-ink-muted">
                {practiceInfo.virtualPrimaryNote}
              </p>
              <p className="mt-4 text-sm text-lux-ink-muted">
                Office: {practiceInfo.address.line1}, {practiceInfo.address.line2}
              </p>
              <p className="mt-4 text-sm text-lux-ink-muted">
                Prefer to call? Reach us at{" "}
                <a
                  href={`tel:${practiceInfo.phone.replace(/\D/g, "")}`}
                  className="font-semibold text-lux-moss underline-offset-2 hover:underline"
                >
                  {practiceInfo.phone}
                </a>
                .
              </p>
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
