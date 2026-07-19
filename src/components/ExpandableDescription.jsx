import { useState } from "react";

export default function ExpandableDescription({
  description,
  maxLength = 150,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const shouldTruncate = description.length > maxLength;

  const visibleDescription =
    shouldTruncate && !isExpanded
      ? `${description.slice(0, maxLength).trim()}...`
      : description;

  if (!description) {
    return null;
  }

  return (
    <div className="text-sm leading-6 text-slate-300">
      <p>
        {visibleDescription}

        {shouldTruncate && (
          <>
            {" "}
            <button
              type="button"
              onClick={() => setIsExpanded((current) => !current)}
              aria-expanded={isExpanded}
              className="
                inline-flex items-center
                text-[#A5B5A3]
                underline
                underline-offset-4
                transition-colors
                hover:text-slate-100
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#A5B5A3]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-slate-900
                rounded-sm
              "
            >
              {isExpanded ? "Show less" : "Read more"}
              <span
                aria-hidden="true"
                className={`ml-1 inline-block transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              >
              </span>
            </button>
          </>
        )}
      </p>
    </div>
  );
}