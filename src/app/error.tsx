"use client";

import { useEffect } from "react";
import Link from "next/link";
import { maybeAutoReloadOnChunkError } from "@/lib/chunk-reload";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    maybeAutoReloadOnChunkError(error, "dmc_chunk_reload");
  }, [error]);

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-molten mb-4">
        Connection Notice
      </div>
      <h2 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl text-bone max-w-lg leading-tight">
        Something interrupted the page
      </h2>
      <p className="mt-4 text-steel text-sm sm:text-base max-w-md leading-relaxed">
        The page couldn&apos;t load completely. A quick refresh usually resolves this.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-full bg-molten text-ink font-bold text-sm px-7 py-3.5 transition-all duration-300 hover:bg-ember hover:shadow-[0_0_30px_rgba(255,90,31,0.35)] cursor-pointer"
        >
          Reload Section
        </button>
        <Link
          href="/"
          className="rounded-full border border-line-strong text-bone font-medium text-sm px-7 py-3.5 hover:border-bone hover:bg-white/5 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
