export default function Contact() {
  const roleFocus = [
    "Backend systems",
    "Full-stack applications",
    "API development",
    "PostgreSQL",
    "Authentication",
    "Accessible interfaces",
    "Deployment workflows",
  ];

  return (
    <section
      id="contact"
      className="bg-[#26372D] px-6 py-20 text-[#F7F6F1] md:px-10 md:py-24"
    >
      <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-[#AEBDAE]">
            04 / Contact
          </p>

          <h2 className="max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#D8E0D8]">
            I&apos;m open to junior backend and full-stack engineering roles,
            freelance web projects and thoughtful product collaborations.
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#BFC9BF]">
            Based in the UK and open to remote, hybrid and international
            opportunities.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:ashmagloire45@icloud.com"
              className="inline-flex items-center justify-center gap-2 bg-[#F7F6F1] px-6 py-3 text-sm font-medium text-[#26372D] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Send me an email
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/Ashleigh_Magloire_Software_Engineer_Resume.pdf"
              download="Ashleigh_Magloire_Software_Engineer_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 border border-[#AEBDAE]/50 px-6 py-3 text-sm font-medium text-[#F7F6F1] transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="border border-white/15 bg-white/[0.04] p-7 md:p-8">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#AEBDAE]">
            Current focus
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {roleFocus.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-[#D8E0D8]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}