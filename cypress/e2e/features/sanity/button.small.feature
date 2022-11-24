@sanity @buttonSmall @2111084

Feature: LUI Button Small component

  Background:
    Given I launch the LUI app
    And I navigate to 'ButtonSmall' 'Button-Small' with 'Base' theme

  Scenario: Verify that Button Small is displayed
    Then I verify that the 'ButtonSmall' 'ButtonSmall' component is displayed

  # There is a bug for this functionality so this scenario can be automated once that is resolved only.
  #    Scenario: Verify the Button Small modes
  #     When I set the 'mode' to 'unfocused' for 'Button' component
  #     Then I verify the 'mode' is 'unfocused' for 'Button' 'Small'
  #     When I set the 'mode' to 'focused' for 'Button' component
  #     Then I verify the 'mode' is 'focused' for 'Button' 'Samll'
  #     When I set the 'mode' to 'disabled' for 'Button' component
  #     Then I verify the 'mode' is 'disabled' for 'Button' 'Samll'

  Scenario: Verify the Button Small fixed state
    When I verify that the 'width' of 'ButtonSmall' 'ButtonSmall' component is '144px'
    And I set the 'fixed' to 'true' for 'ButtonSmall' component
    And I verify that the 'width' of 'ButtonSmall' 'ButtonSmall' component is '200px'

  Scenario: Verify the Button Small justify content
    Then I verify that the 'ButtonSmall' 'Justify' state is 'center'
    And I set the 'justify' to 'left' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'Justify' state is 'left'
    And I set the 'justify' to 'center' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'Justify' state is 'center'
    And I set the 'justify' to 'right' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'Justify' state is 'right'

  Scenario: Verify the Button Small prefix state
    Then I verify that the 'ButtonSmall' 'prefix' state is 'null'
    And I set the 'prefix' to 'checkbox' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'prefix' state is 'checkbox'
    And I set the 'prefix' to 'null' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'prefix' state is 'null'
    And I set the 'prefix' to 'icon' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'prefix' state is 'icon' 
    And I set the 'prefix' to 'combo' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'prefix' state is 'combo'

  Scenario: Verify the Button Small suffix state
    Then I verify that the 'ButtonSmall' 'suffix' state is 'null'
    And I set the 'suffix' to 'checkbox' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'suffix' state is 'checkbox'
    And I set the 'suffix' to 'null' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'suffix' state is 'null'
    And I set the 'suffix' to 'icon' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'suffix' state is 'icon'
    And I set the 'suffix' to 'combo' for 'ButtonSmall' component
    And I verify that the 'ButtonSmall' 'suffix' state is 'combo'

  Scenario: Verify the Button Small title text can be set
    Then I verify that the 'ButtonSmall' 'ButtonSmall' component is displayed
    And I verify that 'ButtonSmall' 'ButtonSmall' 'Title' has text 'Button'
    And I set the 'title' to 'LUI TEST' for 'ButtonSmall' component
    And I verify that 'ButtonSmall' 'ButtonSmall' 'Title' has text 'LUI TEST'
