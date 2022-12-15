@sanity @regression @listItem @2136894

Feature: LUI ListItem Component

  Background:
    Given I launch the LUI app
    And I navigate to 'ListItem' with 'Base' theme

  Scenario: Verify that ListItem component is displayed
    Then I verify that the 'ListItem' component is displayed

  Scenario: Verify the dimensions of the ListItem Element
    Then I verify that the 'width' of 'ListItem' component is '472px'
    And I verify that the 'height' of 'ListItem' component is '120px'

  Scenario: Verify default values of ListItem controls
    Then I verify that the 'Title' component on the 'ListItem' page has text 'List Item'
    And I verify that the 'Description' component on the 'ListItem' page has text 'Description'
    And I verify that 'no' 'prefix' is added to 'ListItem'
    And I verify that 'no' 'suffix' is added to 'ListItem'
    And I verify that 'no' 'suffixLogo' is added to 'ListItem'

  Scenario Outline: Verify that ListItem can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'ListItem' component
    Then I verify the mode is '<modeValue>' for 'ListItem'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify that ListItem description can be set
    When I set the 'description' to 'LUI Test' for 'ListItem' component
    Then I verify that the 'ListItem' component is displayed
    And I verify that the 'Description' component on the 'ListItem' page has text 'LUI Test'

  Scenario: Verify the ListItem prefix control
    When I set the 'prefix' to 'null' for 'ListItem' component
    Then I verify that 'no' 'prefix' is added to 'ListItem'
    And I set the 'prefix' to 'toggle' for 'ListItem' component
    And I verify that 'toggle' 'prefix' is added to 'ListItem'
    And I set the 'prefix' to 'radio' for 'ListItem' component
    And I verify that 'radio' 'prefix' is added to 'ListItem'
    And I set the 'prefix' to 'checkbox' for 'ListItem' component
    And I verify that 'checkbox' 'prefix' is added to 'ListItem'

  Scenario: Verify the ListItem shouldCollapse control
    When I set the 'mode' to 'unfocused' for 'ListItem' component
    Then I verify the mode is 'unfocused' for 'ListItem'
    And I set the 'shouldCollapse' to 'true' for 'ListItem' component
    And I verify that the 'ListItem' 'Description' component does not exist in DOM
    And I set the 'shouldCollapse' to 'false' for 'ListItem' component
    And I verify that the 'ListItem' 'Description' component is displayed
    And I verify that the 'Description' component on the 'ListItem' page has text 'Description'

  Scenario: Verify the ListItem suffix control
    When I set the 'suffix' to 'null' for 'ListItem' component
    Then I verify that 'no' 'suffix' is added to 'ListItem'
    And I set the 'suffix' to 'toggle' for 'ListItem' component
    And I verify that 'toggle' 'suffix' is added to 'ListItem'
    And I set the 'suffix' to 'radio' for 'ListItem' component
    And I verify that 'radio' 'suffix' is added to 'ListItem'
    And I set the 'suffix' to 'checkbox' for 'ListItem' component
    And I verify that 'checkbox' 'suffix' is added to 'ListItem'

  Scenario: Verify the ListItem suffixLogo control
    When I set the 'suffixLogo' to 'null' for 'ListItem' component
    Then I verify that 'no' 'suffixLogo' is added to 'ListItem'
    And I set the 'suffixLogo' to 'xfinity' for 'ListItem' component
    And I verify that 'xfinity' 'suffixLogo' is added to 'ListItem'

  Scenario: Verify that ListItem title can be set
    When I set the 'title' to 'LUI Test' for 'ListItem' component
    Then I verify that the 'ListItem' component is displayed
    And I verify that the 'Title' component on the 'ListItem' page has text 'LUI Test'
