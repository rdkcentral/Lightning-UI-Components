@sanity @radiosmall @basic @2105949

Feature: LUI RadioSmall Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'RadioSmall' 'Radio' with 'Base' theme

  Scenario: Verify that RadioSmall Basic is displayed
    Then I verify that the 'RadioSmall' 'Radio' component is displayed
    
  Scenario: Verify the dimensions of the RadioSmall Basic Element
    Then I verify that the 'width' of 'RadioSmall' 'Radio' component is '30px'
    And I verify that the 'height' of 'RadioSmall' 'Radio' component is '30px'

# Disabled until 'mode' control functionality is fixed
  # Scenario: Verify that RadioSmall Basic modes
  #   When I set the 'mode' to 'unfocused' for 'RadioSmall' component
  #   Then I verify the 'mode' is 'unfocused' for 'RadioSmall' 'Radio'
  #   And I set the 'mode' to 'disabled' for 'Radio' component
  #   And I verify the 'mode' is 'disabled' for 'RadioSmall' 'Radio'
    
  Scenario: Verify that RadioSmall Basic checked state
    When I set the 'checked' to 'true' for 'RadioSmall' component
    Then I verify that the 'opacity' of 'RadioSmall' 'Knob' component is '1'
    And I verify that the 'display' of 'RadioSmall' 'Knob' component is 'block'
    And I set the 'checked' to 'false' for 'RadioSmall' component
    And I verify that the 'opacity' of 'RadioSmall' 'Knob' component is '0'
    And I verify that the 'display' of 'RadioSmall' 'Knob' component is 'none'
