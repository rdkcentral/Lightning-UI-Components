@regression @column @expandableheightrows @2122290
Feature: Column - Expandable Height Rows Layout Validation

  Background:
    Given I launch the LUI app
    And I navigate to 'Column' 'Expandable Height Rows' with 'Base' theme
  
  Scenario: Verify that Column Expandable Height Rows Layout is visible
    Then I verify that the 'Column' component is displayed
    
  Scenario: Verify that Column Expandable Height Rows asset count
    Then I verify there are 15 assets per 'expandableheightrow' on the 'Column' page
    And I verify there are 3 assets per 'row' on the 'Column' page

  Scenario: Validate displayed text of buttons
    Then I verify that all 'buttonslabels' of the 'Column' page have text 'Button'

  Scenario: Validate navigating between multiple columns
    Then I verify that the 'expandableheightrow1button1' component on the 'Column' page is in focus
    And I press 'RIGHT' key 2 times
    And I verify that the 'expandableheightrow1button3' component on the 'Column' page is in focus
    And I press 'DOWN' key 14 times
    And I verify that the 'expandableheightrow15button3' component on the 'Column' page is in focus
    And I press 'LEFT' key 2 times
    And I verify that the 'expandableheightrow15button1' component on the 'Column' page is in focus
    And I press 'UP' key 14 times
    And I verify that the 'expandableheightrow1button1' component on the 'Column' page is in focus

  Scenario: Verify that the expandable buttons in a column expands when in focus
    Then I verify focused element in 'Column' has width of 250.0 and height of 120.0 and non-focused elements have width of 250 and height of 80
