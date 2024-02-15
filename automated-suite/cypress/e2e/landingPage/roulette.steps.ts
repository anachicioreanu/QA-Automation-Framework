
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import RoulettePage from "../models/landingPageModels";

let url = 'https://csgoempire.com/roulette';
const roulette = new RoulettePage()

/**
 * Access the main page
 */
Given('I access the landing page', { timeout: 10000 }, () => {
    cy.visitLandingPage(url);
});

/**
 * Close the chat tab
 */
When('I close the chat tab', { timeout: 10000 }, () => {
    cy.get(roulette.closeChatIconLocator).click();
});

/**
 * Enter a bet amount in the specific input
 */
When('I type in the input a bet amount {string}', { timeout: 10000 }, (betAmount: string) => {
    cy.get(roulette.inputBetAmountLocator).type(betAmount)
});

/**
 * Click on the button with given text
 */
When('I click on button {string}', { timeout: 10000 }, (buttonValue: string) => {
   
    cy.get('div[class="bet-input__controls"] > div > button').contains(`${buttonValue}`).click()
});

/**
 * Verify that the roulette page is displayed as default when accesing the landing page
 */
Then('I verify that the roulette game page is displayed by default', { timeout: 10000 }, () => {
    cy.contains('Daily Roulette Race').scrollIntoView().should('be.visible');
});

/**
 * Verify that the addition amount values
*/
Then('I verify that the bet amount increased respective to the amount added by selecting one of the buttons {string}', { timeout: 10000 }, (valueExpected: string) => {
    cy.get(roulette.inputBetAmountLocator).invoke('val').should('equal', valueExpected)
});
