@sanity @badge @2102481 @iconPNG

Feature: LUI Badge Icon PNG component

  Background:
    Given I launch the LUI app
    And I navigate to 'Badge' 'Icon PNG' with 'Base' theme

  Scenario: Verify that Badge Icon PNG is displayed
    Then I verify that the 'Badge' component is displayed

  Scenario: Verify the dimensions of the Badge Icon PNG Element
    Then I verify that the 'width' of 'Badge' component is '52px'
    And I verify that the 'height' of 'Badge' component is '32px'