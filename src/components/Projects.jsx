import { motion } from "framer-motion";
 
export default function Projects() {
  const projects = [
  {
    number: "01",
    category: "Full-Stack · Backend",
    title: "Inventory Management System",
    description:
      "Interactive inventory management dashboard with analytics, CRUD operations, filtering systems, and backend API integration.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/Iris408/inventory-management-system",
    demo: ""
  },

  {
    number: "02",
    category: "Full-Stack · Auth",
    title: "JWT Authentication Dashboard",
    description:
      "Full-stack authentication platform with JWT authentication, protected routes, PostgreSQL integration, and Dockerized backend services.",
    tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/Iris408/jwt-authentication-dashboard",
    demo: "https://jwt-authentication-dashboard-sepia.vercel.app/"
  },

  {
    number: "03",
    category: "DevOps · Monitoring",
    title: "System Health Monitor",
    description:
      "Linux monitoring tool for tracking CPU, memory, and disk utilisation with Slack alert integrations and Docker support.",
    tech: ["Python", "Linux", "Docker", "Slack API"],
    github: "https://github.com/Iris408/system-health-monitor",
    demo: ""
  }
];
 
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
          <p className="text-cyan-400 mb-3">Portfolio</p>
          <h2 className="text-5xl font-bold">Featured Projects</h2>
        </motion.div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-cyan-400/5 blur-3xl" />
              </div>
 
              {/* Top anchor: number + category */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className="text-4xl font-bold text-white/10 select-none">
                  {project.number}
                </span>
                <span className="text-xs font-mono text-cyan-400/70 tracking-widest uppercase">
                  {project.category}
                </span>
              </div>
 
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 relative z-10 leading-snug">
                {project.title}
              </h3>
 
              {/* Description */}
              <p className="text-slate-400 mb-6 leading-relaxed relative z-10 text-sm">
                {project.description}
              </p>
 
              {/* Tech tags — pinned above buttons */}
              <div className="flex flex-wrap justify-center gap-2 mb-6 relative z-10">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs hover:bg-cyan-400/20 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
 
              {/* Buttons — always at the bottom */}
              <div className="flex justify-center gap-4 mt-auto relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition font-semibold text-sm"
                >
                  GitHub
                </a>
 
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition font-semibold text-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
 
            </motion.div>
          ))}
        </div>
 
      </div>
    </section>
  );
}