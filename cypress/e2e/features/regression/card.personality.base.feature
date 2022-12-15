@regression @card @personality @2111100

Feature: LUI Card Personality Component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardPersonality' with 'Base' theme

  Scenario: Verify that Card Personality is displayed
    Then I verify that the 'CardPersonality' 'Card' component is displayed

  Scenario: Verify the dimensions of the Card Personality Element
    Then I verify that the 'width' of 'CardPersonality' 'Card' component is '249px'
    And I verify that the 'height' of 'CardPersonality' 'Card' component is '332px'

  Scenario Outline: Verify that CardPersonality can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CardPersonality' component
    Then I verify the mode is '<modeValue>' for 'CardPersonality'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that Card Personality title can be set
    When I set the 'title' to 'LUI Test' for 'CardPersonality' component
    Then I verify that the 'CardPersonality' 'Card' component is displayed
    And I verify that 'CardPersonality' 'Title' has text 'LUI Test'

  Scenario: Verify that Card Personality description can be set
    When I set the 'description' to 'LUI Test' for 'CardPersonality' component
    Then I verify that the 'CardPersonality' 'Card' component is displayed
    And I verify that 'CardPersonality' 'Description' has text 'LUI Test'
