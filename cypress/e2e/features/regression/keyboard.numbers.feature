@regression @keyboard @2115192

Feature: LUI Keyboard Numbers component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Keyboard Numbers component is displayed (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify that the 'KeyboardNumbers' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the dimensions of the Keyboard Numbers elements (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify that the 'height' of 'KeyboardNumbers' component is '<height>'
    And I verify that the 'width' of 'KeyboardNumbers' component is '<width>'
    Examples:
      | theme   | height | width |
      | Xfinity | 312    | 184   |
      | Base    | 390    | 230   |

  Scenario Outline: Verify the count of the Keyboard Numbers elements (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify that there are 4 'rows' on the 'KeyboardNumbers' page
    And I verify there are <assetsCount> assets per '<element>' on the 'KeyboardNumbers' page
    Examples:
      | theme   | assetsCount | element        |
      | Xfinity | 3           | Row 1 elements |
      | Xfinity | 3           | Row 2 elements |
      | Xfinity | 3           | Row 3 elements |
      | Xfinity | 1           | Row 4 elements |
      | Base    | 3           | Row 1 elements |
      | Base    | 3           | Row 2 elements |
      | Base    | 3           | Row 3 elements |
      | Base    | 1           | Row 4 elements |

  Scenario Outline: Validate navigating the buttons of the Keyboard Numbers component (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify that 'KeyboardNumbers' 'Row 1 button 1 label' has 'text' '1'
    And I verify that the 'Row 1 button 1' component on the 'KeyboardNumbers' page is in focus
    And I press 'DOWN' key 4 times
    Then I verify that 'KeyboardNumbers' 'Row 4 button 1 label' has 'text' '0'
    And I verify that the 'Row 4 button 1' component on the 'KeyboardNumbers' page is in focus
    And I press 'UP' key
    And I press 'RIGHT' key
    And I press 'UP' key 2 times
    And I verify that 'KeyboardNumbers' 'Row 1 button 2 label' has 'text' '2'
    And I verify that the 'Row 1 button 2' component on the 'KeyboardNumbers' page is in focus
    #verify that focused button scrolls from the last element to first
    And I press 'RIGHT' key 2 times
    And I verify that 'KeyboardNumbers' 'Row 1 button 1 label' has 'text' '1'
    And I verify that the 'Row 1 button 1' component on the 'KeyboardNumbers' page is in focus
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the Keyboard Numbers component modes (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify the mode is 'focused' for 'KeyboardNumbers' 'Row 1 Buttons'
    And I set the 'mode' to '<modeValue>' for 'KeyboardNumbers' component
    And I verify the mode is '<modeValue>' for 'KeyboardNumbers' 'Row 1 Buttons'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify the Keyboard Numbers centerKeyboard control (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify that the 'left' of 'KeyboardNumbers' component is 0 when 'Center Keyboard' state is 'false'
    And I set the 'centerKeyboard' to '<state>' for 'KeyboardNumbers' component
    And I verify that the 'left' of 'KeyboardNumbers' component is <leftValue> when 'Center Keyboard' state is '<state>'
    Examples:
      | theme   | state | leftValue |
      | Xfinity | true  | 716       |
      | Xfinity | false | 0         |
      | Base    | true  | 695       |
      | Base    | false | 0         |

  Scenario Outline: Verify the Keyboard Numbers centerKeys control (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify that the 'left' of 'KeyboardNumbers' component is 0 when 'Center Keys' state is 'false'
    And I set the 'centerKeys' to '<state>' for 'KeyboardNumbers' component
    And I verify that the 'left' of 'KeyboardNumbers' component is <leftValue> when 'Center Keys' state is '<state>'
    Examples:
      | theme   | state | leftValue |
      | Xfinity | true  | 64        |
      | Xfinity | false | 0         |
      | Base    | true  | 80        |
      | Base    | false | 0         |

  Scenario Outline: Verify the Keyboard Numbers defaultFormat control (<theme> theme)
    When I navigate to 'KeyboardNumbers' with '<theme>' theme
    Then I verify that the 'KeyboardNumbers' 'Row 5 delete button' component does not exist in DOM
    And I set the 'defaultFormat' to 'dialpadExtended' for 'KeyboardNumbers' component
    And I wait 0.5 seconds for the page to load
    And I verify that there are 5 'Rows Dialpad Extended' on the 'KeyboardNumbers' page
    And I press 'DOWN' key 4 times
    And I verify that the 'Row 5 delete button' component on the 'KeyboardNumbers' page is in focus
    And I set the 'defaultFormat' to 'dialpad' for 'KeyboardNumbers' component
    And I verify that the 'KeyboardNumbers' 'Row 5 delete button' component does not exist in DOM
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
