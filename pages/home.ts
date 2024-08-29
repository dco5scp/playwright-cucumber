import { type Page, type Locator , expect } from '@playwright/test';

class HomePage {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly customerLoginButton: Locator;
    readonly bankManagerLoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('button[ng-click="home()"]');
        this.customerLoginButton = page.locator('button[ng-click="customer()"]');
        this.bankManagerLoginButton = page.locator('button[ng-click="manager()"]');
    } 

    // Navigate to web page 
    async navigateToInitialPage() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/');
    }

    // Enter as Bank manager
    async doManagerLogin() {
        await this.bankManagerLoginButton.click();
    }

    // async checkLoggedIn() {
    //     await expect(this.page).toHaveURL(pages.loginPage);
    //     //await expect(this.page).toHaveTitle(/Swag Labs/);
    //     // const productText = await this.page.locator('[data-test="title"]').textContent();
    //     // await expect(productText).toEqual('Products');
    // }

}

export default HomePage;
