import { useMemo, useState } from "react";
import { theBuildRoomNotes } from "../data/theBuildRoomNotes.js";

const filters = [
  "All",
  "Backend",
  "Frontend",
  "Full-Stack",
  "Debugging",
  "FastAPI",
  "PostgreSQL",
  "Docker",
];

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function DetailSection({ title, children }) {
  return (
    <section>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--portfolio-accent)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-[var(--portfolio-muted)]">
        {children}
      </p>
    </section>
  );
}

export default function TheBuildRoomClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [showPinnedOnly, setShowPinnedOnly] = useState(false);

  const visibleNotes = useMemo(() => {
    return [...theBuildRoomNotes]
      .filter((note) => {
        if (showPinnedOnly && !note.pinned) {
          return false;
        }

        if (
          activeFilter !== "All" &&
          !note.tags?.includes(activeFilter)
        ) {
          return false;
        }

        return true;
      })
      .sort((firstNote, secondNote) => {
        const firstDate = new Date(firstNote.date).getTime();
        const secondDate = new Date(secondNote.date).getTime();

        return sortOrder === "oldest"
          ? firstDate - secondDate
          : secondDate - firstDate;
      });
  }, [activeFilter, showPinnedOnly, sortOrder]);

  function clearFilters() {
    setActiveFilter("All");
    setShowPinnedOnly(false);
    setSortOrder("newest");
  }

  return (
    <div>
      <div className="border-y border-[var(--portfolio-line)] py-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[var(--portfolio-accent)]">
              Filter by technology or topic
            </p>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = activeFilter === filter;

                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-3.5 py-2 text-xs font-medium transition ${
                      isActive
                        ? "border-[#526A57] bg-[#526A57] text-[#F7F6F1]"
                        : "border-[var(--portfolio-line)] bg-transparent text-[var(--portfolio-muted)] hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-ink)]"
                    }`}
                  >
                    {filter}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setShowPinnedOnly((current) => !current)}
              aria-pressed={showPinnedOnly}
              className={`border px-4 py-2.5 text-xs font-medium transition ${
                showPinnedOnly
                  ? "border-[#D6E3C4] bg-[#F7F6F1] text-[#26372D]"
                  : "border-[var(--portfolio-line)] text-[var(--portfolio-muted)] hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-ink)]"
              }`}
            >
              {showPinnedOnly ? "Showing pinned" : "Pinned only"}
            </button>

            <label className="sr-only" htmlFor="note-sort">
              Sort engineering notes
            </label>

            <select
              id="note-sort"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
              className="border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] px-4 py-2.5 text-xs font-medium text-[var(--portfolio-ink)] outline-none transition focus:border-[var(--portfolio-accent)]"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 py-7">
        <p
          className="text-sm text-[var(--portfolio-muted)]"
          aria-live="polite"
        >
          Showing {visibleNotes.length}{" "}
          {visibleNotes.length === 1 ? "note" : "notes"}
        </p>

        {(activeFilter !== "All" ||
          showPinnedOnly ||
          sortOrder !== "newest") && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-sm font-medium text-[var(--portfolio-accent)] underline decoration-[var(--portfolio-muted-soft)] underline-offset-4 transition hover:text-[var(--portfolio-ink)]"
          >
            Clear filters
          </button>
        )}
      </div>

      {visibleNotes.length === 0 && (
        <div className="border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-10 text-center">
          <h2 className="font-serif text-2xl text-[var(--portfolio-ink)]">
            No matching notes
          </h2>

          <p className="mt-3 text-sm text-[var(--portfolio-muted)]">
            Try another technology filter or show all notes.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-6 bg-[#526A57] px-5 py-3 text-sm font-medium text-[#F7F6F1] transition hover:bg-[#405544]"
          >
            Show all notes
          </button>
        </div>
      )}

      <div className="grid gap-6">
        {visibleNotes.map((note) => (
          <article
            key={note.id}
            className="border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-6 transition duration-300 hover:border-[var(--portfolio-accent)] md:p-8"
          >
            <div className="grid gap-6 border-b border-[var(--portfolio-line)] pb-7 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--portfolio-accent)]">
                    {note.id}
                  </p>

                  {note.pinned && (
                    <span className="rounded-full bg-[#F7F6F1] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-[#26372D]">
                      Pinned
                    </span>
                  )}
                </div>

                <h2 className="mt-4 max-w-4xl font-serif text-2xl leading-snug text-[var(--portfolio-ink)] md:text-3xl">
                  {note.title}
                </h2>

                <p className="mt-3 text-sm text-[var(--portfolio-muted)]">
                  {note.project} · {formatDate(note.date)}
                </p>
              </div>

              <span className="h-fit w-fit border border-[var(--portfolio-line)] px-3 py-1.5 text-xs font-medium text-[var(--portfolio-accent)]">
                {note.status}
              </span>
            </div>

            <p className="mt-7 max-w-4xl text-base leading-8 text-[var(--portfolio-muted)]">
              {note.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {(note.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#F7F6F1] px-3 py-1.5 text-xs font-medium text-[#26372D]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <details className="group mt-8 border-t border-[var(--portfolio-line)] pt-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-[var(--portfolio-accent)] transition hover:text-[var(--portfolio-ink)]">
                <span>Read the engineering breakdown</span>

                <span
                  className="text-xl transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <div className="mt-7 grid gap-8 border-t border-[var(--portfolio-line)] pt-7 md:grid-cols-2">
                <DetailSection title="Problem">
                  {note.problem}
                </DetailSection>

                <DetailSection title="Cause">
                  {note.cause}
                </DetailSection>

                <DetailSection title="Fix">
                  {note.fix}
                </DetailSection>

                <DetailSection title="Lesson">
                  {note.lesson}
                </DetailSection>
              </div>
            </details>
          </article>
        ))}
      </div>
    </div>
  );
}