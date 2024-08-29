import { After, AfterAll, Before, BeforeAll } from "@cucumber/cucumber";
import { Browser, chromium } from "playwright";
import { pageFixture } from "./pageFixture";
import { BrowserContext } from "@playwright/test";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
    browser = await chromium.launch({headless: false});
});

Before(async () => {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
    //await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#');
});

After(async () => {
   await pageFixture.page.close();
   await context.close();
});

AfterAll(async () => {
    await browser.close();
 });