@regression @badge @textIcon @2105443

Feature: LUI Badge Text With Icon component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Badge Text With Icon is displayed (<theme> theme)
    When I navigate to 'Badge' 'Text With Icon' with '<theme>' theme
    Then I verify that the 'Badge' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions of the Badge Text With Icon Element (<theme> theme)
    When I navigate to 'Badge' 'Text With Icon' with '<theme>' theme
    Then I verify that the 'width' of 'Badge' component is '82.5px'
    And I verify that the 'height' of 'Badge' component is '32px'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that Badge Icon SVG alignment can be set (<theme> theme)
    When I navigate to 'Badge' 'Text With Icon' with '<theme>' theme
    Then I verify that 'Badge' 'iconAlign' state is 'left' for '<theme>' theme
    And I set the 'iconAlign' to '<align>' for 'Badge' component
    And I verify that 'Badge' 'iconAlign' state is '<align>' for '<theme>' theme
    @sanity_temp
    Examples:
      | theme   | align |
      | Xfinity | right |
      | Xfinity | left  |
    @sanity
    Examples:
      | theme   | align |
      | Base    | right |
      | Base    | left  |

  Scenario Outline: Verify that Badge Text With Icon can be set (<theme> theme)
    When I navigate to 'Badge' 'Text With Icon' with '<theme>' theme
    Then I verify that 'Badge' 'Badge Title' has 'text' 'HD'
    And I set the 'title' to 'LUI Test' for 'Badge' component
    And I verify that the 'Badge' component is displayed
    And I verify that 'Badge' 'Badge Title' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify that Badge Text With Icon alignment can be set while text is set (<theme> theme)
    When I navigate to 'Badge' 'Text With Icon' with '<theme>' theme
    And I set the 'iconAlign' to 'right' for 'Badge' component
    Then I verify that 'Badge' 'iconAlign' state is 'right' for '<theme>' theme
    And I set the 'title' to 'LUI Test Right' for 'Badge' component
    And I verify that 'Badge' 'Badge Title' has 'text' 'LUI Test Right'
    And I set the 'iconAlign' to 'left' for 'Badge' component
    And I verify that 'Badge' 'iconAlign' state is 'left' for '<theme>' theme
    And I set the 'title' to 'LUI Test Left' for 'Badge' component
    And I verify that 'Badge' 'Badge Title' has 'text' 'LUI Test Left'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
