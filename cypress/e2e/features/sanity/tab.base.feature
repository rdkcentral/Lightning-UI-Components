@sanity @tab @basic @2113345
Feature: LUI Tab Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Tab' with 'Base' theme
    
  Scenario: Verify that Tab is displayed
    Then I verify that the 'Tab' component is displayed
    
  Scenario: Verify the dimensions of the Tab Basic Element
    Then I verify each 'Row Elements' has width of 154.5 and height of 64 on 'Tab' page

  Scenario Outline: Verify that Tab Basic modes
    When I set the 'mode' to '<modeValue>' for 'Tab' component
    Then I verify the mode is '<modeValue>' for 'Tab'
   Examples:
     | modeValue |
     | unfocused |
     | focused   |
     | selected  |
     | disabled  |

   Scenario: Verify the Tab icon state
    When I set the 'icon' to 'True' for 'Tab' component
    Then I verify that the 'Tab' icon state is 'True'
    And I set the 'icon' to 'False' for 'Tab' component
    And I verify that the 'Tab' icon state is 'False' 
    
  Scenario: Verify that Tab Title can be set
    When I set the 'title' to 'LUI TEST' for 'Tab' component
    Then I verify that the 'Title' component on the 'Tab' page has text 'LUI TEST'