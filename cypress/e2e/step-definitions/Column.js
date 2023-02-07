import Column from '../pageObjects/navigation/column.navigation';
import {Then} from '@badeball/cypress-cucumber-preprocessor';
import getPageObject from "../pageObjects";
import ScrollWrapper from "../pageObjects/layout/scrollwrapper.layout";

export default function () {
  /**
   * @module Column
   * @function I verify that Column Button - {Integer} component is focused
   * @description Cucumber statement to verify displayed Column element is in focus
   * @param {Integer} - focusedIndex
   * @example I verify that Column Button - 1 component is focused
   */
  Then(
    'I verify that Column Button - {int} component is focused',
    focusedIndex => {
      cy.get(Column.columnElements)
        .eq(focusedIndex - 1)
        .should('have.attr', 'focused', 'true');
    }
  );

  /**
   * @module Column
   * @function I verify that the {String} of Column component is {String}, wait {int} ms
   * @description Cucumber statement to verify the property of a component
   * @example I verify that the 'top' of Column component is '0', wait 2000 ms
   */
  Then(
    'I verify that the {string} of Column component is {int}, wait {int} ms',
    (property, value, waitTime) => {
      let topValue = null;
      cy.wait(waitTime).get(Column.column)
        .getStyleAttribute()
        .then(style => {
          topValue = Number(style[property].replace('px', ''));
          cy.wrap(topValue)
            .then(parseFloat)
            .should('be.closeTo', value, 3);
        });
    }
  );
}
