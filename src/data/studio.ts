type StudioPortfolioItem = {
  title: string;
  category: string;
  type: string;
  description: string;
  image: string;
  href?: string;
};

export const studioServices = [
  {
    title: 'Web Design + Development',
    items: [
      'Custom website design',
      'Responsive development',
      'Landing pages',
      'Website redesigns',
      'Conversion-focused UX',
      'Analytics implementation',
      'SEO foundations',
      'Performance optimization',
    ],
  },
  {
    title: 'Product + Software Development',
    items: [
      'MVP development',
      'Full-stack development',
      'AI-powered products',
      'Internal tools',
      'API integrations',
      'Automation',
      'Product prototyping',
      'UX/UI development',
    ],
  },
  {
    title: 'Brand + Creative',
    items: [
      'Brand positioning',
      'Visual identity',
      'Digital design systems',
      'Product branding',
      'Launch creative',
      'Social creative systems',
    ],
  },
  {
    title: 'Growth + Marketing Engineering',
    items: [
      'Growth strategy',
      'SEO + AEO',
      'Analytics',
      'Conversion optimization',
      'Lifecycle systems',
      'Marketing automation',
      'AI agents',
      'Content systems',
      'Launch strategy',
    ],
  },
] as const;

export const studioProcess = [
  ['Strategy', 'Define the opportunity, audience, positioning, and system that needs to exist.'],
  ['Design', 'Shape the product experience, brand expression, interface, and conversion path.'],
  ['Build', 'Develop the website, software, automations, analytics, and launch infrastructure.'],
  ['Launch', 'Release with clear messaging, measurement, distribution, and operating ownership.'],
  ['Grow', 'Use behavior, analytics, search, content, and experimentation to keep improving.'],
] as const;

export const studioPortfolio: StudioPortfolioItem[] = [
  {
    title: '1031 Capital Solutions',
    category: 'Websites',
    type: 'Client Work',
    description:
      'A financial services website system focused on clear positioning, structured content, and conversion-oriented user paths.',
    image: '/work/websites/Financial Services Website home.png',
    href: 'https://1031capitalsolutions.com',
  },
  {
    title: 'San Diego County Tax Hike Tracker',
    category: 'Products',
    type: 'Growth Systems',
    description:
      'A public-facing data interface designed to make a civic issue easier to follow, scan, and share.',
    image: '/work/websites/san-diego-tax-hike-tracker.png',
  },
  {
    title: 'Mayor John Franklin',
    category: 'Websites',
    type: 'Client Work',
    description:
      'Campaign site sections built around issues, news, endorsements, and clear civic communication.',
    image: '/work/websites/issues-page-mayor-franklin.png',
  },
  {
    title: 'Catering Company Website',
    category: 'Websites',
    type: 'Client Work',
    description:
      'A hospitality website concept with strong visual merchandising and direct service discovery.',
    image: '/work/websites/Catering Company  Website Home.png',
  },
  {
    title: '1031 Creative System',
    category: 'Growth Systems',
    type: 'Client Work',
    description:
      'Educational financial content assets designed as a repeatable system for audience building.',
    image: '/work/graphics/1.png',
  },
  {
    title: 'PeopleMVR Recruiting Creative',
    category: 'Growth Systems',
    type: 'Client Work',
    description:
      'Social creative and recruiting communication assets built for repeatable campaign use.',
    image: '/work/graphics/PeopleMVR insta work for us.png',
  },
] as const;

export const portfolioCategories = [
  'Ventures',
  'Client Work',
  'Products',
  'Websites',
  'Growth Systems',
] as const;
