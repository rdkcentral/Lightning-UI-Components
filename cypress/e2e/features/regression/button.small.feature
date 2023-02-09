@regression @buttonSmall @2111084

Feature: LUI Button Small component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Button Small is displayed (<theme> theme)
    When I navigate to 'ButtonSmall' with '<theme>' theme
    Then I verify that the 'ButtonSmall' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify that Button Small can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'ButtonSmall' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'ButtonSmall' component
    Then I verify the mode is '<modeValue>' for 'ButtonSmall'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify the Button Small fixed state (<theme> theme)
    When I navigate to 'ButtonSmall' with '<theme>' theme
    And I verify that the 'width' of 'ButtonSmall' component is '<width>'
    And I set the 'fixed' to 'true' for 'ButtonSmall' component
    And I verify that the 'width' of 'ButtonSmall' component is '<fixedWidth>'
     Examples:
      | theme   |  width   | fixedWidth | 
      | Xfinity |  144px   | 200px      |
      | Base    |  144px   | 200px      |
    
  Scenario Outline: Verify the Button Small justify content (<theme> theme)
    When I navigate to 'ButtonSmall' with '<theme>' theme
    Then I verify that 'ButtonSmall' justify control is 'center'
    And I set the 'justify' to '<controlPosition>' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' justify control is '<controlPosition>'
    Examples:
      | theme   |  controlPosition | 
      | Xfinity |  left            | 
      | Xfinity |  center          | 
      | Xfinity |  right           | 
      | Base    |  left            | 
      | Base    |  center          | 
      | Base    |  right           | 

  Scenario Outline: Verify the Button Small prefix state (<theme> theme)
    When I navigate to 'ButtonSmall' with '<theme>' theme
    And I verify that 'ButtonSmall' prefix control is 'null'
    And I set the 'prefix' to '<prefixChoice>' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' prefix control is '<prefixChoice>'
     Examples:
      | theme   |  prefixChoice | 
      | Xfinity |  checkbox     |
      | Xfinity |  null         |
      | Xfinity |  icon         |
      | Xfinity |  combo        |
      | Base    |  checkbox     |
      | Base    |  null         |
      | Base    |  icon         |
      | Base    |  combo        |

  Scenario Outline: Verify the Button Small suffix state (<theme> theme)
    When I navigate to 'ButtonSmall' with '<theme>' theme
    Then I verify that 'ButtonSmall' suffix control is 'null'
    And I set the 'suffix' to '<suffixChoice>' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' suffix control is '<suffixChoice>'
    Examples:
      | theme   |  suffixChoice | 
      | Xfinity |  checkbox     |
      | Xfinity |  null         |
      | Xfinity |  icon         |
      | Xfinity |  combo        |
      | Base    |  checkbox     |
      | Base    |  null         |
      | Base    |  icon         |
      | Base    |  combo        |

  Scenario Outline: Verify the Button Small title text can be set (<theme> theme)
    When I navigate to 'ButtonSmall' with '<theme>' theme
    And I set the 'title' to '<exampleText>' for 'ButtonSmall' component
    Then I verify that 'ButtonSmall' 'Title' has 'text' '<exampleText>'
    Examples:
      | theme   |  exampleText | 
      | Xfinity |  LUI TEST    |
      | Base    |  LUI TEST    |
