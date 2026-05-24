export default function Contact() {

  return (

    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-4xl mx-auto text-center">

        <p className="text-cyan-400 mb-3">
          Contact
        </p>

        <h2 className="text-5xl font-bold mb-6">
          Let’s Build Something Together!
        </h2>

        <p className="text-slate-300 text-lg mb-10">
          Open to Junior Full-Stack, Backend, DevOps,
          and Software engineering opportunities.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">

          <a
            href="https://github.com/Iris408"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ashleigh-magloire/"
            target="_blank"
            className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ashmagloire45@icloud.com"
            className="px-6 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold hover:bg-cyan-300 transition"
          >
            Email
          </a>

        </div>

      </div>

    </section>
  );
}