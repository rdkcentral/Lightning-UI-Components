@regression @checkbox @2102475

Feature: LUI Checkbox Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Checkbox Basic is displayed (<theme> theme)
    When I navigate to 'Checkbox' with '<theme>' theme
    Then I verify that the 'Checkbox' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Checkbox Basic Element (<theme> theme)
    When I navigate to 'Checkbox' with '<theme>' theme
    Then I verify that the 'width' of 'Checkbox' component is '<defaultWidth>'
    And I verify that the 'height' of 'Checkbox' component is '<defaultHeight>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 28px         | 28px          |
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 36px         | 36px          |

  Scenario Outline: Verify that Checkbox can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Checkbox' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Checkbox' component
    Then I verify the mode is '<modeValue>' for 'Checkbox'
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

  Scenario Outline: Verify that Checkbox Basic checked state (<theme> theme)
    When I navigate to 'Checkbox' with '<theme>' theme
    Then I verify that the 'checked' state for 'Checkbox' is 'false'
    And I set the 'checked' to '<checkedState>' for 'Checkbox' component
    And I verify that the 'checked' state for 'Checkbox' is '<checkedState>'
    @sanity
    Examples:
      | theme   | checkedState |
      | Xfinity | true         |
      | Xfinity | false        |
    Examples:
      | theme   | checkedState |
      | Base    | true         |
      | Base    | false        |

  Scenario Outline: Verify that Checkbox Basic default values (<theme> theme)
    When I navigate to 'Checkbox' with '<theme>' theme
    Then I verify that the 'checked' state for 'Checkbox' is 'false'
    And I verify the mode is 'focused' for 'Checkbox'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |
