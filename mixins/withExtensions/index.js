import context from '../../context';

export default function withExtensions(Base) {
  return class extends Base {
    static get name() {
      return Base.name;
    }

    get _globalExtensions() {
      return (
        context &&
        context.theme &&
        context.theme.extensions &&
        context.theme.extensions.global
      );
    }

    get _extensions() {
      return (
        context &&
        context.theme &&
        context.theme.extensions &&
        context.theme.extensions[this.constructor.__componentName]
      );
    }

    get _extensionPrefix() {
      return '_ext_';
    }

    _construct() {
      this._hookMethods = []; // Will store a list of wrapped methods
      context.on(
        'themeExtensionsUpdate',
        this.__updateExtensionLayer.bind(this)
      );
      this.__updateExtensionLayer();
      super._construct && super._construct();
    }

    __updateExtensionLayer() {
      this.__removeAllExtensionHooks();
      this.__setupExtensionHooks();
    }

    __createMethods(methodsObj = {}) {
      this._globalExtensionDestroy = this._globalExtensions.destroy; // TODO: This should support multiple destroy methods. Clone the function so we can use it after extensions is removed
      if ('object' === typeof methodsObj) {
        Object.keys(methodsObj).forEach(method => {
          Object.defineProperty(this, this._extensionPrefix + method, {
            get() {
              return this._globalExtensions && methodsObj && methodsObj[method]
                ? methodsObj && methodsObj[method]
                : () => {};
            },
            configurable: true,
            enumerable: true
          });

          if (method.includes('before_') || method.includes('after_')) {
            // Wrap the method here and store a reference in this._hookMethods so they can be cleaned up later
            const targetMethod = method
              .replace('before_', '')
              .replace('after_', '');
            if ('undefined' !== typeof this[targetMethod]) {
              this._hookMethods.push(targetMethod); // Keep track of methods we have replaced so we can clean them up later if no longer needed
              Object.defineProperty(this, targetMethod, {
                get() {
                  return function () {
                    this[`${this._extensionPrefix}before_${targetMethod}`] &&
                      this[`${this._extensionPrefix}before_${targetMethod}`]();
                    this.__proto__[targetMethod] &&
                      this.__proto__[targetMethod].call(this);
                    this[`${this._extensionPrefix}after_${targetMethod}`] &&
                      this[`${this._extensionPrefix}after_${targetMethod}`]();
                  };
                },
                configurable: true,
                enumerable: true
              });
            }
          }
        });
      }
    }

    __setupExtensionHooks() {
      // setup global hooks
      if (
        this._globalExtensions &&
        'object' === typeof this._globalExtensions
      ) {
        this.__createMethods(this._globalExtensions.methods); // Global
        // TODO: Add component level extensions
        // TODO: add static logic
      }
    }

    __removeAllExtensionHooks() {
      // Clean up unused methods and hooks
      this._globalExtensionDestroy &&
        'function' === typeof this._globalExtensionDestroy &&
        this._globalExtensionDestroy();
      this._hookMethods.forEach(hook => {
        if (this[hook]) delete this[hook];
      });
      Object.keys(this).forEach(key => {
        if (key.startsWith(this._extensionPrefix)) {
          delete this[key];
        }
      });
    }

    _detach() {
      context.off('themeExtensionsUpdate', this.__updateExtensionLayer);
    }
  };
}
