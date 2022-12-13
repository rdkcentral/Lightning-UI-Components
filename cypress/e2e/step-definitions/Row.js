import Row from '../pageObjects/navigation/row.navigation';

import {Then} from '@badeball/cypress-cucumber-preprocessor';
import getPageObject from "../pageObjects";

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
                  .should('be.closeTo', -1600, 100);
              });
              break;
            case '10':
              cy.repeatAction('RIGHT', 11);
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -85, 25);
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
                  .should('be.closeTo', -1300, 200);
              });
              break;
            case 'false':
              cy.repeatAction('RIGHT', 7);
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.closeTo', -1400, 200);
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
              //clicking right key n times and making sure that scrolling is not happening
              cy.repeatAction('RIGHT', 5);
              Row._getElementByName(component).should('not.have.attr', 'x');
              //clicking right one more time to activate the scrolling
              cy.action('RIGHT');
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.lessThan', -50);
              });
              break;
            case 'false':
              cy.action('RIGHT');
              cy.get(Row.row).then(component => {
                cy.wrap(component)
                  .invoke('attr', 'x')
                  .then(parseFloat)
                  .should('be.lessThan', -50);
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

  /**
   * @module Row
   * @function I verify that elements are vertically evenly spaced for Row component
   * @description Cucumber statement to verify the specified page rows are evenly spaced vertically
   * @param {String} pageName
   * @example I verify that elements are vertically evenly spaced for Row component
   */
  Then(
    'I verify that elements are vertically evenly spaced for Row component',
    () => {
      const tileRows = [];
      cy.wait(500)
        .get(Row.rowElementsCenteredInParent)
        .each($row => {
          // push the row info to the tileRows array
          cy.getOffsetRect($row).then(data => {
            tileRows.push({...data});
          });
        })
        .then(() => {
          const spaces = [];
          // get the spaces between each row
          tileRows.forEach((row, index) => {
            if (index !== 0) {
              const prevRow = tileRows[index - 1];
              const space = row.top - prevRow.bottom;
              spaces.push(Math.round(space));
            }
          });
          // assert that the spaces are evenly spaced
          const averageSpace = Math.round(
            spaces.reduce((a, b) => a + b, 0) / spaces.length
          );
          const space = spaces[0];
          expect(Math.ceil(averageSpace)).equal(Math.ceil(space));
        });
    }
  );

  /**
   * @module Row
   * @function I verify there are {Integer} assets per column
   * @description Cucumber statement to verify the number of assets per column
   * @param {Integer} no_of_assets
   * @example I verify there are 4 assets per column
   */
  Then('I verify there are {int} assets per column', no_of_assets => {
    cy.get(Row.row)
      .first()
      .children()
      .each(() => {
        cy.get(Row.rowElementsPerColumn).should('have.length', no_of_assets);
      });
  });

  /**
   * @module Row
   * @function I verify there are {int} columns
   * @description Cucumber statement to verify the number of columns
   * @param {Integer} no_of_assets
   * @example I verify there are 3 columns
   */
  Then('I verify there are {int} columns', no_of_assets => {
    cy.get(Row.row).first().children().should('have.length', no_of_assets);
  });

  /**
   * @module Row
   * @function I verify that I am able to navigate to the {string} element of the {string} column
   * @description Cucumber statement to verify that user is able to navigate to the start or end of the specified column
   * @param {String} position
   * @param {String} columnName
   * @example I verify that I am able to navigate to the 'last' element of the 'First' column
   */
  Then(
    'I verify that I am able to navigate to the {string} element of the {string} column',
    (position, columnName) => {
      const column = columnName.toLowerCase();
      const key = position === 'last' ? 'DOWN' : 'UP';

      if (position === 'last') {
        Row._getElementByName(column)
          .should('have.attr', 'focused', 'true')
          .nextAll()
          .each(el => {
            cy.action(key);
            cy.wrap(el).should('have.attr', 'focused', 'true');
          });
      } else {
        Row._getElementByName(column)
          .parent()
          .children()
          .last()
          .should('have.attr', 'focused', 'true')
          .prevAll()
          .each(el => {
            cy.action(key);
            cy.wrap(el).should('have.attr', 'focused', 'true');
          });
      }
    }
  );

  /**
   * @module Row
   * @function I verify {string} have different {string}
   * @description Cucumber statement to verify that components have different values
   * @param {String} componentName
   * @param {String} propertyName
   * @example I verify 'Row elements' have different 'width'
   */
  Then(
    'I verify {string} have different {string}',
    (componentName, propertyName) => {
      const component = componentName.toLowerCase();
      const property = propertyName.toLowerCase();
      Row._getElementByName(component).getAttributes(property).then((element) => {
        for (let i = 0; i < element.length - 1; i++) {
          expect(element[i]).not.equals(element[i + 1]);
        }
      })
    }
  );
}
