import Control from '../pageObjects/controls/control.controls';

import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {

  /**
     * @module Control
     * @function I verify that the {string} logo state is {string}
     * @description Cucumber statement to verify the settings of a module
     * @param {String} prop
     * @param {String} values
     * @example I verify that the 'Control' logo state is 'none'
     */
  Then(
    'I verify that the {string} logo state is {string}',
    (pageName, value) => {
      if (value === 'xfinity') {
        cy.get(Control.icon).should('not.have.attr', 'mountx');
      } else if (value === 'none') {
        cy.get(Control.icon).should('have.attr', 'mountx', '0.5');
      }
    }
  );

  /**
   * @module Control
   * @function I verify that the {string} icon state is {string}
   * @description Cucumber statement to verify the settings of a module
   * @param {String} pageName
   * @param {String} value
   * @example I verify that the 'Control' icon state is 'none'
   */
  Then(
    'I verify that the {string} icon state is {string}',
    (pageName, value) => {
      if (value === 'lightning') {
        cy.get(Control.icon).should('not.have.attr', 'mountx');
      } else if (value === 'none') {
        cy.get(Control.icon).should('have.attr', 'mountx', '0.5');
      }
    }
  );
}