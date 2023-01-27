@sanity @scrollwrapper @basic @2150168

Feature: LUI ScrollWrapper Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'scrollwrapper' 'basic' with 'Base' theme

  Scenario: Verify that ScrollWrapper basic is displayed
    Then I verify that the 'scrollwrapper' 'basic' component is displayed

  Scenario: Verify the dimensions of the ScrollWrapper basic Element
    Then I verify that the 'width' of 'scrollwrapper' 'basic' component is '796px'
    And I verify that the 'height' of 'scrollwrapper' 'basic' component is '448px'

  Scenario Outline: Verify that ScrollWrapper basic modes
    When I set the 'mode' to '<modeValue>' for 'scrollwrapper' component
    Then I verify the mode is '<modeValue>' for 'scrollwrapper' 'showScrollBar'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |

  Scenario Outline: Verify the ScrollWrapper basic autoscroll control
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '0px'
    And I set the 'autoScrollDelay' to '<autoScrollDelay>' for 'scrollwrapper' component
    And I set the 'autoScrollSpeed' to '<autoScrollSpeed>' for 'scrollwrapper' component
    And I set the 'scrollStep' to '<scrollsteps>' for 'scrollwrapper' component
    And I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    And I wait for autoScroll to scroll with <scrollsteps>, <autoScrollSpeed> and <autoScrollDelay>
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '348px'
    Examples:
      | scrollsteps | autoScrollSpeed | autoScrollDelay | scrollDuration |
      | 10          | 200             | 2000            | 0.1            |
      | 20          | 100             | 1000            | 5              |

  @skip
  #TODO: Have to add this scenario in the VRT
  Scenario: Verify the ScrollWrapper basic fadeContent control
    When I set the 'fadeContent' to 'true' for 'basic' component
    Then I verify that the 'fadeContent' is 'True' for 'basic' component
    And I set the 'fadeContent' to 'false' for 'basic' component
    And I verify that the 'fadeContent' is 'False' for 'basic' component

  Scenario: Verify the ScrollWrapper basic scrollStep control
    When I press 'DOWN' key
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '49.7143px'
    And I set the 'scrollStep' to '30' for 'scrollwrapper' component
    And I press 'DOWN' key
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '116px'

  Scenario: Verify the ScrollWrapper basic showScrollBar control
    When I set the 'showScrollBar' to 'true' for 'scrollwrapper' component
    Then I verify that the 'scrollwrapper' 'showScrollBar' component is displayed
    And I set the 'showScrollBar' to 'false' for 'scrollwrapper' component
    And I verify that the 'scrollwrapper' 'showScrollBar' component is not displayed
  
  Scenario Outline: Verify the ScrollWrapper basic scrollDuration control
    When I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    Then I verify that it takes <timeTaken> seconds for the ScrollWrapper 'Basic' to finish scrolling
    Examples: 
    | scrollDuration  | timeTaken |
    | 0.1             | 4         |
    | 5               | 10        |
