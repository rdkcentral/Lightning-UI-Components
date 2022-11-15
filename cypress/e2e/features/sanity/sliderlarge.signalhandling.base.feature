@sanity @sliderlarge @signalhandling @2115088

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

# Disabled until 'mode' control functionality is fixed
  # Scenario: Verify the Slider Signal Handling modes
  #   When I set the 'mode' to 'unfocused' for 'SliderLarge' component
  #   Then I verify the 'mode' is 'unfocused' for 'SliderLarge' 'Signal Handling'
  #   And I set the 'mode' to 'focused' for 'SliderLarge' component
  #   And I verify the 'mode' is 'focused' for 'SliderLarge' 'Signal Handling'
  #   And I set the 'mode' to 'disabled' for 'SliderLarge' component
  #   And I verify the 'mode' is 'disabled' for 'SliderLarge' 'Signal Handling'

  Scenario: Verify the SliderLarge Signal Handling text
    Then I verify that 'SliderLarge' 'Signal Handling' 'Text' has text 'Value: 30'