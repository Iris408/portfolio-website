export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/20 px-6 py-28">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        {/* EN: Contact heading */}
        {/* JP: 連絡先セクションの見出し */}
        <div>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-[#A5B5A3]">
            § 04 / Contact
          </p>

          <h2 className="max-w-3xl text-3xl font-light leading-tight text-slate-100 md:text-5xl">
            Open to junior backend and full-stack opportunities.
          </h2>
        </div>

        {/* EN: Contact details */}
        {/* JP: 連絡先の詳細 */}
        <div className="border border-white/15 bg-white/5 p-6">
          <p className="mb-8 text-base font-light leading-8 text-[#D8E0DD]">
            Seeking junior backend, full-stack, and software engineering roles.
            Open to remote, hybrid, and international opportunities.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href="https://github.com/Iris408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-5 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-white"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/ashleigh-magloire"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-5 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-white"
            >
              LinkedIn
            </a>

            <a
              href="/Ashleigh_Magloire_FullStack_Resume.pdf"
              download="Ashleigh_Magloire_FullStack_Resume.pdf"
              className="inline-flex h-12 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-5 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-white"
            >
              Download CV
            </a>

            <a
              href="mailto:ashmagloire45@icloud.com"
              className="inline-flex h-12 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-5 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-white"
            >
              Email
            </a>
          </div>

          <div className="mt-8 border-t border-white/15 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5B5A3]">
              Role Focus
            </p>

            <p className="mt-3 text-sm font-light leading-7 text-[#D8E0DD]">
              Backend systems · Full-stack applications · API development ·
              Authentication · PostgreSQL · Accessibility · Deployment workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}