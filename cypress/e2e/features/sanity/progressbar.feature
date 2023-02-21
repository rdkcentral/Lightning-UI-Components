@regression @progressBar @2113575

Feature: LUI ProgressBar Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that ProgressBar Basic component is displayed (<theme> theme)
    When I navigate to 'ProgressBar' with '<theme>' theme
    Then I verify that the 'ProgressBar' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the ProgressBar element (<theme> theme)
    When I navigate to 'ProgressBar' with '<theme>' theme
    Then I verify that the 'width' of 'ProgressBar' component is '<width>'
    And I verify that the 'height' of 'ProgressBar' component is '<height>'
    And I verify that the 'ProgressBar' progress is set to 0.50
    @sanity
    Examples:
      | theme   | width | height |
      | Xfinity | 410px | 8px    |
    Examples:
      | theme | width | height |
      | Base  | 410px | 10px   |

  Scenario Outline: Validate the ProgressBar progress control (<theme> theme)
    When I navigate to 'ProgressBar' with '<theme>' theme
    And I set the 'progress' to '<progressValue>' for 'ProgressBar' component
    Then I verify that the 'ProgressBar' progress is set to <progressValue>
    @sanity
    Examples:
      | theme   | progressValue |
      | Xfinity | 0.20          |
      | Xfinity | 0.50          |
      | Xfinity | 0.75          |
      | Xfinity | 1.00          |
    Examples:
      | theme | progressValue |
      | Base  | 0.20          |
      | Base  | 0.50          |
      | Base  | 0.75          |
      | Base  | 1.00          |

  Scenario Outline: Validate the ProgressBar width control (<theme> theme)
    When I navigate to 'ProgressBar' with '<theme>' theme
    And I set the 'w' to '<progressBarWidth>' for 'ProgressBar' component
    Then I verify that the 'width' of 'ProgressBar' component is '<progressBarWidth>px'
    And I verify that the 'ProgressBar' progress is set to 0.50
    @sanity
    Examples:
      | theme   | progressBarWidth |
      | Xfinity | 100              |
      | Xfinity | 250              |
      | Xfinity | 400              |
      | Xfinity | 600              |
    Examples:
      | theme | progressBarWidth |
      | Base  | 100              |
      | Base  | 250              |
      | Base  | 400              |
      | Base  | 600              |
