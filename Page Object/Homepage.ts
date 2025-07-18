import test from "node:test";
import {Page} from '@playwright/test';

export class HomePage{

    page:Page;

    constructor(page:Page)
    {
        this.page=page;
    }
   async navigatte()
   {
    await this.page.goto("htttps://www.google.com");
   }
}