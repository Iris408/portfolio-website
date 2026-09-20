export default function CaseStudyHero({
  eyebrow,
  title,
  summary,
  tags = [],
  liveUrl,
  githubUrl,
  image,
  imageAlt = "",
}) {
  return (
    <section className="border-b border-[var(--portfolio-line)] pb-16">
      <div
        className={`grid gap-10 ${
          image
            ? "lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            : "lg:grid-cols-[1fr_0.55fr] lg:items-end"
        }`}
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--portfolio-accent)]">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[var(--portfolio-ink)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--portfolio-muted)] md:text-lg">
            {summary}
          </p>

          {tags.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F7F6F1] px-3 py-1.5 text-xs font-medium text-[#26372D]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#526A57] px-6 py-3 text-sm font-medium text-[#F7F6F1] transition hover:bg-[#405544] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
              >
                View live project
                <span aria-hidden="true">↗</span>
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-[var(--portfolio-line)] px-6 py-3 text-sm font-medium text-[var(--portfolio-accent)] transition hover:border-[var(--portfolio-accent)] hover:bg-[var(--portfolio-surface)] hover:text-[var(--portfolio-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
              >
                View GitHub
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        {image ? (
          <div className="overflow-hidden border border-[var(--portfolio-line)] bg-[var(--portfolio-surface-soft)]">
            <img
              src={image}
              alt={imageAlt}
              className="h-full max-h-[32rem] w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="border-l border-[var(--portfolio-line)] pl-6 md:pl-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--portfolio-accent)]">
              Case study
            </p>

            <p className="mt-4 font-serif text-2xl leading-snug text-[var(--portfolio-ink)]">
              Product thinking, technical decisions and lessons from the build.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}