@sanity @badge @2108213 @icon

Feature: LUI Badge Text component

  Background:
    Given I launch the LUI app
    And I navigate to 'Badge' 'Text' with 'Base' theme

  Scenario: Verify that Badge Text is displayed
    Then I verify that the 'Badge' component is displayed

  Scenario: Verify the dimensions of the Badge Text Element
    Then I verify that the 'width' of 'Badge' component is '42.5px'
    And I verify that the 'height' of 'Badge' component is '32px'

  Scenario: Verify that Badge Text can be set
    When I set the 'title' to 'LUI Test' for 'Badge' component
    Then I verify that the 'Badge' component is displayed
    And I verify that 'Badge' 'Badge' 'Title' has text 'LUI Test'
