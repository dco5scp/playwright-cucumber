Feature: Add and delete customer as Bank Manager

  Background: Navigation
    # Start in the Home Page https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login
    Given Navigate to the test website

  Scenario: Add and remove newly added user
    # 1. Choose “Bank Manager Login”.
    When User enter as Bank Manager
    Then The manager page should be displayed
    # 2. Choose “Add Customer”.
    When User enter in the Add customer tab
    # 3. Fill the form for
    And Insert "<FirstName>", "<LastName>" and "<PostCode>"
    # d. Click “Add Customer”.
    And User click on the add customer button
    # 4. Go to “Customers” Tab
    # 5. Validate that the new customer has been added successfully
    Then New "<FirstName>" customer is successufully added
    When User enter in the Customer tab
    # 6. Delete the newly added customer
    And User delete "<FirstName>" added Customer
    # 7. Validate that the customer has been successfully deleted
    Then New "<FirstName>" Customer is successufully deleted

    # a. First Name
    # b. Last Name
    # c. Post Code
    Examples:
      | FirstName | LastName | PostCode |
      | test      | user     | 1000     |