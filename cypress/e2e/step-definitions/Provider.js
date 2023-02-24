import getPageObject from '../pageObjects';
import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module Provider
   * @function I verify that the {string} control is set to {string} for the {string} page 
   * @description Cucumber statement to verify if a control on the Provider storybook page is true or false
   * @param {String} controlName
   * @param {String} value
   * @param {String} pageName
   * @example I verify that the 'disableRadius' control is set to 'true' for the 'Provider' page
   */
  Then(
    'I verify that the {string} control is set to {string} for the {string} page',
    (controlName, value, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      
      //The implementation of this step is dependent on the resoloution of this bug - https://ccp.sys.comcast.net/browse/LUI-697 

    }
  );
}
