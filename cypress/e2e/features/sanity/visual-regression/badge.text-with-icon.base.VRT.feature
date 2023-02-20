@sanity-vrt @badge-vrt

Feature: Badge - Text with Icon Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Badge' 'Text with Icon' with 'Base' theme
  
  Scenario: Verify Badge - Text with Icon Element with Visual Regression
    Then I verify the 'Badge' 'Text with Icon' component with visual regression
