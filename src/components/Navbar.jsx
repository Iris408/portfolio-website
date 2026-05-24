import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { House } from "lucide-react";
 
export default function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);
 
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
  return (
 
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
 
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
 
        <h1 className="text-xl font-bold tracking-wide">
          Ashleigh.M
        </h1>
 
        <div className="hidden md:flex items-center gap-6 text-xl">
 
          <a
            href="#"
            onClick={scrollToTop}
            aria-label="Home"
            className="flex items-center hover:text-cyan-400 transition"
          >
            <House size={20} strokeWidth={1.5} />
          </a>
 
          <a
            href="#projects"
            className="hover:text-cyan-400 transition"
          >
            Projects
          </a>
 
          <a
            href="#about"
            className="hover:text-cyan-400 transition"
          >
            About
          </a>
 
          <a
            href="#contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </a>
 
        </div>
 
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
 
          <div className="space-y-1">
 
            <div className="w-6 h-0.5 bg-white" />
 
            <div className="w-6 h-0.5 bg-white" />
 
            <div className="w-6 h-0.5 bg-white" />
 
          </div>
 
        </button>
 
      </div>
 
      <AnimatePresence>
 
        {isOpen && (
 
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[#07111f]/95 backdrop-blur-xl"
          >
 
            <a
              href="#"
              onClick={(e) => { scrollToTop(e); setIsOpen(false); }}
              aria-label="Home"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>
 
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>
 
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              About
            </a>
 
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
 
          </motion.div>
 
        )}
 
      </AnimatePresence>
 
    </nav>
  );
}