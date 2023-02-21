@regression @knob @2180481

Feature: LUI Knob component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Knob is displayed (<theme> theme)
    When I navigate to 'Knob' with '<theme>' theme
    Then I verify that the 'Knob' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Knob element (<theme> theme)
    When I navigate to 'Knob' with '<theme>' theme
    Then I verify that the 'width' of 'Knob' component is '<width>'
    And I verify that the 'height' of 'Knob' component is '<height>'
    @sanity
    Examples:
      | theme   |  width  | height |
      | Xfinity |  16px   | 16px   |
    Examples:
      | theme |   width  | height |
      | Base  |   20px   | 20px   |

  Scenario Outline: Verify that Knob can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Knob' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Knob' component
    Then I verify the mode is '<modeValue>' for 'Knob'
    @sanity
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    Examples:
      | theme   | modeValue |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |
