@regression @cardcontenthorizontallarge @2113154

Feature: LUI CardContent With Horizontal Large component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardContentHorizontalLarge' with 'Base' theme
    
  Scenario: Verify that CardContent Horizontal Large is displayed
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    
  Scenario: Verify the dimensions of the CardContent Horizontal Large Element
    Then I verify that the 'width' of 'CardContentHorizontalLarge' component is '1292px'
    And I verify that the 'height' of 'CardContentHorizontalLarge' component is '296px'
    
  Scenario Outline: Verify that CardContent Horizontal Large can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CardContentHorizontalLarge' component
    Then I verify the mode is '<modeValue>' for 'CardContentHorizontalLarge'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |
      
  Scenario Outline: Verify that CardContent Horizontal Large collapseToMetadata state
    When I set the 'shouldCollapse' to 'true' for 'CardContentHorizontalLarge' component
    Then I set the 'mode' to '<mode>' for 'CardContentHorizontalLarge' component
    And I verify that the 'CardContentHorizontalLarge' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontalLarge' 'Metadata' component is not displayed
    And I set the 'collapseToMetadata' to 'true' for 'CardContentHorizontalLarge' component
    And I verify that the 'CardContentHorizontalLarge' 'Content Tile' component is not displayed
    And I verify that the 'CardContentHorizontalLarge' 'Metadata' component is displayed
    And I set the 'collapseToMetadata' to 'false' for 'CardContentHorizontalLarge' component
    And I verify that the 'CardContentHorizontalLarge' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontalLarge' 'Metadata' component is not displayed
    Examples:
      | mode |
      | unfocused |
      | disabled  |
      
  Scenario Outline: Verify that CardContent Horizontal Large shouldCollapse state
    When I set the 'shouldCollapse' to 'true' for 'CardContentHorizontalLarge' component
    Then I set the 'mode' to '<mode>' for 'CardContentHorizontalLarge' component
    And I verify that the 'CardContentHorizontalLarge' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontalLarge' 'Metadata' component is not displayed
    And I set the 'shouldCollapse' to 'false' for 'CardContentHorizontalLarge' component
    And I verify that the 'CardContentHorizontalLarge' 'Content Tile' component is displayed
    And I verify that the 'CardContentHorizontalLarge' 'Metadata' component is displayed
    Examples:
      | mode |
      | unfocused |
      | disabled  |
      
  Scenario: Verify that CardContent Horizontal Large title can be set for Badge
    When I set the 'badge' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'badge' has text 'LUI Test'
    
  Scenario: Verify that CardContent Horizontal Large title can be set for Label
    When I set the 'label' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'label' has text 'LUI Test'

  Scenario Outline: Verify the CardContent Horizontal Large progress bar current value can be set
    When I set the 'progress' to '<progressValue>' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.00          |
      | 0.25          |
      | 0.50          |
      | 0.75          |
      | 1.00          |
      
  Scenario: Verify that CardContent Horizontal Large description can be set for Metadata
    When I set the 'metadata_description' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'description' has text 'LUI Test'
    
  Scenario: Verify that CardContent Horizontal Large Details can be set for Metadata
    When I set the 'metadata_details' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'details' has text 'LUI Test'
    
  Scenario: Verify that CardContent Horizontal Large title can be set for Metadata
    When I set the 'metadata_title' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'title' has text 'LUI Test'