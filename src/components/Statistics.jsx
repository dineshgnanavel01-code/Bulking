import { statistics } from "../data/content";
function Statistics() {
  return (
    <section className="border-y border-white/10 bg-[#101311]">
      <div className="mx-auto grid max-w-full grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
        {statistics.map(([value, label]) => (
          <div
            key={label}
            className="px-5 py-10 text-center sm:py-12">
            <p className="text-3xl font-black text-white sm:text-4xl">
              {value}
            </p>

            <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
