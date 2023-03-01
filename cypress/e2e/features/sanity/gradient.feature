@regression @gradient @2188911

Feature: LUI Gradient component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Gradient component is displayed (<theme> theme)
    When I navigate to 'Gradient' with '<theme>' theme
    Then I verify that the 'Gradient' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the Gradient component (<theme> theme)
    When I navigate to 'Gradient' with '<theme>' theme
    Then I verify that the 'width' of 'Gradient' component is '<defaultWidth>'
    And I verify that the 'height' of 'Gradient' component is '<defaultHeight>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 523px        | 294px         |
    Examples:
      | theme | defaultWidth | defaultHeight |
      | Base  | 527px        | 296px         |
