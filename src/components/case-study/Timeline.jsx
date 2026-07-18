export default function Timeline({ items = [] }) {
  return (
    <div className="mt-10 space-y-8">
      {items.map((item) => (
        <article
          key={item.version}
          className="grid gap-3 border-l border-white/15 pl-6 sm:grid-cols-[140px_1fr]"
        >
          <div>
            <p className="font-mono text-sm text-[#A5B5A3]">
              {item.version}
            </p>

            {item.date && (
              <p className="mt-1 text-xs text-[#97A4AD]">
                {item.date}
              </p>
            )}
          </div>

          <div>
            <h3 className="text-lg font-medium text-white">
              {item.title}
            </h3>

            <p className="mt-2 leading-relaxed text-[#D8E0DD]">
              {item.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}