@regression @distractor @2110308

Feature: LUI Distractor Basic Component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Distractor component is displayed (<theme> theme)
    When I navigate to 'Distractor' with '<theme>' theme
    Then I verify that the 'Distractor' '<circleValue>' component is displayed
    @sanity_temp
    Examples:
      | theme   | circleValue |
      | Xfinity | Circle1     |
      | Xfinity | Circle2     |
      | Xfinity | Circle3     |
    @sanity
    Examples:
      | theme   | circleValue |
      | Base    | Circle1     |
      | Base    | Circle2     |
      | Base    | Circle3     |

  Scenario Outline: Verify that the Distractor components are animating (<theme> theme)
    When I navigate to 'Distractor' with '<theme>' theme
    Then I verify that the 'Distractor' '<circleValue>' component is animating
    @sanity_temp
    Examples:
      | theme   | circleValue |
      | Xfinity | Circle1     |
      | Xfinity | Circle2     |
      | Xfinity | Circle3     |
    @sanity
    Examples:
      | theme   | circleValue |
      | Base    | Circle1     |
      | Base    | Circle2     |
      | Base    | Circle3     |
