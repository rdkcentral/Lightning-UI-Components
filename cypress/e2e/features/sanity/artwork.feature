@regression @artwork @basic @2150078

Feature: LUI Artwork component

  Background:
    Given I launch the LUI app

  Scenario: Verify that Artwork component is displayed
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

  Scenario: Verify the dimensions of the Artwork Base Element
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

  Scenario: Verify the Artwork blur control
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'blur' to '<blurToggle>' for 'Artwork' component
    Then I verify the 'blur' is '<blurToggle>' for Artwork component
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

  Scenario: Verify the Artwork fill control
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'fill' to '<fillToggle>' for 'Artwork' component
    Then I verify the 'fill' is '<fillToggle>' for Artwork component
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

  Scenario: Verify the Artwork format control
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'format' to '<formatValue>' for 'Artwork' component
    Then I verify the 'format' is '<formatValue>' for Artwork component
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

  Scenario: Verify the Artwork gradient control
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'gradient' to '<gradientToggle>' for 'Artwork' component
    Then I verify the 'gradient' is '<gradientToggle>' for Artwork component
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

  Scenario: Verify the Artwork srcCallback control
    When I navigate to 'Artwork' with '<theme>' theme
    And I set the 'srcCallback' to '<srcCallbackToggle>' for 'Artwork' component
    Then I verify the 'srcCallback' is '<srcCallbackToggle>' for Artwork component
    @sanity_temp
    Examples:
      | theme   | srcCallbackToggle |
      | Xfinity |      true         |
      | Xfinity |      false        |
    @sanity
    Examples:
      | theme   | srcCallbackToggle |
      | Base    |      true         |
      | Base    |      false        |
