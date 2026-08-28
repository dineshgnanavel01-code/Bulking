import { nutritionTips } from "../data/content";


export default function Nutrition() {
  return (
    <section id="nutrition" className="py-20 border-t border-white/5 bg-zinc-900 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Bulking Nutrition Protocols
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Fuel your high-intensity training with optimal macronutrient ratios, timing strategies, and hydration targets.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nutritionTips.map((tip) => (
            <div key={tip.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="text-3xl font-black text-[#d7ff35]">{tip.stat}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{tip.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tip.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}