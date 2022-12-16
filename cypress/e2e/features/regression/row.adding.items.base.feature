@regression @row @addingItems @2112982

Feature: LUI Row Adding items component

  Background:
    Given I launch the LUI app
    And I navigate to 'Row' 'Adding items' with 'Base' theme

  Scenario: Verify that Row Adding items Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the count of the Row Adding items Elements
    Then I verify there are 12 assets per row on the 'Row' page
    And I wait 3.5 seconds for the page to load
    And I verify there are 18 assets per row on the 'Row' page

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario: Validate displayed text of buttons before adding new items
    Then I verify that all 'Buttons labels' of the 'Row' page have text 'Button'

  Scenario Outline: Validate displayed text of buttons after adding new items to the left hand side
    And I wait 4 seconds for the page to load
    And I press 'LEFT' key 3 times
    And I verify that the '<element>' component on the 'Row' page has text '<text>'
    Examples:
      | element      | text         |
      | button1label | New Button 3 |
      | button2label | New Button 4 |
      | button3label | New Button 5 |

  Scenario Outline: Validate displayed text of buttons after adding new items to the right hand side
    And I wait 4 seconds for the page to load
    And I press 'RIGHT' key 8 times
    And I verify that the '<element>' component on the 'Row' page has text '<text>'
    Examples:
      | element      | text         |
      | button7label | New Button 0 |
      | button8label | New Button 1 |
      | button9label | New Button 2 |

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button1' component on the 'Row' page is in focus
    And I wait 3.5 seconds for the page to load
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements'

  Scenario Outline: Verify that Row can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Row' component
    Then I verify the mode is '<modeValue>' for 'Row' 'Row elements'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify boundary values of scroll index control
    When I wait 3.5 seconds for the page to load
    #Default state verification before setting it to the value different form 0
    Then I verify that the 'Row' 'Button 8' component is displayed
    And I set the 'scrollIndex' to '6' for 'Row' component
    And I wait 3.5 seconds for the page to load
    And I verify that the 'Row' 'Button 8' component is not displayed
    And I verify that the 'Row' 'Button 1' component is displayed
    And I set the 'scrollIndex' to '-6' for 'Row' component
    And I wait 3.5 seconds for the page to load
    And I verify that the 'Row' 'Button 8' component is not displayed
    And I verify that the 'Row' 'Button 16' component is displayed

  Scenario: Verify that Row Adding items always scroll toggle
    When I wait 3.5 seconds for the page to load
    #Default state is 'false' verification before setting the toggle to 'true'
    And I press 'RIGHT' key 14 times
    And I verify that the 'Row' 'Button 16' component is displayed
    And I set the 'alwaysScroll' to 'true' for 'Row' component
    And I wait 3.5 seconds for the page to load
    And I press 'RIGHT' key 14 times
    And I verify that the 'Row' 'Button 16' component is not displayed

  Scenario: Verify that Row Adding items never scroll toggle
    When I wait 4 seconds for the page to load
    #Default state is 'false' verification before setting the toggle to 'true'
    Then I verify that the 'Row' 'Button 7' component is displayed
    And I set the 'neverScroll' to 'true' for 'Row' component
    And I wait 4 seconds for the page to load
    And I press 'RIGHT' key 5 times
    And I verify that the 'Row' 'Button 7' component is not displayed

  Scenario: Verify that Row Adding items lazy scroll toggle
    When I wait 4 seconds for the page to load
    #Default state is 'false' verification before setting the toggle to 'true'
    And I press 'RIGHT' key 5 times
    And I verify that the 'Row' 'Button 12' component is displayed
    And I set the 'lazyScroll' to 'true' for 'Row' component
    And I wait 4 seconds for the page to load
    And I press 'RIGHT' key 5 times
    And I verify that the 'Row' 'Button 12' component is not displayed
