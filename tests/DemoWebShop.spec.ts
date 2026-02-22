import {test,expect} from '@playwright/test';
test('Demo web shop', async({page})=>{


    await page.goto('https://demowebshop.tricentis.com/login.');
    await page.waitForTimeout(3000);
})