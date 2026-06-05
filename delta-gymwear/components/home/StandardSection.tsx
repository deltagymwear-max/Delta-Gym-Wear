const conditions = [
  "Moves without restriction",
  "Holds structure under stress",
  "Performs after repeated use",
];

export function StandardSection() {
  return (
    <section className="bg-brand-yellow px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em]">The standard</p>
          <h2 className="mt-6 max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.05em] sm:text-7xl">Every product must pass three tests.</h2>
          <p className="mt-7 max-w-md leading-7">If a product cannot prove itself under real training conditions, it does not carry the Delta mark.</p>
        </div>
        <div className="space-y-3">
          {conditions.map((condition, index) => (
            <div key={condition} className="group flex min-h-36 items-end justify-between gap-5 bg-brand-black p-6 text-white transition hover:-translate-x-2 sm:p-8">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow">Condition {["one", "two", "three"][index]}</p>
                <h3 className="mt-3 max-w-xl text-2xl font-black uppercase leading-tight sm:text-3xl">{condition}</h3>
              </div>
              <span className="text-5xl font-black text-white/20 sm:text-7xl">0{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
