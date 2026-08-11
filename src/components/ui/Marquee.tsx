interface MarqueeProps {
  items: string[];
  className?: string;
  slow?: boolean;
}

export default function Marquee({ items, className = "", slow = false }: MarqueeProps) {
  const row = (key: string) => (
    <div key={key} className="flex items-center shrink-0" aria-hidden={key === "copy"}>
      {items.map((item, i) => (
        <span key={`${key}-${i}`} className="flex items-center">
          <span className="px-6 sm:px-10 font-display font-black uppercase tracking-tight text-[clamp(2rem,4vw,3.5rem)] steel-text whitespace-nowrap">
            {item}
          </span>
          <span className="text-molten text-[clamp(1rem,2vw,1.6rem)]">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative overflow-hidden mask-fade-x w-full ${className}`}>
      <div className={`flex w-max ${slow ? "animate-marquee-slow" : "animate-marquee"}`}>
        {row("a")}
        {row("copy")}
      </div>
    </div>
  );
}
