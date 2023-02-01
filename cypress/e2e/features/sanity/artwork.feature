@regression @artwork @basic @2150078

Feature: LUI Artwork component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Artwork component is displayed (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    Then I verify that the 'Artwork' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Artwork Base Element (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    Then I verify that the 'width' of 'Artwork' component is '<width>'
    And I verify that the 'height' of 'Artwork' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 523px | 294px  |
    @sanity
    Examples:
      | theme   | width | height |
      | Base    | 527px | 296px  |

  Scenario Outline: Verify the Artwork blur control - <blurToggle> (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'blur' to '<blurToggle>' for 'Artwork' component
    Then I verify the 'blur' is '<blurToggle>' for Artwork component for '<theme>' theme
    @sanity_temp
    Examples:
      | theme   | blurToggle |
      | Xfinity |    true    |
      | Xfinity |    false   |
    @sanity
    Examples:
      | theme   | blurToggle |
      | Base    |    true    |
      | Base    |    false   |

  Scenario Outline: Verify the Artwork fill control - <fillToggle> (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'fill' to '<fillToggle>' for 'Artwork' component
    Then I verify the 'fill' is '<fillToggle>' for Artwork component for '<theme>' theme
    @sanity_temp
    Examples:
      | theme   | fillToggle |
      | Xfinity |    true    |
      | Xfinity |    false   |
    @sanity
    Examples:
      | theme   | fillToggle |
      | Base    |    true    |
      | Base    |    false   |

  Scenario Outline: Verify the Artwork format control - <formatValue> (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'format' to '<formatValue>' for 'Artwork' component
    Then I verify the 'format' is '<formatValue>' for Artwork component for '<theme>' theme
    @sanity_temp
    Examples:
      | theme   | formatValue |
      | Xfinity |   square    |
      | Xfinity |   contain   |
      | Xfinity |   circle    |
      | Xfinity |   default   |
    @sanity
    Examples:
      | theme   | formatValue |
      | Base    |   square    |
      | Base    |   contain   |
      | Base    |   circle    |
      | Base    |   default   |

  Scenario Outline: Verify the Artwork gradient control - <gradientToggle> (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'gradient' to '<gradientToggle>' for 'Artwork' component
    Then I verify the 'gradient' is '<gradientToggle>' for Artwork component for '<theme>' theme
    @sanity_temp
    Examples:
      | theme   | gradientToggle |
      | Xfinity |     true       |
      | Xfinity |     false      |
    @sanity
    Examples:
      | theme   | gradientToggle |
      | Base    |     true       |
      | Base    |     false      |

  Scenario Outline: Verify the Artwork srcCallback control - <srcCallbackToggle> (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'srcCallback' to '<srcCallbackToggle>' for 'Artwork' component
    Then I verify the 'srcCallback' is '<srcCallbackToggle>' for Artwork component for '<theme>' theme
    @sanity_temp
    Examples:
      | theme   | srcCallbackToggle |
      | Xfinity | true              |
      | Xfinity | false             |
    @sanity
    Examples:
      | theme | srcCallbackToggle |
      | Base  | true              |
      | Base  | false             |

  Scenario Outline: Verify the Artwork default values (<theme> theme)
    When I navigate to 'Artwork' with '<theme>' theme
    Then I verify the 'blur' is 'false' for Artwork component for '<theme>' theme
    And I verify the 'fill' is 'false' for Artwork component for '<theme>' theme
    And I verify the 'format' is 'default' for Artwork component for '<theme>' theme
    And I verify the 'gradient' is 'false' for Artwork component for '<theme>' theme
    And I verify the 'srcCallback' is 'false' for Artwork component for '<theme>' theme
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |
      | Base  |
