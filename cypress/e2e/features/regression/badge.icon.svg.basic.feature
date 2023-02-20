@regression @badge @iconSvg @2102480 

Feature: LUI Badge Icon SVG component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Badge Icon SVG is displayed (<theme> theme)
    When I navigate to 'Badge' 'Icon SVG' with '<theme>' theme
    Then I verify that the 'Badge' component is displayed
    Examples:
    | theme   |
    | Xfinity |
    | Base    |

  Scenario Outline: Verify the dimensions of the Badge Icon SVG Element (<theme> theme)
    When I navigate to 'Badge' 'Icon SVG' with '<theme>' theme
    Then I verify that the 'width' of 'Badge' component is '<width>'
    And I verify that the 'height' of 'Badge' component is '<height>'
    Examples:
    | theme   | width  | height | 
    | Xfinity | 74.5px | 32px   |  
    | Base    | 74.5px | 32px   | 

  Scenario Outline: Verify that Badge Icon SVG alignment can be set (<theme> theme)
    When I navigate to 'Badge' 'Icon SVG' with '<theme>' theme
    And I set the 'iconAlign' to '<position>' for 'Badge' component
    Then I verify that 'Badge' 'iconAlign' state is '<position>' for '<theme>' theme
    Examples:
    | theme   | position | 
    | Xfinity | right    | 
    | Xfinity | left     |
    | Base    | right    |
    | Base    | left     |
