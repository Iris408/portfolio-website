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
    <section className="border-b border-[#D8D4C8] pb-16">
      <div
        className={`grid gap-10 ${
          image
            ? "lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
            : "lg:grid-cols-[1fr_0.55fr] lg:items-end"
        }`}
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#6D7F70]">
            {eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#1E2823] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#626A65] md:text-lg">
            {summary}
          </p>

          {tags.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#E8ECE5] px-3 py-1.5 text-xs font-medium text-[#526156]"
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
                className="inline-flex items-center justify-center gap-2 bg-[#526A57] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#405544]"
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
                className="inline-flex items-center justify-center gap-2 border border-[#9DAA9D] px-6 py-3 text-sm font-medium text-[#405544] transition hover:border-[#526A57] hover:bg-[#E3E9E1]"
              >
                View GitHub
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>

        {image ? (
          <div className="overflow-hidden bg-[#E9E8E1]">
            <img
              src={image}
              alt={imageAlt}
              className="h-full max-h-[32rem] w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="border-l border-[#AEB9AD] pl-6 md:pl-8">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6D7F70]">
              Case study
            </p>

            <p className="mt-4 font-serif text-2xl leading-snug text-[#35453A]">
              Product thinking, technical decisions and lessons from the build.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}