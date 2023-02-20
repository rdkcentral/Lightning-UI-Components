@sanity-vrt @icon-vrt @png-vrt

Feature: Icon - PNG Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Icon' 'PNG' with 'Base' theme
  
  Scenario: Verify Icon PNG Element with Visual Regression
    Then I verify the 'Icon' 'PNG' component with visual regression
