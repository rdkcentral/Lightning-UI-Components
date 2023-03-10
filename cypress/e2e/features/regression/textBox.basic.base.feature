# @regression @textBox @2113158

# There may be failures in Concourse until https://ccp.sys.comcast.net/browse/LUI-660
# and https://ccp.sys.comcast.net/browse/LUI-657 are completed

Feature: LUI TextBox Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'TextBox' 'Basic' with 'Base' theme

  Scenario: Verify the default controls and that the TextBox Basic is displayed
    Then I verify that the 'TextBox' 'Basic' component is displayed
    And I verify that 'TextBox' 'Basic' 'Text' has property:value 'verticalAlign:middle'
    And I verify that the 'TextBox' 'Marquee' component does not exist in DOM

  Scenario: Verify the dimensions of the TextBox Basic Element
    Then I verify that the 'TextBox' 'BasicText' component is displayed
    And I verify that the 'width' of 'TextBox' 'BasicText' component is '564px'
    And I verify that the 'height' of 'TextBox' 'BasicText' component is '120px'

  Scenario: Verify the TextBox Basic content control
    When I set the 'content' to 'LUI Test' for 'TextBox' component
    Then I verify that the 'TextBox' 'BasicText' component is displayed
    And I verify that 'TextBox' 'Basic Text' has 'text' 'LUI Test'

  Scenario: Verify the TextBox Basic marquee control
    When I set the 'marquee' to 'true' for 'TextBox' component
    Then I verify that the 'TextBox' 'Marquee' component is displayed
    And I set the 'marquee' to 'false' for 'TextBox' component
    And I verify that the 'TextBox' 'Marquee' component does not exist in DOM
