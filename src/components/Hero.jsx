export default function Hero() {
  return (
    <section
      className="hero-shell relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[var(--portfolio-bg)] text-[var(--portfolio-ink)]"
      aria-label="Portfolio introduction"
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/hero/portfolio-hero-light.png"
          alt=""
          aria-hidden="true"
          className="hero-bg hero-bg--light absolute inset-0 h-full w-full object-cover object-center"
        />

        <img
          src="/images/hero/portfolio-hero-dark.png"
          alt=""
          aria-hidden="true"
          className="hero-bg hero-bg--dark absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <div className="hero-overlay absolute inset-0" />

      <div className="hero-bottom-fade absolute inset-x-0 bottom-0 h-40" />

      <div className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center px-6 py-20 md:px-10 lg:px-16">
        <div className="max-w-4xl">
          <p className="mb-7 text-lg font-medium uppercase tracking-[0.3em] text-[#C8D8B8] light:text-[#6D7F70]">
            Build <span aria-hidden="true">→</span> Solve{" "}
            <span aria-hidden="true">→</span> Deploy
          </p>

          <h1 className="max-w-4xl text-5xl font-normal leading-[1.02] tracking-[-0.055em] text-[#F7F6F1] sm:text-6xl lg:text-7xl xl:text-[6.25rem] light:text-[#1E2823]">
            Practical web applications for real people.
          </h1>

          <div className="hero-actions mt-16 flex flex-col gap-4 sm:flex-row">
            <a
              href="/work"
              className="inline-flex items-center justify-center gap-3 bg-[#C8D8B8] px-6 py-3.5 text-sm font-medium text-[#111412] transition hover:bg-[#DDE8CD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8D8B8]"
            >
              View my work <span aria-hidden="true">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/35 bg-[#111412]/35 px-6 py-3.5 text-sm font-medium text-[#F7F6F1] backdrop-blur-sm transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white light:border-[#879087] light:bg-[#F7F6F1]/35 light:text-[#1E2823] light:hover:border-[#58705C] light:hover:bg-[#EDEDE6]/75"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}