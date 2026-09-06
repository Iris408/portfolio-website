import { useState } from "react";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.92c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.94a9.3 9.3 0 0 1 2.5.35c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.22 10.22 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "The Build Room", href: "/the-build-room" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b border-[#D8D4C8] bg-[#F7F6F1]/95 text-[#1E2823] backdrop-blur"
      aria-label="Primary navigation"
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/"
          className="flex flex-col leading-none transition hover:text-[#58705C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C]"
        >
          <span className="text-base font-medium tracking-[0.04em]">
            Ashleigh M
          </span>

          <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-[#69706B]">
            Software Engineer
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <div className="flex items-center gap-6 text-sm font-normal">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#58705C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/Iris408"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ashleigh's GitHub profile"
            className="transition hover:text-[#58705C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C]"
          >
            <GitHubIcon />
          </a>

          <a
            href="/#contact"
            className="rounded-sm bg-[#58705C] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#405544] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#405544]"
          >
            Get in touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="relative h-11 w-11 text-[#1E2823] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58705C] md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          <span
            className={`absolute left-2 top-3 h-0.5 w-7 bg-current transition duration-300 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`absolute left-2 top-5 h-0.5 w-7 bg-current transition duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          <span
            className={`absolute left-2 top-7 h-0.5 w-7 bg-current transition duration-300 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#D8D4C8] bg-[#F7F6F1] px-6 pb-7 pt-5 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base transition hover:text-[#58705C]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://github.com/Iris408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base transition hover:text-[#58705C]"
            >
              GitHub
            </a>

            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-fit items-center gap-2 bg-[#9A6046] px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#7F4E39]"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}