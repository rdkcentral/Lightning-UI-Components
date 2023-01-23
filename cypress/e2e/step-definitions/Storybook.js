import getPageObject from '../pageObjects';
import { getStoryName } from '../../support/helpers';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Storybook
   * @function I launch the LUI Storybook app
   * @description Cucumber statement to navigate to LUI storybook app root
   * @example I launch the LUI Storybook app
   */
  Given('I launch the LUI Storybook app', () => {
    cy.visit('http://localhost:8000/?path=/story/', {
      timeout: 15000
    });
  });

  /**
   * @module Storybook
   * @function I navigate to {String} {String} with {String} theme in Storybook
   * @description Cucumber statement to navigate to the specified page with the specified theme in Storybook
   * @param {String} pageName - the page to navigate to
   * @param {String} themeName - the theme to be used
   * @example I navigate to 'Artwork' with 'Base' theme in Storybook
   */
  When(
    'I navigate to {string} with {string} theme in Storybook',
    (pageName, themeName) => {
      const page = pageName.toLowerCase();
      const story = getStoryName(pageName).toLowerCase();
      const theme = themeName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject.navigateToStorybook(story, theme);
    }
  );

  /**
   * @module Storybook
   * @function I select {string} for the {string} control for the {string} component in Storybook
   * @description Cucumber statement to select a value in a 'select' control
   * @param {String} selectedValue
   * @param {String} controlName
   * @param {String} pageName
   * @example I select 'url' for the 'foregroundSrc' control for the 'Artwork' component in Storybook
   */
  Then(
    'I select {string} for the {string} control for the {string} component in Storybook',
    (selectedValue, controlName, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject
        ._getElementByName(controlName)
        .select(pageObject._returnElementByName(selectedValue));
    }
  );

  /**
   * @module Storybook
   * @function I verify that the {String} {String} component is displayed in Storybook Iframe
   * @description Cucumber statement to verify that the component is displayed in Storybook Iframe
   * @param {String} pageName
   * @param {String} componentName
   * @example I verify that the 'Card' 'Personality' component is displayed in Storybook Iframe
   */
  Then(
    'I verify that the {string} {string} component is displayed in Storybook Iframe',
    (pageName, componentName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      cy.getIframeBody()
        .find(pageObject._returnElementByName(componentName))
        .should('be.visible');
    }
  );

  /**
   * @module Storybook
   * @function I verify that the {String} {String} component does not exist in Storybook
   * @description Cucumber statement to verify that the component does not exist in Storybook
   * @param {String} pageName
   * @param {String} componentName
   * @example I verify that the 'Artwork' 'Foreground Image' component does not exist in Storybook
   */
  Then(
    'I verify that the {string} {string} component does not exist in Storybook',
    (pageName, componentName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      cy.getIframeBody()
        .find(pageObject._returnElementByName(componentName))
        .should('not.exist');
    }
  );
}
