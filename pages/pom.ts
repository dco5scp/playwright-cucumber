import { type Page, type Locator , expect } from '@playwright/test';

class PageObjectModel {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly customerLoginButton: Locator;
    readonly bankManagerLoginButton: Locator;
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
        this.customerLoginButton = page.locator('button[ng-click="customer()"]');
        this.bankManagerLoginButton = page.locator('button[ng-click="manager()"]');
        this.addCustomerTab = page.locator('button[ng-click="addCust()"]');
        this.openAccountTab = page.locator('button[ng-click="openAccount()"]');
        this.customerTab = page.locator('button[ng-click="showCust()"]');
        this.firstNameField = page.getByPlaceholder('First Name');
        this.lastNameField = page.getByPlaceholder('Last Name');
        this.postCodeField = page.getByPlaceholder('Post Code');
        this.addCustomerButton = page.locator('button[type="submit"]');
    } 

    // Navigate to web page 
    async navigateToInitialPage() {
        await this.page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#');
    }

    // Enter as Bank manager
    async doManagerLogin() {
        await this.bankManagerLoginButton.click();
    }

    // Validate if user is on the Bank manager home page
    async validateManagerPage() {
        await expect(this.addCustomerTab).toBeVisible();
    }

    // Go to Add customer tab
    async goToAddCustomer() {
        await this.addCustomerTab.click();
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
        await this.addCustomerButton.click();

        this.page.on('dialog', async (dialog) => {
            expect(dialog.message()).toContain('Customer added successfully');
            dialog.accept();
        });
    }

    // Validate if customer was added successfully
    async validateAddedCust(firstNameField: string) {
        this.customerTab.click();
        const customer = this.page.locator('tbody tr').locator('text=' + firstNameField);
        await expect(customer).toHaveText(firstNameField);
    }

    // Go to Customer tab
    async goToCustomer() {
        await this.customerTab.click();
    }

    // Go to Customer tab
    async deleteCustomer(firstNameField: string) {
        this.customerTab.click();
        const customerRow = await this.page.getByRole('table').locator('tr', {hasText:firstNameField});
        const deleteButton = customerRow.locator('button[ng-click="deleteCust(cust)"]');
        await deleteButton.click();
    }

    async validateDeleteCust(firstNameField: string) {
        //this.customerTab.click();
        await expect(this.page.locator('table tr').last()).not.toHaveText(firstNameField);
    }
    
}

export default PageObjectModel;
