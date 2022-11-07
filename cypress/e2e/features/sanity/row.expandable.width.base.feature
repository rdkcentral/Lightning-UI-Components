@sanity @row @expandableWidth @2112264

Feature: LUI Row Expandable width component

  Background:
    Given I launch the LUI app
    When I navigate to 'Row' 'Expandable Width' with 'Base' theme

  Scenario: Verify that Row Focus Height Change Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions and count of the Row Focus Height Change Elements
    Then I verify there are 6 assets per row on the 'Row' page
    And I verify focused element has width of 200.0 and height of 40.0 and non-focused elements have width of 150.0 and height of 40.0

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario Outline: Validate displayed text of buttons
    Then I verify that the '<element>' component on the 'Row' page has text '<text>'
    Examples:
      | element         | text    |
      | Button 1 Label  | Button  |
      | Button 2 Label  | Button  |
      | Button 3 Label  | Button  |
      | Button 4 Label  | Button  |
      | Button 5 Label  | Button  |
      | Button 6 Label  | Button  |

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button 1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements' row
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements' row
