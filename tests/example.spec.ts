import { test, expect } from '@playwright/test';
import * as loginData from '../testdata/loginTestData.json';
import { HomePage } from '../Page Object/Homepage';

test("TC_01",async({page})=>{
await page.goto("https://www.google.com");
const textField=await page.locator("//textarea[@class='gLFyf']");
await textField.fill("virat kohli");
await textField.press('Enter');
  
})

