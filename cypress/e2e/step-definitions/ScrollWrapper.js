import ScrollWrapper from '../pageObjects/layout/scrollwrapper.layout';

import { Then } from '@badeball/cypress-cucumber-preprocessor';

export default function () {
  /**
   * @module ScrollWrapper
   * @function I verify that scrollDuration of {string} {string} component is {string}
   * @description Cucumber statement to verify the settings of a module
   * @param {String} scrollDuration
   * @param {String} componentName
   * @param {String} duration
   * @example I verify that scrollDuration of 'ScrollWrapper' 'scrollduration' component is '0.1'
   */
  Then(
    'I verify that scrollDuration of {string} {string} component is {string}',
    (pageName, componentName, duration) => {
      if (duration == '0.1') {
        cy.get(ScrollWrapper.progress).should('have.attr', 'y', -394);
      } else {
        cy.get(ScrollWrapper.progress).should(
          'have.attr',
          'y',
          -290.37737639923876
        );
      }
    }
  );

  /**
   * @module ScrollWrapper
   * @function I wait and verify for autoScroll to scroll with {int}, {int} and {int}
   * @description Cucumber statement to verify the settings of a module
   * @param {Integer} scrollsteps
   * @param {Integer} autoScrollSpeed
   * @param {Integer} autoScrollDelay
   * @example I wait for autoScroll to scroll with <scrollsteps>, <autoScrollSpeed> and <autoScrollDelay>
   *
   */
  Then(
    'I wait for autoScroll to scroll with {int}, {int} and {int}',
    (scrollsteps, autoScrollSpeed, autoScrollDelay) => {
      let scrollcontainerHeight = null;
      let fadecontainerHeight = null;
      let finalValue = null;
      let steps = null;
      let duration = null;
      let totalDuration = null;

      cy.get(ScrollWrapper.scrollcontainer)
        .getStyleAttribute()
        .then(style => {
          scrollcontainerHeight = Number(style['height'].replace('px', ''));

          cy.get(ScrollWrapper.fadecontainer)
            .getStyleAttribute()
            .then(style => {
              fadecontainerHeight = Number(style['height'].replace('px', ''));

              finalValue = scrollcontainerHeight - fadecontainerHeight;
              steps = Math.ceil(finalValue / scrollsteps);
              duration = autoScrollSpeed * steps;
              totalDuration = duration + autoScrollDelay;

              cy.wait(totalDuration);
            });
        });
    }
  );

  /**
   * @module ScrollWrapper
   * @function I verify that it takes {int} seconds for the ScrollWrapper {String} to finish scrolling
   * @description Cucumber statement to verify that scrolling is completed within a specific timeframe
   * @param {int} seconds - number of seconds to wait for scroll to finish
   * @example I verify that it takes 10 seconds for the ScrollWrapper 'Basic' to finish scrolling
   */
  Then(
    'I verify that it takes {int} seconds for the ScrollWrapper {string} to finish scrolling',
    (seconds, storyName) => {
      let endPosition = null;

      if (storyName === 'Basic') {
        endPosition = '-75'; // This value is different in Cypress and Storybook
      } else if (storyName === 'Text Array') {
        endPosition = '-394';
      } else if (storyName === 'Object Array') {
        endPosition = '-142';
      }

      cy.get(ScrollWrapper.scrollcontainer, { timeout: seconds * 1000 })
        .should('have.attr', 'y')
        .and('equal', endPosition);
    }
  );
}
