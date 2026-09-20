export default function ChallengeCard({
  title,
  challenge,
  decision,
  outcome,
}) {
  const sections = [
    { label: "Challenge", content: challenge },
    { label: "Decision", content: decision },
    { label: "Outcome", content: outcome },
  ];

  return (
    <article className="border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-6 md:p-8">
      <h3 className="font-serif text-2xl leading-snug text-[var(--portfolio-ink)]">
        {title}
      </h3>

      <div className="mt-7 grid gap-7 md:grid-cols-3">
        {sections.map((section, index) => (
          <section
            key={section.label}
            className={
              index > 0
                ? "border-t border-[var(--portfolio-line)] pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0"
                : ""
            }
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--portfolio-accent)]">
              {section.label}
            </p>

            <p className="mt-3 text-sm leading-7 text-[var(--portfolio-muted)]">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}