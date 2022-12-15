@sanity @regression @progressBar @2113575

Feature: LUI ProgressBar Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'ProgressBar' with 'Base' theme

  Scenario: Verify that ProgressBar Basic component is displayed
    Then I verify that the 'ProgressBar' component is displayed

  Scenario: Verify the dimensions of the ProgressBar Basic Element
    Then I verify that the 'width' of 'ProgressBar' component is '410px'
    And I verify that the 'height' of 'ProgressBar' component is '10px'
    And I verify that the 'ProgressBar' progress is set to 0.50

  Scenario Outline: Validate the ProgressBar progress control
    When I set the 'progress' to '<progressValue>' for 'ProgressBar' component
    Then I verify that the 'ProgressBar' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.20          |
      | 0.50          |
      | 0.75          |
      | 1.00          |

  Scenario Outline: Validate the ProgressBar width control
    When I set the 'w' to '<progressBarWidth>' for 'ProgressBar' component
    Then I verify that the 'width' of 'ProgressBar' component is '<progressBarWidth>px'
    And I verify that the 'ProgressBar' progress is set to 0.50
    Examples:
      | progressBarWidth |
      | 100              |
      | 250              |
      | 400              |
      | 600              |
