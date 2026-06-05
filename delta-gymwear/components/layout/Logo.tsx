import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Delta home"
      className={cn("inline-flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow", className)}
    >
      <svg aria-hidden="true" viewBox="0 0 40 35" className="h-7 w-8 fill-brand-yellow">
        <path d="M20 0 40 35H0L20 0Zm0 11.5L10.5 28h19L20 11.5Z" />
      </svg>
      <span className="text-xl font-black tracking-[-0.08em] text-brand-yellow">DELTA</span>
    </Link>
  );
}
