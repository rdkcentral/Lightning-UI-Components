@regression @inlineContent @basic @2183089

Feature: LUI Inline Content Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Inline Content component is displayed (<theme> theme)
    When I navigate to 'inlinecontent' 'Basic' with '<theme>' theme
    Then I verify that the 'inlinecontent' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the Inline Content contentProperties control (<theme> theme)
    When I navigate to 'inlinecontent' 'Basic' with '<theme>' theme
    And I set the 'contentWrap' to 'true' for 'inlinecontent' component
    And I set the 'contentProperties.marginBottom' to '-15' for 'InlineContent' component
    Then I verify that the 'top' of 'inlinecontent' 'element' component is '<topValue>'
    @sanity_temp
    Examples:
      | theme   | topValue |
      | Xfinity | 25px     |
    Examples:
      | theme | topValue |
      | Base  | 29px     |

  Scenario Outline: Verify the Inline Content contentWrap control (<theme> theme)
    When I navigate to 'inlinecontent' 'Basic' with '<theme>' theme
    And I set the 'contentWrap' to 'true' for 'inlinecontent' component
    Then I verify that the 'height' of 'inlinecontent' component is '<Height>'
    @sanity_temp
    Examples:
      | theme   | Height |
      | Xfinity | 320px  |
    Examples:
      | theme | Height |
      | Base  | 280px  |

  Scenario Outline: Verify the Inline Content justify control (<theme> theme)
    When I navigate to 'inlinecontent' 'Basic' with '<theme>' theme
    And I set the 'contentWrap' to 'true' for 'inlinecontent' component
    And I set the 'justify' to '<justifyValue>' for 'inlinecontent' component
    Then I verify that the 'left' of 'inlinecontent' 'icon' component is '<leftValue>'
    @sanity_temp
    Examples:
      | theme   | justifyValue  | leftValue |
      | Xfinity | flex-start    | 69.5px    |
      | Xfinity | flex-end      | 156px     |
      | Xfinity | space-between | 156px     |
      | Xfinity | space-around  | 134.375px |
      | Xfinity | space-evenly  | 127.167px |
      | Xfinity | center        | 112.75px  |
    Examples:
      | theme | justifyValue  | leftValue |
      | Base  | flex-start    | 56.5px    |
      | Base  | flex-end      | 146px     |
      | Base  | space-between | 146px     |
      | Base  | space-around  | 123.625px |
      | Base  | space-evenly  | 116.167px |
      | Base  | center        | 101.25px  |

  Scenario Outline: Verify the Inline Content default value of controls (<theme> theme)
    When I navigate to 'inlinecontent' 'Basic' with '<theme>' theme
    #default value of contentProperties Control
    Then I verify that the 'top' of 'inlinecontent' 'element' component is '0px'
    #default value of contentWrap Control
    And I verify that the 'height' of 'inlinecontent' component is '40px'
    #default value of Justify Control
    And I verify that the 'left' of 'inlinecontent' 'icon' component is '<iconValue>'
    @sanity_temp
    Examples:
      | theme   | iconValue |
      | Xfinity | -500.25px |
    Examples:
      | theme | iconValue |
      | Base  | -385.5px  |
