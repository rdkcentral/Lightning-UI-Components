@regression @metadataBase @2188374

Feature: LUI MetadataBase component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the MetadataBase component is displayed (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    Then I verify that the 'MetadataBase' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
     | theme   |
     | Base    |

  #Default Values for MetadataBase-Title, description and logoTitle are undefined so could not validate them
  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    Then I verify the mode is 'unfocused' for 'MetadataBase'
    And I verify that the 'MetadataBase' 'Logo' component is displayed 
    And I verify that the 'left' of 'MetadataBase' 'Logo' component is '368px'
    And I verify that the 'width' of 'MetadataBase' component is '400px'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the MetadataBase component (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    Then I verify that the 'width' of 'MetadataBase' component is '<width>'
    And I verify that the 'height' of 'MetadataBase' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width | height  |
      | Xfinity | 400px | 128.5px |
    Examples:
      | theme | width | height |
      | Base  | 400px | 121px  |

  Scenario Outline: Verify that MetadataBase can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'MetadataBase' component
    Then I verify the mode is '<modeValue>' for 'MetadataBase'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    Examples:
      | theme   | modeValue |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify the MetadataBase '<titleOrDescription>' control (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    And I set the '<titleOrDescription>' to '<exampleText>' for 'MetadataBase' component
    Then I verify that 'MetadataBase' '<titleOrDescription>' has 'text' '<expectedText>'
    @sanity_temp
    Examples:
      | theme   | titleOrDescription | exampleText | expectedText |
      | Xfinity | title              | LUI TEST    | LUI TEST     |
      | Xfinity | description        | LUI TEST    | LUI TEST     |
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683
    # | Xfinity | title              | ^%@GYW&S    | ^%@GYW&S     |
    # | Xfinity | description        | ^%@GYW&S    | ^%@GYW&S     |
    Examples:
      | theme   | titleOrDescription | exampleText | expectedText |
      | Base    | title              | LUI TEST    | LUI TEST     |
      | Base    | description        | LUI TEST    | LUI TEST     |
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683
    # | Base    | title              | ^%@GYW&S    | ^%@GYW&S     |
    # | Base    | description        | ^%@GYW&S    | ^%@GYW&S     |

  Scenario Outline: Verify the MetadataBase 'logo' control (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    And I set the 'logo' to 'none' for 'MetadataBase' component
    Then I verify that the 'MetadataBase' 'Logo' component does not exist in DOM
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the MetadataBase 'logoPosition' control (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    And I set the 'logoPosition' to '<position>' for 'MetadataBase' component
    Then I verify that the 'left' of 'MetadataBase' 'Logo' component is '<expectedPosition>'
    @sanity_temp
    Examples:
      | theme   | position | expectedPosition |
      | Xfinity | left     | 0px              |
      | Xfinity | right    | 368px            |
    Examples:
      | theme   | position | expectedPosition |
      | Base    | left     | 0px              |
      | Base    | right    | 368px            |

  Scenario Outline: Verify the MetadataBase 'subtitle' control (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    And I set the 'subtitle' to '<leftText>' and '<rightText>' for 'MetadataBase' component
    Then I verify that 'MetadataBase' 'subtitleLeft' has 'text' '<leftText>'
    And I verify that 'MetadataBase' 'subtitleRight' has 'text' '<rightText>'
    @sanity_temp
    Examples:
      | theme   | leftText | rightText |
      | Xfinity | LUI      | TEST      |
    Examples:
      | theme | leftText | rightText |
      | Base  | LUI      | TEST      |

  Scenario Outline: Verify the MetadataBase 'width' control (<theme> theme)
    When I navigate to 'MetadataBase' with '<theme>' theme
    And I set the 'w' to '<selectedWidth>' for 'MetadataBase' component
    Then I verify that the 'width' of 'MetadataBase' component is '<expectedWidth>'
    @sanity_temp
    Examples:
      | theme   | selectedWidth | expectedWidth |
      | Xfinity | 600           | 600           |
      | Xfinity | 400           | 400           |
      | Xfinity | -20           | 0             |
    Examples:
      | theme | selectedWidth | expectedWidth |
      | Base  | 600           | 600           |
      | Base  | 400           | 400           |
      | Base  | -20           | 0             |
