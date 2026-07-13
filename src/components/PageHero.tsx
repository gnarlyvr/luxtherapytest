type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
};

export function PageHero({ title, description, eyebrow }: PageHeroProps) {
  return (
    <section className="border-b border-lux-border/80 bg-gradient-to-br from-lux-foam via-lux-paper to-lux-sky/40">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {eyebrow && (
          <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.16em] text-lux-sage">
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
