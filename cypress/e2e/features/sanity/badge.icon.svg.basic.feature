@sanity @badge @2102480 @iconSVG

Feature: LUI Badge Icon SVG component

  Background:
    Given I launch the LUI app
    And I navigate to 'Badge' 'Icon SVG' with 'Base' theme

  Scenario: Verify that Badge Icon SVG is displayed
    Then I verify that the 'Badge' component is displayed

  Scenario: Verify the dimensions of the Badge Icon SVG Element
    Then I verify that the 'width' of 'Badge' component is '74.5px'
    And I verify that the 'height' of 'Badge' component is '32px'

  Scenario: Verify that Badge Icon SVG alignment can be set
    When I set the 'iconAlign' to 'right' for 'Badge' component
    Then I verify that 'Badge' 'iconAlign' state is 'right'
    And I set the 'iconAlign' to 'left' for 'Badge' component
    And I verify that 'Badge' 'iconAlign' state is 'left'
