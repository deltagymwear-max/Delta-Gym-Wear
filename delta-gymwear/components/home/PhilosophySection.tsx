import Image from "next/image";

export function PhilosophySection() {
  return (
    <section className="grid min-h-[760px] bg-brand-black lg:grid-cols-2">
      <div className="flex flex-col justify-between bg-brand-yellow px-5 py-16 text-brand-black sm:px-10 lg:px-16 lg:py-20">
        <p className="text-xs font-black uppercase tracking-[0.3em]">Product philosophy</p>
        <div className="py-20">
          <h2 className="text-[clamp(3.8rem,7vw,8rem)] font-black uppercase leading-[0.78] tracking-[-0.07em]">Function first.<br />Always.<br />Excess removed.</h2>
          <p className="mt-9 max-w-xl text-base font-bold leading-7 sm:text-lg">Every seam, panel, and fabric choice must earn its place. We strip away distraction so the product can do one thing exceptionally well: support the work.</p>
        </div>
        <p className="text-xs font-black uppercase tracking-[0.22em]">Delta standard 001</p>
      </div>
      <div className="relative min-h-[620px]">
        <Image src="/images/delta-philosophy.png" alt="Athlete preparing for a barbell lift" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
      </div>
    </section>
  );
}
