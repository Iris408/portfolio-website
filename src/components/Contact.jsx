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
 
        <p className="font-avantgarde-book text-white text-3xl mb-3">
          Contact
        </p>
 
        <h2 className="font-avantgarde-book text-5xl font-bold mb-6">
          Let's Work Together!
        </h2>
 
        <p className="font-avantgarde-book text-slate-300 text-lg mb-10">
         Open to junior backend, full-stack, and software engineering opportunities 
         across remote, hybrid, and international teams.
        </p>
 
        <div className="flex flex-col sm:flex-row justify-center gap-6">
 
          <a
            href="https://github.com/Iris408"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-avantgarde-book hover:border-purple-400/40 hover:bg-purple-400/10 transition"
          >
            GitHub
          </a>
 
          <a
            href="https://linkedin.com/in/ashleigh-magloire"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-avantgarde-book hover:border-purple-400/40 hover:bg-purple-400/10 transition"
          >
            LinkedIn
          </a>
 
          <a
            href="/Ashleigh_Magloire_FullStack_Resume.pdf"
            download="Ashleigh_Magloire_FullStack_Resume.pdf"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-avantgarde-book hover:border-purple-400/40 hover:bg-purple-400/10 transition"
          >
            Download CV
          </a>
 
          <a
            href="mailto:ashmagloire45@icloud.com"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 font-avantgarde-book hover:border-purple-400/40 hover:bg-purple-400/10 transition"
          >
            Email Me
          </a>
 
        </div>
 
      </motion.div>
    </section>
  );
}
 
