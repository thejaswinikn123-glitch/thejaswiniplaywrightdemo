import { test, expect } from '@playwright/test';

import logindata from "../testdata/login.json"

test("verify add job title",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("input[name='username']").fill(logindata.username)
    await page.locator("//input[@placeholder='Password']").fill(logindata.Password)
    await page.locator("//button[@type='submit']").click()

})  