@sanity @regression @cardAboutStacked @2111312

Feature: LUI CardAbout Stacked component

  Background:
    Given I launch the LUI app
    And I navigate to 'cardaboutstacked' 'stacked' with 'Base' theme

  Scenario: Verify that CardAboutStacked is displayed
    Then I verify that the 'cardaboutstacked' component is displayed

  Scenario: Verify the dimensions of the CardAboutStacked Element
    Then I verify that the 'width' of 'cardaboutstacked' component is '526.667px'
    And I verify that the 'height' of 'cardaboutstacked' component is '296px'

  Scenario Outline: Verify that CardAboutStacked can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'cardaboutstacked' component
    Then I verify the mode is '<modeValue>' for 'cardaboutstacked'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the CardAboutStacked title text can be set
    When I set the 'title' to 'LUI TEST' for 'cardaboutstacked' component
    Then I verify that the 'Title' component on the 'cardaboutstacked' page has text 'LUI TEST'

  Scenario: Verify the CardAboutStacked titleBottom text can be set
    When I set the 'titleBottom' to 'LUI TEST' for 'cardaboutstacked' component
    Then I verify that the 'titleBottom' component on the 'cardaboutstacked' page has text 'LUI TEST'

  Scenario: Verify the CardAboutStacked descriptionBottom text can be set
    When I set the 'descriptionBottom' to 'LUI TEST' for 'cardaboutstacked' component
    Then I verify that the 'descriptionBottom' component on the 'cardaboutstacked' page has text 'LUI TEST'

  Scenario: Verify the default values
    Then I verify that the 'Title' component on the 'cardaboutstacked' page has text 'AUDIO'
    And I verify that the 'titleBottom' component on the 'cardaboutstacked' page has text 'LANGUAGES'
    And I verify that the 'descriptionBottom' component on the 'cardaboutstacked' page has text 'English, Spanish, French'
    And I verify the mode is 'focused' for 'cardaboutstacked'
