export default function Timeline({ items = [] }) {
  return (
    <ol className="mt-8 border-t border-[#BCC4B9]">
      {items.map((item, index) => (
        <li
          key={item.version}
          className="grid gap-4 border-b border-[#D8D4C8] py-6 sm:grid-cols-[9rem_1fr]"
        >
          <div>
            <p className="font-mono text-sm font-medium text-[#526A57]">
              {item.version}
            </p>

            {item.date && (
              <p className="mt-1 text-xs text-[#89928B]">
                {item.date}
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-[auto_1fr]">
            <span className="font-mono text-xs text-[#89928B]">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div>
              <h3 className="font-serif text-xl text-[#26372D]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#626A65]">
                {item.description}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}