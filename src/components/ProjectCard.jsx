// EN: Reusable project card component — used by Projects.jsx (homepage) and ProjectsPageClient.jsx (/projects page)
// JP: 再利用可能なプロジェクトカードコンポーネント — Projects.jsx（ホーム）と ProjectsPageClient.jsx（/projects ページ）で使用

export default function ProjectCard({ title, category, description, tech, github, demo, image, onPreview }) {
  return (
    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-2 hover:border-purple-400/40 transition duration-300 overflow-hidden flex flex-col">
      {/* EN: Glow effect on hover */}
      {/* JP: ホバー時のグロー効果 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-purple-400/5 blur-3xl" />
      </div>

      {/* EN: Category label */}
      {/* JP: カテゴリラベル */}
      <span className="text-xs font-mono text-purple-400/70 tracking-widest uppercase mb-6 relative z-10">
        {category}
      </span>

      <h3 className="text-xl font-avantgarde-book text-slate-200 font-bold mb-3 relative z-10 leading-snug">
        {title}
      </h3>

      <p className="text-slate-200 font-avantgarde-book mb-6 leading-relaxed relative z-10 text-sm">
        {description}
      </p>

      {/* EN: Technology tags */}
      {/* JP: 技術タグ */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
        {tech.map((item) => (
          <span
            key={item}
            className="px-3 py-1 rounded-full bg-pink-500/10 border border-purple-400/20 font-avantgarde-book text-purple-300 text-xs"
          >
            {item}
          </span>
        ))}
      </div>

      {/* EN: Action buttons — GitHub, Live Demo, Preview */}
      {/* JP: アクションボタン — GitHub、ライブデモ、プレビュー */}
      <div className="flex justify-center gap-4 mt-auto relative z-10">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full border bg-purple-400/20 border-pink-300/20 font-avantgarde-book font-semibold text-pink-300/70 hover:bg-pink-300/70 hover:text-pink-950 transition text-sm"
        >
          GitHub
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full border bg-purple-400/20 border-pink-300/30 font-avantgarde-book font-semibold text-purple-300/90 hover:bg-pink-950 hover:text-pink-100/70 transition text-sm"
          >
            Live Demo
          </a>
        )}

        {/* EN: Preview button calls onPreview prop — no data attributes needed */}
        {/* JP: プレビューボタンは onPreview プロップを呼び出す — data 属性は不要 */}
        {image && onPreview && (
          <button
            type="button"
            onClick={() => onPreview(image, title)}
            className="px-5 py-2 rounded-full border bg-purple-400/20 border-pink-300/30 font-avantgarde-book font-semibold text-purple-300/90 hover:bg-pink-300/70 hover:text-pink-950 transition text-sm"
          >
            Preview
          </button>
        )}
      </div>
    </div>
  );
}