@regression @slider @signalHandling @2115086

Feature: LUI Slider Signal Handling component

  Background:
    Given I launch the LUI app
    And I navigate to 'Slider' 'Signal Handling' with 'Base' theme

  Scenario: Verify that the Slider Signal Handling is displayed
    Then I verify that the 'Slider' 'Container' component is displayed
    And I verify that the 'Slider' 'Knob' component is displayed
    And I verify that the 'Slider' 'Left Arrow' component is displayed
    And I verify that the 'Slider' 'Right Arrow' component is displayed

  Scenario: Verify the dimensions of the Slider Signal Handling Element
    Then I verify that the 'width' of 'Slider' 'Container' component is '328px'
    And I verify that the 'height' of 'Slider' 'Container' component is '24px'

  Scenario Outline: Verify that Slider Signal Handling can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Slider' component
    Then I verify the mode is '<modeValue>' for 'Slider' 'Basic'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the Slider Signal Handling text
    Then I verify that 'Slider' 'Signal Handling Text' has 'text' 'Value: 0'

  Scenario: Verify Slider Signal Handling arrow key navigation
    When I press 'RIGHT' key 5 times
    Then I verify that the 'Slider' progress is set to 0.5
    And I verify that 'Slider' 'Signal Handling Text' has 'text' 'Value: 50'
    And I press 'RIGHT' key 5 times
    And I verify that the 'Slider' progress is set to 1
    And I verify that 'Slider' 'Signal Handling Text' has 'text' 'Value: 100'
    And I press 'LEFT' key 10 times
    And I verify that the 'Slider' progress is set to 0
    And I verify that 'Slider' 'Signal Handling Text' has 'text' 'Value: 0'
