/**
 * Tooling shown as logos (Simple Icons CDN). Grouped for the site’s expertise section.
 * @see https://abigaillehr.com/skills
 */
export const TECH_STACK_GROUPS = [
  {
    label: 'Design',
    items: [{ name: 'Figma', slug: 'figma' }],
  },
  {
    label: 'Web & tech',
    items: [
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'React', slug: 'react' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'Tailwind CSS', slug: 'tailwindcss' },
      { name: 'Vercel', slug: 'vercel' },
      { name: 'Squarespace', slug: 'squarespace' },
      { name: 'GitHub', slug: 'github' },
      { name: 'Git', slug: 'git' },
    ],
  },
] as const;

/** Brand teal #2a7c84 — single-color SVGs from Simple Icons CDN */
export const TECH_ICON_COLOR = '2a7c84';
