# Roulette game automated suite
QA challenge 

# Pre-requisites
- Node.js and npm installed

# Libraries used
- cypress
- cypress-cucumber-preprocessor - Library used to support Behavior-Driven Development (BDD) using Cucumber 
- cucumber-html-reporter - Used to generate reports with details about tests results

# Installation
Cloning this repository and execute from the terminal

npm install

For more information on Cypress intallation via npm: https://docs.cypress.io/guides/getting-started/installing-cypress

# Test execution using npm scripts
# Cucumber-html report execution - tests are run in headless mode followed by a report generation file
Steps to follow:
1. Go to project root
2. npm run cy:run

# Dashboard execution - watch the tests run in Cypress UI tool
 1. Go to project root
 2. npm run cy:open
![alt text](<Screenshot 2024-02-15 at 21.06.34-1.png>)

# Tests to be run: 
cypress/e2e/*.feature

# Step implementation can be found at 
cypress/e2e/landingPage/*.steps.ts

# Models Folder contains all the locator used to identify the elements in the page
cypress/e2e/models/*.models.ts

# Test result reports
1. File after the text execution is located on folder 
    cypress/cucumber_report
    ![alt text](<Screenshot 2024-02-15 at 21.06.08.png>)
2. Videos with the execution can be found on folder
     cypress/videos
3. All the tests run can be checked on the Cypress IO Dashboard as below : 
![alt text](<Screenshot 2024-02-15 at 21.06.34.png>)
