@sanity @row1 @basic @2112198

Feature: Row Basic component validation

  Background:
    Given I launch the LUI app
    And I navigate to 'Row' 'Row' with 'Base' theme

  Scenario: Verify that Row Basic Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions and count of the Row Basic Elements
    Then I verify there are 12 assets per row on the 'Row' page
    And I verify each element has width of 150.0 and height of 40.0 on 'Row' page

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario Outline: Validate displayed text of buttons
    When I press 'RIGHT' key
    Then I verify that the '<element>' component on the 'Row' page has text '<text>'
    Examples:
      | element         | text      |
      | Button 1 Label  | Button 1  |
      | Button 2 Label  | Button 2  |
      | Button 3 Label  | Button 3  |
      | Button 4 Label  | Button 4  |
      | Button 5 Label  | Button 5  |
      | Button 6 Label  | Button 6  |
      | Button 7 Label  | Button 7  |
      | Button 8 Label  | Button 8  |
      | Button 9 Label  | Button 9  |
      | Button 10 Label | Button 10 |
      | Button 11 Label | Button 11 |
      | Button 12 Label | Button 12 |

  Scenario: Validate navigating the buttons
    Then I verify if 'Row' page data has loaded
    And I verify that the 'Button 1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements' row
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements' row

  Scenario: Verify that the row spacing of the Row Basic Element can be changed
    When I set the 'itemSpacing' to '25' for 'Row' component
    And I verify that the spacing between elements of 'Row' component is '17'

  Scenario: Verify that the scroll index of the Row Basic Element can be changed
    Then I verify the 'scrollIndex' is '0' for 'Row' component
    When I set the 'scrollIndex' to '10' for 'Row' component
    And I verify the 'scrollIndex' is '10' for 'Row' component

  Scenario: Verify the Row Basic always scroll toggle
    Then I verify the 'alwaysScroll' is 'false' for 'Row' component
    When I set the 'alwaysScroll' to 'true' for 'Row' component
    Then I verify the 'alwaysScroll' is 'true' for 'Row' component

  Scenario: Verify the Row Basic never scroll toggle
    Then I verify the 'neverScroll' is 'false' for 'Row' component
    When I set the 'neverScroll' to 'true' for 'Row' component
    Then I verify the 'neverScroll' is 'true' for 'Row' component

  Scenario: Verify the Row Basic lazy scroll toggle
    Then I verify the 'lazyScroll' is 'false' for 'Row' component
    When I set the 'lazyScroll' to 'true' for 'Row' component
    Then I verify the 'lazyScroll' is 'true' for 'Row' component
