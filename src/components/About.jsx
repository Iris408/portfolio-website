import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 max-w-5xl mx-auto text-center"
      >
      <section id="about" className="py-8 px-6">
        <p className="font-avantgarde-book text-white text-3xl mb-12">
          About Me
        </p>

        <h2 className="font-avantgarde-book text-white text-5xl font-bold mb-16">
          Backend, Full-Stack & DevOps Focused
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <p className="font-avantgarde-book text-[#2b183d] text-xl leading-relaxed">
            I'm an Advanced Driver Assistance Systems (ADAS) engineer and CS Master's student transitioning into backend and full-stack development. 
            My day job demands precision in high-stakes systems and that same rigour carries into the projects I build: REST APIs, full-stack apps 
            and CI/CD pipelines using Python, FastAPI, React, TypeScript, PostgreSQL, Docker, and GitHub Actions.
          </p>

         <p className="font-avantgarde-book text-[#2b183d] text-xl leading-relaxed">
            Balancing a high-stakes tech career alongside graduate-level research has sharpened my ability to understand complex architectures, 
            manage tight timelines, and build reliable backend systems. I focus on bridging the gap between user-friendly dashboards and robust system-level logic. 
          </p>

        </div>  

      </section>

    </section>
  );
}