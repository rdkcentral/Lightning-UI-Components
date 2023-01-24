@sanity @regression @checkbox @2102475

Feature: LUI Checkbox Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Checkbox' with 'Base' theme

  Scenario: Verify that Checkbox Basic is displayed
    Then I verify that the 'Checkbox' component is displayed

  Scenario: Verify the dimensions of the Checkbox Basic Element
    Then I verify that the 'width' of 'Checkbox' component is '36px'
    And I verify that the 'height' of 'Checkbox' component is '36px'

  Scenario Outline: Verify that Checkbox can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Checkbox' component
    Then I verify the mode is '<modeValue>' for 'Checkbox'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario Outline: Verify that Checkbox Basic checked state
    Then I verify that the 'checked' state for 'Checkbox' is 'false'
    And I set the 'checked' to '<checkedState>' for 'Checkbox' component
    And I verify that the 'checked' state for 'Checkbox' is '<checkedState>'
    Examples:
      | checkedState |
      | true         |
      | false        |
