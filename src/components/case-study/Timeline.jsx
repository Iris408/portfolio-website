export default function Timeline({ items = [] }) {
  return (
    <ol className="mt-8 border-t border-[var(--portfolio-line)]">
      {items.map((item, index) => (
        <li
          key={item.version}
          className="grid gap-4 border-b border-[var(--portfolio-line)] py-6 sm:grid-cols-[9rem_1fr]"
        >
          <div>
            <p className="font-mono text-sm font-medium text-[var(--portfolio-accent)]">
              {item.version}
            </p>

            {item.date && (
              <p className="mt-1 text-xs text-[var(--portfolio-muted-soft)]">
                {item.date}
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-[auto_1fr]">
            <span className="font-mono text-xs text-[var(--portfolio-muted-soft)]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="font-serif text-xl text-[var(--portfolio-ink)]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[var(--portfolio-muted)]">
                {item.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}