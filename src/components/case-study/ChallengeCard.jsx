export default function ChallengeCard({
  title,
  challenge,
  decision,
  outcome,
}) {
  const sections = [
    { label: "Challenge", content: challenge },
    { label: "Decision", content: decision },
    { label: "Outcome", content: outcome },
  ];

  return (
    <article className="border border-[#D8D4C8] bg-[#FCFBF7] p-6 md:p-8">
      <h3 className="font-serif text-2xl leading-snug text-[#1E2823]">
        {title}
      </h3>

      <div className="mt-7 grid gap-7 md:grid-cols-3">
        {sections.map((section, index) => (
          <section
            key={section.label}
            className={
              index > 0
                ? "border-t border-[#E0DDD4] pt-6 md:border-l md:border-t-0 md:pl-7 md:pt-0"
                : ""
            }
          >
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#617464]">
              {section.label}
            </p>

            <p className="mt-3 text-sm leading-7 text-[#626A65]">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}