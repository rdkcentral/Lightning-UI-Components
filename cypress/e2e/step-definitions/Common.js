import Icon from '../pageObjects/elements/icon.element';
import Badge from '../pageObjects/elements/badge.element';
import Card from '../pageObjects/tilesAndCards/card.tilesandcards';
import CardPersonality from '../pageObjects/tilesAndCards/cardpersonality.tilesandcards';
import CardSection from '../pageObjects/tilesAndCards/cardsection.tilesandcards';
import CardTitle from '../pageObjects/tilesAndCards/cardtitle.tilesandcards';
import CheckBox from '../pageObjects/elements/checkbox.element';
import Label from '../pageObjects/text/label.text';
import ProgressBar from '../pageObjects/utilities/progressbar.utilities';
import FocusManager from '../pageObjects/navigation/focusmanager.navigation';
import Row from '../pageObjects/navigation/row.navigation';
import Tile from '../pageObjects/tilesAndCards/tile.tilesandcards';
import Button from '../pageObjects/controls/button.controls';
import TextBox from '../pageObjects/text/textbox.text';
import Toggle from '../pageObjects/utilities/toggle.utilities';
import ToggleSmall from '../pageObjects/utilities/togglesmall.utilities';

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

function getPageObject(pageName) {
  const pageObjects = {
    icon: Icon,
    badge: Badge,
    card: Card,
    cardpersonality: CardPersonality,
    cardsection: CardSection,
    cardtitle: CardTitle,
    checkbox: CheckBox,
    label: Label,
    progressbar: ProgressBar,
    row: Row,
    textbox: TextBox,
    focusmanager: FocusManager,
    tile: Tile,
    button: Button,
    toggle: Toggle,
    togglesmall: ToggleSmall
  };

  if (pageName in pageObjects) {
    return pageObjects[pageName];
  } else {
    throw new Error(
      `${pageName} page not found! \nPlease check the page object name or implement the missing case.`
    );
  }
}

export default function () {
  /**
   * @module Common
   * @function I launch the LUI app
   * @description Cucumber statement to navigate to LUI app root
   * @example I launch the LUI app
   */
  Given('I launch the LUI app', () => {
    cy.visit('/');
  });

  /**
   * @module Common
   * @function I navigate to {String} {String} with {String} theme
   * @description Cucumber statement to navigate to the specified page with the specified story and theme
   * @param {String} pageName - the page to navigate to
   * @param {String} storyName - the story to be used
   * @param {String} themeName - the theme to be used
   * @example I navigate to 'Button' 'Basic' with  'Base' theme
   */
  When(
    'I navigate to {string} {string} with {string} theme',
    (pageName, storyName, themeName) => {
      const page = pageName.toLowerCase();
      const story = storyName.toLowerCase();
      const theme = themeName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject.navigate(story, theme);
    }
  );

  /**
   * @module Common
   * @function I verify that the {String} component is displayed
   * @description Cucumber statement to verify that the component is displayed
   * @param {String} componentName
   * @example I verify that the 'Icon' component is displayed
   */
  Then('I verify that the {string} component is displayed', componentName => {
    const page = componentName.toLowerCase();
    const pageObject = getPageObject(page);
    pageObject._getElementByName(componentName).should('be.visible');
  });

  /**
   * @module Common
   * @function I verify that the {String} {String} component is displayed
   * @description Cucumber statement to verify that the component is displayed
   * @param {String} pageName
   * @param {String} componentName
   * @example I verify that the 'Card' 'Personality' component is displayed
   */
  Then(
    'I verify that the {string} {string} component is displayed',
    (pageName, componentName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      pageObject._getElementByName(componentName).should('be.visible');
    }
  );

  /**
   * @module Common
   * @function I verify the {String} {String} component with visual regression
   * @description Cucumber statement to verify the visual regression of an element on a particular page
   * Note: This step does not do any navigation, instead it assumes
   * that you are already on the page you want to verify the element on.
   * @param {String} elementName - The name of the element to verify, this map to the name of the element in the page object.
   * @param {String} storyName - The name of the story to verify the element on. (this can also include the page and the theme, e.g. "Icon SVG")
   * @example I verify the 'Icon' 'SVG' component with visual regression
   */
  Then(
    'I verify the {string} {string} component with visual regression',
    (elementName, storyName) => {
      const page = elementName.toLowerCase();
      const pageObject = getPageObject(page);
      const viewPort = `${Cypress.config().viewportWidth}x${
        Cypress.config().viewportHeight
      }`;

      cy.hidePadding()
        .wait(1000)
        .then(() => {
          pageObject
            ._getElementByName(elementName)
            .vrtTrack(`${elementName} (${storyName})`, {
              keepScreenshot: true,
              viewport: `${viewPort}`,
              retryLimit: 1
            });
        });
    }
  );

  /**
   * @module Common
   * @function I set the {String} to {String} for {String} component
   * @description Cucumber statement to set the specified element to the specified value
   * @param {String} prop
   * @param {String} value
   * @param {String} pageName
   * @example I set the 'height' to '85' for 'Icon' component
   */
  Then(
    'I set the {string} to {string} for {string} component',
    (prop, value, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject.setProp(prop, value);
    }
  );

  /**
   * @module Common
   * @function I verify that the {String} of {String} component is {String}
   * @description Cucumber statement to verify the property of a component
   * @example I verify that the 'height' of 'Icon' component is '85px'
   */
  Then(
    'I verify that the {string} of {string} component is {string}',
    (property, pageName, value) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      if (property === 'progress') {
        cy.wait(300); // wait for the progress bar to render
        ProgressBar.progressBarValue.then(progressBarValue => {
          ProgressBar.progressValue.then(progressValue => {
            const actualPercentage =
              Number(progressValue) / Number(progressBarValue);
            expect(actualPercentage).to.eq(parseFloat(value));
          });
        });
      } else {
        pageObject
          ._getElementByName(pageName)
          .should('have.attr', 'style')
          .should('contain', `${property}: ${value}`);
      }
    }
  );

  /**
   * @module Common
   * @function I verify that the {String} of {String} {String} component is {String}
   * @description Cucumber statement to verify the property of a component
   * @example I verify that the 'height' of 'Card' 'Personality' component is '85px'
   */
  Then(
    'I verify that the {string} of {string} {string} component is {string}',
    (property, pageName, componentName, value) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject
        ._getElementByName(componentName)
        .should('have.attr', 'style')
        .should('contain', `${property}: ${value}`);
    }
  );

  /**
   * @module Common
   * @function I press {String} key
   * @description Cucumber statement to send key
   * @param {String} key - Key values can DOWN,UP,ENTER,BACK etc
   * @example I press 'DOWN' key
   *
   */
  Given('I press {string} key', key => {
    cy.action(key);
  });

  /**
   * @module Common
   * @function Given I press {string} key {int} times
   * @description Cucumber statement to send key n times
   * @param {String} key Key values can DOWN,UP,ENTER,BACK etc
   * @param {int} key Key values can 2,5,6 etc
   * @example
   * Given I press 'DOWN' key 4 times
   *
   */
  Given(/I press '(.+)' key (.+) times$/, (key, n) => {
    cy.repeatAction(key, n);
  });

  /**
   * @module Common
   * @function I verify if {String} page {String} has loaded
   * @description Cucumber statement to validate if the page's data has loaded
   * @param {String} pageName
   * @example I verify if 'Row' page data has loaded
   */
  Then('I verify if {string} page data has loaded', pageName => {
    const page = pageName.toLowerCase();
    if (page.includes('row')) {
      cy.get(Row.button1Label).should('be.visible');
    } else {
      throw new Error(
        `${page} page not found! \nPlease check the page object name or implement the missing case.`
      );
    }
  });

  /**
   * @module Common
   * @function I verify there are {Integer} assets per row on the {String} page
   * @description Cucumber statement to verify the number of assets per row
   * @param {Integer} no_of_assets
   * @param {String} pageName
   * @example I verify there are 4 assets per row on the 'Row' page
   */
  Then(
    'I verify there are {int} assets per row on the {string} page',
    (no_of_assets, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      cy.get(pageObject.row)
        .first()
        .children()
        .should('have.length', no_of_assets);
    }
  );

  /**
   * @module Common
   * @function I verify that {String} {String} {String} has text {String}
   * @description Cucumber statement to verify the the text of a component
   * @example I verify that 'Card' 'Personality' 'Title' has text 'LUI Test'
   */
  Then(
    'I verify that {string} {string} {string} has text {string}',
    (pageName, componentName, elementName, expectedText) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const element = componentName + elementName;

      pageObject
        ._getElementByName(element)
        .should('have.attr', 'texture-text', expectedText);
    }
  );

  /**
   * @module Common
   * @function I verify that {String} {String} {String} has textColor {String}
   * @description Cucumber statement to verify the textColor of the text in a component
   * @param {String} pageName
   * @param {String} componentName
   * @param {String} elementName
   * @param {String} color
   * @example I verify that 'TextBox' 'Base' 'Text' has textColor '4294967040'
   */
  Then(
    'I verify that {string} {string} {string} has textColor {string}',
    (pageName, componentName, elementName, color) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const element = componentName + elementName;

      pageObject
        ._getElementByName(element)
        .should('have.attr', 'texture-text_color', color);
    }
  );

  /**
   * @module Common
   * @function I verify that {String} {String} {String} has property:value {String}
   * @description Cucumber statement to verify the textColor of the text in a component
   * @param {String} pageName
   * @param {String} componentName
   * @param {String} elementName
   * @param {String} property:value
   * @example   I verify that 'TextBox' 'Base' 'Text' has property:value 'verticalAlign:top'
   */
  Then(
    'I verify that {string} {string} {string} has property:value {string}',
    (pageName, componentName, elementName, property) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const element = componentName + elementName;

      const prop = property.split(':')[0];
      const value = property.split(':')[1];

      const attributes = {
        verticalAlign: 'texture-vertical_align'
      };

      let attribute;
      if (prop in attributes) {
        attribute = attributes[prop];
      } else {
        throw new Error(
          `${pageName} Attribute not found! \nPlease check the attribute name of the element or implement the missing case.`
        );
      }

      pageObject
        ._getElementByName(element)
        .should('have.attr', attribute, value);
    }
  );

  /**
   * @module Common
   * @function I verify each element has width of {Float} and height of {Float} on {String} page
   * @description Cucumber statement to verify the sizing of elements on a particular page
   * @param {Float} width
   * @param {Float} height
   * @param {String} pageName
   * @example I verify each tile has width of 150.0 and height of 40.0 on 'Row' page
   */
  Then(
    'I verify each element has width of {float} and height of {float} on {string} page',
    (width, height, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      cy.get(pageObject.rowElements)
        .should('have.attr', 'w', width)
        .and('have.attr', 'h', height);
    }
  );

  /**
   * @module Common
   * @function I verify that the {String} component on the {String} page has text {String}
   * @description Cucumber statement to verify the display text of a component
   * @param {String} componentName
   * @param {String} pageName
   * @param {String} expectedText
   * @example I verify that the 'Button' component on the 'Row' page has text 'Button 1'
   */
  Then(
    'I verify that the {string} component on the {string} page has text {string}',
    (componentName, pageName, expectedText) => {
      const page = pageName.toLowerCase();
      const component = componentName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject
        ._getElementByName(component, 2000)
        .should('have.attr', 'texture-text', expectedText);
    }
  );

  /**
   * @module Common
   * @function I verify the {String} is {String} for {String} {String}
   * @description Cucumber statement to verify the settings of a module
   * @param {String} control
   * @param {String} value
   * @param {String} pageName
   * @param {String} component
   * @example Then I verify the 'mode' is 'focused' for 'Card' 'Personality'
   */
  Then(
    'I verify the {string} is {string} for {string} {string}',
    (control, value, pageName, component) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      switch (control) {
        case 'mode':
          switch (value) {
            case 'focused':
              pageObject
                ._getElementByName(component)
                .should('have.attr', 'scalex', '1.2');
              break;
            case 'unfocused':
              pageObject
                ._getElementByName(component)
                .should('not.have.attr', 'scalex');
              break;
            case 'disabled':
              pageObject._getElementByName(component).should('be.disabled');
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

  /**
   * @module Common
   * @function I verify that the {String} component on the {String} page is in focus
   * @description Cucumber statement to verify displayed element is in focus
   * @param {String} componentName
   * @param {String} pageName
   * @example I verify that the 'Button1' component on the 'Row' page is in focus
   */
  Then(
    'I verify that the {string} component on the {string} page is in focus',
    (componentName, pageName) => {
      const page = pageName.toLowerCase();
      const component = componentName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject
        ._getElementByName(component)
        .should('have.attr', 'focused', 'true');
    }
  );

  /**
   * @module Common
   * @function I verify that I am able to navigate to the {string} element of the {string} {string} row
   * @description Cucumber statement to verify that user is able to navigate to the start or end of the specified row
   * @param {String} position
   * @param {String} pageName
   * @param {String} rowName
   * @example I verify that I am able to navigate to the 'last' element of the 'Row' 'First' row
   */
  Then(
    'I verify that I am able to navigate to the {string} element of the {string} {string} row',
    (position, pageName, rowName) => {
      const page = pageName.toLowerCase();
      const row = rowName.toLowerCase();
      const pageObject = getPageObject(page);
      const key = position === 'last' ? 'RIGHT' : 'LEFT';

      if (position === 'last') {
        pageObject
          ._getElementByName(row)
          .should('have.attr', 'focused', 'true')
          .nextAll()
          .each(el => {
            cy.action(key);
            cy.wrap(el).should('have.attr', 'focused', 'true');
          });
      } else {
        pageObject
          ._getElementByName(row)
          .parent()
          .children()
          .last()
          .should('have.attr', 'focused', 'true')
          .prevAll()
          .each(el => {
            cy.action(key);
            cy.wrap(el).should('have.attr', 'focused', 'true');
          });
      }
    }
  );

  /**
   * @module Common
   * @function I verify that elements are horizontally evenly spaced for {String} component
   * @description Cucumber statement to verify the specified page elements are evenly spaced horizontally
   * @param {String} pageName
   * @example I verify that elements are horizontally evenly spaced for 'Row' component
   */
  Then(
    'I verify that elements are horizontally evenly spaced for {string} component',
    pageName => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const elements = [];
      cy.get(pageObject.row)
        .each($row => {
          const rowId = $row.attr('id');
          cy.get($row)
            .children()
            .each(($element, $index) => {
              // the spacing of the first tile is different
              if ($index !== 0) {
                // keep track of the tiles in the row for later use
                const elementInfo = {
                  id: $element.attr('id'),
                  rowId
                };
                // push the tile info to the tiles array
                cy.getOffsetRect($element).then(data => {
                  elements.push({ ...elementInfo, ...data });
                });
              }
            });
        })
        .then(() => {
          const spaces = [];
          elements.forEach((element, index, arr) => {
            if (index !== 0) {
              const prevElement = arr[index - 1];
              const space = element.left - prevElement.right;
              spaces.push(space);
            }
          });
          // assert that the spaces are evenly spaced
          const averageSpace = Math.round(
            spaces.reduce((a, b) => a + b, 0) / spaces.length
          );
          const space = Math.round(spaces[1]);
          expect(Math.ceil(averageSpace)).equal(Math.ceil(space));
        });
    }
  );

  /**
   * @module Common
   * @function I verify that the spacing between elements of {String} component is {String}
   * @description Cucumber statement to verify the spacing of a component
   * @param {String} pageName
   * @param {String} spaceValue
   * @example I verify that the spacing between elements of 'Row' component is '17'
   */
  Then(
    'I verify that the spacing between elements of {string} component is {string}',
    (pageName, expectedSpaceValue) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const spacing = expectedSpaceValue.toLowerCase();
      const elements = [];
      cy.get(pageObject.row)
        .each($row => {
          const rowId = $row.attr('id');
          cy.get($row)
            .children()
            .each(($element, $index) => {
              // the spacing of the first tile is different
              if ($index !== 0) {
                // keep track of the tiles in the row for later use
                const elementInfo = {
                  id: $element.attr('id'),
                  rowId
                };
                // push the tile info to the tiles array
                cy.getOffsetRect($element).then(data => {
                  elements.push({ ...elementInfo, ...data });
                });
              }
            });
        })
        .then(() => {
          const spaces = [];
          elements.forEach((element, index, arr) => {
            if (index !== 0) {
              const prevElement = arr[index - 1];
              const space = element.left - prevElement.right;
              spaces.push(space);
            }
          });
          const space = Math.round(spaces[1]);
          expect(Math.ceil(spacing)).equal(Math.ceil(space));
        });
    }
  );

  /**
   * @function I verify there are {int} fully visible assets on the {String} page
   * @description Cucumber statement to verify the fully visible assets on the defined page
   * @param {int} no_of_assets
   * @param {String} pageName
   * @example I verify there are 10 fully visible assets on the 'Row' page
   */
  Then(
    'I verify there are {int} fully visible assets on the {string} page',
    (no_of_assets, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      let visibleTiles = 0;

      cy.get(pageObject.row)
        .should('be.visible')
        .first()
        .should('be.visible')
        .children()
        .each($tile => {
          // count the visible tiles based on where they are positioned on screen using the x attribute
          if (parseInt($tile.attr('x')) < 1638) {
            visibleTiles++;
          }
        })
        .then(() => {
          // add 1 since the first tile has no x attribute
          expect(visibleTiles + 1).equal(no_of_assets);
        });
    }
  );
}