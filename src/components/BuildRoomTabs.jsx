import { useMemo, useState } from "react";
import { theBuildRoomNotes } from "../data/theBuildRoomNotes.js";

const currentBuilds = [
  {
    project: "PartsPilot",
    title: "PartsPilot v3 migration",
    status: "In progress",
    summary: "Migrating the backend from FastAPI to a .NET Minimal API.",
    href: "/case-studies/partspilot",
  },
  {
    project: "Bloom",
    title: "Bloom v3",
    status: "Live beta",
    summary: "The public live beta of my visual task planner.",
    href: "/case-studies/bloom",
  },
];

const projectRoutes = {
  PartsPilot: "/case-studies/partspilot",
  Bloom: "/case-studies/bloom",
};

const categories = [
  { id: "current-builds", label: "Current Builds", count: currentBuilds.length },
  { id: "prototypes", label: "Prototypes" },
  { id: "experiments", label: "Experiments" },
  { id: "notes", label: "Notes", count: theBuildRoomNotes.length },
];

function formatDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

function ProjectTag({ project }) {
  const href = projectRoutes[project];

  if (!href) {
    return (
      <span className="inline-flex w-fit rounded-full bg-[var(--portfolio-surface-soft)] px-3 py-1 text-xs font-medium text-[var(--portfolio-accent)]">
        {project}
      </span>
    );
  }

  return (
    <a
      href={href}
      className="inline-flex w-fit rounded-full bg-[var(--portfolio-surface-soft)] px-3 py-1 text-xs font-medium text-[var(--portfolio-accent)] underline-offset-4 hover:underline"
    >
      {project}
    </a>
  );
}

function BuildCard({ build }) {
  return (
    <article className="grid gap-4 border-y border-[var(--portfolio-line)] py-5 sm:grid-cols-[1fr_auto] sm:items-center">
      <div>
        <ProjectTag project={build.project} />

        <h3 className="mt-3 font-serif text-xl leading-snug text-[var(--portfolio-ink)]">
          <a href={build.href} className="hover:underline">
            {build.title}
          </a>
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--portfolio-muted)]">
          {build.summary}
        </p>
      </div>

      <span className="w-fit rounded-full border border-[var(--portfolio-accent)] px-3 py-1.5 text-xs font-semibold text-[var(--portfolio-accent)]">
        {build.status}
      </span>
    </article>
  );
}

function NoteRow({ note }) {
  return (
    <article className="grid gap-3 border-b border-[var(--portfolio-line)] py-5 md:grid-cols-[9rem_minmax(0,1fr)] md:gap-6">
      <time
        dateTime={note.date}
        className="text-sm font-semibold text-[var(--portfolio-accent)] md:pt-1"
      >
        {formatDate(note.date)}
      </time>

      <div className="border-l border-[var(--portfolio-line)] pl-4 md:pl-6">
        <ProjectTag project={note.project} />

        <h3 className="mt-3 font-serif text-xl leading-snug text-[var(--portfolio-ink)]">
          {note.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--portfolio-muted)]">
          {note.summary}
        </p>

        <details className="group mt-4">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-2 text-sm font-medium text-[var(--portfolio-accent)] hover:text-[var(--portfolio-ink)]">
            Read the engineering breakdown
            <span
              className="transition group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>

          <div className="mt-4 grid gap-4 border-t border-[var(--portfolio-line)] pt-4 sm:grid-cols-2">
            {[
              ["Problem", note.problem],
              ["Cause", note.cause],
              ["Fix", note.fix],
              ["Lesson", note.lesson],
            ].map(([title, content]) => (
              <section key={title}>
                <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--portfolio-accent)]">
                  {title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-[var(--portfolio-muted)]">
                  {content}
                </p>
              </section>
            ))}
          </div>
        </details>
      </div>
    </article>
  );
}

export default function BuildRoomTabs() {
  const [activeCategory, setActiveCategory] = useState("notes");

  const latestNotes = useMemo(
    () =>
      [...theBuildRoomNotes]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 3),
    []
  );

  return (
    <div>
      <div
        aria-label="Build Room categories"
        className="flex gap-7 overflow-x-auto border-b border-[var(--portfolio-line)]"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={isActive}
              className={`-mb-px flex shrink-0 items-center gap-2 border-b-2 px-1 py-4 text-sm transition ${
                isActive
                  ? "border-[var(--portfolio-accent)] font-semibold text-[var(--portfolio-accent)]"
                  : "border-transparent text-[var(--portfolio-muted)] hover:text-[var(--portfolio-ink)]"
              }`}
            >
              <span>{category.label}</span>
              {category.count !== undefined && (
                <span className="text-xs">{category.count}</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="pt-6" aria-live="polite">
        {activeCategory === "current-builds" && (
          <div>
            <h2 className="sr-only">Current Builds</h2>
            {currentBuilds.map((build) => (
              <BuildCard key={build.project} build={build} />
            ))}
          </div>
        )}

        {activeCategory === "notes" && (
          <div>
            <div className="mb-2 flex items-center justify-between gap-4">
              <h2 className="font-serif text-2xl text-[var(--portfolio-ink)]">
                Latest notes
              </h2>
              <a
                href="/the-build-room/notes"
                className="shrink-0 text-sm font-medium text-[var(--portfolio-accent)] underline underline-offset-4"
              >
                View all {theBuildRoomNotes.length} notes →
              </a>
            </div>

            {latestNotes.map((note) => (
              <NoteRow key={note.id} note={note} />
            ))}
          </div>
        )}

        {activeCategory === "prototypes" && (
          <p className="border-y border-[var(--portfolio-line)] py-6 text-sm leading-6 text-[var(--portfolio-muted)]">
            First prototypes coming soon.
          </p>
        )}

        {activeCategory === "experiments" && (
          <p className="border-y border-[var(--portfolio-line)] py-6 text-sm leading-6 text-[var(--portfolio-muted)]">
            First experiments coming soon.
          </p>
        )}
      </div>
    </div>
  );
}