@regression @withHandleKey @2191195

Feature: LUI WithHandleKey component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that With Handle Key element is displayed (<theme> theme)
    When I navigate to 'WithHandleKey' with '<theme>' theme
    Then I verify that the 'WithHandleKey' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions and count of the With Handle Key elements (<theme> theme)
    When I navigate to 'WithHandleKey' with '<theme>' theme
    Then I verify there are 4 assets per 'Row' on the 'WithHandleKey' page
    And I verify each 'Row Tiles' has width of 320.0 and height of 180.0 on 'WithHandleKey' page
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify row layout and spacing (<theme> theme)
    When I navigate to 'WithHandleKey' with '<theme>' theme
    Then I verify that elements are horizontally evenly spaced for 'WithHandleKey' component
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Validate navigating the elements (<theme> theme)
    When I navigate to 'WithHandleKey' with '<theme>' theme
    Then I verify that I am able to navigate to the 'last' element of the 'WithHandleKey' 'Row Tiles'
    And I verify that I am able to navigate to the 'first' element of the 'WithHandleKey' 'Row Tiles'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Base    |
