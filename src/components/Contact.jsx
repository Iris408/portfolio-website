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
 
        <p className="font-avantgarde-book text-white text-6xl font-bold mb-10">
          Contact
        </p>
 
        <h2 className="font-avantgarde-book text-4xl mb-8">
          Let's Work Together!
        </h2>
 
        <p className="font-avantgarde-book text-slate-300 text-xl font-semibold mb-10">
         Seeking junior full-stack and backend roles. 
         Open to remote, hybrid, and international opportunites.
        </p>
 
        <div className="flex flex-col sm:flex-row justify-center gap-6">
 
          <a
            href="https://github.com/Iris408"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[150px] px-6 py-3 rounded-full border border-white/25 bg-pink-800/30 text-pink-300/70 font-avantgarde-book font-semibold hover:bg-pink-500/40 hover:text-white transition"
          >
            GitHub
          </a>
 
          <a
            href="https://linkedin.com/in/ashleigh-magloire"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[150px] px-6 py-3 rounded-full border border-white/25 bg-pink-800/30 text-pink-300/70 font-avantgarde-book font-semibold hover:bg-pink-500/40 hover:text-white transition"
          >
            LinkedIn
          </a>
 
          <a
            href="/Ashleigh_Magloire_FullStack_Resume.pdf"
            download="Ashleigh_Magloire_FullStack_Resume.pdf"
            className="min-w-[170px] px-7 py-3 rounded-full border border-pink-200/70 bg-gradient-to-r from-pink-300 to-purple-200 text-purple-950 font-avantgarde-book font-bold shadow-lg shadow-white/20 hover:scale-105 hover:bg-white hover:text-purple-700/40 transition"
          >
            Download CV
          </a>
 
          <a
            href="mailto:ashmagloire45@icloud.com"
            className="min-w-[170px] px-7 py-3 rounded-full border border-pink-200/70 bg-gradient-to-r from-pink-300 to-purple-200 text-purple-950 font-avantgarde-book font-bold shadow-lg shadow-white/20 hover:scale-105 hover:text-purple-700/40 transition"
          >
            Email Me
          </a>
 
        </div>
 
      </motion.div>
    </section>
  );
}
 
