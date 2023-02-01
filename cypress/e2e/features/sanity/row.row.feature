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
      | Xfinity | 250.0 | 80.0   |
    Examples:
      | theme | width | height |
      | Base  | 250.0 | 100.0  |

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

  Scenario Outline: Verify the Row Basic always scroll toggle (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify the 'alwaysScroll' is 'false' for 'Row' component
    And I set the 'alwaysScroll' to 'true' for 'Row' component
    And I verify the 'alwaysScroll' is 'true' for 'Row' component
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the Row Basic lazy scroll toggle (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify the 'lazyScroll' is 'false' for 'Row' component
    And I set the 'lazyScroll' to 'true' for 'Row' component
    And I verify the 'lazyScroll' is 'true' for 'Row' component
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the Row Basic never scroll toggle (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify the 'neverScroll' is 'false' for 'Row' component
    And I set the 'neverScroll' to 'true' for 'Row' component
    And I verify the 'neverScroll' is 'true' for 'Row' component
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify that the scroll index of the Row Basic Element can be changed (<theme> theme)
    When I navigate to 'Row' with '<theme>' theme
    Then I verify the 'scrollIndex' is '0' for 'Row' component
    And I set the 'scrollIndex' to '10' for 'Row' component
    And I verify the 'scrollIndex' is '10' for 'Row' component
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |
