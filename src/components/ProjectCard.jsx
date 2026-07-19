import ExpandableDescription from "./ExpandableDescription";

// EN: Reusable project card component — used by Projects.jsx and ProjectsPageClient.jsx
// JP: 再利用可能なプロジェクトカードコンポーネント — Projects.jsx と ProjectsPageClient.jsx で使用

export default function ProjectCard({
  title,
  category,
  description,
  tech,
  github,
  demo,
  image,
  detailsPath,
  onPreview,
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden border border-white/15 bg-white/5 p-6 transition duration-300 hover:border-[#A5B5A3]/60">
      {/* EN: Category label */}
      {/* JP: カテゴリラベル */}
      <span className="relative z-10 mb-6 font-mono text-xs uppercase tracking-[0.2em] text-[#A5B5A3]">
        {category}
      </span>

      {/* EN: Project title */}
      {/* JP: プロジェクトタイトル */}
      <h3 className="relative z-10 mb-4 min-h-[3.5rem] text-xl font-normal leading-snug text-slate-100">
        {title}
      </h3>

      {/* EN: Project description */}
      {/* JP: プロジェクト説明 */}
      <ExpandableDescription
        description={description}
        maxLength={150}
      />  

      {/* EN: Technology tags */}
      {/* JP: 技術タグ */}
      <div className="relative z-10 mb-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="border border-[#97A4AD]/20 bg-transparent px-3 py-1 text-xs font-light text-[#D8E0DD]"
          >
            {item}
          </span>
        ))}
      </div>

      {detailsPath && (
        <a
          href={detailsPath}
          className="inline-flex h-11 items-center justify-center border border-[#A5B5A3]/40 bg-transparent px-4 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#D8E0DD] transition hover:border-[#A5B5A3] hover:text-white"
        >
          Case Study →
        </a>
      )}

      {/* EN: Action buttons */}
      {/* JP: アクションボタン */}
      <div className="relative z-10 mt-auto grid grid-cols-1 gap-3 pt-6 sm:grid-cols-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-4 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-[#C4D1C1] hover:text-[#243034]"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-4 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-[#C4D1C1] hover:text-[#243034]"
          >
            Live Demo
          </a>
        )}

        {image && onPreview && (
          <button
            type="button"
            onClick={() => onPreview(image, title)}
            className="inline-flex h-11 items-center justify-center border border-[#A5B5A3]/40 bg-[#A5B5A3] px-4 text-center text-xs font-normal uppercase tracking-[0.14em] text-[#243034] transition hover:border-white hover:bg-[#C4D1C1] hover:text-[#243034]"
          >
            Preview
          </button>
        )}
      </div>
    </div>
  );
}