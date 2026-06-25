// EN: Technical notes preview section — links to the full Technical Log page
// JP: テクニカルノートのプレビューセクション — 完全な Technical Log ページへリンクします

const logEntries = [
  {
    title: "Authentication & JWT",
    description:
      "Building protected routes, login flows, role-based access, and real app authentication patterns.",
    focus: "FastAPI · JWT · Protected routes",
  },
  {
    title: "Database Persistence",
    description:
      "Working with PostgreSQL, SQLAlchemy models, database connections, Docker issues, and backend debugging.",
    focus: "PostgreSQL · SQLAlchemy · Docker",
  },
  {
    title: "Accessible Product UI",
    description:
      "Designing calm, readable interfaces with accessibility controls, clear navigation, and low-pressure user flows.",
    focus: "React · Tailwind · Accessibility",
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
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
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

        <div className="mt-10">
          <a
            href="/technical-log"
            className="inline-flex border border-[#A5B5A3]/40 bg-[#A5B5A3] px-6 py-3 text-sm font-normal uppercase tracking-[0.18em] text-[#243034] transition hover:border-white hover:bg-white"
          >
            View Technical Log →
          </a>
        </div>
      </div>
    </section>
  );
}