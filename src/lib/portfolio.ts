import manifest from '@/data/portfolio-manifest.json';

/**
 * Portfolio assets live under `public/work/` (synced from Abigail-Lehr-Resume).
 * @see https://github.com/SeaForthStrategies/Abigail-Lehr-Resume
 */

/** Website screenshots only — for inline galleries on marketing pages. */
export const PORTFOLIO_GALLERY_ITEMS = manifest.items
  .filter((i) => i.category === 'websites')
  .map((i) => ({
    src: i.src,
    alt: i.title,
  }));

/** Shorter set for pages that need a lighter grid (about, web-design detail). */
export const PORTFOLIO_GALLERY_HIGHLIGHTS = PORTFOLIO_GALLERY_ITEMS.slice(0, 6);
