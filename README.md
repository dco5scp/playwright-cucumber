# Global SQA Bank manager BDD automation

Repository for automated tests for [Banking Project website](https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login/) using [Playwright](https://playwright.dev/).

## Prerequisites 
1. [Node JS](https://nodejs.org/) - Download LTS version
2. [Git](https://git-scm.com/)
3. [Visual Studio Code](https://code.visualstudio.com/) - Best IDE to work with playwright
4. Playwright extension for VS Code
    - Search by playwright and install "Playwright test for VS Code"

## Installation

1. Clone the repo using below URL

```sh
https://github.com/dco5scp/playwright-cucumber
```

2. Navigate to folder and install npm packages using:

```sh
npm install 
```

3. For first time installation run below command to download required browsers

```sh
npx playwright install
```

## Running Test

```bash
npm test
```


## Reporting
### Open report
 
 After running the test go to repo folder and in test-results folder, open cucumber-report.html