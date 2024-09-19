"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8892],{

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
}(Keyboard/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js
var Keyboard_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardFullscreen.stories.js
function KeyboardFullscreen_stories_typeof(o) {
  "@babel/helpers - typeof";

  return KeyboardFullscreen_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, KeyboardFullscreen_stories_typeof(o);
}
function KeyboardFullscreen_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function KeyboardFullscreen_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, KeyboardFullscreen_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function KeyboardFullscreen_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) KeyboardFullscreen_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) KeyboardFullscreen_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function KeyboardFullscreen_stories_toPropertyKey(t) {
  var i = KeyboardFullscreen_stories_toPrimitive(t, "string");
  return "symbol" == KeyboardFullscreen_stories_typeof(i) ? i : String(i);
}
function KeyboardFullscreen_stories_toPrimitive(t, r) {
  if ("object" != KeyboardFullscreen_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != KeyboardFullscreen_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function KeyboardFullscreen_stories_inherits(subClass, superClass) {
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
  if (superClass) KeyboardFullscreen_stories_setPrototypeOf(subClass, superClass);
}
function KeyboardFullscreen_stories_setPrototypeOf(o, p) {
  KeyboardFullscreen_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return KeyboardFullscreen_stories_setPrototypeOf(o, p);
}
function KeyboardFullscreen_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = KeyboardFullscreen_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = KeyboardFullscreen_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = KeyboardFullscreen_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return KeyboardFullscreen_stories_possibleConstructorReturn(this, result);
  };
}
function KeyboardFullscreen_stories_possibleConstructorReturn(self, call) {
  if (call && (KeyboardFullscreen_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return KeyboardFullscreen_stories_assertThisInitialized(self);
}
function KeyboardFullscreen_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function KeyboardFullscreen_stories_isNativeReflectConstruct() {
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
function KeyboardFullscreen_stories_getPrototypeOf(o) {
  KeyboardFullscreen_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return KeyboardFullscreen_stories_getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport { default as KeyboardFullscreenComponent } from './KeyboardFullscreen';\nimport { Keyboard } from './Keyboard.stories';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardFullscreen'\n};\n\nexport const KeyboardFullscreen = () =>\n  class KeyboardFullscreen extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardFullscreenComponent,\n          defaultFormat: 'letters'\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n\n    _init() {\n      this.tag('Keyboard')._whenEnabled.then(() => {\n        this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\n          row: 1,\n          column: 0\n        });\n      });\n    }\n  };\n\nKeyboardFullscreen.storyName = 'KeyboardFullscreen';\n\nKeyboardFullscreen.args = {\n  centerKeyboard: false,\n  mode: 'focused'\n};\n\nKeyboardFullscreen.argTypes = Keyboard.sharedArgTypes;\nKeyboardFullscreen.parameters = {};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "KeyboardFullscreen": {
    "startLoc": {
      "col": 34,
      "line": 29
    },
    "endLoc": {
      "col": 3,
      "line": 49
    },
    "startBody": {
      "col": 34,
      "line": 29
    },
    "endBody": {
      "col": 3,
      "line": 49
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport { default as KeyboardFullscreenComponent } from './KeyboardFullscreen';\nimport { Keyboard } from './Keyboard.stories';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardFullscreen'\n};\n\nexport const KeyboardFullscreen = () =>\n  class KeyboardFullscreen extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardFullscreenComponent,\n          defaultFormat: 'letters'\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n\n    _init() {\n      this.tag('Keyboard')._whenEnabled.then(() => {\n        this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\n          row: 1,\n          column: 0\n        });\n      });\n    }\n  };\n\nKeyboardFullscreen.storyName = 'KeyboardFullscreen';\n\nKeyboardFullscreen.args = {\n  centerKeyboard: false,\n  mode: 'focused'\n};\n\nKeyboardFullscreen.argTypes = Keyboard.sharedArgTypes;\nKeyboardFullscreen.parameters = {};\n",
      "locationsMap": {
        "keyboard-fullscreen": {
          "startLoc": {
            "col": 34,
            "line": 29
          },
          "endLoc": {
            "col": 3,
            "line": 49
          },
          "startBody": {
            "col": 34,
            "line": 29
          },
          "endBody": {
            "col": 3,
            "line": 49
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
          w: utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(context/* default */.A.theme, 1)
        };
      }
    }]);
    return KeyboardFullscreen;
  }(lightning_esm/* default */.A.Component);
};
KeyboardFullscreen.storyName = 'KeyboardFullscreen';
KeyboardFullscreen.args = {
  centerKeyboard: false,
  mode: 'focused'
};
KeyboardFullscreen.argTypes = Keyboard_stories.Keyboard.sharedArgTypes;
KeyboardFullscreen.parameters = {};
KeyboardFullscreen.parameters = {
  ...KeyboardFullscreen.parameters,
  docs: {
    ...KeyboardFullscreen.parameters?.docs,
    source: {
      originalSource: "() => class KeyboardFullscreen extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardFullscreenComponent,\n        defaultFormat: 'letters'\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n  _init() {\n    this.tag('Keyboard')._whenEnabled.then(() => {\n      this.tag('Keyboard').selectKeyOn(this.tag('Keyboard').tag('Letters'), {\n        row: 1,\n        column: 0\n      });\n    });\n  }\n}",
      ...KeyboardFullscreen.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["KeyboardFullscreen"];

/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardFullscreen-stories.e68900ce.iframe.bundle.js.map