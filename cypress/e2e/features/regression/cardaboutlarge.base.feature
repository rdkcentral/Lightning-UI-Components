@regression @cardaboutlarge @2105724

Feature: LUI CardAboutLarge component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardAboutLarge' with 'Base' theme
    
  Scenario: Verify that CardAboutLarge is displayed
    Then I verify that the 'CardAboutLarge' component is displayed
    
  Scenario: Verify the dimensions of the CardAboutLarge Element
    Then I verify that the 'width' of 'CardAboutLarge' component is '800px'
    And I verify that the 'height' of 'CardAboutLarge' component is '296px'
    
  Scenario Outline: Verify that CardAboutLarge can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CardAboutLarge' component
    Then I verify the mode is '<modeValue>' for 'CardAboutLarge'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that CardAboutLarge title can be set
    When I set the 'title' to 'LUI TEST' for 'CardAboutLarge' component
    Then I verify that the 'CardAboutLarge' component is displayed
    And I verify that 'CardAboutLarge' 'title' has text 'LUI TEST'

  Scenario: Verify that CardAboutLarge description can be set
    When I set the 'description' to 'LUI Test' for 'CardAboutLarge' component
    Then I verify that the 'CardAboutLarge' component is displayed
    And I verify that 'CardAboutLarge' 'description' has text 'LUI Test'