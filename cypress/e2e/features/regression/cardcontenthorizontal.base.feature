@regression @cardcontenthorizontal @2105728

Feature: LUI CardContentHorizontal component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardContentHorizontal' with 'Base' theme
    
  Scenario: Verify that CardContentHorizontal  is displayed
    Then I verify that the 'CardContentHorizontal' component is displayed
    
  Scenario: Verify the dimensions of the CardContentHorizontal Element
    Then I verify that the 'width' of 'CardContentHorizontal' component is '800px'
    And I verify that the 'height' of 'CardContentHorizontal' component is '219px'
    
  Scenario Outline: Verify that CardContentHorizontal can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CardContentHorizontal' component
    Then I verify the mode is '<modeValue>' for 'CardContentHorizontal'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |
      
  Scenario Outline: Verify that CardContentHorizontal collapseToMetadata state
    When I set the 'shouldCollapse' to 'true' for 'CardContentHorizontal' component
    Then I set the 'mode' to '<mode>' for 'CardContentHorizontal' component
    And I verify that the 'CardContentHorizontal' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontal' 'Metadata' component is not displayed
    And I set the 'collapseToMetadata' to 'true' for 'CardContentHorizontal' component
    And I verify that the 'CardContentHorizontal' 'Content Tile' component is not displayed
    And I verify that the 'CardContentHorizontal' 'Metadata' component is displayed
    And I set the 'collapseToMetadata' to 'false' for 'CardContentHorizontal' component
    And I verify that the 'CardContentHorizontal' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontal' 'Metadata' component is not displayed
    Examples:
      | mode |
      | unfocused |
      | disabled  |
      
  Scenario Outline: Verify that CardContentHorizontal shouldCollapse state
    When I set the 'shouldCollapse' to 'true' for 'CardContentHorizontal' component
    Then I set the 'mode' to '<mode>' for 'CardContentHorizontal' component
    And I verify that the 'CardContentHorizontal' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontal' 'Metadata' component is not displayed
    And I set the 'shouldCollapse' to 'false' for 'CardContentHorizontal' component
    And I verify that the 'CardContentHorizontal' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontal' 'Metadata' component is displayed
    Examples:
      | mode |
      | unfocused |
      | disabled  |
      
  Scenario: Verify that CardContentHorizontal title can be set for Badge
    When I set the 'badge' to 'LUI Test' for 'CardContentHorizontal' component
    Then I verify that the 'CardContentHorizontal' component is displayed
    And I verify that 'CardContentHorizontal' 'badge' has 'text' 'LUI Test'
    
  Scenario: Verify that CardContentHorizontal title can be set for Label
    When I set the 'label' to 'LUI Test' for 'CardContentHorizontal' component
    Then I verify that the 'CardContentHorizontal' component is displayed
    And I verify that 'CardContentHorizontal' 'label' has 'text' 'LUI Test'

  Scenario Outline: Verify the CardContentHorizontal progress bar current value can be set
    When I set the 'progress' to '<progressValue>' for 'CardContentHorizontal' component
    Then I verify that the 'CardContentHorizontal' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.25          |
      | 0.50          |
      | 0.75          |
      | 1.00          |
      
  Scenario: Verify that CardContentHorizontal description can be set for Metadata
    When I set the 'metadata_description' to 'LUI Test' for 'CardContentHorizontal' component
    Then I verify that the 'CardContentHorizontal' component is displayed
    And I verify that 'CardContentHorizontal' 'description' has 'text' 'LUI Test'
    
  Scenario: Verify that CardContentHorizontal Details can be set for Metadata
    When I set the 'metadata_details' to 'LUI Test' for 'CardContentHorizontal' component
    Then I verify that the 'CardContentHorizontal' component is displayed
    And I verify that 'CardContentHorizontal' 'details' has 'text' 'LUI Test'
    
  Scenario: Verify that CardContentHorizontal title can be set for Metadata
    When I set the 'metadata_title' to 'LUI Test' for 'CardContentHorizontal' component
    Then I verify that the 'CardContentHorizontal' component is displayed
    And I verify that 'CardContentHorizontal' 'title' has 'text' 'LUI Test'

  Scenario: Verify the default values
    Then I verify the mode is 'focused' for 'CardContentHorizontal'
    And I verify that 'CardContentHorizontal' 'badge' has 'text' 'HD'
    And I verify that 'CardContentHorizontal' 'label' has 'text' 'Live'
    And I verify that 'CardContentHorizontal' 'details' has 'text' 'Details'
    And I verify that 'CardContentHorizontal' 'title' has 'text' 'Title'
    And I verify that the 'CardContentHorizontal' progress is set to 0.50
