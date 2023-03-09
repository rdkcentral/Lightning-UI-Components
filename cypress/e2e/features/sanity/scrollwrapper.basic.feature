@regression @scrollwrapper @basic @2150168

Feature: LUI ScrollWrapper Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that ScrollWrapper basic is displayed (<theme> theme)
    When I navigate to 'scrollwrapper' 'basic' with '<theme>' theme
    Then I verify that the 'scrollwrapper' 'basic' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the ScrollWrapper basic Element (<theme> theme)
    When I navigate to 'scrollwrapper' 'basic' with '<theme>' theme
    Then I verify that the 'width' of 'scrollwrapper' 'basic' component is '796px'
    And I verify that the 'height' of 'scrollwrapper' 'basic' component is '448px'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify ScrollWrapper basic modes - mode <modeValue> (<theme> theme)
    When I navigate to 'scrollwrapper' 'basic' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'scrollwrapper' component
    Then I verify the mode is '<modeValue>' for 'scrollwrapper' 'showScrollBar'
    @sanity
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
    Examples:
      | theme   | modeValue |
      | Base    | unfocused |
      | Base    | focused   |

  Scenario Outline: Verify the ScrollWrapper basic autoscroll control (<theme> theme)
    When I navigate to 'scrollwrapper' 'basic' with '<theme>' theme
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '0px'
    And I set the 'autoScrollDelay' to '<autoScrollDelay>' for 'scrollwrapper' component
    And I set the 'autoScrollSpeed' to '<autoScrollSpeed>' for 'scrollwrapper' component
    And I set the 'scrollStep' to '<scrollsteps>' for 'scrollwrapper' component
    And I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    And I wait for autoScroll to scroll with <scrollsteps>, <autoScrollSpeed> and <autoScrollDelay>
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '<width>'
    @sanity
    Examples:
      | theme   | scrollsteps | autoScrollSpeed | autoScrollDelay | scrollDuration | width |
      | Xfinity | 10          | 200             | 2000            | 0.1            | 368px |
      | Xfinity | 20          | 100             | 1000            | 5              | 368px |
    Examples:
      |  theme  | scrollsteps | autoScrollSpeed | autoScrollDelay | scrollDuration | width |
      |  Base   | 10          | 200             | 2000            | 0.1            | 348px |
      |  Base   | 20          | 100             | 1000            | 5              | 348px |

  @skip
  #TODO: Have to add this scenario in the VRT
  Scenario: Verify the ScrollWrapper basic fadeContent control
    When I set the 'fadeContent' to 'true' for 'basic' component
    Then I verify that the 'fadeContent' is 'True' for 'basic' component
    And I set the 'fadeContent' to 'false' for 'basic' component
    And I verify that the 'fadeContent' is 'False' for 'basic' component

  Scenario Outline: Verify the ScrollWrapper basic scrollStep control (<theme> theme)
    When I navigate to 'scrollwrapper' 'basic' with '<theme>' theme
    And I press 'DOWN' key
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '<width>'
    And I set the 'scrollStep' to '30' for 'scrollwrapper' component
    And I press 'DOWN' key
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '<widthChanged>'
    @sanity
    Examples:
      | theme   | width     | widthChanged |
      | Xfinity | 15.3333px | 46px         |
    Examples:
      | theme   | width     | widthChanged |
      | Base    | 49.7143px | 116px        |

  Scenario Outline: Verify the ScrollWrapper basic showScrollBar control (<theme> theme)
    When I navigate to 'scrollwrapper' 'basic' with '<theme>' theme
    And I set the 'showScrollBar' to 'true' for 'scrollwrapper' component
    Then I verify that the 'scrollwrapper' 'showScrollBar' component is displayed
    And I set the 'showScrollBar' to 'false' for 'scrollwrapper' component
    And I verify that the 'scrollwrapper' 'showScrollBar' component is not displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the ScrollWrapper basic scrollDuration control (<theme> theme)
    When I navigate to 'scrollwrapper' 'basic' with '<theme>' theme
    And I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    Then I verify that it takes <timeTaken> seconds for the ScrollWrapper 'Basic' to finish scrolling for '<theme>' theme
    @sanity
    Examples: 
      | theme   | scrollDuration  | timeTaken |
      | Xfinity | 0.1             | 6.8       |
      | Xfinity | 5               | 12        |
    Examples: 
      | theme   | scrollDuration  | timeTaken |
      | Base    | 0.1             | 4         |
      | Base    | 5               | 10        |
