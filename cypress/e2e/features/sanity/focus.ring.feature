@regression @focusRing @2110453

Feature: LUI Focus Ring component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Focus Ring Basic Element is visible (<theme> theme)
    When I navigate to 'FocusRing' with '<theme>' theme
    Then I verify that the 'FocusRing' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the Focus Ring Basic Element (<theme> theme)
    When I navigate to 'FocusRing' with '<theme>' theme
    Then I verify that the 'width' of 'FocusRing' component is '<width>'
    And I verify that the 'height' of 'FocusRing' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 304   | 171    |
    @sanity
    Examples:
      | theme | width | height |
      | Base  | 308   | 173    |

  Scenario Outline: Verify that the Focus Ring components are animating (<theme> theme)
    When I navigate to 'FocusRing' with '<theme>' theme
    Then I verify that the 'FocusRing' 'FocusRingAnimate' component is animating
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |
