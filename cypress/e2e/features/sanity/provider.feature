@regression @provider @2188342

Feature: LUI Provider component

  Background:
    Given I launch the LUI app
  
  Scenario Outline: Verify that the Provider component is displayed (<theme> theme)
    When I navigate to 'Provider' with '<theme>' theme
    Then I verify that the 'Provider' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the Provider component (<theme> theme)
    When I navigate to 'Provider' with '<theme>' theme
    Then I verify that the 'width' of 'Provider' 'Marquee' component is '<width>'
    And I verify that the 'height' of 'Provider' 'Marquee' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 216px | 48px   |
    Examples:
      | theme | width | height |
      | Base  | 190px | 40px   |
  
  Scenario Outline: Verify the count of the Provider elements (<theme> theme)
    When I navigate to 'Provider' with '<theme>' theme
    Then I verify there are 4 assets per 'row' on the 'Provider' page
    And I set the 'visibleCount' to '<count>' for 'Provider' component
    And I verify there are <expectedCount> assets per 'row' on the 'Provider' page
    @sanity_temp
    Examples:
      | theme   | count | expectedCount |
      | Xfinity | 5     | 6             |
      | Xfinity | 8     | 9             |
    Examples:
      | theme | count | expectedCount |
      | Base  | 5     | 6             |
      | Base  | 8     | 9             |

  @skip
  #Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-697
  Scenario Outline: Verify the Provider 'counterText' control (<theme> theme)
    When I navigate to 'Provider' with '<theme>' theme
    Then I verify that 'Provider' 'Text' has 'text' '+7'
    And I set the 'counterText' to '...' for 'Provider' component
    And I verify that 'Provider' 'Text' has 'text' '...'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  @skip
  #Skipped due to this ticket - https://ccp.sys.comcast.net/browse/LUI-697 
  Scenario Outline: Verify the Provider 'disableRadius' control (<theme> theme)
    When I navigate to 'Provider' with '<theme>' theme
    Then I verify that the 'disableRadius' control is set to 'false' for the 'Provider' page 

    # Once the ticket blocking this outline is resolved...
    # These steps need to be implemented

    #And I set the 'disableRadius' to '<control>' for 'Provider' component
    #And I verify that the 'disableRadius' control is set to '<control>' for the 'Provider' page
    @sanity_temp
    Examples:
      | theme   | control |
      | Xfinity | true    |
      | Xfinity | false   |
    Examples:
      | theme | control |
      | Base  | true    |
      | Base  | false   |

  Scenario Outline: Verify the Provider 'visibleCount' control (<theme> theme)
    When I navigate to 'Provider' with '<theme>' theme
    Then I verify that 'Provider' 'Text' has 'text' '+7'
    And I set the 'visibleCount' to '<count>' for 'Provider' component
    And I verify that 'Provider' 'Text' has 'text' '<expectedCount>'
    @sanity_temp
    Examples:
      | theme   | count | expectedCount |
      | Xfinity | 5     | +5            |
      | Xfinity | 6     | +4            |
      | Xfinity | 7     | +3            |
    Examples:
      | theme | count | expectedCount |
      | Base  | 5     | +5            |
      | Base  | 6     | +4            |
      | Base  | 7     | +3            |
