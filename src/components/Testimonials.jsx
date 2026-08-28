import { testimonials as contentTestimonials } from "../data/content";

const fallbackTestimonials = [
  {
    author: "Alex Rivera",
    role: "12-Week Bulking Program",
    gain: "+6.5 kg Lean Mass",
    quote: "The progressive overload split and structured surplus made it effortless to gain size without adding excess body fat."
  },
  {
    author: "Marcus Chen",
    role: "16-Week Mass Phase",
    gain: "+8.2 kg Lean Mass",
    quote: "I used to struggle as a hardgainer. Following this exact nutrition and training blueprint completely changed my physique."
  },
  {
    author: "David Miller",
    role: "12-Week Strength & Hypertrophy",
    gain: "+5.0 kg Lean Mass",
    quote: "The clear breakdown of weekly targets kept me accountable every single workout. Best bulking protocol I have ever followed."
  }
];

export default function Testimonials() {
  const displayTestimonials = contentTestimonials?.length >= 3 
    ? contentTestimonials 
    : fallbackTestimonials;

  return (
    <section id="testimonials" className="py-20 border-t border-white/5 bg-zinc-900">
      <div className="mx-auto max-w-full px-6 lg:px-10">
        
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Results & Proof
          </h2>
          <p className="mt-3 text-zinc-400">
            Real transformations from athletes who followed the system.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {displayTestimonials.map((t, index) => (
            <div 
              key={t.author || index} 
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:border-lime-400/30">
              <div>
                <span className="inline-block rounded-full bg-lime-400/20 px-3 py-1 text-xs font-bold text-lime-400">
                  {t.gain}
                </span>
                <p className="mt-6 text-base italic leading-relaxed text-zinc-300">
                  "{t.quote}"
                </p>
              </div>

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