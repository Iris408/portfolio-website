// EN: Technical notes preview section — links to the full Technical Log page
// JP: テクニカルノートのプレビューセクション — 完全な Technical Log ページへリンクします

const logEntries = [
    {
    date: "2026-07-13",
    title: "Fixing Bloom Routine Synchronisation",
    description:
      "Focused on diagnosing and resolving a routine persistence and synchronisation issue affecting authenticated users.",
    focus: "Backend persistence · React · Full-Stack MVP",
  },
  {
    date: "2026-07-11",
    title: "Fixing JWT Dashboard Admin Access",
    description:
      "Debugging CORS, deployed FastAPI errors, admin role checks, and authenticated API requests between the JWT Dashboard and Mini User API.",
    focus: "FastAPI · JWT · CORS · Admin access",
  },
  {
    date: "2026-06-13",
    title: "Fixing pytest Import Paths",
    description:
      "Solving a backend testing issue by adding pytest configuration and clarifying how Python package paths are discovered during test runs.",
    focus: "Pytest · Python · Backend testing",
  },
];

export default function TechnicalLog() {
  return (
    <section id="log" className="border-t border-white/20 px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#A5B5A3]">
            § 02 / Technical Notes
          </p>

          <h2 className="max-w-3xl text-3xl font-light leading-tight text-slate-100 md:text-5xl">
            Debugging notes and engineering lessons from my project work
          </h2>

          <p className="mt-6 max-w-3xl text-sm font-light leading-relaxed text-[#D8E0DD]">
            I use my Technical Log to document project issues, debugging steps,
            fixes, and lessons learned while building backend, full-stack,
            DevOps, Java, and accessible frontend projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {logEntries.map((entry) => (
            <article
              key={entry.title}
              className="border border-white/15 bg-white/5 p-6"
            >
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
                {entry.date}
              </p>

              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]/80">
                {entry.focus}
              </p>

              <h3 className="mb-4 text-xl font-normal text-slate-100">
                {entry.title}
              </h3>

              <p className="text-sm font-light leading-relaxed text-[#D8E0DD]">
                {entry.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="/technical-log"
            className="inline-flex border border-[#A5B5A3]/40 bg-[#A5B5A3] px-6 py-3 text-sm font-normal uppercase tracking-[0.18em] text-[#243034] transition hover:border-white hover:bg-white"
          >
            View Engineering Log →
          </a>

          <a
            href="https://iris408.github.io/technical-blog/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex border border-white/20 bg-white/5 px-6 py-3 text-sm font-normal uppercase tracking-[0.18em] text-slate-100 transition hover:border-[#A5B5A3] hover:text-[#A5B5A3]"
          >
            Open Technical Blog →
          </a>
        </div>
      </div>
    </section>
  );
}