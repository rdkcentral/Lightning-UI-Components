import FocusManager from '../pageObjects/navigation/focusmanager.navigation';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module FocusManager
   * @function I verify there are {int} content rows on the {string} page
   * @description Cucumber statement to verify the number of assets per row
   * @param {Integer} no_of_assets
   * @param {String} pageName
   * @example I verify there are 3 content rows on the 'FocusManager' page
   */
  Then(
    'I verify there are {int} content rows on the {string} page',
    (no_of_assets, pageName) => {
      cy.get(FocusManager.rowElements).should('have.length', no_of_assets);
    }
  );

  /**
   * @module FocusManager
   * @function I verify each element has width of {float} and height of {float} on {string} pagestyle
   * @description Cucumber statement to verify the sizing of elements on a particular page
   * @param {Float} width
   * @param {Float} height
   * @param {String} pageName
   * @example I verify each element has width of 152.0 and height of 42.0 on 'FocusManager' pagestyle
   */
  Then(
    'I verify each element has width of {float} and height of {float} on {string} pagestyle',
    (width, height, pageName) => {
      cy.get(FocusManager.rowElements).each($element => {
        cy.wrap($element)
          .invoke('attr', 'style')
          .should('contain', `width: ${width}px`);
        cy.wrap($element)
          .invoke('attr', 'style')
          .should('contain', `height: ${height}px`);
      });
    }
  );

  /**
   * @module FocusManager
   * @function I verify there are {int} assets per row on the {string} pagestyle
   * @description Cucumber statement to verify the number of assets per row
   * @param {Integer} no_of_assets
   * @param {String} pageName
   * @example I verify there are 3 assets per row on the 'FocusManager' pagestyle
   */
  Then(
    'I verify there are {int} assets per row on the {string} pagestyle',
    (no_of_assets, pageName) => {
      cy.get(FocusManager.rowElements).should('have.length', no_of_assets);
    }
  );

  /**
   * @module FocusManager
   * @function I verify that the assets are alligned to left on the {string} page
   * @description Cucumber statement to verify the property of a component
   * @param {String} pageName
   * @example I verify that the assets are alligned to left on the 'FocusManager' page
   */
  Then(
    'I verify that the assets are alligned to left on the {string} page',
    pageName => {
      cy.get(FocusManager.rowElements).each($element => {
        cy.wrap($element)
          .invoke('attr', 'style')
          .should('contain', 'left: 0px');
      });
    }
  );

  /**
   * @module FocusManager
   * @function I verify that elements are horizontally and evenly spaced for {string} component
   * @description Cucumber statement to verify the specified page rows are evenly spaced horizontally
   * @param {String} pageName
   * @example I verify that elements are horizontally and evenly spaced for 'FocusManager' component
   */
  Then(
    'I verify that elements are horizontally and evenly spaced for {string} component',
    pageName => {
      const elements = [];
      // need wait time as it's taking time to load
      cy.wait(1000)
        .get(FocusManager.row)
        .each($row => {
          const rowId = $row.attr('id');
          cy.get($row)
            .children()
            .each(($element, $index) => {
              // keep track of the tiles in the row for later use
              const elementInfo = {
                id: $element.attr('id'),
                rowId
              };
              // push the tile info to the tiles array
              cy.getOffsetRect($element).then(data => {
                elements.push({ ...elementInfo, ...data });
              });
            });
        })
        .then(() => {
          const spaces = [];
          elements.forEach((element, index, arr) => {
            if (index !== 0) {
              const prevElement = arr[index - 1];
              const space = element.left - prevElement.right;
              spaces.push(space);
            }
          });
          // assert that the spaces are evenly spaced
          const averageSpace = Math.round(
            spaces.reduce((a, b) => a + b, 0) / spaces.length
          );
          const space = Math.round(spaces[1]);

          expect(Math.ceil(averageSpace)).equal(Math.ceil(space));
        });
    }
  );
}
