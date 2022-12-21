@sanity @regression @row @2112198

Feature: Row Basic component validation

  Background:
    Given I launch the LUI app
    And I navigate to 'Row' with 'Base' theme

  Scenario: Verify that Row Basic Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions and count of the Row Basic Elements
    Then I verify there are 12 assets per row on the 'Row' page
    And I verify each element has width of 250.0 and height of 100.0 on 'Row' page

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario: Validate displayed text of buttons
    Then I verify that all 'Buttons labels' of the 'Row' page have text 'Button'

  Scenario: Validate navigating the buttons
    Then I verify if 'Row' page data has loaded
    And I verify that the 'Button 1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements'

  Scenario: Verify that the row spacing of the Row Basic Element can be changed
    When I set the 'itemSpacing' to '25' for 'Row' component
    And I verify that the spacing between elements of 'Row' component is '13'

  Scenario Outline: Verify that Row can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Row' component
    Then I verify the mode is '<modeValue>' for 'Row' 'Row Elements'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the Row Basic always scroll toggle
    Then I verify the 'alwaysScroll' is 'false' for 'Row' component
    And I set the 'alwaysScroll' to 'true' for 'Row' component
    And I verify the 'alwaysScroll' is 'true' for 'Row' component

  Scenario: Verify the Row Basic lazy scroll toggle
    Then I verify the 'lazyScroll' is 'false' for 'Row' component
    And I set the 'lazyScroll' to 'true' for 'Row' component
    And I verify the 'lazyScroll' is 'true' for 'Row' component

  Scenario: Verify the Row Basic never scroll toggle
    Then I verify the 'neverScroll' is 'false' for 'Row' component
    And I set the 'neverScroll' to 'true' for 'Row' component
    And I verify the 'neverScroll' is 'true' for 'Row' component

  Scenario: Verify that the scroll index of the Row Basic Element can be changed
    Then I verify the 'scrollIndex' is '0' for 'Row' component
    And I set the 'scrollIndex' to '10' for 'Row' component
    And I verify the 'scrollIndex' is '10' for 'Row' component
