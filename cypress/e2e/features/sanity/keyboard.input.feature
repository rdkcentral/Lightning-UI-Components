@regression @keyboard @input @2180090

Feature: LUI Keyboard Input component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that Input component is displayed (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    Then I verify that the 'Input' component is displayed
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify that Input can be set to <modeValue> mode (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Input' component
    Then I verify the mode is '<modeValue>' for 'Input'
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

  Scenario Outline: Verify the dimensions of the Input element (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    Then I verify that the 'width' of 'Input' component is '<defaultWidth>'
    And I verify that the 'height' of 'Input' component is '<defaultHeight>'
    @sanity_temp
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 390px        | 80px          |
    Examples:
      | theme | defaultWidth | defaultHeight |
      | Base  | 390px        | 100px         |

  Scenario Outline: Verify the 'eyebrow' control (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    And I set the 'eyebrow' to 'LUI TEST' for 'Input' component
    Then I verify that 'Input' 'eyebrow' has 'text' 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the 'helpText' control (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    And I set the 'helpText' to 'LUI TEST' for 'Input' component
    Then I verify that 'Input' 'helpText' has 'text' 'LUI TEST'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  #Have to add step for disabled mode for below Scenario once this bug LUI-716 is resolved.
  Scenario Outline: Verify the 'listening' control (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    And I set the 'mode' to '<modeValue>' for 'Input' component
    #by default the input field does not accept any input
    Then I verify that 'Input' 'Listening' is 'false'
    And I set the 'listening' to 'true' for 'Input' component
    And I press 'TEST' key
    And I verify that 'Input' 'inputField' has 'text' 'TEST'
    @sanity_temp
    Examples:
      | theme   | modeValue |
      | Xfinity | focused   |
      | Xfinity | unfocused |
    Examples:
      | theme | modeValue |
      | Base  | focused   |
      | Base  | unfocused |

  Scenario Outline: Verify the 'password' control (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    And I set the 'listening' to 'true' for 'Input' component
    And I press 'TEST' key
    Then I verify that 'Input' 'input field' has 'text' 'TEST'
    And I set the 'password' to 'true' for 'Input' component
    And I press 'TEST' key
    And I verify that 'Input' 'input field' has 'text' '••••'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the prefix control (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    Then I verify that the 'width' of 'Input' 'Prefix' component is '0px'
    And I set the 'prefix' to '<prefixType>' for 'Input' component
    And I verify that the 'width' of 'Input' 'Prefix' component is '<width>'
    @sanity_temp
    Examples:
      | theme   | prefixType | width |
      | Xfinity | null       | 0px   |
      | Xfinity | icon       | 32px  |
    Examples:
      | theme | prefixType | width |
      | Base  | null       | 0px   |
      | Base  | icon       | 32px  |

  Scenario Outline: Verify the suffix control (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    Then I verify that the 'width' of 'Input' 'Suffix' component is '0px'
    And I set the 'suffix' to '<suffixType>' for 'Input' component
    And I verify that the 'width' of 'Input' 'Suffix' component is '<width>'
    @sanity_temp
    Examples:
      | theme   | suffixType | width |
      | Xfinity | null       | 0px   |
      | Xfinity | icon       | 350px |
      | Xfinity | eye        | 348px |
      | Xfinity | eyeHide    | 348px |
    Examples:
      | theme | suffixType | width |
      | Base  | null       | 0px   |
      | Base  | icon       | 332px |
      | Base  | eye        | 330px |
      | Base  | eyeHide    | 330px |

  #Default Values for <eyebrow,helpText,listening,mask,password,prefix,suffix> are undefined so could not validate them
  Scenario Outline: Verify that Input default values (<theme> theme)
    When I navigate to 'Input' with '<theme>' theme
    Then I verify the mode is 'focused' for 'Input'
    @sanity_temp
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |
