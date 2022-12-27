@regression @cardabout @2113150

Feature: LUI CardAbout component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardAbout' with 'Base' theme
    
  Scenario: Verify that CardAbout is displayed
    Then I verify that the 'CardAbout' component is displayed
    
  Scenario: Verify the dimensions of the CardAbout Element
    Then I verify that the 'width' of 'CardAbout' component is '526.667px'
    And I verify that the 'height' of 'CardAbout' component is '296px'

  Scenario Outline: Verify that CardAbout can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'CardAbout' component
    Then I verify the mode is '<modeValue>' for 'CardAbout'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that CardAbout title can be set
    When I set the 'title' to 'LUI TEST' for 'CardAbout' component
    Then I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'title' has text 'LUI TEST'

  Scenario: Verify that CardAbout description can be set
    When I set the 'description' to 'LUI Test' for 'CardAbout' component
    Then I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'description' has text 'LUI Test'
    
  Scenario: Verify that CardAbout iconLeft can be set
    Then I verify that the 'CardAbout' 'iconLeft' component is displayed
    And I verify that the 'CardAbout' 'iconRight' component is displayed
    And I set the 'iconLeft' to '!null' for 'CardAbout' component
    And I verify that the 'CardAbout' 'iconLeft' component does not exist in DOM
    And I verify that the 'CardAbout' 'iconRight' component is displayed
    
  Scenario: Verify that CardAbout iconRight can be set
    Then I verify that the 'CardAbout' 'iconLeft' component is displayed
    And I verify that the 'CardAbout' 'iconRight' component is displayed
    And I set the 'iconRight' to '!null' for 'CardAbout' component
    And I verify that the 'CardAbout' 'iconLeft' component is displayed
    And I verify that the 'CardAbout' 'iconRight' component does not exist in DOM

  # Unable to test using '%' i.e. '99%' on lines 53 - 55 due to LUI-638 https://ccp.sys.comcast.net/browse/LUI-638
  Scenario: Verify that CardAbout textLeft can be set
    Then I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'textLeft' has text '00%'
    And I set the 'textLeft' to '99' for 'CardAbout' component
    And I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'textLeft' has text '99'

  # Unable to test using '%' i.e. '99%' on lines 61 - 63 due to LUI-638 https://ccp.sys.comcast.net/browse/LUI-638
  Scenario: Verify that CardAbout textRight can be set
    Then I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'textRight' has text '00%'
    And I set the 'textRight' to '99' for 'CardAbout' component
    And I verify that the 'CardAbout' component is displayed
    And I verify that 'CardAbout' 'textRight' has text '99'