# Cloudflare Images + git backup

Heading-matched photos live in `public/images/` (git backup) and are uploaded to **Cloudflare Images** as the primary CDN.

Do not orange-cloud the Vercel apex/www host. Serve images from Cloudflare Images (`imagedelivery.net` or a dedicated images hostname) while the Next.js app stays on Vercel.

## Local / Vercel fallback

Until Cloudflare Images env vars are set, `getSiteImageSrc()` returns `/images/...` from this repo. Vercel Image Optimization still compresses those files.

## Enable Cloudflare delivery

1. Create a Cloudflare Images product on the account (not a zone proxy).
2. Upload:

```bash
CLOUDFLARE_IMAGES_API_TOKEN=xxx \
CLOUDFLARE_ACCOUNT_ID=yyy \
node scripts/upload-cloudflare-images.js
```

3. In Vercel Production env:

- `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ACCOUNT_HASH` — hash from the Images dashboard
- optional `NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_BASE` — custom host, e.g. `https://images.probaterealestatesales.com`

Delivery URL pattern:

`https://imagedelivery.net/<ACCOUNT_HASH>/<imageId>/public`

Image ids match keys in `public/images/cloudflare-catalog.json` (for example `hendersonHomes`, `probateTimeline`, `certificateOfIncumbency`).

Re-run the upload script after adding files so Cloudflare stays the primary CDN and git remains the backup.

## Alt text

Alts are defined in `src/lib/cloudflare-images.ts` and include location + service (probate real estate) without fair-housing proxies.
