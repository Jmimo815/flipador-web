import { test, expect } from '@playwright/test';

test('home loads without client errors and language toggle works', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto('http://localhost:3000/');
  await page.waitForLoadState('networkidle');

  // Verify Spanish text is present
  await expect(page.locator('text=Deja de operar la IA.')).toBeVisible();

  // Click EN toggle
  await page.locator('button[aria-label="Switch to English"]').click();
  await page.waitForTimeout(500);

  // Verify English text appears
  await expect(page.locator('text=Stop operating AI.')).toBeVisible();

  // No client-side errors
  expect(errors).toHaveLength(0);
});
