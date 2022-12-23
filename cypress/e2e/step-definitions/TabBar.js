import TabBar from '../pageObjects/layout/tabbar.layout';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module TabBar
   * @function I navigate to tile {Integer} content
   * @description Cucumber statement to navigate to specified TabBar tile
   * @param {String} tileNum
   * @example I navigate to tile 1 content
   */
   Then(
    'I navigate to tile {int} content',
    (tileNum) => {
      for (let i = 0; i < tileNum; i++) {
        cy.wait(100).action('RIGHT');
      }

      cy.wait(100).action('DOWN');
    }
  );

  /**
   * @module TabBar
   * @function I navigate to the {String} tile content
   * @description Cucumber statement to navigate to the next/previous TabBar tile
   * @param {String} direction
   * @example I navigate to the 'next' tile content
   */
   Then(
    'I navigate to the {string} tile content',
    (direction) => {
      switch (direction) {
        case 'next':
          cy.wait(100).action('UP');
          cy.wait(100).action('RIGHT');
          cy.wait(100).action('DOWN');
          break;
        case 'previous':
          cy.wait(100).action('UP');
          cy.wait(100).action('LEFT');
          cy.wait(100).action('DOWN');
        default:
          throw new Error(
            `${direction} direction case not found! \nPlease check the direction value or implement the missing case.`
          );
      }
    }
  );

  /**
   * @module TabBar
   * @function I verify each tile besides tile {Integer} have a {String} alpha
   * @description Cucumber statement to verify the alpha of unfocused tiles
   * @param {Integer} selectedTile
   * @param {String} alphaState
   * @example I verify each tile besides tile 1 have a 'normal' alpha
   */
   Then(
    'I verify each tile besides tile {int} have a {string} alpha',
    (selectedTile, alphaState) => {

      switch (alphaState) {
        case 'normal':
          cy.get(TabBar.customTabsTiles).each(($tile) => {
            cy.get($tile).should('not.have.attr', 'alpha');
          });
          break;
        case 'lowered':
          cy.get(TabBar.customTabsTiles).each(($tile, index) => {
            if (index != selectedTile) {
              cy.get($tile).should('have.attr', 'alpha', '0.3');
            } else {
              cy.get($tile).should('not.have.attr', 'alpha');
            }
          });
          break;
        default:
          throw new Error(
            `${alphaState} alphaState case not found! \nPlease check the alphaState value or implement the missing case.`
          );
      }
    }
  );
}