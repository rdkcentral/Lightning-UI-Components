@regression @label @basic @2104361

Feature: LUI Label component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Label Base is displayed (<theme> theme)
    When I navigate to 'Label' with '<theme>' theme
    Then I verify that the 'Label' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the Label Basic Element (<theme> theme)
    When I navigate to 'Label' with '<theme>' theme
    Then I verify that the 'width' of 'Label' component is '<width>'
    And I verify that the 'height' of 'Label' component is '<height>'
    @sanity
    Examples:
      | theme   | width | height |
      | Xfinity | 86    | 40     |
    Examples:
      | theme | width  | height |
      | Base  | 77.5px | 44px   |

  Scenario Outline: Verify that Label Basic text can be set (<theme> theme)
    When I navigate to 'Label' with '<theme>' theme
    And I set the 'title' to 'LUI Test' for 'Label' component
    Then I verify that the 'Label' component is displayed
    And I verify that 'Label' 'title' has 'text' 'LUI Test'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |
