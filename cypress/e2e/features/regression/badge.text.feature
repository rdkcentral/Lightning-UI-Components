@regression @badge @text @2108213

Feature: LUI Badge Text component

  Background:
    Given I launch the LUI app

  Scenario: Verify that Badge Text is displayed
    When I navigate to 'Badge' 'Text' with '<theme>' theme
    Then I verify that the 'Badge' component is displayed
    Examples:
        |  theme  |
        |  Base   |
        | Xfinity |

  # Failure intermittently expected in Xfinity theme 
  # due to bug https://ccp.sys.comcast.net/browse/LUI-633
  Scenario: Verify the dimensions of the Badge Text Element
    When I navigate to 'Badge' 'Text' with '<theme>' theme
    Then I verify that the 'width' of 'Badge' component is '<width>'
    And I verify that the 'height' of 'Badge' component is '<height>'
    Examples:
        | theme   | width  | height |
        | Base    | 42.5px |  32px  |
        | Xfinity | 44.5px |  32px  |

  Scenario: Verify that Badge Text can be set
    When I navigate to 'Badge' 'Text' with '<theme>' theme
    And I set the 'title' to 'LUI Test' for 'Badge' component
    Then I verify that the 'Badge' component is displayed
    And I verify that 'Badge' 'Badge Title' has text 'LUI Test'
    Examples:
        |  theme  |
        |  Base   |
        | Xfinity |
