import { default as context, theme as contextTheme } from '../../context';
import { debounce } from 'debounce';

/**
 * Used by Component.style.js files to merge variants with base styles
 * @param {object} - Theme
 * @param {string} - Variant string - example: brand, neutral, inverse
 * @param {function} - Base theme function that returns an object
 * @param {function} - Variant theme function that returns an object with properties of brand, neutral, inverse
 * @return {object} - Final theme style object
 */
export function processThemeStyles(
  theme = {},
  variant,
  base = () => {},
  variants = () => {}
) {
  if (
    'string' !== typeof variant ||
    -1 === ['neutral', 'inverse', 'brand'].indexOf(variant)
  ) {
    variant = 'neutral';
  }
  if (typeof theme !== 'object')
    throw new Error('processThemeStyles theme parameter must be an object');
  if (typeof base !== 'function')
    throw new Error('processThemeStyles base parameter must be a function');
  if (typeof variants !== 'function')
    throw new Error('processThemeStyles variant parameter must be a function');
  const baseStyles = base(theme);
  const variantStyles = variants(theme);
  const selectedVariant =
    ('object' === typeof variantStyles && variantStyles[variant]) || {};
  return {
    ...(('object' === typeof baseStyles && baseStyles) || {}),
    ...selectedVariant
  };
}

class Style {
  constructor(parent) {
    const styleUpdateDebounce = debounce(parent._styleUpdate.bind(parent), 0);
    /**
     * Setup getters and setters on component to override style values
     */
    parent._styleProps.forEach(name => {
      const key = `_${name}`;
      Object.defineProperty(this, name, {
        get() {
          return this[key] || parent._componentStyles[name];
        },
        set(value) {
          const oldValue = this[key];
          if (value !== oldValue) {
            this[key] = value;
            styleUpdateDebounce();
          }
        },
        configurable: true,
        enumerable: true
      });
    });
  }
}

export default function withStyles(Base, styles) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    /**
     * @type {string}
     */
    get variant() {
      if (
        !this._variant &&
        context.theme.componentVariants &&
        'object' === typeof context.theme.componentVariants &&
        Object.prototype.hasOwnProperty.call(
          context.theme.componentVariants,
          this.constructor.__componentName
        ) &&
        'string' ===
          typeof context.theme.componentVariants[
            this.constructor.__componentName
          ]
      ) {
        return context.theme.componentVariants[
          this.constructor.__componentName
        ];
      }
      return this._variant || undefined;
    }

    set variant(value) {
      if (value === this._variant) return;
      this._variant = value;
      this._processedStylesCache = null; // Clear the style props cache since it will now produce a different result
      contextTheme.resetComponentInstantiationStyles(this.constructor); // Make sure previous version of instantiation styles is not being cached
      if (this._withThemeStylesSetup) this._updateThemeComponent(); // Update component again since the styles may have changed
    }

    get _processedStyles() {
      // if (this._processedStylesCache) { //TODO: There are issue with this cache when class is extended
      //   return this._processedStylesCache;
      // }
      const processedStyles =
        'function' === typeof styles
          ? styles(context.theme, this.variant)
          : styles;
      this._processedStylesCache = processedStyles;
      return processedStyles;
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

    _construct() {
      super._construct && super._construct();
      this._style = new Style(this);
      if (!this._processedStylesCache) this._processedStylesCache = null; // Cache calls to styles
      this._styleUpdateDebounce = debounce(this._styleUpdate.bind(this), 0);
      /**
       * Component Styles - set only by _generateComponentStyles
       * @private
       */
      this._componentStyles = {};

      /**
       * Setup component style object
       */
      this._style = new Style(this);
    }

    _setup() {
      super._setup && super._setup();

      // /**
      //  * Listen for events emitted from the stage to update each component
      //  */
      context.on('themeUpdate', () => {
        this._updateThemeComponent();
      });

      /**
       * Set _componentStyles for the first time
       */
      this._generateComponentStyles();
      this._withThemeStylesSetup = true;
    }

    _setW(v) {
      this.style.w = v;
    }

    _setH(v) {
      this.style.h = v;
    }

    _getW() {
      return this._componentStyles.w || 0;
    }

    _getH() {
      return this._componentStyles.h || 0;
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
      }, style);
      contextTheme.setComponentInstantiationStyles(this.constructor, style);

      return style;
    }

    /**
     * Theme level styles - example: theme._componentStyles.ComponentName = { radius: 10 }
     * @return {object}
     */
    _getThemeLevelStyles() {
      if (
        context.theme.componentStyles &&
        'object' === typeof context.theme.componentStyles &&
        Object.prototype.hasOwnProperty.call(
          context.theme.componentStyles,
          this.constructor.__componentName
        )
      ) {
        return context.theme.componentStyles[this.constructor.__componentName];
      }
      return {};
    }

    /**
     * Component level styles - myComponent.radius = 10
     * @return {object}
     */
    _getComponentLevelStyles() {
      const cache = contextTheme.getComponentLevelStyles(this.__id);
      if (cache) return cache;
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
     * Process all styles from extended classes
     * @return {array}
     */
    _stylesQueue() {
      return [Base._stylesQueue, this._processedStyles].filter(Boolean);
    }

    /**
     * Updates _componentStyles with an object that adheres to the following theme hierarchy rules
     */
    _generateComponentStyles() {
      this._componentStyles = {
        ...this._getInstantiationLevelStyles(), // Level 1
        ...this._getThemeLevelStyles(), // Level 2
        ...this._getComponentLevelStyles() // Level 3
      };
    }

    /**
     * Called when style setter runs
     */
    _styleUpdate() {
      contextTheme.resetComponentLevelStyles(this.__id); // Make sure the component level cache is cleared to receive the change
      this._updateThemeComponent();
    }

    /**
     * Debounce call to trigger component update
     */
    _updateThemeComponent() {
      this._processedStylesCache = null;
      this._generateComponentStyles(); //Refresh the _componentStyles object
      this._requestUpdateDebounce
        ? this._requestUpdateDebounce()
        : this._update && this._update();
    }
    /**
     * Cleanup caches when the component is destroyed
     */
    _detach() {
      super._detach && super._detach();
      contextTheme.resetComponentInstantiationStyles(this.constructor);
      contextTheme.resetComponentLevelStyles(this.__id);
    }
  };
}
