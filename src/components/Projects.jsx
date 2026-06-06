// EN: Homepage featured projects section — shows up to 3 featured projects and links to /projects
// JP: ホームページのフィーチャープロジェクトセクション — featured な最大3件を表示し /projects へリンクする

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";
import PreviewModal from "./PreviewModal.jsx";

export default function Projects() {
  // EN: Show only the first 3 featured projects on the homepage
  // JP: ホームページでは featured が true の最初の3件だけを表示します
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  // EN: Modal state — null when closed, { image, title } when open
  // JP: モーダルの状態 — 閉じているときは null、開いているときは { image, title }
  const [preview, setPreview] = useState(null);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="font-avantgarde-book text-purple-400 mb-3">Portfolio</p>
          <h2 className="font-avantgarde-book text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                {...project}
                onPreview={(image, title) => setPreview({ image, title })}
              />
            </motion.div>
          ))}
        </div>

        {/* EN: Link to the full projects page */}
        {/* JP: 全プロジェクトページへのリンク */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="/projects"
            className="px-8 py-3 rounded-full border bg-purple-400/20 border-pink-300/20 text-xl font-avantgarde-book font-semibold text-pink-300/70 hover:bg-pink-300/70 hover:text-pink-950"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>

      {/* EN: Shared modal — receives state from this component */}
      {/* JP: 共有モーダル — このコンポーネントの state を受け取る */}
      <PreviewModal preview={preview} onClose={() => setPreview(null)} />
    </section>
  );
}