@regression @column @skipplinko @2134635
Feature: Column - Skip Plinko Layout Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Column' 'Skip Plinko' with 'Base' theme
  
  Scenario: Verify that Column Skip Plinko Layout is visible
    Then I verify that the 'Column' component is displayed
    And I verify that there are 3 'skipplinkorows' on the 'Column' page
    And I verify there are 5 assets per 'skipplinkorow1' on the 'Column' page
    And I verify there are 1 assets per 'skipplinkorow2' on the 'Column' page
    And I verify there are 5 assets per 'skipplinkorow3' on the 'Column' page    
    
  Scenario: Validate navigating between multiple rows
    Then I verify that the 'skipplinkobutton1' component on the 'Column' page is in focus
    And I press 'DOWN' key 1 times
    And I verify that the 'skipplinkobutton2' component on the 'Column' page is in focus    
    And I press 'DOWN' key 1 times
    And I verify that the 'skipplinkobutton3' component on the 'Column' page is in focus 
    And I press 'RIGHT' key 5 times
    And I verify that the 'skipplinkobutton3last' component on the 'Column' page is in focus
    And I press 'UP' key 2 times
    And I verify that the 'skipplinkobutton1last' component on the 'Column' page is in focus

  Scenario: Validate Tile Size
    Then I verify each 'skipplinkorows1' has width of 308 and height of 173 on 'Column' page
    And I verify each 'skipplinkorows2' has width of 1620 and height of 405 on 'Column' page
    And I verify each 'skipplinkorows3' has width of 308 and height of 173 on 'Column' page
