@sanity @row @focusHeightChange @2112209

Feature: LUI Row Focus Height Change component

  Background:
    Given I launch the LUI app
    When I navigate to 'Row' 'Focus Height Change' with 'Base' theme

  Scenario: Verify that Row Focus Height Change Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the dimensions and count of the Row Focus Height Change Elements
    Then I verify there are 5 assets per row on the 'Row' page
    And I verify focused element has width of 472.0 and height of 150.0 and non-focused elements have width of 472.0 and height of 75.0

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario: Validate displayed text of buttons
    Then I verify that all 'Buttons labels' of the 'Row' page have text 'Button'

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button 1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements' row
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements' row
