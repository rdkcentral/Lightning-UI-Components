import { convertToCamelCase } from '../../support/helpers';

class LUIComponent {
  baseParam;
  url;

  /**
   *
   * @param {Object} properties - The properties to be set to determine the URL to be used for the component page.
   * @param {String} [properties.type] - The type of the component. ('elements', 'layout', 'patterns', or 'mixins')
   * @param {String} [properties.componentName]- The name of the component. (examples: 'browse', 'entity', 'hero')
   * @example
   */
  constructor({ type = 'elements', componentName }) {
    // Get the base param for the component that extends this base component.
    // ex: &id=elements-icon
    this.baseParam = `&id=${type}-${componentName}`;
  }

  /**
   * Format the name of the story to be used in the URL and return it.
   * @param {String} story
   * @returns the formatted story name
   */
  formatStoryName(story) {
    return story.replaceAll(' ', '-');
  }

  /**
   * Navigate to the page with the base params for the component.
   * There is also the option for setting the story and the theme to navigate to.
   * @param {String} [story='basic'] - The story to navigate to (examples: 'basic')
   * @param {String} [theme='base'] - The theme to navigate to (examples: 'base', 'xfinity')
   */
  navigate(story = 'basic', theme = 'base') {
    // ex: &id=elements-button--basic&globals=LUITheme:base
    this.url = `${Cypress.config().baseUrl}${
      this.baseParam
    }--${this.formatStoryName(story)}&globals=LUITheme:${theme}`;
    cy.visit(this.url);
  }

  /**
   * Get the URL for the page with the given params/props that confirms
   * to the page's URL format based on storybook's URL format.
   * @description
   * - It first searches for and removes the props if they are already in the url.
   * - Then it creates a list of parameters that are separated by semi-colons and
   * inserts it into the URL at the appropriate location.
   * - The order of insertion is determined by the type parameter and the order in which they appear in storybook.
   * @param {Object} type - The type of props to be used to generate the URL, examples: args, globals.
   * @param {Object} props - The props to be used to generate the URL.
   * @returns {string} The formatted URL for the page.
   */
  getFormattedUrl(type, props) {
    this.removePropsFromURL(type, props); // remove props from URL

    // create list of parameters separated by semi-colon from the list of props
    const params = `${Object.keys(props)
      .map(key => `${key}:${props[key]}`)
      .join(';')}`;

    if (type === 'args') {
      // split URL before the global parameters and insert the args parameters
      const startURL = this.url.substring(0, this.url.indexOf('&globals='));
      const endURL = this.url.substring(this.url.indexOf('&globals='));

      if (this.url.includes('&args=')) {
        return `${startURL}${params};${endURL}`;
      } else {
        return `${startURL}&args=${params};${endURL}`;
      }
    } else {
      return `${this.url}${params};`;
    }
  }

  /**
   * Helper function to get a component element by it's human readable name.
   * It will first convert the name to camel case and then try to access
   * it on the page object.
   * @param {String} name - The human readable name of the element.
   * @returns {String} - The selector for the element.
   * @example _getElementByName('Progress Bar') => currentComponent['progressBar']
   */
  _getElementByName(name) {
    const elementName = convertToCamelCase(name);
    try {
      return cy.get(this[elementName]); // access the getter for the element
    } catch (error) {
      throw new Error(`Element ${name} not found for ${this.constructor.name}`);
    }
  }

  /**
   * Helper function to get a component element by it's human readable name.
   * It will first convert the name to camel case and then try to access
   * it on the page object.
   * @param {String} name - The human readable name of the element.
   * @param {Int} timeout - The amount of time that Cypress should retry before timing out
   * @returns {String} - The selector for the element.
   * @example _getElementByName('Progress Bar') => currentComponent['progressBar']
   */
  _getElementByName(name, timeout) {
    const elementName = convertToCamelCase(name);
    try {
      return cy.get(this[elementName], { timeout: timeout }).first(); // access the getter for the element
    } catch (error) {
      throw new Error(`Element ${name} not found for ${this.constructor.name}`);
    }
  }

  /**
   * Setter for setting prop values on the page, and then navigate to the page args URL
   * @param {String} name
   * @param {String|Boolean|Int} value
   */
  setProp(name, value) {
    const url = this.getFormattedUrl('args', { [name]: value });
    this.url = url;
    cy.visit(url);
  }

  /**
   * Setter for setting multiple prop values on the page
   * and then navigating to the page args URL
   * @param {Object} props - The props to be used to generate the URL.
   * @returns {string} - The formatted URL for the page.
   */
  setProps(props) {
    const url = this.getFormattedUrl('args', props);
    this.url = url;
    cy.visit(url);
  }

  /**
   * Setter for setting global values on the page, and then navigating to the updated page URL
   * @param {String} name
   * @param {String|Boolean|Int} value
   */
  setGlobal(name, value) {
    const url = this.getFormattedUrl('globals', { [name]: value });
    this.url = url;
    cy.visit(url);
  }

  /**
   * Setter for setting multiple global values on the page
   * and then navigating to the updated page URL
   * @param {Object} props - The props to be used to generate the URL.
   * @returns {string} - The formatted URL for the page.
   */
  setGlobals(props) {
    const url = this.getFormattedUrl('globals', props);
    this.url = url;
    cy.visit(url);
  }

  /**
   * Checks if the URL contains any of the keys from the props object
   * and remove them from the URL
   * @param {Object} props - The props to be removed from the URL.
   */
  removePropsFromURL(type, props) {
    const delimiter = `&${type}=`;
    const paramsIndex = this.url.indexOf(delimiter);

    if (paramsIndex !== -1) {
      let updatedURL = this.url.substring(0, paramsIndex + delimiter.length); // get the url without any parameters
      let endURL = '';
      let parameters = '';

      if (type === 'args') {
        const globalsIndex = this.url.indexOf('&globals=');
        parameters = this.url
          .substring(paramsIndex + delimiter.length, globalsIndex)
          .split(';'); // separate the parameters at the semi-colon
        endURL = this.url.substring(globalsIndex);
      } else {
        parameters = this.url.split(delimiter)[1].split(';'); // separate the parameters at the semi-colon
      }

      // add the parameter to the new URL if it is not found in the list of props
      parameters.forEach(param => {
        if (!props.hasOwnProperty(param.split(':')[0]) && param.length > 0) {
          updatedURL = updatedURL + param + ';';
        }
      });

      this.url = updatedURL + endURL; // update the url
    }
  }

  /**
   * Extracts the width and height from the tileRatio string and
   * update the props in the URL
   * @param {string} tileRatio
   */
  _setTileRatio(tileRatio) {
    const tRatio = tileRatio.split('x');
    const width = tRatio[0];
    const height = tRatio[1];
    this.setGlobals({
      'TileRatio.ratioX': width,
      'TileRatio.ratioY': height
    });
  }
}
module.exports = LUIComponent;
