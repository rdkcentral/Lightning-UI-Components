 @regression @column @skipfocus @2122310

Feature: Column - Skip Focus Layout Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'column' 'skip-focus' with 'Base' theme
  
  Scenario: Verify that Column Skip Focus Layout is visible
    Then I verify that the 'Column' component is displayed
    And I verify there are 50 assets per 'SkipFocusColumn' on the 'Column' page
    
  Scenario: Verify scrolling the elements in a column when 'wrapSelected' is set to false
    When I set the 'wrapSelected' to 'false' for 'Column' component
    Then I verify that the 'firstColumnButton' component on the 'Column' page is in focus
    And I press 'DOWN' key 35 times
    And I verify that the 'lastColumnButton' component on the 'Column' page is in focus
  
  Scenario: Verify scrolling the elements in a column when 'wrapSelected' is set to true
    When I set the 'wrapSelected' to 'true' for 'Column' component
    Then I verify that the 'firstColumnButton' component on the 'Column' page is in focus
    And I press 'DOWN' key 35 times
    And I verify that the 'lastColumnButton' component on the 'Column' page is in focus
    And I press 'DOWN' key 1 times
    And I verify that the 'firstColumnButton' component on the 'Column' page is in focus

  Scenario: Validate displayed text of buttons
    Then I verify that all 'buttonslabels' of the 'Column' page have text 'Button'
