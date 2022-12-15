@regression @column @multiColumn @2112688

Feature: LUI Column Multi Column Layout component

  Background:
    Given I launch the LUI app
    And I navigate to 'Column' 'Multi Column' with 'Base' theme

  Scenario: Verify that Column Multi Column Layout is visible
    Then I verify that the 'Column' 'First Column' component is displayed
    And I verify that the 'Column' 'Second Column' component is displayed

  Scenario: Verify that Column Multi Column asset count
    And I verify there are 2 assets per 'Columns' on the 'Column' page
    And I verify there are 20 assets per 'First Column' on the 'Column' page
    And I verify there are 20 assets per 'Second Column' on the 'Column' page

  Scenario: Verify that the buttons in each column are evenly spaced vertically
    Then I verify that 'First Column Buttons' are evenly spaced vertically for 'Column' component
    And I verify that 'Second Column Buttons' are evenly spaced vertically for 'Column' component

  Scenario: Verify navigating between multiple columns
    When I press 'DOWN' key 1 times
    Then I verify that the 'Button 2 Column 1' component on the 'Column' page is in focus
    And I press 'RIGHT' key 1 times
    And I verify that the 'Button 1 Column 2' component on the 'Column' page is in focus
    And I press 'DOWN' key 2 times
    And I verify that the 'Button 3 Column 2' component on the 'Column' page is in focus
    And I press 'LEFT' key 1 times
    And I verify that the 'Button 2 Column 1' component on the 'Column' page is in focus
