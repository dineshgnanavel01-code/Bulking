export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-block rounded-full border border-[#d7ff35]/30 bg-[#d7ff35]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#d7ff35]">
              The Bulking System
            </span>
            <h1 className="mt-6 text-4xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl">
              Build Muscle. <br />
              <span className="text-[#d7ff35]">Get Strong.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              A structured bulking system combining progressive strength training, smart nutrition, and targeted recovery to help you build serious size without wasting time.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#programs"
                className="inline-flex items-center justify-center rounded-full bg-[#d7ff35] px-8 py-4 text-sm font-bold text-[#080a09] transition hover:bg-white"
              >
                Explore Programs
              </a>
              <a
                href="#schedule"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition hover:bg-white/10"
              >
                View Schedule
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-white/10 bg-[#111513] p-8 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">Current Phase</p>
                  <p className="mt-1 text-2xl font-black text-white">MASS BUILD</p>
                </div>
                <span className="rounded-full bg-[#d7ff35] px-3 py-1 text-xs font-bold text-[#080a09]">ACTIVE</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs text-zinc-400">Weekly Target</p>
                  <p className="mt-1 text-xl font-bold text-[#d7ff35]">+0.25 kg</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs text-zinc-400">Duration</p>
                  <p className="mt-1 text-xl font-bold text-white">12+ Weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}