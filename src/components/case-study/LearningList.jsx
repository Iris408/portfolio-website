export default function LearningList({ items = [] }) {
  return (
    <ol className="mt-8 border-t border-[var(--portfolio-line)]">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[auto_1fr] gap-5 border-b border-[var(--portfolio-line)] py-5"
        >
          <span className="font-mono text-xs text-[var(--portfolio-muted-soft)]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="text-sm leading-7 text-[var(--portfolio-muted)]">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}