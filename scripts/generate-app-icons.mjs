/**
 * Build Next.js app icons from the site logo (square, letterboxed, transparent).
 * Run: pnpm exec node scripts/generate-app-icons.mjs
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const logo = join(root, 'public/images/logo.png');
const iconOut = join(root, 'src/app/icon.png');
const appleOut = join(root, 'src/app/apple-icon.png');

const logoBuf = await sharp(logo).ensureAlpha().toBuffer();

await sharp(logoBuf)
  .resize(512, 512, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(iconOut);

await sharp(logoBuf)
  .resize(180, 180, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .png()
  .toFile(appleOut);

console.log('Wrote', iconOut);
console.log('Wrote', appleOut);
