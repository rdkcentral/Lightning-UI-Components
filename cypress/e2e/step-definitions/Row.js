import Row from '../pageObjects/layouts/row.layout';

import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';


export default function () {

  /**
   * @module Common
   * @function I verify the {String} is {String} for {String} component
   * @description Cucumber statement to verify the settings of a module
   * @param {String} control
   * @param {String} value
   * @param {String} component
   * @example Then I verify the 'neverScroll' is 'true' for 'Row' component
   */
  Then(
    'I verify the {string} is {string} for {string} component',
    (control, value, component) => {

      switch (control) {
        case 'scrollIndex':
          switch (value) {
            case '0':
              //clicking the right key to get to the end of the row
              // and check if attribute x has a specific value
              for (let i = 0; i < 11; i++) {
                cy.action('RIGHT');
              }
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -500, 50);
              });
              break;
            case '10':
              for (let i = 0; i < 11; i++) {
                cy.action('RIGHT');
              }
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -50, 10);
              });
              break;
            default:
              throw new Error(
                `Please check the page value name or implement the missing case.`
              );
          }
          break;
        case 'neverScroll':
          switch (value) {
            case 'true':
              //clicking the right key to check if attribute x is not displayed
              cy.action('RIGHT');
              Row._getElementByName(component)
                .should('not.have.attr', 'x');
              break;
            case 'false':
              cy.action('RIGHT');
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.lessThan', 0);
              });
              break;
            default:
              throw new Error(
                `Please check the page value name or implement the missing case.`
              );
          }
          break;
        case 'alwaysScroll':
          switch (value) {
            case 'true':
              //clicking the right key to check if attribute x is not displayed
              for (let i = 0; i < 7; i++) {
                cy.action('RIGHT');
              }
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -800, 50);
              });
              break;
            case 'false':
              for (let i = 0; i < 7; i++) {
                cy.action('RIGHT');
              }
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -500, 50);
              });
              break;
            default:
              throw new Error(
                `Please check the page value name or implement the missing case.`
              );
          }
          break;
        case 'lazyScroll':
          switch (value) {
            case 'true':
              //clicking right key 8 times and making sure that scrolling is not happening
              for (let i = 0; i < 8; i++) {
                cy.action('RIGHT');
              }
              Row._getElementByName(component)
                .should('not.have.attr', 'x');
              //clicking right one more time to activate the scrolling
              cy.action('RIGHT');
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.lessThan', -15);
              });
              break;
            case 'false':
              cy.action('RIGHT');
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.lessThan', -15);
              });
              break;
            default:
              throw new Error(
                `Please check the page value name or implement the missing case.`
              );
          }
      }
    }
  );

}
