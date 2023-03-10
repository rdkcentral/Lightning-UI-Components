@regression @card @basic @2104454

Feature: LUI Card Component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Card is displayed (<theme> theme)
    When I navigate to 'Card' with '<theme>' theme
    Then I verify that the 'Card' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  #Default Values for title is undefined so could not validate them
  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'Card' with '<theme>' theme
    Then I verify that the 'Card' component is displayed
    And I verify the mode is 'focused' for 'Card'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the dimensions of the Card Element (<theme> theme)
    When I navigate to 'Card' with '<theme>' theme
    Then I verify that the 'width' of 'Card' component is '<width>'
    And I verify that the 'height' of 'Card' component is '<height>'
    Examples:
      | theme   | width     | height |
      | Xfinity | 253.333px | 386px  |
      | Base    | 253.333px | 386px  |

  Scenario Outline: Verify that Card can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Card' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Card' component
    Then I verify the mode is '<modeValue>' for 'Card'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify that Card title can be set (<theme> theme)
    When I navigate to 'Card' with '<theme>' theme
    And I set the 'title' to '<exampleTitle>' for 'Card' component
    Then I verify that the 'Card' component is displayed
    And I verify that 'Card' 'Title' has 'text' '<expectedTitle>'
    Examples:
      | theme   | exampleTitle | expectedTitle |
      | Xfinity | LUI TEST     | LUI TEST      |
    # Skipped because of this bug - https://ccp.sys.comcast.net/browse/LUI-683
    # | Xfinity | *^#TDGIWUT   | *^#TDGIWUT    |
      | Base    | LUI TEST     | LUI TEST      |
    # Skipped because of this bug - https://ccp.sys.comcast.net/browse/LUI-683
    # | Xfinity | *^#TDGIWUT   | *^#TDGIWUT    |
