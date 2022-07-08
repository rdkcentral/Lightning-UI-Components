import themeManager from '../../context/theme-manager';
import { getValFromObjPath } from '../../utils';
export default class Style {
  constructor(parent) {
    this._parent = parent;
    this.customProperties = [];
    /**
     * Setup getters and setters on component to override style values
     */
    parent._styleProps.forEach(name => {
      this._setupProperty(name, false);
    });
  }

  _setupProperty(name, custom = true) {
    if (custom) {
      if (!this.customProperties.includes(name)) {
        this.customProperties.push(name);
      } else {
        return; // Custom property has already been created
      }
    }
    const key = `_${name}`;
    Object.defineProperty(this, name, {
      get() {
        return (
          this[key] ||
          (this._parent._componentStyles && this._parent._componentStyles[name])
        );
      },
      set(value) {
        const oldValue = this[key];
        if (value !== oldValue) {
          // Check if the value is a string and if it looks like a theme value
          if ('string' === typeof value && value.includes('theme.')) {
            const newValue = getValFromObjPath(this._parent, value);
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
  }

  _styleUpdate() {
    themeManager.resetComponentLevelStyles(this._parent.__id); // Make sure the component level cache is cleared to receive the change
    this._parent.queueThemeUpdate();
  }
}
