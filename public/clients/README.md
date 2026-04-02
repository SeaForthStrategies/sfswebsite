# Client Logos Folder

Add your client logo images to this folder.

## File Guidelines

### Image Format

- **Preferred**: PNG with transparent background
- **Acceptable**: SVG, JPG, or WebP
- **Dimensions**: 200-400px wide recommended
- **Resolution**: 2x for retina displays

### Naming Convention

Use lowercase with hyphens:

- `client-name.png`
- `company-name-logo.png`

### Examples

```
/public/clients/
  ├── acme-corp.png
  ├── tech-solutions.png
  ├── wellness-brand.png
  ├── real-estate-group.png
  └── startup-co.png
```

### Color Recommendations

- Logos should work on both white and off-white backgrounds
- If logos are dark, they'll show well
- If logos are light, consider adding a subtle drop shadow or using a colored version

### File Size

- Keep images under 100KB each for fast loading
- Optimize with tools like TinyPNG or ImageOptim

## Transparency & clipping

- The trust bar uses **`object-contain`** with padding so logos are **not cropped**. Use **PNG (or SVG) with an alpha channel** so the strip background shows through.
- **`Mayor John Franklin.png` was a JPEG saved as `.png`**—it has been re-encoded as a real PNG. Prefer exporting logos as PNG with transparency from the start.
- To re-run automated **near-white → transparent** (and refresh backups), from the repo root:

  ```bash
  pnpm process-client-logos
  ```

  Copies are saved under `public/clients/originals/pre-transparent-pass/` before overwriting. If a mark looks wrong (e.g. light colors in the logo were cleared), restore from that folder or lower the threshold in `scripts/process-client-logos.mjs`.

## Once You've Added Logos

Add the filename to `DEFAULT_LOGOS` in `src/components/visual/ClientsMarquee.tsx` (and to `LOGO_FILES` in `scripts/process-client-logos.mjs` if you use the script).
