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

## Once You've Added Logos

Update the logo list in `src/pages/index.astro` in the client logos section with your actual filenames.

