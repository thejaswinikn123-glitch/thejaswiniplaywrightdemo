import { test, expect } from '@playwright/test';

test('visible logo', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('img', { name: 'company-branding' }).click();
});