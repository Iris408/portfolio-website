export default function Hero() {
  return (
    <section className="bg-[#F7F6F1] text-[#1E2823]">
      <div className="grid w-full lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <div className="flex flex-col justify-center px-6 py-16 md:px-10 md:py-24 lg:py-28">
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-[#6D7F70]">
            Build <span aria-hidden="true">→</span> Solve{" "}
            <span aria-hidden="true">→</span> Deploy
          </p>

          <h1 className="max-w-2xl text-4xl font-normal leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
            Practical web applications for real people.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#59615C] md:text-lg md:leading-8">
            I&apos;m Ashleigh, a backend-focused full-stack developer building
            reliable web applications, APIs and digital products.
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#69706B] md:text-base">
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
              className="inline-flex items-center justify-center border border-[#879087] px-6 py-3.5 text-sm font-medium text-[#1E2823] transition hover:border-[#58705C] hover:bg-[#EDEDE6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C]"
            >
              Get in touch
            </a>
          </div>
        </div>

        <picture className="block w-full overflow-hidden">
          <source
            media="(max-width: 639px)"
            srcSet="/images/portfolio-workspace-mobile.webp"
          />

          <source
            media="(max-width: 1023px)"
            srcSet="/images/portfolio-workspace-tablet.webp"
          />

           <img
            src="/images/portfolio-workspace-desktop.webp"
            alt="A calm software engineering workspace with a laptop, books and plants"
            className="block h-auto w-full"
          />
          </picture>
        </div>
    </section>
  );
}