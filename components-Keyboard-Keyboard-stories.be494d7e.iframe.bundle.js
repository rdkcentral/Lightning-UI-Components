"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8575,9134,5278,1977,11,4759,1661,9725,1655,1323,7987,3153,3375,7771,8197,2877,9861,9459,3597],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keyboard: () => (/* binding */ Keyboard),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { createModeControl } from '../../docs/utils';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport { default as KeyboardComponent } from './Keyboard';\n\nexport default {\n  title: 'Components/Keyboard/Keyboard'\n};\n\nexport const Keyboard = () =>\n  class Keyboard extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardComponent,\n          formats: {\n            lowercase: [\n              [\n                '1',\n                '2',\n                '3',\n                '4',\n                '5',\n                '6',\n                '7',\n                '8',\n                '9',\n                '0',\n                {\n                  title: 'Delete',\n                  size: 'md',\n                  keyId: 'delete',\n                  announce: 'delete, button'\n                }\n              ],\n              ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],\n              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],\n              ['z', 'x', 'c', 'v', 'b', 'n', 'm'],\n              [\n                {\n                  title: 'Clear',\n                  size: 'lg',\n                  keyId: 'clear',\n                  announce: 'clear, button'\n                },\n                {\n                  title: 'Space',\n                  size: 'xl',\n                  keyId: 'space',\n                  announce: 'space, button'\n                },\n                {\n                  title: 'Done',\n                  size: 'lg',\n                  keyId: 'done',\n                  announce: 'done, button'\n                }\n              ]\n            ]\n          }\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\n\nKeyboard.args = {\n  centerKeys: true,\n  centerKeyboard: false,\n  mode: 'focused'\n};\n\nKeyboard.sharedArgTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  centerKeyboard: {\n    description: \"Center the keyboard within it's set width\",\n    control: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nKeyboard.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  centerKeys: {\n    description: \"Center the keys within it's set width of keyboard\",\n    control: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\nKeyboard.parameters = {};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Keyboard": {
    "startLoc": {
      "col": 24,
      "line": 29
    },
    "endLoc": {
      "col": 3,
      "line": 84
    },
    "startBody": {
      "col": 24,
      "line": 29
    },
    "endBody": {
      "col": 3,
      "line": 84
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { createModeControl } from '../../docs/utils';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport { default as KeyboardComponent } from './Keyboard';\n\nexport default {\n  title: 'Components/Keyboard/Keyboard'\n};\n\nexport const Keyboard = () =>\n  class Keyboard extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardComponent,\n          formats: {\n            lowercase: [\n              [\n                '1',\n                '2',\n                '3',\n                '4',\n                '5',\n                '6',\n                '7',\n                '8',\n                '9',\n                '0',\n                {\n                  title: 'Delete',\n                  size: 'md',\n                  keyId: 'delete',\n                  announce: 'delete, button'\n                }\n              ],\n              ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],\n              ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],\n              ['z', 'x', 'c', 'v', 'b', 'n', 'm'],\n              [\n                {\n                  title: 'Clear',\n                  size: 'lg',\n                  keyId: 'clear',\n                  announce: 'clear, button'\n                },\n                {\n                  title: 'Space',\n                  size: 'xl',\n                  keyId: 'space',\n                  announce: 'space, button'\n                },\n                {\n                  title: 'Done',\n                  size: 'lg',\n                  keyId: 'done',\n                  announce: 'done, button'\n                }\n              ]\n            ]\n          }\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\n\nKeyboard.args = {\n  centerKeys: true,\n  centerKeyboard: false,\n  mode: 'focused'\n};\n\nKeyboard.sharedArgTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  centerKeyboard: {\n    description: \"Center the keyboard within it's set width\",\n    control: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nKeyboard.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  centerKeys: {\n    description: \"Center the keys within it's set width of keyboard\",\n    control: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\nKeyboard.parameters = {};\n",
      "locationsMap": {
        "keyboard": {
          "startLoc": {
            "col": 24,
            "line": 29
          },
          "endLoc": {
            "col": 3,
            "line": 84
          },
          "startBody": {
            "col": 24,
            "line": 29
          },
          "endBody": {
            "col": 3,
            "line": 84
          }
        }
      }
    }
  },
  title: 'Components/Keyboard/Keyboard'
});
var Keyboard = function Keyboard() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Keyboard, _lng$Component);
    var _super = _createSuper(Keyboard);
    function Keyboard() {
      _classCallCheck(this, Keyboard);
      return _super.apply(this, arguments);
    }
    _createClass(Keyboard, null, [{
      key: "_template",
      value: function _template() {
        return {
          Keyboard: {
            type: _Keyboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
            formats: {
              lowercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
                title: 'Delete',
                size: 'md',
                keyId: 'delete',
                announce: 'delete, button'
              }], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm'], [{
                title: 'Clear',
                size: 'lg',
                keyId: 'clear',
                announce: 'clear, button'
              }, {
                title: 'Space',
                size: 'xl',
                keyId: 'space',
                announce: 'space, button'
              }, {
                title: 'Done',
                size: 'lg',
                keyId: 'done',
                announce: 'done, button'
              }]]
            }
          },
          w: _utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getWidthByUpCount */ .Ay.getWidthByUpCount(_globals_context_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A.theme, 1)
        };
      }
    }]);
    return Keyboard;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
Keyboard.args = {
  centerKeys: true,
  centerKeyboard: false,
  mode: 'focused'
};
Keyboard.sharedArgTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_4__/* .createModeControl */ .Pg)({
  summaryValue: 'focused'
})), {}, {
  centerKeyboard: {
    description: "Center the keyboard within it's set width",
    control: 'boolean',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});
Keyboard.argTypes = _objectSpread(_objectSpread({}, Keyboard.sharedArgTypes), {}, {
  centerKeys: {
    description: "Center the keys within it's set width of keyboard",
    control: 'boolean',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});
Keyboard.parameters = {};
Keyboard.parameters = {
  ...Keyboard.parameters,
  docs: {
    ...Keyboard.parameters?.docs,
    source: {
      originalSource: "() => class Keyboard extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardComponent,\n        formats: {\n          lowercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {\n            title: 'Delete',\n            size: 'md',\n            keyId: 'delete',\n            announce: 'delete, button'\n          }], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], ['z', 'x', 'c', 'v', 'b', 'n', 'm'], [{\n            title: 'Clear',\n            size: 'lg',\n            keyId: 'clear',\n            announce: 'clear, button'\n          }, {\n            title: 'Space',\n            size: 'xl',\n            keyId: 'space',\n            announce: 'space, button'\n          }, {\n            title: 'Done',\n            size: 'lg',\n            keyId: 'done',\n            announce: 'done, button'\n          }]]\n        }\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...Keyboard.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Keyboard"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
/* harmony import */ var _Key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Key/Key.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _Keyboard_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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







var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
var Keyboard = /*#__PURE__*/function (_Base) {
  _inherits(Keyboard, _Base);
  var _super = _createSuper(Keyboard);
  function Keyboard() {
    _classCallCheck(this, Keyboard);
    return _super.apply(this, arguments);
  }
  _createClass(Keyboard, [{
    key: "_init",
    value: function _init() {
      this._setShouldUpdateThemeBound = this._setShouldUpdateTheme.bind(this);
      _globals_context_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.on('themeUpdate', this._setShouldUpdateThemeBound);
      _get(_getPrototypeOf(Keyboard.prototype), "_init", this).call(this);
    }
  }, {
    key: "_setShouldUpdateTheme",
    value: function _setShouldUpdateTheme() {
      this.shouldUpdateTheme = true;
    }
  }, {
    key: "_detach",
    value: function _detach() {
      _get(_getPrototypeOf(Keyboard.prototype), "_detach", this).call(this);
      _globals_context_index__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.off('themeUpdate', this._setShouldUpdateThemeBound);
    }
  }, {
    key: "_focus",
    value: function _focus() {
      _get(_getPrototypeOf(Keyboard.prototype), "_focus", this).call(this);
      this.fireAncestors('$keyboardFocused', true);
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._currentKeyboard || this;
    }
  }, {
    key: "_update",
    value: function _update() {
      if (!this._currentFormat || this._shouldUpdateKeyboards) {
        this._currentFormat = this.defaultFormat;
      }
      if (this.centerKeyboard) {
        this.x = this.centeredXPos;
      } else if (this.x === this.centeredXPos && !this.centerKeyboard) {
        // if the keyboard was centered before but now should not be
        this.x = 0;
      } else {
        this.x == null && (this.x = 0); // if x is undefined or null set it to 0, otherwise do not overwrite x pos
      }
      this._shouldUpdateKeyboards && this._createKeyboardsFromFormats();
      this._formatKeys();
    }
  }, {
    key: "_createKeyboardsFromFormats",
    value: function _createKeyboardsFromFormats() {
      var _this = this;
      this.childList.clear(); // if new formats patched in, remove keyboards created from the previous formats
      Object.keys(this.formats).forEach(function (key) {
        var format = _this.formats[key];
        if (format) {
          var keyboardData = _this._formatKeyboardData(format);
          _this._createKeyboard(key, _this._createRows(keyboardData, key));
        }
      });
      this._formatsChanged = false;
    }
  }, {
    key: "_createKeyboard",
    value: function _createKeyboard(key) {
      var rows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      key = capitalize(key);
      if (rows.length === 1) {
        this.patch(_defineProperty({}, key, rows[0]));
      } else {
        this.patch(_defineProperty({}, key, {
          type: _Column__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
          plinko: true,
          items: rows,
          style: {
            itemSpacing: this.style.keySpacing
          },
          autoResizeWidth: true,
          autoResizeHeight: true,
          neverScroll: true,
          alpha: key === capitalize(this._currentFormat) ? 1 : 0.001
        }));
      }
    }
  }, {
    key: "_createRows",
    value: function _createRows() {
      var _this2 = this;
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keyboard = arguments.length > 1 ? arguments[1] : undefined;
      return rows.map(function (keys) {
        var _this2$_currentKeyboa;
        return {
          type: _Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
          autoResizeHeight: true,
          autoResizeWidth: true,
          centerInParent: _this2.centerKeys,
          neverScroll: true,
          wrapSelected: _this2.rowWrap !== undefined ? _this2.rowWrap : true,
          style: {
            itemSpacing: _this2.style.keySpacing
          },
          items: _this2._createKeys(keys, keyboard),
          selectedIndex: ((_this2$_currentKeyboa = _this2._currentKeyboard) === null || _this2$_currentKeyboa === void 0 || (_this2$_currentKeyboa = _this2$_currentKeyboa.selected) === null || _this2$_currentKeyboa === void 0 ? void 0 : _this2$_currentKeyboa.selectedIndex) || 0
        };
      });
    }
  }, {
    key: "_createKeys",
    value: function _createKeys() {
      var _this3 = this;
      var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keyboard = arguments.length > 1 ? arguments[1] : undefined;
      return keys.map(function (keyProps) {
        if (!keyProps) {
          return {
            type: _this3.keyComponent || _Key__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
            // allows use of a custom Key component if specified
            keySpacing: _this3.style.keySpacing,
            skipFocus: true,
            alpha: 0.01
          };
        }
        var key = {
          type: _this3.keyComponent || _Key__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
          // allows use of a custom Key component if specified
          keySpacing: _this3.style.keySpacing
        };
        if (_typeof(keyProps) === 'object') {
          var _this3$style$keyProps, _this3$style$keyProps2;
          // keyId is used to account for style overrides on individual keys,
          // icon updates, and localization
          var keyName = keyProps.keyId || keyProps.title;
          var keyOverrides = ((_this3$style$keyProps = _this3.style.keyProps) === null || _this3$style$keyProps === void 0 || (_this3$style$keyProps = _this3$style$keyProps[keyboard]) === null || _this3$style$keyProps === void 0 ? void 0 : _this3$style$keyProps[keyName]) || ((_this3$style$keyProps2 = _this3.style.keyProps) === null || _this3$style$keyProps2 === void 0 ? void 0 : _this3$style$keyProps2[keyName]) || {};
          var keyPatch = _objectSpread(_objectSpread(_objectSpread({}, key), keyProps), keyOverrides);
          if (keyOverrides !== null && keyOverrides !== void 0 && keyOverrides.icon) {
            keyPatch.style = _objectSpread(_objectSpread({}, keyOverrides.style), {}, {
              iconStyle: _objectSpread({}, keyOverrides.iconStyle)
            });
          }
          return keyPatch;
        }
        return _objectSpread(_objectSpread({}, key), {}, {
          title: keyProps
        });
      });
    }
  }, {
    key: "_formatKeyboardData",
    value: function _formatKeyboardData() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (Array.isArray(data) && data.length) {
        if (!Array.isArray(data[0]) && !this.inline) {
          var keyRows = [];
          var idx, counter;
          for (idx = 0, counter = -1; idx < data.length; idx++) {
            if (idx % this.columnCount === 0) {
              counter++;
              keyRows[counter] = [];
            }
            keyRows[counter].push(data[idx]);
          }
          return keyRows; // TODO: Swap to a reduce
        } else if (this.inline) {
          return [data];
        }
        return data;
      }
    }
  }, {
    key: "_formatKeys",
    value: function _formatKeys() {
      var _this4 = this;
      Object.keys(this.formats).forEach(function (format) {
        var element = _this4.tag(capitalize(format));
        if (element) {
          element.patch({
            alpha: format === _this4._currentFormat ? 1 : 0.001,
            style: {
              itemSpacing: _this4.style.keySpacing
            }
          });
          element.items.forEach(function (row) {
            row.patch({
              style: {
                itemSpacing: _this4.style.keySpacing
              },
              centerInParent: _this4.centerKeys,
              wrapSelected: _this4.rowWrap !== undefined ? _this4.rowWrap : true
            });
          });
          // force Column to recalculate rows from the centerKeyboard toggle
          element.queueRequestUpdate();
        }
      });
    }
  }, {
    key: "$toggleKeyboard",
    value: function $toggleKeyboard(next) {
      var nextKeyboard = capitalize(next);
      if (next !== this._currentFormat) {
        var nextKeyboardTag = this.tag(nextKeyboard);
        this.selectKeyOn(nextKeyboardTag);
        this._currentKeyboard.alpha = 0.001;
        nextKeyboardTag.alpha = 1;
        this._currentFormat = next;
      }
    }
  }, {
    key: "selectKeyOn",
    value: function selectKeyOn(keyboard) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSelectedKey(),
        row = _ref.row,
        column = _ref.column;
      if (keyboard && keyboard.constructor) {
        var type = keyboard.constructor.name;
        if (type === 'Row') {
          keyboard.selectedIndex = column;
        } else {
          keyboard.selectedIndex = row;
          keyboard.selected.selectedIndex = column;
        }
      }
    }
  }, {
    key: "getSelectedKey",
    value: function getSelectedKey() {
      var row, column;
      var keyboard = this._currentKeyboard;
      var type = keyboard.constructor.name;
      if (type === 'Row') {
        row = 0;
        column = keyboard.selectedIndex;
      } else {
        row = keyboard.selectedIndex;
        column = keyboard.selected.selectedIndex;
      }
      return {
        row: row,
        column: column
      };
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.w = this._currentKeyboard.w;
      this.fireAncestors('$itemChanged');
      this.signal('keyboardWidthChanged');
    }
  }, {
    key: "_setFormats",
    value: function _setFormats() {
      var formats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this._formatsChanged = true;
      return formats;
    }
  }, {
    key: "centeredXPos",
    get: function get() {
      return (this.style.screenW - this.w) / 2 - this.style.marginX;
    }
  }, {
    key: "_shouldUpdateKeyboards",
    get: function get() {
      return this.shouldUpdateTheme || this._formatsChanged;
    }
  }, {
    key: "defaultFormat",
    get: function get() {
      return this._defaultFormat || Object.keys(this.formats)[0];
    },
    set: function set(format) {
      this._defaultFormat = format;
    }
  }, {
    key: "_currentKeyboard",
    get: function get() {
      return this._currentFormat ? this.tag(capitalize(this._currentFormat)) : null;
    }
  }, {
    key: "columnCount",
    get: function get() {
      if (this._columnCount) return this._columnCount;
      if (this.rowCount) return this.formats[this.defaultFormat.toLowerCase()].length / this.rowCount;
      if (this.inline) return this.formats[this.defaultFormat.toLowerCase()].length;else return 11; // TODO: Remove this hard-coded number?
    },
    set: function set(columnCount) {
      this._columnCount = columnCount;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      return 'Keyboard' + (this.title ? ", ".concat(this.title) : '');
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Keyboard.prototype), "announce", announce, this, true);
    }
  }, {
    key: "announceContext",
    get: function get() {
      return this._announceContext || ['PAUSE-2', 'Use arrow keys to choose characters, press center to select'];
    },
    set: function set(announceContext) {
      _set(_getPrototypeOf(Keyboard.prototype), "announceContext", announceContext, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Keyboard';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _Keyboard_styles__WEBPACK_IMPORTED_MODULE_4__;
    }
  }, {
    key: "properties",
    get: function get() {
      return ['formats', 'centerKeyboard', 'rowWrap', 'centerKeys', 'keyComponent'];
    }
  }]);
  return Keyboard;
}(_Base__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   base: () => (/* binding */ base)
/* harmony export */ });
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
    keySpacing: theme.spacer.md,
    screenW: theme.layout.screenW,
    marginX: theme.layout.marginX,
    inputSpacing: theme.spacer.md * 10 + theme.spacer.md,
    inputStyle: {
      radius: theme.radius.md
    }
  };
};

/***/ }),

/***/ "../../../node_modules/react/cjs/react.production.min.js":
/***/ ((__unused_webpack_module, exports) => {

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;
exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
exports.useTransition=function(){return U.current.useTransition()};exports.version="18.2.0";


/***/ }),

/***/ "../../../node_modules/react/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__("../../../node_modules/react/cjs/react.production.min.js");
} else {}


/***/ })

}]);
//# sourceMappingURL=components-Keyboard-Keyboard-stories.be494d7e.iframe.bundle.js.map