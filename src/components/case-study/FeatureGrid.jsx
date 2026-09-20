export default function FeatureGrid({ features = [] }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {features.map((feature, index) => (
        <article
          key={feature.title}
          className="border-t border-[var(--portfolio-line)] py-6"
        >
          <p className="text-xs font-medium text-[var(--portfolio-muted-soft)]">
            {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-4 font-serif text-xl text-[var(--portfolio-ink)]">
            {feature.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[var(--portfolio-muted)]">
            {feature.description}
          </p>
        </article>
      ))}
    </div>
  );
}