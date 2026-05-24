export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

    <div className="absolute inset-0 -z-10 flex justify-center">
      <div className="w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />
    </div>

        <p className="text-cyan-400 font-medium mb-4">
          Junior Full-Stack / DevOps Engineer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Building reliable, modern web applications.
        </h1>

        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          I build practical projects using React, TypeScript, FastAPI,
          PostgreSQL, Docker, Python, and Linux automation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition"
          >
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}