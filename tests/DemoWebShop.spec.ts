import {test,expect} from '@playwright/test';
test('Demo web shop', async({page})=>{


    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.goto('');
    await page.waitForTimeout(3000);
})