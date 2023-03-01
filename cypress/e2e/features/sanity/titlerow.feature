@regression @titleRow @2175394

Feature: LUI Title Row Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify if TitleRow component is displayed and count of the elements (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    Then I verify that the 'TitleRow' component is displayed
    And I verify there are 12 assets per row on the 'TitleRow' page
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate navigating the buttons and row layout and spacing (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    Then I verify that I am able to navigate to the 'last' element of the 'TitleRow' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'TitleRow' 'Row Elements'
    And I wait 0.3 seconds for the page to load
    And I verify that elements are horizontally evenly spaced for 'TitleRow' component
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify that TitleRow can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'TitleRow' component
    Then I verify the mode is '<modeValue>' for 'TitleRow' 'Row Elements'
    Examples:
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    @sanity
    Examples:
      | theme | modeValue |
      | Base  | unfocused |
      | Base  | focused   |
      | Base  | disabled  |

  Scenario Outline: Verify the TitleRow 'always scroll' toggle (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    #And I press 'RIGHT' key 11 times - this step is currently failing due to
    #https://ccp.sys.comcast.net/browse/LUI-690. As a workaround need to use 10 + 1
    And I press 'RIGHT' key 10 times
    And I press 'RIGHT' key
    And I wait 0.5 seconds for the page to load
    Then I verify that the 'TitleRow' 'Tile 10' component is displayed
    And I set the 'alwaysScroll' to 'true' for 'TitleRow' component
    And I press 'RIGHT' key 11 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'TitleRow' 'Tile 10' component is not displayed
    @sanity_temp
    Examples:
      | theme |
      | Base  |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the TitleRow 'lazy scroll' toggle (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    And I press 'RIGHT' key 4 times
    And I wait 0.5 seconds for the page to load
    Then I verify that the 'TitleRow' 'Tile 7' component is displayed
    And I set the 'lazyScroll' to 'true' for 'TitleRow' component
    And I press 'RIGHT' key 4 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'TitleRow' 'Tile 7' component is not displayed
    @sanity_temp
    Examples:
      | theme |
      | Base  |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the TitleRow 'never scroll' toggle (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    Then I verify that the 'TitleRow' 'Tile 6' component is displayed
    And I set the 'neverScroll' to 'true' for 'TitleRow' component
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'TitleRow' 'Tile 6' component is not displayed
    @sanity_temp
    Examples:
      | theme |
      | Base  |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify boundary values of 'scroll index' control (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    And I press 'RIGHT' key
    Then I verify that the 'TitleRow' 'Tile 6' component is displayed
    And I set the 'scrollIndex' to '6' for 'TitleRow' component
    And I press 'RIGHT' key
    And I wait 0.5 seconds for the page to load
    And I verify that the 'TitleRow' 'Tile 6' component is not displayed
    And I verify that the 'TitleRow' 'Tile 1' component is displayed
#    This verification is failing because of a bug https://ccp.sys.comcast.net/browse/LUI-712
#    And I set the 'scrollIndex' to '-6' for 'TitleRow' component
#    And I wait 0.5 seconds for the page to load
#    And I verify that the 'TitleRow' 'Tile 1' component is not displayed
#    And I verify that the 'TitleRow' 'Tile 10' component is displayed
    @sanity_temp
    Examples:
      | theme |
      | Base  |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the TitleRow 'title' control (<theme> theme)
    When I navigate to 'TitleRow' with '<theme>' theme
    Then I verify that 'TitleRow' 'Title' has 'text' 'Row Title'
    And I set the 'title' to 'LUI TEST' for 'TitleRow' component
    And I verify that 'TitleRow' 'Title' has 'text' 'LUI TEST'
    And I set the 'title' to '' for 'TitleRow' component
    And I verify that the 'TitleRow' 'Title' component does not exist in DOM
#   Skipping the steps because of the bug - https://ccp.sys.comcast.net/browse/LUI-683
#   And I set the 'title' to '!@$%^&*(){}[]:;<>?,-./~' for 'TitleRow' component
#   And I verify that 'TitleRow' 'Title' has 'text' '!@$%^&*(){}[]:;<>?,-./~'
    @sanity_temp
    Examples:
      | theme |
      | Base  |
    @sanity
    Examples:
      | theme |
      | Base  |
