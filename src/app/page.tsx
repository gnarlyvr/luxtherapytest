import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Leaf, Users } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { HummingbirdMark } from "@/components/HummingbirdMark";
import { Logo } from "@/components/Logo";
import { SoftBackdrop } from "@/components/SoftBackdrop";
import { practiceInfo } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="hero-plane relative min-h-[min(92vh,820px)] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(250,248,241,0.16),transparent_42%)]" />
        <HummingbirdMark className="animate-hum pointer-events-none absolute right-[6%] top-[18%] h-24 w-32 text-white/25 sm:h-32 sm:w-40 lg:h-40 lg:w-52" />
        <div className="relative mx-auto flex min-h-[min(92vh,820px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:justify-center lg:px-8 lg:pb-24">
          <div className="animate-leaf">
            <Logo
              variant="light"
              className="h-16 sm:h-20"
              width={280}
              height={84}
              priority
            />
          </div>
          <h1 className="animate-fade-up mt-6 max-w-2xl font-display text-3xl leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            Hope. Care. Healing.
          </h1>
          <p className="animate-fade-up-delay mt-5 max-w-xl text-lg leading-relaxed text-white/90">
            Compassionate counseling for young adults, couples, and families—
            primarily virtual, with in-person sessions available at our Somerville,
            Massachusetts office.
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

      <section className="relative overflow-hidden">
        <SoftBackdrop showBird birdClassName="-left-6 bottom-4 h-36 w-44 rotate-[-12deg]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <blockquote className="max-w-xl border-l-4 border-lux-sage pl-6">
            <p className="font-display text-2xl text-lux-moss-deep sm:text-3xl">
              “{practiceInfo.quote}”
            </p>
            <footer className="mt-3 text-sm font-medium text-lux-ink-muted">
              — {practiceInfo.quoteAttribution}
            </footer>
          </blockquote>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80"
              alt="A hummingbird hovering near soft blossoms"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lux-ink/25 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <SoftBackdrop />
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl text-lux-moss-deep sm:text-4xl">
              What is New Aviv?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-lux-ink-muted">
              At New Aviv we collaborate with you to identify your goals in a safe,
              comfortable space. We are compassionate and accepting of the challenges
              you may be facing and will tailor counseling sessions to best suit your
              needs. Together, we will develop hope.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                icon: HeartHandshake,
                title: "Hope",
                text: "Whether you’re addressing difficult emotions or specific challenges, we’re committed to helping you move toward the life you want.",
              },
              {
                icon: Users,
                title: "Care",
                text: "Our clinicians specialize in individual, family, couples, and marriage counseling—meeting you with empathy and collaboration.",
              },
              {
                icon: Leaf,
                title: "Healing",
                text: "Virtual appointments make care easier to fit into daily life, with optional in-person sessions at our Massachusetts office.",
              },
            ].map((item) => (
              <div key={item.title} className="animate-soft-rise">
                <item.icon className="text-lux-accent" size={28} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-2xl text-lux-moss-deep">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-lux-ink-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-lux-border bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
          <Link
            href="/therapists"
            className="group relative min-h-[320px] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-lux-moss"
          >
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1400&q=80"
              alt="Soft calm space suggesting rest and reflection"
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
                Over 20 years of combined experience, ready to meet you where you are
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
              src="https://images.unsplash.com/photo-1465146633011-14f8e0781093?auto=format&fit=crop&w=1400&q=80"
              alt="Soft wildflowers in warm morning light"
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
                Individual, couples, family, teen, and group counseling
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold transition-transform duration-200 group-hover:translate-x-1">
                Explore offerings <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="calm-band relative overflow-hidden">
        <SoftBackdrop showBird birdClassName="right-8 top-10 h-28 w-36" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-lux-ink-muted">
              <HummingbirdMark className="h-4 w-5 text-lux-accent" />
              Begin gently
            </p>
            <h2 className="mt-3 font-display text-3xl text-lux-moss-deep sm:text-4xl">
              Ready when you are
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-lux-ink-muted">
              Reach out for a brief consultation so we can discuss whether we can
              address your goals and expectations.
            </p>
          </div>
          <ButtonLink href="/contact">Get Started</ButtonLink>
        </div>
      </section>
    </>
  );
}
