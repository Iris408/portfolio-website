export default function LearningList({ items = [] }) {
  return (
    <div className="mt-8 grid gap-4">
      {items.map((item) => (
        <div
          key={item}
          className="border-l-2 border-[#A5B5A3]/50 bg-white/5 px-5 py-4"
        >
          <p className="leading-relaxed text-[#D8E0DD]">
            {item}
          </p>
        </div>
      ))}
    </div>
  )
}