@sanity @sliderlarge @basic @2115087

Feature: LUI SliderLarge Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'SliderLarge' 'Basic' with 'Base' theme

  Scenario: Verify that the SliderLarge Basic is displayed
    Then I verify that the 'SliderLarge' 'Container' component is displayed
    And I verify that the 'SliderLarge' 'Progress Bar' component is displayed
    And I verify that the 'SliderLarge' 'Knob' component is displayed
    And I verify that the 'SliderLarge' 'Left Arrow' component is displayed
    And I verify that the 'SliderLarge' 'Right Arrow' component is displayed

  Scenario: Verify the dimensions of the SliderLarge Basic Element
    Then I verify that the 'width' of 'SliderLarge' 'Container' component is '308px'
    And I verify that the 'height' of 'SliderLarge' 'Container' component is '24px'

  # https://ccp.sys.comcast.net/browse/LUI-598
  # Skipping the test because of the bug
  @skip
  Scenario: Verify the SliderLarge Basic modes
    When I set the 'mode' to 'unfocused' for 'SliderLarge' component
    Then I verify the mode is 'unfocused' for 'SliderLarge' 'Basic Slider'
    And I set the 'mode' to 'focused' for 'SliderLarge' component
    And I verify the mode is 'focused' for 'SliderLarge' 'Basic Slider'
    And I set the 'mode' to 'disabled' for 'SliderLarge' component
    And I verify the mode is 'disabled' for 'SliderLarge' 'Basic Slider'

  Scenario Outline: Verify the SliderLarge Basic max boundary
    When I set the 'max' to '<maxValue>' for 'SliderLarge' component
    Then I verify that the 'SliderLarge' progress is set to <progressValue>
    Examples:
      | maxValue | progressValue |
      |    50    |     1.00      |
      |    80    |     0.625     |
      |    100   |     0.50      |

  Scenario Outline: Verify the SliderLarge Basic min boundary
    When I set the 'min' to '<minValue>' for 'SliderLarge' component
    Then I verify that the 'SliderLarge' progress is set to <progressValue>
    Examples:
      | minValue | progressValue |
      |    50    |     0.5       |
      |    75    |     0.75      |
      |    90    |     0.90      |

  Scenario Outline: Verify the SliderLarge Basic current value can be set
    When I set the 'value' to '<expected>' for 'SliderLarge' component
    Then I verify that the 'SliderLarge' progress is set to <progressValue>
    Examples:
      | expected | progressValue |
      |    0     |     0.00      |
      |    25    |     0.25      |
      |    50    |     0.50      |
      |    75    |     0.75      |
      |    100   |     1.00      |

  Scenario: Verify SliderLarge Basic arrow key navigation with default step size
    When I press 'LEFT' key 5 times
    Then I verify that the 'SliderLarge' progress is set to 0.45
    And I press 'RIGHT' key 10 times
    And I verify that the 'SliderLarge' progress is set to 0.55
    And I press 'LEFT' key 5 times
    And I verify that the 'SliderLarge' progress is set to 0.5

  Scenario: Verify SliderLarge Basic arrow key navigation with modified step size
    When I set the 'step' to '10' for 'SliderLarge' component
    Then I press 'LEFT' key 5 times
    And I verify that the 'SliderLarge' progress is set to 0
    And I press 'RIGHT' key 10 times
    And I verify that the 'SliderLarge' progress is set to 1
    And I press 'LEFT' key 5 times
    And I verify that the 'SliderLarge' progress is set to 0.5
