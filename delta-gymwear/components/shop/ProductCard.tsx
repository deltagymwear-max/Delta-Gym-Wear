import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0">
      <Link href={`/shop/${product.slug}`} className="block outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow">
        <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900">
          <Image src={product.images[0]} alt={product.name} fill sizes="(max-width: 768px) 78vw, (max-width: 1280px) 33vw, 20vw" className="object-cover transition duration-500 group-hover:scale-[1.025]" />
          <div className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between bg-brand-yellow px-4 py-3 text-xs font-black uppercase tracking-widest text-black opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            Quick view <ArrowUpRight className="size-4" />
          </div>
        </div>
        <div className="pt-4">
          <div className="flex justify-between gap-3">
            <h3 className="font-black uppercase tracking-tight">{product.name}</h3>
            <span className="shrink-0 text-sm font-black">{formatPrice(product.price)}</span>
          </div>
          <p className="mt-1 text-sm text-brand-muted">{product.subtitle}</p>
        </div>
      </Link>
    </article>
  );
}
