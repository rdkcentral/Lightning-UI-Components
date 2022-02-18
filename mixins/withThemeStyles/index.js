export { default as processThemeStyles } from './processThemeStyles';
import { default as context, theme as contextTheme } from '../../context';
import { debounce } from 'debounce';
import Style from './Style';

export default function withThemeStyles(Base, styles) {
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
      contextTheme.resetComponentInstantiationStyles(this.constructor); // Make sure previous version of instantiation styles is not being cached
      this._updateThemeComponent(); // Update component again since the styles may have changed
    }

    get _processedStyles() {
      if (this._processedStylesCache) {
        return this._processedStylesCache;
      }
      const processedStyles =
        'function' === typeof styles
          ? styles(this.theme, this.variant)
          : styles;

      this._processedStylesCache = {
        ...(super._processedStyles || {}),
        ...processedStyles
      };
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
      this._debounceUpdateThemeComponent &&
        this._debounceUpdateThemeComponent();
    }

    get h() {
      return this._h || this._componentStyles.h || 0;
    }

    set h(v) {
      if (this._h === v) return;
      super.h = v;
      this._debounceUpdateThemeComponent &&
        this._debounceUpdateThemeComponent();
    }

    /** LIFECYCLE EVENTS */

    constructor(stage, properties) {
      super(stage, properties);
      this._debounceUpdateThemeComponent = debounce(
        this._updateThemeComponent.bind(this),
        200
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
      contextTheme.resetComponentInstantiationStyles(this.constructor);
      contextTheme.resetComponentLevelStyles(this.__id);
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
    }

    /**
     * Instantiation Level Styles - example: { type: withStyles(ComponentName, { radius: 10 }) }
     * @return {object}
     */
    _getInstantiationLevelStyles() {
      const cache = contextTheme.getComponentInstantiationStyles(
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
      contextTheme.setComponentInstantiationStyles(this.constructor, style);

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
        return this.theme.componentStyles[this.constructor.__componentName];
      }
      return {};
    }

    /**
     * Component level styles - myComponent.radius = 10
     * @return {object}
     */
    _getComponentLevelStyles() {
      const cache = contextTheme.getComponentLevelStyles(this.__id);
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
        contextTheme.setComponentLevelStyles(this.__id, componentStyles);
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
      contextTheme.resetComponentInstantiationStyles(this.constructor);
      this._generateComponentStyles(); // Refresh the _componentStyles object
      this._requestUpdateDebounce
        ? this._requestUpdateDebounce()
        : this._update && this._update();
      this._updateItemLayout && this._updateItemLayout(); // Update withLayout
    }
  };
}
