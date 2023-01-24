@regression @card @title @2111101

Feature: LUI Card Title Component

  Background:
    Given I launch the LUI app
    
  Scenario Outline: Verify that CardTitle is displayed (<theme> theme)
    When I navigate to 'CardTitle' with '<theme>' theme
    Then I verify that the 'CardTitle' 'Card' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify dimensions of the CardTitle Element (<theme> theme)
    When I navigate to 'CardTitle' 'Card' with '<theme>' theme
    Then I verify that the 'width' of 'cardtitle' 'card' component is '<defaultWidth>'
    And I verify that the 'height' of 'cardtitle' 'card' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | defaultWidth  | defaultHeight |
      | Xfinity | 249.333px         | 386px         |
    @sanity
    Examples:
      | theme   | defaultWidth  | defaultHeight |
      | Base    |  253.333px        |386px       |

  Scenario Outline: Verify that CardTitle modes (<theme> theme)
    When I navigate to 'CardTitle' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'CardTitle' component
    Then I verify the mode is '<modeValue>' for 'CardTitle'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused |
      | Xfinity | disabled  |
    @sanity
    Examples:
      | theme   | modeValue |
      | Base    | unfocused |
      | Xfinity | focused  |
      | Base    | disabled  |

  Scenario Outline: Verify that Card Title title can be set for Title (<theme> theme)
    When I navigate to 'CardTitle' with '<theme>' theme
    And I set the 'title' to 'LUI Test' for 'CardTitle' component
    Then I verify that the 'CardTitle' 'Card' component is displayed
    And I verify that 'CardTitle' 'Title' has text 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that Card Title description can be set (<theme> theme)
    When I navigate to 'CardTitle' with '<theme>' theme
    And I set the 'description' to 'LUI Test' for 'CardTitle' component
    Then I verify that the 'CardTitle' 'Card' component is displayed
    And I verify that 'CardTitle' 'Description' has text 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that Card Title details can be set (<theme> theme)
    When I navigate to 'CardTitle' with '<theme>' theme
    And I set the 'details' to 'LUI Test' for 'CardTitle' component
    Then I verify that the 'CardTitle' 'Card' component is displayed
    And I verify that 'CardTitle' 'Details' has text 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the default values (<theme> theme)
    When I navigate to 'CardTitle' with '<theme>' theme
    Then I verify the mode is 'focused' for 'CardTitle'
    And I verify that 'CardTitle' 'Description' has text 'Description'
    And I verify that 'CardTitle' 'Details' has text 'Details'
    And I verify that 'CardTitle' 'Title' has text 'Title'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |