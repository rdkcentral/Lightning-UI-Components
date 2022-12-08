@sanity @controlSmall @2105905

Feature: LUI Control Small component

  Background:
    Given I launch the LUI app
    And I navigate to 'ControlSmall' 'Control-Small' with 'Base' theme

  Scenario: Verify that Control Small is displayed
    Then I verify that the 'ControlSmall' component is displayed

  Scenario: Verify the ControlSmall modes
    When I set the 'mode' to 'unfocused' for 'ControlSmall' component
    Then I verify the 'mode' is 'unfocused' for 'ControlSmall' 'ControlSmall'
    And I set the 'mode' to 'focused' for 'ControlSmall' component
    And I verify the 'mode' is 'focused' for 'ControlSmall' 'ControlSmall'
    And I set the 'mode' to 'disabled' for 'ControlSmall' component
    And I verify the 'mode' is 'disabled' for 'ControlSmall' 'ControlSmall'

  Scenario: Verify the ControlSmall fixed state
    When I verify that the 'width' of 'ControlSmall' component is '104px'
    Then I set the 'fixed' to 'true' for 'ControlSmall' component
    And I verify that the 'width' of 'ControlSmall' component is '200px'

  Scenario: Verify the ControlSmall icon state
    When I set the 'icon' to 'none' for 'ControlSmall' component
    Then I verify that the 'ControlSmall' icon state is 'none'
    And I set the 'icon' to 'lightning' for 'ControlSmall' component
    And I verify that the 'ControlSmall' icon state is 'lightning'

  Scenario: Verify the ControlSmall Justify state
    When I set the 'fixed' to 'true' for 'ControlSmall' component
    Then I set the 'w' to '500' for 'ControlSmall' component
    And I set the 'justify' to 'left' for 'ControlSmall' component
    And I verify that 'ControlSmall' justify control is 'left'
    And I set the 'justify' to 'center' for 'ControlSmall' component
    And I verify that 'ControlSmall' justify control is 'center'
    And I set the 'justify' to 'right' for 'ControlSmall' component
    And I verify that 'ControlSmall' justify control is 'right'

  Scenario: Verify the ControlSmall logo state
    When I set the 'logo' to 'none' for 'ControlSmall' component
    Then I verify that the 'ControlSmall' logo state is 'none'
    And I set the 'logo' to 'xfinity' for 'ControlSmall' component
    And I verify that the 'ControlSmall' logo state is 'xfinity'

  Scenario: Verify the ControlSmall shouldCollapse state
    When I set the 'mode' to 'unfocused' for 'ControlSmall' component
    Then I set the 'shouldCollapse' to 'true' for 'ControlSmall' component
    And I verify that the 'width' of 'ControlSmall' component is '80px'
    And I set the 'shouldCollapse' to 'false' for 'ControlSmall' component
    And I verify that the 'width' of 'ControlSmall' component is '104px'
    And I set the 'mode' to 'disabled' for 'ControlSmall' component
    And I set the 'shouldCollapse' to 'true' for 'ControlSmall' component
    And I verify that the 'width' of 'ControlSmall' component is '80px'
    And I set the 'shouldCollapse' to 'false' for 'ControlSmall' component
    And I verify that the 'width' of 'ControlSmall' component is '104px'

  Scenario: Verify the ControlSmall title text can be set
    When I set the 'title' to 'LUI TEST' for 'ControlSmall' component
    Then I verify that the 'Title' component on the 'ControlSmall' page has text 'LUI TEST'

  Scenario: Verify the dimensions of the ControlSmall Element
    When I set the 'fixed' to 'true' for 'ControlSmall' component
    Then I set the 'w' to '400' for 'ControlSmall' component
    And I verify that the 'width' of 'ControlSmall' component is '400px'

  Scenario: Verify the default values
    Then I verify that 'ControlSmall' justify control is 'center'
    And I verify that the 'ControlSmall' logo state is 'none'
    And I verify that the 'Title' component on the 'ControlSmall' page has text 'Control'