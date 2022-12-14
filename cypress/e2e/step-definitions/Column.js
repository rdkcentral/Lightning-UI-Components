import Column from '../pageObjects/navigation/column.navigation';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Column
   * @function I verify each {String} has width of {Float} and height of {Float} on {String} page
   * @description Cucumber statement to verify the height and width of each component
   * @param {String} componentName
   * @param {Float} width
   * @param {Float} height
   * @param {String} pageName
   * @example I verify each 'Sticky Title Header' has width of 156.0 and height of 36.0 on 'Column' page
   */
   Then(
    'I verify each {string} has width of {float} and height of {float} on {string} page',
    (componentName, width, height, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = Column;
      const component = componentName.toLowerCase();

      pageObject
        ._getElementByName(component)
        .should('have.attr', 'style')
        .should('contain', `width: ${width}`)
        .and('contain', `height: ${height}`);
      }
  );
}