# Krishna Rides

Single-page marketing site for Krishna Cabs Pvt Ltd built with Vite + React and Tailwind CSS. The project is now configured for Cloudflare Pages so it can run as a static build without a Node server.

## Development

```bash
npm install
npm run dev
```

`npm run dev` starts Vite on `http://localhost:5173` with hot module reload.

### Preview build locally

```bash
npm run build       # generates dist/
npm run pages:dev   # serves dist/ with Cloudflare Pages simulator
```

## Deployment

Cloudflare Pages settings:

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Compatibility date**: matches `wrangler.toml`

With Wrangler you can deploy straight from the CLI:

```bash
npm run build
npm run pages:deploy
```

## Structure

```
client/         # Vite app source
client/public/  # Static assets copied to dist (favicon)
attached_assets/# Images imported via @assets alias
LOGO-SETUP.md   # Instructions for managing the KCPL logo
```

## Environment

No runtime env vars are required. Everything renders statically and uses client-side mailto links for bookings and contact forms.
