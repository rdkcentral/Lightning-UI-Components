import Button from '../pageObjects/controls/button.controls';
import ButtonSmall from '../pageObjects/controls/buttonsmall.controls';
import getPageObject from '../pageObjects';

import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {

  /**
     * @module Button
     * @function I verify that {string} justify control is {string}
     * @description Cucumber statement to verify the settings of a module
     * @param {String} pageName
     * @param {String} value
     * @example I verify that 'Button' justify control is 'left'
     */
  Then(
    'I verify that {string} justify control is {string}',
    (pageName, value) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      if (value === 'left') {
        cy.get(pageObject.justify).should('not.have.attr', 'mountx');
      } else if (value === 'center') {
        cy.get(pageObject.justify).should('have.attr', 'mountx', '0.5');
      } else if (value === 'right') {
        cy.get(pageObject.justify).should('have.attr', 'mountx', '1');
      }
    }
  );

  /**
    * @module Button
    * @function I verify that {string} prefix control is {string}
    * @description Cucumber statement to verify the settings of a module
    * @param {String} pageName
    * @param {String} value
    * @example I verify that 'Button' prefix control is 'null'
    */
  Then(
    'I verify that {string} prefix control is {string}',
    (pageName, value) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      if (value === 'null') {
        cy.get(pageObject.icon).should('not.exist');
        cy.get(pageObject.checkbox).should('not.exist');
      } else if (value === 'icon') {
        cy.get(pageObject.icon).should('be.visible');
      } else if (value === 'checkbox') {
        cy.get(pageObject.checkbox).should('be.visible');
      } else if (value === 'combo') {
        cy.get(pageObject.icon).should('be.visible');
        cy.get(pageObject.checkbox).should('be.visible');
      }
    }
  );


  /**
  * @module Button
  * @function I verify that the Buuton {string} state is {string}
  * @description Cucumber statement to verify the settings of a module
  * @param {String} pageName
  * @param {String} value
  * @example I verify that 'Button' justify control is 'left'
  */
  Then(
    'I verify that {string} suffix control is {string}',
    (pageName, value) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      if (value === 'null') {
        cy.get(pageObject.icon).should('not.exist');
        cy.get(pageObject.checkbox).should('not.exist');
      } else if (value === 'icon') {
        cy.get(pageObject.icon).should('be.visible');
      } else if (value === 'checkbox') {
        cy.get(pageObject.checkbox).should('be.visible');
      } else if (value === 'combo') {
        cy.get(pageObject.icon).should('be.visible');
        cy.get(pageObject.checkbox).should('be.visible');
      }
    }
  );
}