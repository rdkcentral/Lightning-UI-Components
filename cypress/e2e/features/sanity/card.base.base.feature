@sanity @card @base @2104454

Feature: LUI Card Base Component

  Background:
    Given I launch the LUI app
    And I navigate to 'Card' 'Card' with 'Base' theme

   Scenario: Verify that Card Base is displayed
    Then I verify that the 'Card' 'Card' component is displayed

   Scenario: Verify the dimensions of the Card Base Element
    Then I verify that the 'width' of 'Card' 'Card' component is '253.333px'
    And I verify that the 'height' of 'Card' 'Card' component is '386px'

# Disabled until 'mode' control functionality is fixed
  #  Scenario: Verify the Card Base mode control
  # 	When I set the 'mode' to 'unfocused' for 'Card' component
  #   Then I verify the 'mode' is 'unfocused' for 'Card' 'Card'
  #   And I set the 'mode' to 'focused' for 'Card' component
  #   And I verify the 'mode' is 'focused' for 'Card' 'Card'
  #   And I set the 'mode' to 'disabled' for 'Card' component
  #   And I verify the 'mode' is 'disabled' for 'Card' 'Card'

  Scenario: Verify that Card Base title can be set
    When I set the 'title' to 'LUI Test' for 'Card' component
    Then I verify that the 'Card' 'Card' component is displayed
    And I verify that 'Card' 'Card' 'Title' has text 'LUI Test'