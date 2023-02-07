@regression @listItem @2136894

Feature: LUI ListItem Component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that ListItem component is displayed (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    Then I verify that the 'ListItem' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the ListItem element (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    Then I verify that the 'width' of 'ListItem' component is '<width>'
    And I verify that the 'height' of 'ListItem' component is '<height>'
    @sanity_temp
    Examples:
      | theme   | width | height |
      | Xfinity | 386px | 96px   |
    @sanity
    Examples:
      | theme | width | height |
      | Base  | 472px | 120px  |

  Scenario Outline: Verify default values of ListItem controls (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    Then I verify that 'ListItem' 'Description' has 'text' 'Description'
    And I verify that 'null' 'prefix' is added to 'ListItem'
    And I verify that 'null' 'prefixLogo' is added to 'ListItem'
    And I verify that 'null' 'suffix' is added to 'ListItem'
    And I verify that 'null' 'suffixLogo' is added to 'ListItem'
    And I verify that 'ListItem' 'Title' has 'text' 'List Item'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify that ListItem can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'ListItem' component
    Then I verify the mode is '<modeValue>' for 'ListItem'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | unfocused |
      | Xfinity | focused   |
      | Xfinity | disabled  |
    @sanity
    Examples:
      | theme | modeValue |
      | Base  | unfocused |
      | Base  | focused   |
      | Base  | disabled  |

  Scenario Outline: Verify that ListItem description can be set (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'description' to 'LUI Test' for 'ListItem' component
    Then I verify that the 'ListItem' component is displayed
    And I verify that 'ListItem' 'Description' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the ListItem prefix control (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'prefix' to '<prefixValue>' for 'ListItem' component
    Then I verify that '<prefixValue>' 'prefix' is added to 'ListItem'
    @sanity_temp
    Examples:
      | theme   | prefixValue |
      | Xfinity | toggle      |
      | Xfinity | radio       |
      | Xfinity | checkbox    |
      | Xfinity | null        |
    @sanity
    Examples:
      | theme | prefixValue |
      | Base  | toggle      |
      | Base  | radio       |
      | Base  | checkbox    |
      | Base  | null        |

  Scenario Outline: Verify the ListItem prefixLogo control (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'prefixLogo' to '<prefixLogo>' for 'ListItem' component
    Then I verify that '<prefixLogo>' 'prefixLogo' is added to 'ListItem'
    @sanity_temp
    Examples:
      | theme   | prefixLogo |
      | Xfinity | xfinity    |
      | Xfinity | none       |
    @sanity
    Examples:
      | theme | prefixLogo |
      | Base  | xfinity    |
      | Base  | none       |

  Scenario Outline: Verify the ListItem shouldCollapse control (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'mode' to 'unfocused' for 'ListItem' component
    And I set the 'shouldCollapse' to 'true' for 'ListItem' component
    Then I verify that the 'ListItem' 'Description' component does not exist in DOM
    And I set the 'shouldCollapse' to 'false' for 'ListItem' component
    And I verify that the 'ListItem' 'Description' component is displayed
    And I verify that 'ListItem' 'Description' has 'text' 'Description'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the ListItem suffix control (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'suffix' to '<suffixValue>' for 'ListItem' component
    Then I verify that '<suffixValue>' 'suffix' is added to 'ListItem'
    @sanity_temp
    Examples:
      | theme   | suffixValue |
      | Xfinity | toggle      |
      | Xfinity | radio       |
      | Xfinity | checkbox    |
      | Xfinity | null        |
    @sanity
    Examples:
      | theme | suffixValue |
      | Base  | toggle      |
      | Base  | radio       |
      | Base  | checkbox    |
      | Base  | null        |

  Scenario Outline: Verify the ListItem suffixLogo control (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'suffixLogo' to '<suffixLogo>' for 'ListItem' component
    Then I verify that '<suffixLogo>' 'suffixLogo' is added to 'ListItem'
    @sanity_temp
    Examples:
      | theme   | suffixLogo |
      | Xfinity | xfinity    |
      | Xfinity | none       |
    @sanity
    Examples:
      | theme | suffixLogo |
      | Base  | xfinity    |
      | Base  | none       |

  Scenario Outline: Verify that ListItem title can be set (<theme> theme)
    When I navigate to 'ListItem' with '<theme>' theme
    And I set the 'title' to 'LUI Test' for 'ListItem' component
    Then I verify that 'ListItem' 'Title' has 'text' 'LUI Test'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    @sanity
    Examples:
      | theme |
      | Base  |
