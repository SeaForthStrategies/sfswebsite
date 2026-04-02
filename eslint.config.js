import nextPlugin from '@next/eslint-plugin-next';

export default [
  // Next.js 16 ships flat-config compatible presets on the plugin.
  // Using these avoids FlatCompat issues under ESLint 9.
  nextPlugin.configs['core-web-vitals'],
  {
    ignores: ['**/._*', 'node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];
