export default function LearningList({ items = [] }) {
  return (
    <ol className="mt-8 border-t border-[#BCC4B9]">
      {items.map((item, index) => (
        <li
          key={item}
          className="grid grid-cols-[auto_1fr] gap-5 border-b border-[#D8D4C8] py-5"
        >
          <span className="font-mono text-xs text-[#829084]">
            {String(index + 1).padStart(2, "0")}
          </span>

          <p className="text-sm leading-7 text-[#59615C]">
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
}