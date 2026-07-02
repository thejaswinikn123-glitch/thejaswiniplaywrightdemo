import { test, expect } from '@playwright/test';

test("verify add job title",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator("input[name='username']").fill('Admin')
    await page.locator("//input[@placeholder='Password']").fill('admin123')
    await page.locator("//button[@type='submit']").click()

})  