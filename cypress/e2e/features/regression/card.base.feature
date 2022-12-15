@regression @card @basic @2104454

Feature: LUI Card Base Component

  Background:
    Given I launch the LUI app
    And I navigate to 'Card' with 'Base' theme

  Scenario: Verify that Card Base is displayed
    Then I verify that the 'Card' component is displayed

  Scenario: Verify the dimensions of the Card Base Element
    Then I verify that the 'width' of 'Card' component is '253.333px'
    And I verify that the 'height' of 'Card' component is '386px'

  Scenario Outline: Verify that Card Base can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Card' component
    Then I verify the mode is '<modeValue>' for 'Card'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that Card Base title can be set
    When I set the 'title' to 'LUI Test' for 'Card' component
    Then I verify that the 'Card' component is displayed
    And I verify that 'Card' 'Title' has text 'LUI Test'
