function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.91c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.93a9.3 9.3 0 0 1 2.5.35c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M6.5 8.25H3V21h3.5V8.25ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.7c0-3.85-2.05-5.65-4.8-5.65a4.15 4.15 0 0 0-3.75 2.05V8.25H9V21h3.5v-6.3c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.3Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Iris408",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ashleigh-magloire",
    icon: LinkedInIcon,
  },
  {
    label: "Email",
    href: "mailto:ashmagloire45@icloud.com",
    icon: EmailIcon,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/15 bg-[#26372D] px-6 py-8 text-[#F7F6F1] md:px-10">
      <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a
            href="/"
            className="text-sm font-medium tracking-[0.06em] transition hover:text-white"
          >
            Ashleigh M
          </a>

          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-[#AEBDAE]">
            Software Engineer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-[#D8E0D8] transition hover:border-white hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Icon />
            </a>
          ))}
        </div>

        <div className="text-xs leading-6 text-[#AEBDAE] sm:text-right">
          <p>© 2026 Ashleigh M.</p>
          <p>Built with Astro, React and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}