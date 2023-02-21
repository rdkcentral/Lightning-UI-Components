@regression @surface @2180482

Feature: LUI Surface component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Surface component is displayed (<theme> theme)
    When I navigate to 'Surface' with '<theme>' theme
    Then I verify that the 'Surface' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the Surface element (<theme> theme)
    When I navigate to 'Surface' with '<theme>' theme
    Then I verify that the 'width' of 'Surface' component is '<width>'
    And I verify that the 'height' of 'Surface' component is '<height>'
    @sanity
    Examples:
      | theme   | width | height |
      | Xfinity | 523px | 294px  |
    Examples:
      | theme | width | height |
      | Base  | 527px | 296px  |

  Scenario Outline: Verify that Surface can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Surface' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Surface' component
    Then I verify the mode is '<modeValue>' for 'Surface'
    @sanity
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    Examples:
      | theme | modeValue |
      | Base  | unfocused |
      | Base  | focused   |
      | Base  | disabled  |
