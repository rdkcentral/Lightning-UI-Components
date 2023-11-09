"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4020],{

/***/ "../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _withMarqueeSync__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js");
/* harmony import */ var _components_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
/* harmony import */ var _components_TextBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Basic$parameters, _Basic$parameters2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport withMarqueeSync from './withMarqueeSync';\nimport Base from '../../components/Base';\nimport TextBox from '../../components/TextBox';\n\nexport default {\n  title: 'Utilities/withMarqueeSync'\n};\n\nexport const Basic = () => {\n  return class Basic extends withMarqueeSync(Base) {\n    static get __componentName() {\n      return 'Basic';\n    }\n    static _template() {\n      return {\n        Basic: {\n          Title: {\n            type: TextBox,\n            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',\n            style: { textStyle: { wordWrapWidth: 250, maxLines: 1 } },\n            marquee: true\n          },\n          Subtitle: {\n            type: TextBox,\n            content:\n              'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',\n            y: 30,\n            style: { textStyle: { wordWrapWidth: 250, maxLines: 1 } },\n            marquee: true\n          }\n        }\n      };\n    }\n\n    get syncArray() {\n      return [this.tag('Title'), this.tag('Subtitle')];\n    }\n  };\n};\n\nBasic.storyName = 'withMarqueeSync';\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 25
    },
    "endLoc": {
      "col": 1,
      "line": 63
    },
    "startBody": {
      "col": 21,
      "line": 25
    },
    "endBody": {
      "col": 1,
      "line": 63
    }
  }
};

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
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport withMarqueeSync from './withMarqueeSync';\nimport Base from '../../components/Base';\nimport TextBox from '../../components/TextBox';\nexport default {\n  title: 'Utilities/withMarqueeSync'\n};\nexport const Basic = () => {\n  return class Basic extends withMarqueeSync(Base) {\n    static get __componentName() {\n      return 'Basic';\n    }\n    static _template() {\n      return {\n        Basic: {\n          Title: {\n            type: TextBox,\n            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',\n            style: {\n              textStyle: {\n                wordWrapWidth: 250,\n                maxLines: 1\n              }\n            },\n            marquee: true\n          },\n          Subtitle: {\n            type: TextBox,\n            content: 'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',\n            y: 30,\n            style: {\n              textStyle: {\n                wordWrapWidth: 250,\n                maxLines: 1\n              }\n            },\n            marquee: true\n          }\n        }\n      };\n    }\n    get syncArray() {\n      return [this.tag('Title'), this.tag('Subtitle')];\n    }\n  };\n};\nBasic.storyName = 'withMarqueeSync';\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  return class Basic extends withMarqueeSync(Base) {\\n    static get __componentName() {\\n      return 'Basic';\\n    }\\n    static _template() {\\n      return {\\n        Basic: {\\n          Title: {\\n            type: TextBox,\\n            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',\\n            style: {\\n              textStyle: {\\n                wordWrapWidth: 250,\\n                maxLines: 1\\n              }\\n            },\\n            marquee: true\\n          },\\n          Subtitle: {\\n            type: TextBox,\\n            content: 'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',\\n            y: 30,\\n            style: {\\n              textStyle: {\\n                wordWrapWidth: 250,\\n                maxLines: 1\\n              }\\n            },\\n            marquee: true\\n          }\\n        }\\n      };\\n    }\\n    get syncArray() {\\n      return [this.tag('Title'), this.tag('Subtitle')];\\n    }\\n  };\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 25
          },
          "endLoc": {
            "col": 1,
            "line": 63
          },
          "startBody": {
            "col": 21,
            "line": 25
          },
          "endBody": {
            "col": 1,
            "line": 63
          }
        }
      }
    }
  },
  title: 'Utilities/withMarqueeSync'
});
var Basic = function Basic() {
  return /*#__PURE__*/function (_withMarqueeSync) {
    _inherits(Basic, _withMarqueeSync);
    var _super = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    _createClass(Basic, [{
      key: "syncArray",
      get: function get() {
        return [this.tag('Title'), this.tag('Subtitle')];
      }
    }], [{
      key: "__componentName",
      get: function get() {
        return 'Basic';
      }
    }, {
      key: "_template",
      value: function _template() {
        return {
          Basic: {
            Title: {
              type: _components_TextBox__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
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
              type: _components_TextBox__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
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
    }]);
    return Basic;
  }((0,_withMarqueeSync__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(_components_Base__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z));
};
Basic.storyName = 'withMarqueeSync';
Basic.parameters = _objectSpread(_objectSpread({}, Basic.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Basic$parameters = Basic.parameters) === null || _Basic$parameters === void 0 ? void 0 : _Basic$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => {\n  return class Basic extends withMarqueeSync(Base) {\n    static get __componentName() {\n      return 'Basic';\n    }\n    static _template() {\n      return {\n        Basic: {\n          Title: {\n            type: TextBox,\n            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing',\n            style: {\n              textStyle: {\n                wordWrapWidth: 250,\n                maxLines: 1\n              }\n            },\n            marquee: true\n          },\n          Subtitle: {\n            type: TextBox,\n            content: 'Morbi vehicula rhoncus aliquam. Cras eget vulputate lectus. Aenean egestas mi at scelerisque cursus.',\n            y: 30,\n            style: {\n              textStyle: {\n                wordWrapWidth: 250,\n                maxLines: 1\n              }\n            },\n            marquee: true\n          }\n        }\n      };\n    }\n    get syncArray() {\n      return [this.tag('Title'), this.tag('Subtitle')];\n    }\n  };\n}"
    }, (_Basic$parameters2 = Basic.parameters) === null || _Basic$parameters2 === void 0 || (_Basic$parameters2 = _Basic$parameters2.docs) === null || _Basic$parameters2 === void 0 ? void 0 : _Basic$parameters2.source)
  })
});
var __namedExportsOrder = ["Basic"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ withMarqueeSync)
/* harmony export */ });
/* harmony import */ var _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_init",
      value: function _init() {
        // use _init instead of _construct to ensure elements exist before running setup
        _get(_getPrototypeOf(_class.prototype), "_init", this).call(this);
        if (this._shouldSync) {
          this._updateSignals();
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(_class.prototype), "_update", this).call(this);
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
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.warn('warning: components using MarqueeSync must have a syncArray getter defined.');
          return false;
        } else if (!Array.isArray(this.syncArray)) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.warn('warning: syncArray must be typeof array.');
          return false;
        } else if (this.syncArray.length < 2) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.warn('warning: syncArray must contain at least two component references.');
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
    return _class;
  }(Base);
}

/***/ })

}]);
//# sourceMappingURL=mixins-withMarqueeSync-withMarqueeSync-stories.443f4b8a.iframe.bundle.js.map