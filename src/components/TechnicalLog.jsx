// EN: Technical log section — shows current engineering learning/debugging focus
// JP: テクニカルログセクション — 現在の学習・デバッグ・開発フォーカスを表示します

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
        {/* EN: Section heading */}
        {/* JP: セクション見出し */}
        <div className="mb-14">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#A5B5A3]">
            § 03 / Technical Log
          </p>

          <h2 className="max-w-3xl text-3xl font-light leading-tight text-slate-100 md:text-5xl">
            Field notes from building production-style apps.
          </h2>
        </div>

        {/* EN: Log cards */}
        {/* JP: ログカード */}
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
      </div>
    </section>
  );
}