"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6914],{

/***/ "../../@lightningjs/ui-components/src/components/Slider/Slider.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   SignalHandling: () => (/* binding */ SignalHandling),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _TextBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Slider/Slider.js");
/* harmony import */ var _storybook_client_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@storybook/client-api");
/* harmony import */ var _storybook_client_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__);
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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { createModeControl } from '../../docs/utils';\nimport TextBox from '../TextBox';\nimport Slider from '.';\nimport { useArgs } from '@storybook/client-api';\n\nexport default {\n  title: 'Components/Slider/Slider'\n};\n\nexport const Basic = () => {\n  const [{ value }, updateArgs] = useArgs();\n  return class Basic extends lng.Component {\n    static _template() {\n      return {\n        Slider: {\n          type: Slider,\n          value: value,\n          signals: {\n            onChange: true\n          }\n        }\n      };\n    }\n    // update arg control when value changes\n    onChange(value) {\n      updateArgs({ value });\n    }\n  };\n};\n\nBasic.args = {\n  min: 0,\n  max: 100,\n  value: 50,\n  step: 1,\n  vertical: false,\n  mode: 'focused'\n};\n\nBasic.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  min: {\n    control: 'number',\n    description: 'Lower bound of value',\n    table: { defaultValue: { summary: 0 }, type: { summary: 'number' } }\n  },\n  max: {\n    control: 'number',\n    description: 'Upper bound of value',\n    table: { defaultValue: { summary: 100 }, type: { summary: 'number' } }\n  },\n  value: {\n    control: 'number',\n    description: 'Current value',\n    table: {\n      defaultValue: { summary: '0 or min' },\n      type: { summary: 'number' }\n    }\n  },\n  step: {\n    control: 'number',\n    description: '+/- value on change',\n    table: { defaultValue: { summary: 1 }, type: { summary: 'number' } }\n  },\n  vertical: {\n    control: 'boolean',\n    description: 'If true, the slider is displayed vertically',\n    table: { defaultValue: { summary: false }, type: { summary: 'boolean' } }\n  }\n};\n\nexport const SignalHandling = () =>\n  class SignalHandling extends lng.Component {\n    static _template() {\n      return {\n        flex: { direction: 'column' },\n        Slider: {\n          type: Slider,\n          step: 10,\n          y: 15,\n          w: 328,\n          signals: {\n            onChange: true\n          }\n        },\n        Text: {\n          y: 60,\n          type: TextBox,\n          content: 'Value: 0'\n        }\n      };\n    }\n\n    onChange(value) {\n      this.tag('Text').content = `Value: ${value}`;\n    }\n  };\nSignalHandling.args = {\n  mode: 'focused'\n};\n\nSignalHandling.argTypes = createModeControl({ summaryValue: 'focused' });\n\nSignalHandling.parameters = {\n  storyDetails:\n    'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 29
    },
    "endLoc": {
      "col": 1,
      "line": 48
    },
    "startBody": {
      "col": 21,
      "line": 29
    },
    "endBody": {
      "col": 1,
      "line": 48
    }
  },
  "SignalHandling": {
    "startLoc": {
      "col": 30,
      "line": 91
    },
    "endLoc": {
      "col": 3,
      "line": 116
    },
    "startBody": {
      "col": 30,
      "line": 91
    },
    "endBody": {
      "col": 3,
      "line": 116
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { createModeControl } from '../../docs/utils';\nimport TextBox from '../TextBox';\nimport Slider from '.';\nimport { useArgs } from '@storybook/client-api';\n\nexport default {\n  title: 'Components/Slider/Slider'\n};\n\nexport const Basic = () => {\n  const [{ value }, updateArgs] = useArgs();\n  return class Basic extends lng.Component {\n    static _template() {\n      return {\n        Slider: {\n          type: Slider,\n          value: value,\n          signals: {\n            onChange: true\n          }\n        }\n      };\n    }\n    // update arg control when value changes\n    onChange(value) {\n      updateArgs({ value });\n    }\n  };\n};\n\nBasic.args = {\n  min: 0,\n  max: 100,\n  value: 50,\n  step: 1,\n  vertical: false,\n  mode: 'focused'\n};\n\nBasic.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  min: {\n    control: 'number',\n    description: 'Lower bound of value',\n    table: { defaultValue: { summary: 0 }, type: { summary: 'number' } }\n  },\n  max: {\n    control: 'number',\n    description: 'Upper bound of value',\n    table: { defaultValue: { summary: 100 }, type: { summary: 'number' } }\n  },\n  value: {\n    control: 'number',\n    description: 'Current value',\n    table: {\n      defaultValue: { summary: '0 or min' },\n      type: { summary: 'number' }\n    }\n  },\n  step: {\n    control: 'number',\n    description: '+/- value on change',\n    table: { defaultValue: { summary: 1 }, type: { summary: 'number' } }\n  },\n  vertical: {\n    control: 'boolean',\n    description: 'If true, the slider is displayed vertically',\n    table: { defaultValue: { summary: false }, type: { summary: 'boolean' } }\n  }\n};\n\nexport const SignalHandling = () =>\n  class SignalHandling extends lng.Component {\n    static _template() {\n      return {\n        flex: { direction: 'column' },\n        Slider: {\n          type: Slider,\n          step: 10,\n          y: 15,\n          w: 328,\n          signals: {\n            onChange: true\n          }\n        },\n        Text: {\n          y: 60,\n          type: TextBox,\n          content: 'Value: 0'\n        }\n      };\n    }\n\n    onChange(value) {\n      this.tag('Text').content = `Value: ${value}`;\n    }\n  };\nSignalHandling.args = {\n  mode: 'focused'\n};\n\nSignalHandling.argTypes = createModeControl({ summaryValue: 'focused' });\n\nSignalHandling.parameters = {\n  storyDetails:\n    'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'\n};\n",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 29
          },
          "endLoc": {
            "col": 1,
            "line": 48
          },
          "startBody": {
            "col": 21,
            "line": 29
          },
          "endBody": {
            "col": 1,
            "line": 48
          }
        },
        "signal-handling": {
          "startLoc": {
            "col": 30,
            "line": 91
          },
          "endLoc": {
            "col": 3,
            "line": 116
          },
          "startBody": {
            "col": 30,
            "line": 91
          },
          "endBody": {
            "col": 3,
            "line": 116
          }
        }
      }
    }
  },
  title: 'Components/Slider/Slider'
});
var Basic = function Basic() {
  var _useArgs = (0,_storybook_client_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)(),
    _useArgs2 = _slicedToArray(_useArgs, 2),
    value = _useArgs2[0].value,
    updateArgs = _useArgs2[1];
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Basic, _lng$Component);
    var _super = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    _createClass(Basic, [{
      key: "onChange",
      value:
      // update arg control when value changes
      function onChange(value) {
        updateArgs({
          value: value
        });
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Slider: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
            value: value,
            signals: {
              onChange: true
            }
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
;
Basic.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  vertical: false,
  mode: 'focused'
};
Basic.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
  summaryValue: 'focused'
})), {}, {
  min: {
    control: 'number',
    description: 'Lower bound of value',
    table: {
      defaultValue: {
        summary: 0
      },
      type: {
        summary: 'number'
      }
    }
  },
  max: {
    control: 'number',
    description: 'Upper bound of value',
    table: {
      defaultValue: {
        summary: 100
      },
      type: {
        summary: 'number'
      }
    }
  },
  value: {
    control: 'number',
    description: 'Current value',
    table: {
      defaultValue: {
        summary: '0 or min'
      },
      type: {
        summary: 'number'
      }
    }
  },
  step: {
    control: 'number',
    description: '+/- value on change',
    table: {
      defaultValue: {
        summary: 1
      },
      type: {
        summary: 'number'
      }
    }
  },
  vertical: {
    control: 'boolean',
    description: 'If true, the slider is displayed vertically',
    table: {
      defaultValue: {
        summary: false
      },
      type: {
        summary: 'boolean'
      }
    }
  }
});
var SignalHandling = function SignalHandling() {
  return /*#__PURE__*/function (_lng$Component2) {
    _inherits(SignalHandling, _lng$Component2);
    var _super2 = _createSuper(SignalHandling);
    function SignalHandling() {
      _classCallCheck(this, SignalHandling);
      return _super2.apply(this, arguments);
    }
    _createClass(SignalHandling, [{
      key: "onChange",
      value: function onChange(value) {
        this.tag('Text').content = "Value: ".concat(value);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          flex: {
            direction: 'column'
          },
          Slider: {
            type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
            step: 10,
            y: 15,
            w: 328,
            signals: {
              onChange: true
            }
          },
          Text: {
            y: 60,
            type: _TextBox__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
            content: 'Value: 0'
          }
        };
      }
    }]);
    return SignalHandling;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component);
};
SignalHandling.args = {
  mode: 'focused'
};
SignalHandling.argTypes = (0,_docs_utils__WEBPACK_IMPORTED_MODULE_3__/* .createModeControl */ .Pg)({
  summaryValue: 'focused'
});
SignalHandling.parameters = {
  storyDetails: 'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  const [{\n    value\n  }, updateArgs] = useArgs();\n  return class Basic extends lng.Component {\n    static _template() {\n      return {\n        Slider: {\n          type: Slider,\n          value: value,\n          signals: {\n            onChange: true\n          }\n        }\n      };\n    }\n    // update arg control when value changes\n    onChange(value) {\n      updateArgs({\n        value\n      });\n    }\n  };\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
SignalHandling.parameters = {
  ...SignalHandling.parameters,
  docs: {
    ...SignalHandling.parameters?.docs,
    source: {
      originalSource: "() => class SignalHandling extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      Slider: {\n        type: Slider,\n        step: 10,\n        y: 15,\n        w: 328,\n        signals: {\n          onChange: true\n        }\n      },\n      Text: {\n        y: 60,\n        type: TextBox,\n        content: 'Value: 0'\n      }\n    };\n  }\n  onChange(value) {\n    this.tag('Text').content = `Value: ${value}`;\n  }\n}",
      ...SignalHandling.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Basic","SignalHandling"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProgressBar)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.styles.js
var ProgressBar_styles_namespaceObject = {};
__webpack_require__.r(ProgressBar_styles_namespaceObject);
__webpack_require__.d(ProgressBar_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.styles.js
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
    height: theme.spacer.md,
    animation: theme.animation.utility,
    radius: theme.radius.xs
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      barColor: theme.color.fillNeutralTertiary,
      progressColor: theme.color.fillNeutral
    },
    inverse: {
      barColor: theme.color.fillInverseTertiary,
      progressColor: theme.color.fillInverse
    },
    brand: {
      barColor: theme.color.fillNeutralTertiary,
      progressColor: theme.color.fillBrand
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js
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





var ProgressBar = /*#__PURE__*/function (_Base) {
  _inherits(ProgressBar, _Base);
  var _super = _createSuper(ProgressBar);
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);
    return _super.apply(this, arguments);
  }
  _createClass(ProgressBar, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(ProgressBar.prototype), "_construct", this) && _get(_getPrototypeOf(ProgressBar.prototype), "_construct", this).call(this);
      this._progress = 0;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateTextures();
      this._updateProgress();
      if (this._progressChanged) {
        this.fireAncestors('$announce', this.announce);
        this._progressChanged = false;
      }
    }
  }, {
    key: "_updateTextures",
    value: function _updateTextures() {
      var w = this._getProgressWidth();
      var radius = (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w - 2, this.h);
      this._Bar.texture = lightning_esm/* default */.A.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2, this.h, radius, 0, 0, true, this.style.barColor);
      this._Progress.texture = lightning_esm/* default */.A.Tools.getRoundRect(w + 1, this.h, radius, 0, 0, true, this.style.progressColor);
    }
  }, {
    key: "_updateProgress",
    value: function _updateProgress() {
      var w = this._getProgressWidth();
      this._Progress.smooth = {
        w: [w, this.style.animation],
        alpha: Number(w > 0)
      };
    }
  }, {
    key: "_setProgress",
    value: function _setProgress(progress) {
      this._progressChanged = progress !== this._progress;
      return progress;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce !== undefined && this._announce !== null) {
        return this._announce;
      }
      var progress = this.progress;
      if (progress > 1) {
        progress = 1;
      } else if (progress < 0) {
        progress = 0;
      }
      return "".concat(Math.round(progress * 100), "%");
    },
    set: function set(announce) {
      _set(_getPrototypeOf(ProgressBar.prototype), "announce", announce, this, true);
    }
  }, {
    key: "_getProgressWidth",
    value: function _getProgressWidth() {
      var p = this.w * this._progress;
      var w = p <= 0 ? 0 : Math.min(p, this.w);
      return w;
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Bar: {
          zIndex: 1
        },
        Progress: {
          alpha: 0,
          zIndex: 2
        }
      };
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ProgressBar_styles_namespaceObject;
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'ProgressBar';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['progress'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Bar', 'Progress'];
    }
  }]);
  return ProgressBar;
}(Base/* default */.A);


/***/ })

}]);
//# sourceMappingURL=6914.9ac59834.iframe.bundle.js.map