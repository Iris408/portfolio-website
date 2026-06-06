import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[500px] h-[500px] bg-white/20 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-purple-900/40 font-medium md:text-4xl mb-4"
        >
          Junior Backend & Full-Stack Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-200 text-5xl md:text-7xl font-bold leading-tight mb-10"
        >
          Building reliable, modern web applications.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-200 text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Building practical full-stack applications using React, TypeScript, 
          FastAPI, PostgreSQL, Docker, Python, and Linux.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >

          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-white/40 bg-purple-900/40 text-gray-200 font-semibold hover:bg-purple-400/20 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-white/40 hover:bg-white/20 transition"
          >
            Contact Me
          </a>

        </motion.div>

      </motion.div>

    </section>
  );
}