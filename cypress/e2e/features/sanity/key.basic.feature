@regression @key @basic @2180483

Feature: LUI Key Basic component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Key Basic component is displayed (<theme> theme)
    When I navigate to 'Key' 'Basic' with '<theme>' theme
    Then I verify that the 'Key' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify that Key Basic can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Key' 'Basic' with '<theme>' theme
    Then I verify the mode is 'focused' for 'Key'
    And  I set the 'mode' to '<modeValue>' for 'Key' component
    And I verify the mode is '<modeValue>' for 'Key'
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
      
  Scenario Outline: Verify the size control - height (<theme> theme)
    When I navigate to 'Key' 'Basic' with '<theme>' theme
    Then I verify that the 'height' of 'Key' component is '<defaultHeight>px'
    And I verify that the 'width' of 'Key' component is '<defaultWidth>px'
    And I set the 'size' to '<size>' for 'Key' component
    And I verify that the 'height' of 'Key' component is '<keyHeight>px'
    And I verify that the 'width' of 'Key' component is '<keyWidth>px'
    @sanity_temp
    Examples:
      | theme   | size | keyHeight | defaultHeight | keyWidth | defaultWidth |
      | Xfinity | sm   | 72        | 72            | 56       | 56           |
      | Xfinity | md   | 72        | 72            | 120      | 56           |
      | Xfinity | lg   | 72        | 72            | 184      | 56           |
      | Xfinity | xl   | 72        | 72            | 376      | 56           |
    Examples:
      | theme | size | keyHeight | defaultHeight | keyWidth | defaultWidth |
      | Base  | sm   | 90        | 90            | 70       | 70           |
      | Base  | md   | 90        | 90            | 150      | 70           |
      | Base  | lg   | 90        | 90            | 230      | 70           |
      | Base  | xl   | 90        | 90            | 470      | 70           |

  Scenario Outline: Verify the Key 'title' control (<theme> theme)
    When I navigate to 'Key' 'Basic' with '<theme>' theme
    Then I verify that 'Key' 'title' has 'text' 'A'
    And I set the 'title' to '<exampleTitle>' for 'Key' component
    And I verify that 'Key' 'title' has 'text' '<expectedTitle>'
    @sanity_temp
    Examples:
      | theme   | exampleTitle | expectedTitle |
      | Xfinity | C            | C             |
      | Xfinity | TEST         | TEST          |
    # | Xfinity | !            | !             |
    # | Xfinity | %            | %             |
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683
    Examples:
      | theme | exampleTitle | expectedTitle |
      | Base  | C            | C             |
      | Base  | TEST         | TEST          |
    # | Base  | !            | !             |
    # | Base  | %            | %             |
    # Skipped due to this bug - https://ccp.sys.comcast.net/browse/LUI-683
