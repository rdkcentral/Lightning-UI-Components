@sanity @regression @tabbar @basic @2113352

Feature: LUI TabBar Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'TabBar' 'Basic' with 'Base' theme
    
   Scenario: Verify that TabBar Basic is displayed
    Then I verify that the 'TabBar' component is displayed
    
   Scenario: Verify the dimensions of the TabBar Basic Element
    Then I verify that the 'width' of 'TabBar' component is '1760px'
    And I verify that the 'height' of 'TabBar' component is '40px'
    
  Scenario Outline: Verify the TabBar Basic layout
    Then I verify there are <assets> assets per '<element>' on the 'TabBar' page
    Examples:
      | assets | element      |
      |   5    | Row          |
      |   5    | Tab 1 Row    |
      |   3    | Tab 2 Column |
      |   5    | Tab 3 Row    |
      |   3    | Tab 4 Column |

  Scenario: Verify the TabBar Basic button text
    When I wait 2 seconds for the page to load
    Then I verify that all 'Row Labels' of the 'TabBar' page have text 'Tab'
    And I press 'LEFT' key 2 times
    And I verify that all 'Tab 2 Column Labels' of the 'TabBar' page have text 'Item'
    And I press 'UP' key 3 times
    And I press 'RIGHT' key 2 times
    And I verify that all 'Tab 4 Column Labels' of the 'TabBar' page have text 'Async Item'
    
  Scenario: Verify the TabBar Basic alphaSelectedTab state
    # When I navigate to tile 1 content               // Fails due to LUI-628 https://ccp.sys.comcast.net/browse/LUI-628
    # Then I verify each tile besides tile 1 have a 'normal' alpha
    When I set the 'alphaSelectedTab' to 'true' for 'TabBar' component
    Then I navigate to tile 1 content
    And I verify each tile besides tile 1 have a 'lowered' alpha
    And I set the 'alphaSelectedTab' to 'false' for 'TabBar' component
    And I navigate to tile 1 content
    And I verify each tile besides tile 1 have a 'normal' alpha
 
  Scenario: Verify the TabBar Basic collapse state
    When I set the 'mode' to 'unfocused' for 'TabBar' component
    Then I verify that the 'height' of 'TabBar' component is '104px'
    And I set the 'collapse' to 'true' for 'TabBar' component
    And I verify that the 'height' of 'TabBar' component is '64px'

  Scenario: Verify the TabBar Basic wrapSelected state
    When I wait 2 seconds for the page to load
    And I press 'RIGHT' key 4 times
    Then I verify that the 'TabBar' 'Tab 4 Column' component is displayed
    And I set the 'wrapSelected' to 'true' for 'TabBar' component
    And I wait 2 seconds for the page to load
    And I press 'RIGHT' key 6 times
    And I verify that the 'TabBar' 'Tab 1 Row' component is displayed

  Scenario: Verify navigating the TabBar Basic Tabs
    When I navigate to the 'next' tile content
    Then I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Tab 1 Row Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Tab 1 Row Content'
    And I navigate to the 'next' tile content
    And I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Tab 2 Column Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Tab 2 Column Content'
    And I navigate to the 'next' tile content
    And I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Tab 3 Row Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Tab 3 Row Content'
    And I navigate to the 'next' tile content
    And I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Tab 4 Column Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Tab 4 Column Content'