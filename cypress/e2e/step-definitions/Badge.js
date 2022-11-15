import Badge from '../pageObjects/metadata/badge.metadata';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Badge
   * @function I verify that {string} {string} state is {string}
   * @param {String} controlName - name of the control to toggle
   * @param {String} prop - property
   * @param {String} value - value for validation
   * @example I verify that 'Badge' 'iconAlign' state is 'right'
   */
   Then(
    'I verify that {string} {string} state is {string}',
    (componentName, prop, value) => {
      if(value === 'right'){
      cy.get(Badge.icon).should('have.attr', 'x', '40.5');
      }else{
        cy.get(Badge.icon).should('have.attr', 'x', '10');
      }
    }
  );
}