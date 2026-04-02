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

function buildMailto(params: { subject: string; body: string }): string {
  const qs = new URLSearchParams({
    subject: params.subject,
    body: params.body,
  }).toString();
  /** `%20` parses more reliably in mail clients than `+` (form-style) for subject/body. */
  const encoded = qs.replace(/\+/g, '%20');
  return `mailto:${SITE.email}?${encoded}`;
}

/** Primary contact links: `contact@…` with subject and fillable body. */
export const CONTACT_EMAIL_HREF = buildMailto({
  subject: WEBSITE_REQUEST_SUBJECT,
  body: WEBSITE_REQUEST_BODY_TEMPLATE,
});

/** Package / service CTAs — same subject and template, with package noted at the top of the body. */
export function mailtoPackageInterest(packageLabel: string): string {
  return buildMailto({
    subject: WEBSITE_REQUEST_SUBJECT,
    body: [`Package interest: ${packageLabel}`, '', WEBSITE_REQUEST_BODY_TEMPLATE].join('\n'),
  });
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
