@regression @cardAboutStacked @2111312

Feature: LUI CardAbout Stacked component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that CardAboutStacked is displayed (<theme> theme)
    When I navigate to 'cardaboutstacked' 'stacked' with '<theme>' theme
    Then I verify that the 'cardaboutstacked' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the CardAboutStacked Element (<theme> theme)
    When I navigate to 'cardaboutstacked' 'stacked' with '<theme>' theme
    Then I verify that the 'width' of 'cardaboutstacked' component is '<defaultWidth>'
    And I verify that the 'height' of 'cardaboutstacked' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | defaultWidth  | defaultHeight |
      | Xfinity | 522.667px     | 294px         |
    @sanity
    Examples:
      | theme   | defaultWidth  | defaultHeight |
      | Base    | 526.667px     | 296px         |

  Scenario Outline: Verify that CardAboutStacked can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'cardaboutstacked' 'stacked' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'cardaboutstacked' component
    Then I verify the mode is '<modeValue>' for 'cardaboutstacked'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    @sanity
    Examples:
      | theme   | modeValue |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

    
  Scenario Outline: Verify the CardAboutStacked title text can be set (<theme> theme)
    When I navigate to 'cardaboutstacked' 'stacked' with '<theme>' theme
    And I set the 'title' to 'LUI TEST' for 'cardaboutstacked' component
    Then I verify that the 'Title' component on the 'cardaboutstacked' page has text 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the CardAboutStacked titleBottom text can be set (<theme> theme)
    When I navigate to 'cardaboutstacked' 'stacked' with '<theme>' theme
    And I set the 'titleBottom' to 'LUI TEST' for 'cardaboutstacked' component
    Then I verify that the 'titleBottom' component on the 'cardaboutstacked' page has text 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the CardAboutStacked descriptionBottom text can be set (<theme> theme)
    When I navigate to 'cardaboutstacked' 'stacked' with '<theme>' theme
    And I set the 'descriptionBottom' to 'LUI TEST' for 'cardaboutstacked' component
    Then I verify that the 'descriptionBottom' component on the 'cardaboutstacked' page has text 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'cardaboutstacked' 'stacked' with '<theme>' theme
    Then I verify that the 'Title' component on the 'cardaboutstacked' page has text 'AUDIO'
    And I verify that the 'titleBottom' component on the 'cardaboutstacked' page has text 'LANGUAGES'
    And I verify that the 'descriptionBottom' component on the 'cardaboutstacked' page has text 'English, Spanish, French'
    And I verify the mode is 'focused' for 'cardaboutstacked'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
