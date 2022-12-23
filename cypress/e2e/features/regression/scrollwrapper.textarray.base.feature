@sanity @scrollwrapper @textarray @2149179

Feature: LUI ScrollWrapper Text Array Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'scrollwrapper' 'text-array' with 'Base' theme

  Scenario: Verify that ScrollWrapper TextArray is displayed
    Then I verify that the 'scrollwrapper' 'textarray' component is displayed

  Scenario: Verify the dimensions of the ScrollWrapper TextArray Element
    Then I verify that the 'width' of 'scrollwrapper' 'textarray' component is '600px'
    And I verify that the 'height' of 'scrollwrapper' 'textarray' component is '450px'

  Scenario Outline: Verify that ScrollWrapper TextArray modes
    When I set the 'mode' to '<modeValue>' for 'scrollwrapper' component
    Then I verify the mode is '<modeValue>' for 'scrollwrapper' 'showScrollBar'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |

  Scenario Outline: Verify the ScrollWrapper TextArray autoScroll control
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '0px'
    And I set the 'autoScrollDelay' to '<autoScrollDelay>' for 'scrollwrapper' component
    And I set the 'autoScrollSpeed' to '<autoScrollSpeed>' for 'scrollwrapper' component
    And I set the 'scrollStep' to '<scrollsteps>' for 'scrollwrapper' component
    And I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    And I wait for autoScroll to scroll with <scrollsteps>, <autoScrollSpeed> and <autoScrollDelay>
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '410px'
    Examples:
      | scrollsteps | autoScrollSpeed | autoScrollDelay | scrollDuration |
      | 10          | 200             | 2000            | 0.1            |
      | 20          | 100             | 1000            | 5              |

  @skip
  #TODO: Have to add this scenario in the VRT
  Scenario: Verify the ScrollWrapper TextArray fadeContent control
    When I set the 'fadeContent' to 'true' for 'Text Array' component
    Then I verify that the 'fadeContent' is 'True' for 'Text Array' component
    And I set the 'fadeContent' to 'False' for 'Text Array' component
    And I verify that the 'fadeContent' is 'False' for 'Text Array' component

  Scenario: Verify the ScrollWrapper TextArray scrollStep control
    When I press 'DOWN' key
    Then I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '10.5128px'
    And I set the 'scrollStep' to '30' for 'scrollwrapper' component
    And I press 'DOWN' key
    And I verify that the 'width' of 'scrollwrapper' 'scrollprogressbar' component is '31.5385px'

  Scenario: Verify the ScrollWrapper TextArray showScrollBar control
    When I set the 'showScrollBar' to 'true' for 'scrollwrapper' component
    Then I verify that the 'scrollwrapper' 'showScrollBar' component is displayed
    And I set the 'showScrollBar' to 'false' for 'scrollwrapper' component
    And I verify that the 'scrollwrapper' 'showScrollBar' component is not displayed
  
  Scenario: Verify the Text Array Basic scrollDuration control
    When I set the 'scrollDuration' to '<scrollDuration>' for 'scrollwrapper' component
    And I set the 'autoScroll' to 'true' for 'scrollwrapper' component
    Then I verify that it takes <timeTaken> seconds for the ScrollWrapper to finish scrolling
    Examples: 
    | scrollDuration  | timeTaken |
    | 0.1             | 10         |
    | 5               | 15         |
