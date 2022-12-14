@sanity @focusmanager @basic @2110892

Feature: LUI Focus Manager Columns component

 Background: 
    Given I launch the LUI app 
    When I navigate to 'FocusManager' 'Columns' with 'Base' theme
 
  Scenario: Verify that Focus Manager Columns Element is visible
    Then I verify that the 'FocusManager' component is displayed
    And I verify that the assets are alligned to left on the 'FocusManager' page
    And I verify there are 3 content rows on the 'FocusManager' page
    And I verify each element has width of 200.0 and height of 100.0 on 'FocusManager' pagestyle
    
  Scenario: Verify row layout and spacing
    When I press 'DOWN' key
    Then I verify that elements are vertically and evenly spaced for 'FocusManager' component
  
  Scenario Outline: Validate displayed text of buttons
    Then I verify that the '<element>' component on the 'FocusManager' page has text '<text>'
    Examples:
      | element         | text   |
      | Button 1 Label  | Top    |
      | Button 2 Label  | Middle |
      | Button 3 Label  | Bottom |

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button1' component on the 'FocusManager' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button2' component on the 'FocusManager' page is in focus
    And I press 'DOWN' key
    And I verify that the 'Button3' component on the 'FocusManager' page is in focus
    And I press 'UP' key
    And I verify that the 'Button2' component on the 'FocusManager' page is in focus
    And I press 'UP' key
    And I verify that the 'Button1' component on the 'FocusManager' page is in focus