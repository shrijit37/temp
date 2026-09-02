"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const isChunkError =
      error.message?.includes("Loading chunk") ||
      error.message?.includes("Failed to fetch dynamically imported module") ||
      error.name === "ChunkLoadError";

    if (isChunkError && typeof window !== "undefined") {
      const reloadKey = "dmc_global_chunk_reload";
      const lastReload = sessionStorage.getItem(reloadKey);
      const now = Date.now();
      if (!lastReload || now - parseInt(lastReload, 10) > 10000) {
        sessionStorage.setItem(reloadKey, now.toString());
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <html lang="en" className="h-full bg-[#0A0A0C] text-[#F2F3F5]">
      <body className="min-h-full flex flex-col items-center justify-center px-6 py-20 text-center font-sans">
        <div className="text-xs font-mono uppercase tracking-[0.3em] text-[#FF5A1F] mb-4">
          Delhi Metal Corporation
        </div>
        <h1 className="font-black uppercase tracking-tight text-3xl sm:text-4xl text-[#F2F3F5] max-w-lg leading-tight">
          Page Reload Required
        </h1>
        <p className="mt-4 text-[#9AA0A8] text-sm sm:text-base max-w-md leading-relaxed">
          The application updated in the background. Please tap reload to continue.
        </p>

        <div className="mt-8">
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.location.reload();
              } else {
                reset();
              }
            }}
            className="rounded-full bg-[#FF5A1F] text-[#0A0A0C] font-bold text-sm px-8 py-4 transition-all duration-300 hover:bg-[#FF8A3D] cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}
