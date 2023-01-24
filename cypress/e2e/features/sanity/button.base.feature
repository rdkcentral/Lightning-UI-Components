@regression @button @2104461

Feature: LUI Button component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Button is displayed (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    Then I verify that the 'Button' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that Button can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Button' component
    Then I verify the mode is '<modeValue>' for 'Button'
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

  Scenario Outline: Verify the Button fixed state (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    Then I verify that the 'width' of 'Button' component is '<defaultWidth>'
    And I set the 'fixed' to 'true' for 'Button' component
    And I verify that the 'width' of 'Button' component is '200px'
    @sanity_temp
    Examples:
      | theme   | defaultWidth  |
      | Xfinity | 386px         |
    @sanity
    Examples:
      | theme   | defaultWidth  |
      | Base    | 472px         |

  Scenario Outline: Verify the Button justify control (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    And I set the 'justify' to '<justifyValue>' for 'Button' component
    Then I verify that 'Button' justify control is '<justifyValue>'
    @sanity_temp
    Examples:
      | theme   | justifyValue |
      | Xfinity | left         |
      | Xfinity | center       |
      | Xfinity | right        |
    @sanity
    Examples:
      | theme   | justifyValue |
      | Base    | left         |
      | Base    | center       |
      | Base    | right        |

  Scenario Outline: Verify the Button prefix control (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    And I set the 'prefix' to '<prefixValue>' for 'Button' component
    Then I verify that 'Button' prefix control is '<prefixValue>'
    @sanity_temp
    Examples:
      | theme   | prefixValue |
      | Xfinity | null        |
      | Xfinity | icon        |
      | Xfinity | checkbox    |
      | Xfinity | combo       |
    @sanity
    Examples:
      | theme   | prefixValue |
      | Base    | null        |
      | Base    | icon        |
      | Base    | checkbox    |
      | Base    | combo       |

  Scenario Outline: Verify the Button suffix control (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    And I set the 'suffix' to '<suffixValue>' for 'Button' component
    Then I verify that 'Button' suffix control is '<suffixValue>'
    @sanity_temp
    Examples:
      | theme   | suffixValue |
      | Xfinity | null        |
      | Xfinity | icon        |
      | Xfinity | checkbox    |
      | Xfinity | combo       |
    @sanity
    Examples:
      | theme   | suffixValue |
      | Base    | null        |
      | Base    | icon        |
      | Base    | checkbox    |
      | Base    | combo       |

  Scenario Outline: Verify the Button title control (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    And I set the 'title' to 'LUI TEST' for 'Button' component
    Then I verify that the 'Title' component on the 'Button' page has text 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the Button W value (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    And I set the 'fixed' to 'true' for 'Button' component
    And I set the 'w' to '<width>' for 'Button' component
    Then I verify that the 'width' of 'Button' component is '<width>'
    @sanity_temp 
    Examples:
      | theme   | width  |
      | Xfinity | 300    |
      | Xfinity | 400    |
      | Xfinity | 405    |
    @sanity
    Examples:
      | theme   | width  |
      | Base    | 300    |
      | Base    | 309    |
      | Base    | 508    |
    
  Scenario: Verify that Button default values (<theme> theme)
    When I navigate to 'Button' with '<theme>' theme
    Then I verify the mode is 'focused' for 'Button'
    And I verify that 'Button' justify control is 'center'
    And I verify that 'Button' prefix control is 'null'
    And I verify that 'Button' suffix control is 'null'
    And I verify that the 'Title' component on the 'Button' page has text 'Button'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
