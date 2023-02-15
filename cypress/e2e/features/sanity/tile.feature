@regression @tileBasic @2104360

Feature: LUI Tile component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Tile is displayed (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    Then I verify that the 'Tile' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Tile Element (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    Then I verify that the 'width' of 'Tile' component is '<defaultWidth>'
    And I verify that the 'height' of 'Tile' component is '<defaultHeight>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 523px        | 294px         |
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 527px        | 296px         |

  Scenario Outline: Verify that Tile can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Tile' component
    Then I verify the mode is '<modeValue>' for 'Tile'
    @sanity
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

  Scenario Outline: Verify the Tile metadataLocation control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'metadataLocation' to '<metadataLocationValue>' for 'Tile' component
    Then I verify that the '<metadataLocationValue>' is '<metadataLocationValue>' for 'Tile' component
    @sanity
    Examples:
      | theme   | metadataLocationValue |
      | Xfinity | standard              |
      | Xfinity | inset                 |
    Examples:
      | theme   | metadataLocationValue |
      | Base    | standard              |
      | Base    | inset                 |

  Scenario Outline: Verify the Tile persistentMetadata control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Tile' component
    And I set the 'persistentMetadata' to '<persistentMetadataValue>' for 'Tile' component
    Then I verify that the 'persistentMetadata' is '<persistentMetadataValue>' for 'Tile' component
    @sanity
    Examples:
      | theme   | modeValue | persistentMetadataValue |
      | Xfinity | unfocused | true                    |
      | Xfinity | unfocused | false                   |
      | Xfinity | disabled  | true                    |
      | Xfinity | disabled  | false                   |
      | Xfinity | focused   | true                    |
    Examples:
      | theme   | modeValue | persistentMetadataValue |
      | Base    | unfocused | true                    |
      | Base    | unfocused | false                   |
      | Base    | disabled  | true                    |
      | Base    | disabled  | false                   |
      | Base    | focused   | true                    |

  Scenario Outline: Verify the Tile circle control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'itemLayout_circle' to '<circleControl>' for 'Tile' component
    Then I verify that the 'width' of 'Tile' component is '<defaultWidth>'
    @sanity
    Examples:
      | theme   | circleControl | defaultWidth |
      | Xfinity | true          | 294px        |
      | Xfinity | false         | 523px        |
    Examples:
      | theme   | circleControl | defaultWidth |
      | Base    | true          | 296px        |
      | Base    | false         | 527px        |

  Scenario Outline: Verify the Tile badge Title Control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'badge_title' to 'LUI Test' for 'Tile' component
    Then I verify that 'Tile' 'Badge Title' has 'text' 'LUI Test'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the Tile label Title Control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'label_title' to 'LUI Test' for 'Tile' component
    Then I verify that 'Tile' 'Label Title' has 'text' 'LUI Test'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the Tile blur control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'artwork_blur' to '<blurValue>' for 'Tile' component
    Then I verify that the 'blur' is '<blurValue>' for 'Tile' component
    @sanity
    Examples:
      | theme   | blurValue |
      | Xfinity | false     |
      | Xfinity | true      |
    Examples:
      | theme   | blurValue |
      | Base    | false     |
      | Base    | true      |

  Scenario Outline: Verify the Tile fill control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'artwork_fill' to '<fillValue>' for 'Tile' component
    Then I verify that the 'fill' is '<fillValue>' for 'Tile' component
    @sanity
    Examples:
      | theme   | fillValue |
      | Xfinity | false     |
      | Xfinity | true      |
    Examples:
      | theme   | fillValue |
      | Base    | false     |
      | Base    | true      |

  Scenario Outline: Verify the Tile format control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'artwork_format' to '<formatValue>' for 'Tile' component
    Then I verify that the 'format' is '<formatValue>' for 'Tile' component
    @sanity
    Examples:
      | theme   | formatValue |
      | Xfinity | default     |
      | Xfinity | circle      |
      | Xfinity | square      |
      | Xfinity | contain     |
    Examples:
      | theme   | formatValue |
      | Base    | default     |
      | Base    | circle      |
      | Base    | square      |
      | Base    | contain     |

  Scenario Outline: Verify the Tile checked control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'checkbox_checked' to '<checkedValue>' for 'Tile' component
    Then I verify that the 'checked' is '<checkedValue>' for 'Tile' component
    @sanity
    Examples:
      | theme   | checkedValue |
      | Xfinity | true         |
      | Xfinity | false        |
    Examples:
      | theme   | checkedValue |
      | Base    | true         |
      | Base    | false        |

  Scenario Outline: Validate the Tile progress control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'progressBar_progress' to '<progressValue>' for 'Tile' component
    Then I verify that the 'Tile' progress is set to <progressValue>
    @sanity
    Examples:
      | theme   | progressValue |
      | Xfinity | 0.20          |
      | Xfinity | 0.50          |
      | Xfinity | 0.75          |
      | Xfinity | 1.00          |
    Examples:
      | theme   | progressValue |
      | Base    | 0.20          |
      | Base    | 0.50          |
      | Base    | 0.75          |
      | Base    | 1.00          |

  Scenario Outline: Verify the Tile ratioX control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'itemLayout_ratioX' to '20' for 'Tile' component
    Then I verify that the 'height' of 'Tile' component is '<defaultHeight>'
    And I verify that the 'width' of 'Tile' component is '<defaultWidth>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 523px        | 235px         |
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 527px        | 237px         |

  Scenario Outline: Verify the Tile ratioY control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'itemLayout_ratioY' to '20' for 'Tile' component
    Then I verify that the 'height' of 'Tile' component is '<defaultHeight>'
    And I verify that the 'width' of 'Tile' component is '<defaultWidth>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 523px        | 654px         |
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 527px        | 659px         |

  Scenario Outline: Verify the Tile upCount control (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    And I set the 'itemLayout_upCount' to '7' for 'Tile' component
    Then I verify that the 'height' of 'Tile' component is '<defaultHeight>'
    And I verify that the 'width' of 'Tile' component is '<defaultWidth>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 210px        | 118px         |
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 214px        | 120px         |

  Scenario Outline: Verify that Tile default values (<theme> theme)
    When I navigate to 'Tile' with '<theme>' theme
    Then I verify the mode is 'focused' for 'Tile'
    And I verify that the 'standard' is 'standard' for 'Tile' component
    And I verify that the 'persistentMetadata' is 'true' for 'Tile' component
    And I verify that the 'blur' is 'false' for 'Tile' component
    And I verify that the 'fill' is 'false' for 'Tile' component
    And I verify that the 'format' is 'default' for 'Tile' component
    And I verify that the 'checked' is 'false' for 'Tile' component
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |
