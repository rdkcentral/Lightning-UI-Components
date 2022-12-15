@regression @sliderLarge @signalHandling @2115088

Feature: LUI SliderLarge Signal Handling component

  Background:
    Given I launch the LUI app
    And I navigate to 'SliderLarge' 'Signal Handling' with 'Base' theme

  Scenario: Verify that the SliderLarge Signal Handling is displayed
    Then I verify that the 'SliderLarge' 'Container' component is displayed
    And I verify that the 'SliderLarge' 'Knob' component is displayed
    And I verify that the 'SliderLarge' 'Left Arrow' component is displayed
    And I verify that the 'SliderLarge' 'Right Arrow' component is displayed

  Scenario: Verify the dimensions of the Slider Signal Handling Element
    Then I verify that the 'width' of 'SliderLarge' 'Container' component is '328px'
    And I verify that the 'height' of 'SliderLarge' 'Container' component is '24px'

  Scenario Outline: Verify that Slider Signal Handling can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'SliderLarge' component
    Then I verify the mode is '<modeValue>' for 'SliderLarge' 'Basic'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the SliderLarge Signal Handling text
    Then I verify that 'SliderLarge' 'Signal Handling Text' has text 'Value: 30'

  Scenario: Verify SliderLarge Signal Handling arrow key navigation
    When I press 'RIGHT' key 2 times
    Then I verify that the 'SliderLarge' progress is set to 0.5
    And I verify that 'SliderLarge' 'Signal Handling Text' has text 'Value: 50'
    And I press 'RIGHT' key 5 times
    And I verify that the 'SliderLarge' progress is set to 1
    And I verify that 'SliderLarge' 'Signal Handling Text' has text 'Value: 100'
    And I press 'LEFT' key 10 times
    And I verify that the 'SliderLarge' progress is set to 0
    And I verify that 'SliderLarge' 'Signal Handling Text' has text 'Value: 0'
