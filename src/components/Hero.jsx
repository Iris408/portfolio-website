export default function Hero() {
  return (
    <section
      className="hero-shell relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[var(--portfolio-bg)] text-[var(--portfolio-ink)]"
      aria-label="Portfolio introduction"
    >

      <div className="relative z-10 grid min-h-[calc(100svh-5rem)] grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 md:grid-cols-[minmax(0,1fr)_minmax(14rem,18rem)] md:gap-8 lg:gap-16">
        <div className="max-w-3xl">
          <p className="mb-7 text-lg font-semibold uppercase tracking-[0.3em] text-[#C8D8B8] light:text-[#6D7F70]">
            Backend & Full-Stack Developer
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-[#F7F6F1] sm:text-6xl lg:text-7xl xl:text-[6.25rem] light:text-[#1E2823]">
            Hi, I'm Ashleigh.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-base leading-relaxed text-[#F7F6F1]/90 light:text-[#1E2823]/90">
            I work across backend systems, APIs and data models, connecting them to clear interfaces that help people get things done.
          </p>

          <p className="mt-5 text-base text-neutral-400 light:text-neutral-500">
            ⚲ London · Edinburgh
          </p>

          <div className="hero-actions mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-3 bg-[#C8D8B8] px-6 py-3.5 text-sm font-medium text-[#111412] transition hover:bg-[#DDE8CD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C8D8B8]"
            >
              View my projects <span aria-hidden="true">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-11 shrink-0 items-center justify-center whitespace-nowrap px-4 text-center leading-none bg-[#58705C] text-white hover:bg-[#405544] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#405544]"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto aspect-square w-56 overflow-hidden rounded-lg border border-[#D8DED7] bg-[#F3F4EF] sm:w-64 md:mx-0 md:w-full md:max-w-[18rem] md:justify-self-end">
          <img
            src="/images/hero/illustration-portrait.png"
            alt="Line art illustrated portrait"
            className="h-full w-full object-cover object-[center_25%] opacity-90"
          />
        </div>
      </div>
    </section>
  );
}