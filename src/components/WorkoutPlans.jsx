import { workoutPlans } from "../data/content";

export default function WorkoutPlans() {
  return (
    <section id="programs" className="py-20 border-t border-white/5 bg-[#111513]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">Training Programs</h2>
          <p className="mt-3 text-zinc-400">Choose your path to more size and progressive strength.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {workoutPlans.map((plan) => (
            <div
              key={plan.title}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-[#d7ff35]/50"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase text-[#d7ff35]">{plan.level}</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-zinc-300">{plan.duration}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{plan.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">{plan.description}</p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs font-medium text-zinc-400">
                  Structure: <span className="text-white">{plan.highlight}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}