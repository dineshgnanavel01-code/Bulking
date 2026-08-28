import { nutritionTips } from "../data/content";

export default function Nutrition() {
  return (
    <section id="nutrition" className="scroll-mt-24 border-t border-white/5 bg-zinc-900 py-20">
      <div className="mx-auto max-w-full px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Bulking Nutrition Protocols
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-400">
            Fuel your high-intensity training with optimal macronutrient ratios, timing strategies, and hydration targets.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nutritionTips.map((tip) => (
            <article key={tip.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tip.image}
                  alt={`${tip.title} nutrition guidance`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a09]/80 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-6 text-3xl font-black text-[#d7ff35] drop-shadow-lg">
                  {tip.stat}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white">{tip.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tip.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
