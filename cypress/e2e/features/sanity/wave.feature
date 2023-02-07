@regression @wave @2110407

Feature: LUI Wave component

  Background:
    Given I launch the LUI app 

  Scenario Outline: Verify that Wave Element is visible (<theme> theme)
    When I navigate to 'Wave' with '<theme>' theme
    Then I verify that the 'Wave' component is displayed
    And I verify that the 'width' of 'Wave' component is '<defaultWidth>'
    And I verify that the 'height' of 'Wave' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 6px          | 20px          |
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 8px          | 26.6667px     |

  Scenario Outline: Verify the dimensions of the Wave components (<theme> theme)
    # The Wave animates by default
    # Setting toggleAnimation to false to check the dimensions
    When I navigate to 'Wave' with '<theme>' theme
    And I set the 'toggleAnimation' to 'false' for 'Wave' component
    Then I verify that the 'width' of 'Wave' '<waveValue>' component is '<defaultWidth>'
    And I verify that the 'height' of 'Wave' '<waveValue>' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | waveValue | defaultWidth | defaultHeight |
      | Xfinity | Left1     | 8px          | 22px          |
      | Xfinity | Left2     | 8px          | 42px          |
      | Xfinity | Middle    | 8px          | 62px          |
      | Xfinity | Right1    | 8px          | 42px          |
      | Xfinity | Right2    | 8px          | 22px          |
    @sanity
    Examples:
      | theme | waveValue | defaultWidth | defaultHeight |
      | Base  | Left1     | 10px         | 28px          |
      | Base  | Left2     | 10px         | 55px          |
      | Base  | Middle    | 10px         | 82px          |
      | Base  | Right1    | 10px         | 55px          |
      | Base  | Right2    | 10px         | 28px          |

  Scenario Outline: Verify the Wave toggleAnimation control (<theme> theme)
    When I navigate to 'Wave' with '<theme>' theme
    Then I verify that the 'Wave' '<waveValue>' component is animating
    @sanity_temp
    Examples:
      | theme   | waveValue | 
      | Xfinity | Left1     | 
      | Xfinity | Left2     |
      | Xfinity | Middle    |
      | Xfinity | Right1    |
      | Xfinity | Right2    |
    @sanity
    Examples:
      | theme | waveValue | 
      | Base  | Left1     |
      | Base  | Left2     |
      | Base  | Middle    |
      | Base  | Right1    |
      | Base  | Right2    |
