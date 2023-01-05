@regression @cardcontenthero @2113153

Feature: LUI CardContentHero component

  Background:
    Given I launch the LUI app
    And I navigate to 'cardcontenthero' 'hero' with 'Base' theme

  Scenario: Verify that CardContentHero is displayed
    Then I verify that the 'cardcontenthero' component is displayed

  Scenario: Verify the dimensions of the CardContentHero Element
    Then I verify that the 'width' of 'cardcontenthero' component is '1456px'
    And I verify that the 'height' of 'cardcontenthero' component is '296px'

  Scenario Outline: Verify the CardContentHero modes
    When I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    Then I verify the mode is '<modeValue>' for 'cardcontenthero'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario Outline: Verify the CardContentHero collapseToMetadata state
    When I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    Then I set the 'shouldCollapse' to 'true' for 'cardcontenthero' component
    And I set the 'collapseToMetadata' to 'true' for 'cardcontenthero' component
    And I verify that the 'cardcontenthero' 'collapseToMetadata' state is 'true'
    And I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    And I set the 'shouldCollapse' to 'true' for 'cardcontenthero' component
    And I set the 'collapseToMetadata' to 'false' for 'cardcontenthero' component
    And I verify that the 'cardcontenthero' 'collapseToMetadata' state is 'false'
    Examples:
      | modeValue |
      | unfocused |
      | disabled  |

  Scenario Outline: Verify the CardContentHero shouldCollapse state
    When I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    Then I set the 'shouldCollapse' to 'true' for 'cardcontenthero' component
    And I verify that 'cardcontenthero' 'shouldCollapse' state is 'true'
    And I set the 'mode' to '<modeValue>' for 'cardcontenthero' component
    And I set the 'shouldCollapse' to 'false' for 'cardcontenthero' component
    And I verify that 'cardcontenthero' 'shouldCollapse' state is 'false'
    Examples:
      | modeValue |
      | unfocused |
      | disabled  |

  Scenario: Verify that CardContentHero title can be set for Badge
    When I set the 'badge' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'Badge Title' has text 'LUI Test'

  Scenario: Verify that CardContentHero title can be set for Label
    When I set the 'label' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'label Title' has text 'LUI Test'

  Scenario Outline: Verify that CardContentHero progress displayed on the progress bar can be changed
    When I set the 'progress' to '<progressValue>' for 'cardcontenthero' component
    Then I verify that the 'cardcontenthero' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.20          |
      | 0.50          |
      | 0.75          |
      | 1.00          |

  Scenario: Verify that CardContentHero Metadata description textcan be set
    When I set the 'metadata_description' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'metadata description' has text 'LUI Test'

  Scenario: Verify that CardContentHero Metadata details text can be set
    When I set the 'metadata_details' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'metadata details' has text 'LUI Test'

  Scenario: Verify that CardContentHero Metadata title text can be set
    When I set the 'metadata_title' to 'LUI Test' for 'cardcontenthero' component
    Then I verify that 'cardcontenthero' 'metadata title' has text 'LUI Test'

  Scenario: Verify the default values
    Then I verify the mode is 'focused' for 'cardcontenthero'
    And I verify that the 'cardcontenthero' 'collapseToMetadata' state is 'false'
    And I verify that 'cardcontenthero' 'shouldCollapse' state is 'false'
    And I verify that 'cardcontenthero' 'Badge Title' has text 'HD'
    And I verify that 'cardcontenthero' 'label Title' has text 'Live'
    And I verify that 'cardcontenthero' 'metadata details' has text 'Details'
    And I verify that 'cardcontenthero' 'metadata title' has text 'Title'
    And I verify that the 'cardcontenthero' progress is set to 0.50
