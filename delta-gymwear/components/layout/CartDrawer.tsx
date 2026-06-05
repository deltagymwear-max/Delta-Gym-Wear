"use client";

import { useSyncExternalStore } from "react";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart";

export function CartDrawer() {
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const items = useCartStore((state) => state.items);
  const remove = useCartStore((state) => state.remove);
  const update = useCartStore((state) => state.update);
  const total = useCartStore((state) => state.total);

  const count = mounted ? items.reduce((sum, item) => sum + item.qty, 0) : 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label={`Open cart with ${count} items`}
          className="relative grid size-11 place-items-center text-white outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <ShoppingBag className="size-5" />
          {count > 0 && (
            <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-brand-yellow text-[10px] font-black text-black">
              {count}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent title="Shopping cart" className="flex flex-col">
        <div className="border-b border-zinc-200 pb-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-muted">Your selection</p>
          <h2 className="mt-2 text-3xl font-black uppercase tracking-tight">Cart ({count})</h2>
        </div>
        <div className="flex-1 divide-y divide-zinc-200 overflow-y-auto">
          {items.length === 0 ? (
            <div className="grid h-56 place-items-center text-center">
              <div>
                <ShoppingBag className="mx-auto mb-4 size-8 text-zinc-300" />
                <p className="font-black uppercase">Nothing here yet.</p>
                <p className="mt-1 text-sm text-brand-muted">Train with intent. Choose with intent.</p>
              </div>
            </div>
          ) : (
            items.map((item) => {
              const key = `${item.id}-${item.size}`;
              return (
                <div key={key} className="py-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <h3 className="font-black uppercase">{item.name}</h3>
                      <p className="mt-1 text-xs uppercase tracking-widest text-brand-muted">Size {item.size}</p>
                    </div>
                    <button aria-label={`Remove ${item.name}`} onClick={() => remove(key)} className="self-start p-2 focus-visible:ring-2 focus-visible:ring-brand-yellow">
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center border border-zinc-300">
                      <button aria-label="Decrease quantity" onClick={() => update(key, item.qty - 1)} className="grid size-9 place-items-center"><Minus className="size-3" /></button>
                      <span className="w-8 text-center text-sm font-black">{item.qty}</span>
                      <button aria-label="Increase quantity" onClick={() => update(key, item.qty + 1)} className="grid size-9 place-items-center"><Plus className="size-3" /></button>
                    </div>
                    <span className="font-black">{formatPrice(item.price * item.qty)}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="border-t border-zinc-200 pt-5">
          <div className="mb-5 flex items-center justify-between text-lg font-black uppercase">
            <span>Subtotal</span><span>{formatPrice(mounted ? total() : 0)}</span>
          </div>
          <Button variant="yellow" className="w-full" disabled={!items.length}>Checkout</Button>
          <p className="mt-3 text-center text-[11px] text-brand-muted">Taxes and shipping calculated at checkout.</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
