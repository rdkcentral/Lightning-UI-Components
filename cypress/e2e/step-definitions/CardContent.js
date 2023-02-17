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
        pageObject._getElementByName(component).should('have.attr', 'alpha');
      } else {
        pageObject
          ._getElementByName(component)
          .should('not.have.attr', 'alpha');
      }
    }
  );

  /**
   * @module CardContent
   * @function I verify that the {string} {string} displays icon
   * @param {String} pageName
   * @param {String} componentName
   * @param {String} value - value for validation
   * @example I verify that the 'CardSection' 'iconSrc' displays icon
   */
  Then(
    'I verify that the {string} {string} displays icon',
    (pageName, component) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject
        ._getElementByName(component)
        .should('be.visible')
        .should(
          'have.attr',
          'texture-src',
          'static/media/_/_/@lightning/ui-core/src/assets/images/ic_check_circle_outline_inverse_24.png'
        )
        .and(
          'not.have.attr',
          'static/media/_/_/@lightning/ui-core/src/assets/images/ic_check_circle_outline_inverse_24.png'
        );
    }
  );

  /**
   * @module CardContent
   * @function I verify that the {string} {string} does not display icon
   * @param {String} pageName
   * @param {String} componentName
   * @param {String} value - value for validation
   * @example I verify that the 'CardSection' 'iconSrc' does not display icon
   */
  Then(
    'I verify that the {string} {string} does not display icon',
    (pageName, component) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject
        ._getElementByName(component)
        .should('be.visible')
        .should('have.attr', 'texture-src', 'null')
        .and('not.have.attr', 'src');
    }
  );
}
