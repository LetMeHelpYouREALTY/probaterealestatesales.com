# Image Guidelines

SEO and performance guidelines for images on probaterealestatesales.com.

## Alt Text (Probate SEO)

- **Required** for all meaningful images
- Include **location** and **service** where relevant
- See `docs/hyperlocal/content-guidelines.md` for patterns

**Examples:**
| Image | Alt |
|-------|-----|
| Agent headshot | Dr. Jan Duffy, Las Vegas probate realtor |
| Location hero | Henderson Nevada probate property exterior |
| Property | Summerlin luxury home probate sale |
| Conference room | Probate consultation room Las Vegas Nevada |
| Icon | Probate court gavel icon |
- Use empty `alt=""` only for purely decorative images

## File Specs

| Use Case | Format | Max Size | Dimensions |
|----------|--------|----------|------------|
| Hero images | WebP, JPG | 200KB | 1920×1080 or 1200×630 |
| Headshots | WebP, JPG | 100KB | 600×600 |
| Icons | SVG, PNG | 50KB | 64×64 to 256×256 |
| Logo | SVG preferred | 20KB | Flexible |

## Optimization

- Run `npm run optimize-images` in `public/images/` before adding new assets
- Upload to Cloudflare Images with `npm run cloudflare:images` (git remains the backup)
- See `docs/assets/cloudflare-images.md`
- See `public/images/image-config.json` for quality and responsive settings
- Lazy load below-fold images (`loading="lazy"`)

## Naming

- Use lowercase, hyphens: `dr-jan-duffy.jpg`, `henderson-residential.jpg`
- No spaces or special characters
- Include location in filename when relevant
