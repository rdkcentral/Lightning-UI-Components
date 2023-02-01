import getPageObject from '../pageObjects';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Common
   * @function I verify the vertical control is {String} for {String}
   * @description Cucumber statement to verify the vertical control of a Slider module
   * @param {String} value
   * @param {String} pageName
   * @example Then I verify the vertical control is 'true' for 'Slider'
   */
  Then(
    'I verify the vertical control is {string} for {string}',
    (value, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      if (value === 'true') {
        cy.get(pageObject.basic).should('have.attr', 'state', 'VerticalSlider');
      } else {
        cy.get(pageObject.basic).should(
          'not.have.attr',
          'state',
          'VerticalSlider'
        );
      }
    }
  );
}
