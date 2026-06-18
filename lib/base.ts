// Prefix for static assets so they resolve under the GitHub Pages base path.
// Empty locally; set to "/unlim-landing" in the Pages build.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Build an asset URL that works both locally and on GitHub Pages. */
export const asset = (path: string) => `${BASE}${path}`;
