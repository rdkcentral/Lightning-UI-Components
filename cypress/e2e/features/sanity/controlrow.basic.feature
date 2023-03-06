@regression @controlRow @2177464

Feature: LUI Control Row Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the ControlRow and count of the ControlRow - <element> elements is displayed (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    Then I verify that the 'ControlRow' component is displayed
    And I verify that '<element>' on the 'ControlRow' page has <numOfAssets> assets
    @sanity_temp
    Examples:
      | theme   | element           | numOfAssets |
      | Xfinity | ControlSmallIcons | 6           |
      | Xfinity | TileIcons         | 5           |
    Examples:
      | theme | element           | numOfAssets |
      | Base  | ControlSmallIcons | 6           |
      | Base  | TileIcons         | 5           |

  #Default Values for ControlRow-title are undefined so could not validate them
  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    Then I verify that the 'ControlRow' component is displayed
    And I verify the mode is 'focused' for 'ControlRow' 'tile1' 
  # These verifications need to be implemented once this bug is resolved - https://ccp.sys.comcast.net/browse/LUI-643
  # And I verify the alwaysScroll control is set to 'false' for the 'ControlRow' component
  # And I verify the lazyLoadBuffer control is set to '0' for the 'ControlRow' component
  # And I verify the lazyScroll control is set to 'true' for the 'ControlRow' component
  # And I verify the scrollIndex control is set to '0' for the 'ControlRow' component
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate navigating the buttons (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    Then I verify that I am able to navigate to the 'last' element of the 'ControlRow' 'Row'
    And I verify that I am able to navigate to the 'first' element of the 'ControlRow' 'Row'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify row layout and spacing (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    Then I verify that the elements are <space> pixels apart for 'ControlRow' component
    @sanity_temp
    Examples:
      | theme   | space |
      | Xfinity |  24   |
    Examples:
      | theme   | space |
      | Base    |  20   |
  
  Scenario Outline: Verify that ControlRow can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'ControlRow' component
    Then I verify the mode is '<modeValue>' for 'ControlRow' 'tile1'
    @sanity_temp
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
  #Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-643
  Scenario Outline: Verify the ControlRow 'always scroll' toggle (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    And I press 'RIGHT' key 4 times
    Then I verify that the 'ControlRow' 'Tile5' component is displayed
    And I verify that the 'alwaysScroll' of 'ControlRow' component is 'false'
    And I set the 'alwaysScroll' to 'true' for 'ControlRow' component
    And I press 'RIGHT' key 4 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'ControlRow' 'Tile5' component is not displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  @skip
  #Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-643
  Scenario Outline: Verify the ControlRow 'lazy load buffer' toggle (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    And I press 'RIGHT' key 2 times
    Then I verify that the 'ControlRow' 'Tile5' component is displayed
    And I set the 'lazyScroll' to 'true' for 'ControlRow' component
    And I press 'RIGHT' key 2 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'ControlRow' 'Tile5' component is not displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  @skip
  #Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-643
  Scenario Outline: Verify the ControlRow 'lazy scroll' toggle (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    And I press 'RIGHT' key 2 times
    Then I verify that the 'ControlRow' 'Tile5' component is displayed
    And I set the 'lazyScroll' to 'true' for 'ControlRow' component
    And I press 'RIGHT' key 2 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'ControlRow' 'Tile5' component is not displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  @skip
  #Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-643
  Scenario Outline: Verify the ControlRow 'never scroll' toggle (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    And I press 'RIGHT' key 3 times
    Then I verify that the 'ControlRow' 'Tile5' component is displayed
    And I set the 'neverScroll' to 'true' for 'ControlRow' component
    And I press 'RIGHT' key 3 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'ControlRow' 'Tile5' component is not displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  @skip
  #Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-643
  Scenario Outline: Verify boundary values of the ControlRow 'scroll index' control (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    And I press 'RIGHT' key 2 times
    Then I verify that the 'ControlRow' 'Tile5' component is displayed
    And I set the 'scrollIndex' to '6' for 'ControlRow' component
    And I press 'RIGHT' key 2 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'ControlRow' 'Tile5' component is not displayed
    And I verify that the 'ControlRow' 'ControlSmall1' component is displayed
    And I set the 'scrollIndex' to '-6' for 'ControlRow' component
    And I wait 0.5 seconds for the page to load
    And I verify that the 'ControlRow' 'ControlSmall1' component is not displayed
    And I verify that the 'ControlRow' 'ControlSmall6' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the ControlRow 'title' control (<theme> theme)
    When I navigate to 'ControlRow' 'Basic' with '<theme>' theme
    And I set the 'title' to '<exampleTitle>' for 'ControlRow' component
    Then I verify that 'ControlRow' 'title' has 'text' '<expectedTitle>'
    @sanity_temp
    Examples:
      | theme   | exampleTitle | expectedTitle |
      | Xfinity | LUI TEST     | LUI TEST      |
      | Xfinity | 78364uqufg   | 78364uqufg    |
    # | Xfinity | !@$@%^&#     | !@$@%^&#      |
    # Skipped due this ticket - https://ccp.sys.comcast.net/browse/LUI-683
    Examples:
      | theme   | exampleTitle | expectedTitle |
      | Base    | LUI TEST     | LUI TEST      |
      | Base    | 78364uqufg   | 78364uqufg    |
    # | Base    | !@$@%^&#     | !@$@%^&#      |
    # Skipped due this ticket - https://ccp.sys.comcast.net/browse/LUI-683
