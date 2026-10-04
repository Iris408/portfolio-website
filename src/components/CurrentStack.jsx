import {
  SiPython,
  SiFastapi,
  SiPostgresql,
  SiTypescript,
  SiReact,
  SiAstro,
  SiNextdotjs,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";

import { FcLinux } from "react-icons/fc";

const tools = [
  { name: "Python", icon: SiPython, colour: "#3776AB" },
  { name: "FastAPI", icon: SiFastapi, colour: "#009688" },
  { name: "PostgreSQL", icon: SiPostgresql, colour: "#4169E1" },
  { name: "TypeScript", icon: SiTypescript, colour: "#3178C6" },
  { name: "React", icon: SiReact, colour: "#149ECA" },
  { name: "Astro", icon: SiAstro, colour: "#BC52EE" },
  { name: "Next.js", icon: SiNextdotjs, colour: "#1E2823" },
  { name: "Docker", icon: SiDocker, colour: "#2496ED" },
  { name: "GitHub Actions", icon: SiGithubactions, colour: "#2088FF" },
  { name: "Linux", icon: FcLinux, colour: "#1E2823" },
];

export default function CurrentStack() {
  return (
    <section
      aria-labelledby="current-stack-heading"
      className="border-t border-[var(--portfolio-line)] bg-[var(--portfolio-bg)] px-6 py-16 text-[var(--portfolio-ink)] md:px-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] dark:text-[var(--portfolio-accent)]">
              Current Stack
            </p>

            <h2
              id="current-stack-heading"
              className="font-serif text-3xl leading-tight md:text-4xl"
            >
              Tools I work with.
            </h2>
          </div>

          <p className="text-sm text-[var(--portfolio-accent)]">
            Always learning, always building.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-10">
          {tools.map(({ name, icon: Icon, colour }) => (
            <div
              key={name}
              className="group flex min-h-28 flex-col items-center justify-center gap-3 border border-[#D8D4C8] bg-white/95 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-[#9AAA9C] hover:bg-white motion-reduce:transform-none"
            >
              <Icon
                aria-hidden="true"
                className="h-8 w-8 transition duration-300 group-hover:scale-110"
                style={{ color: colour }}
              />

              <span className="text-xs font-medium text-[#475149] transition-colors duration-300 group-hover:text-[#26372D]">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}