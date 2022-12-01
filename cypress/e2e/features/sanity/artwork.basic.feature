@sanity @artwork @basic @2150078

Feature: LUI Artwork component

  Background:
    Given I launch the LUI app
    And I navigate to 'Artwork' 'Artwork' with 'Base' theme
    
  Scenario: Verify that Artwork component is displayed
    Then I verify that the 'Artwork' component is displayed
    
  Scenario: Verify the dimensions of the Artwork Base Element
    Then I verify that the 'width' of 'Artwork' component is '527px'
    And I verify that the 'height' of 'Artwork' component is '296px'
    
  Scenario: Verify the Artwork blur control
    When I set the 'blur' to 'true' for 'Artwork' component
    Then I verify the 'blur' is 'true' for Artwork component
    And I set the 'blur' to 'false' for 'Artwork' component
    And I verify the 'blur' is 'false' for Artwork component
    
  Scenario: Verify the Artwork fill control
    When I set the 'fill' to 'true' for 'Artwork' component
    Then I verify the 'fill' is 'true' for Artwork component
    And I set the 'fill' to 'false' for 'Artwork' component
    And I verify the 'fill' is 'false' for Artwork component
    
  Scenario: Verify the Artwork foregroundSrc control
    When I set the 'foregroundSrc' to 'none' for 'Artwork' component
    Then I verify the 'foregroundSrc' is 'none' for Artwork component
    # And I set the 'foregroundSrc' to 'url1' for 'Artwork' component #Known issue preventing passing urls as values
    # And I verify the 'foregroundSrc' is 'url1' for Artwork component
    
  Scenario: Verify the Artwork format control
    When I set the 'format' to 'square' for 'Artwork' component
    Then I verify the 'format' is 'square' for Artwork component
    And I set the 'format' to 'contain' for 'Artwork' component
    And I verify the 'format' is 'contain' for Artwork component
    # And I set the 'format' to 'circle' for 'Artwork' component #Unable to verify 'circle' due to its use of global values
    # And I verify the 'format' is 'circle' for Artwork component
    
  Scenario: Verify the Artwork gradient control
    When I set the 'gradient' to 'true' for 'Artwork' component
    Then I verify the 'gradient' is 'true' for Artwork component
    And I set the 'gradient' to 'false' for 'Artwork' component
    And I verify the 'gradient' is 'false' for Artwork component
    
  Scenario: Verify the Artwork srcCallback control
    When I set the 'srcCallback' to 'true' for 'Artwork' component
    Then I verify the 'srcCallback' is 'true' for Artwork component
    And I set the 'srcCallback' to 'false' for 'Artwork' component
    And I verify the 'srcCallback' is 'false' for Artwork component