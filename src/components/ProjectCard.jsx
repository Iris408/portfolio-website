export default function ProjectCard({
  title,
  description,
  tech,
  github,
  demo
}) {
  return (

    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-2 hover:border-purple-400/40 transition duration-300 overflow-hidden">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
      <div className="absolute inset-0 bg-purple-400/5 blur-3xl" />
    </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-slate-300 mb-5 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">

        {tech.map((item) => (
          <span className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-400/20 text-purple-300 text-sm hover:bg-purple-400/20 transition">
            {item}
          </span>
        ))}

      </div>

      <div className="flex gap-4">

        <a
          href={github}
          target="_blank"
          className="text-white hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href={demo}
          target="_blank"
          className="text-white hover:text-white transition"
        >
          Live Demo
        </a>

      </div>

    </div>
  );
}