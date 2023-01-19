import Badge from '../pageObjects/metadata/badge.metadata';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Badge
   * @function I verify that {string} {string} state is {string} for {string} theme
   * @param {String} controlName - name of the control to toggle
   * @param {String} prop - property
   * @param {String} value - value for validation
   * @param {String} theme - Theme
   * @example I verify that 'Badge' 'iconAlign' state is 'right' for 'Base' theme
   */
  Then(
    'I verify that {string} {string} state is {string} for {string} theme',
    (componentName, prop, value, theme) => {
      switch (value) {
        case 'right':
          if (theme === 'Xfinity') {
            cy.get(Badge.icon).should('have.attr', 'x', '42.5');
          } else if (theme === 'Base') {
            cy.get(Badge.icon).should('have.attr', 'x', '40.5');
          } else {
            throw new Error(
              'Please check the theme value or implement the missing case.'
            );
          }
          break;
        case 'left':
          if (theme === 'Xfinity') {
            cy.get(Badge.icon).should('have.attr', 'x', '8');
          } else if (theme === 'Base') {
            cy.get(Badge.icon).should('have.attr', 'x', '10');
          } else {
            throw new Error(
              'Please check the theme value or implement the missing case.'
            );
          }
          break;
      }
    }
  );
}
