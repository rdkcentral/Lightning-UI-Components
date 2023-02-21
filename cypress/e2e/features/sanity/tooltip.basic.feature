@regression @tooltip @basic @2180488

Feature: LUI Tooltip Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Tooltip component is displayed (<theme> theme)
    When I navigate to 'Tooltip' 'Basic' with '<theme>' theme
    Then I verify that the 'Tooltip' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the Tooltip component (<theme> theme)
    When I navigate to 'Tooltip' 'Basic' with '<theme>' theme
    Then I verify that the 'width' of 'Tooltip' component is '<width>'
    And I verify that the 'height' of 'Tooltip' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width  | height |
      | Xfinity | 99.5px | 52px   |
    @sanity
    Examples:
      | theme | width  | height |
      | Base  | 83.5px | 58px   |

  Scenario Outline: Verify that Tooltip can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Tooltip' 'Basic' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Tooltip' component
    Then I verify the mode is '<modeValue>' for 'Tooltip'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
    @sanity
    Examples:
      | theme | modeValue |
      | Base  | unfocused |
      | Base  | focused   |

  #Skipping the test because of the bug - https://ccp.sys.comcast.net/browse/LUI-627
  @skip
  Scenario Outline: Verify the Tooltip 'timeVisible' control (<theme> theme)
    When I navigate to 'Tooltip' 'Basic' with '<theme>' theme
    And I set the 'mode' to 'unfocused' for 'Tooltip' component
    Then I verify that the 'Tooltip' component is not displayed
    And I set the 'timeVisible' to '<delayTime>' for 'Tooltip' component
    And I set the 'mode' to 'focused' for 'Tooltip' component
    And I verify that the 'Tooltip' component is displayed
    And I wait <staticTime> seconds for the page to load
    And I verify that the 'Tooltip' component is not displayed
    @sanity_temp
    Examples:
      | theme   | delayTime | staticTime |
      | Xfinity | 2000      | 2          |
      | Xfinity | 5000      | 5          |
    @sanity
    Examples:
      | theme | delayTime | staticTime |
      | Base  | 2000      | 2          |
      | Base  | 5000      | 5          |

  #Skipping the test because of the bug - https://ccp.sys.comcast.net/browse/LUI-627
  @skip
  Scenario Outline: Verify the Tooltip 'delayVisible' control (<theme> theme)
    When I navigate to 'Tooltip' 'Basic' with '<theme>' theme
    And I set the 'mode' to 'unfocused' for 'Tooltip' component
    Then I verify that the 'Tooltip' component is not displayed
    And I set the 'delayVisible' to '<delayTime>' for 'Tooltip' component
    And I set the 'mode' to 'focused' for 'Tooltip' component
    And I verify that the 'Tooltip' component is not displayed
    And I wait <staticTime> seconds for the page to load
    And I verify that the 'Tooltip' component is displayed
    @sanity_temp
    Examples:
      | theme   | delayTime | staticTime |
      | Xfinity | 2000      | 2          |
      | Xfinity | 5000      | 5          |
    @sanity
    Examples:
      | theme | delayTime | staticTime |
      | Base  | 2000      | 2          |
      | Base  | 5000      | 5          |

  #Skipping the test because of the bug - https://ccp.sys.comcast.net/browse/LUI-683
  @skip
  Scenario Outline: Verify the Tooltip 'title' control (<theme> theme)
    When I navigate to 'Tooltip' 'Basic' with '<theme>' theme
    And I set the 'title' to '<exampleTitle>' for 'Tooltip' component
    Then I verify that 'Tooltip' 'title' has 'text' '<expectedTitle>'
    @sanity_temp
    Examples:
      | theme   | exampleTitle         | expectedTitle |
      | Xfinity | LUI TEST             | LUI TEST      |
      | Xfinity | *^#TDGIWUT           | Tooltip       |
      | Xfinity | 893689{}[]&*^WHGD!!@ | Tooltip       |
    @sanity
    Examples:
      | theme | exampleTitle         | expectedTitle |
      | Base  | LUI TEST             | LUI TEST      |
      | Base  | *^#TDGIWUT           | Tooltip       |
      | Base  | 893689{}[]&*^WHGD!!@ | Tooltip       |
