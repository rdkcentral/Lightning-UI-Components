"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8408],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardNumbers.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  KeyboardNumbers: () => (/* binding */ KeyboardNumbers),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ KeyboardNumbers_stories)
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
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardNumbers.js
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



var KeyboardNumbers_KeyboardNumbers = /*#__PURE__*/function (_Keyboard) {
  _inherits(KeyboardNumbers, _Keyboard);
  var _super = _createSuper(KeyboardNumbers);
  function KeyboardNumbers() {
    _classCallCheck(this, KeyboardNumbers);
    return _super.apply(this, arguments);
  }
  _createClass(KeyboardNumbers, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(KeyboardNumbers.prototype), "_construct", this).call(this);
      this.formats = this.numbersFormat;
    }
  }, {
    key: "numbersFormat",
    get: function get() {
      return {
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        dialpad: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0']],
        dialpadExtended: [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['0', {
          title: 'Delete',
          size: 'md',
          keyId: 'delete',
          announce: 'delete, button'
        }]]
      };
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardNumbers';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Keyboard_styles;
    }
  }]);
  return KeyboardNumbers;
}(Keyboard/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js
var Keyboard_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardNumbers.stories.js
function KeyboardNumbers_stories_typeof(o) {
  "@babel/helpers - typeof";

  return KeyboardNumbers_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, KeyboardNumbers_stories_typeof(o);
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
  key = KeyboardNumbers_stories_toPropertyKey(key);
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
function KeyboardNumbers_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function KeyboardNumbers_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, KeyboardNumbers_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function KeyboardNumbers_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) KeyboardNumbers_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) KeyboardNumbers_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function KeyboardNumbers_stories_toPropertyKey(t) {
  var i = KeyboardNumbers_stories_toPrimitive(t, "string");
  return "symbol" == KeyboardNumbers_stories_typeof(i) ? i : String(i);
}
function KeyboardNumbers_stories_toPrimitive(t, r) {
  if ("object" != KeyboardNumbers_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != KeyboardNumbers_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function KeyboardNumbers_stories_inherits(subClass, superClass) {
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
  if (superClass) KeyboardNumbers_stories_setPrototypeOf(subClass, superClass);
}
function KeyboardNumbers_stories_setPrototypeOf(o, p) {
  KeyboardNumbers_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return KeyboardNumbers_stories_setPrototypeOf(o, p);
}
function KeyboardNumbers_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = KeyboardNumbers_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = KeyboardNumbers_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = KeyboardNumbers_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return KeyboardNumbers_stories_possibleConstructorReturn(this, result);
  };
}
function KeyboardNumbers_stories_possibleConstructorReturn(self, call) {
  if (call && (KeyboardNumbers_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return KeyboardNumbers_stories_assertThisInitialized(self);
}
function KeyboardNumbers_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function KeyboardNumbers_stories_isNativeReflectConstruct() {
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
function KeyboardNumbers_stories_getPrototypeOf(o) {
  KeyboardNumbers_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return KeyboardNumbers_stories_getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport { default as KeyboardNumbersComponent } from './KeyboardNumbers';\nimport { Keyboard } from './Keyboard.stories';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardNumbers'\n};\n\nexport const KeyboardNumbers = () =>\n  class KeyboardNumbers extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardNumbersComponent,\n          defaultFormat: 'dialpad'\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\n\nKeyboardNumbers.storyName = 'KeyboardNumbers';\n\nKeyboardNumbers.args = {\n  centerKeyboard: false,\n  centerKeys: false,\n  defaultFormat: 'dialpad',\n  mode: 'focused'\n};\n\nKeyboardNumbers.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  centerKeys: {\n    description: \"Center the keys within it's set width of keyboard\",\n    control: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  defaultFormat: {\n    description: 'Select the format of dialpad',\n    control: 'radio',\n    options: ['dialpad', 'dialpadExtended'],\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nKeyboardNumbers.parameters = {\n  argActions: {\n    defaultFormat: (format, component) => {\n      component.tag('Keyboard').$toggleKeyboard(format);\n      component._refocus();\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "KeyboardNumbers": {
    "startLoc": {
      "col": 31,
      "line": 29
    },
    "endLoc": {
      "col": 3,
      "line": 40
    },
    "startBody": {
      "col": 31,
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






/* harmony default export */ const KeyboardNumbers_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport { default as KeyboardNumbersComponent } from './KeyboardNumbers';\nimport { Keyboard } from './Keyboard.stories';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardNumbers'\n};\n\nexport const KeyboardNumbers = () =>\n  class KeyboardNumbers extends lng.Component {\n    static _template() {\n      return {\n        Keyboard: {\n          type: KeyboardNumbersComponent,\n          defaultFormat: 'dialpad'\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\n\nKeyboardNumbers.storyName = 'KeyboardNumbers';\n\nKeyboardNumbers.args = {\n  centerKeyboard: false,\n  centerKeys: false,\n  defaultFormat: 'dialpad',\n  mode: 'focused'\n};\n\nKeyboardNumbers.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  centerKeys: {\n    description: \"Center the keys within it's set width of keyboard\",\n    control: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  defaultFormat: {\n    description: 'Select the format of dialpad',\n    control: 'radio',\n    options: ['dialpad', 'dialpadExtended'],\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nKeyboardNumbers.parameters = {\n  argActions: {\n    defaultFormat: (format, component) => {\n      component.tag('Keyboard').$toggleKeyboard(format);\n      component._refocus();\n    }\n  }\n};\n",
      "locationsMap": {
        "keyboard-numbers": {
          "startLoc": {
            "col": 31,
            "line": 29
          },
          "endLoc": {
            "col": 3,
            "line": 40
          },
          "startBody": {
            "col": 31,
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
  title: 'Components/Keyboard/KeyboardNumbers'
});
var KeyboardNumbers = function KeyboardNumbers() {
  return /*#__PURE__*/function (_lng$Component) {
    KeyboardNumbers_stories_inherits(KeyboardNumbers, _lng$Component);
    var _super = KeyboardNumbers_stories_createSuper(KeyboardNumbers);
    function KeyboardNumbers() {
      KeyboardNumbers_stories_classCallCheck(this, KeyboardNumbers);
      return _super.apply(this, arguments);
    }
    KeyboardNumbers_stories_createClass(KeyboardNumbers, null, [{
      key: "_template",
      value: function _template() {
        return {
          Keyboard: {
            type: KeyboardNumbers_KeyboardNumbers,
            defaultFormat: 'dialpad'
          },
          w: utils/* default.getWidthByUpCount */.ZP.getWidthByUpCount(context/* default */.Z.theme, 1)
        };
      }
    }]);
    return KeyboardNumbers;
  }(lightning_esm/* default */.Z.Component);
};
KeyboardNumbers.storyName = 'KeyboardNumbers';
KeyboardNumbers.args = {
  centerKeyboard: false,
  centerKeys: false,
  defaultFormat: 'dialpad',
  mode: 'focused'
};
KeyboardNumbers.argTypes = _objectSpread(_objectSpread({}, Keyboard_stories.Keyboard.sharedArgTypes), {}, {
  centerKeys: {
    description: "Center the keys within it's set width of keyboard",
    control: 'boolean',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  defaultFormat: {
    description: 'Select the format of dialpad',
    control: 'radio',
    options: ['dialpad', 'dialpadExtended'],
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
});
KeyboardNumbers.parameters = {
  argActions: {
    defaultFormat: function defaultFormat(format, component) {
      component.tag('Keyboard').$toggleKeyboard(format);
      component._refocus();
    }
  }
};
KeyboardNumbers.parameters = {
  ...KeyboardNumbers.parameters,
  docs: {
    ...KeyboardNumbers.parameters?.docs,
    source: {
      originalSource: "() => class KeyboardNumbers extends lng.Component {\n  static _template() {\n    return {\n      Keyboard: {\n        type: KeyboardNumbersComponent,\n        defaultFormat: 'dialpad'\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...KeyboardNumbers.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["KeyboardNumbers"];

/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardNumbers-stories.5abec040.iframe.bundle.js.map