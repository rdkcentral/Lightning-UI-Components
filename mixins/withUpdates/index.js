import { debounce } from 'debounce';

function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getPropertyDescriptor(name, key) {
  return {
    get() {
      const customGetter = this[`_get${capital(name)}`];
      if (customGetter && typeof customGetter === 'function') {
        const value = customGetter(this[key]);
        this[key] = value;
      }
      return this[key];
    },
    set(value) {
      const oldValue = this[key];
      if (value !== oldValue) {
        const changeHandler = this[`_set${capital(name)}`];
        if (changeHandler && typeof changeHandler === 'function') {
          value = changeHandler.call(this, value);
        }
        this[key] = value;
        this._requestUpdateDebounce();
      }
    },
    configurable: true,
    enumerable: true
  };
}

export default function withUpdates(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    _construct() {
      let props = this.constructor.properties || [];
      props.forEach(name => {
        const key = '_' + name;
        const descriptor = getPropertyDescriptor(name, key);
        if (descriptor !== undefined) {
          Object.defineProperty(Object.getPrototypeOf(this), name, descriptor);
        }
      });

      this._whenEnabled = new Promise(resolve => {
        this._whenEnabledResolver = resolve;
      });

      this._requestUpdateDebounce = debounce(this._requestUpdate.bind(this), 0);

      super._construct && super._construct();
    }

    _firstEnable() {
      this._readyForUpdates = true;
      this._whenEnabledResolver();
      this._update();
      super._firstEnable && super._firstEnable();
    }

    _requestUpdate() {
      if (this._readyForUpdates) {
        this._update();
      }
    }
  };
}
