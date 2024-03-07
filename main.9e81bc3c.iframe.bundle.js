(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[179],{

/***/ "../../@lightningjs/ui-components/src/components/Badge/Badge.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Badge)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Badge/Badge.styles.js
var Badge_styles_namespaceObject = {};
__webpack_require__.r(Badge_styles_namespaceObject);
__webpack_require__.d(Badge_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Badge/Badge.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

var base = function base(theme) {
  return {
    contentSpacing: theme.spacer.xs,
    offsetY: 1,
    paddingX: theme.spacer.md,
    paddingY: theme.spacer.xs,
    radius: theme.radius.sm,
    strokeWidth: theme.stroke.sm,
    textStyle: _objectSpread(_objectSpread({}, theme.typography.tag1), {}, {
      textAlign: 'center'
    })
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      backgroundColor: theme.color.fillInverseSecondary,
      iconColor: theme.color.textNeutral,
      textStyle: {
        textColor: theme.color.textNeutral
      },
      strokeColor: theme.color.strokeNeutralSecondary
    },
    inverse: {
      backgroundColor: theme.color.fillNeutralSecondary,
      iconColor: theme.color.textInverse,
      textStyle: {
        textColor: theme.color.textInverse
      },
      strokeColor: theme.color.strokeInverseSecondary
    },
    brand: {
      backgroundColor: theme.color.fillBrand,
      iconColor: theme.color.textNeutral,
      textStyle: {
        textColor: theme.color.textNeutral
      },
      strokeColor: theme.color.strokeInverseSecondary
    }
  };
};
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Badge/Badge.js
function Badge_typeof(o) { "@babel/helpers - typeof"; return Badge_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Badge_typeof(o); }
function Badge_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Badge_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Badge_ownKeys(Object(t), !0).forEach(function (r) { Badge_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Badge_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Badge_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { Badge_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function Badge_defineProperty(obj, key, value) { key = Badge_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Badge_toPropertyKey(t) { var i = Badge_toPrimitive(t, "string"); return "symbol" == Badge_typeof(i) ? i : String(i); }
function Badge_toPrimitive(t, r) { if ("object" != Badge_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Badge_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Badge_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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






var Badge = /*#__PURE__*/function (_Base) {
  _inherits(Badge, _Base);
  var _super = _createSuper(Badge);
  function Badge() {
    _classCallCheck(this, Badge);
    return _super.apply(this, arguments);
  }
  _createClass(Badge, [{
    key: "_init",
    value: function _init() {
      this._Text.on('txLoaded', this._updateLayout.bind(this));
      _get(_getPrototypeOf(Badge.prototype), "_init", this).call(this);
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateText();
      this._updateIcon();
      this._updateLayout();
      this._updateVisibility();
    }
  }, {
    key: "_updateVisibility",
    value: function _updateVisibility() {
      this.alpha = this.title || this.icon ? 1 : 0;
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      this._updateWidth();
      this._updateBackground();
      this._updatePositions();
      this.signal('loadedBadge', this);
    }
  }, {
    key: "_updateBackground",
    value: function _updateBackground() {
      var height = Math.max(this._Text.renderHeight, this._Icon.h) + this.style.paddingY * 2;
      this.patch({
        h: height,
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.w, height, this.style.radius, this.style.strokeWidth, this.style.strokeColor, true, this.style.backgroundColor)
      });
    }
  }, {
    key: "_updateText",
    value: function _updateText() {
      if (this._Text) {
        this._Text.patch({
          text: Badge_objectSpread(Badge_objectSpread({}, this.style.textStyle), {}, {
            text: this.title || ''
          })
        });
      }
    }
  }, {
    key: "_updateIcon",
    value: function _updateIcon() {
      this._Icon.patch({
        icon: this.icon,
        w: this.iconWidth,
        h: this.iconHeight,
        style: {
          color: (0,utils/* getHexColor */.Xv)(this.style.iconColor)
        }
      });
    }
  }, {
    key: "_updateWidth",
    value: function _updateWidth() {
      var width = 0;
      if (this.title && this.icon) {
        width = this._Text.renderWidth + this._Icon.finalW + this.style.contentSpacing + this.style.paddingX * 2;
      } else if (this.title) {
        width = this._Text.renderWidth + this.style.paddingX * 2;
      } else if (this.icon) {
        width = this._Icon.finalW + this.style.paddingX * 2;
      }
      this.w = width;
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      this._Icon.y = this.h / 2;
      if (this.iconAlign === 'left' && this.title && this.icon) {
        this._Icon.x = this.style.paddingX;
        this._Text.x = this._Icon.x + this._Icon.finalW + this.style.contentSpacing;
      } else if (this.iconAlign === 'right' && this.title && this.icon) {
        this._Text.x = this.style.paddingX;
        this._Icon.x = this._Text.x + this._Text.renderWidth + this.style.contentSpacing;
      } else {
        this._Text.x = this.style.paddingX;
        this._Icon.x = this.style.paddingX;
      }
      this._Text.y = this._h / 2 + this.style.offsetY;
    }
  }, {
    key: "_getIconHeight",
    value: function _getIconHeight() {
      if (this.icon) {
        return !this._Icon.finalH && this._Text ? this._Text.text.lineHeight : this._Icon.finalH;
      }
      return 0;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this.title;
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Badge.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Text: {
          mountY: 0.5
        },
        Icon: {
          type: Icon/* default */.Z,
          mountY: 0.5,
          signals: {
            itemChanged: '_updateLayout'
          }
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Badge';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Badge_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return ['title', 'icon', 'iconAlign', 'iconWidth', 'iconHeight'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Background', 'Text', 'Icon'];
    }
  }]);
  return Badge;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Base/Base.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Base_Base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withExtensions/index.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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


var SUFFIX = '__original';
function withExtensions(Base) {
  if (Base.prototype.constructor._withExtensionsApplied) {
    return Base;
  }
  return /*#__PURE__*/function (_Base) {
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_prototypeChain",
      get:
      /**
       * Climb the prototype chain to establish what component's extension rules this component should also inherit
       * @returns {set} // set of strings
       */
      function get() {
        if (this.__prototypeChain) return this.__prototypeChain;
        var prototypeChain = new Set();
        var proto = this;
        do {
          proto = Object.getPrototypeOf(proto);
          if (null !== proto && _typeof(proto) === 'object') {
            try {
              if (proto.constructor.__componentName) prototypeChain.add(proto.constructor.__componentName);
            } catch (error) {
              // Catch error when __componentName is not set in Base component
            }
          }
        } while (proto);
        this.__prototypeChain = prototypeChain;
        return prototypeChain;
      }

      /**
       * Get all valid extensions from the current theme
       * @returns {object[]} // Array of objects
       */
    }, {
      key: "_extensions",
      get: function get() {
        var extensions = context/* default */.Z && context/* default */.Z.theme && context/* default */.Z.theme.extensions;
        if (!extensions || !Array.isArray(extensions) || Array.isArray(extensions) && !extensions.length) return [];
        return extensions.filter(function (_ref) {
          var targetComponent = _ref.targetComponent,
            extension = _ref.extension;
          return (typeof targetComponent === 'string' || Array.isArray(targetComponent)) && typeof extension === 'function';
        }).slice().reverse() || [] // Array is reversed to ensure extensions are executed in the proper order top -> bottom
        ;
      }

      /**
       * Get all extensions to apply to this component
       * @return {class[]} // Array of classes
       */
    }, {
      key: "_componentExtensions",
      get: function get() {
        var _this = this;
        return this._extensions.filter(function (_ref2) {
          var targetComponent = _ref2.targetComponent;
          // check to see if extension should be applied to this component
          if (typeof targetComponent === 'string') {
            return targetComponent === _this.constructor.__componentName || _this._prototypeChain.has(targetComponent);
          } else if (Array.isArray(targetComponent)) {
            return targetComponent.find(function (pattern) {
              if (pattern.startsWith('/') && pattern.endsWith('/')) {
                var ComponentRegExp = new RegExp(pattern.slice(1, -1));
                return Array.from(_this._prototypeChain).some(function (name) {
                  return ComponentRegExp.test(name);
                });
              } else {
                return _this._prototypeChain.has(pattern);
              }
            });
          }
          return false;
        }).reduce(function (acc, _ref3) {
          var extension = _ref3.extension;
          acc.push(extension);
          return acc;
        }, []);
      }

      /**
       * Check if theme extension mixins have already been applied
       * @return {boolean}
       */
    }, {
      key: "_extensionApplied",
      get: function get() {
        return this._currentComponentExtensionLength === this._appliedExtensionLength;
      }
    }, {
      key: "_construct",
      value: function _construct() {
        this._appliedExtensionLength = 0; // After the extensions are applied we store the length of all to determine later on if they have been applied before
        this._extendedList = {};
        this._extensionInstance = {}; // This will hold the extension instance once created
        this._setupExtensionBound = this._setupExtension.bind(this);
        context/* default */.Z.on('themeUpdate', this._setupExtensionBound);
        this._currentComponentExtensionLength = this._calculateComponentExtensionLength();
        this._createExtension();
        _get(_getPrototypeOf(_class.prototype), "_construct", this).call(this);
      }
    }, {
      key: "_detach",
      value: function _detach() {
        _get(_getPrototypeOf(_class.prototype), "_detach", this).call(this);
        context/* default */.Z.off('themeUpdate', this._setupExtensionBound);
      }
    }, {
      key: "_setupExtension",
      value: function _setupExtension() {
        this._currentComponentExtensionLength = this._calculateComponentExtensionLength();
        this._createExtension.call(this);
      }
    }, {
      key: "_resetComponent",
      value: function _resetComponent() {
        var _this2 = this;
        this._extensionInstance._extensionCleanup && this._extensionInstance._extensionCleanup.call(this);
        (Object.keys(this._extendedList) || []).forEach(function (prop) {
          delete _this2[prop];
          delete _this2[prop + SUFFIX];
        });
        this._extensionInstance = {};
        this._extendedList = {};
      }
    }, {
      key: "_calculateComponentExtensionLength",
      value: function _calculateComponentExtensionLength() {
        var extensionLength = this._componentExtensions.reduce(function (acc, extensionMixin) {
          acc += extensionMixin.toString().length;
          return acc;
        }, 0);
        return extensionLength;
      }
    }, {
      key: "_createExtension",
      value: function _createExtension() {
        if (this._extensionApplied) return;
        this._resetComponent();
        var ExtendedClass = this._createExtensionClass();
        var instance = new ExtendedClass();
        this._extendedList = this._createExtensionAliases(instance);
        this._extensionInstance = instance;
        this._setComponentAliases(this._extendedList);
      }

      /**
       * Create the extension class
       * @return {class}
       */
    }, {
      key: "_createExtensionClass",
      value: function _createExtensionClass() {
        /**
         *
         * This class will sit at the bottom of the prototype stack and redirect all calls to the original to prevent an infinite loop
         *
         */
        function ExtensionBase() {}

        /** Create a new class the represents the extensions */
        var ExtendedClass = this._componentExtensions.reduce(function (acc, extension) {
          // Get the length of the extension and store the value. This will be used to determine if the mixin has been changed and needs to be re-applied
          return extension(acc);
        }, ExtensionBase);

        // Store the length of the extension to be applied
        this._appliedExtensionLength = this._calculateComponentExtensionLength();
        return ExtendedClass;
      }
    }, {
      key: "_createExtensionAliases",
      value: function _createExtensionAliases(obj) {
        // Find the prototype to be replaced
        var baseProto = obj;
        for (var i = 0; i < this._componentExtensions.length + 1; i++) {
          baseProto = Object.getPrototypeOf(baseProto);
        }

        /**
         * We will create alias for all the methods, getters, setters that will be overwritten by the extension layer
         * Create a list of properties to alias
         */

        var extended = {};
        var extensionOverrides = this._componentExtensions.reduce(function (acc, extension) {
          var extensionClass = new extension( /*#__PURE__*/_createClass(function FakeClass() {
            _classCallCheck(this, FakeClass);
          }));
          var instance = new extensionClass();
          // Get the descriptors
          var originalComponentDescriptors = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(instance));
          Object.keys(originalComponentDescriptors).forEach(function (prop) {
            if (['constructor'].includes(prop)) return;
            if (originalComponentDescriptors[prop].get || originalComponentDescriptors[prop].set) {
              extended[prop] = {
                type: 'accessor'
              };
              acc[prop] = {
                get: function get() {
                  return this[prop + SUFFIX];
                },
                set: function set(v) {
                  this[prop + SUFFIX] = v;
                }
              };
              return;
            }
            extended[prop] = {
              type: 'method'
            };
            acc[prop] = {
              value: function value() {
                this[prop + SUFFIX] && this[prop + SUFFIX]();
              }
            };
          });
          return acc;
        }, {});
        Object.defineProperties(baseProto, extensionOverrides);
        Object.setPrototypeOf(baseProto, this); // Set the bottom level prototype === the component

        return extended;
      }
    }, {
      key: "_setComponentAliases",
      value: function _setComponentAliases(aliasObj) {
        var _this3 = this;
        Object.keys(aliasObj).forEach(function (prop) {
          // Create an alias for the existing component property to save the original value
          _this3[prop + SUFFIX] = _this3[prop];
          if (aliasObj[prop].type === 'method') {
            _this3[prop] = _this3._extensionInstance[prop];
          } else if (aliasObj[prop].type === 'accessor') {
            Object.defineProperty(_this3, prop, {
              configurable: true,
              // Allow accessors to be updated on theme change
              get: function get() {
                return this._extensionInstance[prop];
              },
              set: function set(v) {
                this._extensionInstance[prop] = v;
              }
            });
          }
        });
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }, {
      key: "__componentName",
      get: function get() {
        if (!_get(_getPrototypeOf(_class), "__componentName", this)) {
          throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name, " class."));
        }
        return _get(_getPrototypeOf(_class), "__componentName", this);
      }
    }, {
      key: "_withExtensionsApplied",
      get: function get() {
        // Extensions should only be applied once per class. This prevents it running multiple times. Ex. Surface -> Tile
        return true;
      }
    }]);
    return _class;
  }(Base);
}
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withLayout/index.js
function withLayout_typeof(o) { "@babel/helpers - typeof"; return withLayout_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, withLayout_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = withLayout_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function withLayout_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function withLayout_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, withLayout_toPropertyKey(descriptor.key), descriptor); } }
function withLayout_createClass(Constructor, protoProps, staticProps) { if (protoProps) withLayout_defineProperties(Constructor.prototype, protoProps); if (staticProps) withLayout_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function withLayout_toPropertyKey(t) { var i = withLayout_toPrimitive(t, "string"); return "symbol" == withLayout_typeof(i) ? i : String(i); }
function withLayout_toPrimitive(t, r) { if ("object" != withLayout_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != withLayout_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function withLayout_get() { if (typeof Reflect !== "undefined" && Reflect.get) { withLayout_get = Reflect.get.bind(); } else { withLayout_get = function _get(target, property, receiver) { var base = withLayout_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return withLayout_get.apply(this, arguments); }
function withLayout_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = withLayout_getPrototypeOf(object); if (object === null) break; } return object; }
function withLayout_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) withLayout_setPrototypeOf(subClass, superClass); }
function withLayout_setPrototypeOf(o, p) { withLayout_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withLayout_setPrototypeOf(o, p); }
function withLayout_createSuper(Derived) { var hasNativeReflectConstruct = withLayout_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = withLayout_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = withLayout_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return withLayout_possibleConstructorReturn(this, result); }; }
function withLayout_possibleConstructorReturn(self, call) { if (call && (withLayout_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return withLayout_assertThisInitialized(self); }
function withLayout_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function withLayout_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function withLayout_getPrototypeOf(o) { withLayout_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withLayout_getPrototypeOf(o); }
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



function withLayout(Base) {
  return /*#__PURE__*/function (_Base) {
    withLayout_inherits(_class, _Base);
    var _super = withLayout_createSuper(_class);
    function _class() {
      withLayout_classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    withLayout_createClass(_class, [{
      key: "_construct",
      value: function _construct() {
        withLayout_get(withLayout_getPrototypeOf(_class.prototype), "_construct", this) && withLayout_get(withLayout_getPrototypeOf(_class.prototype), "_construct", this).call(this);
        this._previousDimensionData = null; // Store the previous dimension data to compare next time _updateItemLayout is called
      }
    }, {
      key: "itemLayout",
      get: function get() {
        return this._itemLayout;
      },
      set: function set(v) {
        var componentName = this.constructor._componentName || this.constructor.name;
        var itemLayout;
        if (v) {
          itemLayout = JSON.parse(JSON.stringify(v, function (k, v) {
            if (k !== 'circle' && v < 0) {
              context/* default */.Z.error("itemLayout for ".concat(componentName, " received an invalid value of ").concat(v, " for ").concat(k));
              return;
            } else if (k === 'circle') {
              return Boolean(v);
            }
            return v;
          }));
        }
        if (!(0,utils/* stringifyCompare */.ir)(this._itemLayout, itemLayout)) {
          if (itemLayout && !itemLayout.upCount) {
            this._originalW = this.w;
            this._originalH = this.h;
            this._itemLayout = _objectSpread({
              w: this._originalW,
              h: this._originalH
            }, itemLayout);
          } else {
            this._itemLayout = itemLayout;
          }
          this._updateItemLayout();
        }
      }
    }, {
      key: "_allowUpdate",
      value: function _allowUpdate() {
        var _ref = this._itemLayout || {},
          _ref$w = _ref.w,
          w = _ref$w === void 0 ? '' : _ref$w,
          _ref$h = _ref.h,
          h = _ref$h === void 0 ? '' : _ref$h,
          _ref$circle = _ref.circle,
          circle = _ref$circle === void 0 ? '' : _ref$circle,
          _ref$ratioX = _ref.ratioX,
          ratioX = _ref$ratioX === void 0 ? '' : _ref$ratioX,
          _ref$ratioY = _ref.ratioY,
          ratioY = _ref$ratioY === void 0 ? '' : _ref$ratioY,
          _ref$upCount = _ref.upCount,
          upCount = _ref$upCount === void 0 ? '' : _ref$upCount;
        // Store a string representation of all values from previous update to compare and decide if layout should change
        var layoutString = Object.values(context/* default */.Z.theme.layout).join('') + "".concat(w).concat(h).concat(circle ? 1 : 0).concat(ratioX).concat(ratioY).concat(upCount);
        if (layoutString !== this._previousDimensionData) {
          this._previousDimensionData = layoutString;
          return true;
        }
        return false;
      }
    }, {
      key: "_updateItemLayout",
      value: function _updateItemLayout() {
        if (!this._allowUpdate()) return;
        var _getDimensions = (0,utils/* getDimensions */.t_)(this.theme, this._itemLayout),
          w = _getDimensions.w,
          h = _getDimensions.h;
        if (h || w) {
          // If there is not enough information passed in args to calculate item size
          var width = context/* default */.Z.theme.layout.screenW;
          var height = context/* default */.Z.theme.layout.screenH;
          var calculatedWidth = w || h * (width / height);
          var calculatedHeight = h || w * (height / width);
          this.w = this._itemLayout && this._itemLayout.circle ? calculatedHeight : calculatedWidth; // Width must be set first in order for Cards to be displayed properly
          this.h = calculatedHeight;
          if (this._itemLayout && this._itemLayout.circle && this.style.radius) {
            this._circleSet = true;
            this._originalRadius = this.style.radius;
            this.style = _objectSpread(_objectSpread({}, this.style), {}, {
              radius: calculatedHeight / 2
            });
          } else if (this._circleSet) {
            // Restore to it's original state
            this.style = _objectSpread(_objectSpread({}, this.style), {}, {
              radius: this._originalRadius
            });
            this._originalRadius = undefined;
            this._circleSet = false;
          }
          this.queueRequestUpdate && this.queueRequestUpdate();
          this.fireAncestors('$itemChanged');
        }
      }
    }]);
    return _class;
  }(Base);
}
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/mixins/withThemeStyles/index.js + 3 modules
var withThemeStyles = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withThemeStyles/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/mixins/withUpdates/index.js
var withUpdates = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withUpdates/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/mixins/withTags/index.js
var withTags = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withTags/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/mixins/withHandleKey/index.js
var withHandleKey = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withHandleKey/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js
function Base_typeof(o) { "@babel/helpers - typeof"; return Base_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Base_typeof(o); }
function Base_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Base_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Base_toPropertyKey(descriptor.key), descriptor); } }
function Base_createClass(Constructor, protoProps, staticProps) { if (protoProps) Base_defineProperties(Constructor.prototype, protoProps); if (staticProps) Base_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Base_toPropertyKey(t) { var i = Base_toPrimitive(t, "string"); return "symbol" == Base_typeof(i) ? i : String(i); }
function Base_toPrimitive(t, r) { if ("object" != Base_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Base_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Base_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Base_setPrototypeOf(subClass, superClass); }
function Base_setPrototypeOf(o, p) { Base_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Base_setPrototypeOf(o, p); }
function Base_createSuper(Derived) { var hasNativeReflectConstruct = Base_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Base_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Base_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Base_possibleConstructorReturn(this, result); }; }
function Base_possibleConstructorReturn(self, call) { if (call && (Base_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Base_assertThisInitialized(self); }
function Base_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Base_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function Base_getPrototypeOf(o) { Base_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Base_getPrototypeOf(o); }
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





var Base = /*#__PURE__*/function (_lng$Component) {
  Base_inherits(Base, _lng$Component);
  var _super = Base_createSuper(Base);
  function Base() {
    Base_classCallCheck(this, Base);
    return _super.apply(this, arguments);
  }
  Base_createClass(Base, [{
    key: "_construct",
    value: function _construct() {
      this.constructor.__componentName; // Check that __componentName is set
      this.skipPlinko = false;
      this.centerInParent = false;
      if (!this.loaded) this.loaded = Promise.resolve(); // By default this is a resolved promise. Components can use _resetLoadedPromise if they require the functionality
    }
  }, {
    key: "_init",
    value: function _init() {
      this.queueRequestUpdate();
    }
  }, {
    key: "_resetLoadedPromise",
    value: function _resetLoadedPromise() {
      var _this = this;
      this.loaded = new Promise(function (resolve, reject) {
        _this._resolveLoadedPromise = resolve;
        _this._rejectLoadedPromise = reject;
      });
    }
  }, {
    key: "_update",
    value: function _update() {}
  }, {
    key: "_focus",
    value: function _focus() {
      this._updateShouldSmooth();
      this.queueRequestUpdate();
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      this.queueRequestUpdate();
    }
  }, {
    key: "_updateShouldSmooth",
    value: function _updateShouldSmooth() {
      if (this.shouldSmooth === undefined) this.shouldSmooth = true;
    }

    /**
     * This method accepts a target component, patch object, and optional smooth object.
     * If the component is visible, it will smooth in the smooth object, or fall back to
     * the patch object, if not it will apply the patch.
     *
     * @param {component reference} ref tag ref of target component
     * @param {object} patch object of properties to patch to target
     * @param {object} smooth object of properties to smooth to target
     */
  }, {
    key: "applySmooth",
    value: function applySmooth(ref, patch, smooth) {
      if (this.shouldSmooth) {
        ref.smooth = smooth || patch;
      } else {
        ref.patch(patch);
      }
    }

    // keep announce methods out of the update lifecycle (do not put in properties array)
    // announce methods do not need to re-render component
  }, {
    key: "announce",
    get: function get() {
      return this._announce;
    },
    set: function set(announce) {
      this._announce = announce;
    }
  }, {
    key: "announceContext",
    get: function get() {
      return this._announceContext;
    },
    set: function set(announce) {
      this._announceContext = announce;
    }
  }, {
    key: "shouldSmooth",
    get: function get() {
      return this._shouldSmooth;
    },
    set: function set(shouldSmooth) {
      this._shouldSmooth = shouldSmooth;
    }
  }, {
    key: "_isDisabledMode",
    get: function get() {
      return this.mode === 'disabled';
    }
  }, {
    key: "_isUnfocusedMode",
    get: function get() {
      return this.mode === 'unfocused';
    }
  }, {
    key: "_isFocusedMode",
    get: function get() {
      return this.mode === 'focused';
    }
  }, {
    key: "isFullyOnScreen",
    value: function isFullyOnScreen(offsets) {
      return (0,utils/* isComponentOnScreen */.J)(this, offsets);
    }
  }, {
    key: "getFocusScale",
    value: function getFocusScale() {
      return context/* default */.Z.theme.layout.focusScale;
    }
  }, {
    key: "getUnfocusScale",
    value: function getUnfocusScale() {
      return 1;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Base';
    }
  }]);
  return Base;
}(lightning_esm/* default */.Z.Component);
function withMixins(baseComponent) {
  return withExtensions(withLayout((0,withThemeStyles/* default */.Z)((0,withUpdates/* default */.Z)((0,withTags/* default */.Z)((0,withHandleKey/* default */.Z)(baseComponent))))));
}
/* harmony default export */ const Base_Base = (withMixins(Base));

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Column/Column.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Column)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Column/Column.styles.js
var Column_styles_namespaceObject = {};
__webpack_require__.r(Column_styles_namespaceObject);
__webpack_require__.d(Column_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js + 1 modules
var NavigationManager = __webpack_require__("../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Column/Column.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

var base = function base(theme) {
  return {
    itemSpacing: theme.layout.gutterY,
    scrollIndex: 0,
    itemTransition: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
      duration: theme.animation.duration.fast
    })
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Column/Column.js
function Column_typeof(o) { "@babel/helpers - typeof"; return Column_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Column_typeof(o); }
function Column_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Column_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Column_ownKeys(Object(t), !0).forEach(function (r) { Column_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Column_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Column_defineProperty(obj, key, value) { key = Column_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Column_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Column_toPropertyKey(t) { var i = Column_toPrimitive(t, "string"); return "symbol" == Column_typeof(i) ? i : String(i); }
function Column_toPrimitive(t, r) { if ("object" != Column_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Column_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Column_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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




var Column = /*#__PURE__*/function (_NavigationManager) {
  _inherits(Column, _NavigationManager);
  var _super = _createSuper(Column);
  function Column() {
    _classCallCheck(this, Column);
    return _super.apply(this, arguments);
  }
  _createClass(Column, [{
    key: "_isOnScreenForScrolling",
    value: function _isOnScreenForScrolling(child) {
      if (!child) return false;
      var y = (0,utils/* getY */.Ff)(child);
      if (!Number.isFinite(y)) return false;
      var itemsTransitionY = this.getTransitionYTargetValue();
      var columnY = this.core.renderContext.py;
      var itemY = columnY + itemsTransitionY + y;
      var yModifier;

      // This section here takes the difference between a possible target value
      // and subtracts it from the current child x. That value then is subtracted from the initial
      // itemX value calculated on the core renderContext px value to more accurately
      // calculate the item's location on screen when it's own x value will be updating.
      if (child.transition('y')) {
        yModifier = child.y - child.transition('y').targetValue;
        itemY = itemY - yModifier;
      }
      return itemY >= columnY && itemY + child.h <= columnY + this.h;
    }
  }, {
    key: "_shouldScroll",
    value: function _shouldScroll() {
      if (this.alwaysScroll) {
        return true;
      }
      var shouldScroll = false;
      if (!this.neverScroll) {
        var isCompletelyOnScreen = this._isOnScreenForScrolling(this.selected);
        var lastChild = this.Items.childList.last;
        shouldScroll = lastChild && (this.shouldScrollUp() || this.shouldScrollDown() || !isCompletelyOnScreen);
      }
      if (this.selectedIndex < this.scrollIndex) {
        shouldScroll = false;
      }
      return shouldScroll;
    }
  }, {
    key: "_getScrollY",
    value: function _getScrollY() {
      var itemsContainerY;
      var itemIndex = this.selectedIndex - this.scrollIndex;
      itemIndex = itemIndex < 0 ? 0 : itemIndex;
      if (itemIndex === this._firstFocusableIndex()) {
        itemIndex = 0;
      }
      if (this.Items.children[itemIndex]) {
        itemsContainerY = this.Items.children[itemIndex].transition('y') ? -this.Items.children[itemIndex].transition('y').targetValue + this.itemPosY : -this.Items.children[itemIndex].y + this.itemPosY;
      }
      return itemsContainerY;
    }
  }, {
    key: "_render",
    value: function _render(next, prev) {
      this._prevLastScrollIndex = this._lastScrollIndex;
      if (this.plinko && prev && prev.selected && !(this.items.indexOf(prev) === 0 && prev.skipPlinko)) {
        var prevPlinko = this.checkSkipPlinko(prev, next);
        next.selectedIndex = this._getIndexOfItemNear(next, prevPlinko || prev);
      } else if (next && !next.selectedIndex) {
        next.selectedIndex = 0;
      }
      var itemsContainerY;
      if (!this.Items.children.length) {
        itemsContainerY = this.itemPosY;
      } else if (this._shouldScroll()) {
        itemsContainerY = this._getScrollY();
      }
      if (itemsContainerY !== undefined) {
        this.updatePositionOnAxis(this.Items, itemsContainerY);
      }
      this.onScreenEffect(this.onScreenItems);
    }
  }, {
    key: "_performRender",
    value: function _performRender() {
      this._render(this.selected, this.prevSelected);
    }
  }, {
    key: "checkSkipPlinko",
    value: function checkSkipPlinko(prev, next) {
      var _this = this;
      // If previous doesn't have skip plinko or previous is the first or last item
      if (!prev || !prev.skipPlinko || [0, this.items.length - 1].includes(this.items.indexOf(prev))) {
        return null;
      }
      var prevIndex = this.items.indexOf(prev);
      var direction = prevIndex - this.items.indexOf(next);
      var up = direction > 0;

      // Grab all items below prev if up or all items before prev if down
      var prevItems = up ? this.items.slice(prevIndex).map(function (i) {
        return {
          skipPlinko: i.skipPlinko,
          index: _this.items.indexOf(i)
        };
      }) : this.items.slice(0, prevIndex + 1).map(function (i) {
        return {
          skipPlinko: i.skipPlinko,
          index: _this.items.indexOf(i)
        };
      }).reverse();

      // first item that has skipPlinko but the previous does not
      // Start at the index prev
      var endOfMultiSkipPlinkos = prevItems.find(function (i) {
        return i.skipPlinko && !_this.items[i.index + direction].skipPlinko;
      });
      var prevPlinkoIndex = endOfMultiSkipPlinkos ? endOfMultiSkipPlinkos.index + direction : prevIndex + direction; // +/- 1, item index before prev

      return this.items[prevPlinkoIndex];
    }
  }, {
    key: "_itemsY",
    get: function get() {
      return (0,utils/* getY */.Ff)(this.Items);
    }
  }, {
    key: "$removeItem",
    value: function $removeItem(item) {
      if (item) {
        var wasSelected = item === this.selected;
        this.Items.childList.remove(item);
        this.queueRequestUpdate();
        if (wasSelected || this.selectedIndex >= this.items.length) {
          // eslint-disable-next-line no-self-assign
          this.selectedIndex = this._selectedIndex;
        }
        if (!this.items.length) {
          this.fireAncestors('$columnEmpty');
        }
      }
    }
  }, {
    key: "$columnChanged",
    value: function $columnChanged() {
      this.queueRequestUpdate();
    }
  }, {
    key: "_isOnScreen",
    value: function _isOnScreen(child) {
      if (!child) return false;
      return this._isComponentVerticallyVisible(child);
    }

    // can be overridden
  }, {
    key: "onScreenEffect",
    value: function onScreenEffect() {}
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Column';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Column_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return Column_objectSpread(Column_objectSpread({}, _get(_getPrototypeOf(Column), "_template", this).call(this)), {}, {
        direction: 'column'
      });
    }
  }]);
  return Column;
}(NavigationManager/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FocusManager)
/* harmony export */ });
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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

/**
 * FocusManager Component
 *
 * Container to set focus on elements with key[Up/Down] or key[Left/Right]
 */


var FocusManager = /*#__PURE__*/function (_Base) {
  _inherits(FocusManager, _Base);
  var _super = _createSuper(FocusManager);
  function FocusManager() {
    _classCallCheck(this, FocusManager);
    return _super.apply(this, arguments);
  }
  _createClass(FocusManager, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(FocusManager.prototype), "_construct", this).call(this);
      this._selectedIndex = 0;
      this._itemPosX = 0;
      this._itemPosY = 0;
      this.direction = this.direction || 'row';
    }
  }, {
    key: "_init",
    value: function _init() {
      this._checkSkipFocus();
    }
  }, {
    key: "Items",
    get: function get() {
      if (!this.tag('Items')) {
        this.patch({
          Items: {}
        });
      }
      return this._Items;
    }
  }, {
    key: "_setDirection",
    value: function _setDirection(direction) {
      var state = {
        none: 'None',
        column: 'Column',
        row: 'Row'
      }[direction];
      if (state) {
        this._setState(state);
      }
      return direction;
    }
  }, {
    key: "_getItems",
    value: function _getItems() {
      return this._Items.children;
    }
  }, {
    key: "items",
    get: function get() {
      return this.Items.children;
    },
    set: function set(items) {
      this._resetItems();
      this._selectedIndex = 0;
      this.appendItems(items);
      this._checkSkipFocus();
    }
  }, {
    key: "itemPosX",
    get: function get() {
      return this._itemPosX;
    },
    set: function set(x) {
      this.Items.x = this._itemPosX = x;
    }
  }, {
    key: "itemPosY",
    get: function get() {
      return this._itemPosY;
    },
    set: function set(y) {
      this.Items.y = this._itemPosY = y;
    }
  }, {
    key: "_resetItems",
    value: function _resetItems() {
      this.Items.childList.clear();
      this.Items.patch({
        w: 0,
        h: 0,
        x: this.itemPosX,
        y: this.itemPosY
      });

      // This fixes an issue when trying to call set items if there are already items held in _lazyItems.
      // Going to follow up on a review of this feature.
      if (this._lazyItems) {
        this._lazyItems = null;
      }
    }
  }, {
    key: "_appendLazyItem",
    value: function _appendLazyItem(item) {
      this.appendItems([item]);
    }
  }, {
    key: "appendItems",
    value: function appendItems() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.Items.childList.a(items);
      this._refocus();
    }
  }, {
    key: "appendItemsAt",
    value: function appendItemsAt() {
      var _this = this;
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var idx = arguments.length > 1 ? arguments[1] : undefined;
      var addIndex = Number.isInteger(idx) ? idx : this.Items.children.length;
      this.shouldSmooth = false;
      this._lastAppendedIdx = addIndex;
      items.forEach(function (item, itemIdx) {
        _this.Items.childList.addAt(_objectSpread(_objectSpread({}, item), {}, {
          parentFocus: _this.hasFocus()
        }), addIndex + itemIdx);
      });
      if (this.selectedIndex >= this._lastAppendedIdx) {
        this._selectedIndex += items.length;
      }
      this.requestUpdate();
      this._refocus();
    }
  }, {
    key: "prependItems",
    value: function prependItems(items) {
      this.appendItemsAt(items, 0);
    }
  }, {
    key: "removeItemAt",
    value: function removeItemAt(index) {
      this.shouldSmooth = false;
      this.Items.childList.removeAt(index);
      if (this.selectedIndex > index || this.selectedIndex === this.Items.children.length) {
        this._selectedIndex--;
      }
      this.requestUpdate();
      this._refocus();
    }
  }, {
    key: "_checkSkipFocus",
    value: function _checkSkipFocus() {
      // If the first item has skip focus when appended get the next focusable item
      var initialSelection = this.Items.children[this.selectedIndex];
      if (initialSelection && initialSelection.skipFocus) {
        this.selectNext(false);
      }
    }
  }, {
    key: "selected",
    get: function get() {
      return this.Items.children[this.selectedIndex];
    }
  }, {
    key: "selectedIndex",
    get: function get() {
      return this._selectedIndex;
    },
    set: function set(index) {
      this.prevSelected = this.selected;
      if (!this.Items.children.length || !this.Items.children[index] || !this.Items.children[index].skipFocus) {
        if (index !== this._selectedIndex) {
          this._selectedIndex = index;
        }
        if (this.selected) {
          this._selectedChange(this.selected, this.prevSelected);
        }
        // Don't call refocus until after a new render in case of a situation like Plinko nav
        // where we don't want to focus the previously selected item and need to get the new one first
        this._refocus();
      }
    }
  }, {
    key: "_selectedChange",
    value: function _selectedChange(selected, prevSelected) {
      this._render(selected, prevSelected);
      this.signal('selectedChange', selected, prevSelected);
    }

    // Override
  }, {
    key: "_render",
    value: function _render() {}
  }, {
    key: "_firstFocusableIndex",
    value: function _firstFocusableIndex() {
      if (!this.items.length) return 0;
      var firstItem = this.items.reduce(function (acc, item, idx) {
        if (!item.skipFocus) {
          acc.push(_objectSpread(_objectSpread({}, item), {}, {
            originalIdx: idx
          }));
        }
        return acc;
      }, []).shift();
      return firstItem.originalIdx;
    }
  }, {
    key: "_lastFocusableIndex",
    value: function _lastFocusableIndex() {
      if (!this.items.length) return 0;
      var lastItem = this.items.reduce(function (acc, item, idx) {
        if (!item.skipFocus) {
          acc.push(_objectSpread(_objectSpread({}, item), {}, {
            originalIdx: idx
          }));
        }
        return acc;
      }, []).pop();
      return lastItem.originalIdx;
    }
  }, {
    key: "selectPrevious",
    value: function selectPrevious() {
      this.shouldSmooth = true;
      var hasFocusable = !!(this.items || []).filter(function (i) {
        return !i.skipFocus;
      }).length;
      if (this.selectedIndex === 0 && !this.wrapSelected || !hasFocusable) {
        return false;
      }
      var previousItemIndex = this.items.map(function (item) {
        return !!item.skipFocus;
      }).lastIndexOf(false, this._selectedIndex - 1);
      if (previousItemIndex > -1) {
        this.selectedIndex = previousItemIndex;
        return true;
      } else if (this.wrapSelected) {
        this.selectedIndex = this._lastFocusableIndex();
        return true;
      }
      return false;
    }
  }, {
    key: "selectNext",
    value: function selectNext(shouldSmoothOverride) {
      var _this2 = this;
      if (this._lazyItems && this._lazyItems.length) {
        this._appendLazyItem(this._lazyItems.splice(0, 1)[0]);
      }
      this.shouldSmooth = shouldSmoothOverride !== null && shouldSmoothOverride !== void 0 ? shouldSmoothOverride : true;
      var hasFocusable = !!(this.items || []).filter(function (i) {
        return !i.skipFocus;
      }).length;
      if (this.selectedIndex === this.Items.children.length - 1 && !this.wrapSelected || !hasFocusable) {
        return false;
      }
      var nextIndex = this.items.findIndex(function (item, idx) {
        return !item.skipFocus && idx > _this2._selectedIndex;
      });
      if (nextIndex > -1) {
        this.selectedIndex = nextIndex;
        return true;
      } else if (this.wrapSelected) {
        this.selectedIndex = this._firstFocusableIndex();
        return true;
      }
      return false;
    }
  }, {
    key: "_getIndexOfItemNear",
    value: function _getIndexOfItemNear(selected, prev) {
      var prevItem = prev.selected;
      if (!selected || !selected.items || !selected.items.length || !prevItem) {
        return 0;
      }
      var _prevItem$core$getAbs = prevItem.core.getAbsoluteCoords(0, 0),
        _prevItem$core$getAbs2 = _slicedToArray(_prevItem$core$getAbs, 2),
        itemX = _prevItem$core$getAbs2[0],
        itemY = _prevItem$core$getAbs2[1];
      var prevMiddle = [itemX + prevItem.w / 2, itemY + prevItem.h / 2];

      // Get all item center points from selected
      var selectedCoordArray = selected.items.map(function (item, index) {
        return {
          index: index,
          distance: !item.skipFocus ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getShortestDistance */ .hP)(prevMiddle, item) : null
        };
      }).filter(function (item) {
        // Remove all indexes that don't have a distance (skipFocus)
        return null !== item.distance;
      }).sort(function (a, b) {
        return a.distance - b.distance;
      });
      return selectedCoordArray[0].index;
    }

    /**
     * TODO: Update Base to remove the focus/unfocus calls and add a second "BaseComponent" that does have them
     *
     * Layout Components (Column, Row, BoardRows, etc.) would extend only Base,
     *    need to confirm this applies to InlineContnet and ScrollWrapper??
     * Element/Pattern Components (Tile, Badge, etc.) would extend "BaseComponent" that does have focus/unfocus overrides
     */
  }, {
    key: "_focus",
    value: function _focus() {
      _get(_getPrototypeOf(FocusManager.prototype), "_focus", this).call(this);
      this.items.forEach(function (item) {
        return item.parentFocus = true;
      });
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      _get(_getPrototypeOf(FocusManager.prototype), "_unfocus", this).call(this);
      this.items.forEach(function (item) {
        return item.parentFocus = false;
      });
    }
  }, {
    key: "_updateShouldSmooth",
    value: function _updateShouldSmooth() {}
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      var selected = this.selected;
      // Make sure we're focused on a component
      if (selected) {
        if (selected.focusRef) {
          return selected.tag(selected.focusRef);
        } else if (selected.cparent) {
          return selected;
        }
      }
      return this;
    }
  }, {
    key: "_updateTransitionTarget",
    value: function _updateTransitionTarget(element, property, newValue) {
      if (element && element.transition(property) && !element.transition(property).isRunning() && element.transition(property).targetValue !== newValue) {
        element.transition(property).updateTargetValue(newValue);
      }
    }

    /**
     * Return list of items that are currently fully and partially on screen
     * @returns {Array} Array of matching lng.Component objects or empty array
     */
  }, {
    key: "onScreenItems",
    get: function get() {
      var _this3 = this;
      return this.Items.children.filter(function (child) {
        return _this3._isOnScreen(child);
      });
    }
  }, {
    key: "_isOnScreenCompletely",
    value: function _isOnScreenCompletely(child) {
      // 'isFullyOnScreen' method has been added to the Base class.
      // in case child does _not_ extend Base, 'isComponentOnScreen'
      // from the 'util' module will be invoked. The same method is
      // invoked by Base class
      return child.isFullyOnScreen ? child.isFullyOnScreen() : (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .isComponentOnScreen */ .J)(child);
    }
  }, {
    key: "fullyOnScreenItems",
    get: function get() {
      var _this4 = this;
      return this.Items.children.reduce(function (rv, item) {
        if (item instanceof FocusManager) {
          return [].concat(_toConsumableArray(rv), _toConsumableArray(item.Items.children.filter(_this4._isOnScreenCompletely)));
        } else if (_this4._isOnScreenCompletely(item)) {
          return [].concat(_toConsumableArray(rv), [item]);
        } else {
          return rv;
        }
      }, []);
    }
  }, {
    key: "_isOnScreen",
    value: function _isOnScreen() {
      throw new Error("'_isOnScreen' must be implemented by 'row'/'column'");
    }
  }, {
    key: "_isComponentHorizontallyVisible",
    value: function _isComponentHorizontallyVisible(child) {
      // get child's destination X; If child is moving to a destination,
      // get the value of where child will end up
      var x = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getX */ .nZ)(child);
      if (!Number.isFinite(x)) return false;

      // to calculate the target absolute X position of the item, we need to use
      // 1) the entire component's absolute position,
      // 2) the target animation value of the items container, and
      // 3) the target value of the item itself
      var transitionX = this.getTransitionXTargetValue();
      // get absolute position of FocusManager on screen
      var px = this.core.renderContext.px;
      var itemX = px + transitionX + x;

      // _scissor consists of [ left position (x), top position (y), width, height ]
      var _ref = this.core._scissor || [],
        _ref2 = _slicedToArray(_ref, 3),
        _ref2$ = _ref2[0],
        leftBounds = _ref2$ === void 0 ? null : _ref2$,
        _ref2$2 = _ref2[2],
        clipWidth = _ref2$2 === void 0 ? null : _ref2$2;
      var stageW = this.stage.w / this.stage.getRenderPrecision();
      var w = child.w;
      var withinLeftStageBounds = itemX >= 0;
      var withinRightStageBounds = itemX + w <= stageW;
      // short circuit
      if (!withinLeftStageBounds || !withinRightStageBounds) return false;
      var withinLeftClippingBounds = true;
      var withinRightClippingBounds = true;
      if (Number.isFinite(leftBounds)) {
        withinLeftClippingBounds = Math.round(itemX + w) >= Math.round(leftBounds);
        withinRightClippingBounds = Math.round(itemX) <= Math.round(leftBounds + clipWidth);
      }
      return withinLeftClippingBounds && withinRightClippingBounds;
    }
  }, {
    key: "_isComponentVerticallyVisible",
    value: function _isComponentVerticallyVisible(child) {
      // get child's destination Y; If child is moving to a destination,
      // get the value of where child will end up
      var y = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .getY */ .Ff)(child);
      if (!Number.isFinite(y)) return false;

      // to calculate the target absolute Y position of the item, we need to use
      // 1) the entire component's absolute position,
      // 2) the target animation value of the items container, and
      // 3) the target value of the item itself
      var transitionY = this.getTransitionYTargetValue();

      // get absolute position of FocusManager on screen
      var py = this.core.renderContext.py;

      // _scissor consists of [ left position (x), top position (y), width, height ]
      var _ref3 = this.core._scissor || [],
        _ref4 = _slicedToArray(_ref3, 4),
        _ref4$ = _ref4[1],
        topBounds = _ref4$ === void 0 ? null : _ref4$,
        _ref4$2 = _ref4[3],
        clipHeight = _ref4$2 === void 0 ? null : _ref4$2;
      var h = child.h;
      var itemY = py + transitionY + y;
      var stageH = this.stage.h / this.stage.getRenderPrecision();
      var withinTopStageBounds = itemY + h >= 0;
      var withingBottomStageBounds = itemY <= stageH;

      // short circuit
      if (!withinTopStageBounds || !withingBottomStageBounds) return false;
      var withinTopClippingBounds = true;
      var withinBottomClippingBounds = true;
      if (Number.isFinite(topBounds)) {
        withinTopClippingBounds = Math.round(itemY + h) > Math.round(topBounds);
        withinBottomClippingBounds = Math.round(itemY) < Math.round(topBounds + clipHeight);
      }
      return withinTopClippingBounds && withinBottomClippingBounds;
    }
  }, {
    key: "getTransitionXTargetValue",
    value: function getTransitionXTargetValue() {
      return this.Items.transition('x').targetValue;
    }
  }, {
    key: "getTransitionYTargetValue",
    value: function getTransitionYTargetValue() {
      return this.Items.transition('y').targetValue;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'FocusManager';
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Items'];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['direction', 'wrapSelected'];
    }
  }, {
    key: "_states",
    value: function _states() {
      return [/*#__PURE__*/function (_this5) {
        _inherits(None, _this5);
        var _super2 = _createSuper(None);
        function None() {
          _classCallCheck(this, None);
          return _super2.apply(this, arguments);
        }
        return _createClass(None);
      }(this), /*#__PURE__*/function (_this6) {
        _inherits(Row, _this6);
        var _super3 = _createSuper(Row);
        function Row() {
          _classCallCheck(this, Row);
          return _super3.apply(this, arguments);
        }
        _createClass(Row, [{
          key: "_handleLeft",
          value: function _handleLeft() {
            return typeof this.onLeft === 'function' ? this.onLeft(this) : this.selectPrevious();
          }
        }, {
          key: "_handleRight",
          value: function _handleRight() {
            return typeof this.onRight === 'function' ? this.onRight(this) : this.selectNext();
          }
        }]);
        return Row;
      }(this), /*#__PURE__*/function (_this7) {
        _inherits(Column, _this7);
        var _super4 = _createSuper(Column);
        function Column() {
          _classCallCheck(this, Column);
          return _super4.apply(this, arguments);
        }
        _createClass(Column, [{
          key: "_handleUp",
          value: function _handleUp() {
            return typeof this.onUp === 'function' ? this.onUp(this) : this.selectPrevious();
          }
        }, {
          key: "_handleDown",
          value: function _handleDown() {
            return typeof this.onDown === 'function' ? this.onDown(this) : this.selectNext();
          }
        }]);
        return Column;
      }(this)];
    }
  }]);
  return FocusManager;
}(_Base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ GridOverlay)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.styles.js
var GridOverlay_styles_namespaceObject = {};
__webpack_require__.r(GridOverlay_styles_namespaceObject);
__webpack_require__.d(GridOverlay_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Column/Column.js + 1 modules
var Column = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

var base = function base(theme) {
  return {
    propertyTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
      textColor: theme.color.textNeutral
    }),
    valueTextStyle: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
      textColor: theme.color.textNeutral
    })
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.js
function GridOverlay_typeof(o) { "@babel/helpers - typeof"; return GridOverlay_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, GridOverlay_typeof(o); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function GridOverlay_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function GridOverlay_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? GridOverlay_ownKeys(Object(t), !0).forEach(function (r) { GridOverlay_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : GridOverlay_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function GridOverlay_defineProperty(obj, key, value) { key = GridOverlay_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, GridOverlay_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function GridOverlay_toPropertyKey(t) { var i = GridOverlay_toPrimitive(t, "string"); return "symbol" == GridOverlay_typeof(i) ? i : String(i); }
function GridOverlay_toPrimitive(t, r) { if ("object" != GridOverlay_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != GridOverlay_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (GridOverlay_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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








var Spacer = /*#__PURE__*/function (_Base) {
  _inherits(Spacer, _Base);
  var _super = _createSuper(Spacer);
  function Spacer() {
    _classCallCheck(this, Spacer);
    return _super.apply(this, arguments);
  }
  _createClass(Spacer, [{
    key: "_update",
    value: function _update() {
      this._Line.w = this.w;
      this._TickRight.x = this._Line.w;
      if (this.lineColor) {
        this._Line.color = this._TickLeft.color = this._TickRight.color = this.lineColor;
      }
      this.rotation = this.vertical ? Math.PI / 2 : 0;
      this.signal('spacerLoaded');
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Spacer';
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Line: {
          h: Spacer._lineThickness,
          rect: true,
          mountY: 0.5,
          TickLeft: GridOverlay_objectSpread(GridOverlay_objectSpread({}, Spacer._tick), {}, {
            x: Spacer._lineThickness * -1
          }),
          TickRight: Spacer._tick
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['lineColor'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Line', 'TickLeft', 'TickRight'];
    }
  }, {
    key: "_lineThickness",
    get: function get() {
      return 3;
    }
  }, {
    key: "_tickLength",
    get: function get() {
      return 25;
    }
  }, {
    key: "_tick",
    get: function get() {
      return {
        rect: true,
        mountY: 0.5,
        w: Spacer._lineThickness,
        h: Spacer._tickLength,
        y: Spacer._lineThickness / 2
      };
    }
  }]);
  return Spacer;
}(Base/* default */.Z);
var GridOverlay = /*#__PURE__*/function (_Base2) {
  _inherits(GridOverlay, _Base2);
  var _super2 = _createSuper(GridOverlay);
  function GridOverlay() {
    _classCallCheck(this, GridOverlay);
    return _super2.apply(this, arguments);
  }
  _createClass(GridOverlay, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(GridOverlay.prototype), "_construct", this).call(this);
      this._showColumns = this._showMargins = this._showSafe = this._showGutters = this._showText = true;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateGlobalThemeProps();
      this._updateMargins();
      this._updateSafe();
      this._updateColumns();
      this._updateGutters();
      this._updateText();
      this._updateVisibility();
    }
  }, {
    key: "_updateVisibility",
    value: function _updateVisibility() {
      this._Columns.smooth = {
        alpha: Number(this.showColumns)
      };
      this._Margins.smooth = {
        alpha: Number(this.showMargins)
      };
      this._Safe.smooth = {
        alpha: Number(this.showSafe)
      };
      this._Gutters.smooth = {
        alpha: Number(this.showGutters)
      };
      this._TextPanel.smooth = {
        alpha: Number(this.showText)
      };
    }
  }, {
    key: "_updateGlobalThemeProps",
    value: function _updateGlobalThemeProps() {
      var _context$theme = context/* default */.Z.theme,
        layout = _context$theme.layout,
        color = _context$theme.color;
      var screenW = layout.screenW,
        screenH = layout.screenH,
        columnCount = layout.columnCount,
        marginX = layout.marginX,
        marginY = layout.marginY,
        gutterX = layout.gutterX,
        gutterY = layout.gutterY,
        safe = layout.safe;
      this._screenW = screenW;
      this._screenH = screenH;
      this._columnCount = columnCount;
      this._marginX = marginX;
      this._marginY = marginY;
      this._safe = safe;
      this._gutterX = gutterX;
      this._gutterY = gutterY;
      this._columnColor = color.interactiveNeutralFocusSoft;
      this._marginColor = color.green;
      this._safeColor = color.red;
      this._gutterColor = color.blue;
    }
  }, {
    key: "_updateMargins",
    value: function _updateMargins() {
      var marginPatch = {
        lineColor: this._marginColor
      };

      // Horizontal
      var marginHorizontalPatch = GridOverlay_objectSpread(GridOverlay_objectSpread({}, marginPatch), {}, {
        w: this._marginX
      });
      this._MarginHorizontal.y = this._screenH / 2;
      this._MarginLeft.patch(marginHorizontalPatch);
      this._MarginRight.patch(marginHorizontalPatch);
      this._MarginRight.x = this._screenW - this._marginX;

      // Vertical
      var marginVerticalPatch = GridOverlay_objectSpread(GridOverlay_objectSpread({}, marginPatch), {}, {
        w: this._marginY
      });
      this._MarginVertical.x = this._marginX - marginVerticalPatch.w / 2;
      this._MarginTop.patch(marginVerticalPatch);
      this._MarginTop.patch(marginVerticalPatch);
      this._MarginTop.y = marginVerticalPatch.w / 2;
    }
  }, {
    key: "_updateSafe",
    value: function _updateSafe() {
      var safePatch = {
        lineColor: this._safeColor,
        w: this._safe
      };

      // Horizontal
      this._SafeHorizontal.y = this._screenH / 4;
      this._SafeLeft.patch(safePatch);
      this._SafeRight.patch(safePatch);
      this._SafeRight.x = this._screenW - this._safe;

      // Vertical
      this._SafeVertical.x = (this._screenW - safePatch.w) / 2;
      this._SafeVertical.y = safePatch.w / 2;
      this._SafeTop.patch(safePatch);
      this._SafeBottom.patch(safePatch);
      this._SafeBottom.y = this._screenH - this._safe;
    }
  }, {
    key: "_updateColumns",
    value: function _updateColumns() {
      this._Columns.patch({
        w: this._screenW,
        h: this._screenH,
        x: this._marginX,
        style: {
          itemSpacing: this._gutterX
        },
        items: this._columnRects
      });
    }
  }, {
    key: "_columnRects",
    get: function get() {
      var _this = this;
      return Array.apply(null, {
        length: this._columnCount
      }).map(function () {
        return {
          rect: true,
          w: (0,utils/* getWidthByColumnSpan */.wO)(_this.theme, 1),
          h: _this._screenH,
          color: _this._columnColor
        };
      });
    }
  }, {
    key: "_updateGutters",
    value: function _updateGutters() {
      var gutterPatch = {
        lineColor: this._gutterColor,
        w: this._gutterY
      };

      // Horizontal
      this._GutterHorizontal.patch(GridOverlay_objectSpread(GridOverlay_objectSpread({}, gutterPatch), {}, {
        x: (this._screenW - gutterPatch.w) / 2,
        y: this._screenH / 4
      }));
    }
  }, {
    key: "_updatePropertyTextStyle",
    value: function _updatePropertyTextStyle(textPanelName, color) {
      // clone the object so as not to mutate it
      var style = {
        textStyle: GridOverlay_objectSpread({}, this.style.propertyTextStyle)
      };
      if (color) {
        style.textStyle.textColor = color;
      }
      textPanelName.Items.tag('Property').style = style;
    }
  }, {
    key: "_updateValueTextStyle",
    value: function _updateValueTextStyle(textPanelName) {
      textPanelName.Items.tag('Value').style = {
        textStyle: this.style.valueTextStyle
      };
    }
  }, {
    key: "_updateText",
    value: function _updateText() {
      var prop = 'Property';
      var val = 'Value';
      this._TextPanel.x = this._screenW - this._marginX - (0,utils/* getWidthByColumnSpan */.wO)(this.theme, 3);
      this._TextPanel.y = this._safe;
      this._TextScreenW.Items.tag(prop).content = 'Screen Width';
      this._TextScreenW.Items.tag(val).content = "".concat(this._screenW, "px");
      this._updatePropertyTextStyle(this._TextScreenW);
      this._updateValueTextStyle(this._TextScreenW);
      this._TextScreenH.Items.tag(prop).content = 'Screen Height';
      this._TextScreenH.Items.tag(val).content = "".concat(this._screenH, "px");
      this._updatePropertyTextStyle(this._TextScreenH);
      this._updateValueTextStyle(this._TextScreenH);
      this._TextColumnCount.Items.tag(prop).content = 'Columns';
      this._TextColumnCount.Items.tag(val).content = "".concat(this._columnCount, ", ").concat(Math.round((0,utils/* getWidthByColumnSpan */.wO)(this.theme, 1)), "px each");
      this._updatePropertyTextStyle(this._TextColumnCount);
      this._updateValueTextStyle(this._TextColumnCount);
      this._TextMarginX.Items.tag(prop).content = 'Margin-X';
      this._TextMarginX.Items.tag(val).content = "".concat(this._marginX, "px");
      this._updatePropertyTextStyle(this._TextMarginX, this._marginColor);
      this._updateValueTextStyle(this._TextMarginX);
      this._TextMarginY.Items.tag(prop).content = 'Margin-Y';
      this._TextMarginY.Items.tag(val).content = "".concat(this._marginY, "px");
      this._updatePropertyTextStyle(this._TextMarginY, this._marginColor);
      this._updateValueTextStyle(this._TextMarginY);
      this._TextGutterX.Items.tag(prop).content = 'Gutter-X';
      this._TextGutterX.Items.tag(val).content = "".concat(this._gutterX, "px");
      this._updatePropertyTextStyle(this._TextGutterX, this._gutterColor);
      this._updateValueTextStyle(this._TextGutterX);
      this._TextGutterY.Items.tag(prop).content = 'Gutter-Y';
      this._TextGutterY.Items.tag(val).content = "".concat(this._gutterY, "px");
      this._updatePropertyTextStyle(this._TextGutterY, this._gutterColor);
      this._updateValueTextStyle(this._TextGutterY);
      this._TextSafe.Items.tag(prop).content = 'Safe';
      this._TextSafe.Items.tag(val).content = "".concat(this._safe, "px");
      this._updatePropertyTextStyle(this._TextSafe, this._safeColor);
      this._updateValueTextStyle(this._TextSafe);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'GridOverlay';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return GridOverlay_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      var textRow = {
        type: Row/* default */.Z,
        autoResizeHeight: true,
        Items: {
          Property: {
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_update'
            }
          },
          Value: {
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_update'
            },
            centerInParent: true
          }
        }
      };
      return {
        Columns: {
          alpha: 0.001,
          type: Row/* default */.Z
        },
        Margins: {
          alpha: 0.001,
          Horizontal: {
            Left: {
              type: Spacer,
              signals: {
                spacerLoaded: '_update'
              }
            },
            Right: {
              type: Spacer,
              signals: {
                spacerLoaded: '_update'
              }
            }
          },
          Vertical: {
            Top: {
              type: Spacer,
              vertical: true
            }
          }
        },
        Safe: {
          alpha: 0.001,
          Horizontal: {
            Left: {
              type: Spacer,
              signals: {
                spacerLoaded: '_update'
              }
            },
            Right: {
              type: Spacer,
              signals: {
                spacerLoaded: '_update'
              }
            }
          },
          Vertical: {
            Top: {
              type: Spacer,
              vertical: true
            },
            Bottom: {
              type: Spacer,
              vertical: true
            }
          }
        },
        Gutters: {
          alpha: 0.001,
          Horizontal: {
            type: Spacer,
            signals: {
              spacerLoaded: '_update'
            }
          }
        },
        TextPanel: {
          alpha: 0.001,
          type: Column/* default */.Z,
          autoResizeHeight: true,
          Items: {
            ScreenW: textRow,
            ScreenH: textRow,
            ColumnCount: textRow,
            MarginX: textRow,
            MarginY: textRow,
            GutterX: textRow,
            GutterY: textRow,
            Safe: textRow
          }
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['showColumns', 'showMargins', 'showSafe', 'showGutters', 'showText'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Columns', 'Margins', {
        name: 'MarginHorizontal',
        path: 'Margins.Horizontal'
      }, {
        name: 'MarginLeft',
        path: 'Margins.Horizontal.Left'
      }, {
        name: 'MarginRight',
        path: 'Margins.Horizontal.Right'
      }, {
        name: 'MarginVertical',
        path: 'Margins.Vertical'
      }, {
        name: 'MarginTop',
        path: 'Margins.Vertical.Top'
      }, 'Safe', {
        name: 'SafeHorizontal',
        path: 'Safe.Horizontal'
      }, {
        name: 'SafeLeft',
        path: 'Safe.Horizontal.Left'
      }, {
        name: 'SafeRight',
        path: 'Safe.Horizontal.Right'
      }, {
        name: 'SafeVertical',
        path: 'Safe.Vertical'
      }, {
        name: 'SafeTop',
        path: 'Safe.Vertical.Top'
      }, {
        name: 'SafeBottom',
        path: 'Safe.Vertical.Bottom'
      }, 'Gutters', {
        name: 'GutterHorizontal',
        path: 'Gutters.Horizontal'
      }, 'TextPanel', {
        name: 'TextScreenW',
        path: 'TextPanel.Items.ScreenW'
      }, {
        name: 'TextScreenH',
        path: 'TextPanel.Items.ScreenH'
      }, {
        name: 'TextColumnCount',
        path: 'TextPanel.Items.ColumnCount'
      }, {
        name: 'TextMarginX',
        path: 'TextPanel.Items.MarginX'
      }, {
        name: 'TextMarginY',
        path: 'TextPanel.Items.MarginY'
      }, {
        name: 'TextGutterX',
        path: 'TextPanel.Items.GutterX'
      }, {
        name: 'TextGutterY',
        path: 'TextPanel.Items.GutterY'
      }, {
        name: 'TextSafe',
        path: 'TextPanel.Items.Safe'
      }];
    }
  }]);
  return GridOverlay;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Icon/Icon.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Icon)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Icon/Icon.styles.js
var Icon_styles_namespaceObject = {};
__webpack_require__.r(Icon_styles_namespaceObject);
__webpack_require__.d(Icon_styles_namespaceObject, {
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.styles.js
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

var tone = function tone(theme) {
  return {
    neutral: {
      color: theme.color.fillNeutral
    },
    inverse: {
      color: theme.color.fillInverse
    },
    brand: {
      color: theme.color.fillBrand
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/textures/CustomImageTexture.js
var CustomImageTexture = __webpack_require__("../../@lightningjs/ui-components/src/textures/CustomImageTexture.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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








/**
 * Icon component that displays different types of icons, supporting SVGs and images.
 * @extends Base
 */
var Icon = /*#__PURE__*/function (_Base) {
  _inherits(Icon, _Base);
  var _super = _createSuper(Icon);
  function Icon() {
    _classCallCheck(this, Icon);
    return _super.apply(this, arguments);
  }
  _createClass(Icon, [{
    key: "_init",
    value: function _init() {
      var _this = this;
      /**
       * Event listener for the 'txLoaded' event to handle icon texture loading.
       *
       * @listens 'txLoaded'
       */
      this.on('txLoaded', function () {
        if (!_this.fixed) {
          _this._notify.bind(_this)(); // Notify parent component of the item change if not fixed.
        }
      });

      /**
       * Event listener for the 'txError' event to handle icon texture loading errors.
       *
       * @listens 'txError'
       * @param {Error} error - The error object containing information about the loading error.
       */
      this.on('txError', this._handleTxtError.bind(this));
    }

    /**
     * Returns the color to be used for the icon.
     *
     * @private
     * @returns {string} The color value.
     */
  }, {
    key: "_getColor",
    value: function _getColor() {
      return this._color || this.style.color;
    }

    /**
     * Notifies the parent and ancestors of item changes in the Icon component.
     *
     * @private
     */
  }, {
    key: "_notify",
    value: function _notify() {
      this.w = this.finalW;
      this.h = this.finalH;
      this.signal('itemChanged', this); // Emit 'itemChanged' signal to notify parent.
      this.fireAncestors('$itemChanged'); // Emit '$itemChanged' signal to notify ancestors.
    }

    /**
     * Handles the error when loading the icon texture.
     *
     * @private
     * @param {Error} error - The error object containing information about the loading error.
     */
  }, {
    key: "_handleTxtError",
    value: function _handleTxtError() {
      context/* default */.Z.error("Unable to load icon ".concat(this._icon));
      this._icon = null;
      this.texture = null;
    }

    /**
     * Updates the Icon component based on the provided icon.
     *
     * @private
     */
  }, {
    key: "_update",
    value: function _update() {
      if (!this._icon) {
        this.texture = null; // If there's no icon, clear the texture.
        return;
      }
      this.patch(this._iconPatch); // Apply the icon patch.
    }

    /**
     * Generates the patch based on the icon type (SVG, image, etc.) and other properties.
     *
     * @private
     * @returns {object} The patch object to update the Icon component.
     */
  }, {
    key: "_iconPatch",
    get: function get() {
      var _map = [/^<svg.*<\/svg>$/, /\.svg$/].map(function (regex) {
          return RegExp.prototype.test.bind(regex);
        }),
        _map2 = _slicedToArray(_map, 2),
        isSvgTag = _map2[0],
        isSvgURI = _map2[1];
      var texture;
      var svgTag = isSvgTag(this.icon);
      var svgURI = isSvgURI(this.icon);
      if (svgTag) {
        texture = lightning_esm/* default */.Z.Tools.getSvgTexture("data:image/svg+xml,".concat(encodeURIComponent(this.icon)), this.w, this.h);
      } else if (svgURI) {
        texture = lightning_esm/* default */.Z.Tools.getSvgTexture(this.icon, this.w, this.h);
      } else {
        texture = {
          type: CustomImageTexture/* default */.Z,
          w: this.w,
          h: this.h,
          src: this.icon
        };
      }
      var color = (0,utils/* getValidColor */.C2)(this._color || this.style.color);
      var shader = this.radius || this.style.radius ? {
        radius: this.radius || this.style.radius,
        type: lightning_esm/* default */.Z.shaders.RoundedRectangle
      } : undefined;
      return _objectSpread({
        texture: texture,
        shader: shader
      }, color ? {
        colorUl: color,
        colorUr: color,
        colorBl: color,
        colorBr: color
      } : {});
    }
  }], [{
    key: "__componentName",
    get:
    /**
     * Returns the name of the component for theming support.
     * @returns {string} The name of the component.
     */
    function get() {
      return 'Icon';
    }

    /**
     * Returns the theme styles for the Icon component.
     * @returns {object} The theme styles object.
     */
  }, {
    key: "__themeStyle",
    get: function get() {
      return Icon_styles_namespaceObject;
    }

    /**
     * Returns the list of properties that can be set on the Icon component. Used by withUpdates
     * @returns {Array} An array of property names.
     */
  }, {
    key: "properties",
    get: function get() {
      return ['icon', 'fixed', 'color'];
    }
  }]);
  return Icon;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ InlineContent)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.styles.js
var InlineContent_styles_namespaceObject = {};
__webpack_require__.r(InlineContent_styles_namespaceObject);
__webpack_require__.d(InlineContent_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Badge/Badge.js + 1 modules
var Badge = __webpack_require__("../../@lightningjs/ui-components/src/components/Badge/Badge.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

var base = function base(theme) {
  return {
    textY: 0,
    iconWidth: theme.spacer.xxl + theme.spacer.xs,
    iconHeight: theme.spacer.xxl + theme.spacer.xs,
    contentSpacing: theme.spacer.md,
    marginBottom: theme.typography.body1.lineHeight / -10,
    textStyle: _objectSpread(_objectSpread({}, theme.typography.body1), {}, {
      verticalAlign: 'bottom'
    }),
    maxLines: 1,
    justify: 'flex-start'
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function InlineContent_typeof(o) { "@babel/helpers - typeof"; return InlineContent_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, InlineContent_typeof(o); }
function InlineContent_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function InlineContent_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? InlineContent_ownKeys(Object(t), !0).forEach(function (r) { InlineContent_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : InlineContent_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, InlineContent_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { InlineContent_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function InlineContent_defineProperty(obj, key, value) { key = InlineContent_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function InlineContent_toPropertyKey(t) { var i = InlineContent_toPrimitive(t, "string"); return "symbol" == InlineContent_typeof(i) ? i : String(i); }
function InlineContent_toPrimitive(t, r) { if ("object" != InlineContent_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != InlineContent_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (InlineContent_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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






var isText = function isText(item) {
  return typeof item === 'string' || !!item.text;
};
var isIcon = function isIcon(item) {
  return !!item.icon;
};
var isBadge = function isBadge(item) {
  return !!item.badge;
};
var InlineContent = /*#__PURE__*/function (_Base) {
  _inherits(InlineContent, _Base);
  var _super = _createSuper(InlineContent);
  function InlineContent() {
    _classCallCheck(this, InlineContent);
    return _super.apply(this, arguments);
  }
  _createClass(InlineContent, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(InlineContent.prototype), "_construct", this).call(this);
      // use the same default value as Lightning's Text Texture default
      this._maxLinesSuffix = '..';
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateContent();
      this._waitForComponentLoad();
    }
  }, {
    key: "_updateContent",
    value: function _updateContent() {
      var _this = this;
      this.childList.clear();

      // if wrapping with max lines, hide content until it has rerendered with maxLines and truncation calculated
      if (this._shouldTruncate) {
        this.alpha = 0.001;
      }
      if (this._parsedContent && this._parsedContent.length) {
        this.patch({
          flex: {
            direction: 'row',
            wrap: !!this.contentWrap,
            justifyContent: this.justify != undefined ? this.justify : this.style.justify
          }
        });
        this._parsedContent.forEach(function (item, index) {
          var isLast = index === _this._parsedContent.length - 1;
          var base = {
            flexItem: InlineContent_objectSpread(InlineContent_objectSpread({}, _this.contentProperties), {}, {
              // apply contentProperties object props first if those are defined
              // otherwise will use the style props
              marginBottom: isLast ? 0 : _this._marginBottom,
              marginRight: isLast ? 0 : _this.contentProperties.marginRight || _this.style.contentSpacing
            })
          };

          // text not separated by icons/badges are grouped together
          if (isText(item)) {
            var nextItem = _this._parsedContent[index + 1];
            if (nextItem && isText(nextItem)) {
              base.flexItem.marginRight = 0;
            }
            _this.childList.a(_this._createText(base, item));
          } else if (isIcon(item)) {
            _this.childList.a(_this._createIcon(base, item));
          } else if (isBadge(item)) {
            _this.childList.a(_this._createBadge(base, item.badge));
          } else if (item.newline && _this.contentWrap) {
            _this.childList.a({
              h: 0,
              w: _this.w
            });
          }
        });
      }
    }
  }, {
    key: "_waitForComponentLoad",
    value: function _waitForComponentLoad() {
      var _this2 = this;
      if (this.children.length) {
        Promise.all(this.children.map(function (child) {
          return new Promise(function (resolve) {
            // resolve immediately for new line elements since they do not render a texture
            if (child.h === 0 && child.w === _this2.w) {
              resolve();
            } else {
              child.on('txLoaded', resolve);
            }
          });
        }))["finally"](function () {
          return _this2._contentLoaded();
        });
      } else {
        this.h = 0;
        this._contentLoaded();
      }
    }
  }, {
    key: "_notifyAncestors",
    value: function _notifyAncestors() {
      this.fireAncestors('$loadedInlineContent', this);
      this.signal('loadedInlineContent', this.finalW, this.multiLineHeight);
    }
  }, {
    key: "_contentLoaded",
    value: function _contentLoaded() {
      var _this3 = this;
      // TODO: FIX --figure out an alternative to using setTimeout
      // perhaps have to wait until Lightning Flexboxes can emit a signal (like textures) when they've finished loading
      if (this.children.length) {
        setTimeout(function () {
          _this3.multiLineHeight = _this3.finalH;
          if (_this3.flex && _this3.flex._layout && _this3.flex._layout._lineLayouter && _this3.flex._layout._lineLayouter._lines) {
            _this3.multiLineHeight = _this3.style.textStyle.lineHeight * _this3.flex._layout._lineLayouter._lines.length;
            _this3.h = _this3.multiLineHeight;
            if (_this3._shouldTruncate) {
              _this3._renderMaxLines();
            }
            _this3._notifyAncestors();
          } else {
            _this3._contentLoaded();
          }
        }, 10);
      } else {
        this._notifyAncestors();
      }
    }
  }, {
    key: "_renderMaxLines",
    value: function _renderMaxLines() {
      var _this4 = this;
      var childrenDimensions = this._calcChildrenDimensions();
      this.childList.clear();
      var renderedLastElement = false;
      childrenDimensions.forEach(function (child, index) {
        if (renderedLastElement) {
          return;
        }
        var nextChild = childrenDimensions[index + 1];
        if (!nextChild) {
          _this4.childList.add(child.component);
          return;
        }
        var isOnLastLine = child.line === _this4.maxLines;
        var isLastBeforeMaxLines = isOnLastLine && nextChild.line > _this4.maxLines;
        var canRenderLastWithSuffix = isLastBeforeMaxLines && child.hasSpaceForSuffix;
        var isLastWithSpaceForSuffix = isOnLastLine && child.hasSpaceForSuffix && !nextChild.hasSpaceForSuffix;

        /**
         * This is the last element to render, with a suffix, if the element is:
         * - the last element to render (and has not reached the maxLines yet)
         * - the last element that fits within maxLines, including with the width of the maxLinesSuffix appended to it
         */
        var isLast = !nextChild || canRenderLastWithSuffix || isLastWithSpaceForSuffix;
        if (child.line <= _this4.maxLines) {
          if (isLast && index !== childrenDimensions.length - 1) {
            _this4.childList.add(_this4._addSuffix(child));
            renderedLastElement = true;
          } else {
            _this4.childList.add(child.component);
          }
        }
      });
      this.alpha = 1;
    }
  }, {
    key: "_calcChildrenDimensions",
    value: function _calcChildrenDimensions() {
      var _this5 = this;
      var suffixW = (0,utils/* measureTextWidth */.Ux)(InlineContent_objectSpread(InlineContent_objectSpread({}, this.style.textStyle), {}, {
        text: this.maxLinesSuffix
      }));
      var contentEndX = 0;
      var line = 1;
      return this.children.reduce(function (acc, child) {
        var component = child;
        var type, content, w;
        var isNewLineElement = child.w == _this5.w && child.h === 0;
        if (isNewLineElement) {
          line++;
          contentEndX = 0;
          var _data = {
            type: 'linebreak',
            component: component,
            content: content,
            line: line,
            hasSpaceForSuffix: true
          };
          acc.push(_data);
          return acc;
        }
        if (isText(child)) {
          type = 'text';
          content = child.text.text;
          w = child.texture.getRenderWidth();
        } else if (isIcon(child)) {
          type = 'icon';
          w = child.w;
        } else if (child.constructor.__componentName === 'Badge') {
          type = 'badge';
          w = child.w;
        }
        contentEndX += w;
        contentEndX += child.flexItem.marginRight;
        if (Math.ceil(contentEndX) >= _this5.w) {
          line++;
          contentEndX = w;
        }
        var hasSpaceForSuffix = Math.ceil(contentEndX) + suffixW <= _this5.w;
        var data = {
          type: type,
          component: component,
          content: content,
          line: line,
          hasSpaceForSuffix: hasSpaceForSuffix
        };
        acc.push(data);
        return acc;
      }, []);
    }
  }, {
    key: "_addSuffix",
    value: function _addSuffix(_ref) {
      var type = _ref.type,
        component = _ref.component,
        content = _ref.content;
      var negatedRightMargin = component.flexItem.marginRight * -1;
      var suffix;
      if (type === 'text') {
        suffix = this._createText({
          flexItem: this.contentProperties
        }, "".concat(content.trim()).concat(this.maxLinesSuffix));
      } else {
        this.childList.add(component);
        suffix = this._createText({
          flexItem: InlineContent_objectSpread(InlineContent_objectSpread({}, this.contentProperties), {}, {
            marginLeft: negatedRightMargin
          })
        }, this.maxLinesSuffix);
      }
      return suffix;
    }
  }, {
    key: "_createIcon",
    value: function _createIcon(base, iconProps) {
      var y = (this.textHeight > this.style.textStyle.lineHeight ? this.textHeight : this.style.textStyle.lineHeight) - this.style.iconHeight;
      return InlineContent_objectSpread(InlineContent_objectSpread({}, base), {}, {
        type: Icon/* default */.Z,
        y: y,
        w: this.style.iconWidth,
        h: this.style.iconHeight,
        signals: {
          itemChanged: '_updateIconPosition'
        }
      }, iconProps);
    }
  }, {
    key: "_createText",
    value: function _createText(base, text) {
      var textOverrideStyles = typeof text.style === 'string' ? this.customStyleMappings[text.style] : text.style;
      return InlineContent_objectSpread(InlineContent_objectSpread({}, base), {}, {
        y: this.textY !== undefined ? this.textY : this.style.textY,
        h: this.textHeight,
        text: InlineContent_objectSpread(InlineContent_objectSpread(InlineContent_objectSpread({}, this.style.textStyle), textOverrideStyles), {}, {
          text: text.text || text
        })
      });
    }
  }, {
    key: "_createBadge",
    value: function _createBadge(base, badge) {
      return InlineContent_objectSpread(InlineContent_objectSpread(InlineContent_objectSpread({}, base), {}, {
        y: this.badgeY || 0
      }, this.badgeProperties), {}, {
        type: Badge/* default */.Z,
        title: badge,
        signals: {
          loadedBadge: '_loadedBadge'
        }
      });
    }
  }, {
    key: "_updateIconPosition",
    value: function _updateIconPosition(icon) {
      icon.y = this.style.textStyle.lineHeight - icon.h;
    }
  }, {
    key: "_loadedBadge",
    value: function _loadedBadge(badge) {
      if (this.badgeY === undefined) {
        badge.y = this.style.textStyle.lineHeight - badge.h;
      }
    }

    /**
     * RegEx Lookbehinds do not work in WPE Browser, but we want the space
     * at the end of the previous string to prevent weird wrapping,
     * so we need to separate on spaces, then re-attach to the previous string
     *
     * @param { array } parsedContent
     *
     * @return { array }
     */
  }, {
    key: "_formatSpaces",
    value: function _formatSpaces(parsedContent) {
      // retain the white space next to the appropriate word, then filter by the empty string,
      // otherwise all whitespace is stripped and the flexItem's marginRight adds its own space
      // which can be a different space size than the text would apply between words
      var whitespace = /(.+?\s+)/;
      return (0,utils/* flatten */.xH)((parsedContent || []).reduce(function (acc, item) {
        var parsed = item;
        if (isText(item)) {
          if (InlineContent_typeof(item) === 'object') {
            var formattedWords = item.text.split(whitespace) // split after whitespace character (which adds empty strings)
            .map(function (word) {
              return word && InlineContent_objectSpread(InlineContent_objectSpread({}, item), {}, {
                text: word
              });
            }); // check for empty string before adding
            acc.push.apply(acc, _toConsumableArray(formattedWords));
            return acc;
          }
          parsed = item.split(whitespace);
        }
        acc.push(parsed);
        return acc;
      }, [])).map(function (item, index, arr) {
        if (item === ' ') return false;
        if (arr[index + 1] === ' ') return item + ' ';
        return item;
      }).filter(Boolean);
    }
  }, {
    key: "_setContent",
    value: function _setContent(content) {
      if (content !== this._content) {
        this._content = content;
        var parsedContent = this._content;
        if (content && !Array.isArray(content)) {
          parsedContent = (0,utils/* parseInlineContent */.Jk)(content);
        }
        this._parsedContent = this._formatSpaces(parsedContent);
      }
      return content;
    }
  }, {
    key: "_setBadgeProperties",
    value: function _setBadgeProperties(badgeProperties) {
      if (InlineContent_typeof(badgeProperties) === 'object') {
        return badgeProperties;
      }
    }
  }, {
    key: "_getBadgeProperties",
    value: function _getBadgeProperties() {
      return this._badgeProperties || {};
    }
  }, {
    key: "_setContentProperties",
    value: function _setContentProperties(contentProperties) {
      if (InlineContent_typeof(contentProperties) === 'object') {
        return contentProperties;
      }
    }
  }, {
    key: "_getContentProperties",
    value: function _getContentProperties() {
      return this._contentProperties || {};
    }
  }, {
    key: "_setCustomStyleMappings",
    value: function _setCustomStyleMappings(customStyleMappings) {
      if (InlineContent_typeof(customStyleMappings) === 'object') {
        return customStyleMappings;
      }
    }
  }, {
    key: "_getCustomStyleMappings",
    value: function _getCustomStyleMappings() {
      return this._customStyleMappings || {};
    }
  }, {
    key: "_setMaxLines",
    value: function _setMaxLines(maxLines) {
      // only accept positive numbers
      // round down any decimals to whole numbers
      return maxLines >= 1 ? Math.floor(maxLines) : 0;
    }
  }, {
    key: "textHeight",
    get: function get() {
      return this.style.textStyle.lineHeight || this.style.textStyle.fontSize;
    }
  }, {
    key: "_marginBottom",
    get: function get() {
      if (this.contentProperties.marginBottom !== undefined) {
        return this.contentProperties.marginBottom;
      }
      if (this.style.marginBottom) {
        return this.style.marginBottom;
      }
      return 0;
    }
  }, {
    key: "_shouldTruncate",
    get: function get() {
      return this.contentWrap && this.maxLines;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      var announce = this._parsedContent && this._parsedContent.reduce(function (announce, item) {
        if (typeof item === 'string') {
          announce += item;
        } else if (item.announce) {
          announce += item.announce;
        } else if (item.text) {
          announce += item.text;
        } else if (item.title) {
          announce += item.title;
        } else if (item.badge) {
          announce += item.badge;
        }
        return announce + ' ';
      }, '');
      return announce ? announce.replace(/\s+(?=\s)|\s$/g, '') : '';
    },
    set: function set(announce) {
      _set(_getPrototypeOf(InlineContent.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "properties",
    get: function get() {
      return ['content', 'contentProperties', 'badgeY', 'badgeProperties', 'justify', 'contentWrap', 'customStyleMappings', 'maxLines', 'maxLinesSuffix'];
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'InlineContent';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return InlineContent_styles_namespaceObject;
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'iconH',
        curr: 'iconHeight'
      }, {
        prev: 'iconW',
        curr: 'iconWidth'
      }];
    }
  }]);
  return InlineContent;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Marquee/Marquee.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Marquee)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Marquee/Marquee.styles.js
var Marquee_styles_namespaceObject = {};
__webpack_require__.r(Marquee_styles_namespaceObject);
__webpack_require__.d(Marquee_styles_namespaceObject, {
  base: () => (base)
});

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Marquee/Marquee.styles.js
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

var base = function base(theme) {
  return {
    fadeWidth: 100,
    offset: theme.spacer.xxl,
    shouldSmooth: false,
    textStyle: theme.typography.body1
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/shaders/FadeShader.js
var FadeShader = __webpack_require__("../../@lightningjs/ui-components/src/shaders/FadeShader.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Marquee/Marquee.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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





var Marquee = /*#__PURE__*/function (_Base) {
  _inherits(Marquee, _Base);
  var _super = _createSuper(Marquee);
  function Marquee() {
    _classCallCheck(this, Marquee);
    return _super.apply(this, arguments);
  }
  _createClass(Marquee, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(Marquee.prototype), "_construct", this).call(this);
      this._scrolling = false;
      this._autoStart = false;
      this._centerAlign = false;
    }
  }, {
    key: "_init",
    value: function _init() {
      this._Content.on('txLoaded', this._updateContentTexture.bind(this));
      _get(_getPrototypeOf(Marquee.prototype), "_init", this).call(this);
    }
  }, {
    key: "_updateContentTexture",
    value: function _updateContentTexture() {
      var restartScrolling = this._restartScrolling;
      this.stopScrolling();
      if (!this._currentTexture.h) {
        this._ContentClipper.h = this._currentTexture.text && this._currentTexture.text.lineHeight ? this._currentTexture.text.lineHeight : this._Content.finalH;
      }
      // in case the metadata width gets larger on focus and the text goes from being clipped to not
      if (this._shouldClip) {
        this._updateShader();
      } else {
        this._ContentClipper.shader = null;
        this._positionTexture();
      }
      restartScrolling && this.startScrolling();
      this.signal('marqueeContentLoaded');
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateColor();
      this._updateTexture();
      this._updateShader();
      this._restartScrolling && this.startScrolling();
    }
  }, {
    key: "_restartScrolling",
    get: function get() {
      return this.autoStart || this._scrolling || this._shouldTryScrolling;
    }
  }, {
    key: "_updateColor",
    value: function _updateColor() {
      if (this.color) {
        this._Content.smooth = {
          color: utils/* default.getValidColor */.ZP.getValidColor(this.color)
        };
      }
    }
  }, {
    key: "_currentTexture",
    get: function get() {
      return this._Content.text || this._Content.texture || {};
    }
  }, {
    key: "_updateTexture",
    value: function _updateTexture() {
      var content = {
        rtt: true
      };
      if (this.contentTexture) {
        content.texture = this.contentTexture;
      } else if (this.title) {
        content.text = _objectSpread(_objectSpread(_objectSpread({}, this.style.textStyle), this.title), {}, {
          text: this.textContent
        });
      }
      this.patch({
        ContentClipper: {
          w: this.w + 14,
          ContentBox: {
            Content: content,
            ContentLoopTexture: {}
          }
        }
      });
      this.signal('marqueeContentLoaded'); // TODO: Check if this extra signal is needed since the txLoaded event should emit it already?
    }
  }, {
    key: "_updateShader",
    value: function _updateShader() {
      this._ContentClipper.patch({
        w: this.w > 0 ? this.w + this.style.fadeWidth / 2 : 0,
        shader: {
          type: FadeShader/* default */.Z,
          positionLeft: 0,
          positionRight: this.style.fadeWidth
        },
        rtt: true
      });
    }
  }, {
    key: "_updateAnimation",
    value: function _updateAnimation() {
      this._scrollAnimation && this._scrollAnimation.stopNow();
      this._scrollAnimation = this.animation({
        duration: this._loopWidth / 50,
        delay: isNaN(this.delay) ? 1.5 : this.delay,
        repeat: isNaN(this.repeat) ? -1 : this.repeat,
        actions: [{
          t: 'ContentBox',
          p: 'x',
          v: {
            sm: 0,
            0: {
              v: 0
            },
            0.5: {
              v: -(this._loopWidth + this.style.offset)
            }
          }
        }, {
          t: 'ContentClipper',
          p: 'shader.positionLeft',
          v: {
            sm: 0,
            0: {
              v: 0
            },
            0.1: {
              v: this.style.fadeWidth
            },
            0.4: {
              v: this.style.fadeWidth
            },
            0.5: {
              v: 0
            }
          }
        }]
      });
    }
  }, {
    key: "_positionTexture",
    value: function _positionTexture() {
      var x = this._shouldCenter() ? (this.w - this._textRenderedW) / 2 : 0;
      if (this.style.shouldSmooth) {
        this._ContentBox.smooth = {
          x: x
        };
      } else {
        this._ContentBox.x = x;
      }
    }
  }, {
    key: "startScrolling",
    value: function startScrolling() {
      this._Content.off('txLoaded', this.startScrolling.bind(this));
      this._shouldTryScrolling = true;
      if (this._textRenderedW === 0) {
        // can switch to .once in LUI5.0 requiring higher Lightning Core version
        this._Content.on('txLoaded', this.startScrolling.bind(this));
      }
      if (this._shouldClip) {
        this._scrolling = true;
        this._ContentLoopTexture.x = this._loopWidth + this.style.offset;
        this._ContentLoopTexture.texture = this._Content.getTexture();
        this._updateAnimation();
        this._scrollAnimation.start();
      } else {
        this._scrolling = false;
      }
    }
  }, {
    key: "stopScrolling",
    value: function stopScrolling() {
      this._shouldTryScrolling = false;
      this._scrolling = false;
      if (this._scrollAnimation) {
        this._scrollAnimation.stopNow();
        this._ContentLoopTexture.texture = null;
      }
    }
  }, {
    key: "_shouldClip",
    get: function get() {
      // using fadeWidth / 4 so that if something like the last character is slightly
      // faded out but still visible, we don't unnecessarily scroll
      return this._textRenderedW > this.w - this.style.fadeWidth / 4;
    }
  }, {
    key: "_shouldCenter",
    value: function _shouldCenter() {
      return this._centerAlign || this._Content.text && this._Content.text.textAlign === 'center';
    }
  }, {
    key: "_setAutoStart",
    value: function _setAutoStart(autoStart) {
      // if the component is changed from  autoStarting to not,
      // cancel the current scrolling behavior,
      // otherwise the component can continue to scroll from its previous state
      if (this.autoStart && !autoStart) {
        // Calling this ensures that the animation is stopped, and the texture
        // is properly positioned if it needs to be centered. Otherwise, if it
        // is un-clipped text, it is positioned at 0.
        this._updateContentTexture();
      }
      return autoStart;
    }
  }, {
    key: "_setCenterAlign",
    value: function _setCenterAlign(center) {
      // The Content texture needs to be updated if centerAlign
      // is changed, but we need the new value first.
      this._centerAlign = center;
      this._updateContentTexture();
      return center;
    }
  }, {
    key: "textContent",
    get: function get() {
      var _ref, _this$title$text, _this$title;
      return (_ref = (_this$title$text = (_this$title = this.title) === null || _this$title === void 0 ? void 0 : _this$title.text) !== null && _this$title$text !== void 0 ? _this$title$text : this.title) !== null && _ref !== void 0 ? _ref : '';
    }
  }, {
    key: "_loopWidth",
    get: function get() {
      return this.overrideLoopX || this._textRenderedW;
    }
  }, {
    key: "_textRenderedW",
    get: function get() {
      return this._Content.renderWidth;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this.title && this.title.text;
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Marquee.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        ContentClipper: {
          boundsMargin: [],
          // overwrite boundsMargin so text won't de-render if moved offscreen
          ContentBox: {
            Content: {},
            ContentLoopTexture: {}
          }
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Marquee';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Marquee_styles_namespaceObject;
    }
  }, {
    key: "tags",
    get: function get() {
      return ['ContentClipper', {
        name: 'ContentBox',
        path: 'ContentClipper.ContentBox'
      }, {
        name: 'Content',
        path: 'ContentClipper.ContentBox.Content'
      }, {
        name: 'ContentLoopTexture',
        path: 'ContentClipper.ContentBox.ContentLoopTexture'
      }];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['autoStart', 'title', 'contentTexture', 'color', 'centerAlign', 'delay', 'repeat', 'overrideLoopX'];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'fadeW',
        curr: 'fadeWidth'
      }];
    }
  }]);
  return Marquee;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ NavigationManager)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.styles.js
var NavigationManager_styles_namespaceObject = {};
__webpack_require__.r(NavigationManager_styles_namespaceObject);
__webpack_require__.d(NavigationManager_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.js
var FocusManager = __webpack_require__("../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.styles.js
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

var base = function base(theme) {
  return {
    alwaysScroll: false,
    itemSpacing: theme.layout.gutterX,
    itemTransition: theme.animation.utility,
    neverScroll: false,
    scrollIndex: 0
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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




var directionPropNames = {
  row: {
    axis: 'x',
    crossAxis: 'y',
    lengthDimension: 'w',
    crossDimension: 'h',
    innerLengthDimension: 'innerW',
    innerCrossDimension: 'innerH'
  },
  column: {
    axis: 'y',
    crossAxis: 'x',
    lengthDimension: 'h',
    crossDimension: 'w',
    innerLengthDimension: 'innerH',
    innerCrossDimension: 'innerW'
  }
};
var NavigationManager = /*#__PURE__*/function (_FocusManager) {
  _inherits(NavigationManager, _FocusManager);
  var _super = _createSuper(NavigationManager);
  function NavigationManager() {
    _classCallCheck(this, NavigationManager);
    return _super.apply(this, arguments);
  }
  _createClass(NavigationManager, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(NavigationManager.prototype), "_construct", this).call(this);
      this.shouldSmooth = false;
      this._lazyUpCountBuffer = 2;
    }
  }, {
    key: "_init",
    value: function _init() {
      var _this$_directionPropN = this._directionPropNames,
        lengthDimension = _this$_directionPropN.lengthDimension,
        axis = _this$_directionPropN.axis;
      if (!this[lengthDimension]) {
        this._initComponentSize();
      }
      this.Items.transition(axis).on('finish', this._transitionListener.bind(this));
      _get(_getPrototypeOf(NavigationManager.prototype), "_init", this).call(this);
    }
  }, {
    key: "_initComponentSize",
    value: function _initComponentSize() {
      var lengthDimension = this._directionPropNames.lengthDimension;
      if ((this === null || this === void 0 ? void 0 : this.parent.parent) instanceof NavigationManager && this !== null && this !== void 0 && this.parent.parent[lengthDimension]) {
        // component is a child item in a NavigationManager (or subclass of NavigationManager)
        this[lengthDimension] = this.parent.parent[lengthDimension];
      } else {
        // find closest parent in render tree with lengthDimension property set(w for Row, h for Column)
        var parent = this.parent;
        while (parent && !parent[lengthDimension]) {
          parent = parent.parent;
        }
        this[lengthDimension] = parent && parent[lengthDimension] || this.stage.h / this.stage.getRenderPrecision();
      }
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateLayout();
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      var _this$Items$patch;
      var _this$_directionPropN2 = this._directionPropNames,
        lengthDimension = _this$_directionPropN2.lengthDimension,
        crossDimension = _this$_directionPropN2.crossDimension,
        crossAxis = _this$_directionPropN2.crossAxis,
        innerCrossDimension = _this$_directionPropN2.innerCrossDimension;
      var nextPosition = 0;
      var maxCrossDimensionSize = 0;
      var maxInnerCrossDimensionSize = 0;
      var childrenToCenter = [];
      var loadingChildren = [];
      for (var i = 0; i < this.Items.children.length; i++) {
        var child = this.Items.children[i];
        if (child.requestEarlyUpdate) {
          var updateDidRun = child.requestEarlyUpdate();
          if (!updateDidRun && (child.w === 0 || child.h === 0)) {
            child._updateLayout && child._updateLayout();
          }
        }
        var childCrossDimensionSize = this._calcCrossDimensionSize(child);
        if (this.waitForDimensions && (!childCrossDimensionSize || !child[lengthDimension])) {
          loadingChildren.push(child);
        }
        maxCrossDimensionSize = (0,utils/* max */.Fp)(maxCrossDimensionSize, childCrossDimensionSize);
        maxInnerCrossDimensionSize = (0,utils/* max */.Fp)(maxInnerCrossDimensionSize, child[innerCrossDimension] || 0);
        this.updatePositionOnAxis(child, nextPosition);
        nextPosition += child[lengthDimension];
        if (i < this.Items.children.length - 1) {
          var extraItemSpacing = child.extraItemSpacing || 0;
          nextPosition += this.style.itemSpacing + extraItemSpacing;
        }
        if (child.centerInParent) {
          // if the child is another NavigationManager, check the cross dimension size of the item container
          var _childCrossDimensionSize = child.Items && child.Items[crossDimension] || child[crossDimension];
          // only center the child if it is within the bounds of this NavigationManager
          // center based off innerCrossDimension in cases where elements with
          // innerCrossDimension exist in Items (ex. Tile with metadata)
          if (_childCrossDimensionSize < this[crossDimension] || !this.Items[innerCrossDimension]) {
            childrenToCenter.push({
              childIdx: i,
              childCrossDimensionSize: _childCrossDimensionSize
            });
          }
        } else {
          child[crossAxis] = 0;
        }
      }
      var itemChanged = this.Items[crossDimension] !== maxCrossDimensionSize || this.Items[lengthDimension] !== nextPosition;
      if (this.waitForDimensions) {
        this.Items.alpha = loadingChildren.length ? 0.001 : 1;
      }
      this.Items.patch((_this$Items$patch = {}, _defineProperty(_this$Items$patch, crossDimension, maxCrossDimensionSize), _defineProperty(_this$Items$patch, innerCrossDimension, maxInnerCrossDimensionSize || maxCrossDimensionSize), _defineProperty(_this$Items$patch, lengthDimension, nextPosition + (this._totalAddedWidth || 0)), _this$Items$patch));
      this._autoResize();
      this._centerItemsInParent(childrenToCenter);
      this._updateLastScrollIndex();
      if (itemChanged) {
        this._performRender();
        this.fireAncestors('$itemChanged');
      }
    }
  }, {
    key: "_centerItemsInParent",
    value: function _centerItemsInParent(items) {
      var _this = this;
      var _this$_directionPropN3 = this._directionPropNames,
        crossDimension = _this$_directionPropN3.crossDimension,
        crossAxis = _this$_directionPropN3.crossAxis,
        innerCrossDimension = _this$_directionPropN3.innerCrossDimension;
      if (items.length) {
        var sizes = [this.Items[crossDimension], this.Items[innerCrossDimension]];
        // If a subclass of NavigationManager only contains a row or column of items:
        // then also consider the h or w of that component when centering items .
        // Subclasses that add other components outside of the Items array (ex. TitleRow)
        // likely increase the h or w of the component and centering should be with respect to only the Items element.
        if (this.children.length === 1) {
          sizes.push(this[crossDimension]);
        }
        var crossDimensionSize = Math.max.apply(Math, sizes);
        items.forEach(function (_ref) {
          var childIdx = _ref.childIdx,
            childCrossDimensionSize = _ref.childCrossDimensionSize;
          _this.Items.children[childIdx][crossAxis] = (crossDimensionSize - childCrossDimensionSize) / 2;
        });
      }
    }
  }, {
    key: "_autoResize",
    value: function _autoResize() {
      if (this.autoResizeWidth) {
        this.w = this.Items.w;
      }
      if (this.autoResizeHeight) {
        this.h = this.Items.h;
      }
    }
  }, {
    key: "_updateLastScrollIndex",
    value: function _updateLastScrollIndex() {
      var _this$_directionPropN4 = this._directionPropNames,
        axis = _this$_directionPropN4.axis,
        lengthDimension = _this$_directionPropN4.lengthDimension;
      if (this.alwaysScroll) {
        this._lastScrollIndex = this.Items.children.length - 1;
        return;
      }
      var itemPos = this._isRow ? this.itemPosX : this.itemPosY;
      var scrollOffset = (this.Items.children[this.scrollIndex] || _defineProperty({}, axis, 0))[axis] + itemPos;
      var lastChild = this.Items.childList.last;
      var endOfLastChild = lastChild ? this._calcAxisPosition(lastChild) + lastChild[lengthDimension] : 0;
      if (endOfLastChild > this[lengthDimension]) {
        var lastScrollIndex;
        for (var i = this.Items.children.length - 1; i >= 0; i--) {
          var childPosition = this._calcAxisPosition(this.Items.children[i]);
          var canScrollToChild = childPosition + this[lengthDimension] - scrollOffset > endOfLastChild;
          if (canScrollToChild) {
            lastScrollIndex = i;
          } else {
            break;
          }
        }
        this._lastScrollIndex = lastScrollIndex;
        return;
      }

      // TODO: This conditional originated in Column (prior to NavigationManager refactor).
      //  What scenario would this ever be true?
      //  Add a comment to describe it when that is identified.
      if (this._lastScrollIndex > this.items.length) {
        this._lastScrollIndex = this.items.length - 1;
      }
    }
  }, {
    key: "_calcCrossDimensionSize",
    value: function _calcCrossDimensionSize(comp) {
      if (this._isRow) {
        return (0,utils/* getH */.T5)(comp);
      }
      if (this._isColumn) {
        return (0,utils/* getW */.WV)(comp);
      }
    }
  }, {
    key: "_calcAxisPosition",
    value: function _calcAxisPosition(comp) {
      if (this._isRow) {
        return (0,utils/* getX */.nZ)(comp);
      }
      if (this._isColumn) {
        return (0,utils/* getY */.Ff)(comp);
      }
    }
  }, {
    key: "_transitionListener",
    value: function _transitionListener() {
      this.shouldSmooth = false;
      this.transitionDone();
    }
  }, {
    key: "_withAfterUpdate",
    value: function _withAfterUpdate(element) {
      return (0,utils/* watchForUpdates */.vm)({
        element: element,
        watchProps: [this._directionPropNames.crossAxis, 'w', 'h', 'innerW', 'innerH'],
        sideEffect: this.queueRequestUpdate.bind(this)
      });
    }

    // can be overwritten
  }, {
    key: "_performRender",
    value: function _performRender() {}
  }, {
    key: "_appendItem",
    value: function _appendItem(item, shouldSmoothOverride) {
      this.shouldSmooth = shouldSmoothOverride !== null && shouldSmoothOverride !== void 0 ? shouldSmoothOverride : false;
      item.parentFocus = this.hasFocus();
      item = this.Items.childList.a(item);
      var crossDimension = this._directionPropNames.crossDimension;
      // do not set a h/w if the item already has one defined
      // as this will trigger withThemeStyles's dimension "setByUser" flag
      if (!item[crossDimension]) {
        var itemCrossSize = this._isRow ? this.renderHeight : this.renderWidth;
        item[crossDimension] = item[crossDimension] || itemCrossSize;
      }
      item = this._withAfterUpdate(item);
      return item;
    }
  }, {
    key: "_appendLazyItem",
    value: function _appendLazyItem(item) {
      var _this$_directionPropN5 = this._directionPropNames,
        lengthDimension = _this$_directionPropN5.lengthDimension,
        axis = _this$_directionPropN5.axis;
      var lastChild = this._Items.children[this.items.length - 1];
      var nextPosition = lastChild[lengthDimension] + lastChild[axis] + (lastChild.extraItemSpacing || 0) + this.style.itemSpacing;
      var appended = this._appendItem(item, true);

      // Update w/o recalculating  whole layout
      appended[axis] = nextPosition;
      this._Items[lengthDimension] += nextPosition + item[lengthDimension];
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.queueRequestUpdate();
    }
  }, {
    key: "appendItems",
    value: function appendItems() {
      var _this2 = this;
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.shouldSmooth = false;
      if (this._lazyItems) {
        var _this$_lazyItems;
        (_this$_lazyItems = this._lazyItems).push.apply(_this$_lazyItems, _toConsumableArray(items));
        return;
      }
      if (items.length > this.lazyUpCount + this.lazyUpCountBuffer) {
        this._lazyItems = items.splice(this.lazyUpCount + this.lazyUpCountBuffer);
      }
      items.forEach(function (item) {
        return _this2._appendItem(item);
      });
      this.requestUpdate();
      this._refocus();
    }
  }, {
    key: "appendItemsAt",
    value: function appendItemsAt() {
      var _this3 = this;
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var idx = arguments.length > 1 ? arguments[1] : undefined;
      if (this._lazyItems && idx > this.items.length - 1) {
        var _this$_lazyItems2;
        var addAtIdx = idx - this.items.length;
        (_this$_lazyItems2 = this._lazyItems).splice.apply(_this$_lazyItems2, [addAtIdx, 0].concat(_toConsumableArray(items)));
        return;
      }
      var _this$_directionPropN6 = this._directionPropNames,
        crossDimension = _this$_directionPropN6.crossDimension,
        lengthDimension = _this$_directionPropN6.lengthDimension,
        innerLengthDimension = _this$_directionPropN6.innerLengthDimension;
      var addIndex = Number.isInteger(idx) ? idx : this.Items.children.length;
      this.shouldSmooth = false;
      this._lastAppendedIdx = addIndex;
      this._totalAddedLength = 0;
      items.forEach(function (item, itemIdx) {
        var newItem = _objectSpread(_objectSpread({}, _this3._withAfterUpdate(item)), {}, {
          parentFocus: _this3.hasFocus()
        });
        // do not set a h/w if the item already has one defined
        // as this will trigger withThemeStyles's dimension "setByUser" flag
        if (!item[crossDimension]) {
          newItem[crossDimension] = item[crossDimension] || _this3.Items[crossDimension];
        }
        _this3.Items.childList.addAt(newItem, addIndex + itemIdx);
        var itemLength = item[lengthDimension] || item[innerLengthDimension] || 0;
        var extraItemSpacing = item.extraItemSpacing || 0;
        _this3._totalAddedLength += itemLength + _this3.style.itemSpacing + extraItemSpacing;
      });
      if (this.selectedIndex >= this._lastAppendedIdx) {
        this._selectedPastAdded = true;
        this._selectedIndex += items.length;
      }
      this.requestUpdate();
      this._refocus();
    }
  }, {
    key: "updatePositionOnAxis",
    value: function updatePositionOnAxis(item, position) {
      var axis = this._directionPropNames.axis;
      this.applySmooth(item, _defineProperty({}, axis, position), _defineProperty({}, axis, [position, this.style.itemTransition]));
      if (!this.shouldSmooth) {
        this._updateTransitionTarget(item, axis, position);
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(index) {
      var _this4 = this;
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.style.itemTransition.duration * 100;
      if (index == undefined) {
        return;
      }
      if (duration === 0) {
        this.selectedIndex = index;
        return;
      }
      for (var i = 0; i !== Math.abs(this.selectedIndex - index); i++) {
        setTimeout(function () {
          _this4.selectedIndex > index ? _this4.selectPrevious() : _this4.selectNext();
        }, duration * i);
      }
    }

    // can be overridden
  }, {
    key: "transitionDone",
    value: function transitionDone() {}
  }, {
    key: "shouldScrollLeft",
    value: function shouldScrollLeft() {
      return this._isRow && this._canScrollBack;
    }
  }, {
    key: "shouldScrollRight",
    value: function shouldScrollRight() {
      return this._isRow && this._canScrollNext;
    }
  }, {
    key: "shouldScrollUp",
    value: function shouldScrollUp() {
      return this._isColumn && this._canScrollBack;
    }
  }, {
    key: "shouldScrollDown",
    value: function shouldScrollDown() {
      return this._isColumn && this._canScrollNext;
    }
  }, {
    key: "_directionPropNames",
    get: function get() {
      return directionPropNames[this.direction];
    }
  }, {
    key: "_canScrollBack",
    get: function get() {
      var shouldScroll = false;
      if (this._lastScrollIndex) {
        shouldScroll = this.selectedIndex < this._lastScrollIndex;
        if (this._prevLastScrollIndex !== undefined && this._prevLastScrollIndex !== this._lastScrollIndex) {
          shouldScroll = true;
        }
      } else {
        shouldScroll = this.selectedIndex >= this.scrollIndex;
      }
      var itemsStartCoord = this._isRow ? this._itemsX : this._itemsY;
      return itemsStartCoord < (this._isRow ? this.itemPosX : this.itemPosY) && shouldScroll;
    }
  }, {
    key: "_canScrollNext",
    get: function get() {
      var _this$_directionPropN7 = this._directionPropNames,
        axis = _this$_directionPropN7.axis,
        lengthDimension = _this$_directionPropN7.lengthDimension;
      var lastChild = this.Items.childList.last;
      var endOfItemsPosition;
      if (this._isRow) {
        endOfItemsPosition = Math.abs(this._itemsX - this.w);
      }
      if (this._isColumn) {
        endOfItemsPosition = Math.abs(this._itemsY - this.h);
      }
      return this.selectedIndex > this.scrollIndex &&
      // end of Items container < end of last item
      endOfItemsPosition < lastChild[axis] + lastChild[lengthDimension];
    }
  }, {
    key: "_isColumn",
    get: function get() {
      return this.direction === 'column';
    }
  }, {
    key: "_isRow",
    get: function get() {
      return this.direction === 'row';
    }
  }, {
    key: "_itemsX",
    get: function get() {
      return (0,utils/* getX */.nZ)(this.Items);
    }
  }, {
    key: "_itemsY",
    get: function get() {
      return (0,utils/* getY */.Ff)(this.Items);
    }
  }, {
    key: "_getAlwaysScroll",
    value: function _getAlwaysScroll() {
      return this._alwaysScroll !== undefined ? this._alwaysScroll : this.style.alwaysScroll;
    }
  }, {
    key: "_getNeverScroll",
    value: function _getNeverScroll() {
      if (this.alwaysScroll) {
        return false;
      }
      return this._neverScroll !== undefined ? this._neverScroll : this.style.neverScroll;
    }
  }, {
    key: "_setScrollIndex",
    value: function _setScrollIndex(index) {
      return index >= 0 ? index : 0;
    }
  }, {
    key: "_getScrollIndex",
    value: function _getScrollIndex() {
      return this._scrollIndex !== undefined ? this._scrollIndex : this.style.scrollIndex;
    }
  }, {
    key: "isFullyOnScreen",
    value: function isFullyOnScreen() {
      var _this$parent;
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$offsetX = _ref3.offsetX,
        offsetX = _ref3$offsetX === void 0 ? 0 : _ref3$offsetX,
        _ref3$offsetY = _ref3.offsetY,
        offsetY = _ref3$offsetY === void 0 ? 0 : _ref3$offsetY;
      // if the NavigationManager is nested in another Focus Manager
      // (like a Row inside of a Column),
      // the `isComponentOnScreen` method needs to account for
      // how much the Items container is moving as it scrolls
      var focusmanager = (_this$parent = this.parent) === null || _this$parent === void 0 ? void 0 : _this$parent.parent;
      if (focusmanager instanceof FocusManager/* default */.Z) {
        offsetX += focusmanager.Items.transition('x').targetValue || 0;
        offsetY += focusmanager.Items.transition('y').targetValue || 0;
      }
      return _get(_getPrototypeOf(NavigationManager.prototype), "isFullyOnScreen", this).call(this, {
        offsetX: offsetX,
        offsetY: offsetY
      });
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'NavigationManager';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return NavigationManager_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(NavigationManager), "properties", this)), ['alwaysScroll', 'neverScroll', 'scrollIndex', 'autoResizeWidth', 'autoResizeHeight', 'lazyUpCount', 'lazyUpCountBuffer', 'waitForDimensions']);
    }
  }]);
  return NavigationManager;
}(FocusManager/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Row/Row.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Row)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Row/Row.styles.js
var Row_styles_namespaceObject = {};
__webpack_require__.r(Row_styles_namespaceObject);
__webpack_require__.d(Row_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js + 1 modules
var NavigationManager = __webpack_require__("../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

var base = function base(theme) {
  return {
    itemSpacing: theme.layout.gutterX,
    scrollIndex: 0,
    alwaysScroll: false,
    neverScroll: false,
    itemTransition: _objectSpread(_objectSpread({}, theme.animation.standardEntrance), {}, {
      duration: theme.animation.duration.fast
    })
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js
function Row_typeof(o) { "@babel/helpers - typeof"; return Row_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Row_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Row_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Row_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Row_ownKeys(Object(t), !0).forEach(function (r) { Row_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Row_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Row_defineProperty(obj, key, value) { key = Row_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Row_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Row_toPropertyKey(t) { var i = Row_toPrimitive(t, "string"); return "symbol" == Row_typeof(i) ? i : String(i); }
function Row_toPrimitive(t, r) { if ("object" != Row_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Row_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Row_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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




var Row = /*#__PURE__*/function (_NavigationManager) {
  _inherits(Row, _NavigationManager);
  var _super = _createSuper(Row);
  function Row() {
    _classCallCheck(this, Row);
    return _super.apply(this, arguments);
  }
  _createClass(Row, [{
    key: "_isOnScreenForScrolling",
    value:
    // Since this is a Row, scrolling should be done only when focused item (this.selected) is fully visible horizontally
    // as scrolling is happening along X axis. So, if we have a row that has height greater than screen's height, it still
    // can scroll. Method below the '_isComponentHorizontallyVisible' does not take "full" visibility into an account.
    // At the same time, 'isFullyOnScreen' method on the Base class or utils method checks that element is fully visible
    // both vertically and horizontally.
    // At a later time, we should investigate this further.
    function _isOnScreenForScrolling(child) {
      if (!child) return false;
      var x = (0,utils/* getX */.nZ)(child);
      if (!Number.isFinite(x)) return false;
      var itemsTransitionX = this.getTransitionXTargetValue();
      var rowX = this.core.renderContext.px;
      var itemX = rowX + itemsTransitionX + x;
      var xModifier;

      // This section here takes the difference between a possible target value
      // and subtracts it from the current child x. That value then is subtracted from the initial
      // itemX value calculated on the core renderContext px value to more accurately
      // calculate the item's location on screen when it's own x value will be updating.
      if (child.transition('x')) {
        xModifier = child.x - child.transition('x').targetValue;
        itemX = itemX - xModifier;
      }
      return itemX >= rowX && itemX + child.w <= rowX + this.w;
    }
  }, {
    key: "_shouldScroll",
    value: function _shouldScroll() {
      var prevIndex = this.Items.childList.getIndex(this.prevSelected);
      if (this.alwaysScroll || this.lazyScroll && (this.selectedIndex < this.startLazyScrollIndex || this.selectedIndex > this.stopLazyScrollIndex || prevIndex < this.startLazyScrollIndex && this.selectedIndex === this.startLazyScrollIndex || prevIndex > this.stopLazyScrollIndex && this.selectedIndex === this.stopLazyScrollIndex)) {
        return true;
      }
      var shouldScroll = this._selectedPastAdded;
      if (!shouldScroll && !this.neverScroll) {
        var isCompletelyOnScreen = this._isOnScreenForScrolling(this.selected);
        if (this.lazyScroll) {
          shouldScroll = !isCompletelyOnScreen;
        } else {
          var lastChild = this.Items.childList.last;
          shouldScroll = lastChild && (this.shouldScrollLeft() || this.shouldScrollRight() || !isCompletelyOnScreen);
        }
      }
      return shouldScroll;
    }
  }, {
    key: "_getPrependedOffset",
    value: function _getPrependedOffset() {
      this._selectedPastAdded = false;
      return this.Items.x - this._totalAddedWidth;
    }
  }, {
    key: "_getLazyScrollX",
    value: function _getLazyScrollX(prev) {
      var prevIndex = this.Items.childList.getIndex(this.prevSelected);
      if (this._selectedPastAdded) {
        return this._getPrependedOffset();
      }
      if (this.selectedIndex <= this.startLazyScrollIndex) {
        // if navigating on items before start lazy scroll index, use normal scroll logic
        return this._getScrollX();
      } else if (this.selectedIndex >= this.stopLazyScrollIndex && this.selectedIndex < prevIndex) {
        // if navigating left on items after stop lazy scroll index
        var currItemsX = this.Items.x;
        return currItemsX + (this.prevSelected.w + this.style.itemSpacing + (this.selected.extraItemSpacing || 0));
      } else if (prev && this.selectedIndex > this.stopLazyScrollIndex) {
        // if navigating right on items after stop lazy scroll index
        var prevX = prev.x;
        return -prevX + this.prevSelected.w + this.style.itemSpacing + (this.selected.extraItemSpacing || 0) + this.itemPosX;
      } else if (prev) {
        // otherwise, no start/stop indexes, perform normal lazy scroll
        var itemsContainerX;
        var _prevIndex = this.Items.childList.getIndex(prev);
        var selectedX = this.selected.x;
        if (_prevIndex === -1) {
          // No matches found in childList, start set x to 0
          return;
        }
        if (_prevIndex > this.selectedIndex) {
          itemsContainerX = -selectedX + this.itemPosX;
        } else if (_prevIndex < this.selectedIndex) {
          itemsContainerX = this.w - selectedX - this.selected.w;
        }
        return itemsContainerX;
      }
      // if no prev item or start/stop index, default to normal scroll logic
      return this._getScrollX();
    }
  }, {
    key: "_getScrollX",
    value: function _getScrollX() {
      if (this._selectedPastAdded) {
        return this._getPrependedOffset();
      }
      var itemsContainerX;
      var itemIndex = this.selectedIndex - this.scrollIndex;
      itemIndex = itemIndex < 0 ? 0 : itemIndex;
      if (itemIndex === this._firstFocusableIndex()) {
        itemIndex = 0;
      }
      if (this.Items.children[itemIndex]) {
        itemsContainerX = this.Items.children[itemIndex].transition('x') ? -this.Items.children[itemIndex].transition('x').targetValue + this.itemPosX : -this.Items.children[itemIndex].x + this.itemPosX;
      }
      return itemsContainerX;
    }
  }, {
    key: "_render",
    value: function _render(next, prev) {
      if (this.plinko && prev && prev.selected) {
        next.selectedIndex = this._getIndexOfItemNear(next, prev);
      }
      this._prevLastScrollIndex = this._lastScrollIndex;
      var itemsContainerX;
      if (!this.Items.children.length) {
        itemsContainerX = this.itemPosX;
      } else if (this._shouldScroll()) {
        itemsContainerX = this.lazyScroll && prev ? this._getLazyScrollX(prev) : this._getScrollX();
      }
      if (itemsContainerX !== undefined) {
        this.updatePositionOnAxis(this.Items, itemsContainerX);
      }
      this.onScreenEffect(this.onScreenItems);
    }
  }, {
    key: "_performRender",
    value: function _performRender() {
      this._render(this.selected, this.prevSelected);
    }
  }, {
    key: "_isOnScreen",
    value: function _isOnScreen(child) {
      if (!child) return false;
      return this._isComponentHorizontallyVisible(child);
    }

    // can be overridden
  }, {
    key: "onScreenEffect",
    value: function onScreenEffect() {}
  }, {
    key: "_totalAddedWidth",
    get: function get() {
      return this._totalAddedLength;
    }
  }, {
    key: "_getLazyScroll",
    value: function _getLazyScroll() {
      if (this.alwaysScroll) {
        return false;
      }
      return this._lazyScroll !== undefined ? this._lazyScroll : this.style.lazyScroll;
    }
  }, {
    key: "_getNeverScroll",
    value: function _getNeverScroll() {
      if (this.alwaysScroll || this.lazyScroll) {
        return false;
      }
      return this._neverScroll !== undefined ? this._neverScroll : this.style.neverScroll;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Row';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Row_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return Row_objectSpread(Row_objectSpread({}, _get(_getPrototypeOf(Row), "_template", this).call(this)), {}, {
        direction: 'row'
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(Row), "properties", this)), ['lazyScroll', 'startLazyScrollIndex', 'stopLazyScrollIndex']);
    }
  }]);
  return Row;
}(NavigationManager/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/TextBox/TextBox.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TextBox)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.styles.js
var TextBox_styles_namespaceObject = {};
__webpack_require__.r(TextBox_styles_namespaceObject);
__webpack_require__.d(TextBox_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.styles.js
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

var base = function base(theme) {
  return {
    offsetY: theme.spacer.xxs,
    offsetX: 0,
    textStyle: theme.typography.body1
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      textStyle: {
        textColor: theme.color.fillNeutral
      }
    },
    inverse: {
      textStyle: {
        textColor: theme.color.fillInverse
      }
    },
    brand: {
      textStyle: {
        textColor: theme.color.fillBrand
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js + 1 modules
var InlineContent = __webpack_require__("../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Marquee/Marquee.js + 1 modules
var Marquee = __webpack_require__("../../@lightningjs/ui-components/src/components/Marquee/Marquee.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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









/**
 *
 * Get defaults directly from @lightningjs/core to ensure correct fallback values
 *
 */
var lightningTextDefaults = Object.entries(Object.getOwnPropertyDescriptors(lightning_esm/* default */.Z.textures.TextTexture.prototype)).reduce(function (acc, _ref) {
  var _ref2 = _slicedToArray(_ref, 1),
    prop = _ref2[0];
  var value = lightning_esm/* default */.Z.textures.TextTexture.prototype[prop];
  if (prop.startsWith('_') || ['undefined', 'function'].includes(_typeof(value))) return acc;
  return _objectSpread(_defineProperty({}, prop, value), acc);
}, {});
var TextBox = /*#__PURE__*/function (_Base) {
  _inherits(TextBox, _Base);
  var _super = _createSuper(TextBox);
  function TextBox() {
    _classCallCheck(this, TextBox);
    return _super.apply(this, arguments);
  }
  _createClass(TextBox, [{
    key: "_setDimensions",
    value: function _setDimensions(w, h) {
      var width = w;
      var height = h;
      if (!this._isInlineContent) {
        width = this._Text.texture.getRenderWidth();
        height = this._Text.texture.getRenderHeight();
      }
      var sizeChanged = this.w !== width || this.h !== height;
      if (width && height && sizeChanged) {
        this.h = height;
        if (!this.fixed) {
          this.w = width;
        }

        // Position updates can produce flash of poorly positioned content, hide the element until measurements are made.
        if (!this.hideOnLoad && this.alpha < 1) {
          this.alpha = 1;
        }
        this._notifyAncestors();
      }
    }
  }, {
    key: "_setContent",
    value: function _setContent(content) {
      this._isInlineContent = false;
      if (Array.isArray(content) || utils/* default.isMarkupString */.ZP.isMarkupString(content)) {
        this._isInlineContent = true;
      }
      if ('string' !== typeof content && !this._isInlineContent) {
        return '';
      }
      return content;
    }
  }, {
    key: "title",
    get: function get() {
      return this._content;
    }
  }, {
    key: "_notifyAncestors",
    value: function _notifyAncestors() {
      var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.w;
      var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.h;
      this.fireAncestors('$itemChanged');
      this.signal('textBoxChanged', {
        w: w,
        h: h
      });
    }
  }, {
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(TextBox.prototype), "_construct", this).call(this);
      this._marqueeContentListenerAttached = false;
      this._marqueeOverrideLoopX = undefined;
      this._resetMarqueePromise();
    }
  }, {
    key: "_update",
    value: function _update() {
      if (!this.content) {
        // If content is not defined hide the component, but do NOT set visibility
        // as a parent component may need to control that (i.e. Control Button)

        // guard to make sure _notifyAncestors is not called numerous times for components like Input
        if (this._Text || this._InlineContent) {
          this.w = this.h = 0;
          this._notifyAncestors(); // need to alert parents that the width and height are now 0
          // makes sure that elements are removed
          this._updateMarquee();
          this.patch({
            Text: undefined,
            InlineContent: undefined
          });
        }
        return;
      }
      this._isInlineContent ? this._updateInlineContent() : this._updateText();
      this._updateMarquee();
    }
  }, {
    key: "_updateInlineContent",
    value: function _updateInlineContent() {
      var _this = this;
      this.patch({
        Text: undefined
      });
      var inlineContentPatch = InlineContent/* default */.Z.properties.reduce(function (acc, prop) {
        if (_this[prop] != undefined) {
          acc[prop] = _this[prop];
        }
        return acc;
      },
      // ensure all styles are passed down as well
      {
        style: _objectSpread(_objectSpread({}, this.style), {}, {
          textStyle: this._textStyleSet
        })
      });
      if (this._textStyleSet.wordWrapWidth) {
        inlineContentPatch.w = this._textStyleSet.wordWrapWidth;
        inlineContentPatch.rtt = true;
      }
      if (this._textStyleSet.maxLines) {
        inlineContentPatch.maxLines = this._textStyleSet.maxLines;
      }
      if (this._textStyleSet.maxLinesSuffix) {
        inlineContentPatch.maxLinesSuffix = this._textStyleSet.maxLinesSuffix;
      }
      this.patch({
        alpha: 1,
        InlineContent: _objectSpread(_objectSpread({
          type: InlineContent/* default */.Z,
          w: this.w
        }, inlineContentPatch), {}, {
          signals: {
            loadedInlineContent: '_setDimensions'
          }
        })
      });
    }
  }, {
    key: "_updateText",
    value: function _updateText() {
      this.patch({
        InlineContent: undefined
      });
      if (!this._Text) {
        this.patch({
          Text: {}
        });
        this._Text.on('txLoaded', this._setDimensions.bind(this));
      }
      var fontStyle = this._textStyleSet;
      if (this._Text) {
        this._Text.patch({
          y: this.style.offsetY,
          x: this.style.offsetX,
          text: _objectSpread(_objectSpread({}, lightningTextDefaults), fontStyle)
        });
      }
    }

    // keep this out of the update lifecycle
  }, {
    key: "marqueeOverrideLoopX",
    get: function get() {
      return this._marqueeOverrideLoopX;
    },
    set: function set(v) {
      this._marqueeOverrideLoopX = v;
      if (this._Marquee) this._Marquee.overrideLoopX = this._marqueeOverrideLoopX;
      this._resolveAwaitMarqueeOverrideX();
    }
  }, {
    key: "_resetMarqueePromise",
    value: function _resetMarqueePromise() {
      var _this2 = this;
      this._awaitMarqueeOverrideX = new Promise(function (resolve, reject) {
        _this2._resolveAwaitMarqueeOverrideX = resolve;
        _this2._rejectAwaitMarqueeOverrideX = reject;
      });
    }
  }, {
    key: "_loadedMarqueeContent",
    value: function _loadedMarqueeContent() {
      this.signal('willMarquee', this._Marquee);
    }
  }, {
    key: "_updateMarquee",
    value: function _updateMarquee() {
      var _this3 = this;
      if (this._Marquee && !this.marquee) {
        this._toggleMarquee(this._contentTag);
      }
      if (this.marquee) {
        this._resetMarqueePromise();
        var marqueePatch = _objectSpread(_objectSpread({}, this.marqueeProps), {}, {
          w: this._textStyleSet.wordWrapWidth || this.w,
          h: this.h,
          y: this.style.offsetY,
          x: this.style.offsetX,
          signals: {
            marqueeContentLoaded: '_loadedMarqueeContent'
          }
        });
        if (!this._Marquee) {
          marqueePatch.type = Marquee/* default */.Z;
        }
        if (this._isInlineContent) {
          this._InlineContent.w = 0; // ensure we're copying the full, unwrapped inlineContent
          marqueePatch.title = undefined;
          marqueePatch.contentTexture = this._contentTag.getTexture();
          marqueePatch.w = this._textStyleSet.wordWrapWidth || this.w;
        } else {
          marqueePatch.contentTexture = undefined;
          marqueePatch.title = _objectSpread(_objectSpread({
            text: this._contentTag.text.text
          }, this._textStyleSet), {}, {
            wordWrapWidth: 0,
            // ensures that the text will marquee and not wrap
            maxLines: 1
          });
        }
        this.patch({
          Marquee: marqueePatch
        });
        if (!this._marqueeContentListenerAttached) {
          this._marqueeContentListenerAttached = true;
        }
        if ('undefined' !== typeof this._marqueeOverrideLoopX) {
          this._awaitMarqueeOverrideX.then(function () {
            _this3._toggleMarquee(_this3._contentTag);
          });
        } else {
          this._toggleMarquee(this._contentTag);
        }
      }
    }
  }, {
    key: "_getMarqueeProps",
    value: function _getMarqueeProps() {
      var _this$_marqueeProps;
      return (_this$_marqueeProps = this._marqueeProps) !== null && _this$_marqueeProps !== void 0 ? _this$_marqueeProps : {};
    }
  }, {
    key: "_textStyleSet",
    get: function get() {
      var _this4 = this;
      var fontStyle = _objectSpread(_objectSpread({}, this.theme.typography.body1), null !== this.style.textStyle && 'object' === _typeof(this.style.textStyle) && Object.keys(this.style.textStyle) ? this.style.textStyle : this.theme.typography[this.style.textStyle]);
      this.constructor.properties.forEach(function (prop) {
        if ('fontStyle' !== prop && 'undefined' !== typeof _this4["_".concat(prop)]) {
          var key = 'content' === prop ? 'text' : prop;
          fontStyle[key] = _this4["_".concat(prop)];
        }
      });
      if (this.w && !this._isInlineContent && !this.style.textStyle.wordWrapWidth && this.fixed) {
        fontStyle.wordWrapWidth = this.w;
      }
      return fontStyle;
    }
  }, {
    key: "_contentTag",
    get: function get() {
      return this._isInlineContent ? this._InlineContent : this._Text;
    }
  }, {
    key: "_toggleMarquee",
    value: function _toggleMarquee(contentTag) {
      // do not just return if there is no contentTag, we may still need to alpha the Marquee
      if (this.marquee) {
        if (contentTag) {
          contentTag.alpha = 0.001;
        }
        if (this._Marquee) {
          this._Marquee.alpha = 1;
          this._Marquee.startScrolling();
        }
      } else {
        if (contentTag) {
          contentTag.alpha = 1;
        }
        if (this._Marquee) {
          this._Marquee.alpha = 0.001;
          this._Marquee.stopScrolling();
        }
      }
    }
  }, {
    key: "toggleMarquee",
    value: function toggleMarquee() {
      this._toggleMarquee(this._contentTag);
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || (this._isInlineContent && this._InlineContent ? this._InlineContent.announce : this.content);
    },
    set: function set(announce) {
      _set(_getPrototypeOf(TextBox.prototype), "announce", announce, this, true);
    }
  }, {
    key: "smooth",
    set: function set(v) {
      context/* default */.Z.warn('warning: value smoothing is known to cause bugs with the TextBox - patch updated values instead.');
      _set(_getPrototypeOf(TextBox.prototype), "smooth", v, this, true);
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        alpha: 0.001
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'TextBox';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return TextBox_styles_namespaceObject;
    }
  }, {
    key: "tags",
    get: function get() {
      return ['InlineContent', 'Marquee', 'Text'];
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(InlineContent/* default */.Z.properties), ['content', 'fixed', 'marquee', 'marqueeProps', 'hideOnLoad']);
    }
  }]);
  return TextBox;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/globals/context/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ contextInstance)
});

// UNUSED EXPORTS: Context

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/logger.js
var logger = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/logger.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/globals/context/metrics.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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


var Metrics = /*#__PURE__*/function () {
  function Metrics() {
    _classCallCheck(this, Metrics);
    this._keyMetricsCallback = undefined;
  }
  _createClass(Metrics, [{
    key: "keyMetricsCallback",
    get: function get() {
      return this._keyMetricsCallback;
    },
    set: function set(value) {
      if (-1 < ['undefined', 'function'].indexOf(_typeof(value))) {
        this._keyMetricsCallback = value;
        return;
      }
      logger/* default */.Z.warn("context keyMetricsCallback expected a function. Received ".concat(_typeof(value)));
    }
  }]);
  return Metrics;
}();
var metricsInstance = new Metrics();

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/globals/context/events.js
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


var eventEmitterInstance = new lightning_esm/* default */.Z.EventEmitter();
/* harmony default export */ const events = (eventEmitterInstance);
;// CONCATENATED MODULE: ../../@lightningjs/ui-components-theme-base/index.js
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

/* harmony default export */ const ui_components_theme_base = ({
  name: 'Base Lightning TV',
  alpha: {
    primary: 1,
    secondary: 0.7,
    tertiary: 0.1,
    inactive: 0.5,
    full: 1,
    none: 0,
    alpha1: 0.1,
    alpha2: 0.3,
    alpha3: 0.5,
    alpha4: 0.7,
    alpha5: 0.9
  },
  animation: {
    duration: {
      none: 0,
      xfast: 0.1,
      fast: 0.25,
      normal: 0.5,
      slow: 0.75,
      xslow: 0.9
    },
    delay: {
      none: 0,
      xfast: 0.01,
      fast: 0.025,
      normal: 0.05,
      slow: 0.075,
      xslow: 0.09
    },
    expressive: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    expressiveEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    expressiveExit: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    standard: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    standardEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    standardExit: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    utility: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    utilityEntrance: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    },
    utilityExit: {
      timingFunction: 'cubic-bezier(0, 0, 1, 1)',
      delay: 0,
      duration: 0.25
    }
  },
  asset: {
    arrowLeft: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAi0lEQVRIDWNgGAWjIfD//38JID5Fk5AAGqwKxPeA+D/VLQCaaQLEr0CGgwBVLQCa5wbEn0EGwwDVLAAaGA3Ev2AGw2iqWAA0rBiI/8EMRaYptgBoWDeygehsci1gIlcjWfqArqZdEMFcBLSEdpGMZAntkimSJbTLaEiW0K6oQLKEdoUdzJJRemiHAAD4n+yzPWCs7QAAAABJRU5ErkJggg==',
    arrowRight: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAGAAAAADiNXWtAAAAg0lEQVRIDWNgGAWjIYArBP7//38KiCVwyVMsDjQcBO4BsSrFhmEzAGw8hHgFpEywqaFIDMkCEPMzELtRZCC6ZjQLQNxfQByNro5sPhYLQEL/gLiYbEORNeKwACbcDVPLBGMMOhrmVDSapkFE00imaTKlaUajaVFB28Ju0CXrUQfhDAEAEgHss6NhpLQAAAAASUVORK5CYII=',
    backspaceOutline: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC',
    check: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAOCAYAAAAi2ky3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACtSURBVHgBvdPdDcIgEAfwoy8Nb45QN3AGF2s36Ahu4gpuIDoBfSgfpdoTlCbEWEMh6T8hFzjyg5AAkBHOcQe5UWqspRx435sDpMYj6IYQwwVSEiJ2MKVUBWuzLSLl2HL+uxmNCGFO8yaL7RHxve6qRZoAuS4hxac8735elWVx7jrtMKL1o0Gcat9jhExHSukN/kUIFZ7MpDRtzE1isDRkAUtDvrA8ZI597FUf8gWH9P0b4gko9wAAAABJRU5ErkJggg=='
  },
  color: {
    white: ['#ffffff', 1],
    black: ['#000000', 1],
    grey: ['#929096', 1],
    red: ['#e74c3c', 1],
    orange: ['#dc7633', 1],
    yellow: ['#f7dc6f', 1],
    green: ['#2Ecc71', 1],
    blue: ['#93a9fd', 1],
    purple: ['#663399', 1],
    palette: {
      'grey-05': ['#f8f7fa', 1],
      'grey-40': ['#929096', 1],
      'grey-70': ['#48474b', 1],
      'grey-90': ['#181819', 1],
      'blue-20': ['#becffe', 1],
      'blue-40': ['#93a9fd', 1],
      'blue-90': ['#000033', 1]
    },
    material: ['#181819', 1],
    materialBrand: ['#000033', 1],
    overlay: ['#181819', 0.7],
    textNeutral: ['#f8f7fa', 1],
    textNeutralSecondary: ['#f8f7fa', 0.7],
    textNeutralTertiary: ['#f8f7fa', 0.1],
    textNeutralDisabled: ['#f8f7fa', 0.5],
    textInverse: ['#181819', 1],
    textInverseSecondary: ['#181819', 0.7],
    textInverseTertiary: ['#181819', 0.1],
    textInverseDisabled: ['#181819', 0.5],
    textBrand: ['#93a9fd', 1],
    textBrandSecondary: ['#93a9fd', 0.7],
    textBrandTertiary: ['#93a9fd', 0.1],
    textBrandDisabled: ['#93a9fd', 0.5],
    textPositive: ['#2Ecc71', 1],
    textNegative: ['#e74c3c', 1],
    textInfo: ['#93a9fd', 1],
    textCaution: ['#dc7633', 1],
    fillTransparent: ['#ffffff', 0],
    fillNeutral: ['#f8f7fa', 1],
    fillNeutralSecondary: ['#f8f7fa', 0.7],
    fillNeutralTertiary: ['#f8f7fa', 0.1],
    fillNeutralDisabled: ['#f8f7fa', 0.5],
    fillInverse: ['#181819', 1],
    fillInverseSecondary: ['#181819', 0.7],
    fillInverseTertiary: ['#181819', 0.1],
    fillInverseDisabled: ['#181819', 0.5],
    fillBrand: ['#93a9fd', 1],
    fillBrandSecondary: ['#93a9fd', 0.7],
    fillBrandTertiary: ['#93a9fd', 0.1],
    fillBrandDisabled: ['#93a9fd', 0.5],
    fillPositive: ['#2Ecc71', 1],
    fillNegative: ['#e74c3c', 1],
    fillInfo: ['#93a9fd', 1],
    fillCaution: ['#dc7633', 1],
    strokeNeutral: ['#f8f7fa', 1],
    strokeNeutralSecondary: ['#f8f7fa', 0.7],
    strokeNeutralTertiary: ['#f8f7fa', 0.1],
    strokeNeutralDisabled: ['#f8f7fa', 0.5],
    strokeInverse: ['#181819', 1],
    strokeInverseSecondary: ['#181819', 0.7],
    strokeInverseTertiary: ['#181819', 0.1],
    strokeInverseDisabled: ['#181819', 0.5],
    strokeBrand: ['#93a9fd', 1],
    strokeBrandSecondary: ['#93a9fd', 0.7],
    strokeBrandTertiary: ['#93a9fd', 0.1],
    strokeBrandDisabled: ['#93a9fd', 0.5],
    strokePositive: ['#2Ecc71', 1],
    strokeNegative: ['#e74c3c', 1],
    strokeInfo: ['#93a9fd', 1],
    strokeCaution: ['#dc7633', 1],
    interactiveNeutral: ['#ffffff', 0.1],
    interactiveNeutralFocus: ['#ffffff', 1],
    interactiveNeutralFocusSoft: ['#ffffff', 0.1],
    interactiveInverse: ['#48474b', undefined],
    interactiveInverseFocus: ['#48474b', 1],
    interactiveInverseFocusSoft: ['#48474b', 0.1],
    interactiveBrand: ['#becffe', 0.1],
    interactiveBrandFocus: ['#becffe', 1],
    interactiveBrandFocusSoft: ['#becffe', 0.1],
    shadowNeutral: ['#000000', 0.7],
    shadowNeutralFocus: ['#000000', 0.7],
    shadowNeutralFocusSoft: ['#000000', 0.7],
    shadowNeutralText: ['#000000', 1],
    shadowInverse: ['#000000', 0.7],
    shadowInverseFocus: ['#000000', 0.7],
    shadowInverseFocusSoft: ['#000000', 0.7],
    shadowInverseText: ['#000000', 1],
    shadowBrand: ['#000000', 0.7],
    shadowBrandFocus: ['#000000', 0.7],
    shadowBrandFocusSoft: ['#000000', 0.7],
    shadowBrandText: ['#000000', 1]
  },
  componentConfig: {
    Keyboard: {
      style: {
        keyProps: {
          "delete": {
            title: null,
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACmpJREFUeF7tnVmoZUcVhv/feY4gBEVEH/KgCCZxCK2itNo4xQQH+kUN0TjEiDGKKBqnaExwBjUaR6KY+NQgiQkOMSYhYEScIopGJOqDE2hHjfP0y4p1Oqdv33v2qr32Prv2Paug6Ye7Vu2qv75TtWvtGohMqUBAAQZ80zUVQAKUEIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypXMClAyEFEiAQvKlcwKUDIQUSIBC8qVzApQMhBRIgELypfPsAJJ0NYC92XRHKPB3AAfLv18BuBLAFSR/NKZWswJI0vkA3jCmILsw75sAvIfkR8eo22wAknQSgMvGEGFD8vwxgFeQvGrI+s4CIEnHAPgugHsMWfkNzevDAM4i+Z8h6t88QJLuXOB5yBAVzjxuVeBaAM8ieXNUjzkAdAmA50Yrmv5HKPATACeQ/GNEm6YBkvRyANblZhpHAXsfekpkOGsWIEmPAHA9gDuOo13mWhS4gOSZfdVoEiBJ9wFwA4D7961Y+lUpsK/v7KxVgL4K4ElOCS4l+Uyn7a41k3Q0gMcC2ANgH4CHV1T2OyStx69OzQEk6TwAZztr8lMAx5P8s9N+Y8wk2cTjfQDu66z080h+zml7yKwpgCSdCOByZyX+BuBRJH/otN84M0kWN/s0gOc4Kv8Nko922B1m0gxAkh4I4AcVwcL9JA/UVnjT7CXdHYD9yEzfVUkAjib5uxqNmgCoBAu/CeBhzsJ/kORZTtuNN5Nk70bXAZ0Hy59G8qIawVoB6LMAnu8suE3tH0/y3077NAMg6esAuoaoC0la7M2dJgdI0ssAXOgs8W8BHEvS/s9UoYCkdwN4bYfL5STto7U7TQpQZbDQehzreawHylSpgKSTAVza4XYDyeNqsp4MoB7BwteQfH9N5dL2NgWK3l0vyAdJWhDXnSYBSNLtANh3GO/KwgMk97trlYbbKiDJPpzea5U8JKuYqDIeql0kvQPAG5352ZLMR5L8q9M+zXZQYFcAJOnJAL7sbGWLMFuk2SLOmYIKzB6gEiz8HoB7O7U4meQXnLZp1qGApD8BuOcsh7AewcL3kuyadg4OjSSbhRxH0j4BjJok2Ufga0j+YdQHlcznDlBNsPAa+xpP8r/rEHbxjAKPbRuyHvKFY0Ik6QUALOprPfIT1gHRbAGSdDoA77aSX5Zg4e8nhGfx6FEgWoJn8Zy1QCTplq5vjc3NwnoEC/eQ/HYD8IwC0TbwrA2i2QHUI1h4JskLGoJnUIhWwLMWiGYFkCSLMX2t5WDhlneeLm5Dw5kDntEhkmRhEVvesWNqZgiTdC6AN3W1Svn72oOFkuxF+WcVIQUrai+IKuA5BBHJ453auc1mA1AJFn7Jsf7EKj9ZsLBHw1ZDtI5neAmaBUBzCxaO2cBj5u2FZtlO0l8A3K3ZIaxHsPB8kt5vYn00c/mM0dBj5OmqzAqjOQDUfLBwJ32HbPAh84pCM5seSNJLAHzcWeFJgoVdZRui4YfIo6ucff8uyVY03LW5IawyWPgvW5u77mChV/QIABFfb/kidk0CVKbDth3Huw35dJLeniqiV2/fniDYx1f7vlWTeoUFah6wZQhrqwcqwUKbrtsaH0+6mOQpHsOpbXpCVFPstcJjBZNkmzHv0swQJultAN7iVO375TyafzjtJzcbEaK1w9McQJXBQlvvYmtsfjE5FZUFGAGiSeBpCqDKYKFtmX0qya9Utl0z5gNCNBk8BSA7CtiODNwxjf4trEew8BySNtTNOg0A0aTwtARQTbDQeh3rfawXmn0KQDQ5PC0B9EkAL3LSkAD9X6hWALIJzJ3mNoSdS9I7U3NyuX6zQO+zKOzkEEmaHqDSFdpZM97tOfkSfRvvk0LUDEAFIgseetf85DS+AYgk/bPr1NvRZ2HLg4ektwI4xzmgZCBxYohaBMjWPeenDOcvaIvZ2oez5gAqQ5mtLbb3oa4z+Bb6nTHW1UP92vFIr54vzJ8BcGplGdYKkSRbCXGHSWdh2z1ckp1taGccroxyFt9cznG4iGuDqFmASk9kZxxakNGTckHZBBA1DVCB6BMAXuwhyA4VmGL/+05l6zlsbdt7DJmXU0uXmSQ7JvD2zQ1hiwJJsotRvlVxXO87SU5+heUYDT5Gni5KVhg1D1DphWqCjOYy6RlAYzb0mHn3gWkWABWIaoKMubHwSBpGebGWZNdc2vmUO6a1BhJXFUSSff/yLuOYamvzzwEcVfFr7tWwPXqi6uN2PXWYG0C1Qca1n8RaDlewl3kPRL3gWXo/XBwo1dXWdk/a3jEOnJoVQGUoqw0yvpLkh7oUHvLvTohC8FRANBo8pT3sxLeVJ/M2M4QtiVYTZJzkNPoOiAaBxwHRqPDMFqBS8Jog4yT3YewA0aDwrIBodHhmDVApvG0mtO3PnjTJjTxbIBoFnm0gWgs8pQ06lxY3N4QtCWZBRgPDezdnHvPr+alV2EiaL0DlF2Dbn20bdB40XtHwQ5nOHqAC0SyCjEM1Wkv57AqACkRvBvB2p7hrDzI6yzU7s90EUPNBxtnR4SjwrgGo9EK1Qca8cM4ByU4mkuz++F93ZHELyZX3iW31n+S+sKWZWfNBxkCbNeUq6ekArugo1I0kH1xT8EkBKj1R80HGGkFbtZVkZ3bb2d2r0tUkn1hTh8kBKhB9DMBLnQWfJMjoLFuTZpJsO/ONAB7UUcBLSHqvX781q1YAqg0yfoDkq5psrQYLJeldAF7nKFr1x+wmACq9kAUZLazvvTV4P8kDDlE22kTSQ4uuK9dCF5HuR/I3NYI1A1CBaB+AK50VsAMj7TJeixNl2kYBSccCsB/ZMQ6Brif5GIfdYSZNAVQg8rzsLSphl/Hapby2LDZTUaBcq/56ALb1fOVxLkuinULy4loRmwOoQGQX7T7DWZnPk3y203bXmkl6AIA91isDOBGADV3e1HsJbasA1QYZvUKl3fYKPI2knXFQnZoEqPRCNUHG6oqnwyEFLiJ5Wl89mgWoQFQTZOyrwSb7WUztcSRtu0+v1DRABaKPADijV+3SaZUCNgE5geTNEZnmAFBtkDGix6b4Xld2BNvJcaHUPEClF6oNMoZE2eXOtm3q1ZFha1mfWQBUINoL4Kqurbm7vPEj1bOAqx3udW0kk62+swGoQHQ2gPOGFGAD8roJgF0t+qkx6jorgApElwE4aQwxZp6n3YNxsPyzA7yst/4iSdvEMFqaHUCjKZEZ91IgAeolWzotFEiAkoWQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnROgJKBkAIJUEi+dE6AkoGQAglQSL50ToCSgZACCVBIvnT+H0jPT81J3xWWAAAAAElFTkSuQmCC'
          }
        }
      }
    }
  },
  font: [],
  layout: {
    columnCount: 10,
    focusScale: 1.2,
    gutterX: 20,
    gutterY: 20,
    marginX: 150,
    marginY: 150,
    safe: 50,
    screenW: 1920,
    screenH: 1080
  },
  radius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24
  },
  spacer: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 10,
    lg: 20,
    xl: 30,
    xxl: 40,
    xxxl: 50
  },
  stroke: {
    none: 0,
    sm: 2,
    md: 4,
    lg: 6,
    xl: 8
  },
  typography: {
    display1: {
      fontFamily: 'Arial',
      fontSize: 75,
      lineHeight: 85,
      fontStyle: '500',
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    display2: {
      fontFamily: 'Arial',
      fontSize: 50,
      lineHeight: 60,
      fontStyle: '500',
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    headline1: {
      fontFamily: 'Arial',
      fontSize: 35,
      fontStyle: '500',
      lineHeight: 48,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    headline2: {
      fontFamily: 'Arial',
      fontSize: 30,
      fontStyle: '500',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    headline3: {
      fontFamily: 'Arial',
      fontSize: 25,
      fontStyle: '500',
      lineHeight: 36,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    body1: {
      fontFamily: 'Arial',
      fontSize: 25,
      fontStyle: '300',
      lineHeight: 40,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    body2: {
      fontFamily: 'Arial',
      fontSize: 22,
      fontStyle: '300',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    body3: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontStyle: '300',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    button1: {
      fontFamily: 'Arial',
      fontSize: 25,
      fontStyle: '500',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    button2: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontStyle: '500',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    callout1: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontStyle: '500',
      lineHeight: 32,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    caption1: {
      fontFamily: 'Arial',
      fontSize: 15,
      fontStyle: '500',
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    tag1: {
      fontFamily: 'Arial',
      fontSize: 20,
      fontStyle: '500',
      lineHeight: 24,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    },
    footnote1: {
      fontFamily: 'Arial',
      fontSize: 22,
      fontStyle: '300',
      lineHeight: 30,
      verticalAlign: 'middle',
      textBaseline: 'bottom'
    }
  }
});
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/globals/context/fonts.js
function fonts_typeof(o) { "@babel/helpers - typeof"; return fonts_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, fonts_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == fonts_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(fonts_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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


var customFontFaces = [];

/**
 * Function to get a list of all custom fonts that have been loaded using the FontFace Web API from the theme
 * @return {Array}
 */
function getCustomFontFaces() {
  return customFontFaces;
}

/**
 * Function to load all the fonts from the theme
 */
var fontLoader = function fontLoader(fonts) {
  var promises = [];
  // Loop through all fonts in the array and attempt to load them using the FontFace Web API
  var _loop = function _loop() {
    var _fonts$i = fonts[i],
      family = _fonts$i.family,
      src = _fonts$i.src,
      descriptors = _fonts$i.descriptors;
    // If url(s) are specified format them according to the spec https://developer.mozilla.org/en-US/docs/Web/API/FontFace
    var fontSrc = src && Array.isArray(src) && src.length ?
    // loop through each string and format it in a way that's readable for the FontFace API
    src.map(function (url) {
      // if the url is a local font then the src is just the string provided in the array
      // otherwise, format the url string like url(<urlString>)
      return url.substr(0, 5) === 'local' ? url : "url(".concat(url, ")"); // Local system fonts are supported by passing a string starting with local. ex local(Impact)
    }).join(',') : 'url(' + src + ')';
    var fontFace = new FontFace(family, fontSrc, descriptors || {});
    logger/* default */.Z.info('Loading font', family);
    document.fonts.add(fontFace);
    // Push all pending promises into an array, theme manager will wait on everything to resolve before triggering another update cycle
    promises.push(new Promise(function (resolve) {
      fontFace.load().then(function () {
        customFontFaces.push(fontFace);
        resolve(family);
      })["catch"](function (err) {
        resolve(new Error("".concat(family, ": ").concat(err.message))); // Even if a font fails to load resolve it with an error so the theme doesn't fail to update all other values
      });
    }));
  };
  for (var i = 0; i < fonts.length; i++) {
    _loop();
  }
  return Promise.all(promises).then(function (fontsLoaded) {
    // After the promise has resolved log the appropriate success and error messages
    var loaded = fontsLoaded.filter(function (font) {
      return !(font instanceof Error);
    }).join(', ');
    if (loaded) {
      logger/* default */.Z.log("Fonts loaded: ".concat(loaded));
    }
    var failed = fontsLoaded.filter(function (font) {
      return font instanceof Error;
    }).map(function (item) {
      return item.message;
    }).join(', ');
    if (failed) {
      logger/* default */.Z.error("Unable to load fonts: ".concat(failed));
    }
  });
};

/**
 * Async function to remove all the fonts loaded by the theme. Useful if a theme is switched at runtime
 */
var cleanupFonts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(fonts) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(document.fonts && 'delete' in document.fonts)) {
            _context.next = 6;
            break;
          }
          if (customFontFaces.length) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return");
        case 3:
          customFontFaces = customFontFaces.filter(function (fontFace) {
            if (!fonts.find(function (font) {
              return font.family === fontFace.family;
            })) {
              logger/* default */.Z.info('Removing font', fontFace.family);
              document.fonts["delete"](fontFace);
              return false;
            } else {
              return fontFace;
            }
          });
          _context.next = 7;
          break;
        case 6:
          logger/* default */.Z.info('Unable to remove manually-added fonts');
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function cleanupFonts(_x) {
    return _ref.apply(this, arguments);
  };
}();
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/globals/context/constants.js
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

var THEME_KEY_REPLACER = {
  fontFamily: 'fontFace'
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/globals/context/theme-manager.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = theme_manager_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function theme_manager_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ theme_manager_regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == theme_manager_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(theme_manager_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function theme_manager_typeof(o) { "@babel/helpers - typeof"; return theme_manager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, theme_manager_typeof(o); }
function theme_manager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function theme_manager_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { theme_manager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { theme_manager_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function theme_manager_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function theme_manager_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, theme_manager_toPropertyKey(descriptor.key), descriptor); } }
function theme_manager_createClass(Constructor, protoProps, staticProps) { if (protoProps) theme_manager_defineProperties(Constructor.prototype, protoProps); if (staticProps) theme_manager_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function theme_manager_toPropertyKey(t) { var i = theme_manager_toPrimitive(t, "string"); return "symbol" == theme_manager_typeof(i) ? i : String(i); }
function theme_manager_toPrimitive(t, r) { if ("object" != theme_manager_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != theme_manager_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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







var merge = {
  all: function all(objArray) {
    var result = {};
    for (var i = 0; i < objArray.length; i++) {
      result = (0,utils/* clone */.d9)(result, objArray[i]);
    }
    return result;
  }
};
var base64Cache = [];
var isSubTheme = function isSubTheme(themeName) {
  return 'subTheme' === themeName.slice(0, 8);
};

/**
 * Extracts the MIME type from a Data URI.
 *
 * @param {string} dataUri - The Data URI string.
 * @returns {string|null} The extracted MIME type, or null if not found.
 */
function getMimeTypeFromDataUri(dataUri) {
  var matches = dataUri.match(/^data:(.*?);base64,/);
  if (matches && matches.length === 2) {
    return matches[1];
  }
  return null;
}

/**
 * Checks if a string represents a Base64-encoded image and extracts the MIME type.
 *
 * @param {string} str - The string to check.
 * @returns {{ isImage: boolean, mimeType: string|null }} An object indicating whether the string is an image and the extracted MIME type.
 */
function checkBase64EncodedImage(str) {
  var regex = /^data:image\/(jpeg|jpg|png|gif);base64,/;
  var isImage = regex.test(str);
  var mimeType = isImage ? getMimeTypeFromDataUri(str.match(regex)[0]) : null;
  return {
    isImage: isImage,
    mimeType: mimeType
  };
}

/**
 * Converts a Base64-encoded image to a Blob URL.
 * Note: Make sure to handle potential memory leaks caused by the browser's image caching.
 *
 * @param {string} base64String - The Base64-encoded image string.
 * @param {string} mimeType - The MIME type of the image.
 * @returns {string|null} The Blob URL representing the converted image, or null if conversion fails.
 */
function base64ToBlobURL(base64String, mimeType) {
  var byteCharacters = atob(base64String.substring(base64String.indexOf(',') + 1));
  var byteArrays = [];
  try {
    for (var offset = 0; offset < byteCharacters.length; offset += 512) {
      var slice = byteCharacters.slice(offset, offset + 512);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    var blob = new Blob(byteArrays, {
      type: mimeType
    });
    var blobURL = URL.createObjectURL(blob);
    return blobURL;
  } catch (error) {
    logger/* default */.Z.info('Unable to convert base64 image to URL');
    return null;
  }
}
var ThemeManager = /*#__PURE__*/function () {
  function ThemeManager() {
    theme_manager_classCallCheck(this, ThemeManager);
    this._cache = new Map();
    if (typeof window === 'undefined') return;
    if (!window.LUI) {
      window.LUI = {};
    }
    if (!window.LUI.themeManagerInstances) {
      window.LUI.themeManagerInstances = [{
        themeManager: this,
        events: events
      }];
    } else {
      window.LUI.themeManagerInstances.push({
        themeManager: this,
        events: events
      });
    }
  }

  // Handle separate instances of context across the application and keep them in sync
  theme_manager_createClass(ThemeManager, [{
    key: "_setCache",
    value: function _setCache(key, payload) {
      if (typeof window === 'undefined') return;
      window.LUI.themeManagerInstances.forEach(function (_ref) {
        var themeManager = _ref.themeManager;
        if (themeManager) themeManager._cache.set(key, payload);
      });
    }
  }, {
    key: "_deleteCache",
    value: function _deleteCache(key) {
      if (typeof window === 'undefined') return;
      window.LUI.themeManagerInstances.forEach(function (_ref2) {
        var themeManager = _ref2.themeManager;
        if (themeManager) themeManager._cache["delete"](key);
      });
    }
  }, {
    key: "_emit",
    value: function _emit(key, payload) {
      if (typeof window === 'undefined') return;
      window.LUI.themeManagerInstances.forEach(function (_ref3) {
        var events = _ref3.events;
        events.emit(key, payload);
      });
    }
  }, {
    key: "getTheme",
    value: function getTheme() {
      if (this._cache.has('theme')) {
        return this._cache.get('theme');
      }
      var theme = this._processTheme.call(this);
      this._setCache('theme', theme);
      return theme;
    }
  }, {
    key: "setTheme",
    value: function () {
      var _setTheme = theme_manager_asyncToGenerator( /*#__PURE__*/theme_manager_regeneratorRuntime().mark(function _callee(themeConfig) {
        var value, theme;
        return theme_manager_regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (Array.isArray(themeConfig)) {
                value = merge.all(themeConfig);
              } else {
                value = themeConfig;
              }
              if (!('object' !== theme_manager_typeof(value) || null === value)) {
                _context.next = 4;
                break;
              }
              logger/* default */.Z.warn("context theme expected an object. Received ".concat(theme_manager_typeof(value)));
              return _context.abrupt("return");
            case 4:
              this._clearCache();
              theme = this._processTheme.call(this, [value], value.extensions);
              this._setCache('theme', theme);
              _context.next = 9;
              return cleanupFonts(theme.font);
            case 9:
              if (!(theme.font && theme.font.length)) {
                _context.next = 12;
                break;
              }
              _context.next = 12;
              return this._loadFonts(theme.font);
            case 12:
              this._refreshSubThemes();
              this._emit('themeExtensionsUpdate');
              this._emit('themeUpdate'); // Notify components that an update cycle is required
              return _context.abrupt("return", theme);
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function setTheme(_x) {
        return _setTheme.apply(this, arguments);
      }
      return setTheme;
    }()
  }, {
    key: "getSubTheme",
    value: function getSubTheme(subThemeName) {
      if (this._cache.has("subTheme".concat(subThemeName))) {
        return this._cache.get("subTheme".concat(subThemeName)).result;
      }
      return;
    }
  }, {
    key: "setSubTheme",
    value: function () {
      var _setSubTheme = theme_manager_asyncToGenerator( /*#__PURE__*/theme_manager_regeneratorRuntime().mark(function _callee2(subThemeName, value) {
        var triggerUpdate,
          globalTheme,
          subTheme,
          _args2 = arguments;
        return theme_manager_regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              triggerUpdate = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : true;
              if (subThemeName) {
                _context2.next = 4;
                break;
              }
              logger/* default */.Z.warn('Sub theme name not specified');
              return _context2.abrupt("return");
            case 4:
              if (!('string' !== typeof subThemeName)) {
                _context2.next = 7;
                break;
              }
              logger/* default */.Z.warn("Sub theme name must be a string. Received an ".concat(theme_manager_typeof(subThemeName)));
              return _context2.abrupt("return");
            case 7:
              if (!('object' !== theme_manager_typeof(value) || !Object.keys(value).length)) {
                _context2.next = 10;
                break;
              }
              logger/* default */.Z.warn("Could not set subTheme ".concat(subThemeName, ", value should be an object with properties. Received an ").concat(theme_manager_typeof(value)));
              return _context2.abrupt("return");
            case 10:
              globalTheme = this.getTheme();
              subTheme = this._processTheme.call(this, [globalTheme, value]);
              if (!(subTheme.font && subTheme.font.length)) {
                _context2.next = 15;
                break;
              }
              _context2.next = 15;
              return this._loadFonts(subTheme.font);
            case 15:
              this._setCache("subTheme".concat(subThemeName), {
                original: value,
                result: subTheme
              });
              if (triggerUpdate) this._emit("themeUpdate".concat(subThemeName));
              return _context2.abrupt("return", subTheme);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function setSubTheme(_x2, _x3) {
        return _setSubTheme.apply(this, arguments);
      }
      return setSubTheme;
    }()
  }, {
    key: "_refreshSubThemes",
    value: function _refreshSubThemes() {
      var _this = this;
      // Triggered when global theme is updated
      _toConsumableArray(this._cache.keys()).forEach(function (key) {
        if ('string' === typeof key && isSubTheme(key)) {
          var cache = _this._cache.get(key);
          if (cache.original) _this.updateSubTheme(key.replace(/^subTheme/, ''), cache.original);
        }
      });
    }
  }, {
    key: "_loadFonts",
    value: function () {
      var _loadFonts2 = theme_manager_asyncToGenerator( /*#__PURE__*/theme_manager_regeneratorRuntime().mark(function _callee3(fontArray) {
        return theme_manager_regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fontLoader(fontArray);
            case 3:
              _context3.next = 8;
              break;
            case 5:
              _context3.prev = 5;
              _context3.t0 = _context3["catch"](0);
              logger/* default */.Z.error("Unable to load font: ".concat(_context3.t0));
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 5]]);
      }));
      function _loadFonts(_x4) {
        return _loadFonts2.apply(this, arguments);
      }
      return _loadFonts;
    }()
    /**
     * Merge values with current theme
     */
  }, {
    key: "updateTheme",
    value: (function () {
      var _updateTheme = theme_manager_asyncToGenerator( /*#__PURE__*/theme_manager_regeneratorRuntime().mark(function _callee4(themeConfig) {
        var value, currentTheme, theme;
        return theme_manager_regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (Array.isArray(themeConfig)) {
                value = merge.all(themeConfig);
              } else {
                value = themeConfig;
              }
              currentTheme = {};
              if (this._cache.has('theme')) {
                currentTheme = this._cache.get('theme');
              }
              this._clearCache();
              theme = this._processTheme.call(this, [currentTheme, value], value.extensions || currentTheme.extensions);
              this._setCache('theme', theme);
              if (!(theme.font && theme.font.length)) {
                _context4.next = 9;
                break;
              }
              _context4.next = 9;
              return this._loadFonts(theme.font);
            case 9:
              this._refreshSubThemes();
              if (value.extensions) this._emit('themeExtensionsUpdate');
              this._emit('themeUpdate'); // Notify components that an update cycle is required
              return _context4.abrupt("return", theme);
            case 13:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function updateTheme(_x5) {
        return _updateTheme.apply(this, arguments);
      }
      return updateTheme;
    }())
  }, {
    key: "_clearCache",
    value: function _clearCache() {
      var _this2 = this;
      // Clean up any base64 image that were converted to blobs using createObjectURL
      base64Cache.filter(function (image) {
        if (window.URL && typeof window.URL.revokeObjectURL === 'function') URL.revokeObjectURL(image);
        return false;
      });
      this._cache.forEach(function (value, key) {
        if ('string' !== typeof key || !isSubTheme(key)) {
          _this2._deleteCache(key);
        }
      });
      // Regenerate sub themes
      this._cache.forEach(function (value, key) {
        if ('string' === typeof key && isSubTheme(key)) {
          _this2.setSubTheme(key.replace('subTheme', ''), value.original, false); // Dont trigger the update...the parent theme will trigger
        }
      });
    }
  }, {
    key: "updateSubTheme",
    value: function () {
      var _updateSubTheme = theme_manager_asyncToGenerator( /*#__PURE__*/theme_manager_regeneratorRuntime().mark(function _callee5(subThemeName, value) {
        var triggerUpdate,
          globalTheme,
          currentTheme,
          subTheme,
          _args5 = arguments;
        return theme_manager_regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              triggerUpdate = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : true;
              if (subThemeName) {
                _context5.next = 4;
                break;
              }
              logger/* default */.Z.warn('Sub theme name not specified');
              return _context5.abrupt("return");
            case 4:
              if (!('object' !== theme_manager_typeof(value) || !Object.keys(value).length)) {
                _context5.next = 7;
                break;
              }
              logger/* default */.Z.warn("Could not update subTheme ".concat(subThemeName, " due to invalid value"));
              return _context5.abrupt("return");
            case 7:
              globalTheme = this.getTheme();
              currentTheme = {};
              if (this._cache.has("subTheme".concat(subThemeName))) {
                currentTheme = this._cache.get("subTheme".concat(subThemeName)).original;
              }
              subTheme = this._processTheme.call(this, [globalTheme, currentTheme, value]);
              if (!(subTheme.font && subTheme.font.length)) {
                _context5.next = 14;
                break;
              }
              _context5.next = 14;
              return this._loadFonts(subTheme.font);
            case 14:
              this._setCache("subTheme".concat(subThemeName), {
                original: (0,utils/* clone */.d9)(currentTheme, value),
                result: subTheme
              });
              if (triggerUpdate) this._emit("themeUpdate".concat(subThemeName));
              return _context5.abrupt("return", subTheme);
            case 17:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function updateSubTheme(_x6, _x7) {
        return _updateSubTheme.apply(this, arguments);
      }
      return updateSubTheme;
    }()
  }, {
    key: "removeSubTheme",
    value: function removeSubTheme(subThemeName) {
      if (this._cache.has("subTheme".concat(subThemeName))) {
        this._deleteCache("subTheme".concat(subThemeName));
      }
      this._emit("themeUpdate".concat(subThemeName));
    }
  }, {
    key: "_getComponentUUID",
    value: function _getComponentUUID(id) {
      return "componentStyle".concat(id);
    }
  }, {
    key: "_processTheme",
    value: function _processTheme() {
      var themeArray = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var extensions = arguments.length > 1 ? arguments[1] : undefined;
      if (!Array.isArray(themeArray)) {
        throw new Error("context processTheme expected an array. Received ".concat(theme_manager_typeof(themeArray)));
      }
      var theme = merge.all([ui_components_theme_base].concat(_toConsumableArray(themeArray)));

      // Parse all colors in theme
      var themeFunctions = {};
      var themeString = JSON.stringify(theme, function (key, originalValue) {
        var value = originalValue;
        // Replacer
        if (value && theme_manager_typeof(value) === 'object') {
          var replacement = originalValue;
          for (var k in value) {
            if (Object.hasOwnProperty.call(value, k) && THEME_KEY_REPLACER[k]) {
              replacement[k && THEME_KEY_REPLACER[k]] = value[k];
              delete replacement[k]; // Removes the original key that was replaced. example: fontFamily is replaced by fontFace so fontFamily is removed from the theme
            }
          }
          value = replacement;
        }
        // Base64 encoded values can cause memory leaks convert to an image
        var _checkBase64EncodedIm = checkBase64EncodedImage(value),
          isImage = _checkBase64EncodedIm.isImage,
          mimeType = _checkBase64EncodedIm.mimeType;
        if (window.URL && typeof window.URL.createObjectURL === 'function' && isImage) {
          // base64Cache
          try {
            var blobURL = base64ToBlobURL(value, mimeType);
            base64Cache.push(blobURL);
            return blobURL;
          } catch (error) {
            return value;
          }
        }
        if (Array.isArray(value) && 2 === value.length && !value[0].targetComponent && value[0].length && value[0].substr(0, 1) === '#') {
          // Better check to filter out extensions?
          return (0,utils/* getHexColor */.Xv)(value[0], value[1]);
        } else if ('extensions' === key || 'function' === typeof value || 'object' === theme_manager_typeof(value) && value !== null && 'Object' !== value.constructor.name && !Array.isArray(value)) {
          // Functions will not stringify, they will be merged after
          themeFunctions[key] = value;
          return;
        } else if ('string' === typeof value && value.includes('theme.')) {
          var themeValue = (0,utils/* getValFromObjPath */.nB)({
            theme: theme
          }, value);
          if (themeValue) {
            return themeValue;
          } else {
            return value;
          }
        } else {
          var validColor = (0,utils/* getValidColor */.C2)(value);
          if (validColor) {
            return validColor;
          }
          return value;
        }
      });
      return _objectSpread(_objectSpread(_objectSpread({}, JSON.parse(themeString)), themeFunctions), {}, {
        extensions: extensions
      });
    }
  }]);
  return ThemeManager;
}();
var themeManagerInstance = new ThemeManager();

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js
function context_typeof(o) { "@babel/helpers - typeof"; return context_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, context_typeof(o); }
function context_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function context_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, context_toPropertyKey(descriptor.key), descriptor); } }
function context_createClass(Constructor, protoProps, staticProps) { if (protoProps) context_defineProperties(Constructor.prototype, protoProps); if (staticProps) context_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function context_toPropertyKey(t) { var i = context_toPrimitive(t, "string"); return "symbol" == context_typeof(i) ? i : String(i); }
function context_toPrimitive(t, r) { if ("object" != context_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != context_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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







/**
 * Class to create a context object. Context is a singleton that will hold settings and logic to be used across all Lightning UI components.
 */

/**
 * @typedef ThemeObject
 * @type {any}
 */
var Context = /*#__PURE__*/function () {
  function Context() {
    context_classCallCheck(this, Context);
  }
  context_createClass(Context, [{
    key: "theme",
    get:
    /**
     * @type {ThemeObject}
     */
    function get() {
      return themeManagerInstance.getTheme();
    }
    /**
     * theme cannot be set directly
     */,
    set: function set(value) {
      logger/* default */.Z.warn('Context.theme must be set using context.setTheme or context.updateTheme');
    }
    /**
     * @type {object}
     */
  }, {
    key: "keyMetricsCallback",
    get: function get() {
      return metricsInstance.keyMetricsCallback;
    }
    /**
     * keyMetricsCallback cannot be set directly
     */,
    set: function set(value) {
      logger/* default */.Z.warn('Context.keyMetricsCallback must be set using context.setKeyMetricsCallback');
    }
    /**
     * @type {boolean}
     */
  }, {
    key: "debug",
    get: function get() {
      return logger/* default */.Z.debug;
    },
    set: function set(value) {
      logger/* default */.Z.debug = value;
    }
    /**
     * @type {function}
     * @param {string} name
     * @param {function} callback
     */
  }, {
    key: "on",
    value: function on() {
      return events.on.apply(events, arguments);
    }
    /**
     * @type {function}
     */
  }, {
    key: "off",
    value: function off() {
      return events.off.apply(events, arguments);
    }
    /**
     * @type {function}
     * @param {string} name
     * @param {string|object|number|boolean} payload
     */
  }, {
    key: "emit",
    value: function emit() {
      return events.emit.apply(events, arguments);
    }
    /**
     * @property {function}
     * @return {void}
     */
  }, {
    key: "log",
    value: function log() {
      logger/* default */.Z.log.apply(logger/* default */.Z, arguments);
    }
    /**
     * @property {function}
     * @return {void}
     */
  }, {
    key: "info",
    value: function info() {
      logger/* default */.Z.info.apply(logger/* default */.Z, arguments);
    }
    /**
     * @property {function}
     * @return {void}
     */
  }, {
    key: "warn",
    value: function warn() {
      logger/* default */.Z.warn.apply(logger/* default */.Z, arguments);
    }
    /**
     * @property {function}
     * @return {void}
     */
  }, {
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      logger/* default */.Z.error(args);
    }
    /**
     * @property {object|array}
     * @return {object}
     */
  }, {
    key: "setTheme",
    value: function setTheme(value) {
      return themeManagerInstance.setTheme(value);
    }
    /**
     * @property {object|array}}
     * @return {object}
     */
  }, {
    key: "updateTheme",
    value: function updateTheme(value) {
      return themeManagerInstance.updateTheme(value);
    }
    /**
     * @property {string}
     * @return {object}
     */
  }, {
    key: "getSubTheme",
    value: function getSubTheme(subThemeName) {
      return themeManagerInstance.getSubTheme(subThemeName);
    }
    /**
     * Expects an object where properties are child theme names. Values will be merged with the global themeManager.
     * @property {object}
     */
  }, {
    key: "setSubThemes",
    value: function setSubThemes(subThemesObj) {
      if ('object' !== context_typeof(subThemesObj)) {
        logger/* default */.Z.warn('subThemes must be an object');
        return;
      }
      for (var subTheme in subThemesObj) {
        themeManagerInstance.setSubTheme(subTheme, subThemesObj[subTheme]);
      }
    }
    /**
     * @property {string}
     * @return {object}
     */
  }, {
    key: "setSubTheme",
    value: function setSubTheme(subThemeName, value) {
      return themeManagerInstance.setSubTheme(subThemeName, value);
    }
    /**
     * @property {string}
     * @return {object}
     */
  }, {
    key: "updateSubTheme",
    value: function updateSubTheme(subThemeName, value) {
      return themeManagerInstance.updateSubTheme(subThemeName, value);
    }
    /**
     * @property {string}
     * @return {void}
     */
  }, {
    key: "removeSubTheme",
    value: function removeSubTheme(subThemeName) {
      themeManagerInstance.removeSubTheme(subThemeName);
    }
    /**
     * @property {function}
     * @return {void}
     */
  }, {
    key: "setLogCallback",
    value: function setLogCallback(value) {
      logger/* default */.Z.logCallback = value;
    }
    /**
     * @property {function}
     * @return {void}
     */
  }, {
    key: "setKeyMetricsCallback",
    value: function setKeyMetricsCallback(value) {
      metricsInstance.keyMetricsCallback = value;
    }
    /**
     * @property {function}
     * @return {object}
     */
  }, {
    key: "config",
    value: function config() {
      var _config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var configKeys = Object.keys(_config);
      for (var i = 0; i < configKeys.length; i++) {
        var setMethod = this['set' + (0,utils/* capitalizeFirstLetter */.fm)(configKeys[i])];
        if (setMethod) {
          setMethod(_config[configKeys[i]]);
        }
      }
      return this;
    }
  }]);
  return Context;
}();
var contextInstance = new Context();


/***/ }),

/***/ "../../@lightningjs/ui-components/src/globals/context/logger.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ loggerInstance)
/* harmony export */ });
/* unused harmony export Logger */
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
    this._logCallback = undefined;
    this._prefix = 'LightningUI';
    this._debug = false;
  }
  _createClass(Logger, [{
    key: "debug",
    get: function get() {
      return this._debug;
    },
    set: function set(value) {
      this._debug = Boolean(value);
    }
  }, {
    key: "logCallback",
    get: function get() {
      return this._logCallback;
    },
    set: function set(value) {
      if ('function' !== typeof value) {
        this.warn("logCallback value must be a function, instead received ".concat(_typeof(value)));
        return;
      }
      this._logCallback = value;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (this._logCallback) {
        this._logCallback({
          level: 'log',
          payload: args
        });
      }
      if (this.debug) {
        var _console;
        // eslint-disable-next-line
        (_console = console).log.apply(_console, [this._prefix].concat(args));
      }
    }
  }, {
    key: "info",
    value: function info() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (this._logCallback) {
        this._logCallback({
          level: 'info',
          payload: args
        });
      }
      if (this.debug) {
        var _console2;
        // eslint-disable-next-line
        (_console2 = console).info.apply(_console2, [this._prefix].concat(args));
      }
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (this._logCallback) {
        this._logCallback({
          level: 'warn',
          payload: args
        });
      }
      if (this.debug) {
        var _console3;
        (_console3 = console).warn.apply(_console3, [this._prefix].concat(args));
      }
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      if (this._logCallback) {
        this._logCallback({
          level: 'error',
          payload: args
        });
      }
      if (this.debug) {
        var _console4;
        (_console4 = console).error.apply(_console4, [this._prefix].concat(args));
      }
    }
  }]);
  return Logger;
}();
var loggerInstance = new Logger();


/***/ }),

/***/ "../../@lightningjs/ui-components/src/globals/global-update-manager/GlobalUpdateManager.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ updateManager)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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


var GlobalUpdateManager = /*#__PURE__*/function () {
  function GlobalUpdateManager() {
    _classCallCheck(this, GlobalUpdateManager);
    this._updateThemeSet = new Set();
    this._requestUpdateSet = new Set();
    this._timeout = null;
    this._runUpdatesTimeoutHandler = this._runUpdatesTimeoutHandler.bind(this);
  }
  _createClass(GlobalUpdateManager, [{
    key: "_runUpdatesTimeoutHandler",
    value: function _runUpdatesTimeoutHandler() {
      this._timeout = null;
      this._updateThemeSet.forEach(function (component) {
        try {
          component._updateThemeComponent();
        } catch (e) {
          _context__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error('Error updating component themes', e);
        }
      });
      this._updateThemeSet.clear();
      this._requestUpdateSet.forEach(function (component) {
        try {
          component.requestUpdate();
        } catch (e) {
          _context__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.error('Error updating component', e);
        }
      });
      this._requestUpdateSet.clear();
    }

    /**
     * Force all updates now
     *
     * @returns
     */
  }, {
    key: "flush",
    value: function flush() {
      // If there is no timeout then there is definately nothing to update
      if (!this._timeout) return;
      clearTimeout(this._timeout);
      this._runUpdatesTimeoutHandler();
    }
  }, {
    key: "addUpdateTheme",
    value: function addUpdateTheme(component) {
      this._updateThemeSet.add(component);
      if (!this._timeout) {
        this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
      }
    }
  }, {
    key: "deleteUpdateTheme",
    value: function deleteUpdateTheme(component) {
      // Don't bother checking and clearing the timeout if one is active
      // Not worth the overhead. More than likely it needs to run again anyway.
      this._updateThemeSet["delete"](component);
    }
  }, {
    key: "addRequestUpdate",
    value: function addRequestUpdate(component) {
      this._requestUpdateSet.add(component);
      if (!this._timeout) {
        this._timeout = setTimeout(this._runUpdatesTimeoutHandler, 0);
      }
    }
  }, {
    key: "deleteRequestUpdate",
    value: function deleteRequestUpdate(component) {
      // See note in deleteRequestUpdate()
      this._requestUpdateSet["delete"](component);
    }
  }, {
    key: "hasQueuedRequestFor",
    value: function hasQueuedRequestFor(component) {
      return this._requestUpdateSet.has(component);
    }
  }]);
  return GlobalUpdateManager;
}();
var updateManager = new GlobalUpdateManager();

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withAnnouncer/Speech.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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

/* global SpeechSynthesisErrorEvent */
function flattenStrings() {
  var series = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var flattenedSeries = [];
  for (var i = 0; i < series.length; i++) {
    if (typeof series[i] === 'string' && !series[i].includes('PAUSE-')) {
      flattenedSeries.push(series[i]);
    } else {
      break;
    }
  }
  // add a "word boundary" to ensure the Announcer doesn't automatically try to
  // interpret strings that look like dates but are not actually dates
  // for example, if "Rising Sun" and "1993" are meant to be two separate lines,
  // when read together, "Sun 1993" is interpretted as "Sunday 1993"
  return [flattenedSeries.join(',\b ')].concat(series.slice(i));
}
function delay(pause) {
  return new Promise(function (resolve) {
    setTimeout(resolve, pause);
  });
}

/**
 * Speak a string
 *
 * @param {string} phrase Phrase to speak
 * @param {SpeechSynthesisUtterance[]} utterances An array which the new SpeechSynthesisUtterance instance representing this utterance will be appended
 * @return {Promise<void>} Promise resolved when the utterance has finished speaking, and rejected if there's an error
 */
function speak(phrase, utterances) {
  var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var synth = window.speechSynthesis;
  return new Promise(function (resolve, reject) {
    var utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = lang;
    utterance.onend = function () {
      resolve();
    };
    utterance.onerror = function (e) {
      reject(e);
    };
    utterances.push(utterance);
    synth.speak(utterance);
  });
}
function speakSeries(series, lang) {
  var root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var synth = window.speechSynthesis;
  var remainingPhrases = flattenStrings(Array.isArray(series) ? series : [series]);
  var nestedSeriesResults = [];
  /*
    We hold this array of SpeechSynthesisUtterances in order to prevent them from being
    garbage collected prematurely on STB hardware which can cause the 'onend' events of
    utterances to not fire consistently.
  */
  var utterances = [];
  var active = true;
  var seriesChain = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var phrase, pause, totalRetries, retriesLeft, seriesResult, _seriesResult;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
        case 1:
          if (!(active && remainingPhrases.length)) {
            _context.next = 62;
            break;
          }
          _context.next = 4;
          return Promise.resolve(remainingPhrases.shift());
        case 4:
          phrase = _context.sent;
          if (active) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("break", 62);
        case 9:
          if (!(typeof phrase === 'string' && phrase.includes('PAUSE-'))) {
            _context.next = 16;
            break;
          }
          // Pause it
          pause = phrase.split('PAUSE-')[1] * 1000;
          if (isNaN(pause)) {
            pause = 0;
          }
          _context.next = 14;
          return delay(pause);
        case 14:
          _context.next = 60;
          break;
        case 16:
          if (!(typeof phrase === 'string' && phrase.length)) {
            _context.next = 48;
            break;
          }
          // Speak it
          totalRetries = 3;
          retriesLeft = totalRetries;
        case 19:
          if (!(active && retriesLeft > 0)) {
            _context.next = 46;
            break;
          }
          _context.prev = 20;
          _context.next = 23;
          return speak(phrase, utterances, lang);
        case 23:
          retriesLeft = 0;
          _context.next = 44;
          break;
        case 26:
          _context.prev = 26;
          _context.t0 = _context["catch"](20);
          if (!(_context.t0 instanceof SpeechSynthesisErrorEvent)) {
            _context.next = 43;
            break;
          }
          if (!(_context.t0.error === 'network')) {
            _context.next = 36;
            break;
          }
          retriesLeft--;
          console.warn("Speech synthesis network error. Retries left: ".concat(retriesLeft));
          _context.next = 34;
          return delay(500 * (totalRetries - retriesLeft));
        case 34:
          _context.next = 41;
          break;
        case 36:
          if (!(_context.t0.error === 'canceled' || _context.t0.error === 'interrupted')) {
            _context.next = 40;
            break;
          }
          // Cancel or interrupt error (ignore)
          retriesLeft = 0;
          _context.next = 41;
          break;
        case 40:
          throw new Error("SpeechSynthesisErrorEvent: ".concat(_context.t0.error));
        case 41:
          _context.next = 44;
          break;
        case 43:
          throw _context.t0;
        case 44:
          _context.next = 19;
          break;
        case 46:
          _context.next = 60;
          break;
        case 48:
          if (!(typeof phrase === 'function')) {
            _context.next = 55;
            break;
          }
          seriesResult = speakSeries(phrase(), lang, false);
          nestedSeriesResults.push(seriesResult);
          _context.next = 53;
          return seriesResult.series;
        case 53:
          _context.next = 60;
          break;
        case 55:
          if (!Array.isArray(phrase)) {
            _context.next = 60;
            break;
          }
          // Speak it (recursively)
          _seriesResult = speakSeries(phrase, lang, false);
          nestedSeriesResults.push(_seriesResult);
          _context.next = 60;
          return _seriesResult.series;
        case 60:
          _context.next = 1;
          break;
        case 62:
          _context.prev = 62;
          active = false;
          return _context.finish(62);
        case 65:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0,, 62, 65], [20, 26]]);
  }))();
  return {
    series: seriesChain,
    get active() {
      return active;
    },
    append: function append(toSpeak) {
      remainingPhrases.push(toSpeak);
    },
    cancel: function cancel() {
      if (!active) {
        return;
      }
      if (root) {
        synth.cancel();
      }
      nestedSeriesResults.forEach(function (nestedSeriesResults) {
        nestedSeriesResults.cancel();
      });
      active = false;
    }
  };
}
var currentSeries;
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(toSpeak, lang) {
  currentSeries && currentSeries.cancel();
  currentSeries = speakSeries(toSpeak, lang);
  return currentSeries;
}

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withAnnouncer/abbreviations.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   e5: () => (/* binding */ translateAbbrev),
/* harmony export */   mw: () => (/* binding */ defaultAbbrevConfig)
/* harmony export */ });
/* unused harmony export generateAbbrevConfig */
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

// Don't wrap patterns with word boundaries (\b) or set any RegExp flags.
// Each pattern will be wrapped with \b and use the global (g) flag when created as a capture group in combined pattern.
var defaultAbbreviations = [{
  pattern: 'TV-14',
  replacer: 'Rated TV-14'
}, {
  pattern: 'CC',
  replacer: 'Closed Captions available'
}, {
  pattern: 'HD',
  replacer: 'High Definition available'
}, {
  pattern: /ENG(?!\+)/,
  replacer: 'English Available'
}, {
  pattern: /ENG\+ES/,
  replacer: 'Available in English and Spanish'
}, {
  pattern: 'AD',
  replacer: 'Audio Description available'
}, {
  pattern: 'RT',
  replacer: 'Rotten Tomatoes'
}, {
  pattern: /(S)+(\d+)+(E)+(\d+)+/,
  replacer: function replacer(match, p1, p2, p3, p4) {
    return "Season ".concat(p2, " Episode ").concat(p4);
  }
}];
var defaultAbbrevConfig = generateAbbrevConfig(defaultAbbreviations);
function wrapWithBoundary(str) {
  return "\\b".concat(str, "\\b");
}
function getNumberOfCaptureGroups(regExp) {
  return new RegExp(regExp.toString() + '|').exec('').length - 1;
}

/**
 * @typedef {object} AbbreviationConfig
 * @property {object} abbreviationsPattern - combined RegExp pattern of all abbreviations separated into capture groups
 * @property {object} stringPatternMap - object to look up replacers values based on string matches (uses matched string to look up)
 * @property {object} regExpPatternMap - object to look up replacers values based on RegExp matches (uses index of matched capture group to look up)
 */

/**
 * Generates abbreviation config object to be passed to withAnnouncer for abbreviation translation
 * @param {object[]} abbreviations - array of custom abbreviation objects to generate config off of
 * @param {string|object} abbreviations[].pattern - pattern to match abbreviation
 * @param {string|function} abbreviations[].replacer - string or RegEx replacer function to replace matched abbreviation with
 * @param {boolean} extendDefault - if true, extend the default abbreviations config with custom abbreviations
 * @returns {AbbreviationConfig} - configuration that may be passed to withAnnouncer as abbreviations in options parameter
 */
function generateAbbrevConfig() {
  var abbreviations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAbbreviations;
  var extendDefault = arguments.length > 1 ? arguments[1] : undefined;
  var abbrev = extendDefault ? [].concat(defaultAbbreviations, _toConsumableArray(abbreviations)) : abbreviations;
  var stringPatternMap = {}; // map of exact strings to the associated replacer
  var regExpPatternMap = {}; // map of RegExp patterns to the associated replacer
  var abbreviationsPattern = ''; // string of final RegExp pattern with each pattern as a capture group
  var patternGroupOffset = 0; // incremented for each capture group found in RegExp patterns passed in

  // If the pattern is a RegExp pattern: key RegExp pattern with its index in passed in abbreviations array parameter.
  // The capture group for this pattern will be at this position (idx) in the combined RegExp pattern.
  // When a string is matched, the index of the matched capture group can be used to look up the correct replacer.
  //
  // Else (the pattern is a string): it can be keyed by it's pattern.
  // When a string is matched, the string matcher can be used to look up the correct replacer.
  abbrev.forEach(function (_ref, idx) {
    var pattern = _ref.pattern,
      replacer = _ref.replacer;
    var stringPattern;
    if (pattern instanceof RegExp) {
      var patternMapIdx = idx + patternGroupOffset;
      regExpPatternMap[patternMapIdx] = {
        pattern: pattern,
        replacer: replacer
      };
      stringPattern = wrapWithBoundary(pattern.source);
      patternGroupOffset += getNumberOfCaptureGroups(pattern);
    } else {
      stringPatternMap[pattern] = {
        replacer: replacer
      };
      stringPattern = wrapWithBoundary(pattern);
    }

    // create single string for final RegExp - each pattern will be a capture group
    abbreviationsPattern = abbreviationsPattern === '' ? "(".concat(stringPattern, ")") : "".concat(abbreviationsPattern, "|(").concat(stringPattern, ")");
  });
  abbreviationsPattern = new RegExp(abbreviationsPattern, 'g');
  return {
    abbreviationsPattern: abbreviationsPattern,
    stringPatternMap: stringPatternMap,
    regExpPatternMap: regExpPatternMap
  };
}

/**
 * Translates abbreviations in a string into their associated words
 * @param {string} phrase - phrase to be translated
 * @param {object} - abbreviationsPattern, stringPatternMap and regExpPatternMap
 * @returns {string} - phrase where abbreviations have been replaced with words
 */
var translateAbbrev = function translateAbbrev(phrase, translationConfig) {
  var abbreviationsPattern = translationConfig.abbreviationsPattern,
    stringPatternMap = translationConfig.stringPatternMap,
    regExpPatternMap = translationConfig.regExpPatternMap;
  var translated = phrase.replace(abbreviationsPattern, function (matched) {
    // replace exact string match with replacement string
    if (stringPatternMap[matched]) {
      return stringPatternMap[matched].replacer;
    }

    // else match was found using a more complex RegExp pattern
    // find replacer by index of matching capture group
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var patternIdx = args.findIndex(function (arg) {
      return !!arg;
    });
    var _regExpPatternMap$pat = regExpPatternMap[patternIdx],
      pattern = _regExpPatternMap$pat.pattern,
      replacer = _regExpPatternMap$pat.replacer;

    // replace matched string with replacer string
    if (typeof replacer === 'string') {
      return replacer;
    }

    // use replace again for replacer function it can utilize substring matches in its scope
    if (typeof replacer === 'function') {
      return matched.replace(pattern, replacer);
    }
  });
  return translated;
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withAnnouncer/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (/* binding */ withAnnouncer)
/* harmony export */ });
/* harmony import */ var _Speech_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/Speech.js");
/* harmony import */ var _abbreviations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/abbreviations.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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





var fiveMinutes = 300 * 1000;
function elmName(elm) {
  return elm.ref || elm.constructor.name;
}
var defaultOptions = {
  voiceOutDelay: 500,
  abbreviationsConfig: {}
};
function withAnnouncer(Base) {
  var speak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _Speech_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z;
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var announcerOptions = _objectSpread(_objectSpread({}, defaultOptions), options);
  return /*#__PURE__*/function (_Base) {
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_construct",
      value: function _construct() {
        this._announceEndedTimeout;
        this._currentlySpeaking = '';
      }
    }, {
      key: "_voiceOut",
      value: function _voiceOut(toAnnounce) {
        var _this = this;
        if (this._voiceOutDisabled) {
          return;
        }
        var toSpeak = toAnnounce;
        if (announcerOptions.abbreviationsConfig.abbreviationsPattern) {
          toSpeak = Array.isArray(toAnnounce) ? toAnnounce.map(function (phrase) {
            return (0,_abbreviations_js__WEBPACK_IMPORTED_MODULE_1__/* .translateAbbrev */ .e5)(phrase, announcerOptions.abbreviationsConfig);
          }) : (0,_abbreviations_js__WEBPACK_IMPORTED_MODULE_1__/* .translateAbbrev */ .e5)(toAnnounce, announcerOptions.abbreviationsConfig);
        }
        var speech = speak(toSpeak, options.language);
        // event using speech synthesis api promise
        if (speech && speech.series) {
          speech.series.then(function () {
            _this.stage.emit('announceEnded');
          });
        }

        // event in case speech synthesis api is flakey,
        // assume the ammount of time it takes to read each word
        var toAnnounceStr = Array.isArray(toSpeak) ? toSpeak.concat().join(' ') : toSpeak;
        var toAnnounceWords = toAnnounceStr.split(' ');
        var timeoutDelay = toAnnounceWords.length * announcerOptions.voiceOutDelay;
        clearTimeout(this._announceEndedTimeout);
        this._announceEndedTimeout = setTimeout(function () {
          _this.stage.emit('announceTimeoutEnded');
        }, timeoutDelay);
        return speech;
      }
    }, {
      key: "_build",
      value: function _build() {
        var _this2 = this;
        _get(_getPrototypeOf(_class.prototype), "_build", this) && _get(_getPrototypeOf(_class.prototype), "_build", this).call(this);
        this._debounceAnnounceFocusChanges = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .debounce */ .Ds)(this._announceFocusChanges.bind(this), Number.isInteger(this.announcerFocusDebounce) ? this.announcerFocusDebounce : 400);
        this.announcerTimeout = Number.isInteger(this.announcerTimeout) ? this.announcerTimeout : fiveMinutes;
        this._resetFocusTimer = (0,_utils__WEBPACK_IMPORTED_MODULE_2__/* .debounce */ .Ds)(function () {
          // Reset focus path for full announce
          _this2._lastFocusPath = undefined;
        }, this.announcerTimeout);
      }
    }, {
      key: "_firstEnable",
      value: function _firstEnable() {
        _get(_getPrototypeOf(_class.prototype), "_firstEnable", this) && _get(_getPrototypeOf(_class.prototype), "_firstEnable", this).call(this);

        // Lightning only calls Focus Change on second focus
        this._focusChange();
      }
    }, {
      key: "_disable",
      value: function _disable() {
        clearTimeout(this._announceEndedTimeout);
        this.stage.emit('announceEnded');
        this.stage.emit('announceTimeoutEnded');
      }
    }, {
      key: "announcerEnabled",
      get: function get() {
        return this._announcerEnabled;
      },
      set: function set(val) {
        this._announcerEnabled = val;
        this._focusChange();
      }
    }, {
      key: "_focusChange",
      value: function _focusChange() {
        if (!this._resetFocusTimer) {
          return;
        }
        this._resetFocusTimer();
        this.$announcerCancel();
        this._debounceAnnounceFocusChanges();
      }
    }, {
      key: "_announceFocusChanges",
      value: function _announceFocusChanges() {
        var focusPath = this.application.focusPath || [];
        var lastFocusPath = this._lastFocusPath || [];
        var loaded = focusPath.every(function (elm) {
          return !elm.loading;
        });
        var focusDiff = focusPath.filter(function (elm) {
          return !lastFocusPath.includes(elm);
        });
        if (!loaded) {
          this._debounceAnnounceFocusChanges();
          return;
        }
        this._lastFocusPath = focusPath.slice(0);
        // Provide hook for focus diff for things like TextBanner
        this.focusDiffHook = focusDiff;
        if (!this.announcerEnabled) {
          return;
        }
        var toAnnounce = focusDiff.reduce(function (acc, elm) {
          if (elm.announce) {
            acc.push([elmName(elm), 'Announce', elm.announce]);
          } else if (elm.title) {
            acc.push([elmName(elm), 'Title', elm.title || '']);
          }
          return acc;
        }, []);
        focusDiff.reverse().reduce(function (acc, elm) {
          if (elm.announceContext) {
            acc.push([elmName(elm), 'Context', elm.announceContext]);
          } else {
            acc.push([elmName(elm), 'No Context', '']);
          }
          return acc;
        }, toAnnounce);
        if (this.debug) {
          console.table(toAnnounce);
        }
        toAnnounce = toAnnounce.reduce(function (acc, a) {
          var txt = a[2];
          txt && acc.push(txt);
          return acc;
        }, []);
        if (toAnnounce.length) {
          this.$announcerCancel();
          this._currentlySpeaking = this._voiceOut(toAnnounce.reduce(function (acc, val) {
            return acc.concat(val);
          }, []));
        }
      }
    }, {
      key: "$announce",
      value: function $announce(toAnnounce) {
        var _this3 = this;
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$append = _ref.append,
          append = _ref$append === void 0 ? false : _ref$append,
          _ref$notification = _ref.notification,
          notification = _ref$notification === void 0 ? false : _ref$notification;
        if (!toAnnounce || !toAnnounce.trim().length) {
          return;
        }
        if (this.announcerEnabled) {
          this._debounceAnnounceFocusChanges.flush();
          if (append && this._currentlySpeaking && this._currentlySpeaking.active) {
            this._currentlySpeaking.append(toAnnounce);
          } else {
            this.$announcerCancel();
            this._currentlySpeaking = this._voiceOut(toAnnounce);
          }
          if (notification) {
            this._voiceOutDisabled = true;
            this._currentlySpeaking.series["finally"](function () {
              _this3._voiceOutDisabled = false;
              _this3.$announcerRefresh();
            });
          }
        }
      }
    }, {
      key: "$announcerCancel",
      value: function $announcerCancel() {
        this._currentlySpeaking && this._currentlySpeaking.cancel();
      }
    }, {
      key: "$announcerRefresh",
      value: function $announcerRefresh(depth) {
        if (depth) {
          this._lastFocusPath = this._lastFocusPath.slice(0, depth);
        } else {
          this._lastFocusPath = undefined;
        }
        this._resetFocusTimer();
        this._focusChange();
      }
    }]);
    return _class;
  }(Base);
}

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withHandleKey/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ withHandleKey)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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


function withHandleKey(Base) {
  return /*#__PURE__*/function (_Base) {
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_handleKey",
      value: function _handleKey(keyEvent) {
        return this._processEvent(keyEvent);
      }
    }, {
      key: "_handleKeyRelease",
      value: function _handleKeyRelease(keyEvent) {
        return this._processEvent(keyEvent, 'Release');
      }
    }, {
      key: "_processEvent",
      value: function _processEvent(keyEvent) {
        var suffix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var keyMap = this.stage.application.__keymap || {};
        var key = keyMap[keyEvent.keyCode];
        if (!key) {
          key = keyEvent.key;
        }
        if (key && typeof this["on".concat(key).concat(suffix)] === 'function') {
          this._invokeKeyPayloadCallback(key + suffix);
          return this["on".concat(key).concat(suffix)].call(this, this, keyEvent);
        }
        return false;
      }
    }, {
      key: "_invokeKeyPayloadCallback",
      value: function _invokeKeyPayloadCallback(key) {
        if (this.metricsPayload && typeof _globals__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.keyMetricsCallback === 'function') {
          _globals__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.keyMetricsCallback(key, this.metricsPayload);
        }
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }]);
    return _class;
  }(Base);
}

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withTags/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ withTags)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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

function getPropertyDescriptor(path) {
  return {
    get: function get() {
      return this.tag(path);
    },
    configurable: true,
    enumerable: true
  };
}
function withTags(Base) {
  return /*#__PURE__*/function (_Base) {
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_construct",
      value: function _construct() {
        var prototype = Object.getPrototypeOf(this);
        if (!prototype._withTagsInitialized) {
          var tags = this.constructor.tags || [];
          tags.forEach(function (tag) {
            if (_typeof(tag) === 'object') {
              var name = tag.name,
                path = tag.path;
            } else {
              var name = tag; // eslint-disable-line no-redeclare
              var path = tag; // eslint-disable-line no-redeclare
            }
            var key = '_' + name;
            var descriptor = getPropertyDescriptor(path);
            Object.defineProperty(prototype, key, descriptor);
          });
          prototype._withTagsInitialized = true;
        }
        _get(_getPrototypeOf(_class.prototype), "_construct", this) && _get(_getPrototypeOf(_class.prototype), "_construct", this).call(this);
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }]);
    return _class;
  }(Base);
}

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withThemeStyles/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ withThemeStyles)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/logger.js
var logger = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/logger.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withThemeStyles/utils.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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




/**
Given a character, return its ASCII value multiplied by its position.
 *
@param {string} char - The character to process.
@param {number} index - The position of the character in the string.
@returns {number} - The ASCII value of the character multiplied by its position.
 */
var getCharacterValue = function getCharacterValue(_char, index) {
  return _char.charCodeAt(0) * (index + 1);
};

/**
 * Recursively sorts an object by its keys. If an object has nested objects as values,
 * it will sort those nested objects as well.
 *
 * @param {Object} obj - The object to be sorted.
 * @returns {Object} A new object that is a sorted version of the input object.
 */
var sortObject = function sortObject(obj) {
  var sortedObj = {};
  Object.keys(obj).sort().forEach(function (key) {
    if (_typeof(obj[key]) === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      sortedObj[key] = sortObject(obj[key]); // Recursive call for nested objects
    } else {
      sortedObj[key] = obj[key];
    }
  });
  return sortedObj;
};

/**
Given an object, return a sum of the ASCII values of all characters in its
JSON stringified representation, each multiplied by its position.
*
@param {object} obj - The object to process.
@returns {number} - The sum of ASCII values, each multiplied by its position.
*/
var getCharacterSum = function getCharacterSum(obj) {
  var sortedObj = sortObject(obj);
  var str = JSON.stringify(sortedObj).replace(/[{}:",\s]/g, ''); // Remove brackets, colons, and whitespace
  var sum = 0;
  for (var i = 0; i < str.length; i++) {
    sum += getCharacterValue(str[i], i);
  }
  return sum;
};

/**
Given an object, return a "hash" of the object, which is a combination of
the length of its JSON stringified representation and the sum of the ASCII
values of all characters in that string, each multiplied by its position.
*
@param {object} obj - The object to process.
@returns {string} - The hash of the object.
*/
var getHash = function getHash(obj) {
  var str = JSON.stringify(obj);
  return str.length + '-' + getCharacterSum(obj);
};

/**
 * Recursively executes functions within an object or array structure, passing them a given context.
 * @param {Function|Object|Array} objOrFunction - The object, array, or function to process.
 * @param {*} theme - The context to pass to any encountered functions.
 * @returns {*} The processed structure with functions executed.
 */
function executeWithContextRecursive(objOrFunction, theme) {
  if (typeof objOrFunction === 'function') {
    // If the input is a function, execute it with the theme as a parameter
    var result = objOrFunction(theme);
    return executeWithContextRecursive(result, theme);
  } else if (Array.isArray(objOrFunction)) {
    // If the input is an array, iterate through its elements and apply the function recursively.
    return objOrFunction.map(function (item) {
      return executeWithContextRecursive(item, theme);
    });
  } else if (_typeof(objOrFunction) === 'object' && objOrFunction !== null) {
    // If the input is an object (and not null), iterate through its properties and apply the function recursively.
    var _result = {};
    for (var key in objOrFunction) {
      if (objOrFunction.hasOwnProperty(key)) {
        _result[key] = executeWithContextRecursive(objOrFunction[key], theme);
      }
    }
    return _result;
  } else {
    // Return the value as is if it's neither a function, an object, nor an array.
    return objOrFunction;
  }
}

/**
 * Checks if a value is a plain object.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} - True if the value is a plain object, false otherwise.
 */
function isPlainObject(value) {
  return _typeof(value) === 'object' && value !== null && !Array.isArray(value) && !(value instanceof Date) && !(value instanceof RegExp) && !(value instanceof Function) && !(value instanceof Error);
}

/**
 * Returns the subTheme property of the first parent object that has one, or undefined if none exist.
 *
 * @param {object} obj - The object to search for a subTheme property.
 * @returns {(String | Undefined)} - The value of the subTheme property, or undefined if none exists.
 */
var getSubTheme = function getSubTheme(obj) {
  while (obj && (!obj.subTheme || typeof obj.subTheme !== 'string')) {
    obj = obj.p;
  }
  return obj ? obj.subTheme : undefined;
};

/**
 * Returns the component configuration object for the given object based on its prototype chain.
 *
 * @param {object} obj - The object to get the component configuration for.
 * @returns {object} - The component configuration object.
 */
var getComponentConfig = function getComponentConfig(obj) {
  var _obj$theme;
  if (!isPlainObject(obj)) return {};
  return (obj === null || obj === void 0 || (_obj$theme = obj.theme) === null || _obj$theme === void 0 || (_obj$theme = _obj$theme.componentConfig) === null || _obj$theme === void 0 ? void 0 : _obj$theme[obj.constructor.__componentName]) || {};
};

/**
 * Returns an array of the names of all components in the prototype chain of the given object.
 * @param {object} obj - The object to get the prototype chain from.
 * @returns {string[]} - An array of component names.
 */
var getPrototypeChain = function getPrototypeChain(obj) {
  if (!isPlainObject(obj)) return [];
  var prototypeChain = new Set();
  var proto = obj;
  if (obj.constructor && obj.constructor.__componentName) {
    prototypeChain.add(obj.constructor.__componentName);
  }

  /**
   * Traverse the prototype chain and add component names to the set
   */
  do {
    proto = Object.getPrototypeOf(proto);
    if (proto !== null && _typeof(proto) === 'object') {
      // Add only components that support theming
      if (proto.constructor.__componentName) {
        prototypeChain.add(proto.constructor.__componentName);
      }
    }
  } while (proto);

  // Convert the set to an array and return it
  return Array.from(prototypeChain);
};

/**
 * Recursively removes properties from an object that are themselves empty objects.
 * Does not remove arrays, non-plain objects, or non-empty objects.
 *
 * @param {Object} obj - The object to clean of empty objects.
 * @returns {Object} The cleaned object.
 */
function removeEmptyObjects(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && isPlainObject(obj[key])) {
      removeEmptyObjects(obj[key]); // Recurse into the object

      // After recursion, if the object is empty, delete it from the parent
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
      }
    }
  }
  return obj; // Always return obj, even if it's empty
}

// This map will store hashes of objects to detect duplicates.

function createSharedReferences() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var seenObjects = new Map();

  // Generates a hash for an object.
  // Sorting keys ensures consistent hash regardless of property order.
  function hash(object) {
    return JSON.stringify(object, Object.keys(object).sort());
  }
  function process(currentObj) {
    for (var key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        var value = currentObj[key];
        if (_typeof(value) === 'object' && value !== null) {
          // Ensure it's an object
          var valueHash = hash(value);
          if (seenObjects.has(valueHash)) {
            // If we've seen this object before, replace the current reference
            // with the original reference.
            currentObj[key] = seenObjects.get(valueHash);
          } else {
            seenObjects.set(valueHash, value);
            process(value); // Recursively process this object
          }
        }
      }
    }
  }
  process(obj);
  return obj;
}

/**
 * Combines the provided properties and returns a list of unique properties.
 *
 * @param {string[]} defaultProps - Default property names.
 * @param {Object} additionalProps - Object whose keys are additional property names.
 * @param {string[]} subProps - Sub property names.
 * @returns {string[]} - Array of unique property names.
 */
function getUniqueProperties() {
  var defaultProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!Array.isArray(defaultProps)) {
    throw new TypeError('Expected defaultProps to be an array of strings.');
  }
  return _toConsumableArray(new Set(defaultProps));
}

/**
 * Generate the payload by cloning and merging multiple objects.
 *
 * @param {Object} base - The base object to start with.
 * @param {Object} defaultStyle - Default styles provided by the user.
 * @param {string} toneItem - The current tone being processed.
 * @param {string} modeItem - The current mode being processed.
 * @param {Object} tone - Tone configurations.
 * @param {Object} mode - Mode configurations.
 * @returns {Object} - The merged payload.
 */
function generatePayload(base, defaultStyle, toneItem, modeItem, tone, mode) {
  var _tone$toneItem, _mode$modeItem;
  var payload = (0,utils/* clone */.d9)(defaultStyle, base);
  payload = (0,utils/* clone */.d9)(payload, tone === null || tone === void 0 ? void 0 : tone[toneItem]);
  payload = (0,utils/* clone */.d9)(payload, mode === null || mode === void 0 ? void 0 : mode[modeItem]);
  payload = (0,utils/* clone */.d9)(payload, (tone === null || tone === void 0 || (_tone$toneItem = tone[toneItem]) === null || _tone$toneItem === void 0 || (_tone$toneItem = _tone$toneItem.mode) === null || _tone$toneItem === void 0 ? void 0 : _tone$toneItem[modeItem]) || {});
  payload = (0,utils/* clone */.d9)(payload, (mode === null || mode === void 0 || (_mode$modeItem = mode[modeItem]) === null || _mode$modeItem === void 0 || (_mode$modeItem = _mode$modeItem.tone) === null || _mode$modeItem === void 0 ? void 0 : _mode$modeItem[toneItem]) || {});
  return payload;
}

/**
 * Recursively searches for and returns all the property keys nested within the specified key in the object.
 *
 * @param {Object} obj - The object to search through.
 * @param {string} keyToFind - The key whose nested keys are to be found.
 * @returns {string[]} An array containing all nested property keys under the specified key.
 */
function findNestedKeys(obj, keyToFind) {
  var nestedKeys = [];

  /**
   * Inner function to recursively search for nested keys.
   *
   * @param {Object} obj - The nested object to search through.
   */
  function searchNestedKeys(obj) {
    if (_typeof(obj) === 'object' && obj !== null) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          nestedKeys.push(key); // Add the nested key to the array
        }
      }
    }
  }

  /**
   * Outer function to initiate search when the specified key is found.
   *
   * @param {Object} obj - The object to search through.
   */
  function searchForKey(obj) {
    if (_typeof(obj) === 'object' && obj !== null) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (key === keyToFind) {
            searchNestedKeys(obj[key]); // Start searching for nested keys
            break; // Once the specified key is found, we don't need to look further at this level
          }
          searchForKey(obj[key]); // Continue searching for the specified key
        }
      }
    }
  }
  searchForKey(obj); // Initialize the search with the object
  return nestedKeys; // Return the array of nested keys
}

/**
 * Generates a solution based on the provided configurations.
 *
 * @param {Object} options - The configuration options for generating the solution.
 * @param {Object} [options.base={}] - Base object.
 * @param {Object} [options.tone={}] - Tone configurations.
 * @param {Object} [options.mode={}] - Mode configurations.
 * @param {Object} [options.defaultStyle={}] - Default styles provided by the user.
 * @returns {Object} - The generated solution with shared references and merged identical properties.
 */
var generateSolution = function generateSolution(_ref) {
  var _ref$base = _ref.base,
    base = _ref$base === void 0 ? {} : _ref$base,
    _ref$tone = _ref.tone,
    tone = _ref$tone === void 0 ? {} : _ref$tone,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? {} : _ref$mode,
    _ref$defaultStyle = _ref.defaultStyle,
    defaultStyle = _ref$defaultStyle === void 0 ? {} : _ref$defaultStyle;
  var modeKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var toneKeys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var solution = {};
  var uniqueModes = getUniqueProperties(['focused', 'disabled'].concat(_toConsumableArray(modeKeys), ['unfocused' // Unfocused must be at the end for proper fallback since base === 'unfocused' in many cases
  ]));
  var uniqueTones = getUniqueProperties(['neutral', 'inverse', 'brand'].concat(_toConsumableArray(toneKeys)));
  var _iterator = _createForOfIteratorHelper(uniqueModes),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var modeItem = _step.value;
      var _iterator2 = _createForOfIteratorHelper(uniqueTones),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var toneItem = _step2.value;
          var payload = generatePayload(base, defaultStyle, toneItem, modeItem, tone, mode);
          solution["".concat(modeItem, "_").concat(toneItem)] = payload;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return solution;
};
var DEFAULT_KEYS = [
// ORDER MATTERS
'unfocused_neutral', 'unfocused_inverse', 'unfocused_brand', 'focused_neutral', 'focused_inverse', 'focused_brand', 'disabled_neutral', 'disabled_inverse', 'disabled_brand'];

/**
 * Enforce a contract on an input object by ensuring that it contains a set of specified keys
 * and, if not, substituting them with values from fallback keys in a predefined order.
 *
 * @param {Object} inputObj - The input object to enforce the contract on.
 * @returns {Object} - An object that adheres to the contract, with missing keys replaced by fallback values.
 */
function enforceContract(inputObj) {
  var result = {};
  for (var _i = 0, _arr = [].concat(DEFAULT_KEYS, _toConsumableArray(Object.keys(inputObj))); _i < _arr.length; _i++) {
    var key = _arr[_i];
    if (!inputObj.hasOwnProperty(key)) {
      // Find the first fallback property that exists in inputObj
      var fallbackKey = DEFAULT_KEYS.find(function (fallback) {
        return inputObj.hasOwnProperty(fallback);
      });
      if (fallbackKey) {
        var fallback = inputObj[fallbackKey];
        result[key] = _typeof(fallback) !== 'object' ? {} : fallback;
      } else {
        result[key] = {};
      }
    } else {
      if (_typeof(inputObj[key]) !== 'object') {
        // If the value is not an object, replace it with an empty object
        result[key] = {};
      } else {
        result[key] = inputObj[key];
      }
    }
  }
  return result;
}

/**
 * Generates the source style object for a given component by merging base, mode, and tone styles from the component's style chain
 * @param {object} component - The component for which to generate the style source
 * @returns {object} - The source style object for the component
 */
var generateComponentStyleSource = function generateComponentStyleSource() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref2$theme = _ref2.theme,
    theme = _ref2$theme === void 0 ? {} : _ref2$theme,
    _ref2$styleChain = _ref2.styleChain,
    styleChain = _ref2$styleChain === void 0 ? [] : _ref2$styleChain,
    _ref2$inlineStyle = _ref2.inlineStyle,
    inlineStyle = _ref2$inlineStyle === void 0 ? {} : _ref2$inlineStyle,
    _ref2$alias = _ref2.alias,
    alias = _ref2$alias === void 0 ? [] : _ref2$alias;
  if (_typeof(theme) !== 'object') {
    throw new Error('Expected theme to be an object');
  }
  if (!Array.isArray(styleChain)) {
    throw new Error('Expected styleChain to be an array');
  }
  if (_typeof(inlineStyle) !== 'object') {
    throw new Error('Expected inlineStyle to be an object');
  }
  if (!Array.isArray(alias)) {
    throw new Error('Expected alias to be an array');
  }

  /**
   * Component default styles
   */
  var componentDefault = styleChain.map(function (_ref3) {
    var style = _ref3.style;
    if (_typeof(style) === 'object' && !style.base && !style.mode && !style.tone && !style["default"]) {
      return {
        base: style
      };
    } else {
      var _style$base = style.base,
        base = _style$base === void 0 ? {} : _style$base,
        _style$mode = style.mode,
        mode = _style$mode === void 0 ? {} : _style$mode,
        _style$tone = style.tone,
        tone = _style$tone === void 0 ? {} : _style$tone;
      var componentConfigDefaultStyle;
      if (style) {
        var defaultStyle = JSON.parse(JSON.stringify(style));
        delete defaultStyle.base;
        delete defaultStyle.tone;
        delete defaultStyle.mode;
        componentConfigDefaultStyle = defaultStyle; // Anything in the root level of style
      }
      return {
        defaultStyle: componentConfigDefaultStyle || {},
        base: base,
        mode: mode,
        tone: tone
      };
    }
  });

  /**
   * Local / Instance level styles
   * DefaultStyle will apply to the next level in the hierarchy
   */
  var localDefaultStyle;
  if (inlineStyle) {
    var defaultStyle = JSON.parse(JSON.stringify(inlineStyle));
    delete defaultStyle.base;
    delete defaultStyle.tone;
    delete defaultStyle.mode;
    localDefaultStyle = defaultStyle; // Anything in the root level of style
  }
  var local = {
    defaultStyle: localDefaultStyle || {},
    base: (inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.base) || {},
    mode: (inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.mode) || {},
    tone: (inlineStyle === null || inlineStyle === void 0 ? void 0 : inlineStyle.tone) || {}
  };

  // Merge all the styles together into one array to loop
  var merged = [].concat(_toConsumableArray(componentDefault), [local]);

  // Execute all style functions with the theme
  var parsedStyles = merged.map(function (style) {
    return executeWithContextRecursive(style, theme);
  });

  // Find all the keys that are in mode/tone as well as nested under mode and tone this will help generate the final solution
  var modeKeys = findNestedKeys(parsedStyles, 'mode');
  var toneKeys = findNestedKeys(parsedStyles, 'tone');

  // Merge all the styles together into one object
  var solution = parsedStyles.reduce(function (acc, style) {
    return (0,utils/* clone */.d9)(acc, generateSolution(style, modeKeys, toneKeys));
  }, {});
  var _final = formatStyleObj(removeEmptyObjects(colorParser({
    theme: theme
  }, solution)) || {}, alias);
  var cleanObj = createSharedReferences(_final);
  return enforceContract(cleanObj);
};

/**
 * Parse and process a style object to replace theme strings and process color arrays.
 * @param {object} targetObject - In most cases, this will be a theme object.
 * @param {object} styleObj - The input style object to be processed.
 * @returns {object} The processed style object with theme strings replaced and color arrays processed.
 */
var colorParser = function colorParser(targetObject, styleObj) {
  // Check if targetObject is an object
  if (_typeof(targetObject) !== 'object' || targetObject === null) {
    throw new TypeError('targetObject must be an object.');
  }

  // Check if styleObj is an object
  if (_typeof(styleObj) !== 'object' || styleObj === null) {
    throw new TypeError('styleObj must be an object.');
  }

  // Process style object and remove unnecessary properties
  var processedStyle = JSON.stringify(styleObj, function (_, value) {
    if (-1 < ['tone', 'mode'].indexOf(_)) return undefined; // Remove any tone/mode or mode/tone properties as they have already been processed
    if ('string' === typeof value && value.startsWith('theme.')) {
      // Support theme strings example: theme.radius.md
      return (0,utils/* getValFromObjPath */.nB)(targetObject, value); // If no theme value exists, the property will be removed from the object
    } else if (Array.isArray(value) && value.length === 2) {
      // Process value as a color ['#663399', 1]
      return (0,utils/* getHexColor */.Xv)(value[0], value[1]);
    }
    return value;
  });
  return JSON.parse(processedStyle || {});
};

/**
 * Generates the final style object for a component using its style source.
 * @param {object} component - The component for which to generate a style object.
 * @param {object} componentStyleSource - The style source object for the component.
 * @returns {object} - The generated style object.
 */
var generateStyle = function generateStyle(component) {
  var componentStyleSource = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!isPlainObject(component)) return {};
  var _component$mode = component.mode,
    mode = _component$mode === void 0 ? 'unfocused' : _component$mode,
    _component$tone = component.tone,
    tone = _component$tone === void 0 ? 'neutral' : _component$tone;
  return componentStyleSource["".concat(mode, "_").concat(tone)] || componentStyleSource['unfocused_neutral'] || {};
};

/**
 * Generates a name by concatenating the names of constructors in the prototype chain.
 * @param {object} obj - The object for which to generate the name.
 * @returns {string} - The generated name.
 */
function generateNameFromPrototypeChain(obj) {
  var _proto$constructor;
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!obj) return name;
  var proto = Object.getPrototypeOf(obj);
  if (!proto || !proto.constructor) return name;
  var componentName = "".concat(name ? name + '.' : '').concat((proto === null || proto === void 0 || (_proto$constructor = proto.constructor) === null || _proto$constructor === void 0 ? void 0 : _proto$constructor.__componentName) || '').replace(/\.*$/, '').trim();
  var result = generateNameFromPrototypeChain(proto, componentName);
  return result;
}
/**
 * Creates a cache object to store the results of getStyleChainMemoized function calls.
 * @type {object}
 */
var styleChainCache = {};

/**
 * Flush the memoization cache for styleChain
 *
 */
var clearStyleChainCache = function clearStyleChainCache() {
  for (var key in styleChainCache) {
    if (styleChainCache.hasOwnProperty(key)) {
      delete styleChainCache[key];
    }
  }
};

/**
 * Memoized version of getStyleChain function. Retrieves the style chain for a component by traversing its prototype chain.
 * @param {object} componentObj - The component object to get the style chain from.
 * @returns {{ style: (object | function) }[]} - An array of style objects containing either an object of styles or a function to return an object of styles.
 */
var getStyleChainMemoized = function getStyleChainMemoized(componentObj) {
  /**
   * Create a cache key based on the stringified component object.
   * @type {string}
   */

  var cacheKey = generateNameFromPrototypeChain(componentObj);

  // Check if the result is already in the cache
  if (styleChainCache[cacheKey]) {
    return styleChainCache[cacheKey];
  }

  /**
   * Compute the style chain using the getStyleChain function.
   * @type {{ style: (object | function) }[]}
   */
  var styleChain = getStyleChain(componentObj);

  // Cache the result for future use
  styleChainCache[cacheKey] = styleChain;

  // Return the style chain
  return styleChain;
};

/**
 * Traverse up the prototype chain to create an array of all the styles that are present in the Components ancestors
 * @param {object} componentObj - The component object to get the style chain from.
 * @returns {{ style: (object | function) }[]} - An array of style objects containing either an object of styles or a function to return an object of styles.
 */
var getStyleChain = function getStyleChain(componentObj) {
  var styleMap = new Map(); // Use a Map to store styles as JSON strings
  var proto;
  do {
    var _proto;
    proto = !proto ? componentObj : Object.getPrototypeOf(proto);
    if (((_proto = proto) === null || _proto === void 0 ? void 0 : _proto.constructor) === Object) break; // Stop traversing the prototype chain if we reach the Object prototype
    if (proto && _typeof(proto) === 'object' && proto.hasOwnProperty('constructor')) {
      // ComponentConfig Level
      var _getComponentConfig = getComponentConfig(proto),
        componentConfigStyle = _getComponentConfig.style;
      if (Object.keys(componentConfigStyle || {}).length) {
        if (!styleMap.has(componentConfigStyle)) {
          styleMap.set(componentConfigStyle, {
            style: componentConfigStyle
          });
        }
      }

      // Access the __themeStyle property from the current prototype's constructor
      var themeStyle = proto.constructor.hasOwnProperty('__themeStyle') && proto.constructor.__themeStyle;
      if (Object.keys(themeStyle || {}).length) {
        if (!styleMap.has(themeStyle)) {
          styleMap.set(themeStyle, {
            style: _objectSpread({}, themeStyle)
          });
        }
      } else if (typeof themeStyle === 'function') {
        // If the style is a function, add it to the styleMap
        if (!styleMap.has(themeStyle)) {
          styleMap.set(themeStyle, {
            style: themeStyle
          });
        }
      }

      // Access the __mixinStyle property from the current prototype's constructor
      var mixinStyle = proto.constructor.hasOwnProperty('__mixinStyle') && proto.constructor.__mixinStyle;
      if (Object.keys(mixinStyle || {}).length) {
        if (!styleMap.has(mixinStyle)) {
          styleMap.set(mixinStyle, {
            style: mixinStyle
          });
        }
      }
    }
  } while (proto);

  // Convert the values of the Map (unique styles) back to an array
  var uniqueStyles = Array.from(styleMap.values());

  // Return an array of unique style objects with a "style" property
  return uniqueStyles.map(function (style) {
    return style;
  }).reverse();
};

/**
 * Formats a style object by applying a series of formatter functions.
 *
 * @param {object} originalObj - The original style object to be formatted.
 * @param {array} [aliasStyles=[]] - An array of alias styles to be used during formatting.
 * @returns {object} The formatted style object after applying all formatter functions.
 */
var formatStyleObj = function formatStyleObj(originalObj) {
  var aliasStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (_typeof(originalObj) !== 'object' || originalObj === null) {
    throw new Error('The originalObj parameter must be an object.');
  }
  var formatters = new Set();

  // Adding a key-value pair to the 'formatters' Set.
  // This pattern is used so more formatters can be easily added if required at a later time
  formatters.add([replaceAliasValues, [aliasStyles]]);

  // Generating an array from the 'formatters' Set
  var formattersArray = Array.from(formatters);

  // Using reduce to apply functions from 'formattersArray' to 'finalStyle'
  // Each function takes 'obj' (initially 'finalStyle') as input and applies transformations
  // The result of the previous function is passed as input to the next function
  // The final transformed style is assigned to 'this._style'
  return formattersArray.reduce(function (obj, _ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
      func = _ref5[0],
      args = _ref5[1];
    return func.apply(void 0, [obj].concat(_toConsumableArray(args)));
  }, originalObj);
};

/**
 * Replaces alias values in the provided style object with their corresponding aliases.
 * @param {object} value - The style object to process.
 * @param {Array<Object>} [aliasStyles=[]] - Optional array of alias styles to apply.
 * @returns {object} The style object with alias values replaced.
 */
var replaceAliasValues = function replaceAliasValues(value) {
  var aliasStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (_typeof(value) !== 'object' || value === null) {
    throw new Error('Value must be an object');
  }
  if (!Array.isArray(aliasStyles)) {
    throw new Error('Alias styles must be an array');
  }
  var str = JSON.stringify(value);
  var aliasProps = [{
    prev: 'height',
    curr: 'h',
    skipWarn: true
  }, {
    prev: 'width',
    curr: 'w',
    skipWarn: true
  }].concat(_toConsumableArray(aliasStyles || []));
  aliasProps.forEach(function (alias) {
    if (alias && typeof alias.prev === 'string' && typeof alias.curr === 'string') {
      !alias.skipWarn && str.search("\"".concat(alias.prev, "\":")) >= 0 && logger/* default */.Z.warn("The style property \"".concat(alias.prev, "\" is deprecated and will be removed in a future release. Please use \"").concat(alias.curr, "\" instead."));
      str = str.replace(new RegExp("\"".concat(alias.prev, "\":"), 'gi'), "\"".concat(alias.curr, "\":"));
    }
  });
  return JSON.parse(str);
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withThemeStyles/cache.js

var themeStyleCache = new Map();
context/* default */.Z.on('themeUpdate', function () {
  themeStyleCache.clear();
});
/* harmony default export */ const cache = (themeStyleCache);
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withThemeStyles/StyleManager.js
function StyleManager_typeof(o) { "@babel/helpers - typeof"; return StyleManager_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, StyleManager_typeof(o); }
function StyleManager_toConsumableArray(arr) { return StyleManager_arrayWithoutHoles(arr) || StyleManager_iterableToArray(arr) || StyleManager_unsupportedIterableToArray(arr) || StyleManager_nonIterableSpread(); }
function StyleManager_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function StyleManager_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StyleManager_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StyleManager_arrayLikeToArray(o, minLen); }
function StyleManager_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function StyleManager_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return StyleManager_arrayLikeToArray(arr); }
function StyleManager_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, StyleManager_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function StyleManager_toPropertyKey(t) { var i = StyleManager_toPrimitive(t, "string"); return "symbol" == StyleManager_typeof(i) ? i : String(i); }
function StyleManager_toPrimitive(t, r) { if ("object" != StyleManager_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != StyleManager_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (StyleManager_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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






var StyleManager = /*#__PURE__*/function (_lng$EventEmitter) {
  _inherits(StyleManager, _lng$EventEmitter);
  var _super = _createSuper(StyleManager);
  /**
   * Create a Style Manager instance.
   * @param {object} options - The options object.
   * @param {object} options.component - The LightningJS component instance.
   */
  function StyleManager() {
    var _this;
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? {} : _ref$component;
    _classCallCheck(this, StyleManager);
    _this = _super.apply(this, arguments);
    _this.init(component);
    return _this;
  }
  _createClass(StyleManager, [{
    key: "init",
    value: function init(component) {
      this.isActive = true;
      this.component = component;
      this.setupListeners();
      this._style = {}; // This will be the source of truth for the style manager
      // Initial update is not debounced
      this.update();
    }
  }, {
    key: "setupListeners",
    value: function setupListeners() {
      // Bind the _onThemeUpdate method to the current instance of the StyleManager class.
      this._boundThemeUpdate = this._onThemeUpdate.bind(this);
      this._hasSubTheme = Boolean(this.component._targetSubTheme);
      if (!this.component._targetSubTheme) {
        context/* default */.Z.on('themeUpdate', this._boundThemeUpdate);
      } else {
        context/* default */.Z.on("themeUpdate".concat(this.component._targetSubTheme), this._boundThemeUpdate);
      }
    }
  }, {
    key: "clearListeners",
    value: function clearListeners() {
      // Bind the _onThemeUpdate method to the current instance of the StyleManager class.
      if (!this._boundThemeUpdate) return;
      if (!this.component._targetSubTheme) {
        context/* default */.Z.off('themeUpdate', this._boundThemeUpdate);
      } else {
        context/* default */.Z.off("themeUpdate".concat(this.component._targetSubTheme), this._boundThemeUpdate);
      }
    }

    /**
     * Destroy the Style Manager instance and remove the themeUpdate event listener.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.isActive = false;
      this._cleanupCache();
      // Remove event listeners and subscriptions
      this.clearListeners();
      // Set references to null
      this._styleCache = null;
      this._boundThemeUpdate = null;
      this.component = null;
    }

    /**
     * Handler for the themeUpdate event. Clears the cache and updates the component's style.
     * @private
     */
  }, {
    key: "_onThemeUpdate",
    value: function _onThemeUpdate() {
      clearStyleChainCache();
      this.clearSourceCache();
      this.clearStyleCache();
      this.update();
    }

    /**
     * Clears the source cache.
     */
  }, {
    key: "clearSourceCache",
    value: function clearSourceCache() {
      if (!this.component) return;
      var sourceKey = this._generateCacheKey('styleSource');
      this._removeCache(sourceKey);
    }

    /**
     * Clears the style cache.
     */
  }, {
    key: "clearStyleCache",
    value: function clearStyleCache() {
      if (!this.component) return;
      var _this$component = this.component,
        tone = _this$component.tone,
        mode = _this$component.mode;
      var styleKey = this._generateCacheKey("style_".concat(mode, "_").concat(tone));
      cache["delete"](styleKey);
    }

    /**
     * Generates a cache key.
     * @param {string} name - The name of the cache.
     * @returns {string} - The generated cache key.
     */
  }, {
    key: "_generateCacheKey",
    value: function _generateCacheKey(name) {
      var cacheKey = [name, this.component.constructor.__componentName, this._customStyleHash].filter(Boolean).join('_');
      return cacheKey;
    }

    /**
     * Adds a cache.
     * @param {string} name - The name of the cache.
     * @param {object} payload - The payload of the cache.
     */
  }, {
    key: "_addCache",
    value: function _addCache(name, payload) {
      var key = this._generateCacheKey(name);
      var existing = cache.get(key);
      cache.set(key, {
        ids: StyleManager_toConsumableArray(new Set([].concat(StyleManager_toConsumableArray((existing === null || existing === void 0 ? void 0 : existing.ids) || []), [this.component.__id]))),
        // Add current id and remove duplicates
        payload: payload
      });
    }

    /**
     * Called when component is destroyed
     */
  }, {
    key: "_cleanupCache",
    value: function _cleanupCache() {
      var _this2 = this;
      if (!this.component) return;
      cache.forEach(function (_ref2, name) {
        var ids = _ref2.ids,
          payload = _ref2.payload;
        var removeIndex = ids && ids.length && ids.indexOf(_this2.component.__id);
        if (removeIndex > -1 && ids.length > 1) {
          cache.set(name, {
            ids: ids.slice(0, removeIndex).concat(ids.slice(removeIndex + 1)),
            payload: payload
          });
        } else if (removeIndex > -1) {
          cache["delete"](name);
        }
      });
    }

    /**
     * Removes a cache.
     * @param {string} name - The name of the cache.
     */
  }, {
    key: "_removeCache",
    value: function _removeCache(name) {
      cache["delete"](name);
    }

    /**
     * Gets a cache.
     * @param {string} name - The name of the cache.
     * @returns {object|boolean} - The cache or false if the component has inline styles.
     */
  }, {
    key: "_getCache",
    value: function _getCache(name) {
      var key = this._generateCacheKey(name);
      return cache.get(key);
    }

    /**
     * Updates the component's style based on changes in tone, mode, theme, and `_componentLevelStyle`.
     * Clears the style cache if tone or mode have changed, and clears the source cache if `_componentLevelStyle` has changed.
     * Generates the component's style source and style objects, saves them to the cache, and emits a `styleUpdate` event with the updated style.
     * @returns {Promise<void>}
     */
  }, {
    key: "update",
    value: function update() {
      if (!this.component) return;
      var _this$component2 = this.component,
        mode = _this$component2.mode,
        tone = _this$component2.tone;
      try {
        var _this$_getCache, _this$_getCache2;
        // Attempt to fetch style source from cache
        var styleSource = (_this$_getCache = this._getCache('styleSource')) === null || _this$_getCache === void 0 ? void 0 : _this$_getCache.payload;
        if (!styleSource) {
          // Style source does not exist so it will need to be generated. We attempt to run this function only when necessary for optimal performance
          styleSource = generateComponentStyleSource({
            alias: this.component.constructor.aliasStyles,
            componentConfig: this.component._componentConfig,
            inlineStyle: this.component._componentLevelStyle,
            styleChain: getStyleChainMemoized(this.component),
            theme: this.component.theme
          });
          this._addCache('styleSource', styleSource);
        }

        // Attempt to fetch style from cache
        var style = (_this$_getCache2 = this._getCache("style_".concat(mode, "_").concat(tone))) === null || _this$_getCache2 === void 0 ? void 0 : _this$_getCache2.payload;
        if (!style) {
          // Style does not exist so will also need to be generated
          style = generateStyle(this.component, styleSource);
          this._addCache("style_".concat(mode, "_").concat(tone), style);
        }
        this._style = style;
        this.emit('styleUpdate', this.style);
      } catch (error) {
        context/* default */.Z.error('styleManager: ', error.message);
      }
    }

    /**
     * Accessors
     */
  }, {
    key: "style",
    get: function get() {
      return this._style;
    },
    set: function set(v) {
      context/* default */.Z.warn('styleManager: Cannot mutate style directly');
    }
  }, {
    key: "props",
    get: function get() {
      var _this3 = this;
      return Object.keys(this.component._componentConfig).reduce(function (acc, key) {
        if (!['base', 'tone', 'mode', 'style', 'styleConfig'].includes(key)) {
          acc[key] = _this3.component._componentConfig[key];
        }
        return acc;
      }, {});
    }

    /**
     * Simple check to see if this component can leverage caching. Components using .style cannot use the cache at this time
     */,
    set: function set(v) {
      context/* default */.Z.warn('styleManager: Cannot mutate props directly');
    }
  }, {
    key: "_customStyleHash",
    get: function get() {
      var hasCustomStyle = Boolean(Object.keys(this.component.constructor.__mixinStyle || {}).length) || Boolean(Object.keys(this.component._componentLevelStyle || {}).length);
      if (hasCustomStyle) {
        return getHash((0,utils/* clone */.d9)(this.component.constructor.__mixinStyle || {}, this.component._componentLevelStyle || {}));
      }
      return undefined;
    }
  }]);
  return StyleManager;
}(lightning_esm/* default */.Z.EventEmitter);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/global-update-manager/GlobalUpdateManager.js
var GlobalUpdateManager = __webpack_require__("../../@lightningjs/ui-components/src/globals/global-update-manager/GlobalUpdateManager.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withThemeStyles/index.js
function withThemeStyles_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function withThemeStyles_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, withThemeStyles_toPropertyKey(descriptor.key), descriptor); } }
function withThemeStyles_createClass(Constructor, protoProps, staticProps) { if (protoProps) withThemeStyles_defineProperties(Constructor.prototype, protoProps); if (staticProps) withThemeStyles_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { withThemeStyles_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function withThemeStyles_defineProperty(obj, key, value) { key = withThemeStyles_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function withThemeStyles_toPropertyKey(t) { var i = withThemeStyles_toPrimitive(t, "string"); return "symbol" == withThemeStyles_typeof(i) ? i : String(i); }
function withThemeStyles_toPrimitive(t, r) { if ("object" != withThemeStyles_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != withThemeStyles_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = withThemeStyles_getPrototypeOf(object); if (object === null) break; } return object; }
function withThemeStyles_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) withThemeStyles_setPrototypeOf(subClass, superClass); }
function withThemeStyles_setPrototypeOf(o, p) { withThemeStyles_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withThemeStyles_setPrototypeOf(o, p); }
function withThemeStyles_createSuper(Derived) { var hasNativeReflectConstruct = withThemeStyles_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = withThemeStyles_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = withThemeStyles_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return withThemeStyles_possibleConstructorReturn(this, result); }; }
function withThemeStyles_possibleConstructorReturn(self, call) { if (call && (withThemeStyles_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return withThemeStyles_assertThisInitialized(self); }
function withThemeStyles_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function withThemeStyles_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function withThemeStyles_getPrototypeOf(o) { withThemeStyles_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withThemeStyles_getPrototypeOf(o); }
function withThemeStyles_toConsumableArray(arr) { return withThemeStyles_arrayWithoutHoles(arr) || withThemeStyles_iterableToArray(arr) || withThemeStyles_unsupportedIterableToArray(arr) || withThemeStyles_nonIterableSpread(); }
function withThemeStyles_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function withThemeStyles_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return withThemeStyles_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return withThemeStyles_arrayLikeToArray(o, minLen); }
function withThemeStyles_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function withThemeStyles_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return withThemeStyles_arrayLikeToArray(arr); }
function withThemeStyles_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function withThemeStyles_typeof(o) { "@babel/helpers - typeof"; return withThemeStyles_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, withThemeStyles_typeof(o); }
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







/**
 * Merges two objects based on the following rules:
 * 1. If a key exists in both objects, use the value from the second object.
 * 2. If a key exists in the first object but not in the second, set the value to undefined.
 * 3. If a key exists in the second object but not in the first, include it in the result.
 * 4. Maintain the structure of the first object and augment it with extra keys from the second object.
 *
 * @param {Object|Array} firstObj - The first object, providing the structure to match.
 * @param {Object|Array} secondObj - The second object, whose values take precedence.
 * @returns {Object|Array} A new object with a merged structure and values.
 */
function mergeObjectsWithSecondDominant(firstObj, secondObj) {
  if (firstObj !== null && withThemeStyles_typeof(firstObj) === 'object') {
    if (Array.isArray(firstObj)) {
      return firstObj.map(function (item, index) {
        return mergeObjectsWithSecondDominant(item, Array.isArray(secondObj) ? secondObj[index] : undefined);
      });
    } else {
      var result = {};
      // Combine keys from both objects to ensure all keys are covered
      var allKeys = new Set([].concat(withThemeStyles_toConsumableArray(Object.keys(firstObj)), withThemeStyles_toConsumableArray(Object.keys(secondObj))));
      allKeys.forEach(function (key) {
        // Recurse for nested objects or arrays
        if (withThemeStyles_typeof(firstObj[key]) === 'object' && firstObj[key] !== null) {
          result[key] = mergeObjectsWithSecondDominant(firstObj[key], secondObj[key] || {});
        } else if (withThemeStyles_typeof(secondObj[key]) === 'object' && secondObj[key] !== null) {
          result[key] = mergeObjectsWithSecondDominant(firstObj[key] || {}, secondObj[key]);
        } else {
          // Use value from the second object if available, else set to undefined
          result[key] = secondObj.hasOwnProperty(key) ? secondObj[key] : undefined;
        }
      });
      return result;
    }
  } else {
    // Return non-object values directly
    return firstObj;
  }
}

/**
 * A higher-order function that returns a class with theme styles.
 * @param {function} Base - The base class to extend.
 * @param {object} mixinStyle - The mixin style to add to the component.
 * @returns {function} A class that extends the base class with theme styles.
 */
function withThemeStyles(Base) {
  var mixinStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return /*#__PURE__*/function (_Base) {
    withThemeStyles_inherits(_class, _Base);
    var _super = withThemeStyles_createSuper(_class);
    function _class() {
      withThemeStyles_classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    withThemeStyles_createClass(_class, [{
      key: "_construct",
      value: function _construct() {
        var _this = this;
        if (this._withThemeStylesSetupComplete) {
          // Make sure this runs ony once if being used on a component that extends another component that is utilizing withThemeStyles
          _get(withThemeStyles_getPrototypeOf(_class.prototype), "_construct", this).call(this);
          return;
        }
        this._hSetByUser = false;
        this._wSetByUser = false;
        this._styleManager = new StyleManager({
          component: this
        });
        this._style = this._styleManager.style; // Set the style for the first time. After this is will be updated by events
        this._updatePropDefaults();
        this._styleManager.on('styleUpdate', function () {
          _this._style = _this._styleManager.style;
          _this._updatePropDefaults();
          _this.queueThemeUpdate();
        });
        this._withThemeStylesSetupComplete = true;
        _get(withThemeStyles_getPrototypeOf(_class.prototype), "_construct", this).call(this); // Important that this is called at the bottom to ensure that withThemeStyles is only initialized once per component to prevent potential memory leaks
      }

      /**
       * Checks for subThemes on _setup lifecycle event to allow the component to traverse the tree to find child theme properties.
       * @private
       * @returns {void}
       */
    }, {
      key: "_setup",
      value: function _setup() {
        _get(withThemeStyles_getPrototypeOf(_class.prototype), "_setup", this) && _get(withThemeStyles_getPrototypeOf(_class.prototype), "_setup", this).call(this);
        this._targetSubTheme = getSubTheme(this);
        if (this._targetSubTheme) {
          this._styleManager.clearListeners();
          this._styleManager.setupListeners();
          this._styleManager.clearStyleCache();
          this._styleManager.clearSourceCache();
          this._styleManager.update();
        }
      }

      /**
       * Updates the default properties of the component based on the current theme.
       * It compares the previous component configuration properties with the current style manager properties,
       * and updates the component's properties accordingly. If the properties are unchanged, no action is taken.
       * This method is crucial for ensuring the component's properties are synchronized with the theme.
       */
    }, {
      key: "_updatePropDefaults",
      value: function _updatePropDefaults() {
        // If the current properties are the same as the previous configuration, no update is needed

        if (!Object.keys(this._styleManager.props).length || JSON.stringify(this._styleManager.props) === JSON.stringify(this._prevComponentConfigProps)) {
          return;
        }

        // Compare current properties with previous configuration and get the payload
        var payload = this._prevComponentConfigProps ? mergeObjectsWithSecondDominant(this._prevComponentConfigProps || {}, this._styleManager.props || {}) : this._styleManager.props || {};

        // Store a deep copy of the current properties for future comparison
        this._prevComponentConfigProps = this._styleManager.props && JSON.parse(JSON.stringify(this._styleManager.props));

        // This will be used by withUpdates to set defaults
        this.__componentConfigProps = payload;
      }

      /**
       * On component attach, ensures the StyleManager has been reinitialized if it was previously destroyed in detach.
       * @private
       * @returns {void}
       */
    }, {
      key: "_attach",
      value: function _attach() {
        _get(withThemeStyles_getPrototypeOf(_class.prototype), "_attach", this).call(this);
        if (!this._styleManager.isActive) {
          this._styleManager.init(this);
        }
      }

      /**
       * Detaches the component and destroys the style manager.
       * @private
       * @returns {void}
       */
    }, {
      key: "_detach",
      value: function _detach() {
        _get(withThemeStyles_getPrototypeOf(_class.prototype), "_detach", this).call(this);
        this._styleManager.destroy();
      }

      /**
       * Updates the mode to 'unfocused' when the component is unfocused.
       * @private
       * @internal
       * @returns {void}
       */
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        if (this._isFocusedMode) this.mode = 'unfocused';
        _get(withThemeStyles_getPrototypeOf(_class.prototype), "_unfocus", this).call(this);
      }

      /**
       * Updates the mode to 'focused' when the component is focused.
       * @private
       * @returns {void}
       */
    }, {
      key: "_focus",
      value: function _focus() {
        if (!this._isDisabledMode) this.mode = 'focused';
        _get(withThemeStyles_getPrototypeOf(_class.prototype), "_focus", this).call(this);
      }

      /**
       * Checks if dimensions need updating, and updates if necessary.
       * Fixes mount issues if height is controlled by a component's style alone.
       * Setters for w/h will set the wSetByUser and hSetByUser flag to block this functionality and allow customization.
       * @private
       * @returns {void}
       */
    }, {
      key: "_checkDimensionUpdates",
      value: function _checkDimensionUpdates() {
        var dimensionUpdateRequired = false;
        if (!this._wSetByUser && this.style.w && this._w !== this.style.w) {
          this._w = this.style.w;
          dimensionUpdateRequired = true;
        }
        if (!this._hSetByUser && this.style.h && this._h !== this.style.h) {
          this._h = this.style.h;
          dimensionUpdateRequired = true;
        }
        if (dimensionUpdateRequired) {
          this._updateDimensions();
        }
      }

      /**
       * Called by the update manager to trigger the _update lifecycle.
       * If `queueRequestUpdate` is undefined, then it's OK to call `_update()` directly because
       * the component does not have the `withUpdates` mixin, and hence `requestUpdate()` will not be defined either.
       * This check allows this mixin to work without `withUpdates`.
       * @private
       * @returns {void}
       */
    }, {
      key: "_updateThemeComponent",
      value: function _updateThemeComponent() {
        if (!this.style) return;
        if (!this._isAttached()) return;
        this._checkDimensionUpdates();
        this.queueRequestUpdate ? this.queueRequestUpdate() : this._update && this._update();
        this._updateItemLayout && this._updateItemLayout();
      }

      /**
       * Queues component for update by the Global Update Manager.
       * @returns {void}
       */
    }, {
      key: "queueThemeUpdate",
      value: function queueThemeUpdate() {
        GlobalUpdateManager/* updateManager */.Y.addUpdateTheme(this);
      }
    }, {
      key: "theme",
      get:
      /**
       * Reference to the global theme
       * @return {object}
       */
      function get() {
        var subTheme = this._targetSubTheme && context/* default */.Z.getSubTheme(this._targetSubTheme);
        return subTheme || context/* default */.Z.theme;
      }

      /**
       * Set component level styles
       * @param {object} v - The styles to set, mode, and tone are not allowed
       */
    }, {
      key: "style",
      get:
      /**
       * Get component level styles
       * @return {object}
       */
      function get() {
        return this._style;
      }

      /**
       * Get component level styles
       * @return {object}
       */,
      set: function set(v) {
        if (Object.prototype.toString.call(v) !== '[object Object]') {
          context/* default */.Z.error('style must be an object');
          return;
        }
        this._componentLevelStyle = v;
        this._styleManager.clearStyleCache();
        this._styleManager.update();
      }
    }, {
      key: "_componentStyle",
      get: function get() {
        /** No longer supported */
        context/* default */.Z.info('_componentStyle will soon be deprecated. Please use Component.style');
        return this._style;
      }

      /**
       * Set component styleConfig
       * @param {object} v - Special configuration rules to override styles
       */
    }, {
      key: "styleConfig",
      get:
      /**
       * Get component styleConfig
       * @return {object}
       */
      function get() {
        return this._styleConfig;
      }

      /**
       * Theme configuration for overrides and defaults
       * @return {object}
       */,
      set: function set(v) {
        context/* default */.Z.info('style config is deprecated. Please use style = { base: {}, tone: {}, mode: {} }');
        this._styleConfig = v;
        this._styleManager.update();
      }
    }, {
      key: "_componentConfig",
      get: function get() {
        return getComponentConfig(this);
      }

      /**
       * Get the mode property
       * @return {string}
       */
    }, {
      key: "mode",
      get: function get() {
        var _this$_componentConfi;
        return this._mode || ((_this$_componentConfi = this._componentConfig) === null || _this$_componentConfi === void 0 ? void 0 : _this$_componentConfi.mode) || 'unfocused';
      }

      /**
       * Set the mode property
       * @param {string} v - The mode value to set
       */,
      set: function set(v) {
        if (typeof v !== 'string' || this._mode === v) return;
        this._mode = v;
        var event = this["on".concat((0,utils/* capitalizeFirstLetter */.fm)(v))];
        if (event && typeof event === 'function') event.call(this);
        this._styleManager.update();
      }

      /**
       * Get the tone property
       * @return {string}
       */
    }, {
      key: "tone",
      get: function get() {
        return this._tone || this._componentConfig.tone || 'neutral';
      }

      /**
       * Set the tone property
       * @param {string} value - The tone value to set
       */,
      set: function set(v) {
        if (typeof v !== 'string' || this._tone === v) return;
        this._tone = v;
        this._styleManager.update();
      }

      /**
       * Allow for w to be overwritten by user if also in component's style file
       * @return {number}
       */
    }, {
      key: "w",
      get: function get() {
        var _this$style;
        return this._wSetByUser && this._w || ((_this$style = this.style) === null || _this$style === void 0 ? void 0 : _this$style.w) || 0;
      }

      /**
       * Set the w property
       * @param {number} v - The w value to set
       */,
      set: function set(v) {
        if (this._w === v) return;
        _set(withThemeStyles_getPrototypeOf(_class.prototype), "w", v, this, true);
        this._wSetByUser = true;
        this._updateThemeComponent();
      }

      /**
       * Get the h property
       * @return {number}
       */
    }, {
      key: "h",
      get: function get() {
        var _this$style2;
        return this._hSetByUser && this._h || ((_this$style2 = this.style) === null || _this$style2 === void 0 ? void 0 : _this$style2.h) || this._h || 0;
      }

      /**
       * Set the h property
       * @param {number} v - The h value to set
       */,
      set: function set(v) {
        if (this._h === v) return;
        _set(withThemeStyles_getPrototypeOf(_class.prototype), "h", v, this, true);
        this._hSetByUser = true;
        this._updateThemeComponent();
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }, {
      key: "__componentName",
      get: function get() {
        if (!_get(withThemeStyles_getPrototypeOf(_class), "__componentName", this)) {
          throw new Error("A valid static __componentName property is required for theming to work properly. Please add this to the ".concat(this.constructor.name, " class."));
        }
        return _get(withThemeStyles_getPrototypeOf(_class), "__componentName", this);
      }
    }, {
      key: "__mixinStyle",
      get: function get() {
        return mixinStyle;
      }
    }]);
    return _class;
  }(Base);
}

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withUpdates/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ withUpdates)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/global-update-manager/GlobalUpdateManager.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



function capital(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Merge the componentConfigProp with the prop value
function mergeProps(componentConfigProp, prop) {
  var _result;
  var result = prop;
  if (_typeof(componentConfigProp) === 'object' && Object.keys(componentConfigProp).length && _typeof(prop) === 'object') {
    result = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(componentConfigProp, prop);
  }
  return (_result = result) !== null && _result !== void 0 ? _result : componentConfigProp;
}
function getPropertyDescriptor(name, key) {
  return {
    get: function get() {
      var _this$__componentConf3;
      var customGetter = this["_get".concat(capital(name))];
      if (customGetter && typeof customGetter === 'function') {
        var _this$__componentConf, _this$__componentConf2;
        var value = customGetter.call(this, this[key]);
        this[key] = value || ((_this$__componentConf = this.__componentConfigProps) === null || _this$__componentConf === void 0 ? void 0 : _this$__componentConf[name]); // Defaults can also be set from withThemeStyles if used
        return mergeProps((_this$__componentConf2 = this.__componentConfigProps) === null || _this$__componentConf2 === void 0 ? void 0 : _this$__componentConf2[name], value);
      }
      return mergeProps((_this$__componentConf3 = this.__componentConfigProps) === null || _this$__componentConf3 === void 0 ? void 0 : _this$__componentConf3[name], this[key]); // Defaults can also be set from withThemeStyles if used
    },
    set: function set(value) {
      var oldValue = this[key];
      if (value !== oldValue) {
        var changeHandler = this["_set".concat(capital(name))];
        if (changeHandler && typeof changeHandler === 'function') {
          value = changeHandler.call(this, value);
        }
        var newValue = key === 'style' ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this[key], value) : value;
        if (_typeof(this[key]) === 'object' && this[key] !== null && this[key].style) {
          // If the property is for a nested component, recursively combine it with the component's existing styles, ensuring that any styles defined in componentConfig are also applied.
          var style = (0,_utils__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this[key].style, value.style || {});
          newValue.style = style;
        }
        this[key] = newValue;
        this.queueRequestUpdate();
      }
    },
    configurable: true,
    enumerable: true
  };
}
function getAliasPropertyDescriptor(prev, curr) {
  var deprecationWarning = "The property \"".concat(prev, "\" is deprecated and will be removed in a future release. Please use \"").concat(curr, "\" instead.");
  return {
    get: function get() {
      console.warn(deprecationWarning);
      return this[curr];
    },
    set: function set(value) {
      console.warn(deprecationWarning);
      this[curr] = value;
    }
  };
}
function withUpdates(Base) {
  return /*#__PURE__*/function (_Base) {
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_construct",
      value: function _construct() {
        var _this = this;
        var prototype = Object.getPrototypeOf(this);
        if (!prototype._withUpdatesInitialized) {
          // create custom accessors and mutators for the props in the properties array
          var props = this.constructor.properties || [];
          props.forEach(function (name) {
            var key = '_' + name;
            var descriptor = getPropertyDescriptor(name, key);
            if (descriptor !== undefined) {
              Object.defineProperty(prototype, name, descriptor);
            }
          });

          // create custom accessors and mutators that map the props in the alias array to
          // the props in the properties array (and use the getters/setters defined above)
          var aliasProps = this.constructor.aliasProperties || [];
          aliasProps.forEach(function (alias) {
            if (alias && typeof alias.prev === 'string' && typeof alias.curr === 'string') {
              var descriptor = getAliasPropertyDescriptor(alias.prev, alias.curr);
              if (descriptor !== undefined) {
                Object.defineProperty(prototype, alias.prev, descriptor);
              }
            }
          });
          prototype._withUpdatesInitialized = true;
        }
        this._whenEnabled = new Promise(function (resolve) {
          _this._whenEnabledResolver = resolve;
        });
        _get(_getPrototypeOf(_class.prototype), "_construct", this) && _get(_getPrototypeOf(_class.prototype), "_construct", this).call(this);
      }
    }, {
      key: "queueRequestUpdate",
      value: function queueRequestUpdate() {
        if (!this._isAttached()) return;
        _globals__WEBPACK_IMPORTED_MODULE_1__/* .updateManager */ .Y.addRequestUpdate(this);
      }
    }, {
      key: "_firstEnable",
      value: function _firstEnable() {
        this._readyForUpdates = true;
        this._whenEnabledResolver();
        _globals__WEBPACK_IMPORTED_MODULE_1__/* .updateManager */ .Y.deleteRequestUpdate(this);
        this.requestUpdate();
        _get(_getPrototypeOf(_class.prototype), "_firstEnable", this) && _get(_getPrototypeOf(_class.prototype), "_firstEnable", this).call(this);
      }
    }, {
      key: "requestEarlyUpdate",
      value: function requestEarlyUpdate() {
        this._readyForUpdates = true;
        if (_globals__WEBPACK_IMPORTED_MODULE_1__/* .updateManager */ .Y.hasQueuedRequestFor(this)) {
          _globals__WEBPACK_IMPORTED_MODULE_1__/* .updateManager */ .Y.deleteRequestUpdate(this);
          // method also triggers ready for updates
          this._readyForUpdates = true;
          this.requestUpdate();
          return true;
        }
        return false;
      }
    }, {
      key: "_detach",
      value: function _detach() {
        _get(_getPrototypeOf(_class.prototype), "_detach", this).call(this);
        _globals__WEBPACK_IMPORTED_MODULE_1__/* .updateManager */ .Y.deleteRequestUpdate(this);
      }

      /**
       * Request an immediate component update.
       *
       * @remarks
       * Except for when calling `super._update()` from a `_update()`
       * implementation, call this instead of calling `_update()` directly
       *
       * @param {boolean} force If set, bypasses the '_readyForUpdates' check
       */
    }, {
      key: "requestUpdate",
      value: function requestUpdate() {
        var _this2 = this;
        var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (this._readyForUpdates || force) {
          var result = this._update();
          if (_typeof(result) === 'object' && result !== null && result["catch"]) {
            // This is a promise, make sure to capture any errors
            result["catch"](function (e) {
              _globals__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.error("asyncronous _update() error in '".concat(_this2.constructor.__componentName, "'"), _this2, e);
            });
          }
        }
      }
    }, {
      key: "logPropTable",
      value: function logPropTable() {
        console.table(this._propTable);
      }
    }, {
      key: "_propTable",
      get: function get() {
        var _this3 = this;
        return this.constructor.properties.reduce(function (acc, prop) {
          acc[prop] = _this3[prop];
          return acc;
        }, {});
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }]);
    return _class;
  }(Base);
}

/***/ }),

/***/ "../../@lightningjs/ui-components/src/shaders/FadeShader.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ FadeShader)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
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


var FadeShader = /*#__PURE__*/function (_lng$shaders$WebGLDef) {
  _inherits(FadeShader, _lng$shaders$WebGLDef);
  var _super = _createSuper(FadeShader);
  function FadeShader(context) {
    var _this;
    _classCallCheck(this, FadeShader);
    _this = _super.call(this, context);
    _this._margin = {
      left: 0,
      right: 0
    };
    return _this;
  }
  _createClass(FadeShader, [{
    key: "positionLeft",
    set: function set(v) {
      this._positionLeft = v;
    }
  }, {
    key: "positionRight",
    set: function set(v) {
      this._positionRight = v;
    }
  }, {
    key: "setupUniforms",
    value: function setupUniforms(operation) {
      _get(_getPrototypeOf(FadeShader.prototype), "setupUniforms", this).call(this, operation);
      var owner = operation.shaderOwner;
      if (this._positionLeft === 0) {
        this._positionLeft = 0.001;
      }
      if (this._positionRight === 0) {
        this._positionRight = 0.001;
      }
      var renderPrecision = this.ctx.stage.getRenderPrecision();
      this._setUniform('margin', [this._positionLeft * renderPrecision, this._positionRight * renderPrecision], this.gl.uniform1fv);
      this._setUniform('resolution', new Float32Array([owner._w * renderPrecision, owner._h * renderPrecision]), this.gl.uniform2fv);
    }
  }]);
  return FadeShader;
}(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.shaders.WebGLDefaultShader);

FadeShader.fragmentShaderSource = "\n  #ifdef GL_ES\n  # ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  # else\n  precision lowp float;\n  # endif\n  #endif\n\n  #define PI 3.14159265359\n\n  varying vec2 vTextureCoord;\n  varying vec4 vColor;\n\n  uniform sampler2D uSampler;\n  uniform vec2 resolution;\n  uniform float margin[2];\n\n  void main() {\n      vec4 color = texture2D(uSampler, vTextureCoord) * vColor;\n      vec2 halfRes = 0.5 * resolution.xy;\n      vec2 point = vTextureCoord.xy * resolution;\n\n\n      vec2 pos1 = vec2(point.x, point.y);\n      vec2 pos2 = pos1;\n      pos2.x += margin[0];\n\n      vec2 d = pos2 - pos1;\n      float t = dot(pos1, d) / dot(d, d);\n      t = smoothstep(0.0, 1.0, clamp(t, 0.0, 1.0));\n\n      vec2 pos3 = vec2(vTextureCoord.x * resolution.x, vTextureCoord.y);\n      pos3.x -= resolution.x - margin[1];\n      vec2 pos4 = vec2(vTextureCoord.x + margin[1], vTextureCoord.y);\n\n      vec2 d2 = pos4 - pos3;\n      float t2 = dot(pos3, d2) / dot(d2, d2);\n      t2 = smoothstep(0.0, 1.0, clamp(t2, 0.0, 1.0));\n\n      color = mix(vec4(0.0), color, t);\n      color = mix(color, vec4(0.0), t2);\n\n      gl_FragColor = color;\n  }\n";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/textures/CustomImageTexture.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CustomImageTexture)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/**
 * Represents an image texture that supports loading blob images and SVG strings without using web workers.
 */

/**
 * Checks the file type based on the given string.
 * @param {string} str - The input string to check.
 * @returns {string} The file type.
 */
function checkFileType(str) {
  if (str.startsWith('<svg')) {
    return 'SVG';
  } else if (str.startsWith('blob:')) {
    return 'Blob';
  } else if (/\.(jpeg|jpg|gif|png|svg)$/i.test(str)) {
    return 'Image';
  } else {
    return 'Unknown';
  }
}

/**
 * Creates an SVG canvas.
 * @param {function} cb - The callback function.
 * @param {object} stage - The stage object.
 * @param {string} url - The URL of the SVG.
 * @param {number} w - The width of the canvas.
 * @param {number} h - The height of the canvas.
 */
function createSvg(cb, stage, url, w, h) {
  var canvas = stage.platform.getDrawingCanvas();
  var ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = true;
  var img = new Image();
  img.onload = function () {
    canvas.width = w;
    canvas.height = h;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    cb(null, {
      source: canvas,
      w: w,
      h: h
    });
  };
  img.onerror = function (err) {
    cb(err);
  };

  // On the PS4 platform setting the `crossOrigin` attribute on images
  // can cause CORS failures.
  if (!_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Utils.isPS4) {
    img.crossOrigin = 'Anonymous';
  }
  img.src = url;
}

/**
 * Loads an image from the given source.
 * @param {object} params - The parameters object.
 * @param {string} params.src - The source URL of the image.
 * @param {function} cb - The callback function.
 * @returns {function} A cancel callback function.
 */
function imageLoader(_ref, cb) {
  var src = _ref.src;
  var image = new Image();

  // On the PS4 platform setting the `crossOrigin` attribute on
  // images can cause CORS failures.
  if (!(src.substr(0, 5) == 'data:') && !_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Utils.isPS4) {
    image.crossOrigin = 'Anonymous';
  }
  image.onerror = function () {
    // Ignore error message when cancelled.
    if (image.src) {
      return cb('Image load error');
    }
  };
  image.onload = function () {
    cb(null, {
      source: image,
      renderInfo: {
        src: src,
        compressed: false
      },
      hasAlpha: true
    });
  };
  image.src = src;
  return function () {
    // Cancel Callback
    image.onerror = null;
    image.onload = null;
    image.removeAttribute('src');
  };
}

/**
 * Represents an image texture.
 */
var CustomImageTexture = /*#__PURE__*/function (_lng$Texture) {
  _inherits(CustomImageTexture, _lng$Texture);
  var _super = _createSuper(CustomImageTexture);
  /**
   * Creates a new ImageTexture instance.
   * @param {object} stage - The stage object.
   */
  function CustomImageTexture(stage) {
    var _this;
    _classCallCheck(this, CustomImageTexture);
    _this = _super.call(this, stage);
    _this._src = undefined;
    _this._hasAlpha = false;
    return _this;
  }

  /**
   * Gets the source URL of the image.
   * @returns {string} The source URL.
   */
  _createClass(CustomImageTexture, [{
    key: "src",
    get: function get() {
      return this._src;
    }

    /**
     * Sets the source URL of the image.
     * @param {string} v - The source URL.
     */,
    set: function set(v) {
      if (this._src !== v) {
        this._src = v;
        this._changed();
      }
    }

    /**
     * Gets the flag indicating whether the image has an alpha channel.
     * @returns {boolean} The flag value.
     */
  }, {
    key: "hasAlpha",
    get: function get() {
      return this._hasAlpha;
    }

    /**
     * Sets the flag indicating whether the image has an alpha channel.
     * @param {boolean} v - The flag value.
     */,
    set: function set(v) {
      if (this._hasAlpha !== v) {
        this._hasAlpha = v;
        this._changed();
      }
    }

    /**
     * Gets the width of the image.
     * @returns {number} The width value.
     */
  }, {
    key: "w",
    get: function get() {
      return this._w;
    }

    /**
     * Sets the width of the image.
     * @param {number} l - The width value.
     */,
    set: function set(l) {
      this._w = l;
      this._changed();
    }

    /**
     * Gets the height of the image.
     * @returns {number} The height value.
     */
  }, {
    key: "h",
    get: function get() {
      return this._h;
    }

    /**
     * Sets the height of the image.
     * @param {number} l - The height value.
     */,
    set: function set(l) {
      this._h = l;
      this._changed();
    }

    /**
     * Checks if the image texture is valid.
     * @returns {boolean} True if valid, otherwise false.
     */
  }, {
    key: "_getIsValid",
    value: function _getIsValid() {
      return !!this._src;
    }

    /**
     * Gets the lookup ID of the image texture.
     * @returns {string} The lookup ID.
     */
  }, {
    key: "_getLookupId",
    value: function _getLookupId() {
      return this._src;
    }

    /**
     * Gets the source loader function for the image texture.
     * @returns {function} The source loader function.
     */
  }, {
    key: "_getSourceLoader",
    value: function _getSourceLoader() {
      var _this2 = this;
      var w = this._w;
      var h = this._h;
      var src = this._src;
      var hasAlpha = this._hasAlpha;
      if (this.stage.getOption('srcBasePath')) {
        var fc = src.charCodeAt(0);
        if (src.indexOf('//') === -1 && (fc >= 65 && fc <= 90 || fc >= 97 && fc <= 122 || fc == 46)) {
          // Alphabetical or dot: prepend base path.
          src = this.stage.getOption('srcBasePath') + src;
        }
      }
      return function (cb) {
        var fileType = checkFileType(src);
        switch (fileType) {
          case 'SVG':
            return createSvg(cb, _this2.stage, "data:image/svg+xml,".concat(encodeURIComponent(src)), w, h);
          case 'Blob':
            return imageLoader({
              src: src
            }, cb);
          default:
            return _this2.stage.platform.loadSrcTexture({
              src: src,
              hasAlpha: hasAlpha
            }, cb);
        }
      };
    }

    /**
     * Gets the non-default properties of the image texture.
     * @returns {object} The non-default properties.
     */
  }, {
    key: "getNonDefaults",
    value: function getNonDefaults() {
      var obj = _get(_getPrototypeOf(CustomImageTexture.prototype), "getNonDefaults", this).call(this);
      if (this._src) {
        obj.src = this._src;
      }
      return obj;
    }
  }]);
  return CustomImageTexture;
}(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Texture);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/utils/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C2: () => (/* binding */ getValidColor),
/* harmony export */   Ds: () => (/* binding */ debounce),
/* harmony export */   Ff: () => (/* binding */ getY),
/* harmony export */   Fp: () => (/* binding */ max),
/* harmony export */   Ht: () => (/* binding */ degreesToRadians),
/* harmony export */   J: () => (/* binding */ isComponentOnScreen),
/* harmony export */   Jk: () => (/* binding */ parseInlineContent),
/* harmony export */   OO: () => (/* binding */ getWidthByUpCount),
/* harmony export */   T5: () => (/* binding */ getH),
/* harmony export */   Ux: () => (/* binding */ measureTextWidth),
/* harmony export */   WV: () => (/* binding */ getW),
/* harmony export */   Xv: () => (/* binding */ getHexColor),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   d9: () => (/* binding */ clone),
/* harmony export */   fm: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   hP: () => (/* binding */ getShortestDistance),
/* harmony export */   ir: () => (/* binding */ stringifyCompare),
/* harmony export */   nB: () => (/* binding */ getValFromObjPath),
/* harmony export */   nZ: () => (/* binding */ getX),
/* harmony export */   t_: () => (/* binding */ getDimensions),
/* harmony export */   vm: () => (/* binding */ watchForUpdates),
/* harmony export */   wG: () => (/* binding */ reduceFraction),
/* harmony export */   wO: () => (/* binding */ getWidthByColumnSpan),
/* harmony export */   xH: () => (/* binding */ flatten)
/* harmony export */ });
/* unused harmony exports getEuclideanDistance, getColumnX, getItemRatioDimensions, getAspectRatioW, getAspectRatioH, rgba2argb, lowercaseFirstLetter, RoundRect, getFirstNumber, getDimension, objectPropertyOf, delayForAnimation, downloadFile, isMarkupString, createConditionalZContext, convertTextAlignToFlexJustify */
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _globals_context_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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




/**
 *
 * Layout Utils
 *
 */

/**
 * Copyright (c) 2009-2012 Jeremy Ashkenas, DocumentCloud
 * Licensed under the MIT License
 * Copyright (c) 2012-2018 The Debounce Contributors. See CONTRIBUTORS
 * Licensed under the MIT License
 */

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear'
 * that is a function which will clear the timer to prevent previously scheduled executions.
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {function} function to wrap
 * @param {number} timeout in ms (`100`)
 * @param {boolean} whether to execute at the beginning (`false`)
 * @api public
 */
function debounce(func, wait, immediate) {
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;
  function later() {
    var last = Date.now() - timestamp;
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  }
  var debounced = function debounced() {
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
  debounced.clear = function () {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  debounced.flush = function () {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      clearTimeout(timeout);
      timeout = null;
    }
  };
  return debounced;
}
function getEuclideanDistance(xA, yA, xB, yB) {
  var xDiff = xA - xB;
  var yDiff = yA - yB;
  return Math.sqrt(Math.pow(xDiff, 2) + Math.sqrt(Math.pow(yDiff, 2)));
}

/**
 * Returns the shortest distance between a coordinate and a corner or center of an element.
 * @param {[number, number]} coordinate
 * @param {Element} element
 *
 * @return {number} shortest distance between a coordinate and a corner or center of an element.
 */
function getShortestDistance(coordinate, element) {
  var _coordinate = _slicedToArray(coordinate, 2),
    xA = _coordinate[0],
    yA = _coordinate[1];
  var _ref = element.core ? element.core.getAbsoluteCoords(0, 0) : [0, 0],
    _ref2 = _slicedToArray(_ref, 2),
    xB = _ref2[0],
    yB = _ref2[1];
  var distanceToStart = getEuclideanDistance(xA, yA, xB, yB);
  var distanceToMiddle = getEuclideanDistance(xA, yA, xB + element.w / 2, yB + element.h / 2);
  var distanceToEnd = getEuclideanDistance(xA, yA, xB + element.w, yB + element.h);
  return Math.min(distanceToStart, distanceToMiddle, distanceToEnd);
}
function isComponentOnScreen(component) {
  var offsets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!component) return false;
  var w = component.w,
    h = component.h,
    _component$core = component.core,
    _component$core2 = _component$core === void 0 ? {} : _component$core,
    _component$core2$rend = _component$core2.renderContext,
    px = _component$core2$rend.px,
    py = _component$core2$rend.py,
    _component$core2$_sci = _component$core2._scissor,
    scissor = _component$core2$_sci === void 0 ? [] : _component$core2$_sci;
  var stageH = component.stage.h / component.stage.getRenderPrecision();
  var stageW = component.stage.w / component.stage.getRenderPrecision();
  var finalX = px;
  var finalY = py;
  // keep track of the different between the the absolute world position and relative position
  var relativeOffsetX = px - component.x;
  var relativeOffsetY = py - component.y;
  var offsetX = offsets.offsetX - relativeOffsetX || 0;
  var offsetY = offsets.offsetY - relativeOffsetY || 0;
  // if the current component is animating, apply the relative offset to the transition value
  if (component.transition('x')) {
    finalX = px - component.x + component.transition('x').targetValue;
  }
  if (component.transition('y')) {
    finalY = py - component.y + component.transition('y').targetValue;
  }
  // apply any offset passed into the function
  // this is mainly used to parent components that are transitioning,
  // like in the case of Rows nested inside of Columns where the Rows themselves do not animate,
  // but their parent container does
  finalX += offsetX;
  finalY += offsetY;
  var wVis = finalX >= 0 && finalX + w <= stageW;
  var hVis = finalY >= 0 && finalY + h <= stageH;
  if (!wVis || !hVis) return false;
  if (scissor && scissor.length) {
    var _scissor = _slicedToArray(scissor, 4),
      _scissor$ = _scissor[0],
      leftBounds = _scissor$ === void 0 ? null : _scissor$,
      _scissor$2 = _scissor[1],
      topBounds = _scissor$2 === void 0 ? null : _scissor$2,
      _scissor$3 = _scissor[2],
      clipWidth = _scissor$3 === void 0 ? null : _scissor$3,
      _scissor$4 = _scissor[3],
      clipHeight = _scissor$4 === void 0 ? null : _scissor$4;
    var withinLeftClippingBounds = Math.round(finalX + w) >= Math.round(leftBounds);
    var withinRightClippingBounds = Math.round(finalX) <= Math.round(leftBounds + clipWidth);
    var withinTopClippingBounds = Math.round(finalY + h) >= Math.round(topBounds);
    var withinBottomClippingBounds = Math.round(finalY + h) <= Math.round(topBounds + clipHeight);
    return withinLeftClippingBounds && withinRightClippingBounds && withinTopClippingBounds && withinBottomClippingBounds;
  }
  return true;
}

/**
 * Returns the width of an item based on upCount.
 *
 * @param {number} upCount
 * @returns {number}
 */
function getWidthByUpCount(theme) {
  var upCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var screenW = theme.layout.screenW;
  var columnCount = theme.layout.columnCount;
  var marginX = theme.layout.marginX;
  var gutterX = theme.layout.gutterX;
  if (upCount < 1 || upCount > columnCount) {
    console.error("Column expects a number between 1 & ".concat(columnCount, ". Received ").concat(upCount));
    return;
  }

  // the screen width, minus the margin x on each side
  var columnWidth = screenW - marginX * 2;
  // the total space of column gaps in between items
  var columnGapTotal = (upCount - 1) * gutterX;
  // the remaining amount of space left for all items
  var totalColumnsWidth = columnWidth - columnGapTotal;
  // the width of each item in that remaining width
  return totalColumnsWidth / upCount;
}

/**
 * Returns the width of an item based on how many columns to span.
 *
 * @param {number} columnSpan
 * @returns {number}
 */
function getWidthByColumnSpan(theme, columnSpan) {
  var columnCount = theme.layout.columnCount;
  var gutterX = theme.layout.gutterX;
  return getWidthByUpCount(theme, columnCount) * columnSpan + gutterX * (columnSpan - 1);
}

/**
 * Returns the x position of a specified column number based on the theme's columnCount.
 *
 * @param {number} column
 * @returns {number}
 */
function getColumnX(theme) {
  var column = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var columnCount = theme.layout.columnCount;
  var marginX = theme.layout.marginX;
  var gutterX = theme.layout.gutterX;
  return marginX + (getWidthByUpCount(theme, columnCount) + gutterX) * column;
}

/**
 * Determines the width and height of an item based off the data passed into the item
 * (either all necessary parameters to calculate the dimensions dynamically,
 * OR all the necessary parameters to hard set the dimensions).
 *
 * @param { object } obj
 * @param { object } fallback
 *
 * @return { { number, number } }
 */
function getDimensions(theme) {
  var obj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var w = obj.w,
    h = obj.h,
    ratioX = obj.ratioX,
    ratioY = obj.ratioY,
    upCount = obj.upCount;
  var fallbackW = fallback.w || 0;
  var fallbackH = fallback.h || 0;
  var dimensions = {};

  // hard set width and height values were passed in and should override other params
  if (w && h) {
    dimensions = {
      w: w,
      h: h
    };
  } else if (h && ratioX && ratioY) {
    // hard set height and ratio values were passed in, meaning the row has items with mixed ratios, so the width needs to be calculated
    dimensions = {
      w: Math.round(h * ratioX / ratioY),
      h: h
    };
    // calculate dynamic width and height based off item ratios
  } else if (ratioX && ratioY && upCount) {
    dimensions = getItemRatioDimensions(theme, ratioX, ratioY, upCount);
  } else if (h && upCount) {
    // calculate dynamic width based off a row upcount and a given height
    dimensions = {
      w: Math.round(getWidthByUpCount(theme, upCount)),
      h: h
    };
  } else if (h) {
    dimensions = {
      w: fallbackW,
      h: h
    };
  } else if (w) {
    dimensions = {
      w: w,
      h: fallbackH
    };
  } else {
    // not enough information was provided to properly size the component
    dimensions = {
      w: fallbackW,
      h: fallbackH
    };
  }
  dimensions = _objectSpread(_objectSpread({}, dimensions), {}, {
    ratioX: ratioX,
    ratioY: ratioY,
    upCount: upCount
  });
  return dimensions;
}

/**
 * Calculates the width and height of an item based off the given ratios
 * and number of columns across the screen that should be visible before peaking
 *
 * @param { number } ratioX
 * @param { number } ratioY
 * @param { number } upCount
 *
 * @return { { number, number } }
 */
function getItemRatioDimensions(theme, ratioX, ratioY, upCount) {
  var w, h;
  if (ratioX && ratioY && upCount) {
    w = Math.round(getWidthByUpCount(theme, upCount));
    h = Math.round(w / ratioX * ratioY);
  } else {
    w = 0;
    h = 0;
  }
  return {
    w: w,
    h: h
  };
}

/**
 * /Layout utils
 */

function getAspectRatioW(h) {
  var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16:9';
  var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ':';
  var _ratio$split = ratio.split(seperator),
    _ratio$split2 = _slicedToArray(_ratio$split, 2),
    ratioW = _ratio$split2[0],
    ratioH = _ratio$split2[1];
  return h * (ratioW / ratioH);
}
function getAspectRatioH(w) {
  var ratio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16:9';
  var seperator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ':';
  var _ratio$split3 = ratio.split(seperator),
    _ratio$split4 = _slicedToArray(_ratio$split3, 2),
    ratioW = _ratio$split4[0],
    ratioH = _ratio$split4[1];
  return w / (ratioW / ratioH);
}

/**
 * Combines rgb hex string and alpha into argb hexadecimal number
 * @param {string|number} hex - 6 alphanumeric characters between 0-f or argb hexadecimal number
 * @param {number} [alpha] - number between 0-1 (0 is invisible, 1 is opaque)
 */
function getHexColor(hex) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  if (!hex) {
    return 0x00;
  }
  if (typeof hex === 'number') {
    hex = hex.toString(16).slice(2);
  }
  hex = hex.replace('#', '');
  var hexAlpha = Math.round(alpha * 255).toString(16);
  var str = "0x".concat(hexAlpha).concat(hex);
  return Number(str);
}

/**
 * Returns valid string of HEX color
 *
 * @param {string} color
 * @param {boolean} fill
 */
function getValidColor(color) {
  if (/^0x[0-9a-fA-F]{8}/g.test(color)) {
    // User enters a valid 0x00000000 hex code
    return Number(color);
  } else if (/^#[0-9a-fA-F]{6}/g.test(color)) {
    // User enters valid #000000 hex code
    return getHexColor(color.substr(1, 6));
  } else if (typeof color === 'string' && /^[0-9]{8,10}/g.test(color)) {
    return parseInt(color);
  } else if (typeof color === 'number' && /^[0-9]{8,10}/g.test(color.toString())) {
    return color;
  } else if (typeof color === 'string' && color.indexOf('rgba') > -1) {
    return rgba2argb(color);
  } else if (typeof color === 'string' && color.indexOf('rgb') > -1) {
    var rgba = [].concat(_toConsumableArray(color.replace(/rgb\(|\)/g, '').split(',')), ['255']);
    return _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.StageUtils.getArgbNumber(rgba);
  }
  return null;
}
function simplifyFraction(_ref3) {
  var _ref4 = _slicedToArray(_ref3, 2),
    numerator = _ref4[0],
    denominator = _ref4[1];
  for (var i = numerator; i > 0; i--) {
    if (!(numerator % i) && !(denominator % i)) {
      return [numerator / i, denominator / i];
    }
  }
}

/**
 * Reduce a fraction represented as a string
 * @param {string} - a reprentation of a fraction in this format 16/9
 * @return {string} - a reduced representation of the fraction
 */
function reduceFraction(string) {
  return simplifyFraction(string.split('/').map(function (n) {
    return +n;
  })).join('/');
}

/**
 * Gets the value at `path` of `object`.
 * @param {object} object
 * @param {string|Array} path
 * @return {*} value if exists else undefined
 */
var getValFromObjPath = function getValFromObjPath(object, path) {
  if (typeof path === 'string') path = path.split('.').filter(function (key) {
    return key.length;
  });
  return path.reduce(function (dive, key) {
    return dive && dive[key];
  }, object);
};

/**
 * Lightning uses ARGB values, use this function
 * to convert know color to Lightning value
 * https://ifpb.github.io/javascript-guide/ecma/expression-and-operator/argb.html
 */
function rgba2argb(rgbaStr) {
  var rgba = rgbaStr.replace(/rgba\(|\)/g, '').split(',');
  // Multiple Alpha Value
  rgba[3] = rgba[3] * 255;
  return _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.StageUtils.getArgbNumber(rgba);
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function lowercaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

/**
 * Helpers for lng.Tools.getRoundRect
 */
var RoundRect = {
  /**
   * Returns a value that will render as the given width (w)
   * when passed to lng.Tools.getRoundRect
   * @param {number} w - px value for expected width
   * @param {*} options
   * @param {number} options.padding - px value for both left and right padding
   * @param {number} options.paddingLeft - px value for left padding, overrides options.padding
   * @param {number} options.paddingRight - px value for right padding, overrides options.padding
   * @param {number} options.strokeWidth - px value for stroke width
   */
  getWidth: function getWidth(w) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _padding$paddingLeft$ = _objectSpread({
        padding: 0,
        paddingLeft: 0,
        paddingRight: 0,
        strokeWidth: 0
      }, options),
      padding = _padding$paddingLeft$.padding,
      paddingLeft = _padding$paddingLeft$.paddingLeft,
      paddingRight = _padding$paddingLeft$.paddingRight,
      strokeWidth = _padding$paddingLeft$.strokeWidth;
    if (!w) return 0;
    return w - (paddingLeft || padding) - (paddingRight || padding) - strokeWidth;
  },
  /**
   * Returns a value that will render as the given height (h)
   * when passed to lng.Tools.getRoundRect
   * @param {number} h - px value for expected width
   * @param {*} options
   * @param {number} options.padding - px value for both bottom and top padding
   * @param {number} options.paddingBottom - px value for bottom padding, overrides options.padding
   * @param {number} options.paddingTop - px value for top padding, overrides options.padding
   * @param {number} options.strokeWidth - px value for stroke width
   */
  getHeight: function getHeight(h) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _padding$paddingBotto = _objectSpread({
        padding: 0,
        paddingBottom: 0,
        paddingTop: 0,
        strokeWidth: 0
      }, options),
      padding = _padding$paddingBotto.padding,
      paddingBottom = _padding$paddingBotto.paddingBottom,
      paddingTop = _padding$paddingBotto.paddingTop,
      strokeWidth = _padding$paddingBotto.strokeWidth;
    if (!h) return 0;
    return h - (paddingBottom || padding) - (paddingTop || padding) - strokeWidth;
  }
};

/**
 * Merges two objects together and returns the duplicate.
 *
 * @param {object} target - object to be cloned
 * @param {object} [object] - secondary object to merge into clone
 */
function clone(target, object) {
  // Make sure getters and setters are applied correctly
  var _clone = Object.create(Object.getPrototypeOf(target));
  Object.defineProperties(_clone, Object.getOwnPropertyDescriptors(target));
  if (!object || target === object) return _clone;
  for (var key in object) {
    var value = object[key];
    if (target.hasOwnProperty(key)) {
      _clone[key] = getMergeValue(key, target, object);
    } else {
      _clone[key] = value;
    }
  }
  return _clone;
}
function getMergeValue(key, target, object) {
  var targetVal = target[key];
  var objectVal = object[key];
  var targetValType = _typeof(targetVal);
  var objectValType = _typeof(objectVal);
  if (targetValType !== objectValType || objectValType === 'function' || Array.isArray(objectVal)) {
    return objectVal;
  }
  if (objectVal && objectValType === 'object') {
    return clone(targetVal, objectVal);
  }
  return objectVal;
}

/**
 * Returns the rendered width of a given text texture
 * @param {object} text - text texture properties
 * @param {string} text.text - text value
 * @param {string} text.fontStyle - css font-style property
 * @param {(string|number)} text.fontWeight - css font-weight property
 * @param {string} [fontSize=0] - css font-size property (in px)
 * @param {string} [text.fontFamily=sans-serif] - css font-weight property
 * @param {string} text.fontFace - alias for fontFamily
 *
 * @return {number} text width
 * */
function measureTextWidth() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var fontStyle = text.fontStyle,
    fontWeight = text.fontWeight,
    fontSize = text.fontSize,
    _text$fontFamily = text.fontFamily,
    fontFamily = _text$fontFamily === void 0 ? text.fontFace || 'sans-serif' : _text$fontFamily;
  var fontCss = [fontStyle, fontWeight, fontSize ? "".concat(fontSize, "px") : '0', "'".concat(fontFamily, "'")].filter(Boolean).join(' ');
  ctx.font = fontCss;
  var textMetrics = ctx.measureText(text.text || '');
  return Math.round(textMetrics.width);
}

/**
 * Returns first argument that is a number. Useful for finding ARGB numbers. Does not convert strings to numbers
 * @param {...*} number - maybe a number
 **/
function getFirstNumber() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.find(Number.isFinite);
}

/**
 * Naively looks for dimensional prop (i.e. w, h, x, y, etc.), first searching for
 * a transition target value then defaulting to the current set value
 * @param {string} prop - property key
 * @param {lng.Component} component - Lightning component to operate against
 */
function getDimension(prop, component) {
  if (!component) return 0;
  var transition = component.transition(prop);
  if (transition.isRunning()) return transition.targetValue;
  var renderProp = prop;
  if (prop === 'w') {
    renderProp = 'renderWidth';
  } else if (prop === 'h') {
    renderProp = 'renderHeight';
  }
  return component[renderProp] || component[prop];
}
var getX = function getX(component) {
  return getDimension('x', component);
};
var getY = function getY(component) {
  return getDimension('y', component);
};
var getW = function getW(component) {
  return getDimension('w', component);
};
var getH = function getH(component) {
  return getDimension('h', component);
};

/**
 * Array.prototype.flat() is not supported in WPE Browser
 *
 * @param {array} arr
 *
 * @return {array}
 */
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}
function objectPropertyOf(object, path) {
  return path.reduce(function (obj, key) {
    return obj && obj[key] !== 'undefined' ? obj[key] : undefined;
  }, object);
}
function stringifyCompare(objA, objB) {
  return JSON.stringify(objA) === JSON.stringify(objB);
}
function delayForAnimation(callback) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 16;
  setTimeout(callback, delay);
}
function downloadFile(content, fileName, contentType) {
  var validContentTypes = ['plain', 'json'];
  if (!validContentTypes.includes(contentType)) {
    contentType = 'plain';
  }
  var dataStr = "data:text/".concat(contentType, ";charset=utf-8,") + encodeURIComponent(JSON.stringify(content));
  var dlAnchorElem = document.createElement('a');
  dlAnchorElem.setAttribute('href', dataStr);
  dlAnchorElem.setAttribute('download', fileName);
  dlAnchorElem.click();
}
var degreesToRadians = function degreesToRadians(deg) {
  return deg * (Math.PI / 180);
};

/**
 *
 * Markup utils
 *
 */

var MARKUP_STRING_PATTERN = /({ICON.*?}|{BADGE:.*?}|{NEWLINE}|{TEXT:.*?})/g;
function isMarkupString() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  if (typeof str !== 'string') {
    return false;
  }
  return MARKUP_STRING_PATTERN.test(str);
}

/**
 * Returns an array of strings and icon, badge, newline, and text objects from a string using the syntax:
 * 'This is an {ICON:<title>|<url>} and {BADGE:<title>} badge test with a {NEWLINE} newline and {TEXT:<text>|<style>}.'
 *
 * i.e. 'This is an {ICON:settings|./assets/icons/settings.png} icon and {BADGE:HD} badge with a{NEWLINE} and {TEXT:red text|red}.'
 *  would create the array:
 *  [
 *    'This is an ',
 *    { icon: './assets/icons/settings.png', title: 'settings' },
 *    ' icon and ',
 *    { badge: 'HD' },
 *    ' badge with a',
 *    { newline: true },
 *    ' and ',
 *    { text: 'red text', style: 'red' },
 *    '.'
 *  ]
 *
 * @param {(string|object)} str
 *
 * @return {array}
 */
function parseInlineContent() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var content = [];
  if (str && typeof str === 'string' || str.text) {
    var string = typeof str === 'string' ? str : str.text;
    var iconRegEx = /^{ICON:(.*?)?\|(.*?)?}$/g;
    var badgeRegEx = /^{BADGE:(.*?)}$/g;
    var newlineRegEx = /^{NEWLINE}$/g;
    var textRegEx = /^{TEXT:(.*?)?\|(.*?)?}$/g;
    var splitStr = string.split(MARKUP_STRING_PATTERN);
    if (splitStr && splitStr.length) {
      splitStr.forEach(function (item) {
        var formattedItem = item;
        var badge = badgeRegEx.exec(item);
        var icon = iconRegEx.exec(item);
        var newline = newlineRegEx.exec(item);
        var text = textRegEx.exec(item);
        if (badge && badge[1]) {
          formattedItem = {
            badge: badge[1]
          };
        } else if (icon && icon[1]) {
          formattedItem = {
            title: icon[1],
            icon: icon[2] || icon[1]
          };
        } else if (newline) {
          formattedItem = {
            newline: true
          };
        } else if (text && text[1]) {
          formattedItem = {
            text: text[1],
            style: text[2]
          };
        }
        content.push(formattedItem);
      });
    }
  }
  return content;
}

/**
 * Given any number of arguments, returns the greatest number passed to the function.
 * If no valid numbers are passed in (ex. NaN, undefined, null), `undefined` will be returned.
 * @param {...*} arguments Any number of arguments may be passed into the function.
 *
 * @return {number|undefined} The greatest number passed in as an argument or `undefined` if no valid number was passed in.
 */
function max() {
  if (!arguments) {
    return;
  }
  var args = Array.from(arguments).filter(function (arg) {
    return !isNaN(arg) && arg != null;
  });
  if (!args.length) {
    return;
  }
  return Math.max.apply(Math, _toConsumableArray(args));
}

/**
 * Abstracts logic for conditionally forcing a zIndex Context on a component so that
 * any child components with zIndex are relative to it, and not the global zIndex context.
 * @param {lng.Component} component
 * @param {number} zOffset
 */
function createConditionalZContext(component, zOffset) {
  if (!component.zIndex && typeof zOffset !== 'undefined' && zOffset !== 0) {
    component.forceZIndexContext = true;
    component.zIndex = 0;
  }
}

/**
 * Runs a side effect function when any values of specified properties on an element change.
 * @param {object} options - defines the `element`, `watchProps`, and `sideEffect` options
 * @param {lng.Element} options.element - Lightning element on which property changes will watched
 * @param {String[]} options.watchProps - properties that when their value changes a side effect function is invoked
 * @param {function} options.sideEffect - function to be invoked when a watched property's value changes
 * @returns {lng.Element}
 */
function watchForUpdates(_ref5) {
  var _element$__core;
  var element = _ref5.element,
    _ref5$watchProps = _ref5.watchProps,
    watchProps = _ref5$watchProps === void 0 ? [] : _ref5$watchProps,
    _ref5$sideEffect = _ref5.sideEffect,
    sideEffect = _ref5$sideEffect === void 0 ? function () {} : _ref5$sideEffect;
  if (!(element !== null && element !== void 0 && element.isElement)) {
    _globals_context_logger__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.error("watchForUpdates: Expected a Lightning Element passed to element parameter, received ".concat(_typeof(element)));
  }
  var initialOnAfterUpdate = (_element$__core = element.__core) === null || _element$__core === void 0 ? void 0 : _element$__core._onAfterUpdate;
  element.onAfterUpdate = function (element) {
    var hasChanged = false;
    watchProps.forEach(function (prop) {
      if (element.transition(prop) && element.transition(prop).isRunning()) {
        return;
      }
      var prevValueKey = "__watchPrev".concat(prop);
      var nextValue = element[prop];
      if (nextValue !== element[prevValueKey]) {
        element[prevValueKey] = nextValue;
        hasChanged = true;
      }
    });
    if (hasChanged) {
      sideEffect();
    }

    // if an element already has an onAfterUpdate function, preserve that behavior
    if (initialOnAfterUpdate) {
      initialOnAfterUpdate(element);
    }
  }.bind(this);
  return element;
}

/**
 * Given a Lightning text alignment option (left, right, center),
 * return the Lightning flexbox equivalent.
 *
 * @param {string} align
 * @returns {string}
 */
function convertTextAlignToFlexJustify(align) {
  switch (align) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      // if there is no alignment passed in, the Lightning Text default is "left"
      console.warn("Expected \"textAlign\" values are \"left,\" \"center,\" and \"right,\" but instead, ".concat(align, " was received and will fall back to \"left.\""));
      return 'flex-start';
  }
}
var utils = {
  isMarkupString: isMarkupString,
  capitalizeFirstLetter: capitalizeFirstLetter,
  degreesToRadians: degreesToRadians,
  downloadFile: downloadFile,
  delayForAnimation: delayForAnimation,
  stringifyCompare: stringifyCompare,
  objectPropertyOf: objectPropertyOf,
  flatten: flatten,
  getDimension: getDimension,
  getFirstNumber: getFirstNumber,
  measureTextWidth: measureTextWidth,
  clone: clone,
  getMergeValue: getMergeValue,
  RoundRect: RoundRect,
  rgba2argb: rgba2argb,
  getValFromObjPath: getValFromObjPath,
  reduceFraction: reduceFraction,
  getValidColor: getValidColor,
  getHexColor: getHexColor,
  getAspectRatioH: getAspectRatioH,
  getAspectRatioW: getAspectRatioW,
  getWidthByUpCount: getWidthByUpCount,
  getDimensions: getDimensions,
  getWidthByColumnSpan: getWidthByColumnSpan,
  createConditionalZContext: createConditionalZContext,
  watchForUpdates: watchForUpdates,
  convertTextAlignToFlexJustify: convertTextAlignToFlexJustify
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);

/***/ }),

/***/ "./.storybook/preview.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _storybook_preview)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.js + 1 modules
var GridOverlay = __webpack_require__("../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/devtools/lightning-inspect.js
var lightning_inspect = __webpack_require__("../../../node_modules/@lightningjs/core/devtools/lightning-inspect.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/globals/pool/index.js
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

/*
Create a Lightning Object pool and then get the component from the pool.

By default we create two objects, with expectations that one is used at a time

Learn more about object pools
https://egghead.io/blog/object-pool-design-pattern
*/

var pools = new Map();
function get(key) {
  if (pools.has(key)) {
    var pool = pools.get(key);
    var index = pool.index;
    if (index >= pool.components.length) {
      index = 0;
    }
    pool.index = index + 1;
    return pool.components[index];
  }
  return false;
}
function clear() {
  pools.clear();
}
function create(_ref) {
  var name = _ref.name,
    component = _ref.component,
    stage = _ref.stage,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 2 : _ref$size;
  if (pools.has(name)) {
    return get(name);
  }
  component = component || {
    type: name
  };
  var components = [];
  for (var i = 0; i < size; i++) {
    components.push(stage.c(component));
  }
  pools.set(name, {
    index: 0,
    components: components
  });
  return get(name);
}
/* harmony default export */ const pool = ({
  get: get,
  create: create,
  clear: clear
});
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/mixins/withAnnouncer/index.js
var withAnnouncer = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/mixins/withAnnouncer/Speech.js
var Speech = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/Speech.js");
;// CONCATENATED MODULE: ./.storybook/utils/registerEvents.js
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



// creates an array of extensions
// added to the theme by setTheme in themeSelect
// const extensions = [];

var themeSelectFromMessageEvent = function themeSelectFromMessageEvent(event) {
  themeSelect(event.data.theme);
};
// called in ThemePicker
var themeSelect = function themeSelect(theme) {
  if (!theme) return;
  var targetTheme;
  switch (theme) {
    // Insert other themes to swap to here
    // Can also utilize the "extensions" array above to add to the theme
    default:
      targetTheme = {};
      break;
  }
  return targetTheme.name && context/* default */.Z.theme.name !== targetTheme.name ? context/* default */.Z.setTheme(targetTheme) : Promise.resolve();
};

// registers all window events needed on load
// called in preview.js file
var registerEventListeners = function registerEventListeners() {
  // logger and stores themes
  context/* default */.Z.debug = true;
  context/* default */.Z.on('themeUpdate', function () {
    window.parent.postMessage('themeSet', '*');
  });

  // Prevent scrolling when navigating with arrows on canvas
  window.addEventListener('keydown', function (e) {
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
      e.preventDefault();
    }
  }, false);
  context/* default */.Z.storybookCustomTheme = JSON.parse(JSON.stringify(context/* default */.Z.theme));
};
;// CONCATENATED MODULE: ./index.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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






/**
 * creates the Lightning App and attaches it to the DOM for use in Storybook
 * @returns Lightning App
 */
var createApp = function createApp(parameters) {
  // Make sure app is only created once if path=/story
  if (window.top.location.search.indexOf('path=/docs/') <= -1) {
    if (window.APP) return window.APP;
  }
  pool.clear();
  var announcerOptions = _objectSpread({
    language: 'en-US'
  }, parameters.announcerOptions);
  var appParams = {
    stage: {
      w: 1280,
      h: 720,
      precision: 2 / 3,
      canvas2d: false,
      useImageWorker: false,
      inspector: false,
      defaultFontFace: 'XfinityStandardMedium',
      fontSharp: {
        precision: 2 / 3,
        fontSize: 12
      }
    },
    debug: true
  };
  window.CONTEXT = context/* default */.Z; // Used by addons

  window.APP = new ( /*#__PURE__*/function (_withAnnouncer) {
    _inherits(LightningUIApp, _withAnnouncer);
    var _super = _createSuper(LightningUIApp);
    function LightningUIApp() {
      _classCallCheck(this, LightningUIApp);
      return _super.apply(this, arguments);
    }
    _createClass(LightningUIApp, [{
      key: "_construct",
      value: function _construct() {
        this.announcerTimeout = 15 * 1000;
      }
    }, {
      key: "_attach",
      value: function _attach() {
        window.addEventListener('message', themeSelectFromMessageEvent, false);
      }
    }, {
      key: "$storyChanged",
      value: function $storyChanged() {
        this.emit('storyChanged');
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return ((this.childList.first || {}).childList || {}).first || this;
      }
    }]);
    return LightningUIApp;
  }((0,withAnnouncer/* default */.ZP)(lightning_esm/* default */.Z.Application, Speech/* default */.Z, announcerOptions)))(appParams);
  document.body.appendChild(window.APP.stage.getCanvas());
  return window.APP;
};
var clearInspector = function clearInspector() {
  // Clear any lightning inspector info
  if (document.querySelectorAll('[type=StoryApp]').length > 1) {
    var div = document.querySelector('[type=StoryApp]');
    div && div.parentNode.remove();
  }
};
;// CONCATENATED MODULE: ./.storybook/addons/decorators/withLightning.js
function withLightning_typeof(o) { "@babel/helpers - typeof"; return withLightning_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, withLightning_typeof(o); }
function withLightning_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function withLightning_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? withLightning_ownKeys(Object(t), !0).forEach(function (r) { withLightning_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : withLightning_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function withLightning_defineProperty(obj, key, value) { key = withLightning_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function withLightning_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function withLightning_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, withLightning_toPropertyKey(descriptor.key), descriptor); } }
function withLightning_createClass(Constructor, protoProps, staticProps) { if (protoProps) withLightning_defineProperties(Constructor.prototype, protoProps); if (staticProps) withLightning_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function withLightning_toPropertyKey(t) { var i = withLightning_toPrimitive(t, "string"); return "symbol" == withLightning_typeof(i) ? i : String(i); }
function withLightning_toPrimitive(t, r) { if ("object" != withLightning_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != withLightning_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = withLightning_getPrototypeOf(object); if (object === null) break; } return object; }
function withLightning_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) withLightning_setPrototypeOf(subClass, superClass); }
function withLightning_setPrototypeOf(o, p) { withLightning_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withLightning_setPrototypeOf(o, p); }
function withLightning_createSuper(Derived) { var hasNativeReflectConstruct = withLightning_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = withLightning_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = withLightning_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return withLightning_possibleConstructorReturn(this, result); }; }
function withLightning_possibleConstructorReturn(self, call) { if (call && (withLightning_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return withLightning_assertThisInitialized(self); }
function withLightning_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function withLightning_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function withLightning_getPrototypeOf(o) { withLightning_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withLightning_getPrototypeOf(o); }
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



var previousID = null;
var remountProps = {};

/**
 * returns true if any of the following are true
 *    - if the selected story changed
 *    - parameters.remountAll is true on the story
 *    - an arg changes an its associated argType has a remount property set to true
 * @returns boolean of if the story component should remount
 */
function shouldTriggerUpdate(_ref) {
  var id = _ref.id,
    args = _ref.args,
    argTypes = _ref.argTypes,
    parameters = _ref.parameters;
  var storyChanged = previousID !== id;
  var triggerUpdate = storyChanged;
  previousID = id;

  // create remountProps object to track which props should trigger remounting
  if (storyChanged) {
    remountProps = {};
    if (parameters.remountAll) {
      // track all props except mode for triggering remount
      Object.keys(args).forEach(function (key) {
        if (key === 'mode') {
          return;
        }
        remountProps[key] = args[key];
      });
    } else {
      // track only props with truthy remount property on their associated argType
      Object.keys(argTypes).forEach(function (key) {
        if (argTypes[key].remount) {
          remountProps[key] = args[key];
        }
      });
    }
  }

  // evaluate if any props tracked in remountProps changed and should trigger a remount
  Object.keys(remountProps).forEach(function (key) {
    if (remountProps[key] !== args[key]) {
      triggerUpdate = true;
      remountProps[key] = args[key];
    }
  });
  return triggerUpdate;
}

/** creates a global decorator that creates a single instance of the Lightning app */

var withLightning = function withLightning(StoryComponent, _ref2) {
  var id = _ref2.id,
    args = _ref2.args,
    argTypes = _ref2.argTypes,
    parameters = _ref2.parameters,
    globals = _ref2.globals;
  /**
   * the Lightning Element in the 'dom'
   */
  var app = createApp({
    theme: globals.LUITheme
  });
  clearInspector();
  app.announcerEnabled = globals.announce;
  app.debug = globals.announce;
  // toggle stage color
  !globals.stageColor ? app.stage.setClearColor(utils/* default.getValidColor */.ZP.getValidColor('#21232A')) : app.stage.setClearColor(utils/* default.getValidColor */.ZP.getValidColor('#cccccc'));

  // // If an update is required patch in the new child element
  if (shouldTriggerUpdate({
    id: id,
    args: args,
    argTypes: argTypes,
    parameters: parameters
  })) {
    app.childList.clear();
    app.childList.a({
      StoryComponent: {
        type: /*#__PURE__*/function (_StoryComponent) {
          withLightning_inherits(type, _StoryComponent);
          var _super = withLightning_createSuper(type);
          function type() {
            withLightning_classCallCheck(this, type);
            return _super.apply(this, arguments);
          }
          withLightning_createClass(type, [{
            key: "componentTarget",
            get:
            // FIXME: Assess what config.optimization.minimize is doing different in production vs develop - this was prior to v7 upgrade
            function get() {
              // using this check on type Element because production vs develop build issue
              return this.childList.first instanceof lng.Component ? this.childList.first : this;
            }
          }, {
            key: "_init",
            value: function _init() {
              var _this = this;
              if (this.componentTarget) {
                // Notify application every time the style is updated. Used for componentStyles panel
                this.componentTarget.on('styleUpdated', function () {
                  //FIXME: why are we setting this time out here and in setup?
                  setTimeout(function () {
                    _this.fireAncestors('$storyChanged');
                  });
                });
              }
              _get(withLightning_getPrototypeOf(type.prototype), "_init", this).call(this);
              this._refocus(); // Force Lightning to reset focus
            }
          }, {
            key: "_setup",
            value: function _setup() {
              var _this2 = this;
              // This ensures the component has its args before the first update cycle.
              if (Object.keys(args).length) {
                var argsToPatch = {};
                for (var prop in args) {
                  // Apply arguments from controls
                  var propValue = 'undefined' !== typeof args[prop] ? args[prop] : parameters.argTypes[prop].defaultValue;
                  if (!parameters.argActions || !parameters.argActions[prop]) {
                    argsToPatch[prop] = propValue;
                  }
                }
                this.componentTarget.patch(withLightning_objectSpread({}, argsToPatch));
              }
              setTimeout(function () {
                _this2.fireAncestors('$storyChanged');
              });
            }
          }], [{
            key: "_states",
            value: function _states() {
              return [/*#__PURE__*/function (_this3) {
                withLightning_inherits(ModeUnfocusState, _this3);
                var _super2 = withLightning_createSuper(ModeUnfocusState);
                function ModeUnfocusState() {
                  withLightning_classCallCheck(this, ModeUnfocusState);
                  return _super2.apply(this, arguments);
                }
                withLightning_createClass(ModeUnfocusState, [{
                  key: "_getFocused",
                  value: function _getFocused() {
                    return this;
                  }
                }]);
                return ModeUnfocusState;
              }(this), /*#__PURE__*/function (_this4) {
                withLightning_inherits(ModeFocusState, _this4);
                var _super3 = withLightning_createSuper(ModeFocusState);
                function ModeFocusState() {
                  withLightning_classCallCheck(this, ModeFocusState);
                  return _super3.apply(this, arguments);
                }
                withLightning_createClass(ModeFocusState, [{
                  key: "_getFocused",
                  value: function _getFocused() {
                    return this.componentTarget; // Text Element
                  }
                }]);
                return ModeFocusState;
              }(this)];
            }
          }]);
          return type;
        }(StoryComponent()),
        w: function w(_w) {
          return _w;
        },
        h: function h(_h) {
          return _h;
        },
        x: context/* default */.Z.theme.layout.marginX,
        y: context/* default */.Z.theme.layout.marginY
      }
    });
    app._refocus();
  }

  // sets mode
  app.tag('StoryComponent')._setState(!args.mode || args.mode && args.mode === 'focused' ? 'ModeFocusState' : 'ModeUnfocusState');
  //forces position update on theme change instead of just when triggerUpdate is true
  context/* default */.Z.on('themeUpdate', function () {
    app.tag('StoryComponent') && app.tag('StoryComponent').patch(parameters.storyDetails ? {
      x: context/* default */.Z.theme.layout.marginX
    } : {
      x: context/* default */.Z.theme.layout.marginX,
      y: context/* default */.Z.theme.layout.marginY
    });
  });
  if (!app.tag('GridOverlay')) {
    app.childList.a({
      GridOverlay: {
        type: GridOverlay/* default */.Z,
        zIndex: 100
      }
    });
  }
  app.tag('GridOverlay').patch({
    // do not render this on top of the actual GridOverlay component's story
    alpha: id.includes('gridoverlay') ? 0 : parseFloat(globals['GridOverlay-alpha']),
    showColumns: globals['GridOverlay-toggle-showColumns'] === 'true',
    showMargins: globals['GridOverlay-toggle-showMargins'] === 'true',
    showSafe: globals['GridOverlay-toggle-showSafe'] === 'true',
    showGutters: globals['GridOverlay-toggle-showGutters'] === 'true',
    showText: globals['GridOverlay-toggle-showText'] === 'true'
  });

  // add optional story description to the canvas
  if (parameters.storyDetails) {
    if (!app.tag('StoryDetails')) {
      var StoryDetails = {
        StoryDetails: {
          type: TextBox/* default */.Z,
          content: parameters.storyDetails,
          style: {
            textStyle: {
              wordWrapWidth: context/* default */.Z.theme.layout.screenW - context/* default */.Z.theme.spacer.sm * 2
            }
          },
          x: context/* default */.Z.theme.spacer.sm,
          y: context/* default */.Z.theme.spacer.sm,
          onAfterUpdate: function onAfterUpdate(_ref3) {
            var y = _ref3.y,
              h = _ref3.h;
            if (h > context/* default */.Z.theme.layout.marginY) {
              app.tag('StoryComponent').y = y + h + context/* default */.Z.theme.spacer.xl;
            }
          }
        }
      };
      app.childList.a(StoryDetails);
    }
    app.tag('StoryDetails').patch({
      content: parameters.storyDetails
    });
  }

  /**
   * the first child under StoryComponent
   */
  var LightningUIComponent = app.tag('StoryComponent').childList.first;
  if (LightningUIComponent && Object.keys(args).length) {
    for (var prop in args) {
      // Apply arguments from controls
      var propValue = 'undefined' !== typeof args[prop] ? args[prop] : parameters.argTypes[prop].defaultValue;
      if (!parameters.argActions || !parameters.argActions[prop]) {
        LightningUIComponent[prop] = propValue;
      }
    }
  }
  // applying argAction
  if (LightningUIComponent && parameters.argActions && Object.keys(parameters.argActions).length) {
    for (var _prop in parameters.argActions) {
      if ('function' === typeof parameters.argActions[_prop]) {
        try {
          parameters.argActions[_prop](args[_prop], app.tag('StoryComponent'));
        } catch (err) {
          console.error('unable to apply argAction for ' + _prop);
        }
      }
    }
    return app.getCanvas();
  }
  return app.stage.getCanvas();
};
// EXTERNAL MODULE: ../../../node_modules/@storybook/theming/dist/chunk-ZGA76URP.mjs
var chunk_ZGA76URP = __webpack_require__("../../../node_modules/@storybook/theming/dist/chunk-ZGA76URP.mjs");
;// CONCATENATED MODULE: ./.storybook/preview.js
function preview_typeof(o) { "@babel/helpers - typeof"; return preview_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, preview_typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == preview_typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(preview_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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

// these two lines need to be in this order
// to wait until the inspector is enabled before attaching it




// loads window event listeners
registerEventListeners();
/**
 * custom global props that can be accessed in decorators and add-ons
 * globalTypes can only be set in preview.js
 * @see https://storybook.js.org/docs/react/essentials/toolbars-and-globals#globals
 */
var preview = {
  parameters: {
    actions: {
      argTypesRegex: '^on[A-Z].*'
    },
    backgrounds: {
      disable: true
    },
    controls: {
      hideNoControlsWarning: true,
      expanded: true,
      sort: 'requiredFirst'
    },
    docs: {
      theme: chunk_ZGA76URP/* themes */.np.dark,
      argTypes: {
        sort: 'alpha',
        exclude: ['mode']
      }
    },
    options: {
      /** NOTE:  v7 storySort must be self-contained function & no reference to outside variables
      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
      */
      storySort: {
        method: 'alphabetical',
        order: ['Docs', ['Introduction', 'Read Me', 'Base', 'Contributing', 'Lightning Resources', 'Theming', ['Overview', 'Component Config', 'Tones', 'Modes', 'Extensions', 'Subtheming', 'Use in Storybook', 'Theme Properties', '*'], 'Unit Testing', ['Overview', 'Test Renderer', 'Test Utils', ['makeCreateComponent', '*']]], 'Collections', 'Utilities', 'Components', 'Patterns', 'Templates']
      }
    }
  },
  globalTypes: {
    LUITheme: {
      name: 'Theme',
      description: 'Theme select',
      defaultValue: 'base'
    },
    'GridOverlay-alpha': {
      defaultValue: '0'
    },
    'GridOverlay-toggle-showColumns': {
      defaultValue: 'true'
    },
    'GridOverlay-toggle-showMargins': {
      defaultValue: 'false'
    },
    'GridOverlay-toggle-showSafe': {
      defaultValue: 'false'
    },
    'GridOverlay-toggle-showGutters': {
      defaultValue: 'false'
    },
    'GridOverlay-toggle-showText': {
      defaultValue: 'false'
    },
    announce: {
      defaultValue: false
    },
    stageColor: {
      defaultValue: false
    }
  },
  decorators: [withLightning],
  loaders: [( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(_ref) {
      var globals;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            globals = _ref.globals;
            _context.next = 3;
            return themeSelect(globals.LUITheme);
          case 3:
            return _context.abrupt("return");
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }())]
};
/* harmony default export */ const _storybook_preview = (preview);

/***/ }),

/***/ "../../@lightningjs/ui-components-test-utils/src/docs lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components-test-utils\\/src\\/docs(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Overview.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/Overview.mdx",
		5126,
		4850
	],
	"./TestRenderer/create.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/TestRenderer/create.mdx",
		5126,
		8450
	],
	"./TestRenderer/toJSON.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/TestRenderer/toJSON.mdx",
		5126,
		404
	],
	"./TestUtils/completeAnimation.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/TestUtils/completeAnimation.mdx",
		5126,
		2497
	],
	"./TestUtils/fastForward.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/TestUtils/fastForward.mdx",
		5126,
		2165
	],
	"./TestUtils/makeCreateComponent.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/TestUtils/makeCreateComponent.mdx",
		5126,
		5050
	],
	"./TestUtils/nextTick.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/TestUtils/nextTick.mdx",
		5126,
		1570
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "../../@lightningjs/ui-components-test-utils/src/docs lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components-test-utils\\/src\\/docs(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../@lightningjs/ui-components-test-utils/src/docs lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components-test-utils\\/src\\/docs\\/(?%21\\.)(?=.)[^/]*?\\.mdx)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Overview.mdx": [
		"../../@lightningjs/ui-components-test-utils/src/docs/Overview.mdx",
		5126,
		4850
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "../../@lightningjs/ui-components-test-utils/src/docs lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components-test-utils\\/src\\/docs\\/(?%21\\.)(?=.)[^/]*?\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../@lightningjs/ui-components/src lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./components/Artwork/Artwork.mdx": [
		"../../@lightningjs/ui-components/src/components/Artwork/Artwork.mdx",
		5126,
		3544,
		8638
	],
	"./components/Badge/Badge.mdx": [
		"../../@lightningjs/ui-components/src/components/Badge/Badge.mdx",
		5126,
		9753
	],
	"./components/Button/Button.mdx": [
		"../../@lightningjs/ui-components/src/components/Button/Button.mdx",
		5126,
		1128
	],
	"./components/Card/Card.mdx": [
		"../../@lightningjs/ui-components/src/components/Card/Card.mdx",
		5126,
		9532
	],
	"./components/Card/CardRadio.mdx": [
		"../../@lightningjs/ui-components/src/components/Card/CardRadio.mdx",
		5126,
		7273,
		5589,
		6639,
		5218
	],
	"./components/Card/CardSection.mdx": [
		"../../@lightningjs/ui-components/src/components/Card/CardSection.mdx",
		5126,
		7273,
		1338,
		4030
	],
	"./components/Card/CardTitle.mdx": [
		"../../@lightningjs/ui-components/src/components/Card/CardTitle.mdx",
		5126,
		7273,
		8112,
		8562
	],
	"./components/CardContent/CardContent.mdx": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContent.mdx",
		5126,
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		9209
	],
	"./components/Checkbox/Checkbox.mdx": [
		"../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.mdx",
		5126,
		2860
	],
	"./components/Column/Column.mdx": [
		"../../@lightningjs/ui-components/src/components/Column/Column.mdx",
		5126,
		8221,
		9587,
		3544,
		1789,
		6592,
		7938
	],
	"./components/Control/Control.mdx": [
		"../../@lightningjs/ui-components/src/components/Control/Control.mdx",
		5126,
		2413
	],
	"./components/ControlRow/ControlRow.mdx": [
		"../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.mdx",
		5126,
		8221,
		9587,
		3544,
		1789,
		8986,
		5289,
		6476,
		5662,
		3611
	],
	"./components/FocusManager/FocusManager.mdx": [
		"../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.mdx",
		5126,
		8221,
		2976
	],
	"./components/Gradient/Gradient.mdx": [
		"../../@lightningjs/ui-components/src/components/Gradient/Gradient.mdx",
		5126,
		9166
	],
	"./components/GridOverlay/GridOverlay.mdx": [
		"../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.mdx",
		5126,
		6409
	],
	"./components/Icon/Icon.mdx": [
		"../../@lightningjs/ui-components/src/components/Icon/Icon.mdx",
		5126,
		6332
	],
	"./components/InlineContent/InlineContent.mdx": [
		"../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.mdx",
		5126,
		2249,
		954
	],
	"./components/Input/Input.mdx": [
		"../../@lightningjs/ui-components/src/components/Input/Input.mdx",
		5126,
		8221,
		9018,
		5196
	],
	"./components/Key/Key.mdx": [
		"../../@lightningjs/ui-components/src/components/Key/Key.mdx",
		5126,
		8221,
		8008,
		4534
	],
	"./components/Keyboard/Keyboard.mdx": [
		"../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.mdx",
		5126,
		5655
	],
	"./components/Knob/Knob.mdx": [
		"../../@lightningjs/ui-components/src/components/Knob/Knob.mdx",
		5126,
		4105,
		732
	],
	"./components/Label/Label.mdx": [
		"../../@lightningjs/ui-components/src/components/Label/Label.mdx",
		5126,
		2245
	],
	"./components/ListItem/ListItem.mdx": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItem.mdx",
		5126,
		8221,
		2077,
		5506,
		7719
	],
	"./components/ListItem/ListItemPicker.mdx": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.mdx",
		5126,
		8221,
		2077,
		9544,
		248
	],
	"./components/ListItem/ListItemSlider.mdx": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.mdx",
		5126,
		8221,
		5921,
		2077,
		3714,
		2194,
		162
	],
	"./components/Marquee/Marquee.mdx": [
		"../../@lightningjs/ui-components/src/components/Marquee/Marquee.mdx",
		5126,
		782
	],
	"./components/MetadataBase/MetadataBase.mdx": [
		"../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.mdx",
		5126,
		9587,
		4316,
		3872
	],
	"./components/MetadataCard/MetadataCard.mdx": [
		"../../@lightningjs/ui-components/src/components/MetadataCard/MetadataCard.mdx",
		5126,
		9587,
		2802,
		1095
	],
	"./components/MetadataCardContent/MetadataCardContent.mdx": [
		"../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.mdx",
		5126,
		9587,
		1682,
		4550
	],
	"./components/MetadataTile/MetadataTile.mdx": [
		"../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.mdx",
		5126,
		9587,
		4523,
		2654
	],
	"./components/NavigationManager/NavigationManager.mdx": [
		"../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.mdx",
		5126,
		8221,
		2254
	],
	"./components/ProgressBar/ProgressBar.mdx": [
		"../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.mdx",
		5126,
		4360
	],
	"./components/Provider/Provider.mdx": [
		"../../@lightningjs/ui-components/src/components/Provider/Provider.mdx",
		5126,
		9064
	],
	"./components/Radio/Radio.mdx": [
		"../../@lightningjs/ui-components/src/components/Radio/Radio.mdx",
		5126,
		7880
	],
	"./components/Row/Row.mdx": [
		"../../@lightningjs/ui-components/src/components/Row/Row.mdx",
		5126,
		8221,
		8986,
		3327
	],
	"./components/ScrollWrapper/ScrollWrapper.mdx": [
		"../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.mdx",
		5126,
		9587,
		3544,
		1789,
		5921,
		5859,
		5439
	],
	"./components/Shadow/Shadow.mdx": [
		"../../@lightningjs/ui-components/src/components/Shadow/Shadow.mdx",
		5126,
		9269,
		1958
	],
	"./components/Slider/Slider.mdx": [
		"../../@lightningjs/ui-components/src/components/Slider/Slider.mdx",
		5126,
		3843
	],
	"./components/Surface/Surface.mdx": [
		"../../@lightningjs/ui-components/src/components/Surface/Surface.mdx",
		5126,
		3819,
		7251
	],
	"./components/TabBar/Tab.mdx": [
		"../../@lightningjs/ui-components/src/components/TabBar/Tab.mdx",
		5126,
		2707,
		7568
	],
	"./components/TabBar/TabBar.mdx": [
		"../../@lightningjs/ui-components/src/components/TabBar/TabBar.mdx",
		5126,
		8221,
		9587,
		3544,
		1789,
		2707,
		8905,
		5181
	],
	"./components/TextBox/TextBox.mdx": [
		"../../@lightningjs/ui-components/src/components/TextBox/TextBox.mdx",
		5126,
		2249,
		2916
	],
	"./components/Tile/Tile.mdx": [
		"../../@lightningjs/ui-components/src/components/Tile/Tile.mdx",
		5126,
		9587,
		3544,
		1789,
		4523,
		5964,
		6957,
		8617
	],
	"./components/TitleRow/TitleRow.mdx": [
		"../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.mdx",
		5126,
		8221,
		9587,
		3544,
		1789,
		8986,
		5289,
		6865
	],
	"./components/Toggle/Toggle.mdx": [
		"../../@lightningjs/ui-components/src/components/Toggle/Toggle.mdx",
		5126,
		4819
	],
	"./components/Tooltip/Tooltip.mdx": [
		"../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.mdx",
		5126,
		8221,
		1483,
		9631
	],
	"./docs/Base.mdx": [
		"../../@lightningjs/ui-components/src/docs/Base.mdx",
		5126,
		2446
	],
	"./docs/Introduction.mdx": [
		"../../@lightningjs/ui-components/src/docs/Introduction.mdx",
		5126,
		1715
	],
	"./docs/LightningResources.mdx": [
		"../../@lightningjs/ui-components/src/docs/LightningResources.mdx",
		5126,
		7524
	],
	"./docs/Storybook.mdx": [
		"../../@lightningjs/ui-components/src/docs/Storybook.mdx",
		5126,
		9414
	],
	"./docs/Theming.mdx": [
		"../../@lightningjs/ui-components/src/docs/Theming.mdx",
		5126,
		6612
	],
	"./docs/ThemingAttributes.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingAttributes.mdx",
		5126,
		7402
	],
	"./docs/ThemingComponentConfig.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingComponentConfig.mdx",
		5126,
		4611
	],
	"./docs/ThemingExtensions.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingExtensions.mdx",
		5126,
		4439
	],
	"./docs/ThemingHierarchy.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingHierarchy.mdx",
		5126,
		1969
	],
	"./docs/ThemingMode.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingMode.mdx",
		5126,
		7653
	],
	"./docs/ThemingStorybook.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingStorybook.mdx",
		5126,
		7523
	],
	"./docs/ThemingSubTheming.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingSubTheming.mdx",
		5126,
		5382
	],
	"./docs/ThemingTone.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingTone.mdx",
		5126,
		144
	],
	"./docs/ThemingTutorial.mdx": [
		"../../@lightningjs/ui-components/src/docs/ThemingTutorial.mdx",
		5126,
		957
	],
	"./mixins/withAnnouncer/withAnnouncer.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withAnnouncer/withAnnouncer.mdx",
		5126,
		8221,
		8083,
		3395
	],
	"./mixins/withClassCache/withClassCache.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withClassCache/withClassCache.mdx",
		5126,
		4165
	],
	"./mixins/withEditItems/withEditItems.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withEditItems/withEditItems.mdx",
		5126,
		8221,
		8986,
		4705,
		3241
	],
	"./mixins/withHandleKey/withHandleKey.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withHandleKey/withHandleKey.mdx",
		5126,
		9587,
		3544,
		1789,
		3206
	],
	"./mixins/withLayout/withLayout.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withLayout/withLayout.mdx",
		5126,
		9587,
		3544,
		1789,
		5964,
		7378
	],
	"./mixins/withMarqueeSync/withMarqueeSync.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.mdx",
		5126,
		8531
	],
	"./mixins/withSelections/withSelections.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withSelections/withSelections.mdx",
		5126,
		8221,
		6918,
		1820
	],
	"./mixins/withTags/withTags.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withTags/withTags.mdx",
		5126,
		7139
	],
	"./mixins/withThemeStyles/withThemeStyles.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.mdx",
		5126,
		8892
	],
	"./mixins/withUpdates/withUpdates.mdx": [
		"../../@lightningjs/ui-components/src/mixins/withUpdates/withUpdates.mdx",
		5126,
		5295
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "../../@lightningjs/ui-components/src lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../@lightningjs/ui-components/src lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./components/Artwork/Artwork.stories": [
		"../../@lightningjs/ui-components/src/components/Artwork/Artwork.stories.js",
		3544,
		2832
	],
	"./components/Artwork/Artwork.stories.js": [
		"../../@lightningjs/ui-components/src/components/Artwork/Artwork.stories.js",
		3544,
		2832
	],
	"./components/Badge/Badge.stories": [
		"../../@lightningjs/ui-components/src/components/Badge/Badge.stories.js",
		1065
	],
	"./components/Badge/Badge.stories.js": [
		"../../@lightningjs/ui-components/src/components/Badge/Badge.stories.js",
		1065
	],
	"./components/Button/Button.stories": [
		"../../@lightningjs/ui-components/src/components/Button/Button.stories.js",
		8221,
		5506,
		1747
	],
	"./components/Button/Button.stories.js": [
		"../../@lightningjs/ui-components/src/components/Button/Button.stories.js",
		8221,
		5506,
		1747
	],
	"./components/Button/ButtonSmall.stories": [
		"../../@lightningjs/ui-components/src/components/Button/ButtonSmall.stories.js",
		8221,
		5134
	],
	"./components/Button/ButtonSmall.stories.js": [
		"../../@lightningjs/ui-components/src/components/Button/ButtonSmall.stories.js",
		8221,
		5134
	],
	"./components/Card/Card.stories": [
		"../../@lightningjs/ui-components/src/components/Card/Card.stories.js",
		7273,
		7518
	],
	"./components/Card/Card.stories.js": [
		"../../@lightningjs/ui-components/src/components/Card/Card.stories.js",
		7273,
		7518
	],
	"./components/Card/CardRadio.stories": [
		"../../@lightningjs/ui-components/src/components/Card/CardRadio.stories.js",
		7273,
		5589,
		6639,
		2494
	],
	"./components/Card/CardRadio.stories.js": [
		"../../@lightningjs/ui-components/src/components/Card/CardRadio.stories.js",
		7273,
		5589,
		6639,
		2494
	],
	"./components/Card/CardSection.stories": [
		"../../@lightningjs/ui-components/src/components/Card/CardSection.stories.js",
		7273,
		1338,
		9140
	],
	"./components/Card/CardSection.stories.js": [
		"../../@lightningjs/ui-components/src/components/Card/CardSection.stories.js",
		7273,
		1338,
		9140
	],
	"./components/Card/CardTitle.stories": [
		"../../@lightningjs/ui-components/src/components/Card/CardTitle.stories.js",
		7273,
		8112,
		95
	],
	"./components/Card/CardTitle.stories.js": [
		"../../@lightningjs/ui-components/src/components/Card/CardTitle.stories.js",
		7273,
		8112,
		95
	],
	"./components/CardContent/CardContent.stories": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		7883
	],
	"./components/CardContent/CardContent.stories.js": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		7883
	],
	"./components/CardContent/CardContentHorizontal.stories": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		5365
	],
	"./components/CardContent/CardContentHorizontal.stories.js": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		5365
	],
	"./components/CardContent/CardContentHorizontalLarge.stories": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontalLarge.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		5875
	],
	"./components/CardContent/CardContentHorizontalLarge.stories.js": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontalLarge.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		5875
	],
	"./components/CardContent/CardContentVertical.stories": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		295
	],
	"./components/CardContent/CardContentVertical.stories.js": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		295
	],
	"./components/CardContent/CardContentVerticalSmall.stories": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		5187
	],
	"./components/CardContent/CardContentVerticalSmall.stories.js": [
		"../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.stories.js",
		9587,
		3544,
		1789,
		7273,
		1682,
		6960,
		5187
	],
	"./components/Checkbox/Checkbox.stories": [
		"../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.stories.js",
		4612
	],
	"./components/Checkbox/Checkbox.stories.js": [
		"../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.stories.js",
		4612
	],
	"./components/Checkbox/CheckboxSmall.stories": [
		"../../@lightningjs/ui-components/src/components/Checkbox/CheckboxSmall.stories.js",
		3185
	],
	"./components/Checkbox/CheckboxSmall.stories.js": [
		"../../@lightningjs/ui-components/src/components/Checkbox/CheckboxSmall.stories.js",
		3185
	],
	"./components/Column/Column.stories": [
		"../../@lightningjs/ui-components/src/components/Column/Column.stories.js",
		8221,
		9587,
		3544,
		1789,
		6592
	],
	"./components/Column/Column.stories.js": [
		"../../@lightningjs/ui-components/src/components/Column/Column.stories.js",
		8221,
		9587,
		3544,
		1789,
		6592
	],
	"./components/Control/Control.stories": [
		"../../@lightningjs/ui-components/src/components/Control/Control.stories.js",
		8221,
		6476,
		2067
	],
	"./components/Control/Control.stories.js": [
		"../../@lightningjs/ui-components/src/components/Control/Control.stories.js",
		8221,
		6476,
		2067
	],
	"./components/Control/ControlSmall.stories": [
		"../../@lightningjs/ui-components/src/components/Control/ControlSmall.stories.js",
		8221,
		6476,
		6687
	],
	"./components/Control/ControlSmall.stories.js": [
		"../../@lightningjs/ui-components/src/components/Control/ControlSmall.stories.js",
		8221,
		6476,
		6687
	],
	"./components/ControlRow/ControlRow.stories": [
		"../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.stories.js",
		8221,
		9587,
		3544,
		1789,
		8986,
		5289,
		6476,
		5662,
		4390
	],
	"./components/ControlRow/ControlRow.stories.js": [
		"../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.stories.js",
		8221,
		9587,
		3544,
		1789,
		8986,
		5289,
		6476,
		5662,
		4390
	],
	"./components/FocusManager/FocusManager.stories": [
		"../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.stories.js",
		8221,
		9127
	],
	"./components/FocusManager/FocusManager.stories.js": [
		"../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.stories.js",
		8221,
		9127
	],
	"./components/Gradient/Gradient.stories": [
		"../../@lightningjs/ui-components/src/components/Gradient/Gradient.stories.js",
		6103
	],
	"./components/Gradient/Gradient.stories.js": [
		"../../@lightningjs/ui-components/src/components/Gradient/Gradient.stories.js",
		6103
	],
	"./components/GridOverlay/GridOverlay.stories": [
		"../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.stories.js",
		425
	],
	"./components/GridOverlay/GridOverlay.stories.js": [
		"../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.stories.js",
		425
	],
	"./components/Icon/Icon.stories": [
		"../../@lightningjs/ui-components/src/components/Icon/Icon.stories.js",
		870
	],
	"./components/Icon/Icon.stories.js": [
		"../../@lightningjs/ui-components/src/components/Icon/Icon.stories.js",
		870
	],
	"./components/InlineContent/InlineContent.stories": [
		"../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js",
		2249
	],
	"./components/InlineContent/InlineContent.stories.js": [
		"../../@lightningjs/ui-components/src/components/InlineContent/InlineContent.stories.js",
		2249
	],
	"./components/Input/Input.stories": [
		"../../@lightningjs/ui-components/src/components/Input/Input.stories.js",
		8221,
		9018,
		1195
	],
	"./components/Input/Input.stories.js": [
		"../../@lightningjs/ui-components/src/components/Input/Input.stories.js",
		8221,
		9018,
		1195
	],
	"./components/Key/Key.stories": [
		"../../@lightningjs/ui-components/src/components/Key/Key.stories.js",
		8221,
		8008,
		3117
	],
	"./components/Key/Key.stories.js": [
		"../../@lightningjs/ui-components/src/components/Key/Key.stories.js",
		8221,
		8008,
		3117
	],
	"./components/Keyboard/Keyboard.stories": [
		"../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js",
		8221,
		8008,
		2487
	],
	"./components/Keyboard/Keyboard.stories.js": [
		"../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js",
		8221,
		8008,
		2487
	],
	"./components/Keyboard/KeyboardEmail.stories": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.stories.js",
		8221,
		8008,
		2487,
		9641
	],
	"./components/Keyboard/KeyboardEmail.stories.js": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.stories.js",
		8221,
		8008,
		2487,
		9641
	],
	"./components/Keyboard/KeyboardFullscreen.stories": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.stories.js",
		8221,
		8008,
		2487,
		915
	],
	"./components/Keyboard/KeyboardFullscreen.stories.js": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.stories.js",
		8221,
		8008,
		2487,
		915
	],
	"./components/Keyboard/KeyboardInput.stories": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.stories.js",
		8221,
		8008,
		2487,
		9018,
		5191
	],
	"./components/Keyboard/KeyboardInput.stories.js": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.stories.js",
		8221,
		8008,
		2487,
		9018,
		5191
	],
	"./components/Keyboard/KeyboardNumbers.stories": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardNumbers.stories.js",
		8221,
		8008,
		2487,
		8408
	],
	"./components/Keyboard/KeyboardNumbers.stories.js": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardNumbers.stories.js",
		8221,
		8008,
		2487,
		8408
	],
	"./components/Keyboard/KeyboardQwerty.stories": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.stories.js",
		8221,
		8008,
		2487,
		1895
	],
	"./components/Keyboard/KeyboardQwerty.stories.js": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.stories.js",
		8221,
		8008,
		2487,
		1895
	],
	"./components/Keyboard/KeyboardSearch.stories": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardSearch.stories.js",
		8221,
		8008,
		2487,
		1884
	],
	"./components/Keyboard/KeyboardSearch.stories.js": [
		"../../@lightningjs/ui-components/src/components/Keyboard/KeyboardSearch.stories.js",
		8221,
		8008,
		2487,
		1884
	],
	"./components/Knob/Knob.stories": [
		"../../@lightningjs/ui-components/src/components/Knob/Knob.stories.js",
		4105,
		1819
	],
	"./components/Knob/Knob.stories.js": [
		"../../@lightningjs/ui-components/src/components/Knob/Knob.stories.js",
		4105,
		1819
	],
	"./components/Label/Label.stories": [
		"../../@lightningjs/ui-components/src/components/Label/Label.stories.js",
		1224
	],
	"./components/Label/Label.stories.js": [
		"../../@lightningjs/ui-components/src/components/Label/Label.stories.js",
		1224
	],
	"./components/ListItem/ListItem.stories": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItem.stories.js",
		8221,
		2077,
		1216
	],
	"./components/ListItem/ListItem.stories.js": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItem.stories.js",
		8221,
		2077,
		1216
	],
	"./components/ListItem/ListItemPicker.stories": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.stories.js",
		8221,
		9544,
		5714
	],
	"./components/ListItem/ListItemPicker.stories.js": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItemPicker.stories.js",
		8221,
		9544,
		5714
	],
	"./components/ListItem/ListItemSlider.stories": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.stories.js",
		8221,
		5921,
		3714,
		2194,
		9159
	],
	"./components/ListItem/ListItemSlider.stories.js": [
		"../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.stories.js",
		8221,
		5921,
		3714,
		2194,
		9159
	],
	"./components/Marquee/Marquee.stories": [
		"../../@lightningjs/ui-components/src/components/Marquee/Marquee.stories.js",
		4468
	],
	"./components/Marquee/Marquee.stories.js": [
		"../../@lightningjs/ui-components/src/components/Marquee/Marquee.stories.js",
		4468
	],
	"./components/MetadataBase/MetadataBase.stories": [
		"../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.stories.js",
		9587,
		4316,
		8152
	],
	"./components/MetadataBase/MetadataBase.stories.js": [
		"../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.stories.js",
		9587,
		4316,
		8152
	],
	"./components/MetadataCard/MetadataCard.stories": [
		"../../@lightningjs/ui-components/src/components/MetadataCard/MetadataCard.stories.js",
		9587,
		2802,
		4497
	],
	"./components/MetadataCard/MetadataCard.stories.js": [
		"../../@lightningjs/ui-components/src/components/MetadataCard/MetadataCard.stories.js",
		9587,
		2802,
		4497
	],
	"./components/MetadataCardContent/MetadataCardContent.stories": [
		"../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js",
		9587,
		1682,
		9256
	],
	"./components/MetadataCardContent/MetadataCardContent.stories.js": [
		"../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js",
		9587,
		1682,
		9256
	],
	"./components/MetadataTile/MetadataTile.stories": [
		"../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.stories.js",
		9587,
		4523,
		6111
	],
	"./components/MetadataTile/MetadataTile.stories.js": [
		"../../@lightningjs/ui-components/src/components/MetadataTile/MetadataTile.stories.js",
		9587,
		4523,
		6111
	],
	"./components/NavigationManager/NavigationManager.stories": [
		"../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.stories.js",
		8221,
		5097
	],
	"./components/NavigationManager/NavigationManager.stories.js": [
		"../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.stories.js",
		8221,
		5097
	],
	"./components/ProgressBar/ProgressBar.stories": [
		"../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.stories.js",
		7128
	],
	"./components/ProgressBar/ProgressBar.stories.js": [
		"../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.stories.js",
		7128
	],
	"./components/Provider/Provider.stories": [
		"../../@lightningjs/ui-components/src/components/Provider/Provider.stories.js",
		4539
	],
	"./components/Provider/Provider.stories.js": [
		"../../@lightningjs/ui-components/src/components/Provider/Provider.stories.js",
		4539
	],
	"./components/Radio/Radio.stories": [
		"../../@lightningjs/ui-components/src/components/Radio/Radio.stories.js",
		5589,
		9495
	],
	"./components/Radio/Radio.stories.js": [
		"../../@lightningjs/ui-components/src/components/Radio/Radio.stories.js",
		5589,
		9495
	],
	"./components/Radio/RadioSmall.stories": [
		"../../@lightningjs/ui-components/src/components/Radio/RadioSmall.stories.js",
		6983
	],
	"./components/Radio/RadioSmall.stories.js": [
		"../../@lightningjs/ui-components/src/components/Radio/RadioSmall.stories.js",
		6983
	],
	"./components/Row/Row.stories": [
		"../../@lightningjs/ui-components/src/components/Row/Row.stories.js",
		8221,
		8986,
		5748
	],
	"./components/Row/Row.stories.js": [
		"../../@lightningjs/ui-components/src/components/Row/Row.stories.js",
		8221,
		8986,
		5748
	],
	"./components/ScrollWrapper/ScrollWrapper.stories": [
		"../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.stories.js",
		9587,
		3544,
		1789,
		5921,
		5859,
		7309
	],
	"./components/ScrollWrapper/ScrollWrapper.stories.js": [
		"../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.stories.js",
		9587,
		3544,
		1789,
		5921,
		5859,
		7309
	],
	"./components/Shadow/Shadow.stories": [
		"../../@lightningjs/ui-components/src/components/Shadow/Shadow.stories.js",
		9269,
		120
	],
	"./components/Shadow/Shadow.stories.js": [
		"../../@lightningjs/ui-components/src/components/Shadow/Shadow.stories.js",
		9269,
		120
	],
	"./components/Slider/Slider.stories": [
		"../../@lightningjs/ui-components/src/components/Slider/Slider.stories.js",
		5921,
		3714,
		3929
	],
	"./components/Slider/Slider.stories.js": [
		"../../@lightningjs/ui-components/src/components/Slider/Slider.stories.js",
		5921,
		3714,
		3929
	],
	"./components/Slider/SliderLarge.stories": [
		"../../@lightningjs/ui-components/src/components/Slider/SliderLarge.stories.js",
		5921,
		2996
	],
	"./components/Slider/SliderLarge.stories.js": [
		"../../@lightningjs/ui-components/src/components/Slider/SliderLarge.stories.js",
		5921,
		2996
	],
	"./components/Surface/Surface.stories": [
		"../../@lightningjs/ui-components/src/components/Surface/Surface.stories.js",
		3819,
		9718
	],
	"./components/Surface/Surface.stories.js": [
		"../../@lightningjs/ui-components/src/components/Surface/Surface.stories.js",
		3819,
		9718
	],
	"./components/TabBar/Tab.stories": [
		"../../@lightningjs/ui-components/src/components/TabBar/Tab.stories.js",
		2707,
		1194
	],
	"./components/TabBar/Tab.stories.js": [
		"../../@lightningjs/ui-components/src/components/TabBar/Tab.stories.js",
		2707,
		1194
	],
	"./components/TabBar/TabBar.stories": [
		"../../@lightningjs/ui-components/src/components/TabBar/TabBar.stories.js",
		8221,
		9587,
		3544,
		1789,
		2707,
		8905,
		4804
	],
	"./components/TabBar/TabBar.stories.js": [
		"../../@lightningjs/ui-components/src/components/TabBar/TabBar.stories.js",
		8221,
		9587,
		3544,
		1789,
		2707,
		8905,
		4804
	],
	"./components/TextBox/TextBox.stories": [
		"../../@lightningjs/ui-components/src/components/TextBox/TextBox.stories.js",
		2249,
		2140
	],
	"./components/TextBox/TextBox.stories.js": [
		"../../@lightningjs/ui-components/src/components/TextBox/TextBox.stories.js",
		2249,
		2140
	],
	"./components/Tile/Tile.stories": [
		"../../@lightningjs/ui-components/src/components/Tile/Tile.stories.js",
		9587,
		3544,
		1789,
		4523,
		5964,
		6957,
		6598
	],
	"./components/Tile/Tile.stories.js": [
		"../../@lightningjs/ui-components/src/components/Tile/Tile.stories.js",
		9587,
		3544,
		1789,
		4523,
		5964,
		6957,
		6598
	],
	"./components/TitleRow/TitleRow.stories": [
		"../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js",
		8221,
		9587,
		3544,
		1789,
		8986,
		5289,
		7613
	],
	"./components/TitleRow/TitleRow.stories.js": [
		"../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js",
		8221,
		9587,
		3544,
		1789,
		8986,
		5289,
		7613
	],
	"./components/Toggle/Toggle.stories": [
		"../../@lightningjs/ui-components/src/components/Toggle/Toggle.stories.js",
		2228
	],
	"./components/Toggle/Toggle.stories.js": [
		"../../@lightningjs/ui-components/src/components/Toggle/Toggle.stories.js",
		2228
	],
	"./components/Toggle/ToggleSmall.stories": [
		"../../@lightningjs/ui-components/src/components/Toggle/ToggleSmall.stories.js",
		9658
	],
	"./components/Toggle/ToggleSmall.stories.js": [
		"../../@lightningjs/ui-components/src/components/Toggle/ToggleSmall.stories.js",
		9658
	],
	"./components/Tooltip/Tooltip.stories": [
		"../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.stories.js",
		8221,
		1483,
		1325
	],
	"./components/Tooltip/Tooltip.stories.js": [
		"../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.stories.js",
		8221,
		1483,
		1325
	],
	"./docs/ThemingFoundations.stories": [
		"../../@lightningjs/ui-components/src/docs/ThemingFoundations.stories.js",
		8221,
		9587,
		3544,
		1789,
		4935
	],
	"./docs/ThemingFoundations.stories.js": [
		"../../@lightningjs/ui-components/src/docs/ThemingFoundations.stories.js",
		8221,
		9587,
		3544,
		1789,
		4935
	],
	"./mixins/withAnnouncer/withAnnouncer.stories": [
		"../../@lightningjs/ui-components/src/mixins/withAnnouncer/withAnnouncer.stories.js",
		8221,
		8083
	],
	"./mixins/withAnnouncer/withAnnouncer.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withAnnouncer/withAnnouncer.stories.js",
		8221,
		8083
	],
	"./mixins/withEditItems/withEditItems.stories": [
		"../../@lightningjs/ui-components/src/mixins/withEditItems/withEditItems.stories.js",
		8221,
		8986,
		4705,
		8869
	],
	"./mixins/withEditItems/withEditItems.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withEditItems/withEditItems.stories.js",
		8221,
		8986,
		4705,
		8869
	],
	"./mixins/withHandleKey/withHandleKey.stories": [
		"../../@lightningjs/ui-components/src/mixins/withHandleKey/withHandleKey.stories.js",
		9587,
		3544,
		1789,
		6468
	],
	"./mixins/withHandleKey/withHandleKey.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withHandleKey/withHandleKey.stories.js",
		9587,
		3544,
		1789,
		6468
	],
	"./mixins/withLayout/withLayout.stories": [
		"../../@lightningjs/ui-components/src/mixins/withLayout/withLayout.stories.js",
		9587,
		3544,
		1789,
		5964
	],
	"./mixins/withLayout/withLayout.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withLayout/withLayout.stories.js",
		9587,
		3544,
		1789,
		5964
	],
	"./mixins/withMarqueeSync/withMarqueeSync.stories": [
		"../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.stories.js",
		4020
	],
	"./mixins/withMarqueeSync/withMarqueeSync.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.stories.js",
		4020
	],
	"./mixins/withSelections/withSelections.stories": [
		"../../@lightningjs/ui-components/src/mixins/withSelections/withSelections.stories.js",
		8221,
		6918
	],
	"./mixins/withSelections/withSelections.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withSelections/withSelections.stories.js",
		8221,
		6918
	],
	"./mixins/withTags/withTags.stories": [
		"../../@lightningjs/ui-components/src/mixins/withTags/withTags.stories.js",
		4894
	],
	"./mixins/withTags/withTags.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withTags/withTags.stories.js",
		4894
	],
	"./mixins/withThemeStyles/withThemeStyles.stories": [
		"../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.stories.js",
		9466
	],
	"./mixins/withThemeStyles/withThemeStyles.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.stories.js",
		9466
	],
	"./mixins/withUpdates/withUpdates.stories": [
		"../../@lightningjs/ui-components/src/mixins/withUpdates/withUpdates.stories.js",
		9978
	],
	"./mixins/withUpdates/withUpdates.stories.js": [
		"../../@lightningjs/ui-components/src/mixins/withUpdates/withUpdates.stories.js",
		9978
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "../../@lightningjs/ui-components/src lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/(?%21\\.)(?=.)[^/]*?\\.mdx)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Contributing.mdx": [
		"./src/Contributing.mdx",
		5126,
		3525
	],
	"./Readme.mdx": [
		"./src/Readme.mdx",
		5126,
		2834
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/(?%21\\.)(?=.)[^/]*?\\.mdx)$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./storybook-config-entry.js":
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: external "__STORYBOOK_MODULE_GLOBAL__"
var external_STORYBOOK_MODULE_GLOBAL_ = __webpack_require__("@storybook/global");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_PREVIEW_API__"
var external_STORYBOOK_MODULE_PREVIEW_API_ = __webpack_require__("@storybook/preview-api");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CHANNELS__"
var external_STORYBOOK_MODULE_CHANNELS_ = __webpack_require__("@storybook/channels");
;// CONCATENATED MODULE: ./storybook-stories.js
const pipeline = (x) => x();

const importers = [
  async (path) => {
    if (!/^\.[\\/](?:src\/(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(6);
    return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src\\/(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^(?:\.\.\/\.\.\/@lightningjs\/ui-components\/src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(37);
    return __webpack_require__("../../@lightningjs/ui-components/src lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^(?:\.\.\/\.\.\/@lightningjs\/ui-components\/src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(37);
    return __webpack_require__("../../@lightningjs/ui-components/src lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^(?:\.\.\/\.\.\/@lightningjs\/ui-components-test-utils\/src\/docs\/(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(53);
    return __webpack_require__("../../@lightningjs/ui-components-test-utils/src/docs lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components-test-utils\\/src\\/docs\\/(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./" + pathRemainder);
  }
  ,
  async (path) => {
    if (!/^(?:\.\.\/\.\.\/@lightningjs\/ui-components-test-utils\/src\/docs(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path)) {
      return;
    }
  
    const pathRemainder = path.substring(53);
    return __webpack_require__("../../@lightningjs/ui-components-test-utils/src/docs lazy recursive ^\\.\\/.*$ include: (?:\\/@lightningjs\\/ui-components-test-utils\\/src\\/docs(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./" + pathRemainder);
  }
  
];

async function importFn(path) {
  for (let i = 0; i < importers.length; i++) {
    const moduleExports = await pipeline(() => importers[i](path));
    if (moduleExports) {
      return moduleExports;
    }
  }
}
;// CONCATENATED MODULE: ./storybook-config-entry.js







const getProjectAnnotations = () =>
  (0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("../../../node_modules/@storybook/html/dist/entry-preview.mjs"),__webpack_require__("../../../node_modules/@storybook/html/dist/entry-preview-docs.mjs"),__webpack_require__("../../../node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("../../../node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("../../../node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./.storybook/preview.js"),]);

const channel = (0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({ page: 'preview' });
external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel);

if (external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE === 'DEVELOPMENT'){
  window.__STORYBOOK_SERVER_CHANNEL__ = channel;
}

const preview = new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb();

window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
window.__STORYBOOK_CLIENT_API__ = new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({ storyStore: preview.storyStore });

preview.initialize({ importFn: importFn, getProjectAnnotations });

if (false) {}

/***/ }),

/***/ "@storybook/channels":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CHANNELS__;

/***/ }),

/***/ "@storybook/client-api":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_API__;

/***/ }),

/***/ "@storybook/client-logger":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CLIENT_LOGGER__;

/***/ }),

/***/ "@storybook/core-events":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_CORE_EVENTS__;

/***/ }),

/***/ "@storybook/global":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_GLOBAL__;

/***/ }),

/***/ "@storybook/preview-api":
/***/ ((module) => {

"use strict";
module.exports = __STORYBOOK_MODULE_PREVIEW_API__;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [3149], () => (__webpack_exec__("./storybook-config-entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.9e81bc3c.iframe.bundle.js.map