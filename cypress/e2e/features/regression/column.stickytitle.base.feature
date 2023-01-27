@regression @column @stickytitle @2157868

Feature: LUI Column Sticky Title component

  Background:
    Given I launch the LUI app
    And I navigate to 'Column' 'Sticky Title' with 'Base' theme

  Scenario: Verify that Column Sticky Title Element is visible
    Then I verify that the 'Column' 'Sticky Title' component is displayed

  Scenario: Verify the dimensions and count of the Column Sticky Title Elements
    Then I verify there are 44 assets per 'Sticky Title Column' on the 'Column' page
    And I verify that the 'width' of 'Column' 'Sticky Title Sticky Header' component is '156px'
    And I verify that the 'height' of 'Column' 'Sticky Title Sticky Header' component is '36px'
    And I verify each 'Sticky Title Button' has width of 250.0 and height of 100.0 on 'Column' page

  Scenario: Verify row layout and spacing
    Then I verify that 'Sticky Title Row' are vertically evenly spaced for 'Column' component

  Scenario: Validate displayed text of buttons and titles
    Then I verify that all 'Sticky Title Button Labels' of the 'Column' page have text 'Button'

  Scenario: Validate navigating the buttons
    Then I verify that the 'Sticky Button 1' component on the 'Column' page is in focus
    And I press 'DOWN' key 43 times
    And I verify that the 'Sticky Button 48' component on the 'Column' page is in focus
    And I press 'UP' key 43 times
    And I verify that the 'Sticky Button 1' component on the 'Column' page is in focus

  Scenario Outline: Validate sticky header stickiness
    Then I verify that 'Column' 'Sticky Title Sticky Header' has 'text' 'Sticky Header 0'
    And I verify that the 'Sticky Button 1' component on the 'Column' page is in focus
    And I press 'DOWN' key <keyPresses> times
    And I verify that the '<focusedButton>' component on the 'Column' page is in focus
    And I verify that the 'Column' '<nextHeader>' component is displayed
    And I verify that 'Column' 'Sticky Title Sticky Header' has 'text' '<currentHeader>'
    And I press 'DOWN' key
    And I verify that 'Column' 'Sticky Title Sticky Header' has 'text' '<nextHeader>'
    Examples:
      | keyPresses | focusedButton    | currentHeader   | nextHeader      |
      | 7          | Sticky Button 8  | Sticky Header 0 | Sticky Header 1 |
      | 15         | Sticky Button 18 | Sticky Header 1 | Sticky Header 2 |
      | 23         | Sticky Button 28 | Sticky Header 2 | Sticky Header 3 |
      | 31         | Sticky Button 38 | Sticky Header 3 | Sticky Header 4 |
