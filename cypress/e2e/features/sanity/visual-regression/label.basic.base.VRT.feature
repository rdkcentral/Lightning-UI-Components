@sanity-vrt @label-vrt

Feature: Label - Basic Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Label' with 'Base' theme
  
  Scenario: Verify Label - Basic Element with Visual Regression
    Then I verify the 'Label' component with visual regression
