Cypress.Commands.overwrite('focused', (originalFn, options) => {
  if (!options) {
    return cy.get('*[focused=true]').last();
  }
  return originalFn(options);
});

/**
 * @typedef {Object} RectObject - A rect object with data from getBoundingClientRect
 * @property {number} left - The left coordinate of the rectangle.
 * @property {number} top - The top coordinate of the rectangle.
 * @property {number} right - The right coordinate of the rectangle.
 * @property {number} bottom - The bottom coordinate of the rectangle.
 * @property {number} x - The x coordinate of the rectangle.
 * @property {number} y - The y coordinate of the rectangle.
 * @property {number} width - The width of the rectangle.
 * @property {number} height - The height of the rectangle.
 * @example { left: 0, top: 0, right: 100, bottom: 100, x: 0, y: 0, width: 100, height: 100 }
 */

/**
 * Custom command to get the bounding client rect of an element.
 * @param {JQuery<HTMLElement>} selector - Element to get rect details from
 * @return {RectObject} - A rectangle object.
 * @example cy.getOffsetRect('#element').then((rect) => { console.log(rect); });
 */
Cypress.Commands.add('getOffsetRect', selector => {
  return cy.get(selector).then($element => {
    return cy.window().then(window => {
      const rect = $element[0].getBoundingClientRect();
      let x;
      let y;

      // add window scroll position to get the offset position
      const left = rect.left + window.scrollX;
      const top = rect.top + window.scrollY;
      const right = rect.right + window.scrollX;
      const bottom = rect.bottom + window.scrollY;

      // polyfill missing 'x' and 'y' rect properties not returned
      // from getBoundingClientRect() by older browsers
      if (rect.x === undefined) x = left;
      else x = rect.x + window.scrollX;

      if (rect.y === undefined) y = top;
      else y = rect.y + window.scrollY;

      // width and height are the same
      const width = rect.width;
      const height = rect.height;

      return { left, top, right, bottom, x, y, width, height };
    });
  });
});

/**
 * Custom command to get vertical space between rows.
 * It uses the y and height attributes to calculate the space.
 * @param {string} rowSelector - The outermost selector for the rows.
 * @return {number} - The average vertical space between rows.
 * @example cy.getVerticalSpaceBetweenRows('div[type=Row]').then((space) => { console.log(space); });
 */
Cypress.Commands.add('getSpaceBetweenRows', rowSelector => {
  const rows = [];
  return cy
    .get(rowSelector)
    .each(($row, index, $rowList) => {
      let space = 0;
      if (index > 0) {
        let prevY = 0;
        const prevRow = $rowList[index - 1];
        const prevHeight = prevRow.getAttribute('h');
        const currentY = $row.attr('y');
        const id = $row.attr('id');
        const prevId = prevRow.getAttribute('id');

        if (index === 1) {
          const firstRow = $rowList[0];
          const firstRowHeight = firstRow.getAttribute('h');
          space = parseInt(currentY) - parseInt(firstRowHeight);
        } else {
          prevY = prevRow.getAttribute('y');
          space = parseInt(currentY) - parseInt(prevY) - parseInt(prevHeight);
        }

        const rowInfo = {
          id,
          prevId,
          space
        };

        rows.push(rowInfo);

        cy.log(
          `${rowInfo.space}px between rows #${rowInfo.prevId} and #${rowInfo.id}`
        );
      }
    })
    .then(() => {
      const spaces = rows.map(row => row.space);
      const averageSpace = spaces.reduce((a, b) => a + b, 0) / spaces.length;
      return averageSpace;
    });
});

/**
 * Custom command for getting horizontal space between tiles in a row.
 * It uses the x and width attributes of the tiles to calculate the space.
 * @param {string} tileSelector - The outermost selector for the tiles.
 * @return {number} - The average horizontal space between tiles.
 * @example cy.getSpaceBetweenTiles('div[type=Tile]').then((space) => { console.log(space); });
 */
Cypress.Commands.add('getSpaceBetweenTiles', tileSelector => {
  const tiles = [];
  return cy
    .get(tileSelector)
    .each(($tile, index, $tileList) => {
      let space = 0;
      const currentX = $tile.attr('x');
      const id = $tile.attr('id');
      const rowId = $tile.parent().attr('id');

      if (currentX) {
        const prevTile = $tileList[index - 1];
        const prevId = prevTile.getAttribute('id');
        const prevX = prevTile.getAttribute('x');
        const prevWidth = prevTile.getAttribute('w');

        if (prevX) {
          space = parseInt(currentX) - parseInt(prevX) - parseInt(prevWidth);
        } else {
          space = parseInt(currentX) - parseInt(prevWidth);
        }

        const tileInfo = {
          id,
          prevId,
          space,
          rowId
        };

        tiles.push(tileInfo);

        cy.log(
          `${tileInfo.space}px between tiles #${tileInfo.prevId} and #${tileInfo.id} in row #${tileInfo.rowId}`
        );
      }
    })
    .then(() => {
      const spaces = tiles.map(tile => tile.space);
      const averageSpace = spaces.reduce((a, b) => a + b, 0) / spaces.length;
      return averageSpace;
    });
});

/**
 * Custom command to set padding to 0 for a given element.
 * @param {string} [selector='.sb-show-main.sb-main-padded'] - The selector for the element to set padding to 0.
 * @return {Cypress.Chainable}
 * @example cy.hidePadding(); | cy.hidePadding('#element');
 */
Cypress.Commands.add(
  'hidePadding',
  (selector = '.sb-show-main.sb-main-padded') => {
    cy.get(selector, { log: false }).then($element => {
      $element.css('padding', '0');
      Cypress.log({
        name: 'hideMainPadding',
        message: `  ${selector} -> padding: 0`,
        displayName: '$css'
      });
    });
  }
);

/**
 * Custom command to verify the specific attributes for the given elements.
 * @param {string} subject - selector.
 * @param {string} attr - the attribute name.
 * @example cy.getAttributes(attribute).then(elements => {expect(elements[0]).equal(expectedText)});
 */
Cypress.Commands.add(
  'getAttributes',
  {
    prevSubject: true
  },
  (subject, attr) => {
    const attrList = [];
    cy.wrap(subject).each($el => {
      cy.wrap($el)
        .invoke('attr', attr)
        .then(elements => {
          attrList.push(elements);
        });
    });
    return cy.wrap(attrList);
  }
);

/**
 * Custom command to get the body of the iframe when testing against the storybook app.
 * @example cy.getIframeBody().find(<selectorName>).should('be.visible');
 */
Cypress.Commands.add('getIframeBody', () => {
  return (
    cy
      .get('iframe[id="storybook-preview-iframe"]')
      // Cypress yields jQuery element, which has the real DOM element under property "0".
      // From the real DOM iframe element we can get the "document" element,
      // it is stored in "contentDocument" property
      // Cypress "its" command can access deep properties using dot notation
      // https://on.cypress.io/its
      .its('0.contentDocument')
      .should('exist')
      // automatically retries until body is loaded
      .its('body')
      .should('not.be.undefined')
      // wraps "body" DOM element to allow
      // chaining more Cypress commands, like ".find(...)"
      .then(cy.wrap)
  );
});

/**
 * Custom command to get an object of the list of parameters in the style attribute.
 * @param {string} subject - object selected.
 * @example
 * cy.get(<selector>).getStyleAttribute().then(style => { height = style['height']; };
 */
Cypress.Commands.add(
  'getStyleAttribute',
  {
    prevSubject: true
  },
  subject => {
    const attrList = [];
    cy.wrap(subject).then($element => {
      const style = $element.attr('style');
      const styleList = style.split(';');

      styleList.forEach(param => {
        if (param.length > 0) {
          param = param.trim();
          const attributes = param.split(': ');
          attrList[attributes[0]] = attributes[1];
        }
      });
    });
    return cy.wrap(attrList);
  }
);
