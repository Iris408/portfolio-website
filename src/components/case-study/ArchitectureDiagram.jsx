export default function ArchitectureDiagram({ items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ol className="mt-8 grid gap-4 md:grid-cols-3">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="relative border border-[#D8D4C8] bg-[#FCFBF7] p-6"
        >
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#6D7F70]">
            Layer {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-4 font-serif text-xl text-[#26372D]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#626A65]">
            {item.description}
          </p>
        </li>
      ))}
    </ol>
  );
}