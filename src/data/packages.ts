/**
 * Two primary services: Development (custom code, GitHub, Vercel) vs. Design (Squarespace—lower entry).
 * Used on pricing, home packages, and services overview.
 */
export const SERVICE_PACKAGES = [
  {
    name: 'Development',
    price: '$3,500',
    hook: 'Custom-coded sites—Next.js, GitHub, Vercel—and engineering you can grow with.',
    audience:
      'You want a hand-built front end (usually Next.js) with responsive UI, performance, accessibility, and a real code workflow—not a hosted page builder.',
    idealFor:
      'Teams and owners who need bespoke UI, component-driven development, version control, and deploys that match a professional stack.',
    clientAccount:
      'Hosting the site requires a $30 fee paid to SeaForth Strategies (in addition to project pricing).',
    deliverables: [
      'Responsive implementation and components',
      'Git-based workflow and collaboration',
      'Staging and production deploys (e.g. Vercel)',
      'Accessibility, semantic markup, and launch handoff',
    ],
    subject: 'Development',
    cta: 'Discuss development',
    featured: true,
    badge: 'Custom stack',
  },
  {
    name: 'Design',
    price: '$2,800',
    hook: 'Designed and built on Squarespace—polished, fast to launch, and a lower starting price than custom development.',
    audience:
      'You want a professional site on Squarespace: clear IA, visual design, template and styling work, and content setup—without a code repo.',
    idealFor:
      'Brands that prefer Squarespace for hosting and day-to-day updates while still getting intentional design and structure.',
    clientAccount:
      'You create your Squarespace account and pay Squarespace directly for your subscription—we design and build on your plan.',
    deliverables: [
      'Site map and page structure',
      'Template selection and visual design',
      'Squarespace styling (including custom CSS when needed)',
      'Launch support and refinement',
    ],
    subject: 'Design',
    cta: 'Discuss design',
    featured: false,
    badge: 'Squarespace',
  },
] as const;
