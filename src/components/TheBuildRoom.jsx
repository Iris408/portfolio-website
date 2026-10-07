// EN: Homepage Build Room preview
// JP: ホームページの Build Room プレビュー
const buildRoomLinks = [
  { label: "Current Builds", href: "/the-build-room#current-builds" },
  { label: "Prototypes", href: "/the-build-room#prototypes" },
  { label: "Experiments", href: "/the-build-room#experiments" },
  { label: "Notes", href: "/the-build-room#notes" },
];

const categories = [
  {
    id: "current-builds",
    title: "Current Builds",
    description: "Ongoing projects I'm actively working on.",
    icon: (
      <>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="m8 12 2 2 5-5" />
      </>
    ),
  },
  {
    id: "prototypes",
    title: "Prototypes",
    description: "Early builds and proof-of-concepts.",
    icon: (
      <>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />
        <path d="M8 15h8" />
      </>
    ),
  },
  {
    id: "experiments",
    title: "Experiments",
    description: "Tests of tools, technologies and approaches.",
    icon: (
      <>
        <path d="M9 18h6M10 22h4M8.5 14.5a7 7 0 1 1 7 0c-.8.6-1.2 1.3-1.4 2.5h-4.2c-.2-1.2-.6-1.9-1.4-2.5Z" />
        <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
      </>
    ),
  },
  {
    id: "notes",
    title: "Notes",
    description: "Problems, fixes and lessons from my projects.",
    icon: (
      <>
        <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5M9 13h6M9 17h6" />
      </>
    ),
  },
];

function CategoryCard({ category }) {
  return (
    <a
      href={`/the-build-room#${category.id}`}
      className="group grid min-h-28 grid-cols-[2.5rem_minmax(0,1fr)_2rem] items-center gap-4 rounded-xl border border-[var(--portfolio-line)] bg-[var(--portfolio-bg)] p-5 text-[var(--portfolio-ink)] transition hover:-translate-y-0.5 hover:border-[var(--portfolio-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="h-7 w-7"
      >
        {category.icon}
      </svg>

      <span>
        <strong className="block text-sm font-semibold">
          {category.title}
        </strong>
        <span className="mt-1 block text-sm leading-5 text-[var(--portfolio-muted)]">
          {category.description}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="grid h-8 w-8 place-items-center rounded-full border border-[var(--portfolio-line)] transition group-hover:border-[var(--portfolio-accent)] group-hover:translate-x-0.5"
      >
        →
      </span>
    </a>
  );
}

export default function TheBuildRoom() {
  return (
    <section
      id="the-build-room"
      className="border-t border-[var(--portfolio-line)] bg-[var(--portfolio-bg)] px-6 py-20 text-[var(--portfolio-ink)] md:px-10 md:py-24"
    >
      <div className="w-full">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--portfolio-accent)]">
              03 / The Build Room
            </p>

            <h2 className="max-w-3xl font-serif text-3xl leading-tight md:text-4xl">
              A behind-the-scenes look into my engineering process.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[var(--portfolio-muted)] md:justify-self-end md:text-base">
            From small experiments to real project fixes, I document what
            I'm building, the problems I encounter, and what I learn along
            the way.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href="https://iris408.github.io/technical-blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline underline-offset-4"
          >
            View Japanese Technical Notebook ↗
          </a>
        </div>
      </div>
    </section>
  );
}