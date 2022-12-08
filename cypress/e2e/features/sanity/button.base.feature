@sanity @button @2104461

Feature: LUI Button component

  Background:
    Given I launch the LUI app
    And I navigate to 'Button' 'Button' with 'Base' theme

  Scenario: Verify that Button component is displayed
    Then I verify that the 'Button' component is displayed

  Scenario: Verify the Button Basic modes
    When I set the 'mode' to 'unfocused' for 'Button' component
    Then I verify the 'mode' is 'unfocused' for 'Button' 'Button'
    And I set the 'mode' to 'focused' for 'Button' component
    And I verify the 'mode' is 'focused' for 'Button' 'Button'
    And I set the 'mode' to 'disabled' for 'Button' component
    And I verify the 'mode' is 'disabled' for 'Button' 'Button'

  Scenario: Verify the Button fixed state
    Then I verify that the 'width' of 'Button' component is '472px'
    And I set the 'fixed' to 'true' for 'Button' component
    And I verify that the 'width' of 'Button' component is '200px'

  Scenario: Verify the Button justify control
    When I set the 'justify' to 'left' for 'Button' component
    Then I verify that 'Button' justify control is 'left'
    And I set the 'justify' to 'center' for 'Button' component
    And I verify that 'Button' justify control is 'center'
    And I set the 'justify' to 'right' for 'Button' component
    And I verify that 'Button' justify control is 'right'

  Scenario: Verify the Button prefix control
    When I set the 'prefix' to 'null' for 'Button' component
    Then I verify that 'Button' prefix control is 'null'
    And I set the 'prefix' to 'icon' for 'Button' component
    And I verify that 'Button' prefix control is 'icon'
    And I set the 'prefix' to 'checkbox' for 'Button' component
    And I verify that 'Button' prefix control is 'checkbox'
    And I set the 'prefix' to 'combo' for 'Button' component
    And I verify that 'Button' prefix control is 'combo'

  Scenario: Verify the Button suffix control
    When I set the 'suffix' to 'null' for 'Button' component
    Then I verify that 'Button' suffix control is 'null'
    And I set the 'suffix' to 'icon' for 'Button' component
    And I verify that 'Button' suffix control is 'icon'
    And I set the 'suffix' to 'checkbox' for 'Button' component
    And I verify that 'Button' suffix control is 'checkbox'
    And I set the 'suffix' to 'combo' for 'Button' component
    And I verify that 'Button' suffix control is 'combo'

  Scenario: Verify the Button title control
    When I set the 'title' to 'LUI TEST' for 'Button' component
    Then I verify that the 'Title' component on the 'Button' page has text 'LUI TEST'