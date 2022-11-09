import Button from '../pageObjects/controls/button.controls';

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {

  /**
 * @module Button
 * @function I verify that the {string} {string}  state is {string} 
 * @description Cucumber statement to verify the settings of a module
 * @param {String} component
 * @param {String} prop
 * @param {String} values
 * @example I verify that the 'Button' 'justify' state is 'left'
 */
  Then(
    'I verify that the {string} {string} state is {string}',
    (component, prop, value) => {
      switch (prop) {
        case "justify":
          if (value === "left") {
            cy.get(Button.justify).should('not.have.attr', 'mountx');
          } else if (value === "center") {
            cy.get(Button.justify).should('have.attr', 'mountx', '0.5');
          } else if (value = "right") {
            cy.get(Button.justify).should('have.attr', 'mountx', '1');
          }
          break;
        case "prefix", "suffix":
          if (value === "null") {
            cy.get(Button.icon).should('not.exist');
            cy.get(Button.checkbox).should('not.exist');
          } else if (value === "icon") {
            cy.get(Button.icon).should('be.visible');
          } else if (value = "checkbox") {
            cy.get(Button.checkbox).should('be.visible');
          } else if (value = "combo") {
            cy.get(Button.icon).should('be.visible');
            cy.get(Button.checkbox).should('be.visible');
          }
          break;
        default:
          break;

      }

    })
} 