Feature: Check main product on page - Roulette
  Background:  Access the landing page
    Given I access the landing page
    When I close the chat tab
   
  Scenario:  Validate that the roulette game is the default game 
    Then I verify that the roulette game page is displayed by default
  
  Scenario Outline: Validate the input bet amount 
    When I type in the input a bet amount "20"
    And I click on button '<buttonValue>'
    Then I verify that the bet amount increased respective to the amount added by selecting one of the buttons '<valueExpected>'
     
   Examples:
      | buttonValue | valueExpected |
      | Clear       | 0.00          |
      | + 0.01      | 20.01         |
      | + 0.1       | 20.10         |
      | + 1         | 21.00         |
      | + 10        | 30.00         |
      | + 100       | 120.00        |