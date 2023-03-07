import getPageObject from '../pageObjects';

import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {

  /**
     * @module Keyboard
     * @function I verify that {string} {string} is {string}
     * @description Cucumber statement to verify the settings of a module
     * @param {String} pageName
     * @param {String} componentName
     * @param {String} value
     * @example I verify that 'Input' 'Listening' is 'false'
     */
  Then(
    'I verify that {string} {string} is {string}',
    (pageName, componentName, value) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      if (value === 'false') {
        cy.get(pageObject.listening).should('have.attr', 'alpha', '0');
      } else throw new Error(
        `${page} page not found! \nPlease check the page object name or implement the missing case.`
      );
    }
  );
}
