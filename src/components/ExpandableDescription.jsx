import { useState } from "react";

export default function ExpandableDescription({
  description,
  maxLength = 150,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!description) {
    return null;
  }

  const shouldTruncate = description.length > maxLength;

  const visibleDescription =
    shouldTruncate && !isExpanded
      ? `${description.slice(0, maxLength).trim()}...`
      : description;

  return (
    <div className="text-sm leading-6 text-[var(--portfolio-muted)]">
      <p>
        {visibleDescription}

        {shouldTruncate && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              aria-expanded={isExpanded}
              className="inline-flex items-center rounded-sm text-[var(--portfolio-accent)] underline underline-offset-4 transition-colors hover:text-[var(--portfolio-ink)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--portfolio-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--portfolio-bg)]"
            >
              {isExpanded ? "Show less" : "Read more"}
            </button>
          </>
        )}
      </p>
    </div>
  );
}