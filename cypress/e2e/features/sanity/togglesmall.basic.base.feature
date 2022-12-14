@sanity @togglesmall @basic @2108221

Feature: LUI ToggleSmall Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'ToggleSmall' with 'Base' theme

  Scenario: Verify that ToggleSmall Basic is displayed
    Then I verify that the 'ToggleSmall' 'Toggle' component is displayed

  Scenario: Verify the dimensions of the ToggleSmall Basic Element
    Then I verify that the 'width' of 'ToggleSmall' 'Toggle' component is '40px'
    And I verify that the 'height' of 'ToggleSmall' 'Toggle' component is '28px'

  # https://ccp.sys.comcast.net/browse/LUI-598
  # Skipping the test because of the bug
  @skip
  Scenario: Verify the ToggleSmall Basic modes
    When I set the 'mode' to 'unfocused' for 'ToggleSmall' component
    Then I verify the mode is 'unfocused' for 'ToggleSmall'
    And I set the 'mode' to 'focused' for 'ToggleSmall' component
    And I verify the mode is 'focused' for 'ToggleSmall'
    And I set the 'mode' to 'disabled' for 'ToggleSmall' component
    And I verify the mode is 'disabled' for 'ToggleSmall'

  Scenario: Verify the ToggleSmall Basic checked state
    When I set the 'checked' to 'true' for 'ToggleSmall' component
    Then I verify that the 'left' of 'ToggleSmall' 'Knob' component is '44px'
    And I set the 'checked' to 'false' for 'ToggleSmall' component
    And I verify that the 'left' of 'ToggleSmall' 'Knob' component is '4px'
