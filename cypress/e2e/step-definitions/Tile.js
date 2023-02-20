import Tile from '../pageObjects/tilesAndCards/tile.tilesandcards';

import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Tile
   * @function I verify that the {string} is {string} for {string} component
   * @description Cucumber statement to verify the property of a component
   * @param {String} property - property
   * @param {String} value - value
   * @param {String} component - component
   * @example I verify that the 'persistentMetadata' is 'true' for 'Tile' component
   */
  Then(
    'I verify that the {string} is {string} for {string} component',
    (prop, value, component) => {
      switch (prop) {
        case 'persistentMetadata':
          if (value === 'true') {
            cy.get(Tile.metadata).should('be.visible');
          } else {
            cy.get(Tile.metadata).should('not.exist');
          }
          break;
        case 'blur':
          if (value === 'true') {
            cy.get(Tile.blur).should('have.attr', 'alpha');
          } else {
            cy.get(Tile.blur).should('not.have.attr', 'alpha');
          }
          break;
        case 'fill':
          if (value === 'true') {
            cy.get(Tile.fill).should('be.visible');
          } else {
            cy.get(Tile.fill).should('not.exist');
          }
          break;
        case 'checked':
          if (value === 'true') {
            cy.get(Tile.checked).should('be.visible');
          } else {
            cy.get(Tile.checked).should('not.exist');
          }
          break;
        case 'standard':
          cy.get(Tile.metadata).should('not.have.attr', 'mounty');
          break;
        case 'inset':
          cy.get(Tile.metadata).should('have.attr', 'mounty');
          break;
        case 'format':
          if (value === 'default') {
            cy.get(Tile.format).should('not.have.attr', 'alpha');
          } else if (value === 'circle') {
            cy.get(Tile.format).should('have.attr', 'alpha', '0.001');
          } else if (value === 'square') {
            cy.get(Tile.format).should('have.attr', 'alpha', '0.001');
          } else {
            cy.get(Tile.format).should('not.have.attr', 'alpha');
          }
          break;
        default:
          break;
      }
    }
  );
}
