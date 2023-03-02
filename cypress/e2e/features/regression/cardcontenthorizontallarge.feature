@regression @cardcontenthorizontallarge @2113154

Feature: LUI CardContent With Horizontal Large component

  Background:
    Given I launch the LUI app
    
  Scenario Outline: Verify that CardContent Horizontal Large is displayed (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
    
  Scenario Outline: Verify the dimensions of the CardContent Horizontal Large Element (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    Then I verify that the 'width' of 'CardContentHorizontalLarge' component is '<defaultWidth>'
    And I verify that the 'height' of 'CardContentHorizontalLarge' component is '<defaultHeight>'
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 1069.33px    | 294px         |
      | Base    | 1292px       | 296px         |
    
  Scenario Outline: Verify that CardContent Horizontal Large can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'CardContentHorizontalLarge' component
    Then I verify the mode is '<modeValue>' for 'CardContentHorizontalLarge'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |
      
  Scenario Outline: Verify the CardContent Horizontal Large collapseToMetadata state (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'CardContentHorizontalLarge' component
    And I set the 'shouldCollapse' to 'true' for 'CardContentHorizontalLarge' component
    And I set the 'collapseToMetadata' to 'true' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' 'collapseToMetadata' state is 'true'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | disabled  |
      
  Scenario Outline: Verify the CardContent Horizontal Large shouldCollapse state (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'CardContentHorizontalLarge' component
    And I set the 'shouldCollapse' to 'true' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' 'shouldCollapse' state is 'true'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | disabled  |
      
  Scenario Outline: Verify that CardContent Horizontal Large title can be set for Badge (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'badge' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'badge' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
    
  Scenario Outline: Verify that CardContent Horizontal Large title can be set for Label (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'label' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'label' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  Scenario Outline: Verify that CardContent Horizontal Large progress bar current value can be set (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'progress' to '<progressValue>' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' progress is set to <progressValue>
    Examples:
      | theme   | progressValue |
      | Xfinity | 0.00          |
      | Xfinity | 0.25          |
      | Xfinity | 0.50          |
      | Xfinity | 0.75          |
      | Xfinity | 1.00          |
      | Base    | 0.00          |
      | Base    | 0.25          |
      | Base    | 0.50          |
      | Base    | 0.75          |
      | Base    | 1.00          |
      
  Scenario Outline: Verify that CardContent Horizontal Large description can be set for Metadata (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'metadata_description' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'description' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
    
  Scenario Outline: Verify that CardContent Horizontal Large Details can be set for Metadata (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'metadata_details' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'details' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
    
  Scenario Outline: Verify that CardContent Horizontal Large title can be set for Metadata (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    And I set the 'metadata_title' to 'LUI Test' for 'CardContentHorizontalLarge' component
    Then I verify that the 'CardContentHorizontalLarge' component is displayed
    And I verify that 'CardContentHorizontalLarge' 'title' has 'text' 'LUI Test'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |

  #Default Values for Badge-Title, Label-Title and description are undefined so could not validate them
  Scenario Outline: Verify that CardContent Horizontal Large default values (<theme> theme)
    When I navigate to 'CardContentHorizontalLarge' with '<theme>' theme
    Then I verify the mode is 'focused' for 'CardContentHorizontalLarge'
    And I verify that the 'CardContentHorizontalLarge' 'shouldCollapse' state is 'false'
    And I verify that the 'CardContentHorizontalLarge' progress is set to 0.50
    #For Verfying the defaultvalue for collapseToMetadata, need to set shouldCollapse to True
    And I set the 'shouldCollapse' to 'true' for 'CardContentHorizontalLarge' component
    And I verify that the 'CardContentHorizontalLarge' 'collapseToMetadata' state is 'false'
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
