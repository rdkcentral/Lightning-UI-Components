import CardContent from '../pageObjects/tilesAndCards/cardcontent.tilesandcards';
import getPageObject from '../pageObjects';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
    /**
     * @module CardContent
     * @function I verify that the {string} {string} state is {string}
     * @param {String} pageName
     * @param {String} componentName
     * @param {String} value - value for validation
     * @example I verify that the 'cardcontent' 'shouldCollapse' state is 'true'
     */
    Then(
        'I verify that the {string} {string} state is {string}',
        (pageName, componentName, value) => {
            const page = pageName.toLowerCase();
            const component = componentName.toLowerCase();
            const pageObject = getPageObject(page);

            if (value === 'true') {
                pageObject
                    ._getElementByName(component).should('have.attr', 'alpha');
            } else {
                pageObject
                    ._getElementByName(component).should('not.have.attr', 'alpha');
            }
        }
    );
}
