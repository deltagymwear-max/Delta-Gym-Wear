import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  { title: "Shop", links: ["Compression T-Shirts", "Performance Leggings", "Training Tank Tops", "Functional Trousers", "All Products"] },
  { title: "Brand", links: ["About Delta"] },
  { title: "Support", links: ["Contact Us", "Sizing Guide", "Returns", "FAQ"] },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-brand-black px-5 pb-8 pt-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-7 max-w-xs text-sm leading-6 text-zinc-400">Performance apparel for those who train with intent. Function first. Always.</p>
          <a href="mailto:contact@deltagymwear.com" className="mt-6 block text-sm font-bold hover:text-brand-yellow">contact@deltagymwear.com</a>
          <p className="mt-2 text-sm text-zinc-500">Lahore, Pakistan</p>
        </div>
        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-xs font-black uppercase tracking-[0.25em] text-brand-yellow">{column.title}</h3>
            <ul className="mt-6 space-y-4">
              {column.links.map((label) => (
                <li key={label}><Link href={label === "About Delta" ? "/about" : label === "All Products" ? "/shop" : "#"} className="text-sm text-zinc-300 transition hover:text-white">{label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-16 flex max-w-[1600px] flex-col gap-3 border-t border-white/15 pt-7 text-xs text-zinc-500 sm:flex-row sm:justify-between">
        <span>© 2026 Delta Gym Wear. All rights reserved.</span>
        <span>Built for the work no one sees.</span>
      </div>
    </footer>
  );
}
