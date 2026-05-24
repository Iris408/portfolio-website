import { motion } from "framer-motion";
 
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
 
        <p className="text-cyan-400 mb-3">
          Contact
        </p>
 
        <h2 className="text-5xl font-bold mb-6">
          Let's Work Together!
        </h2>
 
        <p className="text-slate-300 text-lg mb-10">
         Open to junior backend, full-stack, and software engineering opportunities across 
         remote, hybrid, and international teams.
        </p>
 
        <div className="flex flex-col sm:flex-row justify-center gap-6">
 
          <a
            href="https://github.com/Iris408"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          >
            GitHub
          </a>
 
          <a
            href="https://linkedin.com/in/ashleigh-magloire"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          >
            LinkedIn
          </a>
 
          <a
            href="/DevOps_Resume.pdf"
            download
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          >
            Download CV
          </a>
 
          <a
            href="mailto:ashmagloire45@icloud.com"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          >
            Email Me
          </a>
 
        </div>
 
      </motion.div>
    </section>
  );
}
 
