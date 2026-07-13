import { useMemo, useState } from "react"
import { technicalNotes } from "../data/technicalNotes.js"

const filters = [
  "All",
  "Backend",
  "Frontend",
  "CI/CD",
  "Docker",
  "TypeScript",
  "FastAPI",
  "PostgreSQL",
  "Astro",
  "React",
  "Debugging",
  "Full-Stack",
]

export default function TechnicalLogClient() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [sortOrder, setSortOrder] = useState("newest")
  const [showPinnedOnly, setShowPinnedOnly] = useState(false)

  const visibleNotes = useMemo(() => {
    return [...technicalNotes]
      .filter((note) => {
        if (showPinnedOnly && !note.pinned) {
          return false
        }

        if (
          activeFilter !== "All" &&
          !note.tags?.includes(activeFilter)
        ) {
          return false
        }

        return true
      })
      .sort((firstNote, secondNote) => {
        const firstDate = new Date(firstNote.date)
        const secondDate = new Date(secondNote.date)

        if (sortOrder === "oldest") {
          return firstDate - secondDate
        }

        return secondDate - firstDate
      })
  }, [activeFilter, showPinnedOnly, sortOrder])

  return (
    <>
      {/* Main controls */}
      <div className="mb-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setShowPinnedOnly(false)}
          className={`border px-4 py-2 text-xs font-light uppercase tracking-[0.16em] transition ${
            !showPinnedOnly
              ? "border-[#A5B5A3] bg-[#A5B5A3] text-[#243034]"
              : "border-white/15 bg-white/5 text-[#D8E0DD] hover:border-[#A5B5A3]/60 hover:text-white"
          }`}
        >
          All logs
        </button>

        <button
          type="button"
          onClick={() => setShowPinnedOnly(true)}
          className={`border px-4 py-2 text-xs font-light uppercase tracking-[0.16em] transition ${
            showPinnedOnly
              ? "border-[#A5B5A3] bg-[#A5B5A3] text-[#243034]"
              : "border-white/15 bg-white/5 text-[#D8E0DD] hover:border-[#A5B5A3]/60 hover:text-white"
          }`}
        >
          Pinned
        </button>

        <button
          type="button"
          onClick={() => setSortOrder("newest")}
          className={`border px-4 py-2 text-xs font-light uppercase tracking-[0.16em] transition ${
            sortOrder === "newest"
              ? "border-[#A5B5A3] bg-[#A5B5A3] text-[#243034]"
              : "border-white/15 bg-white/5 text-[#D8E0DD] hover:border-[#A5B5A3]/60 hover:text-white"
          }`}
        >
          Newest
        </button>

        <button
          type="button"
          onClick={() => setSortOrder("oldest")}
          className={`border px-4 py-2 text-xs font-light uppercase tracking-[0.16em] transition ${
            sortOrder === "oldest"
              ? "border-[#A5B5A3] bg-[#A5B5A3] text-[#243034]"
              : "border-white/15 bg-white/5 text-[#D8E0DD] hover:border-[#A5B5A3]/60 hover:text-white"
          }`}
        >
          Oldest
        </button>
      </div>

      {/* Technology/category filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`border px-4 py-2 text-xs font-light uppercase tracking-[0.16em] transition ${
                isActive
                  ? "border-[#A5B5A3] bg-[#A5B5A3] text-[#243034]"
                  : "border-white/15 bg-white/5 text-[#D8E0DD] hover:border-[#A5B5A3]/60 hover:text-white"
              }`}
            >
              {filter}
            </button>
          )
        })}
      </div>

      {/* Empty result */}
      {visibleNotes.length === 0 && (
        <div className="border border-white/15 bg-white/5 p-8 text-center">
          <p className="text-sm font-light text-[#D8E0DD]">
            No technical logs match these filters.
          </p>
        </div>
      )}

      {/* Technical log cards */}
      <div className="grid gap-8">
        {visibleNotes.map((note, index) => (
          <article
            key={`${note.date}-${note.title}`}
            className="border border-white/15 bg-white/5 p-6"
          >
            <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5B5A3]">
                    Note {String(index + 1).padStart(2, "0")}
                  </p>

                  {note.pinned && (
                    <span className="border border-amber-300/40 bg-amber-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-amber-200">
                      Pinned
                    </span>
                  )}
                </div>

                <h2 className="max-w-3xl break-words text-2xl font-light leading-tight text-slate-100">
                  {note.title}
                </h2>

                <p className="mt-3 text-sm font-light text-[#D8E0DD]">
                  {note.project} · {note.date}
                </p>
              </div>

              <span className="w-fit shrink-0 border border-[#A5B5A3]/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-[#A5B5A3]">
                {note.status}
              </span>
            </div>

            <p className="mb-6 text-sm font-light leading-7 text-[#D8E0DD]">
              {note.summary}
            </p>

            <p className="mb-8 text-sm font-light text-[#D8E0DD]">
              <span className="text-slate-100">Category:</span>{" "}
              {note.category}
            </p>

            <div className="mb-8 flex flex-wrap gap-2">
              {(note.tags ?? []).map((tag) => (
                <span
                  key={tag}
                  className="border border-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#A5B5A3]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <section>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
                  Problem
                </h3>

                <p className="text-sm font-light leading-7 text-[#D8E0DD]">
                  {note.problem}
                </p>
              </section>

              <section>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
                  Cause
                </h3>

                <p className="text-sm font-light leading-7 text-[#D8E0DD]">
                  {note.cause}
                </p>
              </section>

              <section>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
                  Fix
                </h3>

                <p className="text-sm font-light leading-7 text-[#D8E0DD]">
                  {note.fix}
                </p>
              </section>

              <section>
                <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
                  Lesson
                </h3>

                <p className="text-sm font-light leading-7 text-[#D8E0DD]">
                  {note.lesson}
                </p>
              </section>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}