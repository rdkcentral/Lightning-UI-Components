@regression @keyboard @2115075

Feature: LUI Keyboard Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Keyboard component is displayed (<theme> theme)
    When I navigate to 'Keyboard' with '<theme>' theme
    Then I verify that the 'Keyboard' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions and count of the Keyboard elements (<theme> theme)
    When I navigate to 'Keyboard' with '<theme>' theme
    Then I verify there are 11 assets per 'Row 1 Elements' on the 'Keyboard' page
    And I verify that there are 5 'rows' on the 'Keyboard' page
    And I verify that the 'width' of 'Keyboard' component is '<width>'
    And I verify that the 'height' of 'Keyboard' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 760   | 392    |
    @sanity
    Examples:
      | theme | width | height |
      | Base  | 950   | 490    |

  Scenario Outline: Validate row navigation of the Keyboard component (<theme> theme)
    When I navigate to 'Keyboard' with '<theme>' theme
    Then I verify that the 'Row 1 Button 1' component on the 'Keyboard' page is in focus
    And I wait 0.5 seconds for the page to load
    And I verify that I am able to navigate to the 'last' element of the 'Keyboard' 'Row 1 Buttons'
    And I verify that I am able to navigate to the 'first' element of the 'Keyboard' 'Row 1 Buttons'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate navigating the buttons of the Keyboard component (<theme> theme)
    When I navigate to 'Keyboard' with '<theme>' theme
    Then I verify that 'Keyboard' 'Row 1 Button 1 Label' has 'text' '1'
    And I press 'DOWN' key 4 times
    And I verify that 'Keyboard' 'Row 5 Space Button Label' has 'text' 'Space'
    And I press 'UP' key 4 times
    And I verify that 'Keyboard' 'Row 1 Button 6 Label' has 'text' '6'
    #verify that focused button scrolls from the last element to first
    And I press 'RIGHT' key 6 times
    And I verify that 'Keyboard' 'Row 1 Button 1 Label' has 'text' '1'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the Keyboard component modes (<theme> theme)
    When I navigate to 'Keyboard' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Keyboard' component
    Then I verify the mode is '<modeValue>' for 'Keyboard' 'Row 1 Buttons'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    @sanity
    Examples:
      | theme | modeValue |
      | Base  | unfocused |
      | Base  | focused   |
      | Base  | disabled  |

  Scenario Outline: Verify the default values of centerKeyboard and centerKeys controls
    When I navigate to 'Keyboard' with '<theme>' theme
    Then I verify that the 'left' of 'Keyboard' component is 0 when 'Center Keyboard' state is 'false'
    And I verify that the 'left' of 'Keyboard' component is <leftValue> when 'Center Keys' state is 'true'
    @sanity_temp
    Examples:
      | theme   | leftValue |
      | Xfinity | 64        |
    @sanity
    Examples:
      | theme | leftValue |
      | Base  | 80        |

  Scenario Outline: Verify the Keyboard centerKeyboard control (<theme> theme)
    When I navigate to 'Keyboard' with '<theme>' theme
    And I set the 'centerKeyboard' to '<state>' for 'Keyboard' component
    Then I verify that the 'left' of 'Keyboard' component is <leftValue> when 'Center Keyboard' state is '<state>'
    @sanity_temp
    Examples:
      | theme   | state | leftValue |
      | Xfinity | true  | 428                 |
      #TODO uncomment when the bug https://ccp.sys.comcast.net/browse/LUI-676 is fixed
      #| Xfinity | false | 0                   |
    @sanity
    Examples:
      | theme | state | leftValue |
      | Base  | true  | 335                 |
      #TODO uncomment when the bug https://ccp.sys.comcast.net/browse/LUI-676 is fixed
      #| Base  | false | 0                   |

   #TODO uncomment when the bug https://ccp.sys.comcast.net/browse/LUI-676 is fixed
#  Scenario Outline: Verify the Keyboard centerKeys control (<theme> theme)
#    When I navigate to 'Keyboard' with '<theme>' theme
#    And I set the 'centerKeys' to '<state>' for 'Keyboard' component
#    Then I verify that the 'left' of 'Keyboard' component is <leftValue> when 'Center Keys' state is '<state>'
#    @sanity_temp
#    Examples:
#      | theme   | state | leftValue |
#      | Xfinity | false | 0               |
#      | Xfinity | true  | 64              |
#    @sanity
#    Examples:
#      | theme | state | leftValue |
#      | Base  | false | 0               |
#      | Base  | true  | 80              |
