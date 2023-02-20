import getPageObject from '../pageObjects';
import {getStoryName} from '../../support/helpers';
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

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
   * @function I navigate to {String} with {String} theme
   * @description Cucumber statement to navigate to the specified page with the specified story and theme
   * @param {String} pageName - the page to be used
   * @param {String} themeName - the theme to be used
   * @example I navigate to 'Button' with 'Base' theme
   */
  When('I navigate to {string} with {string} theme', (pageName, themeName) => {
    const page = pageName.toLowerCase();
    const story = getStoryName(pageName).toLowerCase();
    const theme = themeName.toLowerCase();
    const pageObject = getPageObject(page);

    pageObject.navigate(story, theme);
  });

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
   * @function I verify that the {String} {String} component is not displayed
   * @description Cucumber statement to verify that the component is not displayed
   * @param {String} pageName
   * @param {String} componentName
   * @example I verify that the 'Row' 'Button1' component is not displayed
   */
  Then(
    'I verify that the {string} {string} component is not displayed',
    (pageName, componentName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      pageObject._getElementByName(componentName).should('not.be.visible');
    }
  );

  /**
   * @module Common
   * @function I verify that the {String} {String} component does not exist in DOM
   * @description Cucumber statement to verify that the component does not exist in DOM
   * @param {String} pageName
   * @param {String} componentName
   * @example I verify that the 'Row' 'Button3' component does not exist in DOM
   */
  Then(
    'I verify that the {string} {string} component does not exist in DOM',
    (pageName, componentName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      pageObject._getElementByName(componentName).should('not.exist');
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

      // wait 1s to render the component before taking screenshot
      cy.wait(1000).then(() => {
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
   * @function I verify the {String} component with visual regression
   * @description Cucumber statement to verify the visual regression of an element on a particular page
   * Note: This step does not do any navigation, instead it assumes
   * that you are already on the page you want to verify the element on.
   * @param {String} elementName - The name of the element to verify, this map to the name of the element in the page object.
   * @example I verify the 'Label' component with visual regression
   */
  Then(
    'I verify the {string} component with visual regression',
    elementName => {
      const page = elementName.toLowerCase();
      const pageObject = getPageObject(page);
      const viewPort = `${Cypress.config().viewportWidth}x${
        Cypress.config().viewportHeight
      }`;

      // wait 1s to render the component before taking screenshot
      cy.wait(1000).then(() => {
        pageObject
          ._getElementByName(elementName)
          .vrtTrack(`${elementName} (${elementName})`, {
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

      pageObject
        ._getElementByName(pageName)
        .should('have.attr', 'style')
        .should('contain', `${property}: ${value}`);
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
    cy.wait(100).action(key);
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
    const pageObject = getPageObject(page);
    if (page.includes('row')) {
      cy.get(pageObject.button1).should('be.visible');
    } else {
      throw new Error(
        `${page} page not found! \nPlease check the page object name or implement the missing case.`
      );
    }
  });

  /**

   @module Common
   @function I verify there are {Integer} assets per {String} on the {String} page
   @description Cucumber statement to verify the number of assets per row
   @param {Integer} no_of_assets
   @param {String} pageName
   @example I verify there are 4 assets per 'Row1' on the 'Row' page
   */
  Then(
    'I verify there are {int} assets per {string} on the {string} page',
    (no_of_assets, element, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject
        ._getElementByName(element)
        .first()
        .children()
        .should('have.length', no_of_assets);
    }
  );

  /**
   * @module Common
   * @function I verify that there are {int} {string} on the {string} page
   * @description Cucumber statement to verify the number of rows on page
   * @param {Integer} no_of_rows
   * @param {String} element
   * @param {String} pageName
   * @example I verify that there are 6 'rows' on the 'Column' page
   */
  Then(
    'I verify that there are {int} {string} on the {string} page',
    (no_of_rows, element, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      pageObject._getElementByName(element).should('have.length', no_of_rows);
    }
  );

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
   * @function I verify that {String} {String} has {String} {String}
   * @description Cucumber statement to verify the attribute's value of a component
   * @example I verify that 'Card' 'Title' has 'text' 'LUI Test'
   */
  Then(
    'I verify that {string} {string} has {string} {string}',
    (pageName, elementName, attributeName, expectedValue) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const attribute = attributeName.toLowerCase();

      switch (attribute) {
        case 'text':
          pageObject
            ._getElementByName(elementName)
            .should('have.attr', 'texture-text', expectedValue);
          break;
        case 'textColor':
          pageObject
            ._getElementByName(elementName)
            .should('have.attr', 'texture-text_color', expectedValue);
          break;
      }
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
      const pageObject = getPageObject(page);
      const component = componentName.toLowerCase();

      pageObject._getElementByName(component).each($element => {
        cy.wrap($element)
          .should('have.attr', 'style')
          .should('contain', `width: ${width}`)
          .and('contain', `height: ${height}`);
      });
    }
  );

  /**
   * @module Common
   * @function I verify that all {string} of the {string} page have text {string}
   * @description Cucumber statement to verify the displayed text of multiple components if the text is
   * the same on different components
   * @param {String} componentName
   * @param {String} pageName
   * @param {String} expectedText
   * @example I verify that all 'Buttons labels' of the 'Row' page have text 'Button'
   */
  Then(
    'I verify that all {string} of the {string} page have text {string}',
    (componentName, pageName, expectedText) => {
      const component = componentName.toLowerCase();
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      pageObject._getElementByName(component).each(() => {
        if (page === 'column' || component.includes('column')) {
          cy.action('DOWN');
        } else {
          cy.action('RIGHT');
        }
      });
      pageObject
        ._getElementByName(component)
        .getAttributes('texture-text')
        .each(elements => {
          expect(elements).contains(expectedText);
        });
    }
  );

  /**
   * @module Common
   * @function I verify the mode is {String} for {String}
   * @description Cucumber statement to verify the mode of a module that has the same name as a component
   * @param {String} value
   * @param {String} pageName
   * @example Then I verify the mode is 'focused' for 'Radio'
   */
  Then('I verify the mode is {string} for {string}', (value, pageName) => {
    const page = pageName.toLowerCase();
    const pageObject = getPageObject(page);

    switch (value) {
      case 'focused':
        pageObject
          ._getElementByName(pageName)
          .should('have.attr', 'focused', 'true');
        break;
      case 'unfocused':
        pageObject
          ._getElementByName(pageName)
          .should('not.have.attr', 'focused');
        break;
      case 'disabled':
        pageObject
          ._getElementByName(pageName)
          .should('not.have.attr', 'focused');
        break;
      case 'selected':
        pageObject
          ._getElementByName(pageName)
          .should('not.have.attr', 'focused');
        break;
      default:
        break;
    }
  });

  /**
   * @module Common
   * @function I verify the mode is {String} for {String} {String}
   * @description Cucumber statement to verify the mode of a component
   * @param {String} value
   * @param {String} pageName
   * @param {String} componentName
   * @example Then I verify the mode is 'focused' for 'Row' 'Row elements'
   */
  Then(
    'I verify the mode is {string} for {string} {string}',
    (value, pageName, componentName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      switch (value) {
        case 'focused':
          pageObject
            ._getElementByName(componentName)
            .should('have.attr', 'focused', 'true');
          break;
        case 'unfocused':
          pageObject
            ._getElementByName(componentName)
            .should('not.have.attr', 'focused');
          break;
        case 'disabled':
          pageObject
            ._getElementByName(componentName)
            .should('not.have.attr', 'focused');
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
   * @function I verify that I am able to navigate to the {string} element of the {string} {string}
   * @description Cucumber statement to verify that user is able to navigate to the start or end of the specified row/column
   * @param {String} position
   * @param {String} pageName
   * @param {String} rowName
   * @example I verify that I am able to navigate to the 'last' element of the 'Row' 'First'
   */
  Then(
    'I verify that I am able to navigate to the {string} element of the {string} {string}',
    (position, pageName, rowName) => {
      const page = pageName.toLowerCase();
      const row = rowName.toLowerCase();
      const pageObject = getPageObject(page);

      let key = '';
      if (page === 'column' || row.includes('column')) {
        key = position === 'last' ? 'DOWN' : 'UP';
      } else {
        key = position === 'last' ? 'RIGHT' : 'LEFT';
      }
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
              // the spacing of the first element is different
              if ($index !== 0) {
                // keep track of the elements in the row for later use
                const elementInfo = {
                  id: $element.attr('id'),
                  rowId
                };
                // push the element info to the elements array
                cy.getOffsetRect($element).then(data => {
                  elements.push({...elementInfo, ...data});
                });
              }
            });
        })
        .then(() => {
          const spaces = [];

          // create two dimensional array of the elements and rows
          const rowsWithElementsMatrix = Object.values(
            // group the elements by row
            elements.reduce((groupedElements, currentElement) => {
              if (!groupedElements[currentElement.rowId]) {
                groupedElements[currentElement.rowId] = [];
              }
              groupedElements[currentElement.rowId].push(currentElement);
              return groupedElements;
            }, {})
          );

          // get the spaces between each element in each row
          rowsWithElementsMatrix.forEach(rowWithElements => {
            rowWithElements.forEach((element, index, arr) => {
              if (index !== 0) {
                const prevElement = arr[index - 1];
                const space = element.left - prevElement.right;
                spaces.push(space);
              }
            });
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
   * @function I verify that {String} are vertically evenly spaced for {String} component
   * @description Cucumber statement to verify the specified page rows are evenly spaced vertically
   * @param {String} pageName
   * @example I verify that 'Rows' are vertically evenly spaced for 'Column' component
   */
  Then(
    'I verify that {string} are vertically evenly spaced for {string} component',
    (componentName, pageName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const elementRows = [];

      pageObject
        ._getElementByName(componentName)
        .each($row => {
          // push the row info to the elementRows array
          cy.getOffsetRect($row).then(data => {
            elementRows.push({...data});
          });
        })
        .then(() => {
          const spaces = [];
          // get the spaces between each row
          elementRows.forEach((row, index) => {
            if (index !== 0) {
              const prevRow = elementRows[index - 1];
              const space = row.top - prevRow.bottom;
              spaces.push(Math.round(space));
            }
          });

          if (spaces.length > 1) {
            // remove the first space since it is often different
            spaces.splice(0, 1);
          }

          // assert that the spaces are evenly spaced
          const averageSpace = Math.round(
            spaces.reduce((a, b) => a + b, 0) / spaces.length
          );
          const space = spaces[0];
          expect(Math.ceil(averageSpace)).equal(Math.ceil(space));
        });
    }
  );

  /**
   * @module Common
   * @function I verify that the spacing between the {String} elements of {String} component is {String}
   * @description Cucumber statement to verify the spacing between specified elements of a component
   * @param {String} componentName
   * @param {String} pageName
   * @param {String} spaceValue
   * @example I verify that the spacing between the 'row' elements of 'Row' component is '17'
   */
  Then(
    'I verify that the spacing between the {string} elements of {string} component is {string}',
    (componentName, pageName, expectedSpaceValue) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const spacing = expectedSpaceValue.toLowerCase();
      const elements = [];
      pageObject
        ._getElementByName(componentName)
        .each($row => {
          const rowId = $row.attr('id');
          cy.get($row)
            .children()
            .each(($element, $index) => {
              // the spacing of the first element is different
              if ($index !== 0) {
                // keep track of the elements in the row for later use
                const elementInfo = {
                  id: $element.attr('id'),
                  rowId
                };
                // push the element info to the elements array
                cy.getOffsetRect($element).then(data => {
                  elements.push({...elementInfo, ...data});
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

  /**
   * @module Common
   * @function I verify that the {String} {String} component is animating
   * @description Cucumber statement to verify if a component is animating
   * @param {String} pageName
   * @param {String} componentName
   * @example I verify that the 'Distractor' 'Circle1' component is animating
   */
  Then(
    'I verify that the {string} {string} component is animating',
    (pageName, componentName) => {
      const page = pageName.toLowerCase();
      const component = componentName.toLowerCase();
      const pageObject = getPageObject(page);
      let initialValue, finalValue;
      const attribute = {
        distractor: 'scalex',
        wave: 'h',
        focusring: 'colorbl'
      };

      pageObject
        ._getElementByName(component)
        .should('have.attr', attribute[page])
        .then(value => {
          if (page === 'focusring') {
            initialValue = value;
          } else {
            initialValue = parseFloat(value);
          }
        })
        .then(() => {
          cy.wait(1000); // wait for the values to change over a second
          pageObject
            ._getElementByName(component)
            .should('have.attr', attribute[page])
            .then(value => {
              if (page === 'focusring') {
                finalValue = value;
              } else {
                finalValue = parseFloat(value);
                expect(initialValue).not.equal(finalValue);
              }
              switch (page) {
                case 'distractor':
                  expect(initialValue).to.be.within(0, 1.05);
                  expect(finalValue).to.be.within(0, 1.05);
                  break;
                case 'wave':
                  expect(initialValue).to.be.within(10, 82);
                  expect(finalValue).to.be.within(10, 82);
                  break;
                case 'focusring':
                  expect(finalValue).not.equal(initialValue);
                  break;
                default:
                  throw new Error(
                    `${pageName} page not found! \nPlease check the page object name or implement the missing case.`
                  );
              }
            });
        });
    }
  );

  /**
   * @module Common
   * @function I verify that the {string} progress is set to {float}
   * @description Cucumber statement to verify that the progress is set to expected percentage value
   * @param {Float} expectedPercentage
   * @param {String} pageName
   * @example I verify that the 'Slider' progress is set to 0.20
   */
  Then(
    'I verify that the {string} progress is set to {float}',
    (pageName, expectedPercentage) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);

      cy.wait(1000); // wait for the progress bar to render
      if (expectedPercentage === 0 && pageName.includes('CardContent')) {
        cy.get(pageObject.progressBar).should('not.exist');
      } else if (expectedPercentage === 0) {
        cy.get(pageObject.progressBar).should('not.have.attr', 'w');
      } else {
        pageObject.progressBarValue.then(progressBarValue => {
          pageObject.progressValue.then(progressValue => {
            const actualPercentage = (
              Number(progressValue) / Number(progressBarValue)
            ).toFixed(2);
            expect(actualPercentage).to.eq(expectedPercentage.toFixed(2));
          });
        });
      }
    }
  );

  /**
   * @module Common
   * @function I wait {float} seconds for the page to load
   * @description Cucumber statement to wait a set amount of time
   * @param {Float} waitTime
   * @example I wait 2 seconds for the page to load
   */
  Then('I wait {float} seconds for the page to load', waitTime => {
    cy.wait(waitTime * 1000);
  });

  /**
   * @module Common
   * @function I verify focused element in {string} has width of {float} and height of {float} and non-focused elements have width of {float} and height of {float}
   * @description Cucumber statement to verify the sizing of elements
   * @param {string} pageName
   * @param {Float} widthFocused
   * @param {Float} heightFocused
   * @param {Float} widthNonFocused
   * @param {Float} heightNonFocused
   * @example I verify focused element in 'Column' has width of 250.0 and height of 120.0 and non-focused elements have width of 250.0 and height of 80.0
   */
  Then(
    'I verify focused element in {string} has width of {float} and height of {float} and non-focused elements have width of {float} and height of {float}',
    (
      pageName,
      widthFocused,
      heightFocused,
      widthNonFocused,
      heightNonFocused
    ) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      cy.get(pageObject.columnElements).each($elements => {
        //wait is necessary for the row with Focus Height change to render
        cy.wait(1000)
          .get(pageObject.columnElements)
          .each($el => {
            const elementWidth = parseFloat($el.attr('w'));
            const elementHeight = parseFloat($el.attr('h'));
            if ($el.attr('focused') === undefined) {
              expect(elementWidth).equal(widthNonFocused);
              expect(elementHeight).equal(heightNonFocused);
            } else {
              expect(elementWidth).equal(widthFocused);
              expect(elementHeight).equal(heightFocused);
            }
          });
        cy.repeatAction('RIGHT', $elements.length);
      });
    }
  );

  /**
   * @module Common
   * @function I verify that the {string} of {string} component is {int} when {string} state is {string}
   * @param {String} propertyName
   * @param {String} pageName
   * @param {String} value - value for validation
   * @param {Integer} elementName
   * @param {String} state
   * @example I verify that the 'left' of 'Keyboard' component is '0px' when 'Center Keys' state is 'true'
   */
  Then(
    'I verify that the {string} of {string} component is {int} when {string} state is {string}',
    (propertyName, pageName, value, componentName, stateName) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const property = propertyName.toLowerCase();
      const component = componentName.toLowerCase();

      let leftValue = null;
      cy.wait(500).then(() => {
        pageObject
          ._getElementByName(component)
          .getStyleAttribute()
          .then(style => {
            leftValue = Number(style[property].replace('px', ''));
            cy.wrap(leftValue).then(parseFloat).should('be.closeTo', value, 1);
          });
      });
    }
  );

  /**
   * @module Common
   * @function I verify that the {string} attribute of {string} {string} contains {string}
   * @description Cucumber statement to verify that component has attribute with a particular value
   * @param {String} pageName
   * @param {String} componentName
   * @param {String} attributeName
   * @param {String} value
   * @example I verify that the 'src' attribute of 'Notification' 'Icon' contains 'notification_64'
   */
  Then(
    'I verify that the {string} attribute of {string} {string} contains {string}',
    (attributeName, pageName, componentName, value) => {
      const page = pageName.toLowerCase();
      const pageObject = getPageObject(page);
      const attribute = attributeName.toLowerCase();
      const component = componentName.toLowerCase();

      pageObject
        ._getElementByName(component)
        .should('have.attr', attribute)
        .should('contain', value);
    }
  );
}
