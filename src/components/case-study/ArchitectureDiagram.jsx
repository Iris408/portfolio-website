export default function ArchitectureDiagram({ items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ol className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="relative border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--portfolio-accent)]">
            Layer {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-4 font-serif text-xl text-[var(--portfolio-ink)]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[var(--portfolio-muted)]">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}