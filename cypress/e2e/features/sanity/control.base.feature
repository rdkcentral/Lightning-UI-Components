@sanity @control @2111324

Feature: LUI Control component

  Background:
    Given I launch the LUI app
    And I navigate to 'Control' 'Control' with 'Base' theme

  Scenario: Verify that Control Basic is displayed
    Then I verify that the 'Control' component is displayed

  Scenario: Verify the Control modes
    When I set the 'mode' to 'unfocused' for 'Control' component
    Then I verify the 'mode' is 'unfocused' for 'Control' 'Control'
    And I set the 'mode' to 'focused' for 'Control' component
    And I verify the 'mode' is 'focused' for 'Control' 'Control'
    And I set the 'mode' to 'disabled' for 'Control' component
    And I verify the 'mode' is 'disabled' for 'Control' 'Control'

  Scenario: Verify the Control Basic fixed state
    When I verify that the 'width' of 'Control' component is '104px'
    Then I set the 'fixed' to 'true' for 'Control' component
    And I verify that the 'width' of 'Control' component is '200px'

  Scenario: Verify the Control Basic icon state
    When I set the 'icon' to 'none' for 'Control' component
    Then I verify that the 'Control' icon state is 'none'
    And I set the 'icon' to 'lightning' for 'Control' component
    And I verify that the 'Control' icon state is 'lightning'

  Scenario: Verify the Control logo state
    When I set the 'logo' to 'none' for 'Control' component
    Then I verify that the 'Control' logo state is 'none'
    And I set the 'logo' to 'xfinity' for 'Control' component
    And I verify that the 'Control' logo state is 'xfinity'

  Scenario: Verify the Control shouldCollapse state
    When I set the 'mode' to 'unfocused' for 'Control' component
    And I set the 'shouldCollapse' to 'true' for 'Control' component
    And I verify that the 'width' of 'Control' component is '90px'
    And I set the 'shouldCollapse' to 'false' for 'Control' component
    And I verify that the 'width' of 'Control' component is '104px'
    And I set the 'mode' to 'disabled' for 'Control' component
    And I set the 'shouldCollapse' to 'true' for 'Control' component
    And I verify that the 'width' of 'Control' component is '90px'
    And I set the 'shouldCollapse' to 'false' for 'Control' component
    And I verify that the 'width' of 'Control' component is '104px'

  Scenario: Verify the Control title text can be set
    When I set the 'title' to 'LUI TEST' for 'Control' component
    Then I verify that the 'Title' component on the 'Control' page has text 'LUI TEST'

  Scenario: Verify the dimensions of the Control Basic Element
    When I set the 'fixed' to 'true' for 'Control' component
    Then I set the 'w' to '400' for 'Control' component
    And I verify that the 'width' of 'Control' component is '400px'