@sanity @card @personality @2111100

Feature: LUI Card Personality Component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardPersonality' 'Card-Personality' with 'Base' theme

  Scenario: Verify that Card Personality is displayed
    Then I verify that the 'CardPersonality' 'Card' component is displayed

  Scenario: Verify the dimensions of the Card Personality Element
    Then I verify that the 'width' of 'CardPersonality' 'Card' component is '249px'
    And I verify that the 'height' of 'CardPersonality' 'Card' component is '332px'

  # https://ccp.sys.comcast.net/browse/LUI-598
  # Skipping the test because of the bug
  @skip
  Scenario: Verify the Card Personality mode control
    When I set the 'mode' to 'unfocused' for 'CardPersonality' component
    Then I verify the 'mode' is 'unfocused' for 'CardPersonality' 'Card'
    And I set the 'mode' to 'focused' for 'CardPersonality' component
    And I verify the 'mode' is 'focused' for 'CardPersonality' 'Card'
    And I set the 'mode' to 'disabled' for 'CardPersonality' component
    And I verify the 'mode' is 'disabled' for 'CardPersonality' 'Card'

  Scenario: Verify that Card Personality title can be set
    When I set the 'title' to 'LUI Test' for 'CardPersonality' component
    Then I verify that the 'CardPersonality' 'Card' component is displayed
    And I verify that 'CardPersonality' 'Card' 'Title' has text 'LUI Test'
    
  Scenario: Verify that Card Personality description can be set
    When I set the 'description' to 'LUI Test' for 'CardPersonality' component
    Then I verify that the 'CardPersonality' 'Card' component is displayed
    And I verify that 'CardPersonality' 'Card' 'Description' has text 'LUI Test'
