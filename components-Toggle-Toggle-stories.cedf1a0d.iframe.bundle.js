"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[2228],{

/***/ "../../@lightningjs/ui-components/src/components/Toggle/Toggle.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toggle: () => (/* binding */ Toggle),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Toggle/Toggle.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _Toggle$parameters, _Toggle$parameters2;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ToggleComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Toggle/Toggle'\n};\n\nexport const Toggle = () =>\n  class Toggle extends lng.Component {\n    static _template() {\n      return {\n        flex: { direction: 'column' },\n        Toggle: {\n          type: ToggleComponent,\n          onEnter: toggle => {\n            alert('Sample onEnter override');\n            toggle.toggle();\n            return true;\n          }\n        }\n      };\n    }\n  };\nToggle.args = {\n  checked: false,\n  mode: 'focused'\n};\n\nToggle.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  checked: {\n    control: 'boolean',\n    description: 'The state of the toggle being checked',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Toggle": {
    "startLoc": {
      "col": 22,
      "line": 25
    },
    "endLoc": {
      "col": 1,
      "line": 41
    },
    "startBody": {
      "col": 22,
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ToggleComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\nexport default {\n  title: 'Components/Toggle/Toggle'\n};\nexport const Toggle = () => class Toggle extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      Toggle: {\n        type: ToggleComponent,\n        onEnter: toggle => {\n          alert('Sample onEnter override');\n          toggle.toggle();\n          return true;\n        }\n      }\n    };\n  }\n};\nToggle.args = {\n  checked: false,\n  mode: 'focused'\n};\nToggle.argTypes = {\n  ...createModeControl({\n    summaryValue: 'focused'\n  }),\n  checked: {\n    control: 'boolean',\n    description: 'The state of the toggle being checked',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nToggle.parameters = {\n  ...Toggle.parameters,\n  docs: {\n    ...Toggle.parameters?.docs,\n    source: {\n      originalSource: \"() => class Toggle extends lng.Component {\\n  static _template() {\\n    return {\\n      flex: {\\n        direction: 'column'\\n      },\\n      Toggle: {\\n        type: ToggleComponent,\\n        onEnter: toggle => {\\n          alert('Sample onEnter override');\\n          toggle.toggle();\\n          return true;\\n        }\\n      }\\n    };\\n  }\\n}\",\n      ...Toggle.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "toggle": {
          "startLoc": {
            "col": 22,
            "line": 25
          },
          "endLoc": {
            "col": 1,
            "line": 41
          },
          "startBody": {
            "col": 22,
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
  title: 'Components/Toggle/Toggle'
});
var Toggle = function Toggle() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Toggle, _lng$Component);
    var _super = _createSuper(Toggle);
    function Toggle() {
      _classCallCheck(this, Toggle);
      return _super.apply(this, arguments);
    }
    _createClass(Toggle, null, [{
      key: "_template",
      value: function _template() {
        return {
          flex: {
            direction: 'column'
          },
          Toggle: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            onEnter: function onEnter(toggle) {
              alert('Sample onEnter override');
              toggle.toggle();
              return true;
            }
          }
        };
      }
    }]);
    return Toggle;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
Toggle.args = {
  checked: false,
  mode: 'focused'
};
Toggle.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Ys)({
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
Toggle.parameters = _objectSpread(_objectSpread({}, Toggle.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_Toggle$parameters = Toggle.parameters) === null || _Toggle$parameters === void 0 ? void 0 : _Toggle$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class Toggle extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      Toggle: {\n        type: ToggleComponent,\n        onEnter: toggle => {\n          alert('Sample onEnter override');\n          toggle.toggle();\n          return true;\n        }\n      }\n    };\n  }\n}"
    }, (_Toggle$parameters2 = Toggle.parameters) === null || _Toggle$parameters2 === void 0 || (_Toggle$parameters2 = _Toggle$parameters2.docs) === null || _Toggle$parameters2 === void 0 ? void 0 : _Toggle$parameters2.source)
  })
});
var __namedExportsOrder = ["Toggle"];

/***/ })

}]);
//# sourceMappingURL=components-Toggle-Toggle-stories.cedf1a0d.iframe.bundle.js.map