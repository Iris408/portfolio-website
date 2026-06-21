// EN: Client wrapper for the /projects Astro page — holds grid + modal state
// JP: /projects Astro ページ用クライアントラッパー — グリッドとモーダルの state を管理する

import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import PreviewModal from "./PreviewModal.jsx";

export default function ProjectsPageClient() {
  // EN: Modal state — null when closed, { image, title } when open
  // JP: モーダルの状態 — 閉じているときは null、開いているときは { image, title }
  const [preview, setPreview] = useState(null);

  return (
    <>
      <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
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

      <PreviewModal preview={preview} onClose={() => setPreview(null)} />
    </>
  );
}