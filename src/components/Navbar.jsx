import { useEffect, useState } from "react";
import { WiSunrise, WiSunset } from "react-icons/wi";

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

function ThemeToggle({ isDark, onToggle }) {
  const Icon = isDark ? WiSunrise : WiSunset;

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-10 w-10 items-center justify-center border border-[var(--portfolio-line)] bg-[#F7F6F1]/70 text-[var(--portfolio-ink)] transition hover:border-[#58705C] hover:text-[#58705C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C] dark:border-[#F7F6F1]/20 dark:bg-[#111412]/60 dark:text-[#F7F6F1] dark:hover:border-[#AAB8AD] dark:hover:text-[#AAB8AD]"
    >
      <Icon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "The Build Room", href: "/the-build-room" },
    { label: "About", href: "/about" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    const shouldUseDark = savedTheme ? savedTheme === "dark" : false;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    document.documentElement.classList.toggle("light", !shouldUseDark);

    setIsDark(shouldUseDark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;

    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.classList.toggle("light", !nextIsDark);

    localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <nav
      className="w-full border-b border-[var(--portfolio-line)] bg-[#F7F6F1]/90 text-[var(--portfolio-ink)] backdrop-blur transition dark:border-[#F7F6F1]/15 dark:bg-[#111412]/88 dark:text-[#F7F6F1]"
      aria-label="Primary navigation"
    >
      <div className="flex w-full items-center justify-between px-6 py-4 md:px-10">
        <a
          href="/"
          className="flex flex-col leading-none transition hover:text-[#58705C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C] dark:hover:text-[#AAB8AD]"
        >
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.25em]">
            Ashleigh Magloire
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <div className="flex items-center gap-6 text-sm tracking-[0.12em] font-normal">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-[#58705C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C] dark:hover:text-[#AAB8AD]"
              >
                {link.href === "/the-build-room" ? (
                  <>
                    <span className="hidden md:inline lg:hidden">TBR</span>
                    <span className="hidden lg:inline">The Build Room</span>
                  </>
                ) : (
                  link.label
                )}
              </a>
            ))}
          </div>

          <a
            href="https://github.com/Iris408"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Ashleigh's GitHub profile"
            className="transition hover:text-[#58705C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C] dark:hover:text-[#AAB8AD]"
          >
            <GitHubIcon />
          </a>

          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

          <a
            href="/#contact"
            className="bg-[#58705C] px-5 py-2.5 text-sm font-medium text-white tracking-[0.1em] transition hover:bg-[#405544] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#405544] dark:bg-[#6F896F] dark:hover:bg-[#58705C]"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="relative h-11 w-11 text-[var(--portfolio-ink)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#58705C] dark:text-[#F7F6F1]"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
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
      </div>

      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[var(--portfolio-line)] bg-[#F7F6F1] px-6 pb-7 pt-5 md:hidden dark:border-[#F7F6F1]/15 dark:bg-[#111412]"
        >
          <div className="flex flex-col gap-5">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base transition hover:text-[#58705C] dark:hover:text-[#AAB8AD]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://github.com/Iris408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base transition hover:text-[#58705C] dark:hover:text-[#AAB8AD]"
            >
              GitHub
            </a>

            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-fit items-center gap-2 bg-[#58705C] px-4 py-2.5 text-xs font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#405544]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}