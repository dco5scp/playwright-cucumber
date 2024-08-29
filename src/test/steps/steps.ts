import { Given, setDefaultTimeout, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import HomePage from '../../../pages/home';
import { pageFixture } from '../../hooks/pageFixture';
import ManagerHome from '../../../pages/managerHome';
import AddCustomer from '../../../pages/addCustomerTab';
import PageObjectModel from '../../../pages/pom';

setDefaultTimeout(60 * 1000 * 2)

// let homePage: HomePage;
// let managerHome: ManagerHome;
// let addCustomer: AddCustomer;
let pageObjectModel: PageObjectModel


Given('Navigate to the test website', async () => {
  pageObjectModel = new PageObjectModel(pageFixture.page);
  await pageObjectModel.navigateToInitialPage();
});

When('User enter as Bank Manager', async () => {
  await pageObjectModel.doManagerLogin();
});

Then('The manager page should be displayed', async () => {
  //managerHome = new ManagerHome(pageFixture.page);
  await pageObjectModel.validateManagerPage();
});

When('User enter in the Add customer tab', async () => {
  await pageObjectModel.goToAddCustomer();
  //addCustomer = new AddCustomer(pageFixture.page);
  await pageObjectModel.validateAddCustTab();
});

When('Insert {string}, {string} and {string}', async (firstName, lastName, postCode) => {
  await pageObjectModel.addCustomerDetails(firstName, lastName, postCode);
})

When('User click on the add customer button', async () => {
  await pageObjectModel.addCustomer();
});

Then('New {string} customer is successufully added', async (firstName) => {
  await pageObjectModel.validateAddedCust(firstName);
});

When('User enter in the Customer tab', async () => {
  await pageObjectModel.goToCustomer();
});

When('User delete {string} added Customer', async firstName => {
  await pageObjectModel.deleteCustomer(firstName);
});

Then('New {string} Customer is successufully deleted', async (firstName) => {
  await  pageObjectModel.validateDeleteCust(firstName);
})

