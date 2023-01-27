@regression @tabbar @customtabs @2111468

Feature: LUI TabBar Custom Tabs component

  Background:
    Given I launch the LUI app
    And I navigate to 'TabBar' 'Custom Tabs' with 'Base' theme
    
   Scenario: Verify that TabBar Custom Tabs is displayed
    Then I verify that the 'TabBar' 'Custom Tabs' component is displayed
    
   Scenario: Verify the dimensions of the TabBar Custom Tabs Element
    Then I verify that the 'width' of 'TabBar' 'Custom Tabs' component is '1760px'
    And I verify that the 'height' of 'TabBar' 'Custom Tabs' component is '140px'
    
  Scenario Outline: Verify the TabBar Custom Tabs layout
    Then I verify there are <assets> assets per '<element>' on the 'TabBar' page
    Examples:
      | assets | element             |
      |   5    | Custom Tabs Row     |
      |   5    | Custom Tab 1 Row    |
      |   3    | Custom Tab 2 Column |
      |   5    | Custom Tab 3 Row    |
      |   3    | Custom Tab 4 Column |
    
  Scenario: Verify the TabBar Custom Tabs alphaSelectedTab state
    # When I navigate to tile 1 content               // Fails due to LUI-628 https://ccp.sys.comcast.net/browse/LUI-628
    # Then I verify each tile besides tile 1 have a 'normal' alpha
    When I set the 'alphaSelectedTab' to 'true' for 'TabBar' component
    Then I navigate to tile 1 content
    And I verify each tile besides tile 1 have a 'lowered' alpha
    And I set the 'alphaSelectedTab' to 'false' for 'TabBar' component
    And I navigate to tile 1 content
    And I verify each tile besides tile 1 have a 'normal' alpha
 
  Scenario: Verify the TabBar Custom Tabs collapse state
    When I set the 'mode' to 'unfocused' for 'TabBar' component
    Then I verify that the 'height' of 'TabBar' 'Custom Tabs' component is '140px'
    And I set the 'collapse' to 'true' for 'TabBar' component
    And I verify that the 'height' of 'TabBar' 'Custom Tabs' component is '100px'

  Scenario: Verify the TabBar Custom Tabs contentSpacing state
    When I press 'RIGHT' key
    Then I verify that the 'top' of 'TabBar' 'Custom Tabs Content Switcher' component is '140px'
    And I set the 'contentSpacing' to '100' for 'TabBar' component
    And I press 'RIGHT' key 3 times
    And I verify that the 'top' of 'TabBar' 'Custom Tabs Content Switcher' component is '140px'

  # https://ccp.sys.comcast.net/browse/LUI-627
  # Skipping the test because of the bug
  @skip
  Scenario: Verify the TabBar Custom Tabs itemSpacing state
    When I press 'RIGHT' key
    Then I verify that the spacing between the 'Custom Tab 1 Row' elements of 'TabBar' component is '13'
    And I press 'RIGHT' key 2 times
    And I verify that the spacing between the 'Custom Tab 3 Row' elements of 'TabBar' component is '13'
    And I set the 'itemSpacing' to '40' for 'TabBar' component
    And I press 'RIGHT' key
    And I verify that the spacing between the 'Custom Tab 1 Row' elements of 'TabBar' component is '40'
    And I press 'RIGHT' key 2 times
    And I verify that the spacing between the 'Custom Tab 3 Row' elements of 'TabBar' component is '40'

  Scenario: Verify the TabBar Custom Tabs wrapSelected state
    When I wait 2 seconds for the page to load
    And I press 'RIGHT' key 4 times
    Then I verify that the 'TabBar' 'Custom Tab 4 Column' component is displayed
    And I set the 'wrapSelected' to 'true' for 'TabBar' component
    And I wait 2 seconds for the page to load
    And I press 'RIGHT' key 6 times
    And I verify that the 'TabBar' 'Custom Tab 1 Row' component is displayed

  Scenario: Verify navigating the TabBar Custom Tabs
    When I navigate to the 'next' tile content
    Then I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Custom Tab 1 Row Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Custom Tab 1 Row Content'
    And I navigate to the 'next' tile content
    And I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Custom Tab 2 Column Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Custom Tab 2 Column Content'
    And I navigate to the 'next' tile content
    And I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Custom Tab 3 Row Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Custom Tab 3 Row Content'
    And I navigate to the 'next' tile content
    And I verify that I am able to navigate to the 'last' element of the 'TabBar' 'Custom Tab 4 Column Content'
    And I verify that I am able to navigate to the 'first' element of the 'TabBar' 'Custom Tab 4 Column Content'
