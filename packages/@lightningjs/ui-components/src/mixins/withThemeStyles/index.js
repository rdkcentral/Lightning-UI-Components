import StyleManager from './StyleManager';
import { updateManager } from '../../globals';
import { context } from '../../globals';
import { getComponentConfig, getSubTheme } from './utils';

/**
 * Generates an object that matches the structure of the given JSON schema with default values.
 * @param {object} schema - The JSON schema.
 * @returns {object} The object that matches the schema structure with default values.
 */
function generateDefaultObjectFromSchema(schema) {
  const defaultObject = {};

  for (const property in schema.properties) {
    if (schema.properties.hasOwnProperty(property)) {
      const propertySchema = schema.properties[property];
      if (propertySchema.hasOwnProperty('default')) {
        defaultObject[property] = propertySchema.default;
      } else if (propertySchema.type === 'object') {
        defaultObject[property] =
          generateDefaultObjectFromSchema(propertySchema);
      }
    }
  }

  return defaultObject;
}

/**
 * A higher-order function that returns a class with theme styles.
 * @param {Function} Base - The base class to extend.
 * @param {Object} mixinStyle - The mixin style to add to the component.
 * @returns {Function} A class that extends the base class with theme styles.
 */
export default function withThemeStyles(Base, mixinStyle) {
  mixinStyle; // Make linter happy. Need to add this functionality
  return class extends Base {
    constructor() {
      super(...arguments);
      this._hSetByUser = false;
      this._wSetByUser = false;
      this._style = this.constructor.__themeStyle?.schema
        ? generateDefaultObjectFromSchema(this.constructor.__themeStyle.schema)
        : {};
      this._styleManager = new StyleManager({ component: this });
      this._styleManager.on('styleUpdate', () => {
        this._style = this._styleManager.style;
        this.queueThemeUpdate();
      });
    }

    /**
     * Checks if dimensions need updating, and updates if necessary.
     * Fixes mount issues if height is controlled by a component's style alone.
     * Setters for w/h will set the wSetByUser and hSetByUser flag to block this functionality and allow customization.
     * @private
     * @function
     * @returns {void}
     */
    _checkDimensionUpdates() {
      let dimensionUpdateRequired = false;

      if (
        (dimensionUpdateRequired =
          !this._wSetByUser && this.style.w && this._w !== this.style.w)
      ) {
        this._w = this.style.w;
      }

      if (
        (dimensionUpdateRequired =
          !this._hSetByUser && this.style.h && this._h !== this.style.h)
      ) {
        this._h = this.style.h;
      }

      if (dimensionUpdateRequired) {
        this._updateDimensions();
      }
    }

    /**
     * Detaches the component and destroys the style manager.
     * @private
     * @function
     * @returns {void}
     */
    _detach() {
      super._detach();
      this._styleManager.destroy();
    }

    /**
     * Updates the mode to 'unfocused' when the component is unfocused.
     * @private
     * @function
     * @returns {void}
     */
    _unfocus() {
      if (this._isFocusedMode) this.mode = 'unfocused';
      super._unfocus();
    }

    /**
     * Updates the mode to 'focused' when the component is focused.
     * @private
     * @function
     * @returns {void}
     */
    _focus() {
      if (!this._isDisabledMode) this.mode = 'focused';
      super._focus();
    }

    /**
     * Called by the update manager to trigger the _update lifecycle.
     * If `queueRequestUpdate` is undefined, then it's OK to call `_update()` directly because
     * the component does not have the `withUpdates` mixin, and hence `requestUpdate()` will not be defined either.
     * This check allows this mixin to work without `withUpdates`.
     * @private
     * @function
     * @returns {void}
     */
    _updateThemeComponent() {
      if (!this.style) return;
      this._checkDimensionUpdates();
      this.queueRequestUpdate
        ? this.queueRequestUpdate()
        : this._update && this._update();
      this._updateItemLayout && this._updateItemLayout();
    }

    /**
     * Checks for subThemes on _setup lifecycle event to allow the component to traverse the tree to find child theme properties.
     * @private
     * @function
     * @returns {void}
     */
    _setup() {
      super._setup && super._setup();
      this._targetSubTheme = getSubTheme(this);
      // TODO: Add subtheme support
    }

    /**
     * Queues component for update by the Global Update Manager.
     * @function
     * @returns {void}
     */
    queueThemeUpdate() {
      updateManager.addUpdateTheme(this);
    }

    /**
     * Reference to the global theme
     * @return {object}
     */
    get theme() {
      const subTheme =
        this._targetSubTheme && context.getSubTheme(this._targetSubTheme);
      return subTheme || context.theme;
    }

    /**
     * Set component level styles
     * @param {any} v - The styles to set
     */
    set style(v) {
      this._componentLevelStyle = v;
      this._styleManager && this._styleManager.update();
    }

    /**
     * Get component level styles
     * @return {any}
     */
    get style() {
      return this._style;
    }

    /**
     * Theme configuration for overrides and defaults
     * @return {object}
     */
    get _componentConfig() {
      return getComponentConfig(this);
    }

    /**
     * Get the mode property
     * @return {string}
     */
    get mode() {
      return this._mode || this._componentConfig?.mode || 'unfocused';
    }

    /**
     * Set the mode property
     * @param {string} v - The mode value to set
     */
    set mode(v) {
      if (this._mode === v) return;
      this._mode = v;
      this._styleManager && this._styleManager.update();
    }

    /**
     * Get the tone property
     * @return {string}
     */
    get tone() {
      return this._tone || this._componentConfig.tone || 'neutral';
    }

    /**
     * Set the tone property
     * @param {string} value - The tone value to set
     */
    set tone(value) {
      if (value === this._tone) return;
      this._tone = value;
      this._styleManager && this._styleManager.update();
    }

    /**
     * Allow for w to be overwritten by user if also in component's style file
     * @return {number}
     */
    get w() {
      return (this._wSetByUser && this._w) || this.style?.w || 0;
    }

    /**
     * Set the w property
     * @param {number} v - The w value to set
     */
    set w(v) {
      if (this._w === v) return;
      super.w = v;
      this._wSetByUser = true;
      this._styleManager?.update();
    }

    /**
     * Get the h property
     * @return {number}
     */
    get h() {
      return (this._hSetByUser && this._h) || this.style?.h || 0;
    }

    /**
     * Set the h property
     * @param {number} v - The h value to set
     */
    set h(v) {
      if (this._h === v) return;
      super.h = v;
      this._hSetByUser = true;
      this._styleManager?.update();
    }
  };
}
