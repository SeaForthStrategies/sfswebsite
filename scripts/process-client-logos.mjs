/**
 * One-off / occasional: back up client marks, then make very light pixels transparent
 * and normalize misnamed JPEG-as-PNG files to real PNGs.
 *
 * Run: pnpm process-client-logos
 *
 * Uses a high RGB threshold so only near-white (typical box backgrounds) clears—re-check
 * each logo after running; restore from public/clients/originals/pre-transparent-pass/ if needed.
 */
import { copyFile, mkdir, readdir, rename, stat } from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const ROOT = process.cwd();
const CLIENT_DIR = path.join(ROOT, 'public/clients');
const BACKUP_DIR = path.join(CLIENT_DIR, 'originals', 'pre-transparent-pass');

/** Keep in sync with `ClientsMarquee` DEFAULT_LOGOS */
const LOGO_FILES = [
  '1031 Capital Solutions.png',
  'Amanda Rose Consulting.png',
  'Fischer Family Foundation.png',
  'Mayor John Franklin.png',
  'My Ruca.png',
  'PeopleMVR.png',
  'Premier Recruits.png',
  'The Social Afair.png',
  'Toothpicks Catering.png',
  'Vine & Tap.png',
  'Wellness With Lauren.png',
];

/** rgb >= threshold → transparent (anti-aliased white backdrops) */
const WHITE_THRESHOLD = 248;

async function processOne(filename) {
  const inputPath = path.join(CLIENT_DIR, filename);
  let st;
  try {
    st = await stat(inputPath);
  } catch {
    console.warn(`skip (missing): ${filename}`);
    return;
  }
  if (st.size < 200) {
    console.warn(`skip (too small): ${filename}`);
    return;
  }

  await mkdir(BACKUP_DIR, { recursive: true });
  await copyFile(inputPath, path.join(BACKUP_DIR, filename));

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .toColorspace('srgb')
    .raw()
    .toBuffer({ resolveWithObject: true });

  if (info.channels !== 4) {
    console.warn(`skip (unexpected channels ${info.channels}): ${filename}`);
    return;
  }

  const { width, height } = info;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    if (r >= WHITE_THRESHOLD && g >= WHITE_THRESHOLD && b >= WHITE_THRESHOLD) {
      data[i + 3] = 0;
    }
  }

  const tmpPath = path.join(CLIENT_DIR, `.tmp-${filename.replace(/\s+/g, '-')}`);
  await sharp(Buffer.from(data), {
    raw: { width, height, channels: 4 },
  })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(tmpPath);

  await rename(tmpPath, inputPath);
  console.log(`ok: ${filename} (${width}×${height})`);
}

const only = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const list = only.length ? only : LOGO_FILES;

const dirFiles = new Set(await readdir(CLIENT_DIR));
for (const name of list) {
  if (!dirFiles.has(name)) {
    console.warn(`skip (not in folder): ${name}`);
    continue;
  }
  try {
    await processOne(name);
  } catch (e) {
    console.error(`fail: ${name}`, e);
  }
}
