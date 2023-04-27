import StyleManager from './StyleManager';

/**
 * A higher-order function that returns a class with theme styles.
 * @param {Function} Base - The base class to extend.
 * @param {Object} mixinStyle - The mixin style to add to the component.
 * @returns {Function} A class that extends the base class with theme styles.
 */
export default function withThemeStyles(Base, mixinStyle) {
  mixinStyle; // To make linter happy
  return class extends Base {
    /**
     * Creates an instance of the extended class.
     */
    constructor() {
      super(...arguments);

      /**
       * The style manager for the component.
       * @type {StyleManager}
       * @private
       */
      this._styleManager = new StyleManager();

      /**
       * The bound method for updating the theme.
       * @type {Function}
       * @private
       */
      this._updateThemeBound = this._updateTheme.bind(this);

      /**
       * The promise that resolves when the component is ready.
       * @type {Promise}
       */
      this.componentReady = new Promise(
        resolve => (this._readyResolver = resolve)
      );

      /**
       * Things that make a component unique for styles
       * 1. The style chain
       * 2. Component Inline Style
       */

      // Create a global cache for styles
      if (!window.LUI_STYLE_CACHE) {
        window.LUI_STYLE_CACHE = new Map();
      }
    }
  };
}
