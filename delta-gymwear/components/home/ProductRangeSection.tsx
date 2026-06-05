import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ProductRangeSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-brand-muted">The product range</p>
            <h2 className="mt-3 text-4xl font-black uppercase tracking-tight sm:text-6xl">Built to perform.</h2>
          </div>
          <Link href="/shop" className="hidden items-center gap-2 text-xs font-black uppercase tracking-widest underline decoration-brand-yellow decoration-4 underline-offset-8 sm:flex">Shop all <ArrowRight className="size-4" /></Link>
        </div>
        <ScrollArea className="-mx-5 pb-5 sm:-mx-8 lg:mx-0">
          <div className="flex snap-x gap-4 px-5 pb-5 sm:px-8 lg:grid lg:grid-cols-5 lg:px-0">
            {products.map((product) => <div key={product.id} className="w-[78vw] shrink-0 snap-start sm:w-[42vw] lg:w-auto"><ProductCard product={product} /></div>)}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}
