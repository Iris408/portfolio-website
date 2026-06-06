import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { House } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide cursor-pointer">
          Ashleigh M
        </h1>

        <div className="hidden md:flex items-center gap-6 text-xl">
          <a
            href="/"
            aria-label="Home"
            className="flex items-center hover:text-purple-400/60 transition"
          >
            <House size={25} strokeWidth={1.5} />
          </a>

          <a
            href="/#about"
            className="hover:text-purple-400/60 transition"
          >
            About
          </a>

          <a
            href="/#stack"
            className="hove:text-purple-400/60 transition"
          >
            Stack 
          </a>  

          {/* EN: Link to the separate projects page */}
          {/* JP: 別ページのProjectsページへ移動します */}
          <a
            href="/projects"
            className="hover:text-purple-400/60 transition"
          >
            Projects
          </a>

          <a
            href="/#contact"
            className="hover:text-purple-400/60 transition"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
          aria-label="Open navigation menu"
        >
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white" />
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
            className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-[#0a1a0f]/95 backdrop-blur-xl"
          >
            <a
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400/60 transition"
            >
              Home
            </a>

            <a
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400/60 transition"
            >
              About
            </a>

            <a
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400/60 transition"
            >
              Stack
            </a>

            {/* EN: Mobile link to the separate projects page */}
            {/* JP: モバイル用のProjects別ページリンク */}
            <a
              href="/projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400/60 transition"
            >
              Projects
            </a>

            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-purple-400/60 transition"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}