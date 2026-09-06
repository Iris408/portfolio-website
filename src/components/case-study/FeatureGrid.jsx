export default function FeatureGrid({ features = [] }) {
  return (
    <div className="mt-8 grid gap-5 md:grid-cols-2">
      {features.map((feature, index) => (
        <article
          key={feature.title}
          className="border-t border-[#AEB9AD] py-6"
        >
          <p className="text-xs font-medium text-[#89928B]">
            {String(index + 1).padStart(2, "0")}
          </p>

          <h3 className="mt-4 font-serif text-xl text-[#26372D]">
            {feature.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-[#626A65]">
            {feature.description}
          </p>
        </article>
      ))}
    </div>
  );
}