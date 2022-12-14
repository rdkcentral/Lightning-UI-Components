@sanity @badge @2105443 @textICON

Feature: LUI Badge Text With Icon component

  Background:
    Given I launch the LUI app
    And I navigate to 'Badge' 'Text With Icon' with 'Base' theme

  Scenario: Verify that Badge Text With Icon is displayed
    Then I verify that the 'Badge' component is displayed

  Scenario: Verify the dimensions of the Badge Text With Icon Element
    Then I verify that the 'width' of 'Badge' component is '82.5px'
    And I verify that the 'height' of 'Badge' component is '32px'

  Scenario: Verify that Badge Icon SVG alignment can be set
    When I set the 'iconAlign' to 'right' for 'Badge' component
    Then I verify that 'Badge' 'iconAlign' state is 'right'
    And I set the 'iconAlign' to 'left' for 'Badge' component
    And I verify that 'Badge' 'iconAlign' state is 'left'

  Scenario: Verify that Badge Text With Icon can be set
    When I set the 'title' to 'LUI Test' for 'Badge' component
    Then I verify that the 'Badge' component is displayed
    And I verify that 'Badge' 'Badge Title' has text 'LUI Test'     

  Scenario: Verify that Badge Text With Icon alignment can be set while text is set
    When I set the 'iconAlign' to 'right' for 'Badge' component
    Then I verify that 'Badge' 'iconAlign' state is 'right'
    And I set the 'title' to 'LUI Test Right' for 'Badge' component
    And I verify that 'Badge' 'Badge Title' has text 'LUI Test Right'   
    And I set the 'iconAlign' to 'left' for 'Badge' component
    And I verify that 'Badge' 'iconAlign' state is 'left'
    And I set the 'title' to 'LUI Test Left' for 'Badge' component
    And I verify that 'Badge' 'Badge Title' has text 'LUI Test Left'
