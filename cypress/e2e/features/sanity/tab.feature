@regression @tab @2113345
Feature: LUI Tab component

  Background:
    Given I launch the LUI app
    
  Scenario Outline: Verify that Tab is displayed (<theme> theme)
    When I navigate to 'Tab' with '<theme>' theme
    Then I verify that the 'Tab' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Tab Element (<theme> theme)
    When I navigate to 'Tab' with '<theme>' theme
    Then I verify that the 'width' of 'Tab' component is '<defaultWidth>'
    And I verify that the 'height' of 'Tab' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 143px        | 64.5px        |
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 154.5px      | 64px          |

  Scenario Outline: Verify the Tab modes (<theme> theme)
    When I navigate to 'Tab' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Tab' component
    Then I verify the mode is '<modeValue>' for 'Tab'
    @sanity_temp
    Examples:
     | theme   | modeValue |
     | Xfinity | unfocused |
     | Xfinity | focused   |
     | Xfinity | selected  |
     | Xfinity | disabled  |
    Examples:
     | theme   | modeValue |
     | Base    | unfocused |
     | Base    | focused   |
     | Base    | selected  |
     | Base    | disabled  |

   #This Icon control will be changed to as Radio Button in the future as an enhancement
   Scenario Outline: Verify the Tab icon state (<theme> theme)
    When I navigate to 'Tab' with '<theme>' theme
    And I set the 'icon' to '<iconValue>' for 'Tab' component
    Then I verify that the 'width' of 'Tab' component is '<width>'
    @sanity_temp
    Examples:
     | theme   | iconValue | width   |
     | Xfinity | true      | 183px   |
     | Xfinity | false     | 143px   |
    Examples:
     | theme   | iconValue | width   |
     | Base    | true      | 204.5px |
     | Base    | false     | 154.5px |
    
  Scenario Outline: Verify that Tab Title can be set (<theme> theme)
    When I navigate to 'Tab' with '<theme>' theme
    And I set the 'title' to 'LUI TEST' for 'Tab' component
    Then I verify that 'Tab' 'Title' has 'text' 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

 Scenario Outline: Verify that Tab default values (<theme> theme)
    When I navigate to 'Tab' with '<theme>' theme
    Then I verify the mode is 'focused' for 'Tab'
    And I verify that 'Tab' 'Title' has 'text' 'Tab'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |
