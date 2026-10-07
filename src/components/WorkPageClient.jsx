"use client";

import { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import PreviewModal from "./PreviewModal.jsx";

const primaryFilters = [
  "All",
  "Full-Stack",
  "Backend",
  "Frontend",
  "DevOps",
  "Accessibility",
];

const collectionCopy = {
  primary: {
    tab: "Flagship",
    eyebrow: "Featured work",
    title: "Flagship projects",
  },
  small: {
    tab: "Workshop",
    eyebrow: "Also built",
    title: "From the workshop",
  },
};

function CollectionTab({ collection, count, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(collection)}
      aria-pressed={isActive}
      className={`inline-flex items-baseline px-4 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--portfolio-accent)] ${
        isActive
          ? "bg-[#526A57] text-[#F7F6F1]"
          : "border border-[var(--portfolio-line)] text-[var(--portfolio-accent)] hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-ink)]"
      }`}
    >
      {collectionCopy[collection].tab}
      <span className="ml-1.5 text-xs tabular-nums opacity-70">
        {count}
        <span className="sr-only"> projects</span>
      </span>
    </button>
  );
}

function ProjectImage({ project, onPreview }) {
  if (!project.image) {
    return (
      <div className="flex h-48 items-center justify-center bg-[var(--portfolio-surface-soft)] md:h-56">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[var(--portfolio-muted-soft)]">
            Engineering project
          </p>

          <p className="mt-3 font-serif text-xl text-[var(--portfolio-ink)]">
            {project.title}
          </p>
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() =>
        onPreview({
          image: project.image,
          images: project.images,
          title: project.title,
        })
      }
      className="group block h-48 w-full overflow-hidden bg-[var(--portfolio-surface-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--portfolio-accent)] md:h-56"
      aria-label={`Preview images from ${project.title}`}
    >
      <img
        src={project.image}
        alt=""
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
      />
    </button>
  );
}

function ProjectLinks({ project }) {
  const links = [
    project.detailsPath && {
      label: "Case study",
      href: project.detailsPath,
    },
    project.demo && {
      label: "Live project",
      href: project.demo,
    },
    project.apiDemo && {
      label: "API docs",
      href: project.apiDemo,
    },
    project.github && {
      label: "GitHub",
      href: project.github,
    },
    project.secondaryGithub && {
      label: "Backend repository",
      href: project.secondaryGithub,
    },
  ].filter(Boolean);

  if (links.length === 0) {
    return (
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--portfolio-muted-soft)]">
        Development in progress
      </p>
    );
  }

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-3">
      {links.map((link) => {
        const isExternal = link.href.startsWith("http");

        return (
          <a
            key={`${project.slug}-${link.label}`}
            href={link.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--portfolio-accent)] transition hover:text-[var(--portfolio-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--portfolio-accent)]"
          >
            {link.label}
            <span aria-hidden="true">{isExternal ? "↗" : "→"}</span>
          </a>
        );
      })}
    </div>
  );
}

function WorkCard({ project, onPreview }) {
  const displayedTech =
    project.featuredTech || project.tech?.slice(0, 5) || [];

  return (
    <article className="work-card flex h-full flex-col overflow-hidden border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--portfolio-accent)] hover:shadow-[0_16px_40px_rgba(17,20,18,0.18)]">
      <ProjectImage project={project} onPreview={onPreview} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[var(--portfolio-accent)]">
            {project.category}
          </p>

          {project.status && (
            <span className="border border-[var(--portfolio-line)] px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[var(--portfolio-muted)]">
              {project.status}
            </span>
          )}
        </div>

        <h2 className="mt-4 font-serif text-2xl leading-snug text-[var(--portfolio-ink)]">
          {project.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[var(--portfolio-muted)]">
          {project.summary || project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {displayedTech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#F7F6F1] px-3 py-1.5 text-xs font-medium text-[#26372D]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-[var(--portfolio-line)] pt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export default function WorkPageClient() {
  const [activeCollection, setActiveCollection] = useState("primary");
  const [activeFilter, setActiveFilter] = useState("All");
  const [preview, setPreview] = useState(null);

  const collectionProjects = useMemo(
    () =>
      projects.filter(
        (project) => (project.tier || "primary") === activeCollection,
      ),
    [activeCollection],
  );

  const availableFilters = primaryFilters.filter(
    (filter) =>
      filter === "All" ||
      collectionProjects.some((project) => project.tags?.includes(filter)),
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return collectionProjects;
    }

    return collectionProjects.filter((project) =>
      project.tags?.includes(activeFilter),
    );
  }, [activeFilter, collectionProjects]);

  const primaryCount = projects.filter(
    (project) => (project.tier || "primary") === "primary",
  ).length;

  const smallCount = projects.filter(
    (project) => project.tier === "small",
  ).length;

  const copy = collectionCopy[activeCollection] ?? collectionCopy.primary;

  function changeCollection(collection) {
    setActiveCollection(collection);
    setActiveFilter("All");
  }

  return (
    <>
      <div className="border-y border-[var(--portfolio-line)]">
        <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Project collections"
          >
            <CollectionTab
              collection="primary"
              count={primaryCount}
              isActive={activeCollection === "primary"}
              onSelect={changeCollection}
            />

            {smallCount > 0 && (
              <CollectionTab
                collection="small"
                count={smallCount}
                isActive={activeCollection === "small"}
                onSelect={changeCollection}
              />
            )}
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {availableFilters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-3.5 py-2 text-xs font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--portfolio-accent)] ${
                    isActive
                      ? "border-[#D6E3C4] bg-[#F7F6F1] text-[#26372D]"
                      : "border-[var(--portfolio-line)] text-[var(--portfolio-muted)] hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-ink)]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between gap-6 py-10">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--portfolio-accent)]">
            {copy.eyebrow}
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[var(--portfolio-ink)]">
            {copy.title}
          </h2>
        </div>

        <p
          className="shrink-0 text-sm text-[var(--portfolio-muted)]"
          aria-live="polite"
        >
          {visibleProjects.length}{" "}
          {visibleProjects.length === 1 ? "project" : "projects"}
        </p>
      </div>

      {visibleProjects.length > 0 ? (
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <WorkCard
              key={project.slug}
              project={project}
              onPreview={setPreview}
            />
          ))}
        </div>
      ) : (
        <div className="border border-[var(--portfolio-line)] bg-[var(--portfolio-surface)] p-10 text-center">
          <p className="text-sm text-[var(--portfolio-muted)]">
            No work matches this filter.
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className="mt-5 text-sm font-medium text-[var(--portfolio-accent)] underline underline-offset-4 transition hover:text-[var(--portfolio-ink)]"
          >
            Show all work
          </button>
        </div>
      )}

      <PreviewModal preview={preview} onClose={() => setPreview(null)} />
    </>
  );
}