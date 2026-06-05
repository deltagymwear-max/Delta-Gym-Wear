import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductRangeSection } from "@/components/home/ProductRangeSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";
import { StandardSection } from "@/components/home/StandardSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "Performance Apparel for Intentional Training",
  description: "Delta builds precise, durable gym wear for athletes who train with intent.",
  openGraph: { title: "Delta Gym Wear — Function First", description: "Performance apparel engineered for disciplined training." },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProductRangeSection />
      <PhilosophySection />
      <StandardSection />
      <NewsletterSection />
    </>
  );
}
