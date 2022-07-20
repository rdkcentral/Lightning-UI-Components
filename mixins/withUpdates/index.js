import { updateManager } from '../../utils/GlobalUpdateManager';

function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getPropertyDescriptor(name, key) {
  return {
    get() {
      const customGetter = this[`_get${capital(name)}`];
      if (customGetter && typeof customGetter === 'function') {
        const value = customGetter.call(this, this[key]);
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
        this.queueRequestUpdate();
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
      const prototype = Object.getPrototypeOf(this);
      if (!prototype._withUpdatesInitialized) {
        const props = this.constructor.properties || [];
        props.forEach(name => {
          const key = '_' + name;
          const descriptor = getPropertyDescriptor(name, key);
          if (descriptor !== undefined) {
            Object.defineProperty(prototype, name, descriptor);
          }
        });
        prototype._withUpdatesInitialized = true;
      }

      this._whenEnabled = new Promise(resolve => {
        this._whenEnabledResolver = resolve;
      });

      super._construct && super._construct();
    }

    queueRequestUpdate() {
      updateManager.addRequestUpdate(this);
    }

    _firstEnable() {
      this._readyForUpdates = true;
      this._whenEnabledResolver();
      updateManager.deleteRequestUpdate(this);
      this._update();
      super._firstEnable && super._firstEnable();
    }

    _detach() {
      super._detach();
      updateManager.deleteRequestUpdate(this);
    }

    _requestUpdate() {
      if (this._readyForUpdates) {
        this._update();
      }
    }

    _logPropTable() {
      console.table(this._propTable);
    }

    get _propTable() {
      return this.constructor.properties.reduce((acc, prop) => {
        acc[prop] = this[prop];
        return acc;
      }, {});
    }
  };
}
