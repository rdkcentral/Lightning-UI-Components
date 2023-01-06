@sanity @regression @CardContent @2111313

Feature: LUI CardContent component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardContent' with 'Base' theme

  Scenario: Verify that CardContent is displayed
    Then I verify that the 'cardcontent' component is displayed

  Scenario: Verify the dimensions of the CardContent Element
    Then I verify that the 'width' of 'cardcontent' component is '800px'
    And I verify that the 'height' of 'cardcontent' component is '219px'

  Scenario Outline: Verify that CardContent modes
    When I set the 'mode' to '<modeValue>' for 'cardcontent' component
    Then I verify the mode is '<modeValue>' for 'cardcontent'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that CardContent shouldCollapse state
    When I set the 'mode' to '<modeValue>' for 'cardcontent' component
    Then I set the 'shouldCollapse' to 'true' for 'cardcontent' component
    And I verify that the 'cardcontent' 'shouldCollapse' state is 'true'
    And I set the 'mode' to '<modeValue>' for 'cardcontent' component
    And I set the 'shouldCollapse' to 'false' for 'cardcontent' component
    And I verify that the 'cardcontent' 'shouldCollapse' state is 'false'
    Examples:
      | modeValue |
      | unfocused |
      | disabled  |

  Scenario: Verify that CardContent title can be set for Badge
    When I set the 'badge' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'Badge Title' has text 'LUI Test'

  Scenario: Verify that CardContent title can be set for Label
    When I set the 'label' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'label Title' has text 'LUI Test'

  Scenario Outline: Validate that the cardcontent progress displayed on the progress bar can be changed
    When I set the 'progress' to '<progressValue>' for 'cardcontent' component
    Then I verify that the 'cardcontent' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.20          |
      | 0.50          |
      | 0.75          |
      | 1.00          |

  Scenario: Verify that CardContent Metadata description textcan be set
    When I set the 'metadata_description' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'metadata description' has text 'LUI Test'

  Scenario: Verify that CardContent Metadata details text can be set
    When I set the 'metadata_details' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'metadata details' has text 'LUI Test'

  Scenario: Verify that CardContent Metadata title text can be set
    When I set the 'metadata_title' to 'LUI Test' for 'cardcontent' component
    Then I verify that 'cardcontent' 'metadata title' has text 'LUI Test'

  Scenario: Verify the default values
    Then I verify the mode is 'focused' for 'cardcontent'
    And I verify that the 'cardcontent' 'shouldCollapse' state is 'false'
    And I verify that 'cardcontent' 'Badge Title' has text 'HD'
    And I verify that 'cardcontent' 'label Title' has text 'Live'
    And I verify that 'cardcontent' 'metadata details' has text 'Details'
    And I verify that 'cardcontent' 'metadata title' has text 'Title'
    And I verify that the 'cardcontent' progress is set to 0.50
