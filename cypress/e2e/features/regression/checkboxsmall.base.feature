@regression @checkboxSmall @2104368

Feature: LUI Checkbox Small component

  Background:
    Given I launch the LUI app
    And I navigate to 'CheckboxSmall' with 'Base' theme

  Scenario: Verify that Checkbox Small is displayed
    Then I verify that the 'CheckboxSmall' component is displayed

  Scenario: Verify the dimensions of the Checkbox Small element
    Then I verify that the 'width' of 'CheckboxSmall' component is '26px'
    And I verify that the 'height' of 'CheckboxSmall' component is '26px'

  Scenario Outline: Verify that Checkbox Small can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CheckboxSmall' component
    Then I verify the mode is '<modeValue>' for 'CheckboxSmall'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario Outline: Verify the Checkbox Small checked state
    Then I verify that the 'checked' state for 'CheckboxSmall' is 'false'
    And I set the 'checked' to '<checkedState>' for 'CheckboxSmall' component
    And I verify that the 'checked' state for 'CheckboxSmall' is '<checkedState>'
    Examples:
      | checkedState |
      | true         |
      | false        |
