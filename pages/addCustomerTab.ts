import { type Page, type Locator , expect } from '@playwright/test';

class AddCustomer {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly addCustomerTab: Locator;
    readonly openAccountTab: Locator;
    readonly customerTab: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly postCodeField: Locator;
    readonly addCustomerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('button[ng-click="home()"]');
        this.addCustomerTab = page.locator('button[ng-click="addCust()"]');
        this.openAccountTab = page.locator('button[ng-click="openAccount()"]');
        this.customerTab = page.locator('button[ng-click="showCust()"]');
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.postCodeField = page.getByPlaceholder('Post Code');
        this.addCustomerButton = page.locator('button:has-text("Add Customer")');
    } 

    // Validate if user is on the Add Customer tab
    async validateAddCustTab() {
        await expect(this.firstNameField).toBeVisible();
    }

    // Back to app Home page
    async backToHome() {
        await this.homeButton.click();
    }

    // Add customer details
    async addCustomerDetails(firstNameField: string, lastNameField: string, postCodeField: string) {
        await this.firstNameField.fill(firstNameField);
        await this.lastNameField.fill(lastNameField);
        await this.postCodeField.fill(postCodeField);
    }

    // Add customer buttom and accept Dialogue message
    async addCustomer() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.addCustomerButton.click();
    }
    
}

export default AddCustomer;
