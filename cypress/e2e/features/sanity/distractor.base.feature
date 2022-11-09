@sanity @distractor @2110308

Feature: LUI Distractor Basic Component

  Background:
    Given I launch the LUI app
    And I navigate to 'Distractor' 'Distractor' with 'Base' theme

  Scenario: Verify that Distractor component is displayed
    Then I verify that the 'Distractor' 'Circle1' component is displayed
    And I verify that the 'Distractor' 'Circle2' component is displayed
    And I verify that the 'Distractor' 'Circle3' component is displayed

  Scenario: Verify that the Distractor components are animating
    Then I verify that the 'Distractor' 'Circle1' component is animating
    And I verify that the 'Distractor' 'Circle2' component is animating
    And I verify that the 'Distractor' 'Circle3' component is animating
