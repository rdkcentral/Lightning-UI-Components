@sanity @regression @slider @basic @2113584

Feature: LUI Slider Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Slider' 'Basic' with 'Base' theme

  Scenario: Verify that the Slider Basic is displayed
    Then I verify that the 'Slider' 'Progress Bar' component is displayed
    And I verify that the 'Slider' 'Knob' component is displayed
    And I verify that the 'Slider' 'Left Arrow' component is displayed
    And I verify that the 'Slider' 'Right Arrow' component is displayed

  Scenario: Verify the dimensions of th Slider Basic Element
    Then I verify that the 'width' of 'Slider' 'Slider Bar' component is '268px'
    And I verify that the 'height' of 'Slider' 'Slider Bar' component is '10px'

  Scenario Outline: Verify that Slider can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Slider' component
    Then I verify the mode is '<modeValue>' for 'Slider'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario Outline: Verify the Slider Basic max boundary
    When I set the 'max' to '<maxValue>' for 'Slider' component
    Then I verify that the 'Slider' progress is set to <progressValue>
    Examples:
      | maxValue | progressValue |
      | 50       | 1.00          |
      | 80       | 0.625         |
      | 100      | 0.50          |

  Scenario Outline: Verify the Slider Basic min boundary
    When I set the 'min' to '<minValue>' for 'Slider' component
    Then I verify that the 'Slider' progress is set to <progressValue>
    Examples:
      | minValue | progressValue |
      | 50       | 0.5           |
      | 75       | 0.75          |
      | 90       | 0.90          |

  Scenario Outline: Verify the Slider Basic current value can be set
    When I set the 'value' to '<expected>' for 'Slider' component
    Then I verify that the 'Slider' progress is set to <progressValue>
    Examples:
      | expected | progressValue |
      | 0        | 0.00          |
      | 25       | 0.25          |
      | 50       | 0.50          |
      | 75       | 0.75          |
      | 100      | 1.00          |

  Scenario: Verify the Slider Basic vertical setting
    When I set the 'vertical' to 'true' for 'Slider' component
    Then I verify the vertical control is 'true' for 'Slider'
    And I set the 'vertical' to 'false' for 'Slider' component
    And I verify the vertical control is 'false' for 'Slider'

  Scenario: Verify Slider Basic vertical setting with modified boundaries and progress
    When I set the 'vertical' to 'true' for 'Slider' component
    Then I verify the vertical control is 'true' for 'Slider'
    And I set the 'value' to '1' for 'Slider' component
    And I verify that the 'Slider' progress is set to 0.01
    And I set the 'min' to '20' for 'Slider' component
    And I verify that the 'Slider' progress is set to 0.20
    And I set the 'value' to '100' for 'Slider' component
    And I verify that the 'Slider' progress is set to 1
    And I set the 'max' to '80' for 'Slider' component
    And I verify that the 'Slider' progress is set to 1
    And I set the 'value' to '50' for 'Slider' component
    And I verify that the 'Slider' progress is set to 0.625

  Scenario: Verify Slider Basic arrow key navigation with default step size
    When I press 'LEFT' key 5 times
    Then I verify that the 'Slider' progress is set to 0.45
    And I press 'RIGHT' key 10 times
    And I verify that the 'Slider' progress is set to 0.55
    And I press 'LEFT' key 5 times
    And I verify that the 'Slider' progress is set to 0.5

  Scenario: Verify Slider Basic arrow key navigation with modified step size
    When I set the 'step' to '10' for 'Slider' component
    Then I press 'LEFT' key 5 times
    And I verify that the 'Slider' progress is set to 0
    And I press 'RIGHT' key 10 times
    And I verify that the 'Slider' progress is set to 1
    And I press 'LEFT' key 5 times
    And I verify that the 'Slider' progress is set to 0.5
