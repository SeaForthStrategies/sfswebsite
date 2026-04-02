/**
 * Build Next.js app icons from the wave mark (square, letterboxed, transparent padding).
 * Run: pnpm generate-app-icons
 */
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
/** Brand wave mark used for tab + home-screen icons (not the full wordmark). */
const logo = join(root, 'public/images/wave-mark.png');
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
