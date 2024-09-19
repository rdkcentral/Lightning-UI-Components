"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[3327],{

/***/ "../../@lightningjs/ui-components/src/components/Provider/Provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Provider)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Provider/Provider.styles.js
var Provider_styles_namespaceObject = {};
__webpack_require__.r(Provider_styles_namespaceObject);
__webpack_require__.d(Provider_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.styles.js
/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

function base(theme) {
  return {
    alpha: theme.alpha.primary,
    counterTextStyle: theme.typography.headline3,
    itemSize: theme.layout.gutterX * 2,
    itemSpacing: theme.spacer.md,
    radius: theme.radius.sm
  };
}
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      counterBackgroundColor: theme.color.fillInverseSecondary
    },
    inverse: {
      counterBackgroundColor: theme.color.fillNeutralSecondary
    },
    brand: {
      counterBackgroundColor: theme.color.fillInverseSecondary
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else _defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */








var Provider = /*#__PURE__*/function (_Base) {
  function Provider() {
    _classCallCheck(this, Provider);
    return _callSuper(this, Provider, arguments);
  }
  _inherits(Provider, _Base);
  return _createClass(Provider, [{
    key: "providersHidden",
    get: function get() {
      return this.providers.length - this._visibleCount;
    }
  }, {
    key: "_construct",
    value: function _construct() {
      this._providers = [];
      _superPropGet(Provider, "_construct", this, 3)([]);
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateProviders();
      this._updateCounter();
    }
  }, {
    key: "_updateProviders",
    value: function _updateProviders() {
      var _this = this;
      var providerList = [];
      this.providers.slice(0, this.visibleCount).forEach(function (provider) {
        // Create a starting point for each provider icon.

        var patch = {
          centerInParent: true,
          radius: _this.disableRadius ? 0 : (0,utils/* getMaxRoundRadius */.XG)(_this.style.radius, _this.style.itemSize, _this.style.itemSize),
          alpha: _this.style.alpha,
          style: provider.style || {}
        };
        if (
        // If the provider is a pre-configured Icon, allow it to override the default behavior.
        provider.type === Icon/* default */.A && provider.icon && provider.w && provider.h) {
          // Maintain the ratio of the source icon while enforcing the height specified in the styles.
          var ratio = provider.w / provider.h;
          patch = _objectSpread(_objectSpread({
            type: Icon/* default */.A,
            icon: provider.icon
          }, provider), {}, {
            w: _this.style.itemSize * ratio,
            h: _this.style.itemSize
          }, patch);
        } else {
          // If the provider is just a string, create the rest of the Icon.
          patch = _objectSpread({
            type: Icon/* default */.A,
            w: _this.style.itemSize,
            h: _this.style.itemSize
          }, patch);
          if (_typeof(provider) === 'object') {
            patch = _objectSpread(_objectSpread({}, patch), provider);
          } else {
            patch.icon = provider;
          }
        }
        providerList.push(patch);
      });
      this._Row.patch({
        style: {
          itemSpacing: this.style.itemSpacing
        },
        items: providerList,
        h: this.style.itemSize
      });
    }
  }, {
    key: "_updateCounter",
    value: function _updateCounter() {
      if (this.providers.length > this.visibleCount) {
        var remaining = this.providersHidden;
        var counter = {
          announce: "+".concat(remaining),
          alpha: this.style.alpha,
          w: this.style.itemSize,
          h: this.style.itemSize,
          centerInParent: true,
          Background: {
            w: this.style.itemSize,
            h: this.style.itemSize,
            texture: lightning_esm/* default */.A.Tools.getRoundRect(this.style.itemSize, this.style.itemSize, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.style.itemSize, this.style.itemSize), 0, null, true, this.style.counterBackgroundColor)
          },
          Text: {
            type: TextBox/* default */.A,
            mountX: 0.5,
            mountY: 0.5,
            x: this.style.itemSize / 2,
            y: this.style.itemSize / 2,
            content: this.counterText || "+".concat(remaining),
            style: {
              textStyle: this.style.counterTextStyle
            }
          }
        };
        this._Row.appendItems([counter]);
      }
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.signal('providerChanged');
    }
  }, {
    key: "_getVisibleCount",
    value: function _getVisibleCount() {
      var min = 1;
      var max = this.providers.length;
      var visibleCount = Math.min(Math.max(min, this._visibleCount), max);
      if (this._visibleCount < min) {
        console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is less than the minimum value (").concat(min, "). Setting it to ").concat(min, "."));
      }
      if (this._visibleCount > max) {
        console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is greater than the maximum value (").concat(max, "). Setting it to ").concat(max, "."));
      }
      return visibleCount;
    }
  }, {
    key: "w",
    get: function get() {
      return this._Row.w;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Row.items && this._Row.items.length && this._Row.items.map(function (item) {
        return item.announce;
      });
    },
    set: function set(announce) {
      _superPropSet(Provider, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Provider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Provider_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Row: {
          type: Row/* default */.A,
          autoResizeWidth: true
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['disableRadius', 'counterText', 'providers', 'visibleCount'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Row'];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Provider/Provider.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Provider: () => (/* binding */ Provider),
  WithCustomIconSize: () => (/* binding */ WithCustomIconSize),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Provider_stories)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.js + 1 modules
var Provider_Provider = __webpack_require__("../../@lightningjs/ui-components/src/components/Provider/Provider.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/XfinityLogo16x9.png
const XfinityLogo16x9_namespaceObject = __webpack_require__.p + "static/media/XfinityLogo16x9.0587305b.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png
var Xfinity_Provider_Logo_Square = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.stories.js
/**
 * Copyright 2023 Comcast Cable Communications Management, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */






/* harmony default export */ const Provider_stories = ({
  title: 'Components/Provider'
});
const sharedArgs = {
  counterText: null,
  disableRadius: false,
  visibleCount: 3
};
const sharedArgTypes = {
  visibleCount: {
    control: {
      type: 'range',
      min: 1,
      max: 10,
      step: 1
    },
    description: 'Number of visible providers',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  counterText: {
    control: 'select',
    options: [null, '...'],
    description: 'Text to display in counter (overrides default behavior)',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  disableRadius: {
    control: 'boolean',
    description: 'Disable applying radius to icons',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
const Provider = () => class Provider extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      Provider: {
        type: Provider_Provider/* default */.A,
        providers: Array(10).fill({
          icon: Xfinity_Provider_Logo_Square,
          announce: 'xfinity'
        })
      }
    };
  }
};
Provider.args = sharedArgs;
Provider.argTypes = sharedArgTypes;
const WithCustomIconSize = () => class WithCustomIconSize extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      Provider: {
        type: Provider_Provider/* default */.A,
        providers: [{
          icon: Xfinity_Provider_Logo_Square,
          announce: 'xfinity'
        }, {
          type: Icon/* default */.A,
          w: 85,
          h: 48,
          // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit
          icon: XfinityLogo16x9_namespaceObject,
          announce: 'XFinity Logo Wide'
        }, ...Array.apply(null, {
          length: 8
        }).map(() => ({
          icon: Xfinity_Provider_Logo_Square,
          announce: 'xfinity'
        }))],
        visibleCount: 3
      }
    };
  }
};
WithCustomIconSize.args = sharedArgs;
WithCustomIconSize.argTypes = sharedArgTypes;
;
const __namedExportsOrder = ["Provider", "WithCustomIconSize"];
Provider.parameters = {
  ...Provider.parameters,
  docs: {
    ...Provider.parameters?.docs,
    source: {
      originalSource: "() => class Provider extends lng.Component {\n  static _template() {\n    return {\n      Provider: {\n        type: ProviderComponent,\n        providers: Array(10).fill({\n          icon: xfinity,\n          announce: 'xfinity'\n        })\n      }\n    };\n  }\n}",
      ...Provider.parameters?.docs?.source
    }
  }
};
WithCustomIconSize.parameters = {
  ...WithCustomIconSize.parameters,
  docs: {
    ...WithCustomIconSize.parameters?.docs,
    source: {
      originalSource: "() => class WithCustomIconSize extends lng.Component {\n  static _template() {\n    return {\n      Provider: {\n        type: ProviderComponent,\n        providers: [{\n          icon: xfinity,\n          announce: 'xfinity'\n        }, {\n          type: Icon,\n          w: 85,\n          h: 48,\n          // Xfinity icon is from the Xfinity Brand Press Materials from https://corporate.comcast.com/press/kit\n          icon: xfinityLogo,\n          announce: 'XFinity Logo Wide'\n        }, ...Array.apply(null, {\n          length: 8\n        }).map(() => ({\n          icon: xfinity,\n          announce: 'xfinity'\n        }))],\n        visibleCount: 3\n      }\n    };\n  }\n}",
      ...WithCustomIconSize.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-Square.d3aaa87c.png";

/***/ })

}]);
//# sourceMappingURL=components-Provider-Provider-stories.2f88f38f.iframe.bundle.js.map