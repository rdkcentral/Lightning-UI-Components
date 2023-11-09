"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9127],{

/***/ "../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Basic$parameters, _Basic$parameters2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport FocusManager from '.';\nimport Button from '../Button';\n\nexport default {\n  title: 'Components/FocusManager'\n};\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        FocusManager: {\n          type: FocusManager,\n          direction: 'row',\n          items: []\n        },\n\n        itemsCol: [\n          { type: ButtonFixedWidth, title: 'Top' },\n          { type: ButtonFixedWidth, title: 'Center', y: 250 },\n          { type: ButtonFixedWidth, title: 'Bottom', y: 500 }\n        ],\n\n        itemsRow: [\n          { type: ButtonFixedWidth, title: 'Left', x: 0, y: 250 },\n          { type: ButtonFixedWidth, title: 'Center', x: 250, y: 250 },\n          { type: ButtonFixedWidth, title: 'Right', x: 500, y: 250 }\n        ]\n      };\n    }\n  };\n\nclass ButtonFixedWidth extends Button {\n  static get __componentName() {\n    return 'ButtonSmall';\n  }\n\n  _init() {\n    this.fixed = true;\n    this.w = 200;\n    super._init();\n  }\n}\n\nBasic.args = {\n  direction: 'row',\n  wrapSelected: false\n};\n\nBasic.argTypes = {\n  direction: {\n    control: 'radio',\n    options: ['row', 'column'],\n    description: 'The navigation direction for focus (left/right or up/down)',\n    table: {\n      defaultValue: { summary: 'row' }\n    }\n  },\n  wrapSelected: {\n    control: 'boolean',\n    description:\n      'When set to true, the focus will loop back to the beginning of the list after reaching the last item, and vice versa. This enables continuous navigation through the list without dead ends. If wrapSelected is set to false (the default value), the focus will stop at the first or last item, depending on the navigation direction',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nBasic.parameters = {\n  argActions: {\n    direction: (direction, component) => {\n      component.tag('FocusManager').items =\n        direction === 'row' ? component.itemsRow : component.itemsCol;\n\n      component.tag('FocusManager').direction = direction;\n    }\n  }\n};\n";
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport FocusManager from '.';\nimport Button from '../Button';\nexport default {\n  title: 'Components/FocusManager'\n};\nexport const Basic = () => class Basic extends lng.Component {\n  static _template() {\n    return {\n      FocusManager: {\n        type: FocusManager,\n        direction: 'row',\n        items: []\n      },\n      itemsCol: [{\n        type: ButtonFixedWidth,\n        title: 'Top'\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Center',\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Bottom',\n        y: 500\n      }],\n      itemsRow: [{\n        type: ButtonFixedWidth,\n        title: 'Left',\n        x: 0,\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Center',\n        x: 250,\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Right',\n        x: 500,\n        y: 250\n      }]\n    };\n  }\n};\nclass ButtonFixedWidth extends Button {\n  static get __componentName() {\n    return 'ButtonSmall';\n  }\n  _init() {\n    this.fixed = true;\n    this.w = 200;\n    super._init();\n  }\n}\nBasic.args = {\n  direction: 'row',\n  wrapSelected: false\n};\nBasic.argTypes = {\n  direction: {\n    control: 'radio',\n    options: ['row', 'column'],\n    description: 'The navigation direction for focus (left/right or up/down)',\n    table: {\n      defaultValue: {\n        summary: 'row'\n      }\n    }\n  },\n  wrapSelected: {\n    control: 'boolean',\n    description: 'When set to true, the focus will loop back to the beginning of the list after reaching the last item, and vice versa. This enables continuous navigation through the list without dead ends. If wrapSelected is set to false (the default value), the focus will stop at the first or last item, depending on the navigation direction',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nBasic.parameters = {\n  argActions: {\n    direction: (direction, component) => {\n      component.tag('FocusManager').items = direction === 'row' ? component.itemsRow : component.itemsCol;\n      component.tag('FocusManager').direction = direction;\n    }\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"() => class Basic extends lng.Component {\\n  static _template() {\\n    return {\\n      FocusManager: {\\n        type: FocusManager,\\n        direction: 'row',\\n        items: []\\n      },\\n      itemsCol: [{\\n        type: ButtonFixedWidth,\\n        title: 'Top'\\n      }, {\\n        type: ButtonFixedWidth,\\n        title: 'Center',\\n        y: 250\\n      }, {\\n        type: ButtonFixedWidth,\\n        title: 'Bottom',\\n        y: 500\\n      }],\\n      itemsRow: [{\\n        type: ButtonFixedWidth,\\n        title: 'Left',\\n        x: 0,\\n        y: 250\\n      }, {\\n        type: ButtonFixedWidth,\\n        title: 'Center',\\n        x: 250,\\n        y: 250\\n      }, {\\n        type: ButtonFixedWidth,\\n        title: 'Right',\\n        x: 500,\\n        y: 250\\n      }]\\n    };\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};",
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
  title: 'Components/FocusManager'
});
var Basic = function Basic() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Basic, _lng$Component);
    var _super = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          FocusManager: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            direction: 'row',
            items: []
          },
          itemsCol: [{
            type: ButtonFixedWidth,
            title: 'Top'
          }, {
            type: ButtonFixedWidth,
            title: 'Center',
            y: 250
          }, {
            type: ButtonFixedWidth,
            title: 'Bottom',
            y: 500
          }],
          itemsRow: [{
            type: ButtonFixedWidth,
            title: 'Left',
            x: 0,
            y: 250
          }, {
            type: ButtonFixedWidth,
            title: 'Center',
            x: 250,
            y: 250
          }, {
            type: ButtonFixedWidth,
            title: 'Right',
            x: 500,
            y: 250
          }]
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
var ButtonFixedWidth = /*#__PURE__*/function (_Button) {
  _inherits(ButtonFixedWidth, _Button);
  var _super2 = _createSuper(ButtonFixedWidth);
  function ButtonFixedWidth() {
    _classCallCheck(this, ButtonFixedWidth);
    return _super2.apply(this, arguments);
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
}(_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
Basic.args = {
  direction: 'row',
  wrapSelected: false
};
Basic.argTypes = {
  direction: {
    control: 'radio',
    options: ['row', 'column'],
    description: 'The navigation direction for focus (left/right or up/down)',
    table: {
      defaultValue: {
        summary: 'row'
      }
    }
  },
  wrapSelected: {
    control: 'boolean',
    description: 'When set to true, the focus will loop back to the beginning of the list after reaching the last item, and vice versa. This enables continuous navigation through the list without dead ends. If wrapSelected is set to false (the default value), the focus will stop at the first or last item, depending on the navigation direction',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Basic.parameters = {
  argActions: {
    direction: function direction(_direction, component) {
      component.tag('FocusManager').items = _direction === 'row' ? component.itemsRow : component.itemsCol;
      component.tag('FocusManager').direction = _direction;
    }
  }
};
Basic.parameters = _objectSpread(_objectSpread({}, Basic.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Basic$parameters = Basic.parameters) === null || _Basic$parameters === void 0 ? void 0 : _Basic$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      FocusManager: {\n        type: FocusManager,\n        direction: 'row',\n        items: []\n      },\n      itemsCol: [{\n        type: ButtonFixedWidth,\n        title: 'Top'\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Center',\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Bottom',\n        y: 500\n      }],\n      itemsRow: [{\n        type: ButtonFixedWidth,\n        title: 'Left',\n        x: 0,\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Center',\n        x: 250,\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Right',\n        x: 500,\n        y: 250\n      }]\n    };\n  }\n}"
    }, (_Basic$parameters2 = Basic.parameters) === null || _Basic$parameters2 === void 0 || (_Basic$parameters2 = _Basic$parameters2.docs) === null || _Basic$parameters2 === void 0 ? void 0 : _Basic$parameters2.source)
  })
});
var __namedExportsOrder = ["Basic"];

/***/ })

}]);
//# sourceMappingURL=components-FocusManager-FocusManager-stories.c5770429.iframe.bundle.js.map