import { useState } from "react";
import { projects } from "../data/projects.js";
import PreviewModal from "./PreviewModal.jsx";

function FeaturedWorkCard({ project, onPreview }) {
  const projectHref =
    project.detailsPath || project.demo || project.github;

  const isExternal = projectHref?.startsWith("http");

  const displayedTech =
    project.featuredTech || project.tech.slice(0, 3);

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#D8D4C8] bg-[#FCFBF7] transition duration-300 hover:-translate-y-1 hover:border-[#8FA08F] hover:shadow-[0_16px_40px_rgba(30,40,35,0.08)]">
      {project.image && (
        <button
          type="button"
          onClick={() =>
            onPreview({
              image: project.image,
              images: project.images,
              title: project.title,
            })
          }
          className="block aspect-[16/10] w-full overflow-hidden bg-[#E8E6DD] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#58705C]"
          aria-label={`Preview images from ${project.title}`}
        >
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        </button>
      )}

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-[#6D7F70]">
          {project.category}
        </p>

        <h3 className="mt-3 font-serif text-xl leading-snug text-[#1E2823]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#626A65]">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {displayedTech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-[#ECEEE8] px-3 py-1 text-[0.68rem] font-medium text-[#526156]"
            >
              {item}
            </span>
          ))}
        </div>

        {projectHref && (
          <a
            href={projectHref}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-[#405544] transition hover:text-[#1E2823] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C]"
          >
            View project <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function Work() {
  const featured = projects
    .filter((project) => project.featured)
    .slice(0, 4);

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="work"
      className="border-t border-[#D8D4C8] bg-[#F7F6F1] px-6 py-20 text-[#1E2823] md:px-10 md:py-24"
    >
      <div className="w-full">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-[#6D7F70]">
              02 / Featured Work
            </p>

            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
              A few things I&apos;ve built.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#69706B] md:text-base">
              Production-style applications shaped around practical
              requirements, accessible interfaces and maintainable systems.
            </p>
          </div>

          <a
            href="/work"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-[#405544] transition hover:text-[#1E2823] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#58705C]"
          >
            View all work <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((project) => (
            <FeaturedWorkCard
              key={project.slug}
              project={project}
              onPreview={setPreview}
            />
          ))}
        </div>
      </div>

      <PreviewModal
        preview={preview}
        onClose={() => setPreview(null)}
      />
    </section>
  );
}