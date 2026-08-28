import { nutritionTips } from "../data/content";

export default function Nutrition() {
  return (
    <section id="nutrition" className="py-20 border-t border-white/5 bg-[#111513]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">Bulking Nutrition</h2>
          <p className="mt-3 text-zinc-400">Fuel your training to maximize muscle synthesis.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {nutritionTips.map((tip) => (
            <article key={tip.title} className="group rounded-3xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d7ff35]/60 hover:shadow-[0_18px_50px_rgba(0,0,0,0.22)] sm:p-6">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img
                  src={tip.image}
                  alt={`${tip.title} meal example`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <span className="mt-6 block text-3xl font-black text-[#d7ff35]">{tip.stat}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{tip.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tip.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}