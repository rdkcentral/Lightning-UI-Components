@regression @row @skipFocus @2112689

Feature: LUI Row Skip Focus component

  Background:
    Given I launch the LUI app
    And I navigate to 'Row' 'Skip Focus' with 'Base' theme

  Scenario: Verify that Row Skip Focus element is visible
    Then I verify that the 'Row' component is displayed

  Scenario: Verify count of the Row Skip Focus elements
    Then I verify there are 14 assets per row on the 'Row' page

  Scenario Outline: Validate displayed text of buttons
    Then I verify that 'Row' '<element>' has 'text' '<text>'
    Examples:
      | element                | text            |
      | Button1labelskipfocus  | Skip Focus Text |
      | Button2labelskipfocus  | Button          |
      | Button3labelskipfocus  | Button          |
      | Button4labelskipfocus  | Button          |
      | Button5labelskipfocus  | Skip Focus Text |
      | Button6labelskipfocus  | Button          |
      | Button7labelskipfocus  | Button          |
      | Button8labelskipfocus  | Button          |
      | Button9labelskipfocus  | Skip Focus Text |
      | Button10labelskipfocus | Button          |
      | Button11labelskipfocus | Button          |
      | Button12labelskipfocus | Button          |
      | Button13labelskipfocus | Skip Focus Text |
      | Button14labelskipfocus | Skip Focus Text |

  Scenario: Validate navigating the buttons with Skip Focus
    Then I verify that the 'Button2SkipFocus' component on the 'Row' page is in focus
    And I press 'RIGHT' key 3 times
    And I verify that the 'Button6SkipFocus' component on the 'Row' page is in focus
    And I press 'RIGHT' key 3 times
    And I verify that the 'Button10SkipFocus' component on the 'Row' page is in focus
    And I press 'RIGHT' key 3 times
    And I verify that the 'Button12SkipFocus' component on the 'Row' page is in focus
    And I press 'LEFT' key 3 times
    And I verify that the 'Button8SkipFocus' component on the 'Row' page is in focus

  Scenario: Verify the Row Skip Focus 'Wrap Selected' toggle
    And I set the 'wrapSelected' to 'true' for 'Row' component
    And I verify that the 'Button2SkipFocus' component on the 'Row' page is in focus
    And I press 'LEFT' key
    And I verify that the 'Button12SkipFocus' component on the 'Row' page is in focus
    And I press 'RIGHT' key
    And I verify that the 'Button2SkipFocus' component on the 'Row' page is in focus
