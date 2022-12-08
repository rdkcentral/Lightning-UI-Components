@sanity @buttonSmall @2111084

Feature: LUI Button Small component

  Background:
    Given I launch the LUI app
    And I navigate to 'ButtonSmall' 'Button-Small' with 'Base' theme

  Scenario: Verify that Button Small is displayed
    Then I verify that the 'ButtonSmall' component is displayed

  Scenario: Verify the Button Small modes
    When I set the 'mode' to 'unfocused' for 'ButtonSmall' component
    Then I verify the 'mode' is 'unfocused' for 'ButtonSmall' 'ButtonSmall'
    And I set the 'mode' to 'focused' for 'ButtonSmall' component
    And I verify the 'mode' is 'focused' for 'ButtonSmall' 'ButtonSmall'
    And I set the 'mode' to 'disabled' for 'ButtonSmall' component
    And I verify the 'mode' is 'disabled' for 'ButtonSmall' 'ButtonSmall'

  Scenario: Verify the Button Small fixed state
    When I verify that the 'width' of 'ButtonSmall' component is '144px'
    And I set the 'fixed' to 'true' for 'ButtonSmall' component
    And I verify that the 'width' of 'ButtonSmall' component is '200px'

  Scenario: Verify the Button Small justify content
    Then I verify that 'ButtonSmall' justify control is 'center'
    And I set the 'justify' to 'left' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' justify control is 'left'
    And I set the 'justify' to 'center' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' justify control is 'center'
    And I set the 'justify' to 'right' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' justify control is 'right'

  Scenario: Verify the Button Small prefix state
    Then I verify that 'ButtonSmall' prefix control is 'null'
    And I set the 'prefix' to 'checkbox' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' prefix control is 'checkbox'
    And I set the 'prefix' to 'null' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' prefix control is 'null'
    And I set the 'prefix' to 'icon' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' prefix control is 'icon'
    And I set the 'prefix' to 'combo' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' prefix control is 'combo'

  Scenario: Verify the Button Small suffix state
    Then I verify that 'ButtonSmall' suffix control is 'null'
    And I set the 'suffix' to 'checkbox' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' suffix control is 'checkbox'
    And I set the 'suffix' to 'null' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' suffix control is 'null'
    And I set the 'suffix' to 'icon' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' suffix control is 'icon'
    And I set the 'suffix' to 'combo' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' suffix control is 'combo'

  Scenario: Verify the Button Small title text can be set
    When I set the 'title' to 'LUI TEST' for 'ButtonSmall' component
    Then I verify that the 'Title' component on the 'ButtonSmall' page has text 'LUI TEST'