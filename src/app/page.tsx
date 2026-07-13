import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";

export default function HomePage() {
  return (
    <>
      <section className="hero-plane relative min-h-[min(92vh,820px)] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(238,244,241,0.18),transparent_40%)]" />
        <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24">
          <p className="animate-leaf font-display text-4xl tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Lux Therapy
          </p>
          <h1 className="animate-fade-up mt-6 max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            A calmer path toward healing and growth
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            Empathetic, evidence-based care for individuals, couples, and
            families—offline and online across Oregon.
          </p>
          <div className="animate-fade-up-delay-2 mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" className="bg-white text-lux-moss-deep hover:bg-lux-foam">
              Schedule a Consultation
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <h2 className="font-display text-3xl text-lux-moss-deep sm:text-4xl">
            Why clients choose Lux Therapy
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-lux-ink-muted">
            We pair specialized clinical care with a collaborative team approach—
            so you always have a thoughtful match, clear communication, and a
            practice that treats dignity as non-negotiable.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              icon: HeartHandshake,
              title: "Client-centered care",
              text: "Your goals set the pace. We listen first, then build a plan that feels workable in real life.",
            },
            {
              icon: Users,
              title: "Collaborative team",
              text: "Clinicians consult with one another so complex needs get thoughtful, multi-lens support.",
            },
            {
              icon: Leaf,
              title: "Inclusive & grounded",
              text: "Affirming care for diverse identities, families, and lived experiences—without jargon or judgment.",
            },
          ].map((item) => (
            <div key={item.title} className="animate-soft-rise">
              <item.icon className="text-lux-sage" size={28} strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-2xl text-lux-moss-deep">{item.title}</h3>
              <p className="mt-3 text-lux-ink-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-lux-border bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
          <Link
            href="/therapists"
            className="group relative min-h-[320px] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-lux-moss"
          >
            <Image
              src="https://images.unsplash.com/photo-1573497019940-1cfe749850f0?auto=format&fit=crop&w=1400&q=80"
              alt="Therapist listening attentively in a calm office"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lux-ink/80 via-lux-ink/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lux-mist">
                Meet our Therapists
              </p>
              <p className="mt-2 max-w-md font-display text-3xl">
                Find a clinician who feels like the right fit
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                View clinicians <ArrowRight size={16} />
              </span>
            </div>
          </Link>

          <Link
            href="/services"
            className="group relative min-h-[320px] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-lux-moss"
          >
            <Image
              src="https://images.unsplash.com/photo-1499209974431-9edd3acfe10b?auto=format&fit=crop&w=1400&q=80"
              alt="Soft morning light through trees suggesting calm and growth"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lux-moss-deep/85 via-lux-moss-deep/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-lux-mist">
                Our Services
              </p>
              <p className="mt-2 max-w-md font-display text-3xl">
                Individual, couples, family, and group support
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                Explore offerings <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-lux-moss-deep sm:text-4xl">
            Ready when you are
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-lux-ink-muted">
            Taking the first step can feel heavy. We make reaching out simple,
            confidential, and free of pressure.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Get Started</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
