@regression @withAnnouncer @basic @2191177

Feature: LUI WithAnnouncer Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that With Announcer Basic element is visible (<theme> theme)
    When I navigate to 'WithAnnouncer' 'Basic' with '<theme>' theme
    Then I verify that the 'WithAnnouncer' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify the dimensions and count of the With Announcer Basic elements (<theme> theme)
    When I navigate to 'WithAnnouncer' 'Basic' with '<theme>' theme
    Then I verify there are 3 assets per 'Row 1' on the 'WithAnnouncer' page
    And I verify there are 3 assets per 'Row 2' on the 'WithAnnouncer' page
    And I verify there are 3 assets per 'Row 3' on the 'WithAnnouncer' page
    And I verify that there are 3 'Rows' on the 'WithAnnouncer' page
    And I verify each 'Row Button' has width of <width> and height of <height> on 'WithAnnouncer' page
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 386   | 80     |
    @sanity
    Examples:
      | theme   | width | height |
      | Base    | 472   | 100    |

  Scenario Outline: Validate displayed text of buttons - <element> - <text> (<theme> theme)
    When I navigate to 'WithAnnouncer' 'Basic' with '<theme>' theme
    Then I verify that all 'Buttonlabels' of the 'WithAnnouncer' page have text 'Button'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Verify row layout and spacing (<theme> theme)
    When I navigate to 'WithAnnouncer' 'Basic' with '<theme>' theme
    Then I verify that elements are horizontally evenly spaced for 'WithAnnouncer' component
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |

  Scenario Outline: Validate navigating the buttons (<theme> theme)
    When I navigate to 'WithAnnouncer' 'Basic' with '<theme>' theme
    Then I verify that I am able to navigate to the 'last' element of the 'WithAnnouncer' 'Row 1 Elements'
    And I verify that I am able to navigate to the 'first' element of the 'WithAnnouncer' 'Row 1 Elements'
    And I press 'DOWN' key
    And I verify that I am able to navigate to the 'last' element of the 'WithAnnouncer' 'Row 2 Elements'
    And I verify that I am able to navigate to the 'first' element of the 'WithAnnouncer' 'Row 2 Elements'
    And I press 'DOWN' key
    And I verify that I am able to navigate to the 'last' element of the 'WithAnnouncer' 'Row 3 Elements'
    And I verify that I am able to navigate to the 'first' element of the 'WithAnnouncer' 'Row 3 Elements'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme   |
      | Base    |
