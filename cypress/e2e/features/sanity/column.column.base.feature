@sanity_temp @regression @column @basic @2113365

Feature: Column - Basic Layout Validation

  Background: 
    Given I launch the LUI app 
    And I navigate to 'Column' with 'Base' theme
  
  Scenario: Verify that Column Basic Layout is visible
    Then I verify that the 'Column' component is displayed
    And I verify there are 20 assets per 'column' on the 'Column' page
  
  Scenario: Verify the dimensions and count of the Column Basic elements
    Then I verify there are 20 assets per 'column' on the 'Column' page
    And I verify each 'Column Elements' has width of 250 and height of 100 on 'Column' page

  Scenario: Verify row layout and spacing
    Then I verify that 'Column Elements' are vertically evenly spaced for 'Column' component

  @skip 
  # Feature cannot be verified due to a bug in Storybook
  Scenario: Verify scrolling the elements in a column when 'alwaysScroll' is set to false
    When I set the 'alwaysScroll' to 'false' for 'Column' component
    Then I press 'DOWN' key 8 times
    And I verify that the 'top' of 'Column' component is '-960px'
    And I press 'DOWN' key 1 times
    And I verify that the 'top' of 'Column' component is '-1080px'
    And I press 'DOWN' key 10 times
    And I verify that the 'top' of 'Column' component is '-1800px'
  
  Scenario: Verify scrolling the elements in a column when 'alwaysScroll' is set to default 
    When I press 'DOWN' key 8 times
    Then I verify that the 'top' of 'Column' component is '-960px'
    And I press 'DOWN' key 1 times
    And I verify that the 'top' of 'Column' component is '-1080px'
    And I press 'DOWN' key 10 times
    And I verify that the 'top' of 'Column' component is '-1800px'

  Scenario: Verify scrolling the elements in a column when 'alwaysScroll' is set to true
    When I set the 'alwaysScroll' to 'true' for 'Column' component
    Then I press 'DOWN' key 9 times
    And I verify that the 'top' of 'Column' 'Column' component is '-1080px'
    And I press 'DOWN' key 10 times
    And I verify that the 'top' of 'Column' 'Column' component is '-2280px'

  Scenario Outline: Verify that the correct element is focused when scroll is set to valid index
    When I set the 'scroll' to '<scrolledIndex>' for 'Column' component
    Then I verify that Column Button - <focusedIndex> component is focused 
    Examples:
      | scrolledIndex  |  focusedIndex  |
      | 1              |  1             | 
      | 5              |  5             | 
      | 10             |  10            | 
      | 20             |  20            | 
  
  Scenario Outline: Verify that the correct element is focused when scroll is set to invalid index
    When I set the 'scroll' to '<scrolledIndex>' for 'Column' component
    Then I verify that Column Button - <focusedIndex> component is focused 
    Examples:
      | scrolledIndex  |  focusedIndex  |
      | 0              |  1             | 
      | 25             |  20            | 
  
  @skip
  # Feature cannot be verified due to a bug in Storybook
  Scenario Outline: Verify scrolling the elements in a column when 'scrollIndex' is set to '<scrollIndex>' and 'alwaysScroll' is 'false'
    When I set the 'scrollIndex' to '<scrollIndex>' for 'Column' component
    Then I set the 'alwaysScroll' to 'false' for 'Column' component
    And I press 'DOWN' key <scrollIndex> times
    And I verify that the 'top' of 'Column' component is '0px'
    And I press 'DOWN' key 1 times
    And I verify that the 'top' of 'Column' component is '-120px'
    And I press 'DOWN' key <numScroll> times
    And I verify that the 'top' of 'Column' component is '-1800px'
    Examples: 
      | scrollIndex | numScroll |
      | 4           | 14        |
      | 9           | 9         |
  
  Scenario Outline: Verify scrolling the elements in a column when 'scrollIndex' is set to '<scrollIndex>' and 'alwaysScroll' is 'true'
    When I set the 'scrollIndex' to '<scrollIndex>' for 'Column' component
    Then I set the 'alwaysScroll' to 'true' for 'Column' component
    And I press 'DOWN' key <scrollIndex> times
    And I verify that the 'top' of 'Column' component is '0px'
    And I press 'DOWN' key 1 times
    And I verify that the 'top' of 'Column' component is '-120px'
    And I press 'DOWN' key <numScroll> times
    And I verify that the 'top' of 'Column' component is '<lastPosition>px'
    Examples: 
      | scrollIndex | numScroll | lastPosition  |
      | 4           | 14        | -1800          |
      | 9           | 9         | -1200          |
    