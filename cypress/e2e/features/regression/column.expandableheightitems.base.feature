 @regression @column @expandableheightitems @122283
Feature: Column - Expandable Height Items Layout Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Column' 'Expandable Height Items' with 'Base' theme
  
  Scenario: Verify that Column Expandable Height Items Layout is visible
    Then I verify that the 'Column' component is displayed
    And I verify there are 15 assets per 'Column' on the 'Column' page

  Scenario: Verify row layout and spacing
    Then I verify that 'Rows' are vertically evenly spaced for 'Column' component

  Scenario: Validate navigating the buttons
    And I verify that I am able to navigate to the 'last' element of the 'Column' 'Column Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Column' 'Column Elements'

  Scenario: Validate displayed text of buttons
    Then I verify that all 'buttonslabels' of the 'Column' page have text 'Button'

  Scenario: Verify that the expandable buttons in a column expands when in focus
    And I verify focused element in 'Column' has width of 250.0 and height of 120.0 and non-focused elements have width of 250.0 and height of 80.0
