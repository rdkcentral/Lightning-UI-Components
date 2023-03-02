@regression @card @personality @2111100

Feature: LUI Card Personality Component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Card Personality is displayed (<theme> theme)
    When I navigate to 'CardPersonality' with '<theme>' theme
    Then I verify that the 'CardPersonality' 'Card' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the dimensions of the Card Personality Element (<theme> theme)
    When I navigate to 'CardPersonality' with '<theme>' theme
    Then I verify that the 'width' of 'CardPersonality' 'Card' component is '<width>'
    And I verify that the 'height' of 'CardPersonality' 'Card' component is '<height>'
    Examples:
      | theme   | width | height |
      | Xfinity | 249px | 332px  |
      | Base    | 249px | 332px  |

  Scenario Outline: Verify that CardPersonality can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'CardPersonality' with '<theme>' theme
    Then I verify the mode is 'focused' for 'CardPersonality'
    And I set the 'mode' to '<modeValue>' for 'CardPersonality' component
    And I verify the mode is '<modeValue>' for 'CardPersonality'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify that Card Personality title can be set (<theme> theme)
    When I navigate to 'CardPersonality' with '<theme>' theme
    Then I verify that 'CardPersonality' 'Title' has 'text' 'Title'
    And I set the 'title' to '<exampleTitle>' for 'CardPersonality' component
    And I verify that the 'CardPersonality' 'Card' component is displayed
    And I verify that 'CardPersonality' 'Title' has 'text' '<expectedTitle>'
    Examples:
      | theme   | exampleTitle | expectedTitle |
      | Xfinity | LUI TEST     | LUI TEST      |
    # | Xfinity | ^&%#^&%      | ^&%#^&%       | 
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683
      | Base    | LUI TEST     | LUI TEST      |
    # | Base    | ^&%#^&%      | ^&%#^&%       |
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683

  Scenario Outline: Verify that Card Personality description can be set (<theme> theme)
    When I navigate to 'CardPersonality' with '<theme>' theme
    Then I verify that 'CardPersonality' 'Description' has 'text' 'Description'
    And I set the 'description' to '<exampleDescription>' for 'CardPersonality' component
    And I verify that the 'CardPersonality' 'Card' component is displayed
    And I verify that 'CardPersonality' 'Description' has 'text' '<expectedDescription>'
    Examples:
      | theme   | exampleDescription | expectedDescription |
      | Xfinity | LUI TEST           | LUI TEST            |
    # | Xfinity | ^&%#^&%            | ^&%#^&%             | 
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683
      | Base    | LUI TEST           | LUI TEST            |
    # | Base    | ^&%#^&%            | ^&%#^&%             |
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683
