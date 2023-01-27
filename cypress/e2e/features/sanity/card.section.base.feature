@sanity @regression @card @section @2105533

Feature: LUI Card Section Component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardSection' with 'Base' theme

  Scenario: Verify that Card Section is displayed
    Then I verify that the 'CardSection' 'Card' component is displayed

  Scenario: Verify the dimensions of the Card Section Element
    Then I verify that the 'width' of 'CardSection' 'Card' component is '386px'
    And I verify that the 'height' of 'CardSection' 'Card' component is '200px'

  Scenario Outline: Verify that CardSection can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CardSection' component
    Then I verify the mode is '<modeValue>' for 'CardSection'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that Card Section title can be set
    When I set the 'title' to 'LUI Test' for 'CardSection' component
    Then I verify that the 'CardSection' 'Card' component is displayed
    And I verify that 'CardSection' 'Title' has 'text' 'LUI Test'
