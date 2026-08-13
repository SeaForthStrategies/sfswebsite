export type VentureStage = 'Building' | 'Beta' | 'Live' | 'Coming Soon';
export type VentureVisual = 'dating' | 'life-feed' | 'community' | 'time' | 'signal';

export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  stage: VentureStage;
  visual: VentureVisual;
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

export const ventures: Venture[] = [
  {
    slug: 'hey-beautiful',
    name: 'Hey Beautiful',
    tagline: 'A dating app for meeting people and building real relationships.',
    description:
      'Hey Beautiful is a consumer dating app focused on helping people meet, communicate, and explore new relationships through a thoughtful digital experience.',
    category: 'Connection',
    stage: 'Building',
    visual: 'dating',
    images: [],
    idea: 'Dating products shape how people discover one another and begin relationships. Hey Beautiful starts with the belief that the experience should make connection feel more human from the first interaction.',
    building:
      'A mobile-first dating experience centered on discovery, profiles, communication, and the path from an introduction to a real connection.',
    seaforthRole:
      'Seaforth is developing the product strategy, software, UX, positioning, brand, launch plan, and growth systems together as one venture-building process.',
  },
  {
    slug: 'palm',
    name: 'Palm',
    tagline: 'A life feed for the people, places, and moments that shape your days.',
    description:
      'Palm is a consumer life feed app for capturing and revisiting the people, places, experiences, and everyday moments that make up a life.',
    category: 'Consumer Technology',
    stage: 'Building',
    visual: 'life-feed',
    images: [],
    idea: 'The meaningful parts of life are often fragmented across camera rolls, messages, notes, and social platforms. Palm explores a more personal way to hold those moments together.',
    building:
      'A consumer app organized around a continuous life feed, designed to make personal experiences easier to capture, revisit, and understand over time.',
    seaforthRole:
      'Seaforth is building the product concept, application, experience design, identity, consumer positioning, and go-to-market foundation.',
  },
  {
    slug: 'salt-and-serendipity',
    name: 'Salt and Serendipity',
    tagline: 'Community and events designed to create more meaningful ways to gather.',
    description:
      'Salt and Serendipity is a community and events venture built around creating reasons for people to meet, participate, and form relationships in the real world.',
    category: 'Community & Experiences',
    stage: 'Building',
    visual: 'community',
    images: [],
    idea: 'Connection often begins with being in the right place with the right people. Salt and Serendipity is built around the role that shared experiences can play in creating community.',
    building:
      'A connected community and event experience spanning discovery, participation, communication, and the relationships that continue after an event ends.',
    seaforthRole:
      'Seaforth is developing the community model, event experience, brand, digital product direction, audience strategy, and growth systems.',
  },
  {
    slug: 'koda',
    name: 'Koda',
    tagline: 'Weekly time tracking without another dashboard.',
    description:
      'Koda is a time-tracking service that keeps weekly submission simple. Submit time cards by week and receive them by email, with secure authentication and optional billing.',
    category: 'Workflow Software',
    stage: 'Building',
    visual: 'time',
    images: [],
    idea: 'Many people need a reliable record of weekly time without the weight of a full project-management system. Koda reduces that workflow to the parts that matter.',
    building:
      'A focused weekly time-card service with secure accounts, email delivery, and optional billing for users who need an uncomplicated recurring workflow.',
    seaforthRole:
      'Seaforth is building the product, application architecture, authentication, billing options, email workflow, positioning, and launch system.',
  },
  {
    slug: 'sgnlai',
    name: 'sgnlAI',
    tagline: 'Know why your product metrics changed through a single API call.',
    description:
      'sgnlAI is an analytics API for product teams. Connect it to your data and it explains why metrics changed in plain language, without another dashboard, guesswork, or a wait for the data team.',
    category: 'Product Analytics',
    stage: 'Building',
    visual: 'signal',
    images: [],
    idea: 'Product teams can often see that a metric moved before they can explain why. sgnlAI is designed to shorten the distance between a change in the data and an actionable explanation.',
    building:
      'An analytics API that connects to product data, evaluates metric changes, and returns a plain-language explanation through one request.',
    seaforthRole:
      'Seaforth is developing the API product, technical architecture, developer experience, positioning, brand, onboarding, and go-to-market system.',
  },
];

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
