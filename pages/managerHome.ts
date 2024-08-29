import { type Page, type Locator , expect } from '@playwright/test';

class ManagerHome {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly addCustomerTab: Locator;
    readonly openAccountTab: Locator;
    readonly customerTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('button[ng-click="home()"]');
        this.addCustomerTab = page.locator('button[ng-click="addCust()"]');
        this.openAccountTab = page.locator('button[ng-click="openAccount()"]');
        this.customerTab = page.locator('button[ng-click="showCust()"]');
    } 

    // Validate if user is on the Bank manager home page
    async validateManagerPage() {
        await expect(this.addCustomerTab).toBeVisible();
    }

    // Back to app Home page
    async backToHome() {
        await this.homeButton.click();
    }

    // Go to Add customer tab
    async goToAddCustomer() {
        await this.addCustomerTab.click();
    }

    // Go to Open account tab
    async goToOpenAccount() {
        await this.openAccountTab.click();
    }
    
    // Go to Customers tab
    async goToCustomers() {
        await this.customerTab.click();
    }
    
}

export default ManagerHome;
