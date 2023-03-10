@regression @cardaboutlarge @2105724 

Feature: LUI CardAboutLarge component

  Background:
    Given I launch the LUI app
    
  Scenario Outline: Verify that CardAboutLarge is displayed (<theme> theme)
    When I navigate to 'CardAboutLarge' with '<theme>' theme
    Then I verify that the 'CardAboutLarge' component is displayed
    Examples:
      | theme   |
      | Xfinity |
      | Base    |
    
  Scenario Outline: Verify the dimensions of the CardAboutLarge Element (<theme> theme)
    When I navigate to 'CardAboutLarge' with '<theme>' theme
    Then I verify that the 'width' of 'CardAboutLarge' component is '<width>'
    And I verify that the 'height' of 'CardAboutLarge' component is '<height>'
    Examples:
      | theme   |  width  | height | 
      | Xfinity |  796px  | 294px  | 
      | Base    |  800px  | 296px  | 
    
  Scenario Outline: Verify that CardAboutLarge can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'CardAboutLarge' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'CardAboutLarge' component
    Then I verify the mode is '<modeValue>' for 'CardAboutLarge'
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
      | Base    | unfocused |
      | Base    | focused   |
      | Base    | disabled  |

  Scenario Outline: Verify that CardAboutLarge title can be set (<theme> theme)
    When I navigate to 'CardAboutLarge' with '<theme>' theme
    And I set the 'title' to '<exampleTitle>' for 'CardAboutLarge' component
    Then I verify that the 'CardAboutLarge' component is displayed
    And I verify that 'CardAboutLarge' 'title' has 'text' '<exampleTitle>'
    Examples:
      | theme   |  exampleTitle | 
      | Xfinity |  LUI TEST     |
      | Base    |  LUI TEST     | 

  Scenario Outline: Verify that CardAboutLarge description can be set (<theme> theme)
    When I navigate to 'CardAboutLarge' with '<theme>' theme
    And I set the 'description' to '<exampleDescription>' for 'CardAboutLarge' component
    Then I verify that the 'CardAboutLarge' component is displayed
    And I verify that 'CardAboutLarge' 'description' has 'text' '<exampleDescription>'
    Examples:
      | theme   |  exampleDescription   | 
      | Xfinity |  LUI TEST DESCRIPTION |
      | Base    |  LUI TEST DESCRIPTION |
