import { motion } from "framer-motion"

const techGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Java"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "REST APIs", "SQLAlchemy", "JWT Auth", "OAuth2"],
  },
  {
    title: "Frontend",
    skills: ["React", "Vite", "Astro", "Tailwind CSS"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "SQLite"],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Docker Compose",
      "Linux",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Render",
      "Vercel",
    ],
  },
  {
    title: "Additional Development",
    skills: ["Java/Spring Boot", "PHP/Laravel", "AWS Basics", "CI/CD"],
  },
]

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-avantgarde-book text-[#F8E7FF]/90 text-2xl mb-3">
            Stack
          </p>

          <h2 className="font-avantgarde-book text-[#FFF7D6] text-5xl font-bold">
            Tools I Build With
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center">
          {techGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 hover:border-white/20 transition"
            >
              <h3 className="font-avantgarde-book text-[#FFF7D6] text-lg font-bold mb-4 text-center">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2 justify-center">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/90 font-avantgarde-book text-xs hover:bg-purple-400/15 hover:border-purple-300/30 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}