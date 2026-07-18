export default function CaseStudyHero({
  eyebrow,
  title,
  summary,
  tags = [],
  liveUrl,
  githubUrl,
}) {
  return (
    <section className="border border-white/15 bg-white/5 p-8 sm:p-10 lg:p-14">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
        {eyebrow}
      </p>

      <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-lg font-light leading-relaxed text-[#D8E0DD]">
        {summary}
      </p>

      {tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-3">
          {tags.map((item) => (
            <span
              key={item}
              className="border border-[#97A4AD]/20 px-3 py-2 text-xs font-light text-[#D8E0DD]"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-5 text-xs uppercase tracking-[0.14em] text-[#243034]"
          >
            Live Demo
          </a>
        )}

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center border border-[#A5B5A3]/40 px-5 text-xs uppercase tracking-[0.14em] text-[#D8E0DD]"
          >
            GitHub
          </a>
        )}
      </div>
    </section>
  )
}