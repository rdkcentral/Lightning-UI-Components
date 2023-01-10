import Column from '../pageObjects/navigation/column.navigation';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

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
}
