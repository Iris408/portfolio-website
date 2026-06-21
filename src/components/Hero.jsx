export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center px-6 pb-28 pt-36">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        {/* EN: Main profile introduction */}
        {/* JP: メインのプロフィール紹介 */}
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-[#A5B5A3]">
            § 01 / Profile
          </p>

          <h1 className="mb-7 max-w-4xl text-4xl font-light leading-tight text-slate-100 md:text-6xl">
            Ashleigh M
            <span className="block text-3xl font-light text-[#A5B5A3] md:text-5xl">
              Engineering Lab
            </span>
          </h1>

          <p className="mb-5 max-w-2xl text-base font-light leading-relaxed text-slate-200 md:text-lg">
            Backend-focused full-stack developer building practical,
            production-style web applications.
          </p>

          <p className="max-w-2xl text-sm font-light leading-relaxed text-[#D8E0DD] md:text-base">
            My current focus is the practical work behind production-ready applications: authentication, database persistence, 
            accessible interfaces, testing, deployment and documentation.
          </p>

          {/* EN: Hero actions */}
          {/* JP: ヒーローセクションのアクションボタン */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex border border-[#A5B5A3]/40 bg-[#A5B5A3] px-6 py-3 text-sm font-normal uppercase tracking-[0.18em] text-[#243034] transition hover:border-white hover:bg-white"
            >
              View featured projects
            </a>

            <a
              href="#contact"
              className="inline-flex border border-[#97A4AD]/40 px-6 py-3 text-sm font-normal uppercase tracking-[0.18em] text-slate-100 transition hover:border-[#A5B5A3]/70 hover:bg-white/10"            >
              Contact
            </a>
          </div>
        </div>

        {/* EN: Engineering focus summary */}
        {/* JP: エンジニアリングフォーカスの概要 */}
        <div className="border border-[#97A4AD]/20 bg-white/5 p-6">
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-[#A5B5A3]">
            Current Stack
          </p>

          <div className="grid gap-4">
            <div className="border-b border-[#97A4AD]/20 pb-4">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-[#97A4AD]">
                Backend
              </p>
              <p className="mt-1 text-base font-normal text-slate-100">
                Python · FastAPI · PostgreSQL · SQLAlchemy
              </p>
            </div>

            <div className="border-b border-[#97A4AD]/20 pb-4">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-[#97A4AD]">
                Frontend
              </p>
              <p className="mt-1 text-base font-normal text-slate-100">
                React · TypeScript · JavaScript · Tailwind CSS
              </p>
            </div>

            <div className="border-b border-[#97A4AD]/20 pb-4">
              <p className="text-xs font-light uppercase tracking-[0.18em] text-[#97A4AD]">
                DevOps / Workflow
              </p>
              <p className="mt-1 text-base font-normal text-slate-100">
                Docker · GitHub Actions · Vercel · Render
              </p>
            </div>

            <div>
              <p className="text-xs font-light uppercase tracking-[0.18em] text-[#97A4AD]">
                Project Direction
              </p>
              <p className="mt-1 text-base font-normal text-slate-100">
                Backend-focused full-stack systems and accessible product design
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}