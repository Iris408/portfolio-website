export default function TechStack({ groups = [] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {groups.map((group) => (
        <div
          key={group.title}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-lg font-medium text-white">
            {group.title}
          </h3>

          <ul className="mt-4 space-y-3 text-[#D8E0DD]">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-[#A5B5A3]">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}