import Image from "next/image";
import { HummingbirdMark } from "@/components/HummingbirdMark";
import { SoftBackdrop } from "@/components/SoftBackdrop";

type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  /** Soft faded hero background - unique per page */
  backdropImage: string;
  backdropAlt?: string;
};

export function PageHero({
  title,
  description,
  eyebrow,
  backdropImage,
  backdropAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-lux-border/80 bg-lux-paper">
      <Image
        src={backdropImage}
        alt={backdropAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(250,248,241,0.9)] via-[rgba(250,248,241,0.78)] to-[rgba(250,248,241,0.95)]" />
      <SoftBackdrop />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {eyebrow && (
          <p className="animate-fade-up inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-lux-ink-muted">
            <HummingbirdMark className="h-4 w-5 text-lux-accent" />
            {eyebrow}
          </p>
        )}
        <h1 className="animate-fade-up-delay mt-3 max-w-3xl font-display text-4xl leading-tight text-lux-moss-deep sm:text-5xl">
          {title}
        </h1>
        <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-lg leading-relaxed text-lux-ink-muted">
          {description}
        </p>
      </div>
    </section>
  );
}
