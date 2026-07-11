import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import PreviewModal from "./PreviewModal.jsx";

const primaryFilters = [
  "Backend",
  "Frontend",
  "Full-Stack",
  "DevOps",
  "Deployed",
];

const moreFilterGroups = [
  {
    label: "Domain / Focus",
    tags: ["Accessibility", "Auth", "Admin Dashboard", "Automation", "CI/CD", "Beta"],
  },
  {
    label: "Stack",
    tags: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "React",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "SQLAlchemy",
      "Vite",
    ],
  },
];

const getTagCount = (tag) => {
  return projects.filter((project) => project.tags?.includes(tag)).length;
};

export default function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [preview, setPreview] = useState(null);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags?.includes(activeFilter));

  const filterButtonClass = (filter) =>
    `border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
      activeFilter === filter
        ? "border-[#A5B5A3] bg-[#A5B5A3] text-[#243034]"
        : "border-white/15 bg-white/5 text-[#D8E0DD] hover:border-[#A5B5A3]/60 hover:text-white"
    }`;

  return (
    <>
      {/* EN: Minimal primary filters */}
      {/* JP: ミニマルな主要フィルター */}
      <div className="mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => setActiveFilter("All")}
            className={filterButtonClass("All")}
          >
            All
            <span className="ml-2 opacity-70">({projects.length})</span>
          </button>

          {primaryFilters
            .filter((filter) => getTagCount(filter) > 0)
            .map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={filterButtonClass(filter)}
              >
                {filter}
                <span className="ml-2 opacity-70">
                  ({getTagCount(filter)})
                </span>
              </button>
            ))}

          <button
            type="button"
            onClick={() => setShowMoreFilters(!showMoreFilters)}
            className="border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#D8E0DD] transition hover:border-[#A5B5A3]/60 hover:text-white"
          >
            {showMoreFilters ? "Hide filters" : "More filters"}
          </button>
        </div>

        {showMoreFilters && (
          <div className="mt-6 space-y-5 border-t border-white/10 pt-6">
            {moreFilterGroups.map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-center font-mono text-xs uppercase tracking-[0.25em] text-[#A5B5A3]">
                  {group.label}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {group.tags
                    .filter((tag) => getTagCount(tag) > 0)
                    .map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => setActiveFilter(tag)}
                        className={filterButtonClass(tag)}
                      >
                        {tag}
                        <span className="ml-2 opacity-70">
                          ({getTagCount(tag)})
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="mt-5 text-center text-sm font-light text-[#D8E0DD]">
          Showing{" "}
          <span className="font-normal text-[#A5B5A3]">
            {filteredProjects.length}
          </span>{" "}
          project{filteredProjects.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* EN: Filtered project grid */}
      {/* JP: フィルター後のプロジェクトグリッド */}
      <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.title} className="h-full">
            <ProjectCard
              {...project}
              onPreview={(image, title) =>
                setPreview({
                  image,
                  images: project.images,
                  title,
                })
              }
            />
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-8 border border-white/15 bg-white/5 p-6 text-center text-sm text-[#D8E0DD]">
          No projects found for this filter.
        </div>
      )}

      <PreviewModal preview={preview} onClose={() => setPreview(null)} />
    </>
  );
}