import { useState } from "react";
import { technicalNotes } from "../data/technicalNotes.js";

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
];

export default function TechnicalLogClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNotes =
    activeFilter === "All"
      ? technicalNotes
      : technicalNotes.filter((note) => note.tags?.includes(activeFilter));

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

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
          );
        })}
      </div>

      <div className="grid gap-8">
        {filteredNotes.map((note, index) => (
          <article
            key={note.title}
            className="border border-white/15 bg-white/5 p-6"
          >
            <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#A5B5A3]">
                  Note 0{index + 1}
                </p>

                <h2 className="max-w-3xl text-2xl font-light leading-tight text-slate-100">
                  {note.title}
                </h2>

                <p className="mt-3 text-sm font-light text-[#D8E0DD]">
                  {note.project} · {note.date}
                </p>
              </div>

              <span className="w-fit border border-[#A5B5A3]/40 px-3 py-1 font-mono text-xs uppercase tracking-[0.16em] text-[#A5B5A3]">
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
              {note.tags.map((tag) => (
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
  );
}