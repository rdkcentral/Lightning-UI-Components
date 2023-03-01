@regression @row @lazyScrollIndexes @2112804

Feature: LUI Row Lazy Scroll Indexes component

  Background:
    Given I launch the LUI app
    When I navigate to 'Row' 'Lazy Scroll Indexes' with 'Base' theme

  Scenario: Verify that Row Lazy Scroll Indexes element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify count of the Row Lazy Scroll Indexes elements
    Then I verify there are 12 assets per row on the 'Row' page

  Scenario: Validate navigating the buttons
    Then I verify if 'Row' page data has loaded
    And I verify that the 'Button 1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements'

  Scenario: Validate displayed text of buttons
    Then I verify that all 'Buttons labels' of the 'Row' page have text 'Button'

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario Outline: Verify that Row Lazy Scroll Indexes can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Row' component
    Then I verify the mode is '<modeValue>' for 'Row' 'Row elements'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the Row Lazy Scroll Indexes always scroll toggle
    And I press 'RIGHT' key 11 times
    Then I verify that the 'Row' 'Button 10' component is displayed
    And I set the 'alwaysScroll' to 'true' for 'Row' component
    And I press 'RIGHT' key 11 times
    And I wait 1 seconds for the page to load
    And I verify that the 'Row' 'Button 10' component is not displayed

  Scenario: Verify the Lazy Scroll Indexes lazyScroll toggle
    And I press 'RIGHT' key 4 times
    And I wait 1 seconds for the page to load
    Then I verify that the 'Row' 'Button 7' component is displayed
    And I set the 'lazyScroll' to 'true' for 'Row' component
    And I press 'RIGHT' key 4 times
    And I wait 1 seconds for the page to load
    And I verify that the 'Row' 'Button 7' component is not displayed

  Scenario: Verify the Row Lazy Scroll Indexes never scroll toggle
    And I press 'RIGHT' key 5 times
    Then I verify that the 'Row' 'Button 5' component is displayed
    And I set the 'neverScroll' to 'true' for 'Row' component
    And I press 'RIGHT' key 5 times
    And I wait 1 seconds for the page to load
    And I verify that the 'Row' 'Button 5' component is not displayed

  Scenario: Verify the scroll index of the Row Lazy Scroll Indexes element can be changed
    And I press 'RIGHT' key 8 times
    And I wait 1 seconds for the page to load
    Then I verify that the 'Row' 'Button 12' component is displayed
    And I set the 'scrollIndex' to '5' for 'Row' component
    And I press 'RIGHT' key 8 times
    And I wait 1 seconds for the page to load
    And I verify that the 'Row' 'Button 12' component is not displayed

  Scenario: Verify that the Start and Stop Lazy Scroll Index of the Row Lazy Scroll Indexes elements can be changed
    Then I verify that 'Row' 'button2label' has 'text' 'Button 2 (start lazy scroll) '
    And I press 'RIGHT' key 7 times
    And I verify that 'Row' 'button11label' has 'text' 'Button 11  (stop lazy scroll)'
    And I set the 'startLazyScrollIndex' to '2' for 'Row' component
    And I set the 'stopLazyScrollIndex' to '3' for 'Row' component
    And I verify that 'Row' 'button3label' has 'text' 'Button 3 (start lazy scroll) '
    And I verify that 'Row' 'button4label' has 'text' 'Button 4  (stop lazy scroll)'