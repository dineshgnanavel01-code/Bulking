export default function CallToAction() {
  return (
    <section id="start" className="py-20 border-t border-white/5">
      <div className="mx-auto  max-w-full px-6 text-center lg:px-10">
        <div className="rounded-3xl border border-[#d7ff35]/30 bg-[#111513] p-12">
          <h2 className="text-3xl font-black uppercase text-white sm:text-5xl">Ready to Bulk?</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Join thousands of lifters taking their strength and size to the next level.
          </p>
          <button className="mt-8 rounded-full bg-[#d7ff35] px-10 py-4 text-base font-bold text-[#080a09] transition hover:bg-white">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}