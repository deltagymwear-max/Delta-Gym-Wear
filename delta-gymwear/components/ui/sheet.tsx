"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  children,
  className,
  side = "right",
  title = "Panel",
}: {
  children: React.ReactNode;
  className?: string;
  side?: "left" | "right";
  title?: string;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/70 data-[state=open]:animate-in" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 z-[90] w-[min(92vw,420px)] overflow-y-auto bg-white p-6 shadow-2xl outline-none",
          side === "right" ? "right-0" : "left-0",
          className,
        )}
      >
        <Dialog.Title className="sr-only">{title}</Dialog.Title>
        {children}
        <Dialog.Close
          aria-label="Close panel"
          className="absolute right-4 top-4 grid size-10 place-items-center outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow"
        >
          <X className="size-5" />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
