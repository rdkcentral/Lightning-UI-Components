@sanity @button @2104461

Feature: LUI Button component

  Background:
    Given I launch the LUI app
    And I navigate to 'Button' 'Button' with 'Base' theme

  Scenario: Verify that Button component is displayed
    Then I verify that the 'Button' 'Button' component is displayed

  # There is a bug for this functionality so this scenario can be automated once that is resolved only.
  #   Scenario: Verify the Button Basic modes
  #     When I set the 'mode' to 'unfocused' for 'Button' component
  #     Then I verify the 'mode' is 'unfocused' for 'Button' 'Basic'
  #     And I set the 'mode' to 'focused' for 'Button' component
  #     And I verify the 'mode' is 'focused' for 'Button' 'Basic'
  #     And I set the 'mode' to 'disabled' for 'Button' component
  #     And I verify the 'mode' is 'disabled' for 'Button' 'Basic'

  Scenario: Verify the Button fixed state
    Then I verify that the 'width' of 'Button' 'Button' component is '472px'
    And I set the 'fixed' to 'true' for 'Button' component
    And I verify that the 'width' of 'Button' 'Button' component is '200px'

  Scenario: Verify the Button justify control
    When I set the 'justify' to 'left' for 'Button' component
    Then I verify that the 'Button' 'Justify' state is 'left'
    And I set the 'justify' to 'center' for 'Button' component
    And I verify that the 'Button' 'Justify' state is 'center'
    And I set the 'justify' to 'right' for 'Button' component
    And I verify that the 'Button' 'Justify' state is 'right'

  Scenario: Verify the Button prefix control
    When I set the 'prefix' to 'null' for 'Button' component
    Then I verify that the 'Button' 'prefix' state is 'null'
    And I set the 'prefix' to 'icon' for 'Button' component
    And I verify that the 'Button' 'prefix' state is 'icon'
    And I set the 'prefix' to 'checkbox' for 'Button' component
    And I verify that the 'Button' 'prefix' state is 'checkbox'
    And I set the 'prefix' to 'combo' for 'Button' component
    And I verify that the 'Button' 'prefix' state is 'combo'

  Scenario: Verify the Button suffix control
    When I set the 'suffix' to 'null' for 'Button' component
    Then I verify that the 'Button' 'suffix' state is 'null'
    And I set the 'suffix' to 'icon' for 'Button' component
    And I verify that the 'Button' 'suffix' state is 'icon'
    And I set the 'suffix' to 'checkbox' for 'Button' component
    And I verify that the 'Button' 'suffix' state is 'checkbox'
    And I set the 'suffix' to 'combo' for 'Button' component
    And I verify that the 'Button' 'suffix' state is 'combo'

  Scenario: Verify the Button title control
    Then I verify that the 'Button' 'Button' component is displayed
    And I verify that 'Button' 'Button' 'Title' has text 'Button'
    And I set the 'title' to 'LUI TEST' for 'Button' component
    And I verify that 'Button' 'Button' 'Title' has text 'LUI TEST'
