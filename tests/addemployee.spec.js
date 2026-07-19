import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('input[name="username"]').fill('Admin');
  await page.locator('input[name="password"]').fill('admin123');
  await page.locator('button[type="submit"]').click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.locator('input[placeholder="First Name"]').fill('madhu');
  await page.locator('input[placeholder="Middle Name"]').fill('sudhan');
  await page.locator('input[placeholder="Last Name"]').fill('k');
  await page.getByRole('button', { name: 'Save' }).click();
});