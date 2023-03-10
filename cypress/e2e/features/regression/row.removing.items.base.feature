@regression @row @removingItems @2117199

Feature: LUI Row Removing items component

  Background:
    Given I launch the LUI app
    When I navigate to 'Row' 'Removing items' with 'Base' theme

  Scenario: Verify that Row Removing items Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions and count of the Row Removing items Elements
    Then I verify there are 5 assets per row on the 'Row' page
    And I wait 3 seconds for the page to load
    And I verify there are 4 assets per row on the 'Row' page
    And I verify each 'Row Elements' has width of 472.0 and height of 100.0 on 'Row' page

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario Outline: Validate displayed text of buttons before removing items
    Then I verify that 'Row' '<element>' has 'text' '<text>'
    Examples:
      | element      | text     |
      | Button1label | Button 1 |
      | Button2label | Button 2 |
      | Button3label | Button 3 |
      | Button4label | Button 4 |
      | Button5label | Button 5 |

  Scenario Outline: Validate displayed text of buttons after removing items
    And I wait 3 seconds for the page to load
    Then I verify that 'Row' '<element>' has 'text' '<text>'
    Examples:
      | element      | text     |
      | Button1label | Button 1 |
      | Button2label | Button 3 |
      | Button3label | Button 4 |
      | Button4label | Button 5 |

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button 1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements'

  Scenario: Verify that Row Removing items always scroll toggle
    And I press 'RIGHT' key 3 times
    Then I verify that the 'Row' 'Button 2' component is displayed
    And I set the 'alwaysScroll' to 'true' for 'Row' component
    And I press 'RIGHT' key 3 times
    And I verify that the 'Row' 'Button 2' component is not displayed
