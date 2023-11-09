"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[915],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  KeyboardFullscreen: () => (/* binding */ KeyboardFullscreen),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ KeyboardFullscreen_stories)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js
var Keyboard = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js
var Keyboard_styles = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



var KeyboardFullScreen = /*#__PURE__*/function (_Keyboard) {
  _inherits(KeyboardFullScreen, _Keyboard);
  var _super = _createSuper(KeyboardFullScreen);
  function KeyboardFullScreen() {
    _classCallCheck(this, KeyboardFullScreen);
    return _super.apply(this, arguments);
  }
  _createClass(KeyboardFullScreen, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(KeyboardFullScreen.prototype), "_construct", this).call(this);
      this.formats = this.fullscreenFormat;
    }
  }, {
    key: "fullscreenFormat",
    get: function get() {
      return {
        letters: [['', '', '', '', '', '', '', '', '', {
          title: '#@!',
          size: 'lg',
          toggle: 'symbols',
          announce: 'symbol mode, button',
          keyId: 'symbols'
        }, {
          title: 'Space',
          size: 'lg',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }, '', '', '', '', '', '', '', '', ''], ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']],
        symbols: [['', '', '', '', '', '', '', '', '', {
          title: 'ABC',
          size: 'lg',
          toggle: 'letters',
          announce: 'caps on, button'
        }, {
          title: 'Space',
          size: 'lg',
          keyId: 'space',
          announce: 'space, button'
        }, {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }, '', '', '', '', '', '', '', '', ''], ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', {
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
          title: '`',
          announce: 'grave accent, button'
        }, '~', '_', '.', '-', '+']]
      };
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardFullScreen';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Keyboard_styles;
    }
  }]);
  return KeyboardFullScreen;
}(Keyboard/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js
var Keyboard_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.stories.js
function KeyboardFullscreen_stories_typeof(o) { "@babel/helpers - typeof"; return KeyboardFullscreen_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, KeyboardFullscreen_stories_typeof(o); }
var _KeyboardFullscreen$p, _KeyboardFullscreen$p2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = KeyboardFullscreen_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function KeyboardFullscreen_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function KeyboardFullscreen_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, KeyboardFullscreen_stories_toPropertyKey(descriptor.key), descriptor); } }
function KeyboardFullscreen_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) KeyboardFullscreen_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) KeyboardFullscreen_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function KeyboardFullscreen_stories_toPropertyKey(arg) { var key = KeyboardFullscreen_stories_toPrimitive(arg, "string"); return KeyboardFullscreen_stories_typeof(key) === "symbol" ? key : String(key); }
function KeyboardFullscreen_stories_toPrimitive(input, hint) { if (KeyboardFullscreen_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (KeyboardFullscreen_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function KeyboardFullscreen_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) KeyboardFullscreen_stories_setPrototypeOf(subClass, superClass); }
function KeyboardFullscreen_stories_setPrototypeOf(o, p) { KeyboardFullscreen_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return KeyboardFullscreen_stories_setPrototypeOf(o, p); }
function KeyboardFullscreen_stories_createSuper(Derived) { var hasNativeReflectConstruct = KeyboardFullscreen_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = KeyboardFullscreen_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = KeyboardFullscreen_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return KeyboardFullscreen_stories_possibleConstructorReturn(this, result); }; }
function KeyboardFullscreen_stories_possibleConstructorReturn(self, call) { if (call && (KeyboardFullscreen_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return KeyboardFullscreen_stories_assertThisInitialized(self); }
function KeyboardFullscreen_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function KeyboardFullscreen_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function KeyboardFullscreen_stories_getPrototypeOf(o) { KeyboardFullscreen_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return KeyboardFullscreen_stories_getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { context } from '../../globals';\nimport utils from '../../utils';\nimport { default as KeyboardFullscreenComponent } from './KeyboardFullscreen';\nimport { Keyboard } from './Keyboard.stories';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardFullscreen'\n};\n\nexport const KeyboardFullscreen = () =>\n  class KeyboardFullscreen extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardFullscreenComponent,\n          defaultFormat: 'letters'\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n\n    _init() {\n      this.tag('Keyboard')._whenEnabled.then(() => {\n        this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\n          row: 1,\n          column: 0\n        });\n      });\n    }\n  };\n\nKeyboardFullscreen.storyName = 'KeyboardFullscreen';\nKeyboardFullscreen.args = {\n  centerKeyboard: false,\n  centerKeys: false,\n  mode: 'focused'\n};\nKeyboardFullscreen.parameters = {};\nKeyboardFullscreen.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  centerKeys: {\n    description: \"Center the keys within it's set width of keyboard\",\n    control: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "KeyboardFullscreen": {
    "startLoc": {
      "col": 34,
      "line": 27
    },
    "endLoc": {
      "col": 1,
      "line": 45
    },
    "startBody": {
      "col": 34,
      "line": 27
    },
    "endBody": {
      "col": 1,
      "line": 45
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






/* harmony default export */ const KeyboardFullscreen_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { context } from '../../globals';\nimport utils from '../../utils';\nimport { default as KeyboardFullscreenComponent } from './KeyboardFullscreen';\nimport { Keyboard } from './Keyboard.stories';\nexport default {\n  title: 'Components/Keyboard/KeyboardFullscreen'\n};\nexport const KeyboardFullscreen = () => class KeyboardFullscreen extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardFullscreenComponent,\n        defaultFormat: 'letters'\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n  _init() {\n    this.tag('Keyboard')._whenEnabled.then(() => {\n      this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\n        row: 1,\n        column: 0\n      });\n    });\n  }\n};\nKeyboardFullscreen.storyName = 'KeyboardFullscreen';\nKeyboardFullscreen.args = {\n  centerKeyboard: false,\n  centerKeys: false,\n  mode: 'focused'\n};\nKeyboardFullscreen.parameters = {};\nKeyboardFullscreen.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  centerKeys: {\n    description: \"Center the keys within it's set width of keyboard\",\n    control: 'boolean',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nKeyboardFullscreen.parameters = {\n  ...KeyboardFullscreen.parameters,\n  docs: {\n    ...KeyboardFullscreen.parameters?.docs,\n    source: {\n      originalSource: \"() => class KeyboardFullscreen extends lng.Component {\\n  static _template() {\\n    return {\\n      Keyboard: {\\n        type: KeyboardFullscreenComponent,\\n        defaultFormat: 'letters'\\n      },\\n      w: utils.getWidthByUpCount(context.theme, 1)\\n    };\\n  }\\n  _init() {\\n    this.tag('Keyboard')._whenEnabled.then(() => {\\n      this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\\n        row: 1,\\n        column: 0\\n      });\\n    });\\n  }\\n}\",\n      ...KeyboardFullscreen.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "keyboard-fullscreen": {
          "startLoc": {
            "col": 34,
            "line": 27
          },
          "endLoc": {
            "col": 1,
            "line": 45
          },
          "startBody": {
            "col": 34,
            "line": 27
          },
          "endBody": {
            "col": 1,
            "line": 45
          }
        }
      }
    }
  },
  title: 'Components/Keyboard/KeyboardFullscreen'
});
var KeyboardFullscreen = function KeyboardFullscreen() {
  return /*#__PURE__*/function (_lng$Component) {
    KeyboardFullscreen_stories_inherits(KeyboardFullscreen, _lng$Component);
    var _super = KeyboardFullscreen_stories_createSuper(KeyboardFullscreen);
    function KeyboardFullscreen() {
      KeyboardFullscreen_stories_classCallCheck(this, KeyboardFullscreen);
      return _super.apply(this, arguments);
    }
    KeyboardFullscreen_stories_createClass(KeyboardFullscreen, [{
      key: "_init",
      value: function _init() {
        var _this = this;
        this.tag('Keyboard')._whenEnabled.then(function () {
          _this.tag('Keyboard').selectKeyOn(_this.tag('Keyboard').tag('Letters'), {
            row: 1,
            column: 0
          });
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Keyboard: {
            type: KeyboardFullScreen,
            defaultFormat: 'letters'
          },
          w: utils/* default.getWidthByUpCount */.ZP.getWidthByUpCount(context/* default */.Z.theme, 1)
        };
      }
    }]);
    return KeyboardFullscreen;
  }(lightning_esm/* default */.Z.Component);
};
KeyboardFullscreen.storyName = 'KeyboardFullscreen';
KeyboardFullscreen.args = {
  centerKeyboard: false,
  centerKeys: false,
  mode: 'focused'
};
KeyboardFullscreen.parameters = {};
KeyboardFullscreen.argTypes = _objectSpread(_objectSpread({}, Keyboard_stories.Keyboard.sharedArgTypes), {}, {
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
KeyboardFullscreen.parameters = _objectSpread(_objectSpread({}, KeyboardFullscreen.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_KeyboardFullscreen$p = KeyboardFullscreen.parameters) === null || _KeyboardFullscreen$p === void 0 ? void 0 : _KeyboardFullscreen$p.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class KeyboardFullscreen extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardFullscreenComponent,\n        defaultFormat: 'letters'\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n  _init() {\n    this.tag('Keyboard')._whenEnabled.then(() => {\n      this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\n        row: 1,\n        column: 0\n      });\n    });\n  }\n}"
    }, (_KeyboardFullscreen$p2 = KeyboardFullscreen.parameters) === null || _KeyboardFullscreen$p2 === void 0 || (_KeyboardFullscreen$p2 = _KeyboardFullscreen$p2.docs) === null || _KeyboardFullscreen$p2 === void 0 ? void 0 : _KeyboardFullscreen$p2.source)
  })
});
var __namedExportsOrder = ["KeyboardFullscreen"];

/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardFullscreen-stories.39019f90.iframe.bundle.js.map