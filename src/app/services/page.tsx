import type { Metadata } from "next";
import { Heart, Sparkles, User, Users, Video } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Lux Therapy services including individual therapy, couples counseling, family therapy, group workshops, and telehealth options in Oregon.",
};

const icons = {
  user: User,
  heart: Heart,
  users: Users,
  sparkles: Sparkles,
  video: Video,
} as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Clinical care shaped around how you live and heal"
        description="From one-on-one therapy to couples, family, and group support—choose the format that meets you where you are, in person or by secure video."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = icons[service.icon];
            return (
              <article
                key={service.id}
                className="flex flex-col rounded-lg border border-lux-border bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-8"
              >
                <Icon className="text-lux-sage" size={28} strokeWidth={1.5} />
                <h2 className="mt-4 font-display text-2xl text-lux-moss-deep">
                  {service.title}
                </h2>
                <p className="mt-3 leading-relaxed text-lux-ink-muted">
                  {service.summary}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-lux-ink-muted">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lux-sage" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <ButtonLink href="/contact" variant="ghost" className="px-0">
                    Interested in this service? Reach out today.
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
