"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[1909],{

/***/ "../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ withMarqueeSync)
/* harmony export */ });
/* harmony import */ var _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
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


/**
 * apply to a component to synchronize the marquee scroll
 * timing of child TextBox components. Target class must
 * have a `get syncArray` property, which contains an
 * array of the tags of all TextBoxes to be synchronized.
 *
 * @param {*} Base class to be extended
 * @returns class with marquee sync functionality
 */
function withMarqueeSync(Base) {
  return /*#__PURE__*/function (_Base) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _Base);
    return _createClass(_class, [{
      key: "_init",
      value: function _init() {
        // use _init instead of _construct to ensure elements exist before running setup
        _superPropGet(_class, "_init", this, 3)([]);
        if (this._shouldSync) {
          this._updateSignals();
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        _superPropGet(_class, "_update", this, 3)([]);
        if (this._shouldSync) {
          this._updateSignals();
        } else {
          this._cleanupSyncValues();
        }
      }
    }, {
      key: "_cleanupSyncValues",
      value: function _cleanupSyncValues() {
        this.syncArray.map(function (component) {
          component.marqueeOverrideLoopX = undefined;
          component.signals && component.signals.willMarquee && delete component.signals.willMarquee;
        });
      }
    }, {
      key: "_updateSignals",
      value: function _updateSignals() {
        if (this.syncArray) {
          this.syncArray.map(function (component) {
            // preserve signals set in Base class
            component.signals = _objectSpread(_objectSpread({}, component.signals), {}, {
              willMarquee: '_willMarquee'
            });
          });
        }
      }
    }, {
      key: "_willMarquee",
      value: function _willMarquee(compRef) {
        var _this = this;
        if (this._shouldSync) {
          this._longestMarqueeWidth = Math.max(compRef._textRenderedW || 0, this._longestMarqueeWidth || 0);
          this.syncArray.map(function (component) {
            component.marqueeOverrideLoopX = _this._longestMarqueeWidth;
          });
        }
      }
    }, {
      key: "_shouldSync",
      get: function get() {
        if (this.style.marqueeSync === false) {
          // only fail this case if explicitly false
          return false;
        }
        if (!this.syncArray) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.warn('warning: components using MarqueeSync must have a syncArray getter defined.');
          return false;
        } else if (!Array.isArray(this.syncArray)) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.warn('warning: syncArray must be typeof array.');
          return false;
        } else if (this.syncArray.length < 2) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.warn('warning: syncArray must contain at least two component references.');
          return false;
        } else {
          return true;
        }
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }]);
  }(Base);
}

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _withMarqueeSync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
/* harmony import */ var _components_TextBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Utilities/withMarqueeSync'
});
const Basic = () => {
  return class Basic extends (0,_withMarqueeSync__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_components_Base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A) {
    static get __componentName() {
      return 'Basic';
    }
    static _template() {
      return {
        Basic: {
          Title: {
            type: _components_TextBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            style: {
              textStyle: {
                wordWrapWidth: 250,
                maxLines: 1
              }
            },
            marquee: true
          },
          Subtitle: {
            type: _components_TextBox__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
            content: 'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',
            y: 30,
            style: {
              textStyle: {
                wordWrapWidth: 250,
                maxLines: 1
              }
            },
            marquee: true
          }
        }
      };
    }
    get syncArray() {
      return [this.tag('Title'), this.tag('Subtitle')];
    }
  };
};
Basic.storyName = 'withMarqueeSync';
;
const __namedExportsOrder = ["Basic"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  return class Basic extends withMarqueeSync(Base) {\n    static get __componentName() {\n      return 'Basic';\n    }\n    static _template() {\n      return {\n        Basic: {\n          Title: {\n            type: TextBox,\n            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',\n            style: {\n              textStyle: {\n                wordWrapWidth: 250,\n                maxLines: 1\n              }\n            },\n            marquee: true\n          },\n          Subtitle: {\n            type: TextBox,\n            content: 'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',\n            y: 30,\n            style: {\n              textStyle: {\n                wordWrapWidth: 250,\n                maxLines: 1\n              }\n            },\n            marquee: true\n          }\n        }\n      };\n    }\n    get syncArray() {\n      return [this.tag('Title'), this.tag('Subtitle')];\n    }\n  };\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=mixins-withMarqueeSync-withMarqueeSync-stories.4f3a7f68.iframe.bundle.js.map