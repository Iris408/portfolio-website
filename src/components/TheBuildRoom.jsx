// EN: Homepage Build Room preview
// JP: ホームページの Build Room プレビュー

import { theBuildRoomNotes } from "../data/theBuildRoomNotes.js";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function BuildNoteCard({ entry, index }) {
  return (
    <article className="flex h-full flex-col border-t border-[#BCC4B9] py-6">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#6D7F70]">
          {entry.project}
        </p>

        <span className="font-mono text-xs text-[#89928B]">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-xl leading-snug text-[#1E2823]">
        {entry.title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-[#69706B]">
        {entry.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {entry.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-[#E8ECE5] px-3 py-1 text-[0.68rem] font-medium text-[#526156]"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="mt-auto pt-6 text-xs uppercase tracking-[0.14em] text-[#89928B]">
        {formatDate(entry.date)}
      </p>
    </article>
  );
}

export default function TheBuildRoom() {
  // EN: Show the three newest notes on the homepage
  // JP: ホームページには最新の3件を表示します
  const recentNotes = [...theBuildRoomNotes]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section
      id="build-room"
      className="border-t border-[#D8D4C8] bg-[#EFEEE8] px-6 py-20 pt-14 text-[#1E2823] md:px-10 md:py-24 md:pt-16"
    >
      <div className="w-full">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.55fr)] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#6D7F70]">
              03 / The Build Room
            </p>

            <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
              Notes from behind the build.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#69706B] md:text-base">
            A working record of problems investigated, decisions made and
            lessons learned while building full-stack applications, backend
            systems and deployment workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 md:grid-cols-3">
          {recentNotes.map((entry, index) => (
            <BuildNoteCard
              key={`${entry.date}-${entry.title}`}
              entry={entry}
              index={index}
            />
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden bg-[#26372D] text-[#F7F6F1] lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="p-7 md:p-9">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#AEBDAE]">
              Engineering notebook
            </p>

            <h3 className="mt-4 max-w-2xl font-serif text-2xl leading-snug md:text-3xl">
              Follow the complete debugging process, not only the finished
              result.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#D8E0D8]">
              The Build Room contains detailed problems, causes, fixes and
              engineering lessons. The external notebook also includes
              Japanese-first technical writing.
            </p>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/15 p-7 sm:flex-row lg:flex-col lg:border-l lg:border-t-0 lg:p-9">
            <a
              href="/the-build-room"
              className="inline-flex items-center justify-center gap-2 bg-[#F7F6F1] px-6 py-3 text-sm font-medium text-[#26372D] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Enter The Build Room
              <span aria-hidden="true">→</span>
            </a>

            <a
              href="https://iris408.github.io/technical-blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#AEBDAE]/50 px-6 py-3 text-sm font-medium text-[#F7F6F1] transition hover:border-white hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Open technical notebook
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}