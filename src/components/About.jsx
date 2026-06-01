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

        <p className="font-avantgarde-book text-cyan-400 text-3xl mb-3">
          About Me
        </p>

        <h2 className="font-avantgarde-book text-5xl font-bold mb-8">
          Backend, Full-Stack & DevOps Focused
        </h2>

        <p className="font-avantgarde-book text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto">

          I am currently building practical full-stack,
          backend, and DevOps-focused projects while studying for a Master’s degree in
          Computer Science. My recent work includes authentication systems,
          Linux monitoring tools, Dockerized applications, REST APIs,
          and interactive frontend dashboards using React and TypeScript.

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