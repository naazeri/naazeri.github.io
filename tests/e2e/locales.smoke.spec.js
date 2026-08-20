import { expect, test } from '@playwright/test';

test.describe('locale home pages', () => {
  test('renders the English home page', async ({ page }) => {
    await page.goto('/en/');

    await expect(page).toHaveTitle(/Nazeriland/i);
    await expect(page.locator('h2').first()).toContainText('Reza Nazeri');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('html')).toHaveAttribute('dir', 'ltr');
  });

  test('renders the Persian home page', async ({ page }) => {
    await page.goto('/fa/');

    await expect(page).toHaveTitle(/Nazeriland|ناظری/i);
    await expect(page.locator('html')).toHaveAttribute('lang', 'fa');
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });
});
