@regression @withEditItems @2195166

Feature: LUI With Edit Items component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that With Edit Items is visible (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    Then I verify that the 'WithEditItems' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions and count of the With Edit Items elements (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    Then I verify there are 6 assets per row on the 'WithEditItems' page
    And I verify each 'Row Elements' has width of <defaultWidth> and height of <defaultHeight> on 'WithEditItems' page
    @sanity_temp
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 386.0        | 80.0          |
    Examples:
      | theme | defaultWidth | defaultHeight |
      | Base  | 472.0        | 100.0         |

  Scenario Outline: Verify row layout and spacing (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    Then I verify that elements are horizontally evenly spaced for 'WithEditItems' component
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate displayed text of buttons (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    Then I verify that all 'Buttons labels' of the 'WithEditItems' page have text 'Button'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate buttons navigation (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    Then I verify that the 'Button 1' component on the 'WithEditItems' page is in focus
    And I verify that I am able to navigate to the 'last' element of the 'WithEditItems' 'Row Elements'
    And I verify that I am able to navigate to the 'first' element of the 'WithEditItems' 'Row Elements'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Validate 'edit' mode
    When I navigate to 'WithEditItems' with '<theme>' theme
    Then I verify that 'WithEditItems' 'First Button' has 'text' 'Button 1'
    And I verify that the 'left' of 'WithEditItems' 'Button1' component is '<button1LeftDefaultValue>'
    And I verify that the 'left' of 'WithEditItems' 'Button2' component is '<button2LeftDefaultValue>'
    And I press 'ENTER' key
    And I press 'RIGHT' key 2 times
    And I press 'ENTER' key
    And I verify that the 'left' of 'WithEditItems' 'Button1' component is '<button1LeftValue>'
    And I verify that the 'left' of 'WithEditItems' 'Button2' component is '<button2LeftValue>'
    @sanity_temp
    Examples:
      | theme   | button1LeftDefaultValue | button2LeftDefaultValue | button1LeftValue | button2LeftValue |
      | Xfinity | 0px                     | 410px                   | 820px            | 0px              |
    Examples:
      | theme | button1LeftDefaultValue | button2LeftDefaultValue | button1LeftValue | button2LeftValue |
      | Base  | 0px                     | 492px                   | 984px            | 0px              |

  Scenario Outline: Verify that With Edit Items can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'WithEditItems' component
    Then I verify the mode is '<modeValue>' for 'WithEditItems' 'Row Elements'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    Examples:
      | theme | modeValue |
      | Base  | unfocused |
      | Base  | focused   |
      | Base  | disabled  |

  Scenario Outline: Verify the With Edit Items 'always scroll' toggle (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    Then I verify that the 'WithEditItems' 'Button 4' component is not displayed
    And I set the 'alwaysScroll' to 'true' for 'WithEditItems' component
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'WithEditItems' 'Button 5' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the With Edit Items 'lazy scroll' toggle (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    And I press 'RIGHT' key 1 times
    And I wait 0.5 seconds for the page to load
    Then I verify that the 'WithEditItems' '<Button>' component is displayed
    And I set the 'lazyScroll' to 'true' for 'WithEditItems' component
    And I press 'RIGHT' key 1 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'WithEditItems' '<Button>' component is not displayed
    @sanity_temp
    Examples:
      | theme   | Button   |
      | Xfinity | Button 6 |
    Examples:
      | theme | Button   |
      | Base  | Button 5 |

  Scenario Outline: Verify the With Edit Items 'never scroll' toggle (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    Then I verify that the 'WithEditItems' 'Button 6' component is displayed
    And I set the 'neverScroll' to 'true' for 'WithEditItems' component
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'WithEditItems' 'Button 6' component is not displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the the 'scroll index' of the With Edit Items element can be changed (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    Then I verify that the 'WithEditItems' 'Button 1' component is not displayed
    And I verify that the 'WithEditItems' 'Button 6' component is displayed
    And I set the 'scrollIndex' to '5' for 'WithEditItems' component
    And I press 'RIGHT' key 5 times
    And I wait 0.5 seconds for the page to load
    And I verify that the 'WithEditItems' 'Button 1' component is displayed
    And I verify that the 'WithEditItems' 'Button 6' component is not displayed
    And I set the 'scrollIndex' to '-5' for 'WithEditItems' component
    And I verify that the 'WithEditItems' 'Button 1' component is not displayed
    And I verify that the 'WithEditItems' 'Button 6' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify that With Edit Items default values (<theme> theme)
    When I navigate to 'WithEditItems' with '<theme>' theme
    Then I verify the mode is 'focused' for 'WithEditItems' 'Row Elements'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |
