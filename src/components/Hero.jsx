export default function Hero({ onStartClick }) {
  const handleScrollToPrograms = () => {
    if (onStartClick) {
      onStartClick();
    }
    
    const programsSection = document.getElementById("programs");
    if (programsSection) {
      programsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
        alt="Bodybuilder training with heavy weights"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        loading="eager"
      />

      <div className="absolute inset-0 bg-zinc-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
        
        <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/50 bg-stone-800/80 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-amber-300 backdrop-blur-md shadow-lg shadow-black/40">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
          Science-Backed Hypertrophy Protocols
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight uppercase sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="text-white">
            Build Mass.
          </span>{" "}
          <br />
          <span className="text-lime-400 drop-shadow-[0_0_25px_rgba(163,230,53,0.3)]">
            Break Plateaus.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-zinc-300 sm:text-lg md:text-xl leading-relaxed">
          Unlock structured strength splits, personalized bulking nutrition targets, and progressive overload protocols built for maximum muscular hypertrophy.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={handleScrollToPrograms}
            className="w-full cursor-pointer rounded-full bg-lime-400 px-8 py-4 text-base font-extrabold text-zinc-950 shadow-lg shadow-lime-400/20 transition-all hover:bg-lime-300 hover:scale-105 sm:w-auto">
            Start Your Program
          </button>
          
          <a
            href="#programs"
            className="w-full rounded-full border border-zinc-700 bg-zinc-900/80 px-8 py-4 text-base font-bold text-zinc-200 transition-all hover:border-lime-400/50 hover:bg-zinc-800 hover:text-white sm:w-auto backdrop-blur-md">
            Explore Splits
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          <div>
            <span className="block text-3xl font-black text-white sm:text-4xl">12+</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Week Protocols</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-lime-400 sm:text-4xl">
              100%
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Custom Macros</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-white sm:text-4xl">8.5kg</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Avg Lean Gain</span>
          </div>
          <div>
            <span className="block text-3xl font-black text-lime-400 sm:text-4xl">
              24/7
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Community Access</span>
          </div>
        </div>

      </div>
    </section>
  );
}