const messages = [
  "FUNCTION FIRST. ALWAYS",
  "ENGINEERED FOR DISCIPLINE",
  "FABRIC INTEGRITY. ALWAYS",
  "SHOW UP WHEN NO ONE'S WATCHING",
  "MINIMAL. PRECISE",
  "CHANGE THAT IS EARNED. NOT ASSUMED",
];

export function MarqueeBanner() {
  const items = [...messages, ...messages];
  return (
    <div className="relative z-[70] overflow-hidden bg-brand-black py-2 text-brand-yellow">
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {items.map((message, index) => (
          <span key={`${message}-${index}`} className="flex items-center text-[10px] font-black tracking-[0.22em] sm:text-xs">
            <span className="mx-8 size-1.5 rotate-45 bg-brand-yellow" />
            {message}
          </span>
        ))}
      </div>
    </div>
  );
}
