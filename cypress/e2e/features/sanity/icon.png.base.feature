@sanity @icon @png

Feature: Icon PNG Element Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Icon' 'PNG' with 'Base' theme
  
  Scenario: Verify that Icon PNG Element is visible
    Then I verify that the 'Icon' component is displayed
  
  Scenario: Verify that the dimensions of the Icon PNG Element can be changed
    When I set the 'height' to '85' for 'Icon' component
    Then I verify that the 'height' of 'Icon' component is '85px'
    And I set the 'width' to '70' for 'Icon' component
    And I verify that the 'width' of 'Icon' component is '70px'
  