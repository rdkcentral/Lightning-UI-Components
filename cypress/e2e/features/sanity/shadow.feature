@regression @shadow @2188899

Feature: LUI Shadow component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Shadow component is displayed (<theme> theme)
    When I navigate to 'Shadow' with '<theme>' theme
    Then I verify that the 'Shadow' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: : Verify the dimensions of the Shadow component (<theme> theme)
    When I navigate to 'Shadow' with '<theme>' theme
    Then I verify that the 'width' of 'Shadow' component is '<width>'
    And I verify that the 'height' of 'Shadow' component is '<height>'
    @sanity
    Examples:
      | theme   | width | height |
      | Xfinity | 200px | 200px  |
    Examples:
      | theme | width | height |
      | Base  | 200px | 200px  |

  Scenario Outline: Verify that Shadow can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Shadow' with '<theme>' theme
    Then I verify the mode is 'focused' for 'Shadow'
    And I set the 'mode' to '<modeValue>' for 'Shadow' component
    And I verify the mode is '<modeValue>' for 'Shadow'
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

  Scenario Outline: Verify the Shadow 'maskShadow' control (<theme> theme)
    When I navigate to 'Shadow' with '<theme>' theme
    Then I verify that maskShadow control is set to 'false' for 'Shadow' component
    And I set the 'maskShadow' to '<state>' for 'Shadow' component
    And I verify that maskShadow control is set to '<state>' for 'Shadow' component
    @sanity
    Examples:
      | theme   | state  |
      | Xfinity | true   |
  #   | Xfinity | false  |
  #   Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-676
    Examples:
      | theme | state |
      | Base  | true  |
#     | Base | false  |
#     Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-676
