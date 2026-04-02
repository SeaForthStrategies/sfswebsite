export const SITE = {
  name: 'SeaForth Strategies',
  url: 'https://seaforthstrategies.com',
  email: 'contact@seaforthstrategies.com',
  calendlyUrl: 'https://calendly.com/gatorgleamsmm/30min',
  /** Personal portfolio — reference for design & dev work */
  portfolioUrl: 'https://abigaillehr.com',
  /** Open-source résumé / portfolio monorepo (manifest + assets source of truth) */
  resumeRepoUrl: 'https://github.com/SeaForthStrategies/Abigail-Lehr-Resume',
  logoPath: '/images/logo.png',
  faviconPath: '/favicon.svg',
  social: {
    instagram: 'https://www.instagram.com/seaforthstrategies',
    linkedin: 'https://www.linkedin.com/company/seaforthstrategies',
  },
} as const;

export const PORTFOLIO_URL = SITE.portfolioUrl;
/** Optional: personal site skills page (not SeaForth’s scope) */
export const PORTFOLIO_SKILLS_URL = `${SITE.portfolioUrl}/skills` as const;
export const RESUME_REPO_URL = SITE.resumeRepoUrl;
export const CONTACT_EMAIL = SITE.email;
export const CONTACT_EMAIL_HREF = `mailto:${SITE.email}`;
export const CALENDLY_URL = SITE.calendlyUrl;

/**
 * Paths under `public/` as used by `next/image` `src`.
 * Do not pre-encode: the default loader applies `encodeURIComponent(src)` once; using `encodeURI`
 * here double-encodes spaces (`%20` → `%2520`) and leaves `&` unescaped, which breaks filenames
 * like `Vine & Tap.png` and query parsing for `/_next/image`.
 */
export function publicAssetPath(path: string): string {
  return path;
}
