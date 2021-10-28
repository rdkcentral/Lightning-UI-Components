import baseTheme from '../../themes/base';
import { debounce } from 'debounce';
import { default as context, theme as contextTheme } from '../../context';

function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function withStyles(Base, styles) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    get _styleProps() {
      return Object.keys(
        'function' === typeof styles ? styles(baseTheme) : styles
      ).filter(prop => -1 === ['w', 'h'].indexOf(prop));
    }

    get _stylesQueue() {
      // Process all styles from extended classes
      return [Base._stylesQueue, styles].filter(Boolean);
    }

    get _componentStyles() {
      const cachedComponentStyle = contextTheme.getComponentInstantiationStyles(
        this.constructor
      );

      let style;
      if (cachedComponentStyle) {
        style = cachedComponentStyle;
      } else {
        // Component Type Instantiation Styles - Also makes extending styles possible ex. Base.prototype._stylesQueue
        //   for example: { type: withStyles(ComponentName, { radius: 10 }) }
        style = [
          ...(Base.prototype._stylesQueue || []),
          ...this._stylesQueue
        ].reduce((acc, curr) => {
          const newStyle =
            'function' === typeof curr ? curr(context.theme) : curr;
          return { ...acc, ...newStyle };
        }, style);

        contextTheme.setComponentInstantiationStyles(this.constructor, style);
      }

      // Theme Level Styles
      //   for example: theme._componentStyles.ComponentName = { radius: 10 }
      if (
        context.theme.componentStyles &&
        'object' === typeof context.theme.componentStyles &&
        Object.prototype.hasOwnProperty.call(
          context.theme.componentStyles,
          this.constructor.__componentName
        )
      ) {
        style = {
          ...style,
          ...context.theme.componentStyles[this.constructor.__componentName]
        };
      }

      // Component Level Styles
      // myComponent.styleRadius = 10
      let componentStyles;

      const styleCache = contextTheme.getComponentLevelStyles(this.__id);
      if (styleCache) {
        componentStyles = styleCache;
      } else {
        componentStyles = this._styleProps.reduce((acc, curr) => {
          const value = this[`style${capital(curr)}`];

          if ('undefined' !== typeof value) {
            acc[curr] = value;
          }
          return acc;
        }, {});
        contextTheme.getComponentLevelStyles(this.__id, componentStyles);
      }

      return { ...style, ...componentStyles };
    }

    _construct() {
      super._construct && super._construct();
      if (this.constructor.name === '_class') {
        context.warn(
          `Anonymous class received for a component that is extending ${this.constructor.name}. Theme caching cannot work efficiently when components are added this way.`
        );
      }
      // Listen for events emitted from the stage to update each component
      context.on('themeUpdate', () => {
        this._updateComponent();
      });

      this._styles = null;
      this._styleUpdateDebounce = debounce(this._styleUpdate.bind(this), 0);
      // Add getters/setters for style properties under a private name ex. radius === styleRadius. Setting via this method should be discouraged in most cases.
      this._styleProps.forEach(name => {
        const key = `__style${capital(name)}`;
        Object.defineProperty(
          Object.getPrototypeOf(this),
          'style' + capital(name),
          {
            get() {
              return this[key];
            },
            set(value) {
              const oldValue = this[key];
              if (value !== oldValue) {
                this[key] = value;
                if (this._styleUpdateDebounce) {
                  this._styleUpdateDebounce();
                }
              }
            },
            configurable: true,
            enumerable: true
          }
        );
      });
    }

    _styleUpdate() {
      contextTheme.resetComponentLevelStyles(this.__id);
      this._updateComponent();
    }

    _updateComponent() {
      this._requestUpdateDebounce
        ? this._requestUpdateDebounce()
        : this._update && this._update();
    }

    _setTheme(theme = {}) {
      context.setTheme(theme);
    }

    _updateTheme(theme = {}) {
      context.updateTheme(theme);
    }

    _detach() {
      // Clear caches
      contextTheme.resetComponentInstantiationStyles(this.constructor);
      contextTheme.resetComponentLevelStyles(this.__id);
    }
  };
}
