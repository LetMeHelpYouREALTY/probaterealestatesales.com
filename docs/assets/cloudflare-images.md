# Cloudflare Images + git backup

This site uses **Cloudflare Images hosted storage** as the primary CDN and **git** (`public/images/`) as the backup. The Next.js app stays on Vercel. Do **not** orange-cloud the Vercel apex/www host.

Based on [Cloudflare Images hosted docs](https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/) (updated 2026-04 / 2026-09): delivery URLs are:

`https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT_NAME>`

## This account (Developer Resources)

| Field | Value |
| --- | --- |
| Account ID | `2cc579c1ec9e426ed585e933ebf4753b` |
| Account hash | `byE6BTe9lNqo21V57n4aPQ` |
| Image Delivery URL | `https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<image_id>/<variant_name>` |

Image ids are catalog keys in `public/images/cloudflare-catalog.json` (custom IDs such as `hendersonHomes`, `probateTimeline`). The default variant is `public`. Cloudflare Images then transcodes to AVIF/WebP when the browser supports them.

## Local / Vercel fallback

Until hosted delivery is switched on, `getSiteImageSrc()` returns `/images/...` from this repo. Vercel Image Optimization still compresses those files.

## Upload to hosted Images

Needs an API token with **Account.Cloudflare Images:Edit**. Account ID defaults in the script.

```bash
CLOUDFLARE_IMAGES_API_TOKEN=xxx npm run cloudflare:images
```

Confirm every custom ID is live:

```bash
npm run cloudflare:images:verify
```

## Switch the site to imagedelivery.net

After uploads return HTTP 200, set on Vercel Production (and Preview if you want):

- `NEXT_PUBLIC_CLOUDFLARE_IMAGES_HOSTED=true`

Optional overrides:

- `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH` — defaults to `byE6BTe9lNqo21V57n4aPQ`
- `NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE` — custom host, e.g. `https://images.probaterealestatesales.com` ([custom domains](https://developers.cloudflare.com/images/optimization/hosted-images/serve-from-custom-domains/))

Set the hash to `off` to force git-backed files.

## Variants

The account `public` variant is enough to start. Extra named variants (hero, thumb) can be added in **Images → Delivery → Create variant** or via the [variants API](https://developers.cloudflare.com/images/optimization/hosted-images/create-variants/). Flexible variants (`w=1200,format=auto`) require a separate Delivery toggle and are not enabled from this repo.

## Alt text

Alts are defined in `src/lib/cloudflare-images.ts` and include location + service (probate real estate) without fair-housing proxies.
