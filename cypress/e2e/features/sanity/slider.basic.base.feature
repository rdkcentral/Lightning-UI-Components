@sanity @slider @basic @2113584

Feature: LUI Slider Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Slider' 'Basic' with 'Base' theme

  Scenario: Verify that the Slider Basic is displayed
    Then I verify that the 'Slider' 'Container' component is displayed
    And I verify that the 'Slider' 'Progress Bar' component is displayed
    And I verify that the 'Slider' 'Knob' component is displayed
    And I verify that the 'Slider' 'Left Arrow' component is displayed
    And I verify that the 'Slider' 'Right Arrow' component is displayed

  Scenario: Verify the dimensions of the Slider Basic Element
    Then I verify that the 'width' of 'Slider' 'Container' component is '308px'
    And I verify that the 'height' of 'Slider' 'Container' component is '24px'

# Disabled until 'mode' control functionality is fixed
  # Scenario: Verify the Slider Basic modes
  #   When I set the 'mode' to 'unfocused' for 'Slider' component
  #   Then I verify the 'mode' is 'unfocused' for 'Slider' 'Basic'
  #   And I set the 'mode' to 'focused' for 'Slider' component
  #   And I verify the 'mode' is 'focused' for 'Slider' 'Basic'
  #   And I set the 'mode' to 'disabled' for 'Slider' component
  #   And I verify the 'mode' is 'disabled' for 'Slider' 'Basic'

  Scenario: Verify the Slider Basic max boundary
    When I set the 'max' to '<maxValue>' for 'Slider' component
    Then I verify that the 'Slider' Progress Bar is set to <progressValue>
    Examples:
      | maxValue | progressValue |
      |    50    |     1.00      |
      |    80    |     0.625     |
      |    100   |     0.50      |

  Scenario: Verify the Slider Basic min boundary
    When I set the 'min' to '<minValue>' for 'Slider' component
    Then I verify that the 'Slider' Progress Bar is set to <progressValue>
    Examples:
      | minValue | progressValue |
      |    50    |     0.5       |
      |    75    |     0.75      |
      |    90    |     0.90      |

  Scenario: Verify the Slider Basic current value can be set
    When I set the 'value' to '<expected>' for 'Slider' component
    Then I verify that the 'Slider' Progress Bar is set to <progressValue>
    Examples:
      | expected | progressValue |
      |    1     |     0.01      |
      |    25    |     0.25      |
      |    50    |     0.50      |
      |    75    |     0.75      |
      |    100   |     1.00      |

  Scenario: Verify the Slider Basic vertical setting
    When I set the 'vertical' to 'true' for 'Slider' component
    Then I verify the 'vertical' is 'true' for 'Slider' 'Basic'
    And I set the 'vertical' to 'false' for 'Slider' component
    And I verify the 'vertical' is 'false' for 'Slider' 'Basic'

  Scenario: Verify Slider Basic vertical setting with modified boundaries and progress
    When I set the 'vertical' to 'true' for 'Slider' component
    Then I verify the 'vertical' is 'true' for 'Slider' 'Basic'
    And I set the 'value' to '1' for 'Slider' component
    And I verify that the 'Slider' Progress Bar is set to 0.01
    And I set the 'min' to '20' for 'Slider' component
    And I verify that the 'Slider' Progress Bar is set to 0.20
    And I set the 'value' to '100' for 'Slider' component
    And I verify that the 'Slider' Progress Bar is set to 1
    And I set the 'max' to '80' for 'Slider' component
    And I verify that the 'Slider' Progress Bar is set to 1
    And I set the 'value' to '50' for 'Slider' component
    And I verify that the 'Slider' Progress Bar is set to 0.625