@sanity @regression @radio @basic @2113395

Feature: LUI Radio Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Radio' with 'Base' theme

  Scenario: Verify that Radio Basic is displayed
    Then I verify that the 'Radio' component is displayed

  Scenario: Verify the dimensions of the Radio Basic Element
    Then I verify that the 'width' of 'Radio' component is '40px'
    And I verify that the 'height' of 'Radio' component is '40px'

  Scenario Outline: Verify that Radio can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Radio' component
    Then I verify the mode is '<modeValue>' for 'Radio'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the Radio Basic checked state
    When I set the 'checked' to 'true' for 'Radio' component
    Then I verify that the 'opacity' of 'Radio' 'Knob' component is '1'
    And I verify that the 'display' of 'Radio' 'Knob' component is 'block'
    And I set the 'checked' to 'false' for 'Radio' component
    And I verify that the 'opacity' of 'Radio' 'Knob' component is '0'
    And I verify that the 'display' of 'Radio' 'Knob' component is 'none'
