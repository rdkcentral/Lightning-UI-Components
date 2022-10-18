@sanity-vrt @icon-vrt @svg-vrt

Feature: Icon - SVG Element Validation - Visual Regression

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Icon' 'SVG' with 'Base' theme
  
  Scenario: Verify Icon SVG element with Visual Regression
    Then I verify the 'Icon' 'SVG' component with visual regression
