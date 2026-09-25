import { expect, test } from '@playwright/test';

test.describe('Services Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services');
  });

  test('should load services page successfully', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Las Vegas Probate Real Estate Services/);

    // Check main heading
    await expect(page.locator('h1')).toContainText('Overwhelmed by Nevada Probate');
    await expect(page.locator('h1')).toContainText('45 Days');

    // Verify page loads without errors
    await expect(page.locator('body')).toBeVisible();
  });

  test('should have hero section with psychological triggers', async ({ page }) => {
    // Check hero section exists
    const heroSection = page.locator('.hero-probate');
    await expect(heroSection).toBeVisible();

    // Check emotional headline
    const headline = page.locator('.emotional-headline');
    await expect(headline).toBeVisible();
    await expect(headline).toContainText('45 Days');

    // Check stakeholder messages
    const executorMsg = page.locator('.for-executors');
    const heirMsg = page.locator('.for-heirs');
    const attorneyMsg = page.locator('.for-attorneys');

    await expect(executorMsg).toContainText('Executors');
    await expect(heirMsg).toContainText('Heirs');
    await expect(attorneyMsg).toContainText('Attorneys');
  });

  test('should display social proof ticker', async ({ page }) => {
    // Check live ticker
    const ticker = page.locator('.live-ticker');
    await expect(ticker).toBeVisible();

    // Check ticker content
    await expect(page.locator('text=Summerlin: Sold in 38 days')).toBeVisible();
    await expect(page.locator('text=Henderson estate: $15K over asking price')).toBeVisible();
    await expect(page.locator('text=Court approval achieved: 98% first attempt')).toBeVisible();
  });

  test('should have multi-option CTA strategy', async ({ page }) => {
    // Check primary CTA
    const primaryCTA = page.locator('.primary-cta');
    await expect(primaryCTA).toBeVisible();
    await expect(primaryCTA).toContainText('Need Immediate Help?');
    await expect(primaryCTA).toContainText('(702) 555-0123');

    // Check secondary CTA
    const secondaryCTA = page.locator('.secondary-cta');
    await expect(secondaryCTA).toBeVisible();
    await expect(secondaryCTA).toContainText(
      'Download: "2025 Nevada Probate Timeline + Checklist"'
    );

    // Check tertiary CTA
    const tertiaryCTA = page.locator('.tertiary-cta');
    await expect(tertiaryCTA).toBeVisible();
    await expect(tertiaryCTA).toContainText('Get Free Property Assessment');
  });

  test('should display service cards with micro-conversions', async ({ page }) => {
    // Check service cards section
    const serviceCards = page.locator('.service-card');
    await expect(serviceCards).toHaveCount(3);

    // Check Court Confirmation Sales card
    const courtCard = page.locator('[data-service="court-confirmation"]');
    await expect(courtCard).toBeVisible();
    await expect(courtCard).toContainText('Court Confirmation Sales');
    await expect(courtCard).toContainText('98% first-approval rate');

    // Check Independent Administration card
    const independentCard = page.locator('[data-service="independent-administration"]');
    await expect(independentCard).toBeVisible();
    await expect(independentCard).toContainText('Independent Administration');
    await expect(independentCard).toContainText('Faster & More Private');

    // Check Trust Administration card
    const trustCard = page.locator('[data-service="trust-administration"]');
    await expect(trustCard).toBeVisible();
    await expect(trustCard).toContainText('Trust Administration');
    await expect(trustCard).toContainText('Certificate of Incumbency');
  });

  test('should have hyper-local content sections', async ({ page }) => {
    // Check local expertise section
    const localSection = page.locator('.local-expertise');
    await expect(localSection).toBeVisible();

    // Check neighborhood cards
    const neighborhoodCards = page.locator('.neighborhood-card');
    await expect(neighborhoodCards).toHaveCount(3);

    // Check Summerlin card
    await expect(page.locator('text=Summerlin Probate Sales')).toBeVisible();
    await expect(page.locator('text=Average sale time: 42 days')).toBeVisible();

    // Check Henderson card
    await expect(page.locator('text=Henderson Estate Properties')).toBeVisible();
    await expect(page.locator('text=Average sale time: 48 days')).toBeVisible();

    // Check North Las Vegas card
    await expect(page.locator('text=North Las Vegas Probate')).toBeVisible();
    await expect(page.locator('text=Average sale time: 45 days')).toBeVisible();
  });

  test('should have interactive timeline calculator', async ({ page }) => {
    // Check calculator section
    const calculator = page.locator('#probate-timeline');
    await expect(calculator).toBeVisible();

    // Check form elements
    const locationSelect = page.locator('#location');
    const statusSelect = page.locator('#status');
    const typeSelect = page.locator('#type');

    await expect(locationSelect).toBeVisible();
    await expect(statusSelect).toBeVisible();
    await expect(typeSelect).toBeVisible();

    // Check timeline action button (no HTML form — type="button")
    const timelineButton = page.getByRole('button', { name: 'Get Your Timeline' });
    await expect(timelineButton).toBeVisible();
  });

  test('should display trust-building elements', async ({ page }) => {
    // Check attorney endorsements
    const endorsement = page.locator('.attorney-quote');
    await expect(endorsement).toBeVisible();
    await expect(endorsement).toContainText('certificates of incumbency');
    await expect(endorsement).toContainText('letters testamentary');

    // Check certification badges
    const certifications = page.locator('.certifications');
    await expect(certifications).toBeVisible();

    // Check live chat integration
    const chatSection = page.locator('.trust-chat');
    await expect(chatSection).toBeVisible();
    await expect(chatSection).toContainText('Chat with Probate Expert');
  });

  test('should have conversion optimization elements', async ({ page }) => {
    // Check final CTA section
    const finalCTA = page.locator('section:last-child');
    await expect(finalCTA).toBeVisible();
    await expect(finalCTA).toContainText('Ready to Start Your Probate Property Sale?');

    // Check guarantee elements
    await expect(page.locator('text=45-Day Guarantee')).toBeVisible();
    await expect(page.locator('text=No Upfront Costs')).toBeVisible();
    await expect(page.locator('text=Executor Support')).toBeVisible();

    // Check final CTA buttons
    const finalButtons = page.locator('section:last-child button');
    await expect(finalButtons).toHaveCount(2);
  });

  test('should have proper schema markup', async ({ page }) => {
    // Check for JSON-LD schema
    const schemaScript = page.locator('script[type="application/ld+json"]');
    await expect(schemaScript).toBeVisible();

    // Verify schema content
    const schemaContent = await schemaScript.textContent();
    expect(schemaContent).toContain('"@type"');
    expect(schemaContent).toContain('"RealEstateAgent"');
    expect(schemaContent).toContain('"FAQPage"');
    expect(schemaContent).toContain('"OfferCatalog"');
  });

  test('should be mobile responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check content is still readable
    await expect(page.locator('h1')).toBeVisible();

    // Check CTA matrix stacks properly
    const ctaMatrix = page.locator('.cta-matrix');
    await expect(ctaMatrix).toBeVisible();

    // Check service cards stack properly
    const serviceCards = page.locator('.service-card');
    await expect(serviceCards).toBeVisible();
  });

  test('should have proper accessibility features', async ({ page }) => {
    // Check for proper ARIA labels
    const buttons = page.locator('button');
    for (let i = 0; i < (await buttons.count()); i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const textContent = await button.textContent();

      // Buttons should have either aria-label or descriptive text
      expect(ariaLabel || textContent?.trim()).toBeTruthy();
    }

    // Check for proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    let previousLevel = 0;

    for (let i = 0; i < (await headings.count()); i++) {
      const heading = headings.nth(i);
      const tagName = await heading.evaluate((el) => el.tagName.toLowerCase());
      const level = Number.parseInt(tagName.charAt(1), 10);

      // Headings should not skip levels
      expect(level).toBeLessThanOrEqual(previousLevel + 1);
      previousLevel = level;
    }
  });

  test('should handle form interactions properly', async ({ page }) => {
    // Test timeline calculator form
    const locationSelect = page.locator('#location');
    const statusSelect = page.locator('#status');
    const typeSelect = page.locator('#type');

    // Select different options
    await locationSelect.selectOption('Washoe County');
    await statusSelect.selectOption('Letters testamentary issued');
    await typeSelect.selectOption('Condo/Townhome');

    // Verify selections
    await expect(locationSelect).toHaveValue('Washoe County');
    await expect(statusSelect).toHaveValue('Letters testamentary issued');
    await expect(typeSelect).toHaveValue('Condo/Townhome');
  });

  test('should have proper meta tags for SEO', async ({ page }) => {
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /45 days/);

    // Check keywords
    const metaKeywords = page.locator('meta[name="keywords"]');
    await expect(metaKeywords).toHaveAttribute('content', /Las Vegas probate real estate/);

    // Check Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /45-Day Sale Guarantee/);
  });
});
