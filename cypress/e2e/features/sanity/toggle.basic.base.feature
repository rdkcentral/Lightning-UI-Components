@sanity @regression @toggle @basic @2108215

Feature: LUI Toggle Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Toggle' with 'Base' theme

  Scenario: Verify that Toggle Basic is displayed
    Then I verify that the 'Toggle' component is displayed

  Scenario: Verify the dimensions of the Toggle Basic Element
    Then I verify that the 'width' of 'Toggle' component is '80px'
    And I verify that the 'height' of 'Toggle' component is '38px'

  Scenario Outline: Verify that Toggle can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Toggle' component
    Then I verify the mode is '<modeValue>' for 'Toggle'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the Toggle Basic checked state
    When I set the 'checked' to 'true' for 'Toggle' component
    Then I verify that the 'left' of 'Toggle' 'Knob' component is '44px'
    And I set the 'checked' to 'false' for 'Toggle' component
    And I verify that the 'left' of 'Toggle' 'Knob' component is '4px'
