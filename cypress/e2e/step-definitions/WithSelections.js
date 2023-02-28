import WithSelections from '../pageObjects/utilities/withSelections.utilities';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Common
   * @function I verify that buttons are {Integer} pixels apart for {String} component
   * @description Cucumber statement to verify the specified page buttons are the specified number of pixels apart
   * @param {Integer} expectedSpace - the expected space between buttons
   * @param {String} pageName
   * @example I verify that buttons are 20 pixels apart for 'Browse Basic' component
   */
  Then(
    'I verify that buttons are {int} pixels apart for {string} component',
    (expectedSpace, pageName) => {
      cy.wait(500)
        .getSpaceBetweenTiles(WithSelections.underlinedButton)
        .then(space => {
          expect(space).to.equal(
            expectedSpace,
            `Buttons are evenly spaced by ${expectedSpace} pixels`
          );
        });
    }
  );
}
