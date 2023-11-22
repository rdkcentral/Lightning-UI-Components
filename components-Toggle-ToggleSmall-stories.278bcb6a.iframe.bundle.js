"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9658],{

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

/***/ })

}]);
//# sourceMappingURL=components-Toggle-ToggleSmall-stories.278bcb6a.iframe.bundle.js.map