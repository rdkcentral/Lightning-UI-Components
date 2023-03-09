@regression @toggle @2108215

Feature: LUI Toggle component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Toggle is displayed (<theme> theme)
    When I navigate to 'Toggle' with '<theme>' theme
    Then I verify that the 'Toggle' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario: Verify the dimensions of the Toggle Element (<theme> theme)
    When I navigate to 'Toggle' with '<theme>' theme
    Then I verify that the 'width' of 'Toggle' component is '<defaultWidth>'
    And I verify that the 'height' of 'Toggle' component is '<defaultHeight>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 64px         | 32px          |
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 80px         | 40px          |

  Scenario Outline: Verify that Toggle can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Toggle' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Toggle' component
    Then I verify the mode is '<modeValue>' for 'Toggle'
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
   
  Scenario Outline: Verify the Toggle checked state (<theme> theme)
    When I navigate to 'Toggle' with '<theme>' theme
    And I set the 'checked' to '<checkedState>' for 'Toggle' component
    Then I verify that the 'left' of 'Toggle' 'Knob' component is '<leftWidth>'
    @sanity
    Examples:
      | theme   | checkedState | leftWidth |
      | Xfinity | true         | 36px      |
      | Xfinity | false        | 4px       |
    Examples:
      | theme   | checkedState | leftWidth |
      | Base    | true         | 44px      |
      | Base    | false        | 4px       |

  Scenario Outline: Verify that Toggle default values (<theme> theme)
    When I navigate to 'Toggle' with '<theme>' theme
    Then I verify the mode is 'focused' for 'Toggle'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |
