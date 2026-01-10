# Image Update Guide

## How to Update Images in TAMAKKUN AI Website

### The Issue
The website reads images from `public/assets/` folder, not from `src/assets/`. When you update images in `src/assets/`, you need to copy them to `public/assets/` for the changes to appear on the website.

### Quick Solution
Run this command whenever you update images:

```bash
# Copy updated images from src/assets to public/assets
cp src/assets/icon.png public/assets/icon.png
cp src/assets/logo.png public/assets/logo.png
```

Or copy both at once:
```bash
cp src/assets/*.png public/assets/
```

### Complete Refresh Steps

1. **Update images in `src/assets/`** (your source folder)

2. **Copy to `public/assets/`**:
   ```bash
   cp src/assets/icon.png public/assets/icon.png
   cp src/assets/logo.png public/assets/logo.png
   ```

3. **Clear Next.js cache** (optional but recommended):
   ```bash
   rm -rf .next
   ```

4. **Restart the dev server**:
   - Stop the current server (Ctrl+C)
   - Start again: `npm run dev`

5. **Hard refresh your browser**:
   - Mac: `Cmd + Shift + R`
   - Windows/Linux: `Ctrl + Shift + R`
   - Or clear browser cache

### Why This Happens
- `src/assets/` = Source files (for development/organization)
- `public/assets/` = Public files (served by Next.js to the browser)
- Next.js only serves files from the `public/` folder
- The browser and Next.js cache images for performance

### Image Files Used
- `public/assets/logo.png` - Full logo with text (used in Hero section)
- `public/assets/icon.png` - Icon without text (used in Navbar)

### Future Improvement
Consider using a build script to automatically sync images, or store images directly in `public/assets/` if you prefer.
