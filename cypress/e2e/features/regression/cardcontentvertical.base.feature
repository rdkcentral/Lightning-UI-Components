@regression @cardcontentvertical @2105735

Feature: LUI CardContentVertical component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardContentVertical' with 'Base' theme

  Scenario: Verify that CardContentVertical is displayed
    Then I verify that the 'CardContentVertical' component is displayed

  Scenario: Verify the dimensions of the CardContentVertical Element
    Then I verify that the 'width' of 'CardContentVertical' component is '390px'
    And I verify that the 'height' of 'CardContentVertical' component is '591px'

  Scenario: Verify that CardContentVertical modes
    When I set the 'mode' to '<modeValue>' for 'CardContentVertical' component
    Then I verify the mode is '<modeValue>' for 'CardContentVertical'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that CardContentVertical shouldCollapse state
    When I set the 'shouldCollapse' to 'true' for 'CardContentVertical' component
    Then I set the 'mode' to '<mode>' for 'CardContentVertical' component
    And I verify that the 'CardContentVertical' 'Content Tile' component is displayed
    And I verify that the 'CardContentVertical' 'Metadata' component is not displayed
    And I set the 'shouldCollapse' to 'false' for 'CardContentVertical' component
    And I verify that the 'CardContentVertical' 'Content Tile' component is displayed
    And I verify that the 'CardContentVertical' 'Metadata' component is displayed
    Examples:
      | mode      |
      | unfocused |
      | disabled  |

  Scenario: Verify that CardContentVertical title can be set for Badge
    When I set the 'badge' to 'LUI Test' for 'CardContentVertical' component
    Then I verify that the 'CardContentVertical' component is displayed
    And I verify that 'CardContentVertical' 'badge' has text 'LUI Test'

  Scenario: Verify that CardContentVertical title can be set for Label
    When I set the 'label' to 'LUI Test' for 'CardContentVertical' component
    Then I verify that the 'CardContentVertical' component is displayed
    And I verify that 'CardContentVertical' 'label' has text 'LUI Test'

  Scenario Outline: Verify the CardContentVertical progress bar current value can be set
    When I set the 'progress' to '<progressValue>' for 'CardContentVertical' component
    Then I verify that the 'CardContentVertical' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.25          |
      | 0.50          |
      | 0.75          |
      | 1.00          |

  Scenario: Verify that CardContentVertical description can be set for Metadata
    When I set the 'metadata_description' to 'LUI Test' for 'CardContentVertical' component
    Then I verify that the 'CardContentVertical' component is displayed
    And I verify that 'CardContentVertical' 'description' has text 'LUI Test'

  Scenario: Verify that CardContentVertical Details can be set for Metadata
    When I set the 'metadata_details' to 'LUI Test' for 'CardContentVertical' component
    Then I verify that the 'CardContentVertical' component is displayed
    And I verify that 'CardContentVertical' 'details' has text 'LUI Test'

  Scenario: Verify that CardContentVertical title can be set for Metadata
    When I set the 'metadata_title' to 'LUI Test' for 'CardContentVertical' component
    Then I verify that the 'CardContentVertical' component is displayed
    And I verify that 'CardContentVertical' 'title' has text 'LUI Test'

  Scenario: Verify the default values
    Then I verify the mode is 'focused' for 'CardContentVertical'
    And I verify that 'CardContentVertical' 'badge' has text 'HD'
    And I verify that 'CardContentVertical' 'label' has text 'Live'
    And I verify that 'CardContentVertical' 'details' has text 'Details'
    And I verify that 'CardContentVertical' 'title' has text 'Title'
    And I verify that the 'CardContentVertical' progress is set to 0.50
