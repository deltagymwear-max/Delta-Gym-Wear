import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: "Shop Performance Gym Wear",
  description: "Shop Delta hoodies, compression tops, leggings, tanks, and technical training trousers.",
  openGraph: { title: "Shop Delta Gym Wear", description: "Performance apparel. Function first." },
};

function CatalogFallback() {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} className="aspect-[4/5]" />)}</div>;
}

export default function ShopPage() {
  return (
    <div className="bg-zinc-50 px-5 pb-24 pt-36 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1600px]">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-muted">Engineered essentials</p>
        <h1 className="mt-4 text-6xl font-black uppercase tracking-[-0.06em] sm:text-8xl">The range.</h1>
        <p className="mb-12 mt-5 max-w-xl leading-7 text-brand-muted">Every product is reduced to what matters: movement, structure, repeat performance.</p>
        <Suspense fallback={<CatalogFallback />}><ShopCatalog /></Suspense>
      </div>
    </div>
  );
}
