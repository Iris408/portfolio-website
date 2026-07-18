export default function ChallengeCard({
  title,
  challenge,
  decision,
  outcome,
}) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-medium text-white">
        {title}
      </h3>

      <div className="mt-5 space-y-5 text-[#D8E0DD]">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A5B5A3]">
            Challenge
          </p>

          <p className="mt-2 leading-relaxed">
            {challenge}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A5B5A3]">
            Decision
          </p>

          <p className="mt-2 leading-relaxed">
            {decision}
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#A5B5A3]">
            Outcome
          </p>

          <p className="mt-2 leading-relaxed">
            {outcome}
          </p>
        </div>
      </div>
    </article>
  )
}