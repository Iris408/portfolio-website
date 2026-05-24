export default function Stack() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Linux",
    "Git",
    "GitHub",
    "Tailwind CSS",
    "REST APIs"
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-5xl mx-auto">
      {skills.map((skill) => (
        <div
          key={skill}
          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition"
        >
          {skill}
        </div>
      ))}
    </div>
  );
}