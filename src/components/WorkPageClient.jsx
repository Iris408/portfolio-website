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

function ProjectImage({ project, onPreview }) {
  if (!project.image) {
    return (
      <div className="flex h-48 items-center justify-center bg-[#E9E8E1] md:h-56">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#829084]">
            Engineering project
          </p>

          <p className="mt-3 font-serif text-xl text-[#526156]">
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
      className="group block h-48 w-full overflow-hidden bg-[#E9E8E1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#526A57] md:h-56"
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
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#8A928C]">
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
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#405544] transition hover:text-[#1E2823] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#526A57]"
          >
            {link.label}
            <span aria-hidden="true">
              {isExternal ? "↗" : "→"}
            </span>
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
    <article className="flex h-full flex-col overflow-hidden border border-[#D8D4C8] bg-[#FCFBF7] transition duration-300 hover:-translate-y-1 hover:border-[#8FA08F] hover:shadow-[0_16px_40px_rgba(30,40,35,0.08)]">
      <ProjectImage project={project} onPreview={onPreview} />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#6D7F70]">
            {project.category}
          </p>

          {project.status && (
            <span className="border border-[#B8C1B7] px-2.5 py-1 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[#617064]">
              {project.status}
            </span>
          )}
        </div>

        <h2 className="mt-4 font-serif text-2xl leading-snug text-[#1E2823]">
          {project.title}
        </h2>

        <p className="mt-4 text-sm leading-7 text-[#626A65]">
          {project.summary || project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {displayedTech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#ECEEE8] px-3 py-1.5 text-xs font-medium text-[#526156]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-[#E0DDD4] pt-6">
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
      collectionProjects.some((project) =>
        project.tags?.includes(filter),
      ),
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

  function changeCollection(collection) {
    setActiveCollection(collection);
    setActiveFilter("All");
  }

  return (
    <>
      <div className="border-y border-[#D8D4C8]">
        <div className="flex flex-col gap-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div
            className="flex flex-wrap gap-2"
            aria-label="Project collections"
          >
            <button
              type="button"
              onClick={() => changeCollection("primary")}
              aria-pressed={activeCollection === "primary"}
              className={`px-4 py-2.5 text-sm font-medium transition ${
                activeCollection === "primary"
                  ? "bg-[#526A57] text-white"
                  : "border border-[#C9CEC5] text-[#5F6861] hover:border-[#718574]"
              }`}
            >
              Primary work ({primaryCount})
            </button>

            <button
              type="button"
              onClick={() => changeCollection("small")}
              aria-pressed={activeCollection === "small"}
              className={`px-4 py-2.5 text-sm font-medium transition ${
                activeCollection === "small"
                  ? "bg-[#526A57] text-white"
                  : "border border-[#C9CEC5] text-[#5F6861] hover:border-[#718574]"
              }`}
            >
              Smaller builds ({smallCount})
            </button>
          </div>

          <div
            className="flex flex-wrap gap-2"
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
                  className={`rounded-full border px-3.5 py-2 text-xs font-medium transition ${
                    isActive
                      ? "border-[#526A57] bg-[#E3E9E1] text-[#26372D]"
                      : "border-[#C9CEC5] text-[#5F6861] hover:border-[#718574]"
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
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#6D7F70]">
            {activeCollection === "primary"
              ? "Production-style portfolio"
              : "Learning and focused builds"}
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#1E2823]">
            {activeCollection === "primary"
              ? "Primary engineering work"
              : "Smaller engineering projects"}
          </h2>
        </div>

        <p className="shrink-0 text-sm text-[#69706B]" aria-live="polite">
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
        <div className="border border-[#D8D4C8] bg-[#FCFBF7] p-10 text-center">
          <p className="text-sm text-[#69706B]">
            No work matches this filter.
          </p>

          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className="mt-5 text-sm font-medium text-[#405544] underline underline-offset-4"
          >
            Show all work
          </button>
        </div>
      )}

      <PreviewModal
        preview={preview}
        onClose={() => setPreview(null)}
      />
    </>
  );
}