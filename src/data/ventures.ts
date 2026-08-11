export type VentureStage = 'Building' | 'Beta' | 'Live' | 'Coming Soon';

export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  stage: VentureStage;
  launchYear?: number;
  logo?: string;
  images: Array<{ src: string; alt: string }>;
  website?: string;
  appStore?: string;
  googlePlay?: string;
  idea: string;
  building: string;
  seaforthRole: string;
};

/**
 * Publicly announced ventures belong here. Keep this empty until a product is
 * approved for publication; the portfolio UI handles the empty state.
 */
export const ventures: Venture[] = [];

export const thesis = [
  {
    number: '01',
    title: 'Connection',
    copy: 'How people meet, communicate, date, belong, and build relationships.',
  },
  {
    number: '02',
    title: 'Experiences',
    copy: 'How people discover, document, share, and experience life.',
  },
  {
    number: '03',
    title: 'Consumer Technology',
    copy: 'Products that improve everyday behaviors through software and thoughtful design.',
  },
] as const;

export const buildSteps = [
  ['Identify', 'Find a meaningful consumer behavior, problem, or opportunity.'],
  ['Build', 'Develop the product, technology, UX, and infrastructure.'],
  ['Brand', 'Shape the position, identity, message, and consumer experience.'],
  ['Launch', 'Create the market, audience, distribution, and acquisition systems.'],
  ['Grow', 'Learn from behavior and data, then improve the product and its reach.'],
] as const;

export const capabilities = [
  {
    title: 'Product',
    items: [
      'Product strategy',
      'Full-stack development',
      'AI-assisted engineering',
      'UX',
      'Infrastructure',
    ],
  },
  {
    title: 'Brand',
    items: ['Positioning', 'Identity', 'Messaging', 'Creative direction', 'Consumer experience'],
  },
  {
    title: 'Growth',
    items: [
      'Go-to-market',
      'Content',
      'SEO + AEO',
      'Paid acquisition',
      'Analytics',
      'Community',
      'Experimentation',
    ],
  },
] as const;

export function getVenture(slug: string) {
  return ventures.find((venture) => venture.slug === slug);
}
