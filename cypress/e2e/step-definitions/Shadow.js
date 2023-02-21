import getPageObject from '../pageObjects';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Shadow
   * @function I verify that maskShadow control is set to {string} for {string} component
   * @description Cucumber statement to verify maskShadow control 
   * @param {String} value
   * @param {String} pageName
   * @example I verify that maskShadow control is set to '<state>' for 'Shadow' component'
   */
  Then(
    'I verify that maskShadow control is set to {string} for {string} component',
    (value, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const state = value.toLowerCase()    
      if (state === 'true') {
        cy.get(pageObject.maskShadow)
        .should('have.attr', 'rendertotexture')
      } else {
        cy.get(pageObject.maskShadow)
        .should('not.have.attr', 'rendertotexture')
      }
    }
  );
}