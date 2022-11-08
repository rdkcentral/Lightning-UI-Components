import Row from '../pageObjects/navigation/row.navigation';

import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Row
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
              cy.repeatAction('RIGHT', 11);
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -500, 50);
              });
              break;
            case '10':
              cy.repeatAction('RIGHT', 11);
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -50, 10);
              });
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
          }
          break;
        case 'neverScroll':
          switch (value) {
            case 'true':
              //clicking the right key to check if attribute x is not displayed
              cy.action('RIGHT');
              Row._getElementByName(component).should('not.have.attr', 'x');
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
                'Please check the page value name or implement the missing case.'
              );
          }
          break;
        case 'alwaysScroll':
          switch (value) {
            case 'true':
              //clicking the right key to check if attribute x is not displayed
              cy.repeatAction('RIGHT', 7);
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -800, 50);
              });
              break;
            case 'false':
              cy.repeatAction('RIGHT', 7);
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -500, 50);
              });
              break;
            default:
              throw new Error(
                'Please check the page value name or implement the missing case.'
              );
          }
          break;
        case 'lazyScroll':
          switch (value) {
            case 'true':
              //clicking right key 8 times and making sure that scrolling is not happening
              cy.repeatAction('RIGHT', 8);
              Row._getElementByName(component).should('not.have.attr', 'x');
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
                'Please check the page value name or implement the missing case.'
              );
          }
      }
    }
  );

  /**
   * @module Row
   * @function I verify focused element has width of {float} and height of {float} and non-focused elements have width of {float} and height of {float}
   * @description Cucumber statement to verify the sizing of elements
   * @param {Float} widthFocused
   * @param {Float} heightFocused
   * @param {Float} widthNonFocused
   * @param {Float} heightNonFocused
   * @example I verify focused element has width of 150.0 and height of 150.0 and non-focused elements have width of 150.0 and height of 75.0
   */
  Then(
    'I verify focused element has width of {float} and height of {float} and non-focused elements have width of {float} and height of {float}',
    (widthFocused, heightFocused, widthNonFocused, heightNonFocused) => {
      cy.get(Row.rowElements).each($elements => {
        //wait is necessary for the row with Focus Height change to render
        cy.wait(1000)
          .get(Row.rowElements)
          .each($el => {
            const elementWidth = parseFloat($el.attr('w'));
            const elementHeight = parseFloat($el.attr('h'));
            if ($el.attr('focused') === undefined) {
              expect(elementWidth).equal(widthNonFocused);
              expect(elementHeight).equal(heightNonFocused);
            } else {
              expect(elementWidth).equal(widthFocused);
              expect(elementHeight).equal(heightFocused);
            }
          });
        cy.repeatAction('RIGHT', $elements.length);
      });
    }
  );
}
