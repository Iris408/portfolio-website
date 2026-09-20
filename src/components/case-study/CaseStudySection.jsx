export default function CaseStudySection({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="border-b border-[var(--portfolio-line)] py-16 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
        <header>
          {eyebrow && (
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--portfolio-accent)]">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-4 max-w-md font-serif text-3xl leading-tight text-[var(--portfolio-ink)] md:text-4xl">
            {title}
          </h2>
        </header>

        <div className="space-y-6 text-base leading-8 text-[var(--portfolio-muted)]">
          {children}
        </div>
      </div>
    </section>
  );
}