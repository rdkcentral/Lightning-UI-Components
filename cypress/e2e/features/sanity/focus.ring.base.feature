@sanity @focusRing @2110453

Feature: LUI Focus Ring component

  Background:
    Given I launch the LUI app
    And I navigate to 'FocusRing' 'Focus-ring' with 'Base' theme

  Scenario: Verify that Focus Ring Basic Element is visible
    Then I verify that the 'FocusRing' component is displayed

  Scenario: Verify the dimensions of the Focus Ring Basic Element
    Then I verify that the 'width' of 'FocusRing' component is '308'
    And I verify that the 'height' of 'FocusRing' component is '173'

  Scenario: Verify that the Focus Ring components are animating
    Then I verify that the 'FocusRing' 'FocusRingAnimate' component is animating

