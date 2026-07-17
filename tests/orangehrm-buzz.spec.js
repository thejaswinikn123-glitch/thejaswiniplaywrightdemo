// @ts-check
import { test, expect } from '@playwright/test';

test('login to OrangeHRM and open Buzz', async ({ page }) => {
  const baseUrl = 'https://opensource-demo.orangehrmlive.com';

  await page.goto(`${baseUrl}/web/index.php/auth/login`);
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();

  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await expect(page).toHaveURL(/\/dashboard\/index$/);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.locator('.oxd-main-menu-item').filter({ hasText: 'Dashboard' }).click({ force: true });
  await page.locator('.oxd-main-menu-item').filter({ hasText: 'Buzz' }).click({ force: true });

  await expect(page).toHaveURL(/\/buzz\/viewBuzz/);
});
