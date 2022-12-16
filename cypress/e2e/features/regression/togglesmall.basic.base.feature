@regression @toggleSmall @basic @2108221

Feature: LUI ToggleSmall Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'ToggleSmall' with 'Base' theme

  Scenario: Verify that ToggleSmall Basic is displayed
    Then I verify that the 'ToggleSmall' 'Toggle' component is displayed

  Scenario: Verify the dimensions of the ToggleSmall Basic Element
    Then I verify that the 'width' of 'ToggleSmall' 'Toggle' component is '40px'
    And I verify that the 'height' of 'ToggleSmall' 'Toggle' component is '32px'

  Scenario Outline: Verify that ToggleSmall can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'ToggleSmall' component
    Then I verify the mode is '<modeValue>' for 'ToggleSmall' 'Toggle'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the ToggleSmall Basic checked state
    When I set the 'checked' to 'true' for 'ToggleSmall' component
    Then I verify that the 'left' of 'ToggleSmall' 'Knob' component is '44px'
    And I set the 'checked' to 'false' for 'ToggleSmall' component
    And I verify that the 'left' of 'ToggleSmall' 'Knob' component is '4px'
