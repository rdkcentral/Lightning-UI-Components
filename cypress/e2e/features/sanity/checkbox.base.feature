@sanity @checkbox @2102475

Feature: LUI Checkbox Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Checkbox' 'Checkbox' with 'Base' theme

  Scenario: Verify that Checkbox Basic is displayed
    Then I verify that the 'Checkbox' 'Checkbox' component is displayed

  Scenario: Verify the dimensions of the Checkbox Basic Element
    Then I verify that the 'width' of 'Checkbox' component is '40px'
    And I verify that the 'height' of 'Checkbox' component is '40px'

  #https://ccp.sys.comcast.net/browse/LUI-555
  #This is skipped because of the bug
  @skip
  Scenario: Verify that Checkbox Basic modes
    When I set the 'mode' to 'unfocused' for 'Checkbox' component
    Then I verify the 'mode' is 'unfocused' for 'Checkbox' 'Checkbox'
    And I set the 'mode' to 'focused' for 'Control' component
    And I verify the 'mode' is 'focused' for 'Checkbox' 'Checkbox'
    And I set the 'mode' to 'disabled' for 'Checkbox' component
    And I verify the 'mode' is 'disabled' for 'Checkbox' 'Checkbox'

  Scenario: Verify that Checkbox Basic checked state
    When I set the 'checked' to 'true' for 'Checkbox' component
    Then I verify that the 'Checkbox' 'checked' state is 'true'
    And I set the 'checked' to 'false' for 'Checkbox' component
    And I verify that the 'Checkbox' 'checked' state is 'false'

  Scenario: Verify that Checkbox Basic default values
   Then I verify that the 'Checkbox' 'checked' state is 'false'
   #A step needs to be added for verifying dafault value for mode control once the bug LUI-555 is resolved