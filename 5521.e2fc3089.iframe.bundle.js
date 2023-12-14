"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5521],{

/***/ "../../@lightningjs/ui-components/src/components/Input/Input.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Input: () => (/* binding */ Input),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Input/Input.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
/* harmony import */ var _assets_images_ic_eye_white_48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png");
/* harmony import */ var _assets_images_ic_eyeHide_white_48_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Input$parameters, _Input$parameters2;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as InputComponent } from '.';\nimport Icon from '../Icon';\nimport { createModeControl } from '../../docs/utils';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\nimport eye from '../../assets/images/ic_eye_white_48.png';\nimport eyeHide from '../../assets/images/ic_eyeHide_white_48.png';\n\nexport default {\n  title: 'Components/Input'\n};\n\nfunction getComponentArray(comps) {\n  let arr = [];\n  switch (comps) {\n    case 'icon':\n      arr = [{ type: Icon, icon: lightning }];\n      break;\n    case 'eye':\n      arr = [{ type: Icon, icon: eye, w: 30, h: 30 }];\n      break;\n    case 'eyeHide':\n      arr = [{ type: Icon, icon: eyeHide, w: 30, h: 30 }];\n      break;\n  }\n  return arr;\n}\n\nexport const Input = () =>\n  class Input extends lng.Component {\n    static _template() {\n      return {\n        Input: {\n          type: InputComponent\n        }\n      };\n    }\n\n    _handleKey(event) {\n      const { key } = event;\n      if (key.length === 1) {\n        this.tag('Input').insert(key);\n      }\n      if (key === 'Backspace') {\n        this.tag('Input').backspace();\n      }\n    }\n  };\n\nconst sharedArgs = {\n  eyebrow: 'Eyebrow',\n  helpText: 'Help Text',\n  listening: false,\n  password: false,\n  mask: '•',\n  prefix: null,\n  suffix: null,\n  mode: 'focused'\n};\nconst sharedArgTypes = {\n  ...createModeControl({ summaryValue: sharedArgs.mode }),\n  eyebrow: {\n    control: 'text',\n    description: 'Text on the top of the button ',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  helpText: {\n    control: 'text',\n    description: 'Text on the bottom of the button ',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  password: {\n    control: 'boolean',\n    description: 'When true the content will be masked to the user',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  mask: {\n    control: 'text',\n    description: 'Character to use as a mask when password is true',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  listening: {\n    control: 'boolean',\n    description:\n      'When true cursor will be visible only in focused and unfocused mode and can edit the canvas',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  prefix: {\n    control: 'radio',\n    options: [null, 'icon'],\n    description: 'Lightning components to be placed to the left of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  suffix: {\n    control: 'radio',\n    options: [null, 'icon', 'eye', 'eyeHide'],\n    description: 'Lightning components to be placed to the right of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nconst sharedArgActions = {\n  listening: (isListening, component) => {\n    component.tag('Input').listening = isListening;\n  },\n  password: (isPassword, component) => {\n    component.tag('Input').password = isPassword;\n  },\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('Input').prefix = [];\n    } else {\n      component.tag('Input').prefix = getComponentArray(prefix);\n    }\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('Input').suffix = [];\n    } else {\n      component.tag('Input').suffix = getComponentArray(suffix);\n    }\n  }\n};\nInput.args = sharedArgs;\nInput.argTypes = sharedArgTypes;\nInput.parameters = { argActions: sharedArgActions };\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Input": {
    "startLoc": {
      "col": 21,
      "line": 57
    },
    "endLoc": {
      "col": 1,
      "line": 76
    },
    "startBody": {
      "col": 21,
      "line": 57
    },
    "endBody": {
      "col": 1,
      "line": 76
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as InputComponent } from '.';\nimport Icon from '../Icon';\nimport { createModeControl } from '../../docs/utils';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\nimport eye from '../../assets/images/ic_eye_white_48.png';\nimport eyeHide from '../../assets/images/ic_eyeHide_white_48.png';\nexport default {\n  title: 'Components/Input'\n};\nfunction getComponentArray(comps) {\n  let arr = [];\n  switch (comps) {\n    case 'icon':\n      arr = [{\n        type: Icon,\n        icon: lightning\n      }];\n      break;\n    case 'eye':\n      arr = [{\n        type: Icon,\n        icon: eye,\n        w: 30,\n        h: 30\n      }];\n      break;\n    case 'eyeHide':\n      arr = [{\n        type: Icon,\n        icon: eyeHide,\n        w: 30,\n        h: 30\n      }];\n      break;\n  }\n  return arr;\n}\nexport const Input = () => class Input extends lng.Component {\n  static _template() {\n    return {\n      Input: {\n        type: InputComponent\n      }\n    };\n  }\n  _handleKey(event) {\n    const {\n      key\n    } = event;\n    if (key.length === 1) {\n      this.tag('Input').insert(key);\n    }\n    if (key === 'Backspace') {\n      this.tag('Input').backspace();\n    }\n  }\n};\nconst sharedArgs = {\n  eyebrow: 'Eyebrow',\n  helpText: 'Help Text',\n  listening: false,\n  password: false,\n  mask: '•',\n  prefix: null,\n  suffix: null,\n  mode: 'focused'\n};\nconst sharedArgTypes = {\n  ...createModeControl({\n    summaryValue: sharedArgs.mode\n  }),\n  eyebrow: {\n    control: 'text',\n    description: 'Text on the top of the button ',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  helpText: {\n    control: 'text',\n    description: 'Text on the bottom of the button ',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  password: {\n    control: 'boolean',\n    description: 'When true the content will be masked to the user',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  mask: {\n    control: 'text',\n    description: 'Character to use as a mask when password is true',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  listening: {\n    control: 'boolean',\n    description: 'When true cursor will be visible only in focused and unfocused mode and can edit the canvas',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  prefix: {\n    control: 'radio',\n    options: [null, 'icon'],\n    description: 'Lightning components to be placed to the left of the title',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  suffix: {\n    control: 'radio',\n    options: [null, 'icon', 'eye', 'eyeHide'],\n    description: 'Lightning components to be placed to the right of the title',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  }\n};\nconst sharedArgActions = {\n  listening: (isListening, component) => {\n    component.tag('Input').listening = isListening;\n  },\n  password: (isPassword, component) => {\n    component.tag('Input').password = isPassword;\n  },\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('Input').prefix = [];\n    } else {\n      component.tag('Input').prefix = getComponentArray(prefix);\n    }\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('Input').suffix = [];\n    } else {\n      component.tag('Input').suffix = getComponentArray(suffix);\n    }\n  }\n};\nInput.args = sharedArgs;\nInput.argTypes = sharedArgTypes;\nInput.parameters = {\n  argActions: sharedArgActions\n};\nInput.parameters = {\n  ...Input.parameters,\n  docs: {\n    ...Input.parameters?.docs,\n    source: {\n      originalSource: \"() => class Input extends lng.Component {\\n  static _template() {\\n    return {\\n      Input: {\\n        type: InputComponent\\n      }\\n    };\\n  }\\n  _handleKey(event) {\\n    const {\\n      key\\n    } = event;\\n    if (key.length === 1) {\\n      this.tag('Input').insert(key);\\n    }\\n    if (key === 'Backspace') {\\n      this.tag('Input').backspace();\\n    }\\n  }\\n}\",\n      ...Input.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "input": {
          "startLoc": {
            "col": 21,
            "line": 57
          },
          "endLoc": {
            "col": 1,
            "line": 76
          },
          "startBody": {
            "col": 21,
            "line": 57
          },
          "endBody": {
            "col": 1,
            "line": 76
          }
        }
      }
    }
  },
  title: 'Components/Input'
});
function getComponentArray(comps) {
  var arr = [];
  switch (comps) {
    case 'icon':
      arr = [{
        type: _Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__
      }];
      break;
    case 'eye':
      arr = [{
        type: _Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        icon: _assets_images_ic_eye_white_48_png__WEBPACK_IMPORTED_MODULE_3__,
        w: 30,
        h: 30
      }];
      break;
    case 'eyeHide':
      arr = [{
        type: _Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        icon: _assets_images_ic_eyeHide_white_48_png__WEBPACK_IMPORTED_MODULE_4__,
        w: 30,
        h: 30
      }];
      break;
  }
  return arr;
}
var Input = function Input() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Input, _lng$Component);
    var _super = _createSuper(Input);
    function Input() {
      _classCallCheck(this, Input);
      return _super.apply(this, arguments);
    }
    _createClass(Input, [{
      key: "_handleKey",
      value: function _handleKey(event) {
        var key = event.key;
        if (key.length === 1) {
          this.tag('Input').insert(key);
        }
        if (key === 'Backspace') {
          this.tag('Input').backspace();
        }
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Input: {
            type: ___WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
          }
        };
      }
    }]);
    return Input;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
var sharedArgs = {
  eyebrow: 'Eyebrow',
  helpText: 'Help Text',
  listening: false,
  password: false,
  mask: '•',
  prefix: null,
  suffix: null,
  mode: 'focused'
};
var sharedArgTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .createModeControl */ .Ys)({
  summaryValue: sharedArgs.mode
})), {}, {
  eyebrow: {
    control: 'text',
    description: 'Text on the top of the button ',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  helpText: {
    control: 'text',
    description: 'Text on the bottom of the button ',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  password: {
    control: 'boolean',
    description: 'When true the content will be masked to the user',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  mask: {
    control: 'text',
    description: 'Character to use as a mask when password is true',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  listening: {
    control: 'boolean',
    description: 'When true cursor will be visible only in focused and unfocused mode and can edit the canvas',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  prefix: {
    control: 'radio',
    options: [null, 'icon'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'icon', 'eye', 'eyeHide'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
});
var sharedArgActions = {
  listening: function listening(isListening, component) {
    component.tag('Input').listening = isListening;
  },
  password: function password(isPassword, component) {
    component.tag('Input').password = isPassword;
  },
  prefix: function prefix(_prefix, component) {
    if (_prefix == null) {
      component.tag('Input').prefix = [];
    } else {
      component.tag('Input').prefix = getComponentArray(_prefix);
    }
  },
  suffix: function suffix(_suffix, component) {
    if (_suffix == null) {
      component.tag('Input').suffix = [];
    } else {
      component.tag('Input').suffix = getComponentArray(_suffix);
    }
  }
};
Input.args = sharedArgs;
Input.argTypes = sharedArgTypes;
Input.parameters = {
  argActions: sharedArgActions
};
Input.parameters = _objectSpread(_objectSpread({}, Input.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Input$parameters = Input.parameters) === null || _Input$parameters === void 0 ? void 0 : _Input$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class Input extends lng.Component {\n  static _template() {\n    return {\n      Input: {\n        type: InputComponent\n      }\n    };\n  }\n  _handleKey(event) {\n    const {\n      key\n    } = event;\n    if (key.length === 1) {\n      this.tag('Input').insert(key);\n    }\n    if (key === 'Backspace') {\n      this.tag('Input').backspace();\n    }\n  }\n}"
    }, (_Input$parameters2 = Input.parameters) === null || _Input$parameters2 === void 0 || (_Input$parameters2 = _Input$parameters2.docs) === null || _Input$parameters2 === void 0 ? void 0 : _Input$parameters2.source)
  })
});
var __namedExportsOrder = ["Input"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Input/Input.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Input)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Input/Input.styles.js
var Input_styles_namespaceObject = {};
__webpack_require__.r(Input_styles_namespaceObject);
__webpack_require__.d(Input_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    cursorStyle: {
      color: theme.color.textNeutral,
      blink: true,
      width: theme.spacer.xs,
      height: theme.spacer.xxl
    },
    eyebrowTextStyle: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutral
    }),
    helpTextStyle: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutralSecondary
    }),
    minWidth: (0,utils/* getWidthByUpCount */.OO)(theme, 4),
    paddingX: theme.spacer.xl,
    paddingY: theme.spacer.xl
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      eyebrowTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      helpTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    },
    focused: {
      cursorStyle: {
        color: theme.color.textInverse
      },
      eyebrowTextStyle: {
        textColor: theme.color.textNeutral
      },
      helpTextStyle: {
        textColor: theme.color.textNeutralSecondary
      }
    }
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      mode: {
        focused: {
          eyebrowTextStyle: {
            textColor: theme.color.textNeutral
          },
          helpTextStyle: {
            textColor: theme.color.textNeutral
          }
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.js
function Input_typeof(o) { "@babel/helpers - typeof"; return Input_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Input_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Input_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Input_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Input_ownKeys(Object(t), !0).forEach(function (r) { Input_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Input_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Input_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { Input_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function Input_defineProperty(obj, key, value) { key = Input_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Input_toPropertyKey(arg) { var key = Input_toPrimitive(arg, "string"); return Input_typeof(key) === "symbol" ? key : String(key); }
function Input_toPrimitive(input, hint) { if (Input_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Input_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Input_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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




var Input = /*#__PURE__*/function (_Button) {
  _inherits(Input, _Button);
  var _super = _createSuper(Input);
  function Input() {
    _classCallCheck(this, Input);
    return _super.apply(this, arguments);
  }
  _createClass(Input, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(Input.prototype), "_construct", this).call(this);
      this._title = '';
      this.actualTitle = '';
      this.position = this.title ? this.title.length : 0;
      this._justify = 'left';
      this._fixed = true;
      this.w = this.style.minWidth;
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      _get(_getPrototypeOf(Input.prototype), "$itemChanged", this).call(this);
      this._updateTextWrapper();
      this._updateHiddenContent();
      this._updateCursorPosition();
      this._updateTitleScrollPosition();
    }
  }, {
    key: "_onTitleTextBoxChanged",
    value: function _onTitleTextBoxChanged() {
      this._updateHiddenContent();
    }
  }, {
    key: "_onHiddenTextBoxChanged",
    value: function _onHiddenTextBoxChanged() {
      this._updateCursorPosition();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updatePassword(); // need to update title masking before rendering the new title
      _get(_getPrototypeOf(Input.prototype), "_update", this).call(this);
      this._updateEyebrow();
      this._updateHelpText();
      this._updateTextWrapper();
      this._updateHiddenContent();
      this._updateCursor();
      this._updateCursorListening();
      this._updateCursorBlink();
      this._updateCursorPosition();
      this._updateTitleScrollPosition();
    }
  }, {
    key: "_updatePassword",
    value: function _updatePassword() {
      this.title = this.password ? this.mask.repeat(this.actualTitle.length) : this.actualTitle;
    }
  }, {
    key: "_updateTruncation",
    value: function _updateTruncation() {
      // do not add word wrap
      if (this._Title) {
        this._Title.patch({
          style: {
            textStyle: Input_objectSpread(Input_objectSpread({}, this.style.textStyle), {}, {
              wordWrap: false
            })
          }
        });
      }
    }
  }, {
    key: "_updateEyebrow",
    value: function _updateEyebrow() {
      this._Eyebrow.patch({
        content: this.eyebrow,
        style: {
          textStyle: this.style.eyebrowTextStyle
        },
        mountY: 1,
        x: this.style.paddingX,
        y: this.y - this.style.paddingY
      });
    }
  }, {
    key: "_updateHelpText",
    value: function _updateHelpText() {
      this._HelpText.patch({
        content: this.helpText,
        style: {
          textStyle: this.style.helpTextStyle
        },
        x: this.style.paddingX,
        y: this.y + this.innerH + this.style.paddingY
      });
    }
  }, {
    key: "_updateTextWrapper",
    value: function _updateTextWrapper() {
      this._TextWrapper.clipping = true;
      this._TextWrapper.w = this._visibleContentWidth;
      if (this._Title) {
        this._TextWrapper.h = this._Title.h;
      }
    }
  }, {
    key: "_updateHiddenContent",
    value: function _updateHiddenContent() {
      /**
       * Hidden value is used for measuring where the cursor should
       * be positioned when a user changes the cursor position. Since
       * the text is one texture we don't know the exact position of each
       * individual character, so we render a substring version of the text
       * to determine the render width and position the cursor based on that number
       */
      if (!this._HiddenContent) {
        this._Content.patch({
          HiddenContent: {
            type: TextBox/* default */.Z,
            mountY: 0.5,
            y: function y(h) {
              return h / 2;
            },
            signals: {
              textBoxChanged: '_onHiddenTextBoxChanged'
            }
          }
        });
      }
      var _this$title = this.title,
        value = _this$title === void 0 ? '' : _this$title,
        position = this.position,
        password = this.password,
        mask = this.mask;
      var textBeforeCursor = password ? mask.repeat(value.length).substring(0, position) : value.substring(0, position);
      this._HiddenContent.patch({
        style: {
          textStyle: this.style.textStyle
        },
        content: textBeforeCursor
      });
      this._HiddenContent._Text && this._HiddenContent._Text.patch({
        alpha: 0.001
      });
    }
  }, {
    key: "_updateCursor",
    value: function _updateCursor() {
      if (this.style.cursorStyle && this.style.cursorStyle.blink) {
        if (!this._Cursor) {
          this._Content.patch({
            Cursor: {
              rect: true,
              mountY: 0.5
            }
          });
          this.cursorBlink = this._Cursor.animation({
            duration: 1.5,
            repeat: -1,
            actions: [{
              p: 'alpha',
              v: {
                0: 0,
                0.5: 1,
                1: 0
              }
            }]
          });
        }
        this._Cursor.patch(this.style.cursorStyle);
      }
    }
  }, {
    key: "_updateCursorListening",
    value: function _updateCursorListening() {
      if (!this._isDisabledMode) {
        if (this.cursorBlink && !this.cursorBlink.isPlaying()) {
          this.cursorBlink.start();
        }
      } else {
        if (this.cursorBlink) this.isCursorActive ? this.cursorBlink.start() : this.cursorBlink.stop();
      }
      this._Cursor.smooth = {
        color: this.style.cursorStyle.color
      };
    }
  }, {
    key: "_updateCursorBlink",
    value: function _updateCursorBlink() {
      if (this.cursorBlink) {
        if (this.isCursorActive) {
          this.cursorBlink.start();
        } else {
          this.cursorBlink.stop();
          this._Cursor.patch({
            alpha: 0.001
          });
        }
      }
    }
  }, {
    key: "_updateCursorPosition",
    value: function _updateCursorPosition() {
      this._Cursor.x = this._titleX + (this._isOverflow ? this._TextWrapper.w : this._HiddenContent.w);
    }
  }, {
    key: "_updateTitleScrollPosition",
    value: function _updateTitleScrollPosition() {
      if (this._Title) {
        this._Title.x = this._isOverflow ? this._visibleContentWidth - this._HiddenContent.w : 0;
        if (this._HiddenContent && this._TextWrapper) {
          this._HiddenContent.x = this._TextWrapper.x + this._Title.x;
        }
      }
    }
  }, {
    key: "_suffixX",
    get: function get() {
      var suffixX = this._hasPrefix ? this.w - this._paddingLeft - this._paddingRight - this._prefixW : this.w - this._paddingLeft - this._paddingRight - this.style.paddingX;
      return suffixX > 0 ? suffixX : 0;
    }
  }, {
    key: "isCursorActive",
    get: function get() {
      return this.listening && (this._isFocusedMode || this._isUnfocusedMode);
    }
  }, {
    key: "_isOverflow",
    get: function get() {
      return this._HiddenContent.w > this._visibleContentWidth;
    }
  }, {
    key: "_visibleContentWidth",
    get: function get() {
      return this._fixedWordWrapWidth;
    }
  }, {
    key: "value",
    get: function get() {
      return this.actualTitle;
    },
    set: function set(value) {
      this.title = this.actualTitle = value;
      this.position = 0;
      this._updatePassword();
    }
  }, {
    key: "clear",
    value: function clear() {
      if (this.isCursorActive) {
        this.title = this.actualTitle = '';
        this.position = 0;
      }
    }
  }, {
    key: "insert",
    value: function insert(content) {
      if (this.isCursorActive) {
        this.actualTitle = this.actualTitle.slice(0, this.position) + content + this.actualTitle.slice(this.position);
        this._updatePassword();
        this.position += content.length;
      }
    }
  }, {
    key: "backspace",
    value: function backspace() {
      if (this.isCursorActive && this.position > 0) {
        this.actualTitle = this.actualTitle.slice(0, this.position - 1) + this.actualTitle.slice(this.position);
        this._updatePassword();
        this.position--;
      }
    }
  }, {
    key: "_handleLeft",
    value: function _handleLeft() {
      if (this._isDisabledMode) {
        return false;
      }
      this.moveLeft();
      if (typeof this.onLeft === 'function') {
        return this.onLeft(this);
      }
      return true;
    }
  }, {
    key: "_handleRight",
    value: function _handleRight() {
      if (this._isDisabledMode) {
        return false;
      }
      this.moveRight();
      if (typeof this.onRight === 'function') {
        return this.onRight(this);
      }
      return true;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      var position = this.position;
      if (position >= 0) {
        this.position--;
        return true;
      }
      return false;
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      var position = this.position,
        title = this.title;
      if (position < title.length) {
        this.position++;
        return true;
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }

      // TODO - Localization?
      // Do we need a locale file with
      // component translations?
      // need to check with Accessibility on what order this should read out in
      if (this.password) {
        return [this.eyebrow, this.helpText];
      } else {
        return [this.eyebrow, 'Input: ' + this.title, this.helpText];
      }
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Input.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Input';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Input_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return Input_objectSpread(Input_objectSpread({}, _get(_getPrototypeOf(Input), "_template", this).call(this)), {}, {
        Eyebrow: {
          type: TextBox/* default */.Z
        },
        HelpText: {
          type: TextBox/* default */.Z
        }
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(Input), "properties", this)), ['actualTitle', 'cursor', 'eyebrow', 'helpText', 'listening', 'mask', 'password', 'position'
      // TODO: should maybe remove "fixed" as an editable prop to make sure this is never dynamic
      ]);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(Input), "tags", this)), ['Eyebrow', 'HelpText', {
        name: 'Cursor',
        path: 'Content.Cursor'
      }, {
        name: 'HiddenContent',
        path: 'Content.HiddenContent'
      }]);
    }
  }]);
  return Input;
}(Button/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_eyeHide_white_48.b1024d82.png";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_eye_white_48.dddd1594.png";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=5521.e2fc3089.iframe.bundle.js.map