import StyleManager from './StyleManager';
import { updateManager } from '../../globals';
import { context } from '../../globals';

/**
 * A higher-order function that returns a class with theme styles.
 * @param {Function} Base - The base class to extend.
 * @param {Object} mixinStyle - The mixin style to add to the component.
 * @returns {Function} A class that extends the base class with theme styles.
 */
export default function withThemeStyles(Base, mixinStyle) {
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
      this._styleManager = new StyleManager({ component: this });

      // Every time the style updates this will fire
      this._styleManager.on('styleUpdate', () => {
        this._style = this._styleManager.style;
        let dimensionUpdateRequired = false;

        // Fixes mount issues if height is controlled by a component's style alone setters for w/h will set the wSetByUser and hSetByUser flag to block this functionality and allow customization
        if (
          (dimensionUpdateRequired =
            !this._wSetByUser && this._style.w && this._w !== this._style.w)
        ) {
          this._w = this._style.w;
        }

        if (
          (dimensionUpdateRequired =
            !this._hSetByUser && this._style.h && this._h !== this._style.h)
        ) {
          this._h = this._style.h;
        }

        if (dimensionUpdateRequired) {
          this._updateDimensions(); // Notify lng that the dimensions have changed
        }

        this.queueThemeUpdate();
      });

      // What to do with mixin style? Placing reference here to make linter happy
      mixinStyle;
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
      if (!this.style) return; // If the style is not yet defined
      this.queueRequestUpdate
        ? this.queueRequestUpdate()
        : this._update && this._update();
      this._updateItemLayout && this._updateItemLayout(); // Update withLayout
    }

    /**
     *
     * Component requires update, add to Global Update Manager (GUM)
     */
    queueThemeUpdate() {
      updateManager.addUpdateTheme(this);
    }

    _focus() {
      if (!this._isDisabledMode) this.mode = 'focused';
      super._focus();
    }

    _unfocus() {
      if (this._isFocusedMode) this.mode = 'unfocused';
      super._unfocus();
    }

    /**
     * Reference to the global theme
     * @return {object}
     */
    get theme() {
      const subTheme =
        this._targetSubTheme && context.getSubTheme(this._targetSubTheme);

      if (subTheme) {
        return subTheme;
      }
      return context.theme;
    }

    // Allow component level styles to be set
    set style(v) {
      this._componentLevelStyleSource = v;
      this._styleManager.update();
    }

    get style() {
      return this._style;
    }

    /**
     * The Mode controls what property in the mode export of the style file is selected when generating the final _componentStyle object during the update lifecycle
     * @return {string}
     */
    get mode() {
      return this._mode || this._componentConfig?.mode || 'unfocused';
    }

    set mode(v) {
      if (this._mode === v) return;
      this._mode = v;
      this._styleManager.clearStyleCache();
      this._styleManager.update();
    }

    /**
     * Allow for w to be overwritten by user if also in component's style file
     */
    get w() {
      return (this._wSetByUser && this._w) || this.style?.w || 0;
    }

    set w(v) {
      if (this._w === v) return;
      super.w = v;
      this._wSetByUser = true; // Flag to track if width has been set by the user. If so, it will no longer be tethered to the component's w value if exists
      this._styleManager.update();
    }

    get h() {
      return (this._hSetByUser && this._h) || this.style?.h || 0; // Add getH to allow override
    }

    set h(v) {
      if (this._h === v) return;
      super.h = v;
      this._hSetByUser = true; // Flag to track if height has been set by the user. If so, it will no longer be tethered to the component's h value if exists
      this._styleManager.update();
    }
  };
}
