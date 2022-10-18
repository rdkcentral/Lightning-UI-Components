@sanity-vrt @badge-vrt

Feature: Badge - Text Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Badge' 'Text' with 'Base' theme
  
  Scenario: Verify Badge - Text Element with Visual Regression
    Then I verify the 'Badge' 'Text' component with visual regression
    