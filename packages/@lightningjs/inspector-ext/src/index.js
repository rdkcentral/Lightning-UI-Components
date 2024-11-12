const oInjection = window.attachInspectorExt;
// eslint-disable-next-line no-unused-vars
export function attachInspectorExt({ Element, Component }) {
  // if 'attachInspectorExt' is not defined, no need to apply it
  if (oInjection) {
    oInjection.apply(this, arguments);
  }

  const val = function (clazz, propName, value, defaultValue) {
    if (clazz._element) {
      clazz = clazz._element;
    }
    if (value == defaultValue) {
      clazz.dhtmlRemoveAttribute(propName);
    } else {
      clazz.dhtmlSetAttribute(propName, value);
    }
  };

  const addProtoProp = function ({ fieldName: key, htmlPropName: htmlProp }) {
    if (!key) {
      return;
    }
    const formattedKey = key.replace(/^_+/gm, '');
    let htmlPropValue = htmlProp;
    if (!htmlPropValue) {
      htmlPropValue = `data-${formattedKey}`;
    }
    let keyName = key.startsWith('_') ? formattedKey : key;
    keyName = `$${keyName}`;
    Element.prototype[keyName] = Element.prototype[key];
    Object.defineProperty(Element.prototype, key, {
      get: function () {
        return this[keyName];
      },
      set: function (value) {
        if (this[keyName] !== value) {
          val(this, htmlPropValue, value, 0);
          this[keyName] = value;
        }
      }
    });
  };

  if (window.debugFields) {
    window.debugFields.forEach(key => {
      addProtoProp(key);
    });
  }

  // decorate _focusChange component lifecycle method to track
  // test attribute for which component currently has focus
  const wrapped_focusChange = Component.prototype._focusChange;
  Component.prototype._focusChange = (newTarget, oldTarget) => {
    oldTarget._testIsFocused = false;
    newTarget._testIsFocused = true;

    wrapped_focusChange.apply(this, arguments);
  };
}

if (window.attachInspectorExt && window.lng) {
  // Automatically attach inspector if lng was already loaded.
  window.attachInspectorExt(window.lng);
}
