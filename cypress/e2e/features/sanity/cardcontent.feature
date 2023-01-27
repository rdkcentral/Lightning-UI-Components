@regression @CardContent @2111313

Feature: LUI CardContent component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that CardContent is displayed (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    Then I verify that the 'cardcontent' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify dimensions of the CardContent Element (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    Then I verify that the 'width' of 'cardcontent' component is '<defaultWidth>'
    And I verify that the 'height' of 'cardcontent' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | defaultWidth  | defaultHeight |
      | Xfinity | 796px         | 217px         |
    @sanity
    Examples:
      | theme   | defaultWidth  | defaultHeight |
      | Base    | 800px         | 219px         |

  Scenario Outline: Verify that CardContent modes (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'cardcontent' component
    And I set the 'shouldCollapse' to 'true' for 'cardcontent' component
    Then I verify that the 'cardcontent' 'shouldCollapse' state is 'true'
    And I set the 'mode' to '<modeValue>' for 'cardcontent' component
    And I set the 'shouldCollapse' to 'false' for 'cardcontent' component
    And I verify that the 'cardcontent' 'shouldCollapse' state is 'false'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | disabled  |
    @sanity
    Examples:
      | theme   | modeValue |
      | Base    | unfocused |
      | Base    | disabled  |

  Scenario Outline: Verify that CardContent title can be set for Badge (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    And I set the 'badge' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'Badge Title' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that CardContent title can be set for Label (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    And I set the 'label' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'label Title' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that CardContent Metadata description textcan be set (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    And I set the 'metadata_description' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'metadata description' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that CardContent Metadata details text can be set (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    And I set the 'metadata_details' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'metadata details' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that CardContent Metadata title text can be set (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    And I set the 'metadata_title' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'metadata title' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Validate that the cardcontent progress displayed on the progress bar can be changed (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    And I set the 'progress' to '<progressValue>' for 'cardcontent' component
    Then I verify that the 'cardcontent' progress is set to <progressValue>
    @sanity_temp
    Examples:
      | theme      | progressValue |
      | Xfinity    | 0.30          |
      | Xfinity    | 0.50          |
      | Xfinity    | 0.75          |
      | Xfinity    | 1.00          |
    @sanity
    Examples:
      | theme   | progressValue |
      | Base    | 0.30          |
      | Base    | 0.50          |
      | Base    | 0.75          |
      | Base    | 1.00          |

  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'CardContent' with '<theme>' theme
    Then I verify the mode is 'focused' for 'cardcontent'
    And I verify that the 'cardcontent' 'shouldCollapse' state is 'false'
    And I verify that 'cardcontent' 'Badge Title' has 'text' 'HD'
    And I verify that 'cardcontent' 'label Title' has 'text' 'Live'
    And I verify that 'cardcontent' 'metadata details' has 'text' 'Details'
    And I verify that 'cardcontent' 'metadata title' has 'text' 'Title'
    And I verify that the 'cardcontent' progress is set to 0.50
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
