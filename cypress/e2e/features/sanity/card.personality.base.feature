@sanity @card @personality @2111100

Feature: LUI Card Personality Component

  Background:
	  Given I launch the LUI app
    And I navigate to 'Card' 'Personality' with 'Base' theme

   Scenario: Verify that Card Personality is displayed
    Then I verify that the 'Card' 'Personality' component is displayed

   Scenario: Verify the dimensions of the Card Personality Element
    Then I verify that the 'width' of 'Card' 'Personality' component is '249px'
    And I verify that the 'height' of 'Card' 'Personality' component is '332px'

   Scenario: Verify the Card Personality mode control
  	When I set the 'mode' to 'unfocused' for 'Card' component
    Then I verify the 'mode' is 'unfocused' for 'Card' 'Personality'
    And I set the 'mode' to 'focused' for 'Card' component
    And I verify the 'mode' is 'focused' for 'Card' 'Personality'
    And I set the 'mode' to 'disabled' for 'Card' component
    And I verify the 'mode' is 'disabled' for 'Card' 'Personality'

  Scenario: Verify that Card Personality title can be set
  	When I set the 'title' to 'LUI Test' for 'Card' component
    Then I verify that the 'Card' 'Personality' component is displayed
    And I verify that 'Card' 'Personality' 'Title' has text 'LUI Test'
    
  Scenario: Verify that Card Personality description can be set
  	When I set the 'description' to 'LUI Test' for 'Card' component
    Then I verify that the 'Card' 'Personality' component is displayed
    And I verify that 'Card' 'Personality' 'Description' has text 'LUI Test'