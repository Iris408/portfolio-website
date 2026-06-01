import { motion } from "framer-motion";

// EN: Import projects from the shared data file
// JP: 共有データファイルからプロジェクト情報を読み込みます
import { projects } from "../data/projects.js";

export default function Projects() {
  // EN: Show only the first 3 featured projects on the homepage
  // JP: ホームページでは featured が true の最初の3件だけを表示します
  const featured = projects.filter((p) => p.featured).slice(0, 3);

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
          <p className="text-purple-400 mb-3">Portfolio</p>
          <h2 className="text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-2 hover:border-purple-400/40 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* EN: Glow effect on hover */}
              {/* JP: ホバー時のグロー効果 */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-purple-400/5 blur-3xl" />
              </div>

              <span className="text-xs font-mono text-purple-400/70 tracking-widest uppercase mb-6 relative z-10">
                {project.category}
              </span>

              <h3 className="text-xl text-slate-200 font-bold mb-3 relative z-10 leading-snug">
                {project.title}
              </h3>

              <p className="text-slate-200 mb-6 leading-relaxed relative z-10 text-sm">
                {project.description}
              </p>

              {/* EN: Technology tags */}
              {/* JP: 技術タグ */}
              <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-pink-500/10 border border-purple-400/20 font-avantgarde-book text-purple-300 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* EN: Project action buttons */}
              {/* JP: プロジェクト用ボタン */}
              <div className="flex justify-center gap-4 mt-auto relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border bg-purple-400/20 border-pink-300/20 font-avantgarde-book font-semibold text-pink-300/70 hover:bg-pink-300/70 hover:text-pink-950 transition text-sm"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full border bg-purple-400/20 border-pink-300/30 font-avantgarde-book font-semibold text-purple-300/90 hover:bg-pink-950 hover:text-pink-100/70 transition text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
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
            className="px-8 py-3 rounded-full border bg-purple-400/20 border-pink-300/20 font-avantgarde-book font-semibold text-pink-300/70 hover:bg-pink-300/70 hover:text-pink-950 transition text-lg"
          >
            View All Projects →
          </a>
        </motion.div>
      </div>
    </section>
  );
}