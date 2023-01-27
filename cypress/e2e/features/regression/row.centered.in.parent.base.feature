@regression @row @centeredInParent @2112382

Feature: LUI Row Centered in parent component

  Background:
    Given I launch the LUI app
    And I navigate to 'Row' 'Centered in parent' with 'Base' theme

  Scenario: Verify that Row Centered in parent Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions of the Row Centered in parent Elements
    Then I verify each 'Row Elements' has width of 250.0 and height of 100.0 on 'Row' page

  Scenario: Verify row layout and spacing
    Then I press 'DOWN' key
    And I verify that 'Row Elements Centered In Parent' are vertically evenly spaced for 'Row' component

  Scenario Outline: Validate displayed text of buttons
    Then I verify that 'Row' '<element>' has 'text' '<text>'
    Examples:
      | element                               | text     |
      | Button 1 Label Centered In Parent     | Button 1 |
      | Button 2 Label Centered In Parent     | Button 2 |
      | Button 3 Label Centered In Parent     | Button 3 |
      | Button Right Label Centered In Parent | Button 1 |

  Scenario: Validate buttons navigation
    Then I verify that the 'Button1 centered in parent' component on the 'Row' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button right centered in parent' component on the 'Row' page is in focus
    And I press 'LEFT' key
    And I verify that the 'Button1 centered in parent' component on the 'Row' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button2 centered in parent' component on the 'Row' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button right centered in parent' component on the 'Row' page is in focus
    And I press 'LEFT' key
    And I verify that the 'Button2 centered in parent' component on the 'Row' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button3 centered in parent' component on the 'Row' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button right centered in parent' component on the 'Row' page is in focus
    And I press 'LEFT' key
    And I verify that the 'Button3 centered in parent' component on the 'Row' page is in focus
