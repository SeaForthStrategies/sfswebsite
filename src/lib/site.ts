export const SITE = {
  name: 'SeaForth Strategies',
  url: 'https://seaforthstrategies.com',
  email: 'contact@seaforthstrategies.com',
  calendlyUrl: 'https://calendly.com/gatorgleamsmm/30min',
  logoPath: '/images/logo.png',
  faviconPath: '/favicon.svg',
  social: {
    instagram: 'https://www.instagram.com/seaforthstrategies',
    linkedin: 'https://www.linkedin.com/company/seaforthstrategies',
  },
} as const;

export const CONTACT_EMAIL = SITE.email;
export const CONTACT_EMAIL_HREF = `mailto:${SITE.email}`;
export const CALENDLY_URL = SITE.calendlyUrl;
