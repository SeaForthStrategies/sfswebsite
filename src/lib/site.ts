export const SITE = {
  name: 'SeaForth Strategies',
  url: 'https://seaforthstrategies.com',
  email: 'contact@seaforthstrategies.com',
  calendlyUrl: 'https://calendly.com/gatorgleamsmm/30min',
  /** Personal portfolio — reference for design & dev work */
  portfolioUrl: 'https://abigaillehr.com',
  logoPath: '/images/logo.png',
  social: {
    instagram: 'https://www.instagram.com/seaforthstrategies',
    linkedin: 'https://www.linkedin.com/company/seaforthstrategies',
  },
} as const;

export const PORTFOLIO_URL = SITE.portfolioUrl;
/** Optional: personal site skills page (not SeaForth’s scope) */
export const PORTFOLIO_SKILLS_URL = `${SITE.portfolioUrl}/skills` as const;
export const CONTACT_EMAIL = SITE.email;

/** Prefilled lines for the user to replace in their mail client after clicking a contact link. */
export const WEBSITE_REQUEST_BODY_TEMPLATE = [
  'Project or site goals:',
  '',
  'Timeline:',
  '',
  'Budget / ballpark (optional):',
  '',
].join('\n');

const WEBSITE_REQUEST_SUBJECT = 'Website request';

/** `%20` parses more reliably in mail clients than `+` (form-style). */
function mailtoQuery(subject: string): string {
  return new URLSearchParams({ subject }).toString().replace(/\+/g, '%20');
}

/**
 * Short `mailto:` with subject only. Long `body=` prefills break many browsers/clients; use
 * `WEBSITE_REQUEST_BODY_TEMPLATE` as on-page copy instead.
 */
export const CONTACT_EMAIL_HREF = `mailto:${SITE.email}?${mailtoQuery(WEBSITE_REQUEST_SUBJECT)}`;

/** Plain `mailto:` — maximum compatibility when a subject param causes issues. */
export const CONTACT_MAILTO_PLAIN = `mailto:${SITE.email}` as const;

/** Package / service CTAs — subject only keeps URLs short and reliable. */
export function mailtoPackageInterest(packageLabel: string): string {
  const subject = `${WEBSITE_REQUEST_SUBJECT} — ${packageLabel}`;
  return `mailto:${SITE.email}?${mailtoQuery(subject)}`;
}

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
