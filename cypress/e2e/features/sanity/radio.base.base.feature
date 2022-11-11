@sanity @radio @base @2113395

Feature: LUI Radio Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Radio' 'Radio' with 'Base' theme

  Scenario: Verify that Radio Basic is displayed
    Then I verify that the 'Radio' component is displayed
    
  Scenario: Verify the dimensions of the Radio Basic Element
    Then I verify that the 'width' of 'Radio' component is '40px'
    And I verify that the 'height' of 'Radio' component is '40px'

# Disabled until 'mode' control functionality is fixed
  # Scenario: Verify that Radio Basic modes
  #   When I set the 'mode' to 'unfocused' for 'Radio' component
  #   Then I verify the 'mode' is 'unfocused' for 'Radio' 'Radio'
  #   And I set the 'mode' to 'disabled' for 'Radio' component
  #   And I verify the 'mode' is 'disabled' for 'Radio' 'Radio'
    
  Scenario: Verify the Radio Basic checked state
    When I set the 'checked' to 'true' for 'Radio' component
    Then I verify that the 'opacity' of 'Radio' 'Knob' component is '1'
    And I verify that the 'display' of 'Radio' 'Knob' component is 'block'
    And I set the 'checked' to 'false' for 'Radio' component
    And I verify that the 'opacity' of 'Radio' 'Knob' component is '0'
    And I verify that the 'display' of 'Radio' 'Knob' component is 'none'
