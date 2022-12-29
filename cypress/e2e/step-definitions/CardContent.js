import CardContent from '../pageObjects/tilesAndCards/cardcontent.tilesandcards';
import getPageObject from '../pageObjects';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
    /**
     * @module CardContent
     * @function I verify that {string} shouldCollapse state is {string}
     * @param {String} pageName
     * @param {String} value - value for validation
     * @example I verify that 'cardcontent' shouldCollapse state is 'true'
     */
    Then(
        'I verify that {string} shouldCollapse state is {string}',
        (pageName, value) => {
            const page = pageName.toLowerCase();
            const pageObject = getPageObject(page);

            if (value === 'true') {
                cy.get(pageObject.shouldcollapse).should('have.attr', 'alpha');
            } else {
                cy.get(pageObject.shouldcollapse).should('not.have.attr', 'alpha');
            }
        }
    );
}
