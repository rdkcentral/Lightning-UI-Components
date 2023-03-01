@regression @notification @2188912

Feature: LUI Notification component

  Background:
    Given I launch the LUI app

  Scenario Outline: Verify that the Notification component is displayed (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that the 'Notification' component is displayed
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme |
      | Base  |

  Scenario Outline: Verify the dimensions of the Notification component (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that the 'width' of 'Notification' component is '<defaultWidth>'
    And I verify that the 'height' of 'Notification' component is '<defaultHeight>'
    @sanity
    Examples:
      | theme   | defaultWidth | defaultHeight |
      | Xfinity | 522.667px    | 154.5px       |
    Examples:
      | theme | defaultWidth | defaultHeight |
      | Base  | 636px        | 183px         |

  Scenario Outline: Verify the Notification 'actionArea' control (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that 'Notification' 'ActionArea' has 'text' 'Details'
    And I set the 'actionArea' to 'LUI TEST' for 'Notification' component
    And I verify that 'Notification' 'Action Area' has 'text' 'LUI TEST'
    And I set the 'actionArea' to '' for 'Notification' component
    And I verify that the 'Notification' 'Action Area' component does not exist in DOM
    And I set the 'actionArea' to '!@$%^&*(){}[]:;<>?,-./~' for 'Notification' component
    And I verify that 'Notification' 'Action Area' has 'text' 'Details'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Xfinity |

  Scenario Outline: Verify the Notification 'description' control (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that 'Notification' 'Description' has 'text' 'Description'
    And I set the 'description' to 'LUI TEST' for 'Notification' component
    And I verify that 'Notification' 'Description' has 'text' 'LUI TEST'
    And I set the 'description' to '' for 'Notification' component
    And I verify that the 'Notification' 'Description' component does not exist in DOM
    And I set the 'description' to '!@$%^&*(){}[]:;<>?,-./~' for 'Notification' component
    And I verify that 'Notification' 'Description' has 'text' 'Description'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Xfinity |

  Scenario Outline: Verify the Notification 'icon' control (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that the 'src' attribute of 'Notification' 'Icon' contains 'notification_64'
    And I set the 'icon' to '<iconState>' for 'Notification' component
    And I verify that the 'src' attribute of 'Notification' 'Icon' contains '<iconValue>'
    @sanity
    Examples:
      | theme   | iconState | iconValue          |
      | Xfinity | lightning | ic_lightning_white |
      | Xfinity | none      | notification_64    |
    Examples:
      | theme | iconState | iconValue          |
      | Base  | lightning | ic_lightning_white |
      | Base  | none      | notification_64    |

  Scenario Outline: Verify the Notification 'logo' control (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that the 'src' attribute of 'Notification' 'Icon' contains 'notification_64'
    And I set the 'logo' to '<logoState>' for 'Notification' component
    And I verify that the 'src' attribute of 'Notification' 'Icon' contains '<logoValue>'
    @sanity
    Examples:
      | theme   | logoState | logoValue             |
      | Xfinity | xfinity   | Xfinity-Provider-Logo |
      | Xfinity | none      | notification_64       |
    Examples:
      | theme | logoState | logoValue             |
      | Base  | xfinity   | Xfinity-Provider-Logo |
      | Base  | none      | notification_64       |

  # Skipping the test because of a bug https://ccp.sys.comcast.net/browse/LUI-681
  @skip
  Scenario Outline: Verify the Notification 'toggleState' control (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that the 'opacity' of 'Notification' component is '1'
    And I set the 'state' to '<stateValue>' for 'Notification' component
    And I wait 0.5 seconds for the page to load
    And I verify that the 'opacity' of 'Notification' component is '<opacityValue>'
    @sanity_temp
    Examples:
      | theme   | stateValue | opacityValue |
      | Xfinity | dismiss    | 0.001        |
      | Xfinity | enter      | 1            |
    Examples:
      | theme | stateValue | opacityValue |
      | Base  | dismiss    | 0.001        |
      | Base  | enter      | 1            |

  Scenario Outline: Verify the Notification 'title' control (<theme> theme)
    When I navigate to 'Notification' with '<theme>' theme
    Then I verify that 'Notification' 'Title' has 'text' 'Banner headline'
    And I set the 'title' to 'LUI TEST' for 'Notification' component
    And I verify that 'Notification' 'Title' has 'text' 'LUI TEST'
    And I set the 'title' to '' for 'Notification' component
    And I verify that the 'Notification' 'Title' component does not exist in DOM
    And I set the 'title' to '!@$%^&*(){}[]:;<>?,-./~' for 'Notification' component
    And I verify that 'Notification' 'Title' has 'text' 'Banner headline'
    @sanity
    Examples:
      | theme   |
      | Xfinity |
    Examples:
      | theme   |
      | Xfinity |
