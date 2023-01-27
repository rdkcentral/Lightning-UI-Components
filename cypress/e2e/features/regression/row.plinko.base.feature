@regression @row @plinko @2112669

Feature: LUI Row Plinko component

  Background:
    Given I launch the LUI app
    When I navigate to 'Row' 'Plinko' with 'Base' theme

  Scenario: Verify that Row Plinko Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions and count of the Row Plinko Elements
    Then I verify there are 4 assets per row on the 'Row' page
    And I verify there are 4 columns
    And I verify there are 3 assets per column
    And I verify each 'Row Elements' has width of 250.0 and height of 100.0 on 'Row' page

  Scenario Outline: Validate displayed text of buttons
    And I verify that 'Row' '<element>' has 'text' '<text>'
    Examples:
      | element             | text       |
      | Button1column1label | Button 1   |
      | Button2column1label | Button 2   |
      | Button3column1label | Button 3   |
      | Button1column2label | Button 1   |
      | Button2column2label | Skip Focus |
      | Button3column2label | Button 3   |
      | Button1column3label | Button 1   |
      | Button2column3label | Button 2   |
      | Button3column3label | Button 3   |
      | Button1column4label | Button 1   |
      | Button2column4label | Button 2   |
      | Button3column4label | Button 3   |

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component
    When I press 'DOWN' key
    And I verify that 'Row Elements Centered In Parent' are vertically evenly spaced for 'Row' component

  Scenario: Validate navigating the buttons without skip focus
    Then I verify that the 'Button 1 plinko' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row Elements Per Column 1' column
    And I verify that I am able to navigate to the 'first' element of the 'Row Elements Per Column 1' column
    And I press 'RIGHT' key
    And I press 'RIGHT' key
    And I verify that I am able to navigate to the 'last' element of the 'Row Elements Per Column 3' column
    And I verify that I am able to navigate to the 'first' element of the 'Row Elements Per Column 3' column
    And I press 'RIGHT' key
    And I verify that I am able to navigate to the 'last' element of the 'Row Elements Per Column 4' column
    And I verify that I am able to navigate to the 'first' element of the 'Row Elements Per Column 4' column

  Scenario: Validate navigating the buttons with skip focus
    Then I verify that the 'Button1column1' component on the 'Row' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button2column1' component on the 'Row' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button3column2' component on the 'Row' page is in focus
    And I press 'UP' key
    And I verify that the 'Button1column2' component on the 'Row' page is in focus
    And I press 'RIGHT' key 2 times
    And I press 'DOWN' key
    And I verify that the 'Button2column4' component on the 'Row' page is in focus
    And I press 'LEFT' key 3 times
    And I verify that the 'Button1column1' component on the 'Row' page is in focus
