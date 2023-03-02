@regression @column @expandableheightitems @2122283
Feature: Column - Expandable Height Items Layout Validation

  Background: 
    Given I launch the LUI app 
  
  Scenario: Verify that Column Expandable Height Items Layout is visible (<theme> theme)
    When I navigate to 'Column' 'Expandable Height Items' with '<theme>' theme
    Then I verify that the 'Column' component is displayed
    And I verify there are 15 assets per 'Column' on the 'Column' page
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario: Verify row layout and spacing (<theme> theme)
    When I navigate to 'Column' 'Expandable Height Items' with '<theme>' theme
    Then I verify that 'Rows' are vertically evenly spaced for 'Column' component
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario: Validate navigating the buttons (<theme> theme)
    When I navigate to 'Column' 'Expandable Height Items' with '<theme>' theme
    Then I verify that I am able to navigate to the 'last' element of the 'Column' 'Column Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Column' 'Column Elements'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario: Validate displayed text of buttons (<theme> theme)
    When I navigate to 'Column' 'Expandable Height Items' with '<theme>' theme
    Then I verify that all 'buttonslabels' of the 'Column' page have text 'Button'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario: Verify that the expandable buttons in a column expands when in focus (<theme> theme)
    When I navigate to 'Column' 'Expandable Height Items' with '<theme>' theme
    Then I verify focused element in 'Column' has width of 250.0 and height of 120.0 and non-focused elements have width of 250.0 and height of 80.0
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
