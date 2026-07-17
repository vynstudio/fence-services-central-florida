# Brand logos

## Site UI
- `logo-dark.svg` / `logo-light.svg` — optional; the header currently uses the inline FenceLine wordmark.

## Share card (Open Graph / Twitter / iMessage / WhatsApp)
When your final logo is ready:

1. Export a **transparent PNG** (or convert SVG → PNG).
2. Recommended: **about 400×400px**, logo only, no padding crush, works on dark background.
3. Save as:

```
public/logo/og-logo.png
```

4. Redeploy. The share card at `/opengraph-image` picks it up automatically.

Until then, the card uses a temporary fence-post mark + “FenceLine / Florida” wordmark.
