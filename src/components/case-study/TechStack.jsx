export default function TechStack({ groups = [] }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {groups.map((group) => (
        <article
          key={group.title}
          className="border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-6"
        >
          <h3 className="font-serif text-xl text-[var(--portfolio-ink)]">
            {group.title}
          </h3>

          <ul className="mt-5 space-y-3">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-6 text-[var(--portfolio-muted)]"
              >
                <span
                  className="text-[var(--portfolio-accent)]"
                  aria-hidden="true"
                >
                  —
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}