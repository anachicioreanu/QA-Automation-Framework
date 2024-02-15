# Roulette game automated suite
QA challenge 

# Pre-requisites
- Ensure Node.js and npm are installed (Recommended versions: Node.js v20.11.0, npm v10.2.4)

# Libraries used
- cypress
- cypress-cucumber-preprocessor - Supports Behavior-Driven Development (BDD) using Cucumber
- cucumber-html-reporter -  Generates detailed test result reports

# Installation
Clone this repository and execute the following command in your terminal:

`npm install`

For detailed instructions on installing Cypress via npm, please refer to the [Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress)

# Test execution using npm scripts

# Cucumber-html report execution
Tests are executed in headless mode with subsequent report generation.

1. Navigate to the project root.
2. Execute the following command: `npm run cy:run`

# Dashboard execution
Observe the test execution via the Cypress UI tool.
 1. Navigate to the project root.
 2. Execute the following command: `npm run cy:open`
<img src="/automated-suite/docs/dashboard-1.png" alt="Dashboard execution image" width="550"/>

# Tests to be run:
Run the following command: `cypress/e2e/*.feature`

# Steps implementation
Implementation details can be found at:
`cypress/e2e/landingPage/*.steps.t`

# Models Folder
Contains all locators used for element identification on the page:
`cypress/e2e/models/*.models.ts`

# Test result reports
1. Test result files are located in:
    `cypress/cucumber_report`

    <img src="/automated-suite/docs/dashboard-2.png" alt="Dashboard cucumber report" width="550"/>
2. Videos of test execution can be found in:
     `cypress/videos`
3. View all test runs on the Cypress IO Dashboard:

    <img src="/automated-suite/docs/dashboard-3.png" alt="Dashboard cypress IO" width="550"/>
