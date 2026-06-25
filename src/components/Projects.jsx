// EN: Homepage selected projects section — compact horizontal rows
// JP: ホームページの選抜プロジェクトセクション — 横長のコンパクト表示

import { useState } from "react";
import { projects } from "../data/projects.js";
import PreviewModal from "./PreviewModal.jsx";

function SelectedProjectRow({ project, index, onPreview }) {
  return (
    <article className="grid gap-6 border border-white/15 bg-white/5 p-5 transition hover:border-[#A5B5A3]/60 lg:grid-cols-[auto_1fr_auto] lg:items-center">
      {/* EN: Project number */}
      {/* JP: プロジェクト番号 */}
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#A5B5A3]">
        0{index + 1}
      </p>

      {/* EN: Project summary */}
      {/* JP: プロジェクト概要 */}
      <div>
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
          {project.category}
        </p>

        <h3 className="mb-2 text-xl font-normal text-slate-100">
          {project.title}
        </h3>

        <p className="max-w-3xl text-sm font-light leading-relaxed text-[#D8E0DD]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((item) => (
            <span
              key={item}
              className="border border-[#97A4AD]/20 px-2.5 py-1 text-xs font-light text-[#D8E0DD]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* EN: Project actions */}
      {/* JP: プロジェクトアクション */}
      <div className="grid gap-3 sm:grid-cols-3 lg:w-[25rem]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-4 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-white"
          >
            GitHub
          </a>
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-4 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-white"
          >
            Demo
          </a>
        )}

        {project.image && (
          <button
            type="button"
            onClick={() =>
              onPreview({
                image: project.image,
                images: project.images,
                title: project.title,
              })
            }
            className="inline-flex h-10 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-4 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-white"
          >
            Preview
          </button>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  // EN: Show only the first 3 featured projects on the homepage
  // JP: ホームページでは featured が true の最初の3件だけを表示します
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  // EN: Modal state
  // JP: モーダルの状態
  const [preview, setPreview] = useState(null);

  return (
    <section id="projects" className="border-t border-white/20 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-[#A5B5A3]">
            § 03 / Selected Work
          </p>

          <h2 className="max-w-3xl text-3xl font-light leading-tight text-slate-100 md:text-5xl">
            Practical projects focused on backend systems, full-stack workflows,
            and accessible product design.
          </h2>
        </div>

        <div className="grid gap-4">
          {featured.map((project, index) => (
            <SelectedProjectRow
              key={project.title}
              project={project}
              index={index}
              onPreview={setPreview}
            />
          ))}
        </div>

        {/* EN: Link to the full projects page */}
        {/* JP: 全プロジェクトページへのリンク */}
        <div className="mt-10">
          <a
            href="/projects"
            className="inline-flex border border-[#A5B5A3]/40 bg-[#A5B5A3] px-6 py-3 text-sm font-normal uppercase tracking-[0.18em] text-[#243034] transition hover:border-white hover:bg-white"
          >
            View all projects →
          </a>
        </div>
      </div>

      <PreviewModal preview={preview} onClose={() => setPreview(null)} />
    </section>
  );
}