import Checkbox from '../pageObjects/utilities/checkbox.utilities';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
    /**
     * @module Checkbox
     * @function I verify that the {string} {string} state is {string}
     * @param {String} controlName - name of the control to toggle
     * @param {String} prop - property
     * @param {String} value - value for validation
     * @example I verify that the 'Checkbox' 'checked' state is 'false'
     */
    Then(
        'I verify that the {string} {string} state is {string}',
        (componentName, prop, value) => {
            if (value === 'false') {
                cy.get(Checkbox.checked).should('have.attr', 'alpha');
            } else {
                cy.get(Checkbox.checked).should('not.have.attr', 'alpha');
            }
        }
    );
}
