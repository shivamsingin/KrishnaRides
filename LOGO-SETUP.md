# Logo and Favicon Setup

The logo and favicon have been configured to use `kcpl-logo.png` site-wide.

## File Placement

To complete the setup, please place your KCPL logo image file in **two locations**:

1. **For component imports** (Header, Footer):
   - Location: `attached_assets/kcpl-logo.png`
   - This is used by React components via the `@assets` alias

2. **For favicon** (browser tab icon):
   - Location: `client/public/kcpl-logo.png`
   - This is served as a static file for the favicon

## Image Requirements

- **Format**: PNG (recommended for transparency) or JPG
- **Size**: 
  - Logo: At least 512x512 pixels (square) for best quality
  - Favicon: Will be automatically resized by browsers
- **Background**: Transparent PNG preferred for logo usage
- **File name**: `kcpl-logo.png` (must match exactly)

## What's Been Updated

✅ Favicon links added to `client/index.html`
✅ Header component updated to use new logo
✅ Footer component updated to use new logo
✅ Open Graph image meta tag updated

## After Adding the File

Once you place the `kcpl-logo.png` file in both locations:
1. The logo will appear in the header and footer
2. The favicon will appear in browser tabs
3. The logo will be used for social media sharing (Open Graph)

The development server should automatically pick up the changes. If not, restart the server.

