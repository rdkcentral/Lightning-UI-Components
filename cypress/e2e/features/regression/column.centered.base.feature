@regression @column @centered @2122313
Feature: Column - Centered in Parent Layout Validation

  Background:
    Given I launch the LUI app
    And I navigate to 'Column' 'Centered in Parent' with 'Base' theme

  Scenario: Verify that Column On Screen Effect Layout is visible
    Then I verify that the 'Column' component is displayed
    And I verify that there are 2 content rows on the 'Column' page
    And I verify there are 3 assets per 'Row1' on the 'Column' page
    And I verify there are 1 assets per 'Row2' on the 'Column' page

  Scenario: Verify the dimensions and count of the column Rows Elements
    Then I verify each 'Row Elements' has width of 250.0 and height of 100.0 on 'column' page

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button1' component on the 'Column' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button4' component on the 'Column' page is in focus
    And I press 'UP' key
    And I verify that the 'Button1' component on the 'Column' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button2' component on the 'Column' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button4' component on the 'Column' page is in focus
    And I press 'UP' key
    And I verify that the 'Button2' component on the 'Column' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button3' component on the 'Column' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button4' component on the 'Column' page is in focus
    And I press 'UP' key
    And I verify that the 'Button3' component on the 'Column' page is in focus
    And I press 'LEFT' key
    And I verify that the 'Button2' component on the 'Column' page is in focus
    And I press 'LEFT' key
    And I verify that the 'Button1' component on the 'Column' page is in focus

  Scenario: Validate displayed text of buttons
    Then I verify that all 'buttonslabels' of the 'Column' page have text 'Button'
