@sanity @regression @card @title @2111101

Feature: LUI Card Title Component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardTitle' with 'Base' theme

  Scenario: Verify that Card Title is displayed
    Then I verify that the 'CardTitle' 'Card' component is displayed

  Scenario: Verify the dimensions of the Card Title Element
    Then I verify that the 'width' of 'CardTitle' 'Card' component is '253.333px'
    And I verify that the 'height' of 'CardTitle' 'Card' component is '386px'

  Scenario Outline: Verify that CardTitle can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CardTitle' component
    Then I verify the mode is '<modeValue>' for 'CardTitle'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that Card Title title can be set
    When I set the 'title' to 'LUI Test' for 'CardTitle' component
    Then I verify that the 'CardTitle' 'Card' component is displayed
    And I verify that 'CardTitle' 'Title' has text 'LUI Test'

  Scenario: Verify that Card Title description can be set
    When I set the 'description' to 'LUI Test' for 'CardTitle' component
    Then I verify that the 'CardTitle' 'Card' component is displayed
    And I verify that 'CardTitle' 'Description' has text 'LUI Test'
