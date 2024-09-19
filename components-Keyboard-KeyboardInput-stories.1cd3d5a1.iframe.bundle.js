"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2649],{

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  InputWithEmail: () => (/* binding */ InputWithEmail),
  InputWithQwerty: () => (/* binding */ InputWithQwerty),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ KeyboardInput_stories)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var src_utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js
var Keyboard = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.js + 1 modules
var Input = __webpack_require__("../../@lightningjs/ui-components/src/components/Input/Input.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Column/Column.js + 1 modules
var Column = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js
var Keyboard_styles = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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






var KeyboardInput = /*#__PURE__*/function (_Base) {
  _inherits(KeyboardInput, _Base);
  var _super = _createSuper(KeyboardInput);
  function KeyboardInput() {
    _classCallCheck(this, KeyboardInput);
    return _super.apply(this, arguments);
  }
  _createClass(KeyboardInput, [{
    key: "_update",
    value: function _update() {
      this._Wrapper.style.itemSpacing = this.style.inputSpacing;
      this._updateKeyboardType();
      this._updateInput();
      this._updateKeyboard();
      this._updateCenterKeyboard();
    }
  }, {
    key: "_updateKeyboardType",
    value: function _updateKeyboardType() {
      if (this._Keyboard.constructor !== this.keyboardType) {
        this._Wrapper._resetItems();
        this._Wrapper.items = [{
          type: Input/* default */.A,
          ref: 'Input'
        }, {
          type: this.keyboardType,
          ref: 'Keyboard',
          passSignals: {
            keyboardWidthChanged: true
          }
        }];
      }
    }
  }, {
    key: "_updateInput",
    value: function _updateInput() {
      this._Input.patch(_objectSpread(_objectSpread({}, this.input), {}, {
        centerInParent: this.centerKeyboard,
        w: this._Keyboard.w,
        style: _objectSpread({}, this.style.inputStyle),
        // allows overriding of input styles
        listening: this._isFocusedMode
      }));
    }
  }, {
    key: "_updateKeyboard",
    value: function _updateKeyboard() {
      this._Keyboard.patch({
        defaultFormat: this.defaultFormat || 'lowercase',
        centerKeyboard: this.centerKeyboard
      });
    }

    // updates width of Wrapper and Input to match keyboard width
  }, {
    key: "_updateWidth",
    value: function _updateWidth() {
      this._Input.w = this.w = this._Keyboard.w;
      this.fireAncestors('$itemChanged');
    }
  }, {
    key: "_updateCenterKeyboard",
    value: function _updateCenterKeyboard() {
      if (this.centerKeyboard) {
        this.x = (this.style.screenW - this.w) / 2 - this.style.marginX;
      } else {
        this.x = 0;
      }
    }
  }, {
    key: "$onSoftKey",
    value: function $onSoftKey(_ref) {
      var _ref$key = _ref.key,
        key = _ref$key === void 0 ? '' : _ref$key,
        toggle = _ref.toggle;
      if (toggle) {
        return;
      }
      switch (key.toLowerCase()) {
        case 'delete':
          this._Input.backspace();
          break;
        case 'done':
          break;
        case 'space':
          this._Input.insert(' ');
          break;
        case 'clear':
          this._Input.clear();
          break;
        default:
          this._Input.insert(key);
      }
    }
  }, {
    key: "$keyboardFocused",
    value: function $keyboardFocused(focus) {
      if (focus) {
        this._Input.listening = true;
      } else {
        this._Input.listening = false;
      }
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._Wrapper || this;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'KeyboardInput';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['centerKeyboard', 'defaultFormat', 'input',
      // this should hold all the props passed from Input
      'keyboardType'];
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Keyboard_styles;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Wrapper: {
          type: Column/* default */.A,
          neverScroll: true,
          w: this.w,
          items: [{
            type: Input/* default */.A,
            ref: 'Input'
          }, {
            type: Keyboard/* default */.A,
            ref: 'Keyboard',
            passSignals: {
              keyboardWidthChanged: true
            }
          }],
          selectedIndex: 1,
          signals: {
            keyboardWidthChanged: '_updateWidth'
          }
        }
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Wrapper', {
        name: 'Input',
        path: 'Wrapper.Input'
      }, {
        name: 'Keyboard',
        path: 'Wrapper.Keyboard'
      }];
    }
  }]);
  return KeyboardInput;
}(Base/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.js
var KeyboardQwerty = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js
var KeyboardEmail = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js
var Keyboard_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Input/Input.stories.js
var Input_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Input/Input.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png
var ic_lightning_white_32 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png
var ic_eye_white_48 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eye_white_48.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png
var ic_eyeHide_white_48 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_eyeHide_white_48.png");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Keyboard/KeyboardInput.stories.js
function KeyboardInput_stories_typeof(o) {
  "@babel/helpers - typeof";

  return KeyboardInput_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, KeyboardInput_stories_typeof(o);
}
function KeyboardInput_stories_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function KeyboardInput_stories_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? KeyboardInput_stories_ownKeys(Object(t), !0).forEach(function (r) {
      KeyboardInput_stories_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : KeyboardInput_stories_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function KeyboardInput_stories_defineProperty(obj, key, value) {
  key = KeyboardInput_stories_toPropertyKey(key);
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
function KeyboardInput_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function KeyboardInput_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, KeyboardInput_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function KeyboardInput_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) KeyboardInput_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) KeyboardInput_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function KeyboardInput_stories_toPropertyKey(t) {
  var i = KeyboardInput_stories_toPrimitive(t, "string");
  return "symbol" == KeyboardInput_stories_typeof(i) ? i : String(i);
}
function KeyboardInput_stories_toPrimitive(t, r) {
  if ("object" != KeyboardInput_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != KeyboardInput_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function KeyboardInput_stories_inherits(subClass, superClass) {
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
  if (superClass) KeyboardInput_stories_setPrototypeOf(subClass, superClass);
}
function KeyboardInput_stories_setPrototypeOf(o, p) {
  KeyboardInput_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return KeyboardInput_stories_setPrototypeOf(o, p);
}
function KeyboardInput_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = KeyboardInput_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = KeyboardInput_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = KeyboardInput_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return KeyboardInput_stories_possibleConstructorReturn(this, result);
  };
}
function KeyboardInput_stories_possibleConstructorReturn(self, call) {
  if (call && (KeyboardInput_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return KeyboardInput_stories_assertThisInitialized(self);
}
function KeyboardInput_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function KeyboardInput_stories_isNativeReflectConstruct() {
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
function KeyboardInput_stories_getPrototypeOf(o) {
  KeyboardInput_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return KeyboardInput_stories_getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport Icon from '../Icon';\nimport { default as KeyboardInputComponent } from './KeyboardInput';\nimport { default as KeyboardQwertyComponent } from './KeyboardQwerty';\nimport { default as KeyboardEmailComponent } from './KeyboardEmail';\nimport { Keyboard } from './Keyboard.stories';\nimport { Input as InputStory } from '../Input/Input.stories';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\nimport eye from '../../assets/images/ic_eye_white_48.png';\nimport eyeHide from '../../assets/images/ic_eyeHide_white_48.png';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardInput'\n};\n\nfunction getCommponentArray(comps) {\n  let arr = [];\n  switch (comps) {\n    case 'icon':\n      arr = [{ type: Icon, icon: lightning }];\n      break;\n    case 'eye':\n      arr = [{ type: Icon, icon: eye, w: 30, h: 30 }];\n      break;\n    case 'eyeHide':\n      arr = [{ type: Icon, icon: eyeHide, w: 30, h: 30 }];\n      break;\n  }\n  return arr;\n}\n\n// creates shared arg types for Keyboard Input stories\nconst sharedKeyboardArgTypes = createModeControl({\n  options: ['focused'],\n  summaryValue: 'focused'\n});\n\nexport const InputWithQwerty = () =>\n  class InputWithQwerty extends lng.Component {\n    static _template() {\n      return {\n        InputWithQwerty: {\n          type: KeyboardInputComponent,\n          keyboardType: KeyboardQwertyComponent,\n          input: {\n            eyebrow: 'Search',\n            helpText: 'Main'\n          }\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\nconst sharedInputArgTypes = {\n  prefix: {\n    control: 'radio',\n    options: [null, 'icon'],\n    description: 'Lightning components to be placed to the left of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  suffix: {\n    control: 'radio',\n    options: [null, 'icon', 'eye', 'eyeHide'],\n    description: 'Lightning components to be placed to the right of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nInputWithQwerty.args = {\n  centerKeyboard: false,\n  prefix: null,\n  suffix: null,\n  mode: 'focused'\n};\n\nInputWithQwerty.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  ...sharedKeyboardArgTypes,\n  ...sharedInputArgTypes\n};\n\nInputWithQwerty.parameters = {\n  tag: 'InputWithQwerty'\n};\n\nInputWithQwerty.parameters.argActions = {\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('InputWithQwerty')._Input.prefix = [];\n    } else {\n      component.tag('InputWithQwerty')._Input.prefix =\n        getCommponentArray(prefix);\n    }\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('InputWithQwerty')._Input.suffix = [];\n    } else {\n      component.tag('InputWithQwerty')._Input.suffix =\n        getCommponentArray(suffix);\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'InputWithQwerty',\n  baseStory: InputWithQwerty,\n  subStory: InputStory,\n  targetProperty: 'input',\n  include: ['password', 'mask']\n});\n\nexport const InputWithEmail = () =>\n  class InputWithEmail extends lng.Component {\n    static _template() {\n      return {\n        InputWithEmail: {\n          type: KeyboardInputComponent,\n          keyboardType: KeyboardEmailComponent,\n          input: {\n            eyebrow: 'Email Address',\n            helpText: 'Help Text'\n          }\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\n\nInputWithEmail.args = {\n  centerKeyboard: false,\n  prefix: null,\n  suffix: null,\n  mode: 'focused'\n};\n\nInputWithEmail.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  ...sharedKeyboardArgTypes,\n  ...sharedInputArgTypes\n};\n\nInputWithEmail.parameters = {\n  tag: 'InputWithEmail'\n};\n\nInputWithEmail.parameters.argActions = {\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('InputWithEmail')._Input.prefix = [];\n    } else {\n      component.tag('InputWithEmail')._Input.prefix =\n        getCommponentArray(prefix);\n    }\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('InputWithEmail')._Input.suffix = [];\n    } else {\n      component.tag('InputWithEmail')._Input.suffix =\n        getCommponentArray(suffix);\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'InputWithEmail',\n  baseStory: InputWithEmail,\n  subStory: InputStory,\n  targetProperty: 'input',\n  include: ['password', 'mask']\n});\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "InputWithQwerty": {
    "startLoc": {
      "col": 31,
      "line": 59
    },
    "endLoc": {
      "col": 3,
      "line": 74
    },
    "startBody": {
      "col": 31,
      "line": 59
    },
    "endBody": {
      "col": 3,
      "line": 74
    }
  },
  "InputWithEmail": {
    "startLoc": {
      "col": 30,
      "line": 138
    },
    "endLoc": {
      "col": 3,
      "line": 153
    },
    "startBody": {
      "col": 30,
      "line": 138
    },
    "endBody": {
      "col": 3,
      "line": 153
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














/* harmony default export */ const KeyboardInput_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport context from '../../globals/context/index';\nimport utils from '../../utils';\nimport Icon from '../Icon';\nimport { default as KeyboardInputComponent } from './KeyboardInput';\nimport { default as KeyboardQwertyComponent } from './KeyboardQwerty';\nimport { default as KeyboardEmailComponent } from './KeyboardEmail';\nimport { Keyboard } from './Keyboard.stories';\nimport { Input as InputStory } from '../Input/Input.stories';\nimport lightning from '../../assets/images/ic_lightning_white_32.png';\nimport eye from '../../assets/images/ic_eye_white_48.png';\nimport eyeHide from '../../assets/images/ic_eyeHide_white_48.png';\n\nexport default {\n  title: 'Components/Keyboard/KeyboardInput'\n};\n\nfunction getCommponentArray(comps) {\n  let arr = [];\n  switch (comps) {\n    case 'icon':\n      arr = [{ type: Icon, icon: lightning }];\n      break;\n    case 'eye':\n      arr = [{ type: Icon, icon: eye, w: 30, h: 30 }];\n      break;\n    case 'eyeHide':\n      arr = [{ type: Icon, icon: eyeHide, w: 30, h: 30 }];\n      break;\n  }\n  return arr;\n}\n\n// creates shared arg types for Keyboard Input stories\nconst sharedKeyboardArgTypes = createModeControl({\n  options: ['focused'],\n  summaryValue: 'focused'\n});\n\nexport const InputWithQwerty = () =>\n  class InputWithQwerty extends lng.Component {\n    static _template() {\n      return {\n        InputWithQwerty: {\n          type: KeyboardInputComponent,\n          keyboardType: KeyboardQwertyComponent,\n          input: {\n            eyebrow: 'Search',\n            helpText: 'Main'\n          }\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\nconst sharedInputArgTypes = {\n  prefix: {\n    control: 'radio',\n    options: [null, 'icon'],\n    description: 'Lightning components to be placed to the left of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  suffix: {\n    control: 'radio',\n    options: [null, 'icon', 'eye', 'eyeHide'],\n    description: 'Lightning components to be placed to the right of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nInputWithQwerty.args = {\n  centerKeyboard: false,\n  prefix: null,\n  suffix: null,\n  mode: 'focused'\n};\n\nInputWithQwerty.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  ...sharedKeyboardArgTypes,\n  ...sharedInputArgTypes\n};\n\nInputWithQwerty.parameters = {\n  tag: 'InputWithQwerty'\n};\n\nInputWithQwerty.parameters.argActions = {\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('InputWithQwerty')._Input.prefix = [];\n    } else {\n      component.tag('InputWithQwerty')._Input.prefix =\n        getCommponentArray(prefix);\n    }\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('InputWithQwerty')._Input.suffix = [];\n    } else {\n      component.tag('InputWithQwerty')._Input.suffix =\n        getCommponentArray(suffix);\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'InputWithQwerty',\n  baseStory: InputWithQwerty,\n  subStory: InputStory,\n  targetProperty: 'input',\n  include: ['password', 'mask']\n});\n\nexport const InputWithEmail = () =>\n  class InputWithEmail extends lng.Component {\n    static _template() {\n      return {\n        InputWithEmail: {\n          type: KeyboardInputComponent,\n          keyboardType: KeyboardEmailComponent,\n          input: {\n            eyebrow: 'Email Address',\n            helpText: 'Help Text'\n          }\n        },\n        w: utils.getWidthByUpCount(context.theme, 1)\n      };\n    }\n  };\n\nInputWithEmail.args = {\n  centerKeyboard: false,\n  prefix: null,\n  suffix: null,\n  mode: 'focused'\n};\n\nInputWithEmail.argTypes = {\n  ...Keyboard.sharedArgTypes,\n  ...sharedKeyboardArgTypes,\n  ...sharedInputArgTypes\n};\n\nInputWithEmail.parameters = {\n  tag: 'InputWithEmail'\n};\n\nInputWithEmail.parameters.argActions = {\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('InputWithEmail')._Input.prefix = [];\n    } else {\n      component.tag('InputWithEmail')._Input.prefix =\n        getCommponentArray(prefix);\n    }\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('InputWithEmail')._Input.suffix = [];\n    } else {\n      component.tag('InputWithEmail')._Input.suffix =\n        getCommponentArray(suffix);\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'InputWithEmail',\n  baseStory: InputWithEmail,\n  subStory: InputStory,\n  targetProperty: 'input',\n  include: ['password', 'mask']\n});\n",
      "locationsMap": {
        "input-with-qwerty": {
          "startLoc": {
            "col": 31,
            "line": 59
          },
          "endLoc": {
            "col": 3,
            "line": 74
          },
          "startBody": {
            "col": 31,
            "line": 59
          },
          "endBody": {
            "col": 3,
            "line": 74
          }
        },
        "input-with-email": {
          "startLoc": {
            "col": 30,
            "line": 138
          },
          "endLoc": {
            "col": 3,
            "line": 153
          },
          "startBody": {
            "col": 30,
            "line": 138
          },
          "endBody": {
            "col": 3,
            "line": 153
          }
        }
      }
    }
  },
  title: 'Components/Keyboard/KeyboardInput'
});
function getCommponentArray(comps) {
  var arr = [];
  switch (comps) {
    case 'icon':
      arr = [{
        type: Icon/* default */.A,
        icon: ic_lightning_white_32
      }];
      break;
    case 'eye':
      arr = [{
        type: Icon/* default */.A,
        icon: ic_eye_white_48,
        w: 30,
        h: 30
      }];
      break;
    case 'eyeHide':
      arr = [{
        type: Icon/* default */.A,
        icon: ic_eyeHide_white_48,
        w: 30,
        h: 30
      }];
      break;
  }
  return arr;
}

// creates shared arg types for Keyboard Input stories
var sharedKeyboardArgTypes = (0,utils/* createModeControl */.Pg)({
  options: ['focused'],
  summaryValue: 'focused'
});
var InputWithQwerty = function InputWithQwerty() {
  return /*#__PURE__*/function (_lng$Component) {
    KeyboardInput_stories_inherits(InputWithQwerty, _lng$Component);
    var _super = KeyboardInput_stories_createSuper(InputWithQwerty);
    function InputWithQwerty() {
      KeyboardInput_stories_classCallCheck(this, InputWithQwerty);
      return _super.apply(this, arguments);
    }
    KeyboardInput_stories_createClass(InputWithQwerty, null, [{
      key: "_template",
      value: function _template() {
        return {
          InputWithQwerty: {
            type: KeyboardInput,
            keyboardType: KeyboardQwerty/* default */.A,
            input: {
              eyebrow: 'Search',
              helpText: 'Main'
            }
          },
          w: src_utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(context/* default */.A.theme, 1)
        };
      }
    }]);
    return InputWithQwerty;
  }(lightning_esm/* default */.A.Component);
};
;
var sharedInputArgTypes = {
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
};
InputWithQwerty.args = {
  centerKeyboard: false,
  prefix: null,
  suffix: null,
  mode: 'focused'
};
InputWithQwerty.argTypes = KeyboardInput_stories_objectSpread(KeyboardInput_stories_objectSpread(KeyboardInput_stories_objectSpread({}, Keyboard_stories.Keyboard.sharedArgTypes), sharedKeyboardArgTypes), sharedInputArgTypes);
InputWithQwerty.parameters = {
  tag: 'InputWithQwerty'
};
InputWithQwerty.parameters.argActions = {
  prefix: function prefix(_prefix, component) {
    if (_prefix == null) {
      component.tag('InputWithQwerty')._Input.prefix = [];
    } else {
      component.tag('InputWithQwerty')._Input.prefix = getCommponentArray(_prefix);
    }
  },
  suffix: function suffix(_suffix, component) {
    if (_suffix == null) {
      component.tag('InputWithQwerty')._Input.suffix = [];
    } else {
      component.tag('InputWithQwerty')._Input.suffix = getCommponentArray(_suffix);
    }
  }
};
(0,utils/* generateSubStory */.jb)({
  componentName: 'InputWithQwerty',
  baseStory: InputWithQwerty,
  subStory: Input_stories.Input,
  targetProperty: 'input',
  include: ['password', 'mask']
});
var InputWithEmail = function InputWithEmail() {
  return /*#__PURE__*/function (_lng$Component2) {
    KeyboardInput_stories_inherits(InputWithEmail, _lng$Component2);
    var _super2 = KeyboardInput_stories_createSuper(InputWithEmail);
    function InputWithEmail() {
      KeyboardInput_stories_classCallCheck(this, InputWithEmail);
      return _super2.apply(this, arguments);
    }
    KeyboardInput_stories_createClass(InputWithEmail, null, [{
      key: "_template",
      value: function _template() {
        return {
          InputWithEmail: {
            type: KeyboardInput,
            keyboardType: KeyboardEmail/* default */.A,
            input: {
              eyebrow: 'Email Address',
              helpText: 'Help Text'
            }
          },
          w: src_utils/* default.getWidthByUpCount */.Ay.getWidthByUpCount(context/* default */.A.theme, 1)
        };
      }
    }]);
    return InputWithEmail;
  }(lightning_esm/* default */.A.Component);
};
InputWithEmail.args = {
  centerKeyboard: false,
  prefix: null,
  suffix: null,
  mode: 'focused'
};
InputWithEmail.argTypes = KeyboardInput_stories_objectSpread(KeyboardInput_stories_objectSpread(KeyboardInput_stories_objectSpread({}, Keyboard_stories.Keyboard.sharedArgTypes), sharedKeyboardArgTypes), sharedInputArgTypes);
InputWithEmail.parameters = {
  tag: 'InputWithEmail'
};
InputWithEmail.parameters.argActions = {
  prefix: function prefix(_prefix2, component) {
    if (_prefix2 == null) {
      component.tag('InputWithEmail')._Input.prefix = [];
    } else {
      component.tag('InputWithEmail')._Input.prefix = getCommponentArray(_prefix2);
    }
  },
  suffix: function suffix(_suffix2, component) {
    if (_suffix2 == null) {
      component.tag('InputWithEmail')._Input.suffix = [];
    } else {
      component.tag('InputWithEmail')._Input.suffix = getCommponentArray(_suffix2);
    }
  }
};
(0,utils/* generateSubStory */.jb)({
  componentName: 'InputWithEmail',
  baseStory: InputWithEmail,
  subStory: Input_stories.Input,
  targetProperty: 'input',
  include: ['password', 'mask']
});
InputWithQwerty.parameters = {
  ...InputWithQwerty.parameters,
  docs: {
    ...InputWithQwerty.parameters?.docs,
    source: {
      originalSource: "() => class InputWithQwerty extends lng.Component {\n  static _template() {\n    return {\n      InputWithQwerty: {\n        type: KeyboardInputComponent,\n        keyboardType: KeyboardQwertyComponent,\n        input: {\n          eyebrow: 'Search',\n          helpText: 'Main'\n        }\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...InputWithQwerty.parameters?.docs?.source
    }
  }
};
InputWithEmail.parameters = {
  ...InputWithEmail.parameters,
  docs: {
    ...InputWithEmail.parameters?.docs,
    source: {
      originalSource: "() => class InputWithEmail extends lng.Component {\n  static _template() {\n    return {\n      InputWithEmail: {\n        type: KeyboardInputComponent,\n        keyboardType: KeyboardEmailComponent,\n        input: {\n          eyebrow: 'Email Address',\n          helpText: 'Help Text'\n        }\n      },\n      w: utils.getWidthByUpCount(context.theme, 1)\n    };\n  }\n}",
      ...InputWithEmail.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["InputWithQwerty","InputWithEmail"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardEmail.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ KeyboardEmail)
/* harmony export */ });
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
/* harmony import */ var _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
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
      return _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
  return KeyboardEmail;
}(_Keyboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Keyboard/KeyboardQwerty.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ KeyboardQwerty)
/* harmony export */ });
/* harmony import */ var _Keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.js");
/* harmony import */ var _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Keyboard/Keyboard.styles.js");
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



var KeyboardQwerty = /*#__PURE__*/function (_Keyboard) {
  _inherits(KeyboardQwerty, _Keyboard);
  var _super = _createSuper(KeyboardQwerty);
  function KeyboardQwerty() {
    _classCallCheck(this, KeyboardQwerty);
    return _super.apply(this, arguments);
  }
  _createClass(KeyboardQwerty, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(KeyboardQwerty.prototype), "_construct", this).call(this);
      this.formats = this.qwertyFormat;
    }
  }, {
    key: "qwertyFormat",
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
          toggle: 'lowercase',
          announce: 'shift off, button',
          keyId: 'shift'
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
      return 'KeyboardQwerty';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _Keyboard_styles__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
  return KeyboardQwerty;
}(_Keyboard__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);


/***/ })

}]);
//# sourceMappingURL=components-Keyboard-KeyboardInput-stories.1cd3d5a1.iframe.bundle.js.map