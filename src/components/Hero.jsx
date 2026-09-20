export default function Hero() {
  return (
    <section className="hero-shell relative min-h-[calc(100vh-5rem)] overflow-hidden bg-[#F7F6F1] text-[#1E2823] dark:bg-[#111412] dark:text-[#F7F6F1]">
      <div className="absolute inset-0">
        <img
          src="/images/hero/portfolio-hero-light.png"
          alt=""
          aria-hidden="true"
          className="hero-bg hero-bg--light h-full w-full object-cover object-center"
        />

        <img
          src="/images/hero/portfolio-hero-dark.png"
          alt=""
          aria-hidden="true"
          className="hero-bg hero-bg--dark h-full w-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#F7F6F1]/95 via-[#F7F6F1]/78 to-[#F7F6F1]/12 dark:from-[#111412]/96 dark:via-[#111412]/78 dark:to-[#111412]/18" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#F7F6F1] to-transparent dark:from-[#111412]" />

      <div className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center px-6 py-20 md:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-[#6D7F70] dark:text-[#AAB8AD]">
            Build <span aria-hidden="true">→</span> Solve{" "}
            <span aria-hidden="true">→</span> Deploy
          </p>

          <h1 className="max-w-3xl text-5xl font-normal leading-[1.02] tracking-[-0.055em] text-[#1E2823] sm:text-6xl lg:text-7xl xl:text-[5.75rem] dark:text-[#F7F6F1]">
            Practical web applications for real people.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#4F5A54] md:text-lg md:leading-8 dark:text-[#D6DED8]">
            I&apos;m Ashleigh, a backend-focused full-stack developer building
            reliable web applications, APIs and digital products.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#657168] md:text-base dark:text-[#B9C4BC]">
            I focus on accessible interfaces, thoughtful architecture and
            systems designed to work beyond the demo.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/work"
              className="inline-flex items-center justify-center gap-3 bg-[#58705C] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-[#405544] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#405544]"
            >
              View my work <span aria-hidden="true">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-[#879087] bg-[#F7F6F1]/35 px-6 py-3.5 text-sm font-medium text-[#1E2823] backdrop-blur-sm transition hover:border-[#58705C] hover:bg-[#EDEDE6]/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C] dark:border-[#D6DED8]/45 dark:bg-[#111412]/20 dark:text-[#F7F6F1] dark:hover:border-[#F7F6F1] dark:hover:bg-[#F7F6F1]/10"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}