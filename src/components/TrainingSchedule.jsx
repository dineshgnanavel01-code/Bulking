import { weeklySchedule } from "../data/content";

export default function TrainingSchedule() {
  return (
    <section id="schedule" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">Weekly Schedule</h2>
          <p className="mt-3 text-zinc-400">Optimized split for maximum recovery and growth.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="divide-y divide-white/10">
            {weeklySchedule.map((item) => (
              <div key={item.day} className="flex flex-col justify-between p-6 sm:flex-row sm:items-center">
                <div className="w-32 font-bold text-[#d7ff35]">{item.day}</div>
                <div className="mt-2 text-lg font-bold text-white sm:mt-0">{item.muscle}</div>
                <div className="mt-2 text-sm text-zinc-400 sm:mt-0">{item.focus}</div>
                <div className="mt-2 sm:mt-0">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${
                      item.rest ? "bg-zinc-800 text-zinc-400" : "bg-[#d7ff35]/20 text-[#d7ff35]"
                    }`}
                  >
                    {item.rest ? "Rest" : "Workout"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}