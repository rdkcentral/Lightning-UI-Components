@regression @radio @basic @2113395

Feature: LUI Radio Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Radio Basic is displayed (<theme> theme)
    When I navigate to 'Radio' with '<theme>' theme
    Then I verify that the 'Radio' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Radio Basic Element (<theme> theme)
    When I navigate to 'Radio' with '<theme>' theme
    Then I verify that the 'width' of 'Radio' component is '<width>'
    And I verify that the 'height' of 'Radio' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity |  32px |  32px  |
    @sanity
    Examples:
      | theme   | width | height |
      | Base    |  40px |  40px  |

  Scenario Outline: Verify that Radio can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Radio' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Radio' component
    Then I verify the mode is '<modeValue>' for 'Radio'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    @sanity
    Examples:
      | theme   | modeValue |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify the Radio Basic checked state (<theme> theme)
    When I navigate to 'Radio' with '<theme>' theme
    And I set the 'checked' to 'true' for 'Radio' component
    Then I verify that the 'opacity' of 'Radio' 'Knob' component is '1'
    And I verify that the 'display' of 'Radio' 'Knob' component is 'block'
    And I set the 'checked' to 'false' for 'Radio' component
    And I verify that the 'opacity' of 'Radio' 'Knob' component is '0'
    And I verify that the 'display' of 'Radio' 'Knob' component is 'none'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
