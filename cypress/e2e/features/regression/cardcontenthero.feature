@regression @cardcontenthero @2113153

Feature: LUI CardContentHero component

  Background:
    Given I launch the LUI app
    
  Scenario Outline: Verify the CardContentHero is displayed (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    Then I verify that the 'cardcontenthero' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify the dimensions of the CardContentHero Element (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    Then I verify that the 'width' of 'cardcontenthero' component is '<defaultWidth>'
    And I verify that the 'height' of 'cardcontenthero' component is '<defaultHeight>'
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 1206px       | 294px         |
      | Base    | 1456px       | 296px         |

  Scenario Outline: Verify the CardContentHero modes (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    Then I verify the mode is '<modeValue>' for 'cardcontenthero'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify the CardContentHero collapseToMetadata state (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'shouldCollapse' to 'true' for 'cardcontenthero' component
    And I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    And I set the 'collapseToMetadata' to 'true' for 'cardcontenthero' component
    Then I verify that the 'cardcontenthero' 'collapseToMetadata' state is 'true'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | disabled  |

  Scenario Outline: Verify the CardContentHero shouldCollapse state (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    And I set the 'shouldCollapse' to 'true' for 'cardcontenthero' component
    Then I verify that the 'cardcontenthero' 'shouldCollapse' state is 'true'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | disabled  |

  Scenario Outline: Verify that CardContentHero title can be set for Badge (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'badge' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'Badge Title' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify that CardContentHero title can be set for Label (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'label' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'label Title' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify that CardContentHero progress displayed on the progress bar can be changed (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'progress' to '<progressValue>' for 'cardcontenthero' component
    Then I verify that the 'cardcontenthero' progress is set to <progressValue>
    Examples:
      | theme   | progressValue |
      | Xfinity | 0.20          |
      | Xfinity | 0.50          |
      | Xfinity | 0.75          |
      | Xfinity | 1.00          |
      | Base    | 0.20          |
      | Base    | 0.50          |
      | Base    | 0.75          |
      | Base    | 1.00          |

  Scenario Outline: Verify that CardContentHero Metadata description textcan be set (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'metadata_description' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'metadata description' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify that CardContentHero Metadata details text can be set (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'metadata_details' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'metadata details' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify that CardContentHero Metadata title text can be set (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    And I set the 'metadata_title' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'metadata title' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  #Default Values for Badge-Title, Label-Title and description are undefined so could not validate them
  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'cardcontenthero' 'hero' with '<theme>' theme
    Then I verify the mode is 'focused' for 'cardcontenthero'
    And I verify that the 'cardcontenthero' 'shouldCollapse' state is 'false'
    And I verify that the 'cardcontenthero' progress is set to 0.50
    #For Verfying the defaultvalue for collapseToMetadata, need to set shouldCollapse to True
    And I set the 'shouldCollapse' to 'true' for 'cardcontenthero' component
    And I verify that the 'cardcontenthero' 'collapseToMetadata' state is 'false'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
