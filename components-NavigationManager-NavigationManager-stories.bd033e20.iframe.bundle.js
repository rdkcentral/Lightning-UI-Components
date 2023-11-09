"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5097],{

/***/ "../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Column: () => (/* binding */ Column),
/* harmony export */   ColumnOfRows: () => (/* binding */ ColumnOfRows),
/* harmony export */   Row: () => (/* binding */ Row),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Row$parameters, _Row$parameters2, _Column$parameters, _Column$parameters2, _ColumnOfRows$paramet, _ColumnOfRows$paramet2;
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
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport NavigationManager from '.';\nimport Button from '../Button';\n\nclass ButtonFixedWidth extends Button {\n  static get __componentName() {\n    return 'ButtonSmall';\n  }\n\n  _init() {\n    this.fixed = true;\n    this.w = 200;\n    super._init();\n  }\n}\n\nfunction createRow(props = {}) {\n  return {\n    type: NavigationManager,\n    direction: 'row',\n    items: [\n      { type: ButtonFixedWidth, title: 'Left' },\n      { type: ButtonFixedWidth, title: 'Center', x: 250 },\n      { type: ButtonFixedWidth, title: 'Right', x: 500 }\n    ],\n    ...props\n  };\n}\n\nexport default {\n  title: 'Components/NavigationManager'\n};\n\nexport const Row = () =>\n  class RowExample extends lng.Component {\n    static _template() {\n      return {\n        Row: createRow()\n      };\n    }\n  };\n\nexport const Column = () =>\n  class RowExample extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: NavigationManager,\n          direction: 'column',\n          items: [\n            { type: ButtonFixedWidth, title: 'Top' },\n            { type: ButtonFixedWidth, title: 'Center' },\n            { type: ButtonFixedWidth, title: 'Bottom' }\n          ]\n        }\n      };\n    }\n  };\n\nexport const ColumnOfRows = () =>\n  class RowExample extends lng.Component {\n    static _template() {\n      return {\n        Row: {\n          type: NavigationManager,\n          direction: 'column',\n          plinko: true,\n          items: [\n            createRow({ autoResizeHeight: true }),\n            createRow({ autoResizeHeight: true }),\n            createRow({ autoResizeHeight: true })\n          ]\n        }\n      };\n    }\n  };\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Row": {
    "startLoc": {
      "col": 19,
      "line": 54
    },
    "endLoc": {
      "col": 1,
      "line": 60
    },
    "startBody": {
      "col": 19,
      "line": 54
    },
    "endBody": {
      "col": 1,
      "line": 60
    }
  },
  "Column": {
    "startLoc": {
      "col": 22,
      "line": 61
    },
    "endLoc": {
      "col": 1,
      "line": 80
    },
    "startBody": {
      "col": 22,
      "line": 61
    },
    "endBody": {
      "col": 1,
      "line": 80
    }
  },
  "ColumnOfRows": {
    "startLoc": {
      "col": 28,
      "line": 81
    },
    "endLoc": {
      "col": 1,
      "line": 98
    },
    "startBody": {
      "col": 28,
      "line": 81
    },
    "endBody": {
      "col": 1,
      "line": 98
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




var ButtonFixedWidth = /*#__PURE__*/function (_Button) {
  _inherits(ButtonFixedWidth, _Button);
  var _super = _createSuper(ButtonFixedWidth);
  function ButtonFixedWidth() {
    _classCallCheck(this, ButtonFixedWidth);
    return _super.apply(this, arguments);
  }
  _createClass(ButtonFixedWidth, [{
    key: "_init",
    value: function _init() {
      this.fixed = true;
      this.w = 200;
      _get(_getPrototypeOf(ButtonFixedWidth.prototype), "_init", this).call(this);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ButtonSmall';
    }
  }]);
  return ButtonFixedWidth;
}(_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
function createRow() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
    direction: 'row',
    items: [{
      type: ButtonFixedWidth,
      title: 'Left'
    }, {
      type: ButtonFixedWidth,
      title: 'Center',
      x: 250
    }, {
      type: ButtonFixedWidth,
      title: 'Right',
      x: 500
    }]
  }, props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport NavigationManager from '.';\nimport Button from '../Button';\nclass ButtonFixedWidth extends Button {\n  static get __componentName() {\n    return 'ButtonSmall';\n  }\n  _init() {\n    this.fixed = true;\n    this.w = 200;\n    super._init();\n  }\n}\nfunction createRow(props = {}) {\n  return {\n    type: NavigationManager,\n    direction: 'row',\n    items: [{\n      type: ButtonFixedWidth,\n      title: 'Left'\n    }, {\n      type: ButtonFixedWidth,\n      title: 'Center',\n      x: 250\n    }, {\n      type: ButtonFixedWidth,\n      title: 'Right',\n      x: 500\n    }],\n    ...props\n  };\n}\nexport default {\n  title: 'Components/NavigationManager'\n};\nexport const Row = () => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: createRow()\n    };\n  }\n};\nexport const Column = () => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: NavigationManager,\n        direction: 'column',\n        items: [{\n          type: ButtonFixedWidth,\n          title: 'Top'\n        }, {\n          type: ButtonFixedWidth,\n          title: 'Center'\n        }, {\n          type: ButtonFixedWidth,\n          title: 'Bottom'\n        }]\n      }\n    };\n  }\n};\nexport const ColumnOfRows = () => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: NavigationManager,\n        direction: 'column',\n        plinko: true,\n        items: [createRow({\n          autoResizeHeight: true\n        }), createRow({\n          autoResizeHeight: true\n        }), createRow({\n          autoResizeHeight: true\n        })]\n      }\n    };\n  }\n};\nRow.parameters = {\n  ...Row.parameters,\n  docs: {\n    ...Row.parameters?.docs,\n    source: {\n      originalSource: \"() => class RowExample extends lng.Component {\\n  static _template() {\\n    return {\\n      Row: createRow()\\n    };\\n  }\\n}\",\n      ...Row.parameters?.docs?.source\n    }\n  }\n};\nColumn.parameters = {\n  ...Column.parameters,\n  docs: {\n    ...Column.parameters?.docs,\n    source: {\n      originalSource: \"() => class RowExample extends lng.Component {\\n  static _template() {\\n    return {\\n      Row: {\\n        type: NavigationManager,\\n        direction: 'column',\\n        items: [{\\n          type: ButtonFixedWidth,\\n          title: 'Top'\\n        }, {\\n          type: ButtonFixedWidth,\\n          title: 'Center'\\n        }, {\\n          type: ButtonFixedWidth,\\n          title: 'Bottom'\\n        }]\\n      }\\n    };\\n  }\\n}\",\n      ...Column.parameters?.docs?.source\n    }\n  }\n};\nColumnOfRows.parameters = {\n  ...ColumnOfRows.parameters,\n  docs: {\n    ...ColumnOfRows.parameters?.docs,\n    source: {\n      originalSource: \"() => class RowExample extends lng.Component {\\n  static _template() {\\n    return {\\n      Row: {\\n        type: NavigationManager,\\n        direction: 'column',\\n        plinko: true,\\n        items: [createRow({\\n          autoResizeHeight: true\\n        }), createRow({\\n          autoResizeHeight: true\\n        }), createRow({\\n          autoResizeHeight: true\\n        })]\\n      }\\n    };\\n  }\\n}\",\n      ...ColumnOfRows.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "row": {
          "startLoc": {
            "col": 19,
            "line": 54
          },
          "endLoc": {
            "col": 1,
            "line": 60
          },
          "startBody": {
            "col": 19,
            "line": 54
          },
          "endBody": {
            "col": 1,
            "line": 60
          }
        },
        "column": {
          "startLoc": {
            "col": 22,
            "line": 61
          },
          "endLoc": {
            "col": 1,
            "line": 80
          },
          "startBody": {
            "col": 22,
            "line": 61
          },
          "endBody": {
            "col": 1,
            "line": 80
          }
        },
        "column-of-rows": {
          "startLoc": {
            "col": 28,
            "line": 81
          },
          "endLoc": {
            "col": 1,
            "line": 98
          },
          "startBody": {
            "col": 28,
            "line": 81
          },
          "endBody": {
            "col": 1,
            "line": 98
          }
        }
      }
    }
  },
  title: 'Components/NavigationManager'
});
var Row = function Row() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(RowExample, _lng$Component);
    var _super2 = _createSuper(RowExample);
    function RowExample() {
      _classCallCheck(this, RowExample);
      return _super2.apply(this, arguments);
    }
    _createClass(RowExample, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: createRow()
        };
      }
    }]);
    return RowExample;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var Column = function Column() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(RowExample, _lng$Component2);
    var _super3 = _createSuper(RowExample);
    function RowExample() {
      _classCallCheck(this, RowExample);
      return _super3.apply(this, arguments);
    }
    _createClass(RowExample, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            direction: 'column',
            items: [{
              type: ButtonFixedWidth,
              title: 'Top'
            }, {
              type: ButtonFixedWidth,
              title: 'Center'
            }, {
              type: ButtonFixedWidth,
              title: 'Bottom'
            }]
          }
        };
      }
    }]);
    return RowExample;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
;
var ColumnOfRows = function ColumnOfRows() {
  return /*#__PURE__*/function (_lng$Component3) {
    _inherits(RowExample, _lng$Component3);
    var _super4 = _createSuper(RowExample);
    function RowExample() {
      _classCallCheck(this, RowExample);
      return _super4.apply(this, arguments);
    }
    _createClass(RowExample, null, [{
      key: "_template",
      value: function _template() {
        return {
          Row: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
            direction: 'column',
            plinko: true,
            items: [createRow({
              autoResizeHeight: true
            }), createRow({
              autoResizeHeight: true
            }), createRow({
              autoResizeHeight: true
            })]
          }
        };
      }
    }]);
    return RowExample;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
Row.parameters = _objectSpread(_objectSpread({}, Row.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Row$parameters = Row.parameters) === null || _Row$parameters === void 0 ? void 0 : _Row$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: createRow()\n    };\n  }\n}"
    }, (_Row$parameters2 = Row.parameters) === null || _Row$parameters2 === void 0 || (_Row$parameters2 = _Row$parameters2.docs) === null || _Row$parameters2 === void 0 ? void 0 : _Row$parameters2.source)
  })
});
Column.parameters = _objectSpread(_objectSpread({}, Column.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Column$parameters = Column.parameters) === null || _Column$parameters === void 0 ? void 0 : _Column$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: NavigationManager,\n        direction: 'column',\n        items: [{\n          type: ButtonFixedWidth,\n          title: 'Top'\n        }, {\n          type: ButtonFixedWidth,\n          title: 'Center'\n        }, {\n          type: ButtonFixedWidth,\n          title: 'Bottom'\n        }]\n      }\n    };\n  }\n}"
    }, (_Column$parameters2 = Column.parameters) === null || _Column$parameters2 === void 0 || (_Column$parameters2 = _Column$parameters2.docs) === null || _Column$parameters2 === void 0 ? void 0 : _Column$parameters2.source)
  })
});
ColumnOfRows.parameters = _objectSpread(_objectSpread({}, ColumnOfRows.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ColumnOfRows$paramet = ColumnOfRows.parameters) === null || _ColumnOfRows$paramet === void 0 ? void 0 : _ColumnOfRows$paramet.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: NavigationManager,\n        direction: 'column',\n        plinko: true,\n        items: [createRow({\n          autoResizeHeight: true\n        }), createRow({\n          autoResizeHeight: true\n        }), createRow({\n          autoResizeHeight: true\n        })]\n      }\n    };\n  }\n}"
    }, (_ColumnOfRows$paramet2 = ColumnOfRows.parameters) === null || _ColumnOfRows$paramet2 === void 0 || (_ColumnOfRows$paramet2 = _ColumnOfRows$paramet2.docs) === null || _ColumnOfRows$paramet2 === void 0 ? void 0 : _ColumnOfRows$paramet2.source)
  })
});
var __namedExportsOrder = ["Row", "Column", "ColumnOfRows"];

/***/ })

}]);
//# sourceMappingURL=components-NavigationManager-NavigationManager-stories.bd033e20.iframe.bundle.js.map