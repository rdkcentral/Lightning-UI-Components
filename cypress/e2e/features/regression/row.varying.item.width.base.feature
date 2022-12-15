@regression @row @varyingWidth @2112334

Feature: LUI Row Varying item width component

  Background:
    Given I launch the LUI app
    And I navigate to 'Row' 'Varying item width' with 'Base' theme

  Scenario: Verify that Row Varying item width Element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify the count of the Row Varying item width elements
    Then I verify there are 10 assets per row on the 'Row' page

  Scenario: Verify row layout and spacing
    Then I verify that elements are horizontally evenly spaced for 'Row' component

  Scenario: Validate displayed text of buttons
    Then I verify that all 'Buttons labels' of the 'Row' page have text 'Button'

  Scenario: Validate navigating the buttons
    Then I verify that the 'Button1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements'

  Scenario: Verify buttons have varying width
    Then I verify 'Row elements' have different 'w'
