import { test, expect, chromium } from '@playwright/test';
import * as loginData from '../testdata/loginTestData.json';
import { HomePage } from '../Page Object/Homepage';

//test("validate all query title",async({page})=>{

//await page.goto("https://stackoverflow.com/questions");
//const textTitle=await page.locator("//h3[@class='s-post-summary--content-title']//a");
//const options=await textTitle.allTextContents();
//await expect(textTitle).toHaveCount(15);
//console.log (await textTitle.count());
//console.log(options);
//console.log(textTitle); 

//})



test("validate all query title",async({page})=>{
await page.goto("https://datatables.net/");
await page.waitForTimeout(4000);
await page.fill('#username',loginData.Admin['password']);//to use the test data
await page.selectOption('#dt-length-0',{value:'100'});
const name =await page.locator("//td[text()='Yuri Berry']/following-sibling::td[1]");
await name.scrollIntoViewIfNeeded({timeout:3000});
console.log(await name.textContent());


})

test("validate cos product detail page",async({page})=>{
await page.goto("https://www.cos.com/en-gb/women/womenswear/tops/polo-shirts/product/relaxed-striped-long-sleeved-polo-shirt-white-striped-1266544001");
await page.locator("//button[text()='Accept all cookies']").click();
const sizeOptions=await page.locator("//section[@class='flex flex-col']//button");
console.log(await sizeOptions.count());
})

test("tab switch validation",async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();

    const pageFlipkart=await context.newPage();
    const pageGoogle=await context.newPage();
    const pageAmazon=await context.newPage();

    await pageGoogle.goto("https://www.google.com");
    await pageFlipkart.goto("https://www.flipkart.com");
    await pageAmazon.goto("https://www.amazon.com");

   const allPages= context.pages();
   console.log(await allPages.length);
   let pageName:any;
   for(const c of allPages)
   {
        console.log(await c.title());
        if(await c.title()=='Google')
        {
            pageName=c;
        }
   }
   


   


})



