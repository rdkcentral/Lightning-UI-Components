@regression @column @addingitems @2159496

Feature: LUI Column Adding Items component

  Background:
    Given I launch the LUI app
    And I navigate to 'Column' 'Adding items' with 'Base' theme

  Scenario: Verify that Column Adding Items Element is visible
    Then I verify that the 'Column' 'Adding Items Column' component is displayed

  Scenario: Verify the dimensions and count of the Column Adding Items Elements
    Then I verify there are 20 assets per 'Adding Items Column' on the 'Column' page
    And I wait 4 seconds for the page to load
    And I verify there are 26 assets per 'Adding Items Column' on the 'Column' page
    And I verify each 'Adding Items Button' has width of 472.0 and height of 100.0 on 'Column' page

  Scenario: Verify the Column Adding Items layout and spacing
    Then I verify that 'Adding Items Button' are vertically evenly spaced for 'Column' component

  Scenario: Validate displayed text of the Column Adding Items buttons before adding new items
    Then I verify that all 'Adding Items Button Labels' of the 'Column' page have text 'Button'

  Scenario: Validate displayed text of the Column Adding Items buttons after adding new items
    When I wait 4 seconds for the page to load
    And I press 'UP' key 3 times
    Then I verify that the 'Button 1 Adding Items' component on the 'Column' page has text 'New Button 3'
    And I verify that the 'Button 2 Adding Items' component on the 'Column' page has text 'New Button 4'
    And I verify that the 'Button 3 Adding Items' component on the 'Column' page has text 'New Button 5'
    And I verify that the 'Button 4 Adding Items' component on the 'Column' page has text 'Button 1'
    And I verify that the 'Button 5 Adding Items' component on the 'Column' page has text 'Button 2'
    And I verify that the 'Button 6 Adding Items' component on the 'Column' page has text 'Button 3'
    And I verify that the 'Button 7 Adding Items' component on the 'Column' page has text 'New Button 0'
    And I verify that the 'Button 8 Adding Items' component on the 'Column' page has text 'New Button 1'
    And I verify that the 'Button 9 Adding Items' component on the 'Column' page has text 'New Button 2'

  Scenario: Validate navigating the Column Adding Items buttons
    When I wait 4 seconds for the page to load
    And I press 'UP' key 3 times
    Then I verify that the 'First Adding Items Button' component on the 'Column' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Column' 'Adding Items Row'
    And I verify that I am able to navigate to the 'first' element of the 'Column' 'Adding Items Row'

  Scenario Outline: Verify that the scroll index of the Column Adding Items Element can be changed
    When I set the 'scrollIndex' to '<scrollIndex>' for 'Column' component
    And I wait 4 seconds for the page to load
    And I verify that the 'top' of 'Column' 'Adding Items Column' component is '<expectedTop>'
    Examples:
      | scrollIndex | expectedTop |
      | 0           | -360px      |
      | 1           | -240px      |
      | 2           | -120px      |
      | 3           | 0px         |
