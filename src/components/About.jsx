import { motion } from "framer-motion";
import Stack from "./Stack";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >

        <p className="font-avantgarde-book text-white text-3xl mb-3">
          About Me
        </p>

        <h2 className="font-avantgarde-book text-purple-900/40 text-5xl font-bold mb-8">
          Backend, Full-Stack & DevOps Focused
        </h2>

        <p className="space-y-5 font-avantgarde-book text-slate-100 text-lg leading-relaxed max-w-4xl mx-auto">

          <p>
            I am a Computer Science Master’s student building practical full-stack,
            backend, and DevOps-focused projects.
          </p>

          <p>
            My recent work includes JWT authentication systems, REST APIs, Linux
            monitoring tools, Dockerized applications, PostgreSQL-backed backends,
            and React/TypeScript dashboards.
          </p>

          <p>
            I enjoy building clean, maintainable applications that connect
            user-friendly frontend interfaces with reliable backend services.
          </p>
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
        </motion.div>

      </motion.div>
    </section>
  );
}