@regression @column @removingitems @2157869

Feature: LUI Column Removing Items component

  Background:
    Given I launch the LUI app
    When I navigate to 'Column' 'Removing Items' with 'Base' theme

  Scenario: Verify that Column Removing Items Element is visible
    Then I verify that the 'Column' 'Removing Items Column' component is displayed

  Scenario: Verify the dimensions and count of the Column Removing Items Elements
    Then I verify there are 20 assets per 'Removing Items Column' on the 'Column' page
    And I wait 4 seconds for the page to load
    And I verify there are 19 assets per 'Removing Items Column' on the 'Column' page
    And I verify each 'Removing Items Button' has width of 472.0 and height of 100.0 on 'Column' page

  Scenario: Verify Column Removing Items layout and spacing
    Then I verify that 'Removing Items Button' are evenly spaced vertically for 'Column' component

  Scenario Outline: Validate displayed text of the Column Removing Items buttons before removing items
    Then I verify that the '<element>' component on the 'Column' page has text '<text>'
    Examples:
      | element                 | text          |
      | Button 1 Removing Items | Button 1      |
      | Button 2 Removing Items | To Be Removed |
      | Button 3 Removing Items | Button 3      |
      | Button 9 Removing Items | Button 9      |

  Scenario: Validate displayed text of the Column Removing Items buttons after removing items
    When I wait 4 seconds for the page to load
    Then I verify that all 'Removing Items Button Labels' of the 'Column' page have text 'Button'

  Scenario: Validate navigating the Column Removing Items buttons
    When I wait 4 seconds for the page to load
    Then I verify that the 'First Removing Items Button' component on the 'Column' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Column' 'Removing Items Row'
    And I verify that I am able to navigate to the 'first' element of the 'Column' 'Removing Items Row'

  Scenario Outline: Verify that the scroll index of the Column Removing Items Element can be changed
    When I set the 'scrollIndex' to '<scrollIndex>' for 'Column' component
    And I press 'DOWN' key 3 times
    Then I verify that the 'top' of 'Column' 'Removing Items Column' component is '<expectedTop>'
    Examples:
      | scrollIndex | expectedTop |
      | 0           | -360px      |
      | 1           | -240px      |
      | 2           | -120px      |
      | 3           | 0px         |
