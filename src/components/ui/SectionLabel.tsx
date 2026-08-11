interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ index, label, className = "" }: SectionLabelProps) {
  return (
    <div
      className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.32em] text-steel flex items-center gap-3 ${className}`}
    >
      <span className="text-molten">{"//"}</span>
      <span>
        {index} <span className="text-steel-dim">·</span> {label}
      </span>
      <span className="hidden sm:block h-px w-16 bg-line-strong" />
    </div>
  );
}
