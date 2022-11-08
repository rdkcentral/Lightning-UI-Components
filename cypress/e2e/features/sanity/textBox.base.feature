@sanity @textBox @2113158

# There will be changes to this test after LUI-536 is completed

Feature: LUI TextBox Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'TextBox' 'Base' with 'Base' theme

  Scenario: Verify that TextBox Base is displayed
    Then I verify that the 'TextBox' 'Base' component is displayed

  Scenario: Verify the dimensions of the TextBox Base Element
    Then I verify that the 'width' of 'TextBox' 'Base' component is '564px'
    And I verify that the 'height' of 'TextBox' 'Base' component is '120px'

  Scenario: Verify the TextBox Base content control
    When I set the 'content' to 'LUI Test' for 'TextBox' component
    Then I verify that the 'TextBox' 'Base' component is displayed
    And I verify that 'TextBox' 'Base' 'Text' has text 'LUI Test'

  Scenario: Verify the TextBox Base maxLines control
    When I set the 'maxLines' to '<maxLines>' for 'TextBox' component
    Then I verify that the 'height' of 'TextBox' 'Base' component is '<textBoxheight>px'
    Examples:
      | maxLines | textBoxheight |
      |     1    |      40.5     |
      |     2    |      81       |
      |     3    |     120       |
      |     4    |     160.5     |
      |    11    |     441       |

  Scenario: Verify the TextBox Base textColor control
    When I set the 'textColor' to '<hexValue>' for 'TextBox' component
    Then I verify that 'TextBox' 'Base' 'Text' has textColor '<color>'
    Examples:
      |   hexValue   |    color     |
      | !hex(ffff00) |  4294967040  |
      | !hex(ff0f0f) |  4294905615  |
      | !hex(0f0fff) |  4279177215  |

  # Scenario: Verify the Textbox Base textStyle control
  # 	When I set the 'Textbox Base' 'textStyle' control to 'display1'
  #   Then I verify that the text style of 'Textbox Base' is 'display1'

  Scenario: Verify the TextBox Base verticalAlign control
    When I set the 'verticalAlign' to '<position>' for 'TextBox' component
    Then I verify that 'TextBox' 'Base' 'Text' has property:value 'verticalAlign:<position>'
    Examples:
      |  position  |
      |   bottom   |
      |   middle   |
      # |    top     |

  Scenario: Verify the TextBox Base wordWrap control
    When I set the 'wordWrap' to 'false' for 'TextBox' component
    Then I verify that the 'width' of 'TextBox' 'Base' component is '6081px'
    And I set the 'wordWrap' to 'true' for 'TextBox' component
    And I verify that the 'width' of 'TextBox' 'Base' component is '564px'

  Scenario: Verify the TextBox Base wordWrapWidth control
    When I set the 'wordWrapWidth' to '300' for 'TextBox' component
    Then I verify that the 'width' of 'TextBox' 'Base' component is '240px'
    And I set the 'wordWrapWidth' to '900' for 'TextBox' component
    And I verify that the 'width' of 'TextBox' 'Base' component is '883.5px'
    And I set the 'wordWrapWidth' to '100' for 'TextBox' component
    And I verify that the 'width' of 'TextBox' 'Base' component is '72px'
