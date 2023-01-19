@regression @cardcontentverticalsmall @2111323

Feature: LUI CardContentVerticalSmall component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardContentVerticalSmall' with 'Base' theme

  Scenario: Verify that CardContentVerticalSmall is displayed
    Then I verify that the 'CardContentVerticalSmall' component is displayed

  Scenario: Verify the dimensions of the CardContentVerticalSmall Element
    Then I verify that the 'width' of 'CardContentVerticalSmall' component is '390px'
    And I verify that the 'height' of 'CardContentVerticalSmall' component is '359px'

  Scenario: Verify that CardContentVerticalSmall modes
    When I set the 'mode' to '<modeValue>' for 'CardContentVerticalSmall' component
    Then I verify the mode is '<modeValue>' for 'CardContentVerticalSmall'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that CardContentVerticalSmall shouldCollapse state
    When I set the 'shouldCollapse' to 'true' for 'CardContentVerticalSmall' component
    Then I set the 'mode' to '<mode>' for 'CardContentVerticalSmall' component
    And I verify that the 'CardContentVerticalSmall' 'Content Tile' component is displayed
    And I verify that the 'CardContentVerticalSmall' 'Metadata' component is not displayed
    And I set the 'shouldCollapse' to 'false' for 'CardContentVerticalSmall' component
    And I verify that the 'CardContentVerticalSmall' 'Content Tile' component is displayed
    And I verify that the 'CardContentVerticalSmall' 'Metadata' component is displayed
    Examples:
      | mode      |
      | unfocused |
      | disabled  |

  Scenario: Verify that CardContentVerticalSmall title can be set for Badge
    When I set the 'badge' to 'LUI Test' for 'CardContentVerticalSmall' component
    Then I verify that the 'CardContentVerticalSmall' component is displayed
    And I verify that 'CardContentVerticalSmall' 'badge' has text 'LUI Test'

  Scenario: Verify that CardContentVerticalSmall title can be set for Label
    When I set the 'label' to 'LUI Test' for 'CardContentVerticalSmall' component
    Then I verify that the 'CardContentVerticalSmall' component is displayed
    And I verify that 'CardContentVerticalSmall' 'label' has text 'LUI Test'

  Scenario Outline: Verify the CardContentVerticalSmall progress bar current value can be set
    When I set the 'progress' to '<progressValue>' for 'CardContentVerticalSmall' component
    Then I verify that the 'CardContentVerticalSmall' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.25          |
      | 0.50          |
      | 0.75          |
      | 1.00          |

  Scenario: Verify that CardContentVerticalSmall description can be set for Metadata
    When I set the 'metadata_description' to 'LUI Test' for 'CardContentVerticalSmall' component
    Then I verify that the 'CardContentVerticalSmall' component is displayed
    And I verify that 'CardContentVerticalSmall' 'description' has text 'LUI Test'

  Scenario: Verify that CardContentVerticalSmall title can be set for Metadata
    When I set the 'metadata_title' to 'LUI Test' for 'CardContentVerticalSmall' component
    Then I verify that the 'CardContentVerticalSmall' component is displayed
    And I verify that 'CardContentVerticalSmall' 'title' has text 'LUI Test'

  Scenario: Verify the default values
    Then I verify the mode is 'focused' for 'CardContentVerticalSmall'
    And I verify that 'CardContentVerticalSmall' 'badge' has text 'HD'
    And I verify that 'CardContentVerticalSmall' 'label' has text 'Live'
    And I verify that 'CardContentVerticalSmall' 'title' has text 'Title'
    And I verify that the 'CardContentVerticalSmall' progress is set to 0.50
