import { theme as contextTheme } from '../../context';

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
            this[key] = value;

            this._styleUpdate();
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
