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

    <div className="flex flex-wrap justify-center gap-3 mt-8">

      {skills.map((skill) => (

        <div
          className="px-4 py-2 justify-center font-avantgarde-book rounded-full bg-white/5 border border-white/40 hover:border-purple-400/40 hover:bg-purple-400/10 transition"
        >
          {skill}
        </div>

      ))}

    </div>
  );
}