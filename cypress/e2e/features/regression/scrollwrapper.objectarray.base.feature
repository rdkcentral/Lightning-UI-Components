@regression @scrollwrapper @objectarray @2149179

Feature: LUI ScrollWrapper Object Array component

  Background:
    Given I launch the LUI app
    And I navigate to 'scrollwrapper' 'object-array' with 'Base' theme

  Scenario: Verify that ScrollWrapper ObjectArray is displayed
    Then I verify that the 'scrollwrapper' 'objectarray' component is displayed

  Scenario: Verify the dimensions of the ScrollWrapper ObjectArray Element
    Then I verify that the 'width' of 'scrollwrapper' 'objectarray' component is '1200px'
    And I verify that the 'height' of 'scrollwrapper' 'objectarray' component is '764px'

  Scenario Outline: Verify that ScrollWrapper ObjectArray modes
    When I set the 'mode' to '<modeValue>' for 'scrollwrapper' component
    Then I verify the mode is '<modeValue>' for 'scrollwrapper' 'showScrollBar'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |

  Scenario Outline: Verify the ScrollWrapper ObjectArray autoscroll control
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '0px'
    And I set the 'autoScrollDelay' to '<autoScrollDelay>' for 'scrollwrapper' component
    And I set the 'autoScrollSpeed' to '<autoScrollSpeed>' for 'scrollwrapper' component
    And I set the 'scrollStep' to '<scrollsteps>' for 'scrollwrapper' component
    And I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    And I wait for autoScroll to scroll with <scrollsteps>, <autoScrollSpeed> and <autoScrollDelay>
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '724px'
    Examples:
      | scrollsteps | autoScrollSpeed | autoScrollDelay | scrollDuration |
      | 10          | 200             | 2000            | 0.1            |
      | 20          | 100             | 1000            | 5              |

  @skip
  #TODO: Have to add this scenario in the VRT
  Scenario: Verify the ScrollWrapper ObjectArray fadeContent control
    When I set the 'fadeContent' to 'true' for 'objectarray' component
    Then I verify that the 'fadeContent' is 'True' for 'objectarray' component
    And I set the 'fadeContent' to 'False' for 'objectarray' component
    And I verify that the 'fadeContent' is 'False' for 'objectarray' component

  Scenario: Verify the ScrollWrapper ObjectArray scrollStep control
    When I press 'DOWN' key
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '51.7143px'
    And I set the 'scrollStep' to '30' for 'scrollwrapper' component
    And I press 'DOWN' key
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '144.8px'

  Scenario: Verify the ScrollWrapper ObjectArray showScrollBar control
    When I set the 'showScrollBar' to 'true' for 'scrollwrapper' component
    Then I verify that the 'scrollwrapper' 'showScrollBar' component is displayed
    And I set the 'showScrollBar' to 'false' for 'scrollwrapper' component
    And I verify that the 'scrollwrapper' 'showScrollBar' component is not displayed
  
  Scenario: Verify the Object Array scrollDuration control
    When I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    Then I verify that it takes <timeTaken> seconds for the ScrollWrapper 'Object Array' to finish scrolling
    Examples:
    | scrollDuration  | timeTaken |
    | 0.1             | 5         |
    | 5               | 10        |
  