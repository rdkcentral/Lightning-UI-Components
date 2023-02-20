@sanity-vrt @badge-vrt

Feature: Badge - Icon PNG Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Badge' 'Icon PNG' with 'Base' theme
  
  Scenario: Verify Badge - Icon PNG Element with Visual Regression
    Then I verify the 'Badge' 'Icon PNG' component with visual regression
