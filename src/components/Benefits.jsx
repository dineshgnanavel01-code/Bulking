import { benefits } from "../data/content";

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">System Benefits</h2>
          <p className="mt-3 text-zinc-400">Designed around proven hypertrophy principles.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div key={b.title} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d7ff35] font-black text-[#080a09]">
                0{i + 1}
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}