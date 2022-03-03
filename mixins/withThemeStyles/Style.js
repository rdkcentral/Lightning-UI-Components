import { theme as contextTheme } from '../../context';
import { getValFromObjPath } from '../../utils';
export default class Style {
  constructor(parent) {
    this._parent = parent;

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
            // Check if the value is a string and if it looks like a theme value
            if ('string' === typeof value && value.includes('theme.')) {
              const newValue = getValFromObjPath(parent, value);
              if ('undefined' !== typeof newValue) {
                this[key] = newValue;
                this._styleUpdate();
              }
            } else {
              this[key] = value;
              this._styleUpdate();
            }
          }
        },
        configurable: true,
        enumerable: true
      });
    });
  }

  _styleUpdate() {
    contextTheme.resetComponentLevelStyles(this._parent.__id); // Make sure the component level cache is cleared to receive the change
    this._parent._debounceUpdateThemeComponent();
  }
}
