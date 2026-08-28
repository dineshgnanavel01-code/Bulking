import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 border-t border-white/5 bg-[#111513]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">Results & Proof</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, index) => (
            <div key={t.author || index} className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <span className="rounded-full bg-[#d7ff35]/20 px-3 py-1 text-xs font-bold text-[#d7ff35]">
                {t.gain}
              </span>
              <p className="mt-6 text-lg italic text-zinc-300">"{t.quote}"</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}