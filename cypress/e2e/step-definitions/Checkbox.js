import Checkbox from '../pageObjects/utilities/checkbox.utilities';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
    /**
     * @module Checkbox
     * @function I verify that the {string} state for {string} is {string}
     * @param {String} pageName
     * @param {String} componentName
     * @param {String} value - value for validation
     * @example I verify that the 'checked' state for 'Checkbox' is 'true'
     */
    Then(
        'I verify that the {string} state for {string} is {string}',
        (pageName, componentName, value) => {
            if (value === 'false') {
                cy.get(Checkbox.checked).should('have.attr', 'alpha');
            } else {
                cy.get(Checkbox.checked).should('not.have.attr', 'alpha');
            }
        }
    );
}
