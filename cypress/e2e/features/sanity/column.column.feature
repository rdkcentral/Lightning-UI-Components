@regression @column @basic @2113365

Feature: Column Basic component validation

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Column Basic Layout is visible (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    Then I verify that the 'Column' component is displayed
    And I verify there are 20 assets per 'column' on the 'Column' page
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions and count of the Column Basic elements (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    Then I verify each 'Column Elements' has width of <width> and height of <height> on 'Column' page
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 250   | 80     |
    @sanity
    Examples:
      | theme | width | height |
      | Base  | 250   | 100    |

  Scenario Outline: Verify row layout and spacing (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    Then I verify that 'Column Elements' are vertically evenly spaced for 'Column' component
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify scrolling the elements in a column when 'alwaysScroll' is set to false - default value validation (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    And I press 'DOWN' key 8 times
    And I wait <waitTime> seconds for the page to load
    Then I verify that the 'top' of 'Column' component is '<topValue1>'
    And I press 'DOWN' key 1 times
    And I verify that the 'top' of 'Column' component is '<topValue2>'
    And I press 'DOWN' key 10 times
    And I wait <waitTime> seconds for the page to load
    And I verify that the 'top' of 'Column' component is '<topValue3>'
    @sanity_temp
    Examples:
      | theme   | topValue1 | topValue2 | topValue3 | waitTime |
      | Xfinity | -832px    | -936px    | -1456px   | 0.8      |
    @sanity
    Examples:
      | theme | topValue1 | topValue2 | topValue3 | waitTime |
      | Base  | -960px    | -1080px   | -1800px   | 0.5      |


  Scenario Outline: Verify scrolling the elements in a column when 'alwaysScroll' is set to true (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    And I set the 'alwaysScroll' to 'true' for 'Column' component
    And I press 'DOWN' key 9 times
    And I wait <waitTime> seconds for the page to load
    Then I verify that the 'top' of 'Column' 'Column' component is '<topValue1>'
    And I press 'DOWN' key 10 times
    And I wait <waitTime> seconds for the page to load
    And I verify that the 'top' of 'Column' 'Column' component is '<topValue2>'
    @sanity_temp
    Examples:
      | theme   | topValue1 | topValue2 | waitTime |
      | Xfinity | -936px    | -1976px   | 0.8      |
    @sanity
    Examples:
      | theme | topValue1 | topValue2 | waitTime |
      | Base  | -1080px   | -2280px   | 0.5      |

  Scenario Outline: Verify that the correct element is focused when scroll is set to valid index (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    And I set the 'scroll' to '<scrolledIndex>' for 'Column' component
    Then I verify that Column Button - <focusedIndex> component is focused
    @sanity_temp
    Examples:
      | theme   | scrolledIndex | focusedIndex |
      | Xfinity | 1             | 1            |
      | Xfinity | 5             | 5            |
      | Xfinity | 10            | 10           |
      | Xfinity | 20            | 20           |
    @sanity
    Examples:
      | theme | scrolledIndex | focusedIndex |
      | Base  | 1             | 1            |
      | Base  | 5             | 5            |
      | Base  | 10            | 10           |
      | Base  | 20            | 20           |

  Scenario Outline: Verify that the correct element is focused when scroll is set to invalid index (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    And I set the 'scroll' to '<scrolledIndex>' for 'Column' component
    Then I verify that Column Button - <focusedIndex> component is focused
    @sanity_temp
    Examples:
      | theme   | scrolledIndex | focusedIndex |
      | Xfinity | 0             | 1            |
      | Xfinity | 25            | 20           |
    @sanity
    Examples:
      | theme | scrolledIndex | focusedIndex |
      | Base  | 0             | 1            |
      | Base  | 25            | 20           |

  Scenario Outline: Verify scrolling the elements in a column when 'scrollIndex' is set to '<scrollIndex>' and 'alwaysScroll' is false (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    And I set the 'scrollIndex' to '<scrollIndex>' for 'Column' component
    And I set the 'alwaysScroll' to 'false' for 'Column' component
    And I press 'DOWN' key <scrollIndex> times
    And I wait <waitTime> seconds for the page to load
    Then I verify that the 'top' of 'Column' component is '<topValue1>'
    And I press 'DOWN' key 1 times
    And I verify that the 'top' of 'Column' component is '<topValue2>'
    And I press 'DOWN' key <numScroll> times
    And I wait <waitTime> seconds for the page to load
    And I verify that the 'top' of 'Column' component is '<topValue3>'
    @sanity_temp
    Examples:
      | theme   | scrollIndex | numScroll | topValue1 | topValue2 | topValue3 | waitTime |
      | Xfinity | 4           | 14        | 0px       | -104px    | -1560px   | 0.8      |
      | Xfinity | 9           | 9         | 0px       | -104px    | -1040px   | 0.8      |
    @sanity
    Examples:
      | theme | scrollIndex | numScroll | topValue1 | topValue2 | topValue3 | waitTime |
      | Base  | 4           | 14        | 0px       | -120px    | -1800px   | 0.5      |
      | Base  | 9           | 9         | 0px       | -120px    | -1200px   | 0.5      |

  Scenario Outline: Verify scrolling the elements in a column when 'scrollIndex' is set to '<scrollIndex>' and 'alwaysScroll' is true (<theme> theme)
    When I navigate to 'Column' with '<theme>' theme
    And I set the 'scrollIndex' to '<scrollIndex>' for 'Column' component
    And I set the 'alwaysScroll' to 'true' for 'Column' component
    And I press 'DOWN' key <scrollIndex> times
    And I wait <waitTime> seconds for the page to load
    Then I verify that the 'top' of 'Column' component is '<topValue1>'
    And I press 'DOWN' key 1 times
    And I verify that the 'top' of 'Column' component is '<topValue2>'
    And I press 'DOWN' key <numScroll> times
    And I wait <waitTime> seconds for the page to load
    And I verify that the 'top' of 'Column' component is '<topValue3>'
    @sanity_temp
    Examples:
      | theme   | scrollIndex | numScroll | topValue1 | topValue2 | topValue3 | waitTime |
      | Xfinity | 4           | 14        | 0px       | -104px    | -1560px   | 0.8      |
      | Xfinity | 9           | 9         | 0px       | -104px    | -1040px   | 0.8      |
    @sanity
    Examples:
      | theme | scrollIndex | numScroll | topValue1 | topValue2 | topValue3 | waitTime |
      | Base  | 4           | 14        | 0px       | -120px    | -1800px   | 0.5      |
      | Base  | 9           | 9         | 0px       | -120px    | -1200px   | 0.5      |
