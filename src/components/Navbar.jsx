import { useState } from "react";

function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-0 top-0 z-50 w-full border-b border-white/40 bg-[#2F3A3E]">
      <div className="flex w-full items-center justify-between px-8 py-4 md:px-12">
        {/* EN: Name / site identity */}
        {/* JP: 名前 / サイトの識別名 */}
        <a
          href="/"
          className="flex items-center gap-3 text-xs font-normal tracking-[0.18em] text-slate-100 transition hover:text-[#A5B5A3]"
        >
          <CodeIcon />
          <span>Engineering Lab - Ashleigh M</span>
        </a>

        {/* EN: Desktop navigation */}
        {/* JP: デスクトップ用ナビゲーション */}
        <div className="hidden items-center gap-6 text-sm font-light uppercase tracking-[0.16em] text-slate-100 md:flex">
          <a
            href="/"
            aria-label="Home"
            className="flex items-center transition hover:text-[#A5B5A3]"
          >
            Home
          </a>

          <a href="/about" className="transition hover:text-[#A5B5A3]">
            About
          </a>

          <a href="/projects" className="transition hover:text-[#A5B5A3]">
            Projects
          </a>

          <a href="/#log" className="transition hover:text-[#A5B5A3]">
            Log
          </a>

          <a href="/#contact" className="transition hover:text-[#A5B5A3]">
            Contact
          </a>
        </div>

        {/* EN: Mobile menu button that changes from hamburger to X */}
        {/* JP: ハンバーガーメニューからXに変わるモバイルボタン */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative h-8 w-8 text-white md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <span
            className={`absolute left-1 top-2 h-0.5 w-6 bg-white transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`absolute left-1 top-4 h-0.5 w-6 bg-white transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute left-1 top-6 h-0.5 w-6 bg-white transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* EN: Mobile navigation */}
      {/* JP: モバイル用ナビゲーション */}
      {isOpen && (
        <div className="flex flex-col gap-4 border-t border-white/20 bg-[#2F3A3E] px-8 pb-6 pt-2 text-sm font-light uppercase tracking-[0.16em] text-slate-100 md:hidden">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-[#A5B5A3]"
          >
            Home
          </a>

          <a
            href="/about"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-[#A5B5A3]"
          >
            About
          </a>

          <a
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-[#A5B5A3]"
          >
            Projects
          </a>

          <a
            href="/#log"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-[#A5B5A3]"
          >
            Log
          </a>

          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="transition hover:text-[#A5B5A3]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}