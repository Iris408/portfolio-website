export default function FeatureGrid({ features = [] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-xl border border-white/10 bg-white/5 p-6"
        >
          <h3 className="text-lg font-medium text-white">
            {feature.title}
          </h3>

          <p className="mt-3 leading-relaxed text-[#D8E0DD]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  )
}