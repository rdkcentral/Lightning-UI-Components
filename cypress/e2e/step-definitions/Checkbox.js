import {Then} from '@badeball/cypress-cucumber-preprocessor';
import getPageObject from "../pageObjects";

export default function () {
  /**
   * @module Checkbox
   * @function I verify that the {string} state for {string} is {string}
   * @param {String} stateName
   * @param {String} pageName
   * @param {String} value - value for validation
   * @example I verify that the 'checked' state for 'Checkbox' is 'true'
   */
  Then(
    'I verify that the {string} state for {string} is {string}',
    (stateName, pageName, value) => {
      const state = stateName.toLowerCase();
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      if (value === 'false') {
        pageObject._getElementByName(state).should('have.attr', 'alpha');
      } else {
        pageObject._getElementByName(state).should('not.have.attr', 'alpha');
      }
    }
  );
}
