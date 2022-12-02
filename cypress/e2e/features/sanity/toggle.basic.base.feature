@sanity @toggle @basic @2108215

Feature: LUI Toggle Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Toggle' 'Toggle' with 'Base' theme

  Scenario: Verify that Toggle Basic is displayed
    Then I verify that the 'Toggle' 'Toggle' component is displayed

  Scenario: Verify the dimensions of the Toggle Basic Element
    Then I verify that the 'width' of 'Toggle' component is '80px'
    And I verify that the 'height' of 'Toggle' component is '34px'

  # https://ccp.sys.comcast.net/browse/LUI-598
  # Skipping the test because of the bug
  @skip
  Scenario: Verify the Toggle Basic modes
    When I set the 'mode' to 'unfocused' for 'Toggle' component
    Then I verify the 'mode' is 'unfocused' for 'Toggle' 'Toggle'
    And I set the 'mode' to 'focused' for 'Toggle' component
    And I verify the 'mode' is 'focused' for 'Toggle' 'Toggle'
    And I set the 'mode' to 'disabled' for 'Toggle' component
    And I verify the 'mode' is 'disabled' for 'Toggle' 'Toggle'

  Scenario: Verify the Toggle Basic checked state
    When I set the 'checked' to 'true' for 'Toggle' component
    Then I verify that the 'left' of 'Toggle' 'Knob' component is '44px'
    And I set the 'checked' to 'false' for 'Toggle' component
    And I verify that the 'left' of 'Toggle' 'Knob' component is '4px'
