import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarqueeBanner } from "@/components/layout/MarqueeBanner";

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-brand-black text-white">
      <div className="absolute inset-x-0 top-0"><MarqueeBanner /></div>
      <Image src="/images/delta-hero.png" alt="Athlete training with battle ropes in Delta performance wear" fill priority sizes="100vw" className="object-cover object-[64%_center]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/5" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-[1600px] items-end px-5 pb-14 pt-40 sm:px-8 sm:pb-20 lg:items-center lg:px-12 lg:pb-0">
        <div className="max-w-5xl">
          <p className="mb-6 max-w-md text-xs font-bold uppercase leading-5 tracking-[0.18em] text-zinc-300 sm:text-sm">Built for the ones who show up when no one&apos;s watching.</p>
          <h1 className="text-[clamp(3.2rem,8vw,8.8rem)] font-black uppercase leading-[0.77] tracking-[-0.07em]">
            Built for<br />those who<br /><span className="text-brand-yellow">train</span> with intent
          </h1>
          <Button asChild variant="yellow" size="lg" className="mt-9">
            <Link href="/shop">Explore the range <ArrowDownRight className="size-5" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
