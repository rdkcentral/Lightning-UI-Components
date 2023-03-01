@regression @tabbar @basic @2113352

Feature: LUI TabBar Basic component

  Background:
    Given I launch the LUI app
    
   Scenario Outline: Verify that TabBar Basic is displayed (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    Then I verify that the 'TabBar' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
    
   Scenario Outline: Verify the dimensions of the TabBar Basic Element (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    Then I verify that the 'width' of 'TabBar' component is '<defaultWidth>'
    And I verify that the 'height' of 'TabBar' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 1760px       | 96.5px        |
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Base    | 1760px       | 40px          |
    
  Scenario Outline: Verify the TabBar Basic layout (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    Then I verify there are <assets> assets per '<element>' on the 'TabBar' page
    @sanity_temp
    Examples:
      | theme   | assets | element      |
      | Xfinity | 5      | Row          |
      | Xfinity | 5      | Tab 1 Row    |
      | Xfinity | 3      | Tab 2 Column |
      | Xfinity | 5      | Tab 3 Row    |
      | Xfinity | 3      | Tab 4 Column |
    @sanity
    Examples:
      | theme   | assets | element      |
      | Base    | 5      | Row          |
      | Base    | 5      | Tab 1 Row    |
      | Base    | 3      | Tab 2 Column |
      | Base    | 5      | Tab 3 Row    |
      | Base    | 3      | Tab 4 Column |

  Scenario Outline: Verify the TabBar Basic button text (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    And I wait 2 seconds for the page to load
    Then I verify that all 'Row Labels' of the 'TabBar' page have text 'Tab'
    And I press 'LEFT' key 2 times
    And I verify that all 'Tab 2 Column Labels' of the 'TabBar' page have text 'Item'
    And I press 'UP' key 3 times
    And I press 'RIGHT' key 2 times
    And I verify that all 'Tab 4 Column Labels' of the 'TabBar' page have text 'Async Item'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the TabBar Basic alphaSelectedTab state (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    And I navigate to tile 1 content  
    Then I verify each tile besides tile 1 have a 'normal' alpha
    And I set the 'alphaSelectedTab' to '<alphaSelectedTabValue>' for 'TabBar' component
    And I navigate to tile 1 content
    And I verify each tile besides tile 1 have a '<alphaValue>' alpha
    @sanity_temp
    Examples:
      | theme   | alphaSelectedTabValue | alphaValue |
      | Xfinity | true                  | lowered    |
      | Xfinity | false                 | normal     |
    @sanity
    Examples:
      | theme   | alphaSelectedTabValue | alphaValue |
      | Base    | true                  | lowered    |
      | Base    | false                 | normal     |

  Scenario Outline: Verify the TabBar Basic collapse state (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    And I set the 'mode' to 'unfocused' for 'TabBar' component
    Then I set the 'collapse' to '<collapseState>' for 'TabBar' component
    And I verify that the 'height' of 'TabBar' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | collapseState | height | 
      | Xfinity | false         | 96.5px |
      | Xfinity | true          | 64.5px | 
    @sanity
    Examples:
      | theme   | collapseState | height |
      | Base    | false         | 104px  | 
      | Base    | true          | 64px   | 

  Scenario Outline: Verify the TabBar Basic wrapSelected state (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    And I wait 2 seconds for the page to load
    And I press 'RIGHT' key 4 times
    Then I verify that the 'TabBar' 'Tab 4 Column' component is displayed
    And I set the 'wrapSelected' to 'true' for 'TabBar' component
    And I wait 2 seconds for the page to load
    And I press 'RIGHT' key 6 times
    And I verify that the 'TabBar' 'Tab 1 Row' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify navigating the TabBar Basic Tabs (<theme> theme)
    When I navigate to 'TabBar' 'Basic' with '<theme>' theme
    And I navigate to the 'next' tile content
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
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
