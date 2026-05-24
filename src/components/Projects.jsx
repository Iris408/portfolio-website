import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "JWT Authentication Dashboard",
      description:
        "Full-stack authentication platform with JWT authentication, protected routes, PostgreSQL integration, and Dockerized backend services.",
      tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/Iris408/jwt-authentication-dashboard",
      demo: "https://jwt-authentication-dashboard-sepia.vercel.app/"
    },
    {
      title: "System Health Monitor",
      description:
        "Linux monitoring tool for tracking CPU, memory, and disk utilisation with Slack alert integrations and Docker support.",
      tech: ["Python", "Linux", "Docker", "Slack API"],
      github: "https://github.com/Iris408/system-health-monitor",
      demo: ""
    },
    {
      title: "Inventory Management System",
      description:
        "Interactive inventory management dashboard with analytics, CRUD operations, filtering systems, and backend API integration.",
      tech: ["React", "FastAPI", "PostgreSQL", "TypeScript"],
      github: "https://github.com/Iris408/inventory-management-system",
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

          <h2 className="text-5xl font-bold">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
              viewport={{ once: true }}
              className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-2 hover:border-cyan-400/40 transition duration-300 overflow-hidden flex flex-col text-center"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-cyan-400/5 blur-3xl" />
              </div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center gap-3 mb-8 relative z-10">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm hover:bg-cyan-400/20 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-auto relative z-10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400 hover:text-slate-950 transition font-semibold"
                >
                  GitHub
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition font-semibold"
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