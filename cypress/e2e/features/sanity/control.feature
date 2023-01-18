@regression @control @2111324

Feature: LUI Control component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Control Basic is displayed (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    Then I verify that the 'Control' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that Control can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Control' component
    Then I verify the mode is '<modeValue>' for 'Control'
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

  Scenario Outline: Verify the Control Basic fixed state (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    Then I verify that the 'width' of 'Control' component is '<defaultWidth>'
    And I set the 'fixed' to 'true' for 'Control' component
    And I verify that the 'width' of 'Control' component is '200px'
    @sanity_temp
    Examples:
      | theme   | defaultWidth  |
      | Xfinity | 119px         |
    @sanity
    Examples:
      | theme   | defaultWidth  |
      | Base    | 104px         |

  Scenario Outline: Verify the Control Basic icon state (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    And I set the 'icon' to 'none' for 'Control' component
    Then I verify that the 'Control' icon state is 'none'
    And I set the 'icon' to 'lightning' for 'Control' component
    And I verify that the 'Control' icon state is 'lightning'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the Control logo state (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    And I set the 'logo' to 'none' for 'Control' component
    Then I verify that the 'Control' logo state is 'none'
    And I set the 'logo' to 'xfinity' for 'Control' component
    And I verify that the 'Control' logo state is 'xfinity'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the Control shouldCollapse state when mode is set to '<selectedMode>' (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    And I set the 'mode' to '<selectedMode>' for 'Control' component
    And I set the 'shouldCollapse' to 'true' for 'Control' component
    Then I verify that the 'width' of 'Control' component is '<collapsedWidth>'
    And I set the 'shouldCollapse' to 'false' for 'Control' component
    And I verify that the 'width' of 'Control' component is '<width>'
    @sanity_temp
    Examples:
      | theme   | selectedMode  | collapsedWidth  | width |
      | Xfinity | unfocused     | 72px            | 119px |
      | Xfinity | disabled      | 72px            | 119px |
    @sanity
    Examples:
      | theme   | selectedMode  | collapsedWidth  | width |
      | Base    | unfocused     | 90px            | 104px |
      | Base    | disabled      | 90px            | 104px |

  Scenario Outline: Verify the Control title text can be set (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    And I set the 'title' to 'LUI TEST' for 'Control' component
    Then I verify that the 'Title' component on the 'Control' page has text 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Control Basic Element (<theme> theme)
    When I navigate to 'Control' with '<theme>' theme
    And I set the 'fixed' to 'true' for 'Control' component
    And I set the 'w' to '400' for 'Control' component
    Then I verify that the 'width' of 'Control' component is '400px'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
    