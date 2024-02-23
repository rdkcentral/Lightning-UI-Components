"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9641],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyboardEmail: () => (/* binding */ KeyboardEmail),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _KeyboardEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js");
/* harmony import */ var _Keyboard_stories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { context } from '../../globals';\nimport utils from '../../utils';\nimport { default as KeyboardEmailComponent } from './KeyboardEmail';\nimport { Keyboard } from './Keyboard.stories';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardEmail'\n};\n\nexport const KeyboardEmail = () =>\n  class KeyboardEmail extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardEmailComponent,\n          defaultFormat: 'lowercase'\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\nKeyboardEmail.args = {\n  centerKeyboard: false,\n  mode: 'focused'\n};\nKeyboardEmail.storyName = 'KeyboardEmail';\nKeyboardEmail.argTypes = Keyboard.sharedArgTypes;\nKeyboardEmail.parameters = {};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "KeyboardEmail": {
    "startLoc": {
      "col": 29,
      "line": 29
    },
    "endLoc": {
      "col": 3,
      "line": 40
    },
    "startBody": {
      "col": 29,
      "line": 29
    },
    "endBody": {
      "col": 3,
      "line": 40
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { context } from '../../globals';\nimport utils from '../../utils';\nimport { default as KeyboardEmailComponent } from './KeyboardEmail';\nimport { Keyboard } from './Keyboard.stories';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardEmail'\n};\n\nexport const KeyboardEmail = () =>\n  class KeyboardEmail extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardEmailComponent,\n          defaultFormat: 'lowercase'\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\nKeyboardEmail.args = {\n  centerKeyboard: false,\n  mode: 'focused'\n};\nKeyboardEmail.storyName = 'KeyboardEmail';\nKeyboardEmail.argTypes = Keyboard.sharedArgTypes;\nKeyboardEmail.parameters = {};\n",
      "locationsMap": {
        "keyboard-email": {
          "startLoc": {
            "col": 29,
            "line": 29
          },
          "endLoc": {
            "col": 3,
            "line": 40
          },
          "startBody": {
            "col": 29,
            "line": 29
          },
          "endBody": {
            "col": 3,
            "line": 40
          }
        }
      }
    }
  },
  title: 'Components/Keyboard/KeyboardEmail'
});
var KeyboardEmail = function KeyboardEmail() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(KeyboardEmail, _lng$Component);
    var _super = _createSuper(KeyboardEmail);
    function KeyboardEmail() {
      _classCallCheck(this, KeyboardEmail);
      return _super.apply(this, arguments);
    }
    _createClass(KeyboardEmail, null, [{
      key: "_template",
      value: function _template() {
        return {
          Keyboard: {
            type: _KeyboardEmail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            defaultFormat: 'lowercase'
          },
          w: _utils__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getWidthByUpCount */ .ZP.getWidthByUpCount(_globals__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.theme, 1)
        };
      }
    }]);
    return KeyboardEmail;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
KeyboardEmail.args = {
  centerKeyboard: false,
  mode: 'focused'
};
KeyboardEmail.storyName = 'KeyboardEmail';
KeyboardEmail.argTypes = _Keyboard_stories__WEBPACK_IMPORTED_MODULE_4__.Keyboard.sharedArgTypes;
KeyboardEmail.parameters = {};
KeyboardEmail.parameters = {
  ...KeyboardEmail.parameters,
  docs: {
    ...KeyboardEmail.parameters?.docs,
    source: {
      originalSource: "() => class KeyboardEmail extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardEmailComponent,\n        defaultFormat: 'lowercase'\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...KeyboardEmail.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["KeyboardEmail"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ KeyboardEmail)
/* harmony export */ });
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
/* harmony import */ var _Keyboard_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
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



var KeyboardEmail = /*#__PURE__*/function (_Keyboard) {
  _inherits(KeyboardEmail, _Keyboard);
  var _super = _createSuper(KeyboardEmail);
  function KeyboardEmail() {
    _classCallCheck(this, KeyboardEmail);
    return _super.apply(this, arguments);
  }
  _createClass(KeyboardEmail, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(KeyboardEmail.prototype), "_construct", this).call(this);
      this.formats = this.emailFormat;
    }
  }, {
    key: "emailFormat",
    get: function get() {
      return {
        uppercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '@', {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], ['Z', 'X', 'C', 'V', 'B', 'N', 'M', {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: 'shift',
          size: 'md',
          toggle: 'lowercase',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
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
        }]],
        lowercase: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '@', {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], ['z', 'x', 'c', 'v', 'b', 'n', 'm', {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: 'shift',
          size: 'md',
          toggle: 'uppercase',
          announce: 'shift on, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
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
        }]],
        accents: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['ä', 'ë', 'ï', 'ö', 'ü', 'ÿ', 'à', 'è', 'ì', 'ò', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['ù', 'á', 'é', 'í', 'ó', 'ú', 'ý', 'â', 'ê', '@', {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], ['î', 'ô', 'û', 'ã', 'ñ', {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: 'shift',
          size: 'xl',
          toggle: 'accentsUpper',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
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
        }]],
        accentsUpper: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], ['Ä', 'Ë', 'Ï', 'Ö', 'Ü', 'Ÿ', 'À', 'È', 'Ì', 'Ò', {
          title: '#@!',
          size: 'md',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }], ['Ù', 'Á', 'É', 'Í', 'Ó', 'Ú', 'Ý', 'Â', 'Ê', '@', {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], ['Î', 'Ô', 'Û', 'Ã', 'Ñ', {
          title: '.',
          announce: 'period, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: 'shift',
          size: 'xl',
          toggle: 'accents',
          announce: 'shift off, button',
          keyId: 'shift'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
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
        }]],
        symbols: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }], [{
          title: '!',
          announce: 'exclamation, button'
        }, '@', '#', '$', '%', {
          title: '^',
          announce: 'caret circumflex, button'
        }, '&', '*', {
          title: '(',
          announce: 'open parenthesis, button'
        }, {
          title: ')',
          announce: 'close parenthesis, button'
        }, {
          title: 'abc',
          size: 'md',
          toggle: 'lowercase',
          announce: 'alpha mode, button'
        }], [{
          title: '{',
          announce: 'open brace, button'
        }, {
          title: '}',
          announce: 'close brace, button'
        }, {
          title: '[',
          announce: 'open bracket, button'
        }, {
          title: ']',
          announce: 'close bracket, button'
        }, {
          title: ';',
          announce: 'semicolon, button'
        }, {
          title: '"',
          announce: 'doublequote, button'
        }, {
          title: ',',
          announce: 'comma, button'
        }, {
          title: '|',
          announce: 'vertical bar, button'
        }, {
          title: '\\',
          announce: 'backslash, button'
        }, {
          title: '/',
          announce: 'forwardslash, button'
        }, {
          title: 'áöû',
          size: 'md',
          toggle: 'accents',
          announce: 'accents, button',
          keyId: 'accents'
        }], [{
          title: '<',
          announce: 'less than, button'
        }, {
          title: '>',
          announce: 'greater than, button'
        }, {
          title: '?',
          announce: 'question mark, button'
        }, {
          title: '=',
          announce: 'equal sign, button'
        }, {
          title: '`',
          announce: 'grave accent, button'
        }, {
          title: '~',
          announce: 'tilde, button'
        }, {
          title: '_',
          announce: 'underscore, button'
        }, {
          title: ':',
          announce: 'colon, button'
        }, {
          title: '-',
          announce: 'dash, button'
        }, {
          title: '+',
          announce: 'plus sign, button'
        }], [{
          title: '.com',
          announce: 'dot, com',
          size: 'md'
        }, {
          title: '.net',
          announce: 'dot, net',
          size: 'md'
        }, {
          title: '.edu',
          announce: 'dot, edu',
          size: 'md'
        }, {
          title: '.org',
          announce: 'dot, org',
          size: 'md'
        }, {
          title: '.co',
          announce: 'dot, co',
          size: 'md'
        }, {
          title: '.uk',
          announce: 'dot, uk',
          size: 'md'
        }], [{
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
      };
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardEmail';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _Keyboard_styles_js__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
  return KeyboardEmail;
}(_Keyboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);


/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardEmail-stories.7bfe6791.iframe.bundle.js.map