@regression @withSelections @2195172

Feature: LUI With Selections component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that With Selections is displayed (<theme> theme)
    When I navigate to 'WithSelections' with '<theme>' theme
    Then I verify that the 'WithSelections' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions and count of the With Selections elements (<theme> theme)
    When I navigate to 'WithSelections' with '<theme>' theme
    Then I verify there are 3 assets per 'Row' on the 'WithSelections' page
    And I verify each 'Row Buttons' has width of <width> and height of <height> on 'WithSelections' page
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 386.0 | 80.0   |
    @sanity
    Examples:
      | theme   | width | height |
      | Base    | 472.0 | 100.0  |

  Scenario Outline: Verify row layout and spacing (<theme> theme)
    When I navigate to 'WithSelections' with '<theme>' theme
    Then I verify that buttons are <space> pixels apart for 'WithSelections' component
    @sanity_temp
    Examples:
      | theme   | space |
      | Xfinity |  24   |
    @sanity
    Examples:
      | theme   | space |
      | Base    |  20   |

  Scenario Outline: Validate displayed text of buttons (<theme> theme)
    When I navigate to 'WithSelections' with '<theme>' theme
    Then I verify that 'WithSelections' '<element>' has 'text' '<text>'
    @sanity_temp
    Examples:
      | theme   | element                    | text   |
      | Xfinity | Button1labelwithselections | Left   |
      | Xfinity | Button2labelwithselections | Center |
      | Xfinity | Button3labelwithselections | Right  |
    @sanity
    Examples:
      | theme   | element                    | text   |
      | Base    | Button1labelwithselections | Left   |
      | Base    | Button2labelwithselections | Center |
      | Base    | Button3labelwithselections | Right  |

  Scenario Outline: Verify buttons navigation (<theme> theme)
    When I navigate to 'WithSelections' with '<theme>' theme
    Then I verify that the 'Button 1' component on the 'WithSelections' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'WithSelections' 'Row Buttons'
    And I verify that I am able to navigate to the 'first' element of the 'WithSelections' 'Row Buttons'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify Title text (<theme> theme)
    When I navigate to 'WithSelections' with '<theme>' theme
    Then I verify that 'WithSelections' 'Title' has 'text' 'Selected: Left'
    And I press 'RIGHT' key
    And I press 'ENTER' key
    And I verify that 'WithSelections' 'Title' has 'text' 'Selected: Center'
    And I press 'RIGHT' key
    And I press 'ENTER' key
    And I verify that 'WithSelections' 'Title' has 'text' 'Selected: Right'
    And I press 'LEFT' key
    And I press 'ENTER' key
    And I verify that 'WithSelections' 'Title' has 'text' 'Selected: Center'
    And I press 'LEFT' key
    And I press 'ENTER' key
    And I verify that 'WithSelections' 'Title' has 'text' 'Selected: Left'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
