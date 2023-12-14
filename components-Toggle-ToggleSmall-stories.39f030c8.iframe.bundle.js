"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9658,2494,9140,95,7883,4390,1195,1819,1216,8152,4497,9256,9495,5748,7309,120,3929,9718,4804,6598,7613,1325,8869],{

/***/ "../../@lightningjs/ui-components/src/components/Toggle/ToggleSmall.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ToggleSmall: () => (/* binding */ ToggleSmall),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ToggleSmall_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Toggle/ToggleSmall.styles.js
var ToggleSmall_styles_namespaceObject = {};
__webpack_require__.r(ToggleSmall_styles_namespaceObject);
__webpack_require__.d(ToggleSmall_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Toggle/Toggle.js + 1 modules
var Toggle = __webpack_require__("../../@lightningjs/ui-components/src/components/Toggle/Toggle.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Toggle/ToggleSmall.styles.js
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
  var knobSize = theme.spacer.lg;
  var knobPadding = theme.spacer.xxs;
  var strokeWidth = theme.stroke.sm;
  return {
    height: knobSize + (knobPadding + strokeWidth) * 2,
    knobWidth: knobSize,
    knobHeight: knobSize,
    knobRadius: knobSize / 2,
    knobPadding: knobPadding,
    strokeWidth: strokeWidth,
    width: (strokeWidth + knobPadding * 2 + knobSize) * 2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Toggle/ToggleSmall.js
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



var ToggleSmall_ToggleSmall = /*#__PURE__*/function (_Toggle) {
  _inherits(ToggleSmall, _Toggle);
  var _super = _createSuper(ToggleSmall);
  function ToggleSmall() {
    _classCallCheck(this, ToggleSmall);
    return _super.apply(this, arguments);
  }
  _createClass(ToggleSmall, null, [{
    key: "__componentName",
    get: function get() {
      return 'ToggleSmall';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ToggleSmall_styles_namespaceObject;
    }
  }]);
  return ToggleSmall;
}(Toggle/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Toggle/ToggleSmall.stories.js
function ToggleSmall_stories_typeof(o) { "@babel/helpers - typeof"; return ToggleSmall_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ToggleSmall_stories_typeof(o); }
var _ToggleSmall$paramete, _ToggleSmall$paramete2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = ToggleSmall_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ToggleSmall_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ToggleSmall_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ToggleSmall_stories_toPropertyKey(descriptor.key), descriptor); } }
function ToggleSmall_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) ToggleSmall_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) ToggleSmall_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ToggleSmall_stories_toPropertyKey(arg) { var key = ToggleSmall_stories_toPrimitive(arg, "string"); return ToggleSmall_stories_typeof(key) === "symbol" ? key : String(key); }
function ToggleSmall_stories_toPrimitive(input, hint) { if (ToggleSmall_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ToggleSmall_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ToggleSmall_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ToggleSmall_stories_setPrototypeOf(subClass, superClass); }
function ToggleSmall_stories_setPrototypeOf(o, p) { ToggleSmall_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ToggleSmall_stories_setPrototypeOf(o, p); }
function ToggleSmall_stories_createSuper(Derived) { var hasNativeReflectConstruct = ToggleSmall_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ToggleSmall_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ToggleSmall_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ToggleSmall_stories_possibleConstructorReturn(this, result); }; }
function ToggleSmall_stories_possibleConstructorReturn(self, call) { if (call && (ToggleSmall_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ToggleSmall_stories_assertThisInitialized(self); }
function ToggleSmall_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ToggleSmall_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ToggleSmall_stories_getPrototypeOf(o) { ToggleSmall_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ToggleSmall_stories_getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { ToggleSmall as ToggleSmallComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Toggle/ToggleSmall'\n};\n\nexport const ToggleSmall = () =>\n  class ToggleSmall extends lng.Component {\n    static _template() {\n      return {\n        flex: { direction: 'column' },\n        ToggleSmall: {\n          type: ToggleSmallComponent,\n          onEnter: toggle => {\n            alert('Sample onEnter override');\n            toggle.toggle();\n            return true;\n          }\n        }\n      };\n    }\n  };\nToggleSmall.storyName = 'ToggleSmall';\nToggleSmall.args = {\n  checked: false,\n  mode: 'focused'\n};\nToggleSmall.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  checked: {\n    control: 'boolean',\n    description: 'The state of the toggle being checked',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "ToggleSmall": {
    "startLoc": {
      "col": 27,
      "line": 25
    },
    "endLoc": {
      "col": 1,
      "line": 41
    },
    "startBody": {
      "col": 27,
      "line": 25
    },
    "endBody": {
      "col": 1,
      "line": 41
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




/* harmony default export */ const ToggleSmall_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { ToggleSmall as ToggleSmallComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\nexport default {\n  title: 'Components/Toggle/ToggleSmall'\n};\nexport const ToggleSmall = () => class ToggleSmall extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      ToggleSmall: {\n        type: ToggleSmallComponent,\n        onEnter: toggle => {\n          alert('Sample onEnter override');\n          toggle.toggle();\n          return true;\n        }\n      }\n    };\n  }\n};\nToggleSmall.storyName = 'ToggleSmall';\nToggleSmall.args = {\n  checked: false,\n  mode: 'focused'\n};\nToggleSmall.argTypes = {\n  ...createModeControl({\n    summaryValue: 'focused'\n  }),\n  checked: {\n    control: 'boolean',\n    description: 'The state of the toggle being checked',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nToggleSmall.parameters = {\n  ...ToggleSmall.parameters,\n  docs: {\n    ...ToggleSmall.parameters?.docs,\n    source: {\n      originalSource: \"() => class ToggleSmall extends lng.Component {\\n  static _template() {\\n    return {\\n      flex: {\\n        direction: 'column'\\n      },\\n      ToggleSmall: {\\n        type: ToggleSmallComponent,\\n        onEnter: toggle => {\\n          alert('Sample onEnter override');\\n          toggle.toggle();\\n          return true;\\n        }\\n      }\\n    };\\n  }\\n}\",\n      ...ToggleSmall.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "toggle-small": {
          "startLoc": {
            "col": 27,
            "line": 25
          },
          "endLoc": {
            "col": 1,
            "line": 41
          },
          "startBody": {
            "col": 27,
            "line": 25
          },
          "endBody": {
            "col": 1,
            "line": 41
          }
        }
      }
    }
  },
  title: 'Components/Toggle/ToggleSmall'
});
var ToggleSmall = function ToggleSmall() {
  return /*#__PURE__*/function (_lng$Component) {
    ToggleSmall_stories_inherits(ToggleSmall, _lng$Component);
    var _super = ToggleSmall_stories_createSuper(ToggleSmall);
    function ToggleSmall() {
      ToggleSmall_stories_classCallCheck(this, ToggleSmall);
      return _super.apply(this, arguments);
    }
    ToggleSmall_stories_createClass(ToggleSmall, null, [{
      key: "_template",
      value: function _template() {
        return {
          flex: {
            direction: 'column'
          },
          ToggleSmall: {
            type: ToggleSmall_ToggleSmall,
            onEnter: function onEnter(toggle) {
              alert('Sample onEnter override');
              toggle.toggle();
              return true;
            }
          }
        };
      }
    }]);
    return ToggleSmall;
  }(lightning_esm/* default */.Z.Component);
};
ToggleSmall.storyName = 'ToggleSmall';
ToggleSmall.args = {
  checked: false,
  mode: 'focused'
};
ToggleSmall.argTypes = _objectSpread(_objectSpread({}, (0,utils/* createModeControl */.Ys)({
  summaryValue: 'focused'
})), {}, {
  checked: {
    control: 'boolean',
    description: 'The state of the toggle being checked',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});
ToggleSmall.parameters = _objectSpread(_objectSpread({}, ToggleSmall.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ToggleSmall$paramete = ToggleSmall.parameters) === null || _ToggleSmall$paramete === void 0 ? void 0 : _ToggleSmall$paramete.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class ToggleSmall extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      ToggleSmall: {\n        type: ToggleSmallComponent,\n        onEnter: toggle => {\n          alert('Sample onEnter override');\n          toggle.toggle();\n          return true;\n        }\n      }\n    };\n  }\n}"
    }, (_ToggleSmall$paramete2 = ToggleSmall.parameters) === null || _ToggleSmall$paramete2 === void 0 || (_ToggleSmall$paramete2 = _ToggleSmall$paramete2.docs) === null || _ToggleSmall$paramete2 === void 0 ? void 0 : _ToggleSmall$paramete2.source)
  })
});
var __namedExportsOrder = ["ToggleSmall"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Toggle/Toggle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Toggle)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Toggle/Toggle.styles.js
var Toggle_styles_namespaceObject = {};
__webpack_require__.r(Toggle_styles_namespaceObject);
__webpack_require__.d(Toggle_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Toggle/Toggle.styles.js
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
  var knobSize = theme.spacer.xl;
  var knobPadding = theme.spacer.xs;
  var strokeWidth = theme.stroke.sm;
  return {
    height: knobSize + (knobPadding + strokeWidth) * 2,
    knobWidth: knobSize,
    knobHeight: knobSize,
    knobRadius: knobSize / 2,
    knobPadding: knobPadding,
    strokeWidth: strokeWidth,
    width: (strokeWidth + knobPadding * 2 + knobSize) * 2
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      strokeColor: theme.color.fillNeutral,
      backgroundColor: theme.color.fillInverseTertiary,
      backgroundColorChecked: theme.color.fillNeutral,
      knobColor: theme.color.fillNeutral,
      knobColorChecked: theme.color.fillInverse,
      mode: {
        disabled: {
          strokeColor: theme.color.fillNeutralDisabled,
          backgroundColor: theme.color.fillInverselDisabled,
          backgroundColorChecked: theme.color.fillNeutralDisabled,
          knobColor: theme.color.fillNeutralDisabled,
          knobColorChecked: theme.color.fillInverseDisabled
        }
      }
    },
    inverse: {
      strokeColor: theme.color.fillInverse,
      backgroundColor: theme.color.fillNeutralTertiary,
      backgroundColorChecked: theme.color.fillInverse,
      knobColor: theme.color.fillInverse,
      knobColorChecked: theme.color.fillNeutral,
      mode: {
        disabled: {
          strokeColor: theme.color.fillInverseDisabled,
          backgroundColor: theme.color.fillNeutralDisabled,
          backgroundColorChecked: theme.color.fillInverseDisabled,
          knobColor: theme.color.fillInverseDisabled,
          knobColorChecked: theme.color.fillNeutralDisabled
        }
      }
    },
    brand: {
      strokeColor: theme.color.fillBrand,
      backgroundColor: theme.color.fillBrandTertiary,
      backgroundColorChecked: theme.color.fillBrand,
      knobColor: theme.color.fillBrand,
      knobColorChecked: theme.color.fillInverse,
      mode: {
        disabled: {
          strokeColor: theme.color.fillNeutralDisabled,
          backgroundColor: theme.color.fillInverselDisabled,
          backgroundColorChecked: theme.color.fillNeutralDisabled,
          knobColor: theme.color.fillNeutralDisabled,
          knobColorChecked: theme.color.fillInverseDisabled
        }
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Toggle/Toggle.js
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




var Toggle = /*#__PURE__*/function (_Base) {
  _inherits(Toggle, _Base);
  var _super = _createSuper(Toggle);
  function Toggle() {
    _classCallCheck(this, Toggle);
    return _super.apply(this, arguments);
  }
  _createClass(Toggle, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(Toggle.prototype), "_construct", this) && _get(_getPrototypeOf(Toggle.prototype), "_construct", this).call(this);
      this._checked = false;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateKnobPosition();
      this._updateColors();
      this._updateContainer();
      this._updateStroke();
      this._updateKnob();
      if (this._checkedChanged) {
        this.fireAncestors('$announce', this.announce);
        this._checkedChanged = false;
      }
    }
  }, {
    key: "_updateKnobPosition",
    value: function _updateKnobPosition() {
      var _this$style = this.style,
        knobPadding = _this$style.knobPadding,
        knobWidth = _this$style.knobWidth,
        strokeWidth = _this$style.strokeWidth;
      this.applySmooth(this._Knob, {
        x: this.checked ? this.w - strokeWidth - knobPadding - knobWidth : strokeWidth + knobPadding
      });
    }
  }, {
    key: "_updateColors",
    value: function _updateColors() {
      var _this$style2 = this.style,
        backgroundColor = _this$style2.backgroundColor,
        backgroundColorChecked = _this$style2.backgroundColorChecked,
        knobColor = _this$style2.knobColor,
        knobColorChecked = _this$style2.knobColorChecked;
      var currentKnobColor = this.checked ? knobColorChecked : knobColor;
      var containerColor = this.checked ? backgroundColorChecked : backgroundColor;
      this.applySmooth(this._Knob, {
        color: currentKnobColor
      });
      this.applySmooth(this._Container, {
        color: containerColor
      });
    }
  }, {
    key: "_updateContainer",
    value: function _updateContainer() {
      var _this$style3 = this.style,
        knobRadius = _this$style3.knobRadius,
        knobPadding = _this$style3.knobPadding,
        strokeRadius = _this$style3.strokeRadius,
        strokeWidth = _this$style3.strokeWidth;
      var radius = strokeRadius !== undefined ? strokeRadius === 0 ? strokeRadius : Math.max(0, strokeRadius - strokeWidth) : Math.max(0, knobRadius + knobPadding + strokeWidth);
      this._Container.patch({
        w: this.w,
        h: this.h,
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - strokeWidth * 2 - 2, this.h - strokeWidth * 2 - 2, radius, strokeWidth, 0, true, false)
      });
    }
  }, {
    key: "_updateStroke",
    value: function _updateStroke() {
      var _this$style4 = this.style,
        knobRadius = _this$style4.knobRadius,
        knobPadding = _this$style4.knobPadding,
        strokeColor = _this$style4.strokeColor,
        strokeRadius = _this$style4.strokeRadius,
        strokeWidth = _this$style4.strokeWidth;
      this._Stroke.patch({
        w: this.w,
        h: this.h,
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - 2, this.h - 2, strokeRadius !== undefined ? strokeRadius : knobRadius + knobPadding + strokeWidth, strokeWidth, strokeColor, false, false)
      });
    }
  }, {
    key: "_updateKnob",
    value: function _updateKnob() {
      var _this$style5 = this.style,
        knobHeight = _this$style5.knobHeight,
        knobWidth = _this$style5.knobWidth,
        knobRadius = _this$style5.knobRadius;
      this._Knob.patch({
        zIndex: 2,
        y: (this.h - knobHeight) / 2,
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        knobWidth - 2, knobHeight - 2, knobRadius, 0, 0, true, false)
      });
    }
  }, {
    key: "_setChecked",
    value: function _setChecked(checked) {
      this._checkedChanged = checked !== this._checked;
      return checked;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this._isDisabledMode) {
        this.checked = !this.checked;
      }
      return this;
    }
  }, {
    key: "_handleEnter",
    value: function _handleEnter() {
      if (typeof this.onEnter === 'function') {
        return this.onEnter(this);
      } else {
        this.toggle();
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || (this.checked ? 'Checked' : 'Unchecked');
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Toggle.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Toggle';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Toggle_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Container: {
          Stroke: {},
          Knob: {}
        }
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Container', {
        name: 'Knob',
        path: 'Container.Knob'
      }, {
        name: 'Stroke',
        path: 'Container.Stroke'
      }];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['checked'];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'strokeWeight',
        curr: 'strokeWidth'
      }];
    }
  }]);
  return Toggle;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ys: () => (/* binding */ createModeControl),
/* harmony export */   cG: () => (/* binding */ DocsLink),
/* harmony export */   p9: () => (/* binding */ generateSubStory)
/* harmony export */ });
/* unused harmony exports nestedArgs, nestedArgTypes, prevValues, nestedArgActions, Item, ObjectFormat, GenericType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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

// eslint-disable-next-line no-unused-vars



// creates Mode control on stories
var createModeControl = function createModeControl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    options = _ref.options,
    summaryValue = _ref.summaryValue;
  return {
    mode: {
      control: 'radio',
      options: options && Array.isArray(options) ? ['unfocused'].concat(_toConsumableArray(options)) : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: {
          summary: summaryValue
        }
      },
      type: {
        name: 'string',
        required: true
      }
    }
  };
};

/**
 * @param {object} config Parameters for generating nested args: { argsObj, targetProp, include, overrides }
 */
function nestedArgs(config) {
  var argsObj = config.argsObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argsObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, overrides.args && overrides.args[curr] || argsObj[curr]));
  }, {});
}

/**
 * @param {object} config Parameters for generating nested arg types: { argsObj, targetProp, include, overrides }
 */
function nestedArgTypes(config) {
  var argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, _objectSpread(_objectSpread(_objectSpread({
      // Namespaced to avoid conflicts
      name: curr
    }, argTypesObj[curr]), overrides[curr]), {}, {
      table: _objectSpread(_objectSpread(_objectSpread({}, argTypesObj[curr].table || {}), overrides[curr] && overrides[curr].table), {}, {
        category: targetProp
      })
    })));
  }, {});
}
var prevValues = {};

/**
 * @param {object} config Parameters for generating nested arg actions: { componentName, argsTypeObj, targetProp, include, overrides }
 */
function nestedArgActions(config) {
  var componentName = config.componentName,
    argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, function (value, component) {
      component.tag(componentName).patch(_defineProperty({}, targetProp, _objectSpread(_objectSpread({}, prevValues[targetProp]), {}, _defineProperty({}, curr.replace(targetProp + '_', ''), value === 'none' ? undefined : overrides && overrides[curr] || value))));
      // Allow patching to work with nested objects
      if (!prevValues[targetProp]) {
        prevValues[targetProp] = {};
      }
      prevValues[targetProp][curr.replace(targetProp + '_', '')] = value === 'none' ? undefined : overrides && overrides[curr] || value;
    }));
  }, {});
}

/**
 * @param {object} config Parameters for generating story: { componentName, baseStory, subStory, targetProperty, include, options }
 */
function generateSubStory(config) {
  config.baseStory.args = _objectSpread(_objectSpread({}, config.baseStory.args), nestedArgs({
    argsObj: config.subStory.args || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.args || {}
  }));
  config.baseStory.argTypes = _objectSpread(_objectSpread({}, config.baseStory.argTypes), nestedArgTypes({
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argTypes || {}
  }));
  if (!(config.baseStory && config.baseStory.parameters && config.baseStory.parameters.argActions)) {
    config.baseStory.parameters = {
      argActions: {}
    };
  }
  config.baseStory.parameters.argActions = _objectSpread(_objectSpread({}, config.baseStory.parameters.argActions), nestedArgActions({
    componentName: config.componentName,
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argActions || {}
  }));
}

// used to create links to Lightning docs given an id
var DocsLink = function DocsLink(_ref2) {
  var children = _ref2.children,
    id = _ref2.id;
  var docsmap = {
    lng: {
      _base: 'https://rdkcentral.github.io/Lightning/docs',
      Component: '/components/overview',
      Text: '/textures/text',
      Transition: '/transitions/attributes'
    }
  };
  var _id$split = id.split('.'),
    _id$split2 = _slicedToArray(_id$split, 2),
    source = _id$split2[0],
    path = _id$split2[1];
  var href = docsmap[source]._base + docsmap[source][path];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href,
    target: "_blank"
  }, children || id);
};
var Item = function Item(_ref3) {
  var children = _ref3.children;
  return children;
};

/**
 * Creates formatted object for markdown prop tables
 * see Column and Row stories
 * @param {object} props
 * @param {object} props.type - TS-style generic/utility type
 */
var ObjectFormat = function ObjectFormat(_ref4) {
  var object = _ref4.object;
  return ['{', /*#__PURE__*/React.createElement("br", null), '  '].concat(_toConsumableArray(utils.flatten(Object.entries(object).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      k = _ref6[0],
      v = _ref6[1];
    return [/*#__PURE__*/React.createElement("span", null, "\xA0\xA0"), "".concat(k, ": "), v, ',', /*#__PURE__*/React.createElement("br", null)];
  }))), ['}']).map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
};

/**
 * Formats TS-style generic types
 * See Columns and Row stories
 * @param {object} props
 * @param {object} props.children - component children
 * @param {string} props.type - Name of generic type
 */
var GenericType = function GenericType(_ref7) {
  var children = _ref7.children,
    type = _ref7.type;
  return [type, '<', children, '>'].map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
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
//# sourceMappingURL=components-Toggle-ToggleSmall-stories.39f030c8.iframe.bundle.js.map