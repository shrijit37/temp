import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function PrimaryButton({ href, children, className = "", external = false }: ButtonProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full bg-molten text-ink font-bold text-sm sm:text-base px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 hover:bg-ember hover:shadow-[0_0_40px_rgba(255,90,31,0.35)] active:scale-[0.98] ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function GhostButton({ href, children, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-line-strong text-bone font-semibold text-sm sm:text-base px-7 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 hover:border-bone hover:bg-white/5 active:scale-[0.98] ${className}`}
    >
      {children}
    </Link>
  );
}
