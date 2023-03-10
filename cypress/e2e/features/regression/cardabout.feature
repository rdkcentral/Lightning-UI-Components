@regression @cardabout @2113150

Feature: LUI CardAbout component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that CardAbout is displayed (<theme> theme)
    When I navigate to 'CardAbout' with '<theme>' theme
    Then I verify that the 'CardAbout' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the dimensions of the CardAbout Element (<theme> theme)
    When I navigate to 'CardAbout' with '<theme>' theme
    Then I verify that the 'width' of 'CardAbout' component is '<width>'
    And I verify that the 'height' of 'CardAbout' component is '<height>'
    Examples:
      | theme   | width     | height |
      | Xfinity | 522.667px | 294px  |
      | Base    | 526.667px | 296px  |

  Scenario Outline: Verify that CardAbout can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'CardAbout' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'CardAbout' component
    Then I verify the mode is '<modeValue>' for 'CardAbout'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify that CardAbout title can be set (<theme> theme)
    When I navigate to 'CardAbout' with '<theme>' theme
    And I set the 'title' to '<exampleText>' for 'CardAbout' component
    Then I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'title' has 'text' '<exampleText>'
    Examples:
      | theme   | exampleText  | 
      | Xfinity | LUI TEST     | 
      | Base    | LUI TEST     | 

  Scenario Outline: Verify that CardAbout description can be set (<theme> theme)
    When I navigate to 'CardAbout' with '<theme>' theme
    And I set the 'description' to '<exampleDescription>' for 'CardAbout' component
    Then I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'description' has 'text' '<exampleDescription>'
    Examples:
      | theme   | exampleDescription    | 
      | Xfinity | LUI test description  | 
      | Base    | LUI test description  | 

  Scenario Outline: Verify that CardAbout icons can be set (<theme> theme)
    When I navigate to 'CardAbout' with '<theme>' theme
    Then I verify that the 'CardAbout' '<icon>' component is displayed
    And I set the '<icon>' to '!null' for 'CardAbout' component
    And I verify that the 'CardAbout' '<icon>' component does not exist in DOM
    Examples:
      | theme   | icon      | 
      | Xfinity | iconLeft  | 
      | Xfinity | iconRight | 
      | Base    | iconLeft  | 
      | Base    | iconRight | 

  # TODO - add negative use cases for validating the minimum and maximum values, 
  # and that only numbers can be entered. Reference: LUI-638 https://ccp.sys.comcast.net/browse/LUI-638
  Scenario Outline: Verify that CardAbout textLeft and textRight can be set (<theme> theme)
    When I navigate to 'CardAbout' with '<theme>' theme
    Then I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' '<textPosition>' has 'text' '<defaultText>%'
    And I set the '<textPosition>' to '<exampleText>' for 'CardAbout' component
    And I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' '<textPosition>' has 'text' '<exampleText>%'
    Examples:
      | theme   | textPosition  | defaultText | exampleText | 
      | Xfinity | textLeft      |     0       |      99     |
      | Xfinity | textRight     |     0       |      99     | 
      | Base    | textLeft      |     0       |      99     |
      | Base    | textRight     |     0       |      99     |
