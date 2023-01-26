@regression @column @onscreeneffect @2122312
Feature: Column - On Screen Effect Layout Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Column' 'On Screen Effect' with 'Base' theme
  
  Scenario: Verify that Column On Screen Effect Layout is visible
    Then I verify that the 'Column' component is displayed
    And I verify there are 10 assets per 'Column' on the 'Column' page
  
  Scenario: Verify row layout and spacing
    Then I verify that 'Rows' are vertically evenly spaced for 'Column' component

  Scenario: Validate navigating the buttons
    Then I verify that the 'button1' component on the 'Column' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Column' 'Column Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Column' 'Column Elements'

  Scenario: Validate displayed text of buttons
    Then I verify that all 'buttonslabels' of the 'Column' page have text 'Button'
