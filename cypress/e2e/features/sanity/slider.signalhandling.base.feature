@sanity @slider @signalhandling @2115086

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

  # https://ccp.sys.comcast.net/browse/LUI-598
  # Skipping the test because of the bug
  @skip
  Scenario: Verify the Slider Signal Handling modes
    When I set the 'mode' to 'unfocused' for 'Slider' component
    Then I verify the mode is 'unfocused' for 'Slider' 'Signal Handling'
    And I set the 'mode' to 'focused' for 'Slider' component
    And I verify the mode is 'focused' for 'Slider' 'Signal Handling'
    And I set the 'mode' to 'disabled' for 'Slider' component
    And I verify the mode is 'disabled' for 'Slider' 'Signal Handling'

  Scenario: Verify the Slider Signal Handling text
    Then I verify that 'Slider' 'Signal Handling Text' has text 'Value: 0'

  Scenario: Verify Slider Signal Handling arrow key navigation
    When I press 'RIGHT' key 5 times
    Then I verify that the 'Slider' progress is set to 0.5
    And I verify that 'Slider' 'Signal Handling Text' has text 'Value: 50'
    And I press 'RIGHT' key 5 times
    And I verify that the 'Slider' progress is set to 1
    And I verify that 'Slider' 'Signal Handling Text' has text 'Value: 100'
    And I press 'LEFT' key 10 times
    And I verify that the 'Slider' progress is set to 0
    And I verify that 'Slider' 'Signal Handling Text' has text 'Value: 0'
