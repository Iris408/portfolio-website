// EN: Client wrapper for the /projects Astro page — holds filters, grid, and modal state
// JP: /projects Astro ページ用クライアントラッパー — フィルター、グリッド、モーダルの state を管理する

import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import PreviewModal from "./PreviewModal.jsx";

const filters = [
  "All",
  "Full-Stack",
  "Backend",
  "Frontend",
  "DevOps",
  "Python",
  "React",
  "Java",
  "Docker",
  "PostgreSQL",
  "Accessibility",
  "Deployed",
];

export default function ProjectsPageClient() {
  // EN: Active project filter
  // JP: 現在選択されているプロジェクトフィルター
  const [activeFilter, setActiveFilter] = useState("All");

  // EN: Modal state — null when closed, { image, title } when open
  // JP: モーダルの状態 — 閉じているときは null、開いているときは { image, title }
  const [preview, setPreview] = useState(null);

  // EN: Filter projects using tags. "All" shows everything.
  // JP: tags を使ってプロジェクトをフィルターします。"All" はすべて表示します。
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags?.includes(activeFilter));

  return (
    <>
      {/* EN: Project filter buttons */}
      {/* JP: プロジェクトフィルターボタン */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`border px-4 py-2 text-xs uppercase tracking-[0.16em] transition ${
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

      {/* EN: Empty state when no projects match the selected filter */}
      {/* JP: 選択したフィルターに一致するプロジェクトがない場合の表示 */}
      {filteredProjects.length === 0 && (
        <div className="mt-8 border border-white/15 bg-white/5 p-6 text-center text-sm text-[#D8E0DD]">
          No projects found for this filter.
        </div>
      )}

      <PreviewModal preview={preview} onClose={() => setPreview(null)} />
    </>
  );
}