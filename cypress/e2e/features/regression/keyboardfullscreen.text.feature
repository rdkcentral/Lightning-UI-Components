@regression @keyboard @fullscreen @2115190

Feature: LUI Keyboard Full Screen component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Keyboard Full Screen component is displayed (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    Then I verify that the 'KeyboardFullscreen' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the dimensions and count of the Keyboard Full Screen elements (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    Then I verify that 'Row1Elements' on the 'KeyboardFullscreen' page has 3 assets
    And I verify that 'Row2Elements' on the 'KeyboardFullscreen' page has 26 assets
    And I verify that there are 2 'rows' on the 'KeyboardFullscreen' page
    And I verify that the 'width' of 'KeyboardFullscreen' component is '<width>'
    And I verify that the 'height' of 'KeyboardFullscreen' component is '<height>'
    Examples:
      | theme   | width | height |
      | Xfinity | 1656  | 152    |
      | Base    | 2070  | 190    |

  Scenario Outline: Validate row navigation of the Keyboard Full Screen component (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    Then I verify that the 'Button 1 row 1' component on the 'KeyboardFullscreen' page is in focus
    And I verify that 'KeyboardFullscreen' 'Button 1 row 1 label' has 'text' '#@!'
    And I press 'DOWN' key
    And I verify that the 'Button 3 row 2' component on the 'KeyboardFullscreen' page is in focus
    And I verify that 'KeyboardFullscreen' 'Button 3 row 2 label' has 'text' 'C'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Validate buttons navigation of the Keyboard Full Screen component - Row1 (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    And I wait 0.3 seconds for the page to load
    And I press 'RIGHT' key 2 times
    Then I verify that the 'Button 3 row 1' component on the 'KeyboardFullscreen' page is in focus
    #verify that focused button scrolls from the last element to first
    And I press 'RIGHT' key
    And I verify that the 'Button 1 row 1' component on the 'KeyboardFullscreen' page is in focus
    And I verify that 'KeyboardFullscreen' 'Button 1 row 1 label' has 'text' '#@!'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Validate buttons navigation of the Keyboard Full Screen component - Row2 (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    And I press 'DOWN' key
    And I press 'LEFT' key 2 times
    Then I verify that I am able to navigate to the 'last' element of the 'KeyboardFullscreen' 'Row 2 elements'
    And I press 'RIGHT' key
    And I verify that the 'Button 1 row 2' component on the 'KeyboardFullscreen' page is in focus
    And I press 'LEFT' key
    And I verify that I am able to navigate to the 'first' element of the 'KeyboardFullscreen' 'Row 2 elements'
    And I press 'LEFT' key
    And I verify that the 'Button 26 row 2' component on the 'KeyboardFullscreen' page is in focus
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Validate the functionality of '#@!' action button of the Keyboard Full Screen component (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    And I press 'DOWN' key
    Then I verify that 'KeyboardFullscreen' 'Button 3 row 2 label' has 'text' 'C'
    And I press 'UP' key
    And I press 'ENTER' key
    And I press 'DOWN' key
    And I wait 0.3 seconds for the page to load
    And I verify that 'KeyboardFullscreen' 'Button 3 row 2 label switch mode' has 'text' '3'
    And I press 'UP' key
    And I verify that 'KeyboardFullscreen' 'Button 1 row 1 label switch mode' has 'text' 'ABC'
    #verify that we can come back to the regular keyboard
    And I press 'UP' key
    And I press 'ENTER' key
    And I press 'DOWN' key
    And I verify that 'KeyboardFullscreen' 'Button 3 row 2 label' has 'text' 'C'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the Keyboard Full Screen component modes (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'KeyboardFullscreen' component
    Then I verify the mode is '<modeValue>' for 'KeyboardFullscreen' 'Button 1 row 1'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify the Keyboard Full Screen centerKeyboard control (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    And I set the 'centerKeyboard' to '<state>' for 'KeyboardFullscreen' component
    Then I verify that the 'left' of 'KeyboardFullscreen' component is <leftValue> when 'Center Keyboard' state is '<state>'
    Examples:
      | theme   | state | leftValue |
      | Xfinity | true  | -20       |
      | Xfinity | false | 0         |
    Examples:
      | theme | state | leftValue |
      | Base  | true  | -225      |
      | Base  | false | 0         |

  Scenario Outline: Verify the Keyboard Full Screen centerKeys control (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    And I set the 'centerKeys' to '<state>' for 'KeyboardFullscreen' component
    Then I verify that the 'left' of 'KeyboardFullscreen' component is <leftValue> when 'Center keys' state is '<state>'
    Examples:
      | theme   | state | leftValue |
      | Xfinity | true  | 504       |
      | Xfinity | false | 0         |
      | Base    | true  | 630       |
      | Base    | false | 0         |

  Scenario Outline: Verify the default values of Keyboard Full Screen controls (<theme> theme)
    When I navigate to 'KeyboardFullscreen' with '<theme>' theme
    Then I verify the mode is 'focused' for 'KeyboardFullscreen' 'Button 1 row 1'
    And I verify that the 'left' of 'KeyboardFullscreen' component is 0 when 'Center Keyboard' state is 'false'
    And I verify that the 'left' of 'KeyboardFullscreen' component is 0 when 'Center keys' state is 'false'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
