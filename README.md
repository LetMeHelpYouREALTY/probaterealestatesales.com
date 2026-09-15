# Probate Real Estate Sales Website

A modern, professional website for probate real estate services built with Next.js 15, TypeScript, Tailwind CSS, and Biome.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for real estate services
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Type Safety**: Full TypeScript support for better development experience
- **Code Quality**: Biome for formatting, linting, and code organization
- **Real Estate Focused**: Components and content specifically designed for probate real estate

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Code Quality**: Biome (formatter + linter)
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### 4. Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

## 🧹 Code Quality Commands

- **Lint**: `npm run lint` - Check code with Biome
- **Lint & Fix**: `npm run lint:fix` - Fix auto-fixable issues
- **Format**: `npm run format` - Format code with Biome
- **Type Check**: `npm run type-check` - Run TypeScript compiler

## Google Search Console, Maps & Business Profile

1. **Search Console** ([GSC](https://search.google.com/search-console)): Add the `www` property `https://www.probaterealestatesales.com/`, verify with the HTML tag method, and set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel (see `.env.example`). Submit `https://www.probaterealestatesales.com/sitemap.xml`.
2. **Canonical URLs**: Production `robots.txt` always points the sitemap to `https://www.probaterealestatesales.com/sitemap.xml` (avoids duplicate host confusion).
3. **Validation workflow**: Run URL Inspection and Rich Results Test against canonical `https://www.probaterealestatesales.com/.../` URLs first.
4. **Apex reliability**: Keep `probaterealestatesales.com` attached in Vercel Domains and mapped in DNS so apex permanently redirects to `www` (DNS-only if Cloudflare is used).
5. **Maps & NAP**: Office address, hours, phone, and Maps URLs are centralized in [`src/config/site-google.ts`](src/config/site-google.ts). Keep them identical to your **Google Business Profile** (NAP + hours).
6. **Structured data**: `LocalBusiness` and `LegalService` JSON-LD include `hasMap` and `sameAs` (site, social, Maps listing, optional GBP URL).
7. **Business Profile URL**: Set `NEXT_PUBLIC_GOOGLE_BUSINESS_PROFILE_URL` to your public Maps/CID or GBP link so it appears in `sameAs` and the footer “Google reviews” link.

See **[docs/SITE-AUDIT.md](docs/SITE-AUDIT.md)** for an ongoing technical SEO / performance checklist.

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Homepage
├── components/         # Reusable components
│   ├── Hero.tsx       # Hero section
│   ├── Services.tsx   # Services showcase
│   ├── FeaturedProperties.tsx  # Property listings
│   ├── WhyChooseUs.tsx        # Company advantages
│   ├── Testimonials.tsx       # Client reviews
│   └── ContactSection.tsx     # Contact form
└── types/             # TypeScript type definitions
```

## 🎨 Customization

### Colors
The color scheme is defined in `tailwind.config.ts` with custom primary, secondary, and accent colors.

### Components
All components are built with Tailwind CSS utility classes and can be easily customized by modifying the classes.

### Content
Update the content in each component file to match your business needs.

## 📱 Responsive Design

The website is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly buttons and forms
- Optimized typography for all screen sizes

## 🔧 Configuration Files

- **`biome.json`**: Biome configuration for code formatting and linting
- **`tailwind.config.ts`**: Tailwind CSS configuration with custom theme
- **`tsconfig.json`**: TypeScript configuration
- **`next.config.js`**: Next.js configuration

## 📈 Performance Features

- Image optimization with Next.js Image component
- Cloudflare Images CDN with git-backed originals (`public/images/`, `npm run cloudflare:images`)
- CSS-in-JS with Tailwind CSS
- Code splitting and lazy loading
- Optimized bundle size

## 🔍 SEO & Indexing

- **Google indexing**: See [docs/GOOGLE_INDEXING_CHECKLIST.md](docs/GOOGLE_INDEXING_CHECKLIST.md) for setup and maintenance.
- **IndexNow** (Vercel): `npm run indexnow` – submit URLs to Bing/Yandex. See [docs/INDEXNOW.md](docs/INDEXNOW.md).
- **Cloudflare Images**: `npm run cloudflare:images` – upload git-backed photos. See [docs/assets/cloudflare-images.md](docs/assets/cloudflare-images.md).

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The project can be deployed to any platform that supports Node.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please contact:
- Email: DrJanSells@ProbateRealEstateSales.com
- Phone: (702) 830-9222

## 🔄 Updates

To keep your project up to date:

```bash
npm update
# or
yarn upgrade
# or
pnpm update
```

Check the [Next.js documentation](https://nextjs.org/docs) for the latest features and best practices.
