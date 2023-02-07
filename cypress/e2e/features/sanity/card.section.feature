@regression @card @section @2105533

Feature: LUI Card Section Component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Card Section is displayed (<theme> theme)
    When I navigate to 'CardSection' with '<theme>' theme
    Then I verify that the 'CardSection' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Card Section Element (<theme> theme)
    When I navigate to 'CardSection' with '<theme>' theme
    Then I verify that the 'width' of 'CardSection' component is '<width>'
    And I verify that the 'height' of 'CardSection' component is '<height>'
    @sanity
    Examples:
      | theme   | width | height |
      | Xfinity | 386px | 160px  |
    Examples:
      | theme | width | height |
      | Base  | 386px | 200px  |

  Scenario Outline: Verify that CardSection can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'CardSection' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'CardSection' component
    Then I verify the mode is '<modeValue>' for 'CardSection'
    @sanity
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

  Scenario Outline: Verify that CardSection iconSrc can be set (<theme> theme)
    When I navigate to 'CardSection' with '<theme>' theme
    Then I verify that the 'CardSection' 'iconSrc' displays icon
    And I set the 'iconSrc' to 'null' for 'CardSection' component
    And I verify that the 'CardSection' 'iconSrc' does not display icon
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that Card Section title can be set (<theme> theme)
    When I navigate to 'CardSection' with '<theme>' theme
    And I set the 'title' to 'LUI Test' for 'CardSection' component
    Then I verify that the 'CardSection' component is displayed
    And I verify that 'CardSection' 'Title' has 'text' 'LUI Test'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'CardSection' with '<theme>' theme
    Then I verify the mode is 'focused' for 'CardSection'
    And I verify that the 'CardSection' 'iconSrc' displays icon
    And I verify that 'CardSection' 'Title' has 'text' 'Section'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |
