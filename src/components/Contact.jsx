export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#26372D] px-6 py-20 text-[#F7F6F1] md:px-10 md:py-24"
    >
      <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left: heading + image */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#AEBDAE] dark:text-[var(--portfolio-muted)]">
            04 / Contact
          </p>

          <h2 className="font-serif text-4xl leading-tight md:text-7xl">
            Let&apos;s talk.
          </h2>

          <div className="mt-2 aspect-[4/3] w-full max-w-xl overflow-hidden bg-white/[0.06]">
            <img
              src="/images/contact/contact_illustration.png"
              alt="Thin line illustration of a person with short hair, wearing a hoodie and glasses, looking to the right."
              loading="lazy"
              className="h-full w-full object-cover bg-[#26372D]"
            />
          </div>
        </div>

        {/* Right: intro, location + actions */}
        <div className="lg:self-center">
          <p className="max-w-xl text-xl leading-9 text-[#D8E0D8] md:text-2xl md:leading-10">
            I&apos;m open to junior backend and full-stack engineering roles,
            freelance web projects and collaborations on interesting products.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-[#BFC9BF] md:text-lg md:leading-8">
            Based in London and Edinburgh.
            <br />
            Open to remote, hybrid and international opportunities, including
            relocation.
          </p>

          <div className="mt-10 flex flex-col gap-8 sm:flex-row">
            <a
              href="mailto:ashmagloire45@icloud.com"
              className="inline-flex items-center justify-center gap-2 bg-[#F7F6F1] px-8 py-4 text-sm font-medium text-[#26372D] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Send me an email
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="/cv/Ashleigh_Magloire_Junior_Backend_Developer_CV.pdf"
              download="Ashleigh_Magloire_Junior_Backend_Developer_CV.pdf"
              className="inline-flex items-center justify-center gap-2 border border-[#AEBDAE]/50 px-8 py-4 text-sm font-medium text-[#F7F6F1] transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Download CV
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}