@sanity @tileBasic @2104360

Feature: LUI Tile Basic component

  Background:
    Given I launch the LUI app
    And I navigate to 'Tile' with 'Base' theme

  Scenario: Verify that Tile Basic is displayed
    Then I verify that the 'Tile' component is displayed

  Scenario: Verify the dimensions of the Tile Basic Element
    Then I verify that the 'width' of 'Tile' component is '527px'
    And I verify that the 'height' of 'Tile' component is '296px'

  Scenario Outline: Verify that Tile can be set to <modeValue> mode
    When I set the 'mode' to '<modeValue>' for 'Tile' component
    Then I verify the mode is '<modeValue>' for 'Tile'
    Examples:
      | modeValue |
      | unfocused |
      | focused   |
      | disabled  |

  Scenario: Verify the Tile Basic metadataLocation control
    When I set the 'metadataLocation' to 'standard' for 'Tile' component
    Then I verify that the 'standard' is 'true' for 'Tile' component
    And I set the 'metadataLocation' to 'inset' for 'Tile' component
    And I verify that the 'inset' is 'true' for 'Tile' component

  Scenario: Verify the Tile Basic persistentMetadata control
    When I set the 'mode' to 'unfocused' for 'Tile' component
    And I set the 'persistentMetadata' to 'true' for 'Tile' component
    Then I verify that the 'persistentMetadata' is 'true' for 'Tile' component
    And I set the 'persistentMetadata' to 'false' for 'Tile' component
    And I verify that the 'persistentMetadata' is 'false' for 'Tile' component
    And I set the 'mode' to 'focused' for 'Tile' component
    And I set the 'persistentMetadata' to 'true' for 'Tile' component
    And I verify that the 'persistentMetadata' is 'true' for 'Tile' component
    And I set the 'mode' to 'disabled' for 'Tile' component
    And I set the 'persistentMetadata' to 'true' for 'Tile' component
    And I verify that the 'persistentMetadata' is 'true' for 'Tile' component
    And I set the 'persistentMetadata' to 'false' for 'Tile' component
    And I verify that the 'persistentMetadata' is 'false' for 'Tile' component

  Scenario: Verify the Tile Basic circle control
    When I set the 'itemLayout_circle' to 'true' for 'Tile' component
    Then I verify that the 'width' of 'Tile' component is '296px'
    And I set the 'itemLayout_circle' to 'false' for 'Tile' component
    And I verify that the 'width' of 'Tile' component is '527px'

  Scenario: Verify the Tile Basic badge Title Control
    When I set the 'badge_title' to 'LUI Test' for 'Tile' component
    Then I verify that 'Tile' 'Badge Title' has text 'LUI Test'

  Scenario: Verify the Tile Basic label Title Control
    When I set the 'label_title' to 'LUI Test' for 'Tile' component
    Then I verify that 'Tile' 'Label Title' has text 'LUI Test'

  Scenario: Verify the Tile Basic blur control
    When I set the 'artwork_blur' to 'false' for 'Tile' component
    Then I verify that the 'blur' is 'false' for 'Tile' component
    And I set the 'artwork_blur' to 'true' for 'Tile' component
    And I verify that the 'blur' is 'true' for 'Tile' component

  Scenario: Verify the Tile Basic fill control
    When I set the 'artwork_fill' to 'true' for 'Tile' component
    Then I verify that the 'fill' is 'true' for 'Tile' component
    And I set the 'artwork_fill' to 'false' for 'Tile' component
    And I verify that the 'fill' is 'false' for 'Tile' component

  Scenario: Verify the Tile Basic format control
    When I set the 'artwork_format' to 'default' for 'Tile' component
    Then I verify that the 'format' is 'default' for 'Tile' component
    And I set the 'artwork_format' to 'circle' for 'Tile' component
    And I verify that the 'format' is 'circle' for 'Tile' component
    And I set the 'artwork_format' to 'square' for 'Tile' component
    And I verify that the 'format' is 'square' for 'Tile' component
    And I set the 'artwork_format' to 'contain' for 'Tile' component
    And I verify that the 'format' is 'contain' for 'Tile' component

  Scenario: Verify the Tile Basic checked control
    When I set the 'checkbox_checked' to 'true' for 'Tile' component
    Then I verify that the 'checked' is 'true' for 'Tile' component
    And I set the 'checkbox_checked' to 'false' for 'Tile' component
    And I verify that the 'checked' is 'false' for 'Tile' component

  Scenario Outline: Validate the Tile Basic progress control
    When I set the 'progressBar_progress' to '<progressValue>' for 'Tile' component
    Then I verify that the 'Tile' progress is set to <progressValue>
    Examples:
      | progressValue |
      | 0.20          |
      | 0.50          |
      | 0.75          |
      | 1.00          |

  Scenario: Verify the Tile Basic ratioX control
    When I set the 'itemLayout_ratioX' to '20' for 'Tile' component
    Then I verify that the 'height' of 'Tile' component is '237px'
    And I verify that the 'width' of 'Tile' component is '527px'

  Scenario: Verify the Tile Basic ratioY control
    When I set the 'itemLayout_ratioY' to '20' for 'Tile' component
    Then I verify that the 'height' of 'Tile' component is '659px'
    And I verify that the 'width' of 'Tile' component is '527px'

  Scenario: Verify the Tile Basic upCount control
    When I set the 'itemLayout_upCount' to '7' for 'Tile' component
    Then I verify that the 'height' of 'Tile' component is '120px'
    And I verify that the 'width' of 'Tile' component is '214px'