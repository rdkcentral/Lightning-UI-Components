@regression @row @2112198

Feature: Row Basic component validation

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Row element is visible (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify that the 'Row' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions and count of the Row elements (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify there are 12 assets per row on the 'Row' page
    And I verify each 'Row Elements' has width of <width> and height of <height> on 'Row' page
    @sanity
    Examples:
      | theme   | width | height |
      | Xfinity | 386.0 | 80.0   |
    Examples:
      | theme | width | height |
      | Base  | 472.0 | 100.0  |

  Scenario Outline: Verify row layout and spacing (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify that elements are horizontally evenly spaced for 'Row' component
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate displayed text of buttons (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify that all 'Buttons labels' of the 'Row' page have text 'Button'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate navigating the buttons (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify if 'Row' page data has loaded
    And I verify that the 'Button 1' component on the 'Row' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'Row' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'Row' 'Row Elements'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify that the row spacing of the Row Basic Element can be changed (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    And I set the 'itemSpacing' to '25' for 'Row' component
    And I wait 0.5 seconds for the page to load
    Then I verify that the spacing between the 'row' elements of 'Row' component is '<spacing>'
    @sanity
    Examples:
      | theme   | spacing |
      | Xfinity | 16      |
    Examples:
      | theme | spacing |
      | Base  | 13      |

  Scenario Outline: Verify that Row can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Row' component
    Then I verify the mode is '<modeValue>' for 'Row' 'Row Elements'
    @sanity
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    Examples:
      | theme | modeValue |
      | Base  | unfocused |
      | Base  | focused   |
      | Base  | disabled  |

  @skip
  # The always scroll control is broken. Bug ticket to be created
  Scenario Outline: Verify the Row Basic always scroll toggle (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    And I set the 'alwaysScroll' to '<alwaysScrollValue>' for 'Row' component
    And I wait 1 seconds for the page to load
    And I press 'RIGHT' key 11 times
    Then I verify that the 'left' of 'Row' component is '<leftPosition>px'
    @sanity
    Examples:
      | theme   | alwaysScrollValue  | leftPosition  |
      | Xfinity | false              | -3280         |
      | Xfinity | true               | -4510         |
    Examples:
      | theme   | alwaysScrollValue  | leftPosition  |
      | Base    | false              | -4428         |
      | Base    | true               | -5412         |

  Scenario Outline: Verify the Row Basic lazy scroll toggle (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    And I set the 'lazyScroll' to '<lazyScrollValue>' for 'Row' component
    And I press 'RIGHT' key 2 times
    Then I verify that the 'left' of 'Row' component is '<leftPosition>px'
    @sanity
    Examples:
      | theme   | lazyScrollValue  | leftPosition  |
      | Xfinity | false            | -820          |
      | Xfinity | true             | 0             |
    Examples:
      | theme   | lazyScrollValue  | leftPosition  |
      | Base    | false            | -984          |
      | Base    | true             | 0             |

  Scenario Outline: Verify the Row Basic never scroll toggle (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    And I set the 'neverScroll' to '<neverScrollValue>' for 'Row' component
    And I press 'RIGHT' key
    Then I verify that the 'left' of 'Row' component is '<leftPosition>px'
    @sanity
    Examples:
      | theme   | neverScrollValue  | leftPosition  |
      | Xfinity | false             | -410          |
      | Xfinity | true              | 0             |
    Examples:
      | theme   | neverScrollValue  | leftPosition  |
      | Base    | false             | -492          |
      | Base    | true              | 0             |

  Scenario Outline: Verify that the scroll index of the Row Basic Element can be changed (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    And I set the 'scrollIndex' to '<scrollIndexValue>' for 'Row' component
    And I press 'RIGHT' key 10 times
    Then I verify that the 'left' of 'Row' component is '<leftPosition>px'
    @sanity
    Examples:
      | theme   | scrollIndexValue  | leftPosition  |
      | Xfinity | 0                 | -3280         |
      | Xfinity | 10                | 0             |
    Examples:
      | theme   | scrollIndexValue  | leftPosition  |
      | Base    | 0                 | -4920         |
      | Base    | 10                | 0             |
  
  Scenario Outline: Verify the default <controlName> control for the Row component (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    And I press 'RIGHT' key <numScroll> times
    Then I verify that the 'left' of 'Row' component is '<leftPosition>px'
    @sanity
    Examples:
      | theme   | controlName   | leftPosition  | numScroll   |
      | Xfinity | neverScroll   | -410          | 1           |
      | Xfinity | lazyScroll    | -820          | 2           |
      # | Xfinity | alwaysScroll  | -3280         | 11          |
      | Xfinity | scrollIndex   | -3280         | 10          |
    Examples:
      | theme   | controlName   | leftPosition  | numScroll   |
      | Base    | neverScroll   | -492          | 1           |
      | Base    | lazyScroll    | -984          | 2           |
      # | Base    | alwaysScroll  | -4428         | 11          |
      | Base    | scrollIndex   | -4920         | 10          |
