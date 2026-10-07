import { theBuildRoomNotes } from "../data/theBuildRoomNotes.js";

const currentBuilds = [
  {
    project: "PartsPilot",
    title: "PartsPilot v3 migration",
    status: "In progress",
    summary: "Migrating the backend from FastAPI to a .NET Minimal API.",
    href: "/the-build-room/current-builds/partspilot",
    image: "/screenshots/partspilot/partspilot-homepage.png",
    imageAlt: "PartsPilot inventory dashboard preview",
  },
  {
    project: "Bloom",
    title: "Bloom v3",
    status: "Live beta",
    summary: "The public live beta of my visual task planner.",
    href: "/the-build-room/current-builds/bloom",
    image: "/screenshots/bloom/bloom-homepage.png",
    imageAlt: "Bloom task planner preview",
  },
];

const prototypes = [
  {
    project: "Save State Studio",
    title: "A game studio site styled as a retro desktop",
    status: "Prototype",
    summary:
      "A bilingual studio site concept with a game library, trailers and saved progress, built with Next.js and TypeScript.",
    href: "/the-build-room/prototypes",
    image: "/images/build-room/save-state-studio-preview.png",
    imageAlt: "Save State Studio game studio site preview with retro desktop interface",
  },
  {
    project: "TorqTrace",
    title: "A diagnostics interface built for technicians",
    status: "Prototype",
    summary: "A vehicle diagnostics concept rebuilt from a React prototype into a custom WordPress theme.",
    href: "/the-build-room/prototypes",
    image: "/screenshots/torqtrace/torqtrace-desktop-hero.png",
    imageAlt: "TorqTrace vehicle diagnostics dashboard preview",
  },
];

const experiments = [
  {
    project: "HR Management Platform",
    title: "HR request and case-management platform.",
    status: "Experiment",
    summary:
      "An internal platform for categorising requests, estimating priority and assisting HR with response drafts.",
    href: "/the-build-room/experiments",
    image: "/images/build-room/ai-hr-support-preview.png",
    imageAlt: "HR Management Platform dashboard preview",
  },
];

const projectRoutes = {
  PartsPilot: "/the-build-room/current-builds/partspilot",
  Bloom: "/the-build-room/current-builds/bloom",
  "Save State Studio": "/the-build-room/prototypes",
  TorqTrace: "/the-build-room/prototypes",
  "HR Management Platform":
    "/the-build-room/experiments",
};

const sortedNotes = [...theBuildRoomNotes].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const categories = [
  {
    id: "current-builds",
    label: "Current Builds",
    items: currentBuilds,
    href: "/the-build-room/current-builds",
    itemLabel: "current builds",
  },
  {
    id: "prototypes",
    label: "Prototypes",
    items: prototypes,
    href: "/the-build-room/prototypes",
    itemLabel: "prototypes",
  },
  {
    id: "experiments",
    label: "Experiments",
    items: experiments,
    href: "/the-build-room/experiments",
    itemLabel: "experiments",
  },
  {
    id: "notes",
    label: "Notes",
    items: sortedNotes,
    href: "/the-build-room/notes",
    itemLabel: "notes",
  },
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

  const className =
    "inline-flex w-fit rounded-full bg-[var(--portfolio-surface-soft)] px-3 py-1 text-xs font-medium text-[var(--portfolio-accent)]";

  return href ? (
    <a href={href} className={`${className} underline-offset-4 hover:underline`}>
      {project}
    </a>
  ) : (
    <span className={className}>{project}</span>
  );
}

function BuildCard({ build }) {
  return (
    <article className="overflow-hidden rounded-xl border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] transition hover:border-[var(--portfolio-accent)]">
      <a
        href={build.href}
        className="block aspect-[2/1] overflow-hidden bg-[var(--portfolio-surface-soft)]"
        aria-label={`View ${build.project} details`}
      >
        <img
          src={build.image}
          alt={build.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]"
        />
      </a>

      <div className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <ProjectTag project={build.project} />
          <span className="rounded-full border border-[var(--portfolio-line)] px-3 py-1 text-xs text-[var(--portfolio-muted)]">
            {build.status}
          </span>
        </div>

        <h3 className="mt-4 font-serif text-xl leading-snug text-[var(--portfolio-ink)]">
          <a href={build.href} className="hover:underline">
            {build.title}
          </a>
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--portfolio-muted)]">
          {build.summary}
        </p>

        <a
          href={build.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--portfolio-accent)] underline underline-offset-4"
        >
          View details <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}

function NoteCard({ note }) {
  return (
    <article className="rounded-xl border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-5 transition hover:border-[var(--portfolio-accent)] md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <time
          dateTime={note.date}
          className="text-sm font-medium text-[var(--portfolio-muted)]"
        >
          {formatDate(note.date)}
        </time>
        <ProjectTag project={note.project} />
      </div>

      <h3 className="mt-4 font-serif text-xl leading-snug text-[var(--portfolio-ink)]">
        {note.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[var(--portfolio-muted)]">
        {note.summary}
      </p>
    </article>
  );
}

function CategoryPreview({ category }) {
  const count = category.items.length;
  const previewItems = category.items.slice(0, 3);
  const itemLabel =
    count === 1
      ? category.itemLabel.replace(/s$/, "")
      : category.itemLabel;

  return (
    <section
      id={category.id}
      className="scroll-mt-24 border-t border-[var(--portfolio-line)] py-10"
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="mb-4 flex flex-wrap items-center gap-3 border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] px-5 py-4">
        <h2 className="font-serif text-2xl text-[var(--portfolio-ink)]">
          {category.label}
          <span className="ml-3 font-sans text-sm text-[var(--portfolio-muted)]">
            {count}
          </span>
        </h2>

        <a
          href={category.href}
          className="ml-auto text-right text-sm font-medium text-[var(--portfolio-accent)] underline underline-offset-4 hover:text-[var(--portfolio-ink)]"
        >
          <span className="sm:hidden">View →</span>
          <span className="hidden sm:inline">
            View all {count} {category.itemLabel} →
          </span>
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {category.id === "notes"
          ? previewItems.map((note) => <NoteCard key={note.id} note={note} />)
          : previewItems.map((build) => (
              <BuildCard key={build.project} build={build} />
            ))}
      </div>
    </section>
  );
}

export default function BuildRoomTabs() {
  return (
    <div>
      {categories.map((category) => (
        <CategoryPreview key={category.id} category={category} />
      ))}
    </div>
  );
}