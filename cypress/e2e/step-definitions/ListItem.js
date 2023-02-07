import ListItem from '../pageObjects/controls/listitem.controls';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Badge
   * @function I verify that {String} {String} is added to {String}
   * @param {String} value - value for validation
   * @param {String} prop - property
   * @param {String} pageName - Name of the page
   * @example I verify that 'no' 'prefix' is added to 'ListItem'
   */
  Then(
    'I verify that {string} {string} is added to {string}',
    (value, prop, pageName) => {
      switch (prop) {
        case 'prefix':
          switch (value) {
            case 'null':
              cy.get(ListItem.prefix).children().should('not.exist');
              cy.get(ListItem.prefixToggle).should('not.exist');
              cy.get(ListItem.prefixRadio).should('not.exist');
              cy.get(ListItem.prefixCheckbox).should('not.exist');
              break;
            case 'toggle':
              cy.get(ListItem.prefix).children().its('length').should('eq', 1);
              cy.get(ListItem.prefixToggle)
                .should('exist')
                .should('be.visible');
              cy.get(ListItem.prefixRadio).should('not.exist');
              cy.get(ListItem.prefixCheckbox).should('not.exist');
              break;
            case 'radio':
              cy.get(ListItem.prefix).children().its('length').should('eq', 1);
              cy.get(ListItem.prefixToggle).should('not.exist');
              cy.get(ListItem.prefixRadio).should('exist').should('be.visible');
              cy.get(ListItem.prefixCheckbox).should('not.exist');
              break;
            case 'checkbox':
              cy.get(ListItem.prefix).children().its('length').should('eq', 1);
              cy.get(ListItem.prefixToggle).should('not.exist');
              cy.get(ListItem.prefixRadio).should('not.exist');
              cy.get(ListItem.prefixCheckbox)
                .should('exist')
                .should('be.visible');
              break;
            default:
              break;
          }
          break;
        case 'suffix':
          switch (value) {
            case 'null':
              cy.get(ListItem.suffix).children().should('not.exist');
              cy.get(ListItem.suffixToggle).should('not.exist');
              cy.get(ListItem.suffixRadio).should('not.exist');
              cy.get(ListItem.suffixCheckbox).should('not.exist');
              break;
            case 'toggle':
              cy.get(ListItem.suffix).children().its('length').should('eq', 1);
              cy.get(ListItem.suffixToggle)
                .should('exist')
                .should('be.visible');
              cy.get(ListItem.suffixRadio).should('not.exist');
              cy.get(ListItem.suffixCheckbox).should('not.exist');
              break;
            case 'radio':
              cy.get(ListItem.suffix).children().its('length').should('eq', 1);
              cy.get(ListItem.suffixToggle).should('not.exist');
              cy.get(ListItem.suffixRadio).should('exist').should('be.visible');
              cy.get(ListItem.suffixCheckbox).should('not.exist');
              break;
            case 'checkbox':
              cy.get(ListItem.suffix).children().its('length').should('eq', 1);
              cy.get(ListItem.suffixToggle).should('not.exist');
              cy.get(ListItem.suffixRadio).should('not.exist');
              cy.get(ListItem.suffixCheckbox)
                .should('exist')
                .should('be.visible');
              break;
            default:
              break;
          }
          break;
        case 'suffixLogo':
          switch (value) {
            case 'none':
              cy.get(ListItem.suffix).children().should('not.exist');
              cy.get(ListItem.suffixToggle).should('not.exist');
              cy.get(ListItem.suffixRadio).should('not.exist');
              cy.get(ListItem.suffixCheckbox).should('not.exist');
              break;
            case 'xfinity':
              cy.get(ListItem.suffix).children().its('length').should('eq', 1);
              cy.get(ListItem.suffixLogo)
                .should('exist')
                .should('be.visible')
                .should('have.attr', 'texture-src')
                .and('include', 'Xfinity-Provider-Logo-Square.png');
              cy.get(ListItem.suffixToggle).should('not.exist');
              cy.get(ListItem.suffixRadio).should('not.exist');
              cy.get(ListItem.suffixCheckbox).should('not.exist');
              break;
            default:
              break;
          }
          break;
        case 'prefixLogo':
          switch (value) {
            case 'none':
              cy.get(ListItem.prefix).children().should('not.exist');
              cy.get(ListItem.prefixToggle).should('not.exist');
              cy.get(ListItem.prefixRadio).should('not.exist');
              cy.get(ListItem.prefixCheckbox).should('not.exist');
              break;
            case 'xfinity':
              cy.get(ListItem.prefix).children().its('length').should('eq', 1);
              cy.get(ListItem.prefixLogo)
                .should('exist')
                .should('be.visible')
                .should('have.attr', 'texture-src')
                .and('include', 'Xfinity-Provider-Logo-Square.png');
              cy.get(ListItem.prefixToggle).should('not.exist');
              cy.get(ListItem.prefixRadio).should('not.exist');
              cy.get(ListItem.prefixCheckbox).should('not.exist');
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
  );
}
