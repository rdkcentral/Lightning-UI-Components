export { default as processThemeStyles } from './processThemeStyles';
import { default as context } from '../../context';
import themeManager from '../../context/theme-manager';
import { debounce } from 'debounce';
import Style from './Style';
import { getValFromObjPath, clone } from '../../utils';

export default function withThemeStyles(Base, styles = {}) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    get theme() {
      const subTheme = this._subTheme && context.getSubTheme(this._subTheme);
      if (subTheme) {
        return subTheme;
      }
      return context.theme;
    }

    get variant() {
      if (
        !this._variant &&
        this.theme.componentVariants &&
        'object' === typeof this.theme.componentVariants &&
        Object.prototype.hasOwnProperty.call(
          this.theme.componentVariants,
          this.constructor.__componentName
        ) &&
        'string' ===
          typeof this.theme.componentVariants[this.constructor.__componentName]
      ) {
        return this.theme.componentVariants[this.constructor.__componentName];
      }
      return this._variant || undefined;
    }

    set variant(value) {
      if (value === this._variant) return;
      this._variant = value;
      this._processedStylesCache = null; // Clear the style props cache since it will now produce a different result
      themeManager.resetComponentInstantiationStyles(this.constructor); // Make sure previous version of instantiation styles is not being cached
      this._updateThemeComponent(); // Update component again since the styles may have changed
    }

    get _processedStyles() {
      if (this._processedStylesCache) {
        return this._processedStylesCache;
      }

      let processedThemeStyles = {};

      if ('function' === typeof this.constructor.__themeStyles) {
        processedThemeStyles = this.constructor.__themeStyles(
          this.theme,
          this.variant
        );
      } else if (
        'object' === typeof this.constructor.__themeStyles &&
        null !== this.constructor.__themeStyles
      ) {
        processedThemeStyles = this.constructor.__themeStyles;
      }

      const processedStyles =
        'function' === typeof styles
          ? styles(this.theme, this.variant)
          : styles;

      this._processedStylesCache = clone(
        clone(super._processedStyles || {}, processedThemeStyles),
        processedStyles
      );

      return this._processedStylesCache;
    }

    /**
     * Array of all property keys in Component.style.js
     * @return {array}
     */
    get _styleProps() {
      return Object.keys(this._processedStyles);
    }

    /**
     * @type {object}
     */
    get style() {
      return this._style;
    }

    /**
     * Allow style to be replaced or patched
     */
    set style(value) {
      if ('object' !== typeof value) return;
      for (const key in {
        ...this._styleProps.reduce(
          (acc, curr) => ({ ...acc, [curr]: undefined }),
          {}
        ),
        ...value
      }) {
        if (this._style.__lookupSetter__(key)) {
          this._style[key] = value[key];
        }
      }
    }

    get w() {
      return this._w || this._componentStyles.w || 0;
    }

    set w(v) {
      if (this._w === v) return;
      super.w = v;
      this._wSetByUser = true; // Flag to track if width has been set by the user. If so, it will no longer be tethered to the component's w value if exists
      this._debounceUpdateThemeComponent &&
        this._debounceUpdateThemeComponent();
    }

    get h() {
      return this._h || this._componentStyles.h || 0; // Add getH to allow override
    }

    set h(v) {
      if (this._h === v) return;
      super.h = v;
      this._hSetByUser = true; // Flag to track if height has been set by the user. If so, it will no longer be tethered to the component's h value if exists
      this._debounceUpdateThemeComponent &&
        this._debounceUpdateThemeComponent();
    }

    // If the w/h changes we will need to re-render the component again
    // eslint-disable-next-line id-blacklist
    _updateDimensions(w, h) {
      super._updateDimensions(w, h);
      this._debounceUpdateThemeComponent &&
        this._debounceUpdateThemeComponent();
    }

    /** LIFECYCLE EVENTS */

    constructor(stage, properties) {
      super(stage, properties);
      this._debounceUpdateThemeComponent = debounce(
        this._updateThemeComponent.bind(this),
        0
      );
      /**
       * Style override support
       */
      this._style = new Style(this);
    }

    async _construct() {
      super._construct && super._construct();
      /**
       * Cache for styles for performance
       * @private
       */
      this._processedStylesCache = null;
      /**
       * Component Styles - set only by _generateComponentStyles
       * @private
       */
      this._componentStyles = {};
      /**
       * Component Styles - set only by _generateComponentStyles
       * @private
       */
      this._componentStyles = {};

      /**
       * Setup themeSetupComplete promise to delay actions
       */
      this._themeSetupResolver;
      this._themeSetupComplete = new Promise(
        resolve => (this._themeSetupResolver = resolve)
      ).then(() => {
        /**
         * Setup context listeners
         */
        this._setupListeners();
      });
    }

    /**
     * Theming setup must be triggered on the _setup lifecycle event to allow the component to traverse the tree to find child theme properties
     */
    _setup() {
      super._setup && super._setup();
      /**
       * Set the component's sub theme if one exists
       * @private
       */
      this._subTheme = this._getSubTheme();
      /**
       * Setup is complete resolve the promise
       */
      this._themeSetupResolver();
      this._generateComponentStyles();
    }

    /**
     * Cleanup caches when the component is destroyed
     */
    _detach() {
      super._detach && super._detach();
      context.off('themeUpdate', this._debounceUpdateThemeComponent.bind(this));

      if (this._subTheme) {
        context.off(
          `updateTheme${this._subTheme}`,
          this._debounceUpdateThemeComponent.bind(this)
        );
      }
      themeManager.resetComponentInstantiationStyles(this.constructor);
      themeManager.resetComponentLevelStyles(this.__id);
    }

    /** METHODS */

    /**
     * Updates _componentStyles with an object that adheres to the following theme hierarchy rules
     * @private
     */
    _generateComponentStyles() {
      this._componentStyles = {
        ...this._getInstantiationLevelStyles(), // Level 1
        ...this._getThemeLevelStyles(), // Level 2
        ...this._getComponentLevelStyles() // Level 3
      };

      // Fixes mount issues if height is controled by a component's style alone setters for w/h will set the wSet and hSet flag to block this functionality and allow customization
      if (
        !this._wSetByUser &&
        this._componentStyles.w &&
        this._w !== this._componentStyles.w
      ) {
        this._w = this._componentStyles.w;
      }

      if (
        !this._hSetByUser &&
        this._componentStyles.h &&
        this._h !== this._componentStyles.h
      ) {
        this._h = this._componentStyles.h;
      }
    }

    /**
     * Instantiation Level Styles - example: { type: withStyles(ComponentName, { radius: 10 }) }
     * @return {object}
     */
    _getInstantiationLevelStyles() {
      const cache = themeManager.getComponentInstantiationStyles(
        this.constructor
      );
      if (cache) return cache;
      const style = [
        ...((Base.prototype._stylesQueue && Base.prototype._stylesQueue()) ||
          []),
        ...this._stylesQueue()
      ].reduce((acc, curr) => {
        return { ...acc, ...curr }; // TODO: Check performance of spread operator in reduce
      }, {});
      themeManager.setComponentInstantiationStyles(this.constructor, style);

      return style;
    }

    /**
     * Theme level styles - example: theme._componentStyles.ComponentName = { radius: 10 }
     * @return {object}
     */
    _getThemeLevelStyles() {
      if (
        this.theme.componentStyles &&
        'object' === typeof this.theme.componentStyles &&
        Object.prototype.hasOwnProperty.call(
          this.theme.componentStyles,
          this.constructor.__componentName
        )
      ) {
        const payload = {
          ...this.theme.componentStyles[this.constructor.__componentName]
        };
        for (const style in payload) {
          const value = payload[style];
          // Check if the value is a string and if it looks like a theme value
          if ('string' === typeof value && value.includes('theme.')) {
            const newValue = getValFromObjPath(this, value);
            if (newValue) {
              payload[style] = newValue;
            } else {
              // Delete the key since it does not exist and fallback
              delete payload[style];
            }
          }
        }
        return payload;
      }
      return {};
    }

    /**
     * Component level styles - myComponent.radius = 10
     * @return {object}
     */
    _getComponentLevelStyles() {
      const cache = themeManager.getComponentLevelStyles(this.__id);
      if (cache) {
        return cache;
      }
      const componentStyles = this._styleProps.reduce((acc, curr) => {
        const value = this.style[`_${curr}`];
        if ('undefined' !== typeof value) {
          acc[curr] = value;
        }
        return acc;
      }, {});
      if (Object.keys(componentStyles).length) {
        themeManager.setComponentLevelStyles(this.__id, componentStyles);
        return componentStyles;
      }
      return {};
    }

    /**
     * Traverse the tree to check if any parent components are requesting a child theme
     * @private
     * @return {string}
     */
    _getSubTheme() {
      let parent = this.p;
      while (parent && !parent.subTheme) {
        parent = parent.parent;
      }
      return (parent && parent.subTheme) || undefined;
    }

    /**
     * Listen for context events - these events tell the component when to update styles and refresh the component
     * @private
     * @return {void}
     */
    _setupListeners() {
      // Listen for global theme updates
      context.on('themeUpdate', this._debounceUpdateThemeComponent.bind(this));
      // Listen for child theme updates
      if (this._subTheme) {
        context.on(
          `updateTheme${this._subTheme}`,
          this._debounceUpdateThemeComponent.bind(this)
        );
      }
    }

    /**
     * Process all styles from extended classes
     * @return {array}
     */
    _stylesQueue() {
      return [Base._stylesQueue, this._processedStyles].filter(Boolean);
    }

    /**
     * Debounce call to trigger component update
     */
    _updateThemeComponent() {
      this._processedStylesCache = null;
      themeManager.resetComponentInstantiationStyles(this.constructor);
      this._generateComponentStyles(); // Refresh the _componentStyles object
      this._requestUpdateDebounce
        ? this._requestUpdateDebounce()
        : this._update && this._update();
      this._updateItemLayout && this._updateItemLayout(); // Update withLayout
    }
  };
}
