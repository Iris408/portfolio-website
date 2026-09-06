export default function TechStack({ groups = [] }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {groups.map((group) => (
        <article
          key={group.title}
          className="border border-[#D8D4C8] bg-[#FCFBF7] p-6"
        >
          <h3 className="font-serif text-xl text-[#26372D]">
            {group.title}
          </h3>

          <ul className="mt-5 space-y-3">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-6 text-[#626A65]"
              >
                <span className="text-[#718574]" aria-hidden="true">
                  —
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}