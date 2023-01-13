@regression @column @plinko @2112800

Feature: Column - Plinko Layout Validation

  Background:
    Given I launch the LUI app
    And I navigate to 'Column' 'Plinko' with 'Base' theme

  Scenario: Verify that Column Plinko Layout is visible
    Then I verify that the 'Column' component is displayed
    And I verify that there are 2 'rows' on the 'Column' page
    And I verify there are 3 assets per 'Row1' on the 'Column' page
    And I verify there are 3 assets per 'Row2' on the 'Column' page

  Scenario: Verify the dimensions and count of the column Rows Elements
    Then I verify each 'Row Elements' has width of 250 and height of 100 on 'column' page

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button1' component on the 'Column' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button2' component on the 'Column' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button3' component on the 'Column' page is in focus
    And I press 'DOWN' key
    And I verify that the 'row2Button3' component on the 'Column' page is in focus
    And I press 'LEFT' key
    And I verify that the 'row2Button2' component on the 'Column' page is in focus
    And I press 'LEFT' key
    And I verify that the 'row2Button1' component on the 'Column' page is in focus
    And I press 'UP' key
    And I verify that the 'Button1' component on the 'Column' page is in focus

  Scenario: Validate displayed text of buttons
    Then I verify that all 'buttonslabels' of the 'Column' page have text 'Button'

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Column' component
    And I verify that 'Rows' are vertically evenly spaced for 'Column' component
