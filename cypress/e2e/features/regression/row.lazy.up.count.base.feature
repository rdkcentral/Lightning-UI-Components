@regression @row @lazyUpCount @2117228

Feature: LUI Row Lazy up count component

  Background:
    Given I launch the LUI app
    When I navigate to 'Row' 'Lazy up count' with 'Base' theme

  Scenario: Verify that Row Lazy up count Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions and count of the Row Lazy up count items Elements
    Then I verify there are 6 assets per row on the 'Row' page
    And I press 'RIGHT' key 6 times
    And I verify there are 12 assets per row on the 'Row' page
    And I verify each element has width of 250.0 and height of 100.0 on 'Row' page

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario: Validate displayed text of buttons
    Then I verify that all 'Buttons labels' of the 'Row' page have text 'Button'

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button 1' component on the 'Row' page is in focus
    And I press 'RIGHT' key 6 times
    And I press 'LEFT' key 6 times
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements'

  Scenario: Verify the scroll index of the Row Lazy Up count element can be changed
    And I press 'RIGHT' key 6 times
    Then I verify that the 'Row' 'Button 1' component is not displayed
    And I verify that the 'Row' 'Button 12' component is displayed
    And I set the 'scrollIndex' to '5' for 'Row' component
    And I press 'RIGHT' key 6 times
    And I verify that the 'Row' 'Button 1' component is displayed
    And I verify that the 'Row' 'Button 12' component is not displayed

  Scenario: Verify the Row Lazy up count always scroll toggle
    And I press 'RIGHT' key 11 times
    Then I verify that the 'Row' 'Button 10' component is displayed
    And I set the 'alwaysScroll' to 'true' for 'Row' component
    And I press 'RIGHT' key 11 times
    And I verify that the 'Row' 'Button 10' component is not displayed

  Scenario: Verify the Row Lazy up count never scroll toggle
    And I press 'RIGHT' key 8 times
    Then I verify that the 'Row' 'Button 10' component is displayed
    And I set the 'neverScroll' to 'true' for 'Row' component
    And I press 'RIGHT' key 8 times
    And I verify that the 'Row' 'Button 10' component is not displayed

  Scenario: Verify the Row Lazy up count lazy scroll toggle
    And I press 'RIGHT' key 5 times
    Then I verify that the 'Row' 'Button 10' component is displayed
    And I set the 'lazyScroll' to 'true' for 'Row' component
    And I press 'RIGHT' key 5 times
    And I verify that the 'Row' 'Button 10' component is not displayed

  Scenario: Verify the lazy up count of the Row Lazy up count Element can be changed
    Then I verify that the 'Row' 'Button 6' component is displayed
    And I set the 'lazyUpCount' to '0' for 'Row' component
    And I verify that the 'Row' 'Button 3' component does not exist in DOM
    And I set the 'lazyUpCount' to '1' for 'Row' component
    And I verify that the 'Row' 'Button 3' component is displayed
    And I press 'RIGHT' key 3 times
    And I verify that the 'Row' 'Button 6' component is displayed
