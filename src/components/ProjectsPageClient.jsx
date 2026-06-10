// EN: Client wrapper for the /projects Astro page — holds grid + modal state
// JP: /projects Astro ページ用クライアントラッパー — グリッドとモーダルの state を管理する

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import PreviewModal from "./PreviewModal.jsx";

export default function ProjectsPageClient() {
  // EN: Modal state — null when closed, { image, title } when open
  // JP: モーダルの状態 — 閉じているときは null、開いているときは { image, title }
  const [preview, setPreview] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              {...project}
              onPreview={(image, title) => setPreview(project)}
            />
          </motion.div>
        ))}
      </div>

      {/* EN: Shared modal — receives state from this wrapper */}
      {/* JP: 共有モーダル — このラッパーの state を受け取る */}
      <PreviewModal preview={preview} onClose={() => setPreview(null)} />
    </>
  );
}