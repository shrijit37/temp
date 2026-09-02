interface AuroraProps {
  colorStops?: string[];
}

export default function Aurora({ colorStops = [] }: AuroraProps) {
  const [c0, c1, c2] = colorStops;

  return (
    <div className="relative w-full h-full overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 pointer-events-none opacity-60 blur-3xl animate-aurora-drift"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${c0 ?? "#FF5A1F"} 0%, ${c1 ?? "#FF8A3D"} 45%, ${c2 ?? "#7A2E10"} 72%, transparent 76%)`,
        }}
      />
    </div>
  );
}
