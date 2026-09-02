"use client";

import type { PropsWithChildren } from "react";

interface SpotlightCardProps extends PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)",
}) => (
  <div
    data-spotlight-card
    className={`relative rounded-3xl border border-neutral-800 bg-neutral-900 overflow-hidden p-8 ${className}`}
    style={{
      "--spotlight-color": spotlightColor,
      "--spot-x": "50%",
      "--spot-y": "50%",
    } as React.CSSProperties}
  >
    <div
      data-spotlight-overlay
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
      style={{
        background: "radial-gradient(circle at var(--spot-x) var(--spot-y), var(--spotlight-color), transparent 80%)",
      }}
    />
    {children}
  </div>
);

export default SpotlightCard;
