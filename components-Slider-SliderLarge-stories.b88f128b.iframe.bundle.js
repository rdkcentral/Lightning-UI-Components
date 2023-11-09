"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2996,1747,2494,9140,95,4390,1819,5714,9159,8152,4497,5748,7309,120,3929,9718,4804,6598,7613,1325,8869],{

/***/ "../../@lightningjs/ui-components/src/components/Slider/SliderLarge.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  SignalHandlingLarge: () => (/* binding */ SignalHandlingLarge),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ SliderLarge_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.styles.js
var SliderLarge_styles_namespaceObject = {};
__webpack_require__.r(SliderLarge_styles_namespaceObject);
__webpack_require__.d(SliderLarge_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("../../@lightningjs/ui-components/src/components/Slider/Slider.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.styles.js
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
  var size = theme.spacer.xxl;
  return {
    width: size,
    height: size,
    radius: size / 2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



var SliderLarge = /*#__PURE__*/function (_Slider) {
  _inherits(SliderLarge, _Slider);
  var _super = _createSuper(SliderLarge);
  function SliderLarge() {
    _classCallCheck(this, SliderLarge);
    return _super.apply(this, arguments);
  }
  _createClass(SliderLarge, null, [{
    key: "__componentName",
    get: function get() {
      return 'SliderLarge';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return SliderLarge_styles_namespaceObject;
    }
  }]);
  return SliderLarge;
}(Slider/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: external "__STORYBOOK_MODULE_CLIENT_API__"
var external_STORYBOOK_MODULE_CLIENT_API_ = __webpack_require__("@storybook/client-api");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.stories.js
function SliderLarge_stories_typeof(o) { "@babel/helpers - typeof"; return SliderLarge_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, SliderLarge_stories_typeof(o); }
var _Basic$parameters, _Basic$parameters2, _SignalHandlingLarge$, _SignalHandlingLarge$2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = SliderLarge_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function SliderLarge_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function SliderLarge_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, SliderLarge_stories_toPropertyKey(descriptor.key), descriptor); } }
function SliderLarge_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) SliderLarge_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) SliderLarge_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function SliderLarge_stories_toPropertyKey(arg) { var key = SliderLarge_stories_toPrimitive(arg, "string"); return SliderLarge_stories_typeof(key) === "symbol" ? key : String(key); }
function SliderLarge_stories_toPrimitive(input, hint) { if (SliderLarge_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (SliderLarge_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function SliderLarge_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) SliderLarge_stories_setPrototypeOf(subClass, superClass); }
function SliderLarge_stories_setPrototypeOf(o, p) { SliderLarge_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SliderLarge_stories_setPrototypeOf(o, p); }
function SliderLarge_stories_createSuper(Derived) { var hasNativeReflectConstruct = SliderLarge_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SliderLarge_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SliderLarge_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SliderLarge_stories_possibleConstructorReturn(this, result); }; }
function SliderLarge_stories_possibleConstructorReturn(self, call) { if (call && (SliderLarge_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return SliderLarge_stories_assertThisInitialized(self); }
function SliderLarge_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function SliderLarge_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function SliderLarge_stories_getPrototypeOf(o) { SliderLarge_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SliderLarge_stories_getPrototypeOf(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Slider from './SliderLarge.js';\nimport { createModeControl } from '../../docs/utils';\nimport TextBox from '../TextBox';\nimport { useArgs } from '@storybook/client-api';\n\nexport default {\n  title: 'Components/Slider/SliderLarge'\n};\n\nexport const Basic = () => {\n  const [{ value }, updateArgs] = useArgs();\n  return class Basic extends lng.Component {\n    static _template() {\n      return {\n        Slider: {\n          type: Slider,\n          value: value,\n          signals: {\n            onChange: true\n          }\n        }\n      };\n    }\n    // update arg control when value changes\n    onChange(value) {\n      updateArgs({ value });\n    }\n  };\n};\n\nBasic.args = {\n  min: 0,\n  max: 100,\n  value: 50,\n  step: 1,\n  vertical: false,\n  mode: 'focused'\n};\n\nBasic.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  min: {\n    control: 'number',\n    description: 'Lower bound of value',\n    table: { defaultValue: { summary: 0 } }\n  },\n  max: {\n    control: 'number',\n    description: 'Upper bound of value',\n    table: { defaultValue: { summary: 100 } }\n  },\n  value: {\n    control: 'number',\n    description: 'Current value',\n    table: { defaultValue: { summary: '0 or min' } }\n  },\n  step: {\n    control: 'number',\n    description: '+/- value on change',\n    table: { defaultValue: { summary: 1 } }\n  },\n  vertical: {\n    control: 'boolean',\n    description: 'If true, the slider is displayed vertically',\n    table: { defaultValue: { summary: false } }\n  }\n};\n\nexport const SignalHandlingLarge = () =>\n  class SignalHandling extends lng.Component {\n    static _template() {\n      return {\n        flex: { direction: 'column' },\n        Slider: {\n          type: Slider,\n          y: 20,\n          step: 10,\n          value: 30,\n          w: 328,\n          signals: {\n            onChange: true\n          }\n        },\n        Text: {\n          y: 60,\n          type: TextBox\n        }\n      };\n    }\n\n    onChange(value) {\n      this.tag('Text').content = `Value: ${value}`;\n    }\n  };\n\nSignalHandlingLarge.args = {\n  mode: 'focused'\n};\n\nSignalHandlingLarge.argTypes = createModeControl({ summaryValue: 'focused' });\n\nSignalHandlingLarge.parameters = {\n  storyDetails:\n    'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 27
    },
    "endLoc": {
      "col": 1,
      "line": 50
    },
    "startBody": {
      "col": 21,
      "line": 27
    },
    "endBody": {
      "col": 1,
      "line": 50
    }
  },
  "SignalHandlingLarge": {
    "startLoc": {
      "col": 35,
      "line": 109
    },
    "endLoc": {
      "col": 1,
      "line": 134
    },
    "startBody": {
      "col": 35,
      "line": 109
    },
    "endBody": {
      "col": 1,
      "line": 134
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






/* harmony default export */ const SliderLarge_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Slider from './SliderLarge.js';\nimport { createModeControl } from '../../docs/utils';\nimport TextBox from '../TextBox';\nimport { useArgs } from '@storybook/client-api';\nexport default {\n  title: 'Components/Slider/SliderLarge'\n};\nexport const Basic = () => {\n  const [{\n    value\n  }, updateArgs] = useArgs();\n  return class Basic extends lng.Component {\n    static _template() {\n      return {\n        Slider: {\n          type: Slider,\n          value: value,\n          signals: {\n            onChange: true\n          }\n        }\n      };\n    }\n    // update arg control when value changes\n    onChange(value) {\n      updateArgs({\n        value\n      });\n    }\n  };\n};\nBasic.args = {\n  min: 0,\n  max: 100,\n  value: 50,\n  step: 1,\n  vertical: false,\n  mode: 'focused'\n};\nBasic.argTypes = {\n  ...createModeControl({\n    summaryValue: 'focused'\n  }),\n  min: {\n    control: 'number',\n    description: 'Lower bound of value',\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  },\n  max: {\n    control: 'number',\n    description: 'Upper bound of value',\n    table: {\n      defaultValue: {\n        summary: 100\n      }\n    }\n  },\n  value: {\n    control: 'number',\n    description: 'Current value',\n    table: {\n      defaultValue: {\n        summary: '0 or min'\n      }\n    }\n  },\n  step: {\n    control: 'number',\n    description: '+/- value on change',\n    table: {\n      defaultValue: {\n        summary: 1\n      }\n    }\n  },\n  vertical: {\n    control: 'boolean',\n    description: 'If true, the slider is displayed vertically',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nexport const SignalHandlingLarge = () => class SignalHandling extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      Slider: {\n        type: Slider,\n        y: 20,\n        step: 10,\n        value: 30,\n        w: 328,\n        signals: {\n          onChange: true\n        }\n      },\n      Text: {\n        y: 60,\n        type: TextBox\n      }\n    };\n  }\n  onChange(value) {\n    this.tag('Text').content = `Value: ${value}`;\n  }\n};\nSignalHandlingLarge.args = {\n  mode: 'focused'\n};\nSignalHandlingLarge.argTypes = createModeControl({\n  summaryValue: 'focused'\n});\nSignalHandlingLarge.parameters = {\n  storyDetails: 'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [{\\n    value\\n  }, updateArgs] = useArgs();\\n  return class Basic extends lng.Component {\\n    static _template() {\\n      return {\\n        Slider: {\\n          type: Slider,\\n          value: value,\\n          signals: {\\n            onChange: true\\n          }\\n        }\\n      };\\n    }\\n    // update arg control when value changes\\n    onChange(value) {\\n      updateArgs({\\n        value\\n      });\\n    }\\n  };\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nSignalHandlingLarge.parameters = {\n  ...SignalHandlingLarge.parameters,\n  docs: {\n    ...SignalHandlingLarge.parameters?.docs,\n    source: {\n      originalSource: \"() => class SignalHandling extends lng.Component {\\n  static _template() {\\n    return {\\n      flex: {\\n        direction: 'column'\\n      },\\n      Slider: {\\n        type: Slider,\\n        y: 20,\\n        step: 10,\\n        value: 30,\\n        w: 328,\\n        signals: {\\n          onChange: true\\n        }\\n      },\\n      Text: {\\n        y: 60,\\n        type: TextBox\\n      }\\n    };\\n  }\\n  onChange(value) {\\n    this.tag('Text').content = `Value: ${value}`;\\n  }\\n}\",\n      ...SignalHandlingLarge.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 27
          },
          "endLoc": {
            "col": 1,
            "line": 50
          },
          "startBody": {
            "col": 21,
            "line": 27
          },
          "endBody": {
            "col": 1,
            "line": 50
          }
        },
        "signal-handling-large": {
          "startLoc": {
            "col": 35,
            "line": 109
          },
          "endLoc": {
            "col": 1,
            "line": 134
          },
          "startBody": {
            "col": 35,
            "line": 109
          },
          "endBody": {
            "col": 1,
            "line": 134
          }
        }
      }
    }
  },
  title: 'Components/Slider/SliderLarge'
});
var Basic = function Basic() {
  var _useArgs = (0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)(),
    _useArgs2 = _slicedToArray(_useArgs, 2),
    value = _useArgs2[0].value,
    updateArgs = _useArgs2[1];
  return /*#__PURE__*/function (_lng$Component) {
    SliderLarge_stories_inherits(Basic, _lng$Component);
    var _super = SliderLarge_stories_createSuper(Basic);
    function Basic() {
      SliderLarge_stories_classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    SliderLarge_stories_createClass(Basic, [{
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
            type: SliderLarge,
            value: value,
            signals: {
              onChange: true
            }
          }
        };
      }
    }]);
    return Basic;
  }(lightning_esm/* default */.Z.Component);
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
Basic.argTypes = _objectSpread(_objectSpread({}, (0,utils/* createModeControl */.Ys)({
  summaryValue: 'focused'
})), {}, {
  min: {
    control: 'number',
    description: 'Lower bound of value',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  max: {
    control: 'number',
    description: 'Upper bound of value',
    table: {
      defaultValue: {
        summary: 100
      }
    }
  },
  value: {
    control: 'number',
    description: 'Current value',
    table: {
      defaultValue: {
        summary: '0 or min'
      }
    }
  },
  step: {
    control: 'number',
    description: '+/- value on change',
    table: {
      defaultValue: {
        summary: 1
      }
    }
  },
  vertical: {
    control: 'boolean',
    description: 'If true, the slider is displayed vertically',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});
var SignalHandlingLarge = function SignalHandlingLarge() {
  return /*#__PURE__*/function (_lng$Component2) {
    SliderLarge_stories_inherits(SignalHandling, _lng$Component2);
    var _super2 = SliderLarge_stories_createSuper(SignalHandling);
    function SignalHandling() {
      SliderLarge_stories_classCallCheck(this, SignalHandling);
      return _super2.apply(this, arguments);
    }
    SliderLarge_stories_createClass(SignalHandling, [{
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
            type: SliderLarge,
            y: 20,
            step: 10,
            value: 30,
            w: 328,
            signals: {
              onChange: true
            }
          },
          Text: {
            y: 60,
            type: TextBox/* default */.Z
          }
        };
      }
    }]);
    return SignalHandling;
  }(lightning_esm/* default */.Z.Component);
};
SignalHandlingLarge.args = {
  mode: 'focused'
};
SignalHandlingLarge.argTypes = (0,utils/* createModeControl */.Ys)({
  summaryValue: 'focused'
});
SignalHandlingLarge.parameters = {
  storyDetails: 'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'
};
Basic.parameters = _objectSpread(_objectSpread({}, Basic.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Basic$parameters = Basic.parameters) === null || _Basic$parameters === void 0 ? void 0 : _Basic$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => {\n  const [{\n    value\n  }, updateArgs] = useArgs();\n  return class Basic extends lng.Component {\n    static _template() {\n      return {\n        Slider: {\n          type: Slider,\n          value: value,\n          signals: {\n            onChange: true\n          }\n        }\n      };\n    }\n    // update arg control when value changes\n    onChange(value) {\n      updateArgs({\n        value\n      });\n    }\n  };\n}"
    }, (_Basic$parameters2 = Basic.parameters) === null || _Basic$parameters2 === void 0 || (_Basic$parameters2 = _Basic$parameters2.docs) === null || _Basic$parameters2 === void 0 ? void 0 : _Basic$parameters2.source)
  })
});
SignalHandlingLarge.parameters = _objectSpread(_objectSpread({}, SignalHandlingLarge.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_SignalHandlingLarge$ = SignalHandlingLarge.parameters) === null || _SignalHandlingLarge$ === void 0 ? void 0 : _SignalHandlingLarge$.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class SignalHandling extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      Slider: {\n        type: Slider,\n        y: 20,\n        step: 10,\n        value: 30,\n        w: 328,\n        signals: {\n          onChange: true\n        }\n      },\n      Text: {\n        y: 60,\n        type: TextBox\n      }\n    };\n  }\n  onChange(value) {\n    this.tag('Text').content = `Value: ${value}`;\n  }\n}"
    }, (_SignalHandlingLarge$2 = SignalHandlingLarge.parameters) === null || _SignalHandlingLarge$2 === void 0 || (_SignalHandlingLarge$2 = _SignalHandlingLarge$2.docs) === null || _SignalHandlingLarge$2 === void 0 ? void 0 : _SignalHandlingLarge$2.source)
  })
});
var __namedExportsOrder = ["Basic", "SignalHandlingLarge"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ProgressBar)
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
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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
      this._Bar.texture = lightning_esm/* default */.Z.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2, this.h, this.style.radius, 0, 0, true, this.style.barColor);
      this._Progress.texture = lightning_esm/* default */.Z.Tools.getRoundRect(w + 1, this.h, this.style.radius, 0, 0, true, this.style.progressColor);
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
}(Base/* default */.Z);


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
//# sourceMappingURL=components-Slider-SliderLarge-stories.b88f128b.iframe.bundle.js.map