import type { Metadata } from "next";
import Image from "next/image";
import { PhilosophySection } from "@/components/home/PhilosophySection";

export const metadata: Metadata = {
  title: "About Delta",
  description: "Delta exists to make disciplined, precise performance apparel without distraction.",
  openGraph: { title: "About Delta Gym Wear", description: "Change that is earned. Not assumed." },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[82svh] items-end overflow-hidden bg-brand-black px-5 pb-16 pt-32 text-white sm:px-8 lg:px-12 lg:pb-24">
        <Image src="/images/delta-hero.png" alt="Delta athlete training in a dark studio" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/30" />
        <div className="relative mx-auto w-full max-w-[1600px]">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-yellow">The Delta manifesto</p>
          <h1 className="mt-6 max-w-6xl text-[clamp(3.5rem,8vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.07em]">Change is earned.<br />Never assumed.</h1>
        </div>
      </section>
      <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2 lg:gap-24">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-muted">Why Delta exists</p>
          <div><h2 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-6xl">We build for consistency, not attention.</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-brand-muted">Delta began with a simple frustration: performance wear had become louder while becoming less useful. We chose another direction. Better fabric. Cleaner construction. Fewer distractions. Products made for repetition, pressure, and the quiet discipline of showing up again.</p></div>
        </div>
      </section>
      <PhilosophySection />
    </>
  );
}
