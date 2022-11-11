@sanity @wave @2110407

Feature: LUI Wave Base component

  Background:
    Given I launch the LUI app 
    When I navigate to 'Wave' 'Wave' with 'Base' theme
    
  Scenario: Verify that Wave Element is visible
    Then I verify that the 'Wave' component is displayed
    And I verify that the 'width' of 'Wave' component is '8px'
    And I verify that the 'height' of 'Wave' component is '26.6667px'

  Scenario: Verify the dimensions of the Wave components
    # The Wave animates by default
    # Setting toggleAnimation to false to check the dimensions
    When I set the 'toggleAnimation' to 'false' for 'Wave' component
    Then I verify that the 'width' of 'Wave' 'Left1' component is '10px'
    And I verify that the 'height' of 'Wave' 'Left1' component is '28px'
    And I verify that the 'width' of 'Wave' 'Left2' component is '10px'
    And I verify that the 'height' of 'Wave' 'Left2' component is '55px'
    And I verify that the 'width' of 'Wave' 'Middle' component is '10px'
    And I verify that the 'height' of 'Wave' 'Middle' component is '82px'
    And I verify that the 'width' of 'Wave' 'Right1' component is '10px'
    And I verify that the 'height' of 'Wave' 'Right1' component is '55px'
    And I verify that the 'width' of 'Wave' 'Right2' component is '10px'
    And I verify that the 'height' of 'Wave' 'Right2' component is '28px'

  Scenario: Verify the Wave toggleAnimation control
    Then I verify that the 'Wave' 'Left1' component is animating
    And I verify that the 'Wave' 'Left2' component is animating
    And I verify that the 'Wave' 'Middle' component is animating
    And I verify that the 'Wave' 'Right1' component is animating
    And I verify that the 'Wave' 'Right2' component is animating
