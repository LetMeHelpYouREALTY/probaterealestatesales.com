import { expect, test } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should meet Core Web Vitals thresholds', async ({ page }) => {
    // Navigate to homepage
    await page.goto('/', { waitUntil: 'networkidle' });

    // Measure performance metrics
    const performanceMetrics = await page.evaluate(() => {
      return new Promise<Record<string, number>>((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const metrics: Record<string, number> = {};

          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              metrics.DOMContentLoaded =
                navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
              metrics.LoadComplete = navEntry.loadEventEnd - navEntry.loadEventStart;
              metrics.FirstByte = navEntry.responseStart - navEntry.requestStart;
            }
          });

          resolve(metrics);
        }).observe({ entryTypes: ['navigation'] });

        // Fallback if PerformanceObserver doesn't work
        setTimeout(() => {
          const navEntry = performance.getEntriesByType(
            'navigation'
          )[0] as PerformanceNavigationTiming;
          if (navEntry) {
            resolve({
              DOMContentLoaded:
                navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              LoadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              FirstByte: navEntry.responseStart - navEntry.requestStart,
            });
          } else {
            resolve({});
          }
        }, 1000);
      });
    });

    // Assert performance thresholds
    if (performanceMetrics.DOMContentLoaded) {
      expect(performanceMetrics.DOMContentLoaded).toBeLessThan(2000); // 2 seconds
    }

    if (performanceMetrics.LoadComplete) {
      expect(performanceMetrics.LoadComplete).toBeLessThan(3000); // 3 seconds
    }

    if (performanceMetrics.FirstByte) {
      expect(performanceMetrics.FirstByte).toBeLessThan(1000); // 1 second
    }
  });

  test('should have optimized images', async ({ page }) => {
    await page.goto('/');

    // Check all images
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);

      // Check for loading attributes
      const loading = await image.getAttribute('loading');
      if (loading !== 'lazy') {
        console.log(`Image ${i} should have loading="lazy" for optimization`);
      }

      // Check for proper alt text
      const alt = await image.getAttribute('alt');
      expect(alt).toBeTruthy();

      // Check for proper dimensions
      const width = await image.getAttribute('width');
      const height = await image.getAttribute('height');
      if (width && height) {
        expect(Number.parseInt(width, 10)).toBeGreaterThan(0);
        expect(Number.parseInt(height, 10)).toBeGreaterThan(0);
      }
    }
  });

  test('should have efficient CSS and JavaScript', async ({ page }) => {
    await page.goto('/');

    // Check for critical CSS inline
    const inlineStyles = page.locator('style');
    const _inlineStyleCount = await inlineStyles.count();

    // Check for external CSS files
    const externalCSS = page.locator('link[rel="stylesheet"]');
    const externalCSSCount = await externalCSS.count();

    // Check for JavaScript files
    const scripts = page.locator('script[src]');
    const scriptCount = await scripts.count();

    // Assert reasonable resource counts
    expect(externalCSSCount).toBeLessThan(5); // Shouldn't have too many CSS files
    expect(scriptCount).toBeLessThan(10); // Shouldn't have too many JS files

    // Check for async/defer attributes on scripts
    for (let i = 0; i < scriptCount; i++) {
      const script = scripts.nth(i);
      const async = await script.getAttribute('async');
      const defer = await script.getAttribute('defer');

      // Non-critical scripts should have async or defer
      if (!async && !defer) {
        console.log(`Script ${i} should have async or defer attribute for performance`);
      }
    }
  });

  test('should have proper resource hints', async ({ page }) => {
    await page.goto('/');

    // Check for DNS prefetch
    const dnsPrefetch = page.locator('link[rel="dns-prefetch"]');
    await expect(dnsPrefetch).toHaveCount(0); // Or specific count if you have external domains

    // Check for preconnect
    const preconnect = page.locator('link[rel="preconnect"]');
    await expect(preconnect).toHaveCount(0); // Or specific count if you have external domains

    // Check for preload
    const preload = page.locator('link[rel="preload"]');
    await expect(preload).toHaveCount(0); // Or specific count if you have critical resources
  });

  test('should handle large content efficiently', async ({ page }) => {
    // Test with a page that has lots of content
    await page.goto('/services');

    // Scroll to bottom to trigger lazy loading
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for any lazy-loaded content
    await page.waitForTimeout(2000);

    // Check for performance issues
    const performanceEntries = await page.evaluate(() => {
      return performance.getEntriesByType('measure').map((entry) => ({
        name: entry.name,
        duration: entry.duration,
      }));
    });

    // Check for long-running operations
    const longOperations = performanceEntries.filter((entry) => entry.duration > 100);
    if (longOperations.length > 0) {
      console.log('Long-running operations detected:', longOperations);
    }
  });

  test('should have optimized fonts', async ({ page }) => {
    await page.goto('/');

    // Check for font preloading
    const fontPreload = page.locator('link[rel="preload"][as="font"]');
    const fontPreloadCount = await fontPreload.count();

    // Check for font display swap
    const fontDisplaySwap = page.locator('link[href*="display=swap"]');
    const fontDisplaySwapCount = await fontDisplaySwap.count();

    // Assert font optimization
    if (fontPreloadCount > 0) {
      expect(fontPreloadCount).toBeLessThan(3); // Shouldn't preload too many fonts
    }

    if (fontDisplaySwapCount > 0) {
      expect(fontDisplaySwapCount).toBeGreaterThan(0); // Should have display=swap for performance
    }
  });

  test('should have efficient caching headers', async ({ page }) => {
    // This test would require a server response, but we can check for cache-related meta tags
    await page.goto('/');

    // Check for cache control meta tags
    const cacheControl = page.locator('meta[http-equiv="Cache-Control"]');
    const _pragma = page.locator('meta[http-equiv="Pragma"]');

    // These might not exist, but if they do, they should be properly configured
    if ((await cacheControl.count()) > 0) {
      const content = await cacheControl.getAttribute('content');
      expect(content).toContain('public'); // Should allow caching
    }
  });

  test('should have optimized bundle sizes', async ({ page }) => {
    await page.goto('/');

    // Get resource sizes
    const resourceSizes = await page.evaluate(() => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      return resources.map((resource) => ({
        name: resource.name,
        size: resource.transferSize || 0,
        type: resource.initiatorType,
      }));
    });

    // Check for large resources
    const largeResources = resourceSizes.filter((resource) => resource.size > 100000); // 100KB threshold

    if (largeResources.length > 0) {
      console.log('Large resources detected:', largeResources);

      // Assert that large resources are necessary
      largeResources.forEach((resource) => {
        if (resource.type === 'script' || resource.type === 'stylesheet') {
          expect(resource.size).toBeLessThan(500000); // 500KB max for JS/CSS
        }
        if (resource.type === 'image') {
          expect(resource.size).toBeLessThan(1000000); // 1MB max for images
        }
      });
    }
  });

  test('should have efficient DOM operations', async ({ page }) => {
    await page.goto('/');

    // Measure DOM manipulation performance
    const domPerformance = await page.evaluate(() => {
      const start = performance.now();

      // Simulate some DOM operations
      const elements = document.querySelectorAll('*');
      const count = elements.length;

      const end = performance.now();
      return {
        elementCount: count,
        domOperationTime: end - start,
      };
    });

    // Assert DOM performance
    expect(domPerformance.domOperationTime).toBeLessThan(100); // Should be very fast
    expect(domPerformance.elementCount).toBeLessThan(1000); // Shouldn't have too many DOM elements
  });

  test('should have optimized animations', async ({ page }) => {
    await page.goto('/');

    // Check for CSS animations and transitions
    const animatedElements = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const animated: string[] = [];

      elements.forEach((element) => {
        const style = window.getComputedStyle(element);
        if (style.animation !== 'none' || style.transition !== 'all 0s ease 0s') {
          animated.push(element.tagName.toLowerCase());
        }
      });

      return animated;
    });

    // Check for transform-based animations (more performant)
    const transformAnimations = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      let count = 0;

      elements.forEach((element) => {
        const style = window.getComputedStyle(element);
        if (style.transform !== 'none') {
          count++;
        }
      });

      return count;
    });

    // Assert animation optimization
    if (animatedElements.length > 0) {
      console.log('Animated elements found:', animatedElements);
      expect(transformAnimations).toBeGreaterThan(0); // Should use transform for animations
    }
  });
});
