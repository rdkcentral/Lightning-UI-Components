@regression @slider @basic @2113584

Feature: LUI Slider Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Slider Basic is displayed (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    Then I verify that the 'Slider' '<componentName>' component is displayed
    And I verify that the 'Slider' 'Knob' component is displayed
    And I verify that the 'Slider' 'Left Arrow' component is displayed
    And I verify that the 'Slider' 'Right Arrow' component is displayed
    @sanity_temp
    Examples:
      | theme   | componentName |
      | Xfinity | Progress Bar  |
      | Xfinity | Knob          |
      | Xfinity | Left Arrow    |
      | Xfinity | Right Arrow   |
    @sanity
    Examples:
      | theme   | componentName |
      | Base    | Progress Bar  |
      | Base    | Knob          |
      | Base    | Left Arrow    |
      | Base    | Right Arrow   |

  Scenario Outline: Verify the dimensions of the Slider Basic Element (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    Then I verify that the 'width' of 'Slider' 'Slider Bar' component is '<width>'
    And I verify that the 'height' of 'Slider' 'Slider Bar' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width     | height |
      | Xfinity | 169.333px | 8px    |
    @sanity
    Examples:
      | theme   | width   | height |
      | Base    | 208px   | 10px   |

  Scenario Outline: Verify that Slider can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Slider' component
    Then I verify the mode is '<modeValue>' for 'Slider'
    @sanity_temp
    Examples:
      | theme    | modeValue |
      | Xfinity  | unfocused |
      | Xfinity  | focused   |
      | Xfinity  | disabled  |
    @sanity
    Examples:
      | theme   | modeValue   | 
      | Base    | unfocused   | 
      | Base    | focused     |  
      | Base    | disabled    |        

  Scenario Outline: Verify the Slider Basic max boundary (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I set the 'max' to '<maxValue>' for 'Slider' component
    Then I verify that the 'Slider' progress is set to <progressValue>
    @sanity_temp
    Examples:
      | theme   | maxValue | progressValue |
      | Xfinity | 50       | 1.00          |
      | Xfinity | 80       | 0.625         |
      | Xfinity | 100      | 0.50          |
     @sanity
    Examples:
      | theme | maxValue | progressValue |
      | Base  | 50       | 1.00          |
      | Base  | 80       | 0.625         |
      | Base  | 100      | 0.50          |

  Scenario Outline: Verify the Slider Basic min boundary (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I set the 'min' to '<minValue>' for 'Slider' component
    Then I verify that the 'Slider' progress is set to <progressValue>
    @sanity_temp
    Examples:
      | theme   | minValue | progressValue |
      | Xfinity | 50       | 0.5           |
      | Xfinity | 75       | 0.75          |
      | Xfinity | 90       | 0.90          |
    @sanity
    Examples:
      | theme | minValue | progressValue |
      | Base  | 50       | 0.5           |
      | Base  | 75       | 0.75          |
      | Base  | 90       | 0.90          |

  Scenario Outline: Verify the Slider Basic current value can be set (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I set the 'value' to '<expected>' for 'Slider' component
    Then I verify that the 'Slider' progress is set to <progressValue>
    @sanity_temp
    Examples:
      | theme    | expected | progressValue |
      | Xfinity  | 0        | 0.00          |
      | Xfinity  | 25       | 0.25          |
      | Xfinity  | 50       | 0.50          |
      | Xfinity  | 75       | 0.75          |
      | Xfinity  | 100      | 1.00          |
    @sanity_temp
    Examples:
      | theme | expected | progressValue |
      | Base  | 0        | 0.00          |
      | Base  | 25       | 0.25          |
      | Base  | 50       | 0.50          |
      | Base  | 75       | 0.75          |
      | Base  | 100      | 1.00          |

  Scenario Outline: Verify the Slider Basic vertical setting (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I set the 'vertical' to '<verticalSetting>' for 'Slider' component
    Then I verify the vertical control is '<verticalSetting>' for 'Slider'
    @sanity_temp
    Examples:
      | theme   | verticalSetting |
      | Xfinity | true            |
      | Xfinity | false           | 
    @sanity
    Examples:
      | theme   | verticalSetting |
      | Base    | true            |
      | Base    | false           |

    Scenario Outline: Verify Slider Basic vertical setting with modified boundaries and progress
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I set the 'vertical' to 'true' for 'Slider' component
    Then I verify the vertical control is 'true' for 'Slider'
    And I set the 'value' to '<valueTotal>' for 'Slider' component
    And I set the '<controlName>' to '<controlValue>' for 'Slider' component
    And I verify that the 'Slider' progress is set to <progress>
    @sanity_temp
    Examples:
      | theme   | controlName | controlValue | valueTotal | progress |
      | Xfinity | value       | 1            | 1          | 0.01     |
      | Xfinity | min         | 20           | 0          | 0.20     |
      | Xfinity | value       | 100          | 100        | 1        |
      | Xfinity | max         | 80           | 100        | 1        |
      | Xfinity | max         | 80           | 50         | 0.625    |
    @sanity
    Examples:
      | theme   | controlName | controlValue | valueTotal | progress |
      | Base    | value       | 1            | 1          | 0.01     |
      | Base    | min         | 20           | 0          | 0.20     |
      | Base    | value       | 100          | 100        | 1        |
      | Base    | max         | 80           | 100        | 1        |
      | Base    | max         | 80           | 50         | 0.625    |

  Scenario Outline: Verify Slider Basic arrow key navigation with default step size (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I press '<keyInput>' key <inputQuantity> times
    Then I verify that the 'Slider' progress is set to <progressValue>
    @sanity_temp
    Examples:
      | theme   | keyInput |  inputQuantity  | progressValue | 
      | Xfinity | LEFT     |     5           |      0.45     |
      | Xfinity | LEFT     |     10          |      0.40     |  
      | Xfinity | RIGHT    |     10          |      0.60     | 
      | Xfinity | RIGHT    |     5           |      0.55     | 
    @sanity
    Examples:
      | theme | keyInput |  inputQuantity  | progressValue | 
      | Base  | LEFT     |     5           |      0.45     |
      | Base  | LEFT     |     10          |      0.40     |  
      | Base  | RIGHT    |     10          |      0.60     | 
      | Base  | RIGHT    |     5           |      0.55     | 

  Scenario Outline: Verify Slider Basic arrow key navigation with modified step size (<theme> theme)
    When I navigate to 'Slider' 'Basic' with '<theme>' theme
    And I set the 'step' to '10' for 'Slider' component
    Then I press '<keyInput>' key <inputQuantity> times
    And I verify that the 'Slider' progress is set to <progressValue>
    @sanity_temp
    Examples:
      | theme   | keyInput |  inputQuantity  | progressValue | 
      | Xfinity | LEFT     |     5           |      0        | 
      | Xfinity | RIGHT    |     10          |      1        | 
    @sanity
    Examples:
      | theme | keyInput |  inputQuantity  | progressValue | 
      | Base  | LEFT     |     5           |      0        | 
      | Base  | RIGHT    |     10          |      1        |
