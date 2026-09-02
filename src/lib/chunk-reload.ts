export function maybeAutoReloadOnChunkError(error: Error, reloadKey: string): void {
  const isChunkError =
    error.message?.includes("Loading chunk") ||
    error.message?.includes("Failed to fetch dynamically imported module") ||
    error.name === "ChunkLoadError";

  if (!isChunkError || typeof window === "undefined") return;

  try {
    const lastReload = Number(sessionStorage.getItem(reloadKey));
    const now = Date.now();

    if (!Number.isFinite(lastReload) || now - lastReload > 10000) {
      sessionStorage.setItem(reloadKey, now.toString());
      window.location.reload();
    }
  } catch {
    // Storage can be unavailable in privacy-restricted browser contexts.
  }
}
