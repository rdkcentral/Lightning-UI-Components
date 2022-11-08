@sanity @card @title @2111101

Feature: LUI Card Title Component

  Background:
    Given I launch the LUI app
    And I navigate to 'CardTitle' 'Card' with 'Base' theme

   Scenario: Verify that Card Title is displayed
    Then I verify that the 'CardTitle' 'Card' component is displayed

   Scenario: Verify the dimensions of the Card Title Element
    Then I verify that the 'width' of 'CardTitle' 'Card' component is '253.333px'
    And I verify that the 'height' of 'CardTitle' 'Card' component is '386px'

# Disabled until 'mode' control functionality is fixed
  #  Scenario: Verify the Card Title mode control
  # 	When I set the 'mode' to 'unfocused' for 'CardTitle' component
  #   Then I verify the 'mode' is 'unfocused' for 'CardTitle' 'Card'
  #   And I set the 'mode' to 'focused' for 'CardTitle' component
  #   And I verify the 'mode' is 'focused' for 'CardTitle' 'Card'
  #   And I set the 'mode' to 'disabled' for 'CardTitle' component
  #   And I verify the 'mode' is 'disabled' for 'CardTitle' 'Card'

  Scenario: Verify that Card Title title can be set
    When I set the 'title' to 'LUI Test' for 'CardTitle' component
    Then I verify that the 'CardTitle' 'Card' component is displayed
    And I verify that 'CardTitle' 'Card' 'Title' has text 'LUI Test'
    
  Scenario: Verify that Card Title description can be set
    When I set the 'description' to 'LUI Test' for 'CardTitle' component
    Then I verify that the 'CardTitle' 'Card' component is displayed
    And I verify that 'CardTitle' 'Card' 'Description' has text 'LUI Test'