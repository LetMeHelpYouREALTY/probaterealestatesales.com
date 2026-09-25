import { expect, test } from '@playwright/test';

test.describe('GBP actions and heading images', () => {
  test('homepage shows GBP action bar, map, and heading images', async ({ page }) => {
    await page.goto('/');

    const bar = page.locator('[data-gbp-actions="true"]');
    await expect(bar).toBeVisible();
    await expect(bar.getByRole('link', { name: /Call/i })).toBeVisible();
    await expect(bar.getByRole('link', { name: /Directions/i })).toBeVisible();
    await expect(bar.getByRole('link', { name: /Reviews/i })).toBeVisible();

    await expect(
      page.getByRole('heading', { name: /Probate Real Estate Sales/i }).first()
    ).toBeVisible();
    await expect(page.locator('img[alt*="Las Vegas"]').first()).toBeVisible();
    await expect(
      page.locator('iframe[title*="Google Maps"], iframe[title*="office map"]')
    ).toHaveCount(1);

    await expect(
      page.getByRole('heading', { name: /Search probate homes for sale/i })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Browse probate homes', exact: true })
    ).toBeVisible();
  });

  test('blog and legal resource pages replace gradient heroes with heading photos', async ({
    page,
  }) => {
    await page.goto('/blog/nevada-probate-timeline/');
    await expect(
      page.getByRole('heading', { name: /Nevada Probate Timeline Guide/i })
    ).toBeVisible();
    await expect(page.locator('img[alt*="probate timeline"]').first()).toBeVisible();

    await page.goto('/blog/certificate-of-incumbency/');
    await expect(
      page.getByRole('heading', { name: /Certificate of Incumbency Guide/i })
    ).toBeVisible();
    await expect(page.locator('img[alt*="certificate of incumbency"]').first()).toBeVisible();

    await page.goto('/resources/las-vegas-probate-legal-resources/');
    await expect(
      page.getByRole('heading', { name: /Las Vegas probate & estate legal resources/i })
    ).toBeVisible();
    await expect(page.locator('img[alt*="Regional Justice Center"]').first()).toBeVisible();
  });

  test('location page uses a real photo instead of a map-pin placeholder', async ({ page }) => {
    await page.goto('/locations/henderson/');
    await expect(
      page.getByRole('heading', { name: /Henderson Probate Real Estate Services/i })
    ).toBeVisible();
    await expect(page.locator('img[alt*="Henderson"]').first()).toBeVisible();
    await expect(page.getByRole('link', { name: /View Google Reviews/i }).first()).toBeVisible();
  });

  test('services and resources H2/H3 cards use heading-matched photos', async ({ page }) => {
    await page.goto('/faq/');
    await expect(
      page.getByRole('heading', { name: /Small Estate Affidavit Guide/i })
    ).toBeVisible();
    await expect(page.locator('img[alt*="small estate affidavit"]').first()).toBeVisible();

    await page.goto('/services/');
    await expect(
      page.getByRole('heading', { name: /Independent Administration: Faster & More Private/i })
    ).toBeVisible();
    await expect(page.locator('img[alt*="Independent administration"]').first()).toBeVisible();
    await expect(page.locator('img[alt*="Partition action"]').first()).toBeVisible();

    await page.goto('/resources/');
    await expect(page.getByRole('heading', { name: /Cost Calculator/i }).first()).toBeVisible();
    await expect(page.locator('img[alt*="cost calculator"]').first()).toBeVisible();
  });

  test('contact page has Call, Directions, Reviews, and map', async ({ page }) => {
    await page.goto('/contact/');
    await expect(page.getByRole('heading', { name: /Contact us/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /View Google Reviews/i }).first()).toBeVisible();
    await expect(page.locator('iframe[title*="400 S 4th"]')).toBeVisible();
  });

  test('long-form H2s use heading-matched photos', async ({ page }) => {
    await page.goto('/resources/nevada-probate-guide/');
    await expect(
      page.getByRole('heading', { name: /Why Nevada Probate is Better Than California/i })
    ).toBeVisible();
    await expect(page.locator('img[alt*="Nevada and California"]').first()).toBeVisible();

    await page.goto('/conservatorship-real-estate/');
    await expect(page.locator('img[alt*="petition for authority"]').first()).toBeVisible();
    await expect(page.locator('img[alt*="Conservator accounting"]').first()).toBeVisible();

    await page.goto('/mortgage-calculator/');
    await expect(page.getByRole('heading', { name: /Mortgage Calculator/i }).first()).toBeVisible();
    await expect(page.locator('img[alt*="Mortgage worksheet"]').first()).toBeVisible();
  });
});
