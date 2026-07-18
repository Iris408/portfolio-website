export default function CaseStudySection({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="mt-20">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-light text-slate-100">
        {title}
      </h2>

      <div className="mt-8 space-y-6 leading-relaxed text-[#D8E0DD]">
        {children}
      </div>
    </section>
  )
}