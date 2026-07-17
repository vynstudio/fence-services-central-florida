# Fence Line brand assets

Processed from `/Downloads/logofenceline` (propuesta suite + PDF).

## Web-ready (use these)

| File | Use |
|------|-----|
| `logo-dark.png` | **Primary header/footer** — green on transparent (light bg) |
| `logo-dark@2x.png` | Retina header |
| `logo-light.png` | White wordmark on dark surfaces |
| `logo-black.png` | Black monochrome on light |
| `logo-gold.png` | Gold wordmark (optional accent) |
| `logo-on-green.png` | White on transparent (for green brand plates) |
| `logo-mark.png` | Icon only |
| `og-logo.png` | Open Graph share card (white wordmark) |
| `favicon-32.png` | Browser favicon |
| `apple-touch-icon.png` | iOS home screen |

## Source archive (`source/`)

Full 4500×4500 masters + PDF for design handoff.

## Code

- Header: `BrandLogo` → `logo-dark.png`
- Dark sections: `variant="light"` → `logo-light.png`
- Share card: auto-loads `og-logo.png` via `app/opengraph-image.jsx`
