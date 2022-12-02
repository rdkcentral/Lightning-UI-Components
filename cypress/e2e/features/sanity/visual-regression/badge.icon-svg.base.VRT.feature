@sanity-vrt @badge-vrt

Feature: Badge - Icon SVG Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Badge' 'Icon SVG' with 'Base' theme
  
  Scenario: Verify Badge - Icon SVG Element with Visual Regression
    Then I verify the 'Badge' 'Icon SVG' component with visual regression
