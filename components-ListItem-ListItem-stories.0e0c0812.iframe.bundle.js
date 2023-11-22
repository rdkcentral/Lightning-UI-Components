"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[1216],{

/***/ "../../@lightningjs/ui-components/src/components/ListItem/ListItem.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListItem: () => (/* binding */ ListItem),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/ListItem/ListItem.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png");
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js");
/* harmony import */ var _Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Radio/Radio.js");
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Toggle/Toggle.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _ListItem$parameters, _ListItem$parameters2;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport ListItemComponent from './ListItem';\nimport { createModeControl } from '../../docs/utils';\nimport xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';\nimport { default as Checkbox } from '../Checkbox';\nimport { default as Radio } from '../Radio';\nimport { default as Toggle } from '../Toggle';\n\nexport default {\n  title: 'Components/ListItem/ListItem'\n};\n\nexport const ListItem = () =>\n  class ListItem extends lng.Component {\n    static _template() {\n      return {\n        ListItem: {\n          type: ListItemComponent\n        }\n      };\n    }\n  };\n\nListItem.storyName = 'ListItem';\n\nListItem.args = {\n  title: 'List Item',\n  shouldCollapse: false,\n  description: 'Description',\n  prefix: null,\n  prefixLogo: 'none',\n  suffix: null,\n  suffixLogo: 'none',\n  mode: 'focused'\n};\n\nListItem.argTypes = {\n  ...createModeControl({ summaryValue: ListItem.args.mode }),\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  description: {\n    control: 'text',\n    description: 'Description text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  shouldCollapse: {\n    control: 'boolean',\n    description:\n      'When in unfocused or disabled mode, if this flag is true the description will collapse (when focused, it will always be expanded)',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  prefix: {\n    control: 'radio',\n    options: [null, 'toggle', 'radio', 'checkbox'],\n    description: 'Lightning components to be placed to the left of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  prefixLogo: {\n    control: 'radio',\n    options: ['none', 'xfinity'],\n    description:\n      'Logo to be placed to the left of the title. If prefix and prefixLogo are both set, prefixLogo will take precedence for what is rendered and prefix will be ignored',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  suffix: {\n    control: 'radio',\n    options: [null, 'toggle', 'radio', 'checkbox'],\n    description: 'Lightning components to be placed to the right of the title',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  suffixLogo: {\n    control: 'radio',\n    options: ['none', 'xfinity'],\n    description:\n      'Logo to be placed to the right of the title. If suffix and suffixLogo are both set, suffixLogo will take precedence for what is rendered and suffix will be ignored',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nconst logoSet = {\n  none: null,\n  xfinity: xfinity\n};\n\nconst elementSet = {\n  toggle: {\n    type: Toggle,\n    checked: true\n  },\n  radio: {\n    type: Radio,\n    checked: true\n  },\n  checkbox: {\n    type: Checkbox,\n    checked: true\n  }\n};\n\nconst sharedArgActions = {\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('ListItem').prefix = [];\n    } else {\n      component.tag('ListItem').prefix = elementSet[prefix];\n    }\n  },\n  prefixLogo: (prefixLogo, component) => {\n    component.tag('ListItem').prefixLogo = logoSet[prefixLogo];\n  },\n  suffixLogo: (suffixLogo, component) => {\n    component.tag('ListItem').suffixLogo = logoSet[suffixLogo];\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('ListItem').suffix = [];\n    } else {\n      component.tag('ListItem').suffix = elementSet[suffix];\n    }\n  }\n};\n\nListItem.parameters = { argActions: sharedArgActions };\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "ListItem": {
    "startLoc": {
      "col": 24,
      "line": 29
    },
    "endLoc": {
      "col": 1,
      "line": 37
    },
    "startBody": {
      "col": 24,
      "line": 29
    },
    "endBody": {
      "col": 1,
      "line": 37
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport ListItemComponent from './ListItem';\nimport { createModeControl } from '../../docs/utils';\nimport xfinity from '../../assets/images/Xfinity-Provider-Logo-Square.png';\nimport { default as Checkbox } from '../Checkbox';\nimport { default as Radio } from '../Radio';\nimport { default as Toggle } from '../Toggle';\nexport default {\n  title: 'Components/ListItem/ListItem'\n};\nexport const ListItem = () => class ListItem extends lng.Component {\n  static _template() {\n    return {\n      ListItem: {\n        type: ListItemComponent\n      }\n    };\n  }\n};\nListItem.storyName = 'ListItem';\nListItem.args = {\n  title: 'List Item',\n  shouldCollapse: false,\n  description: 'Description',\n  prefix: null,\n  prefixLogo: 'none',\n  suffix: null,\n  suffixLogo: 'none',\n  mode: 'focused'\n};\nListItem.argTypes = {\n  ...createModeControl({\n    summaryValue: ListItem.args.mode\n  }),\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  description: {\n    control: 'text',\n    description: 'Description text',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  shouldCollapse: {\n    control: 'boolean',\n    description: 'When in unfocused or disabled mode, if this flag is true the description will collapse (when focused, it will always be expanded)',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  prefix: {\n    control: 'radio',\n    options: [null, 'toggle', 'radio', 'checkbox'],\n    description: 'Lightning components to be placed to the left of the title',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  prefixLogo: {\n    control: 'radio',\n    options: ['none', 'xfinity'],\n    description: 'Logo to be placed to the left of the title. If prefix and prefixLogo are both set, prefixLogo will take precedence for what is rendered and prefix will be ignored',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  suffix: {\n    control: 'radio',\n    options: [null, 'toggle', 'radio', 'checkbox'],\n    description: 'Lightning components to be placed to the right of the title',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  suffixLogo: {\n    control: 'radio',\n    options: ['none', 'xfinity'],\n    description: 'Logo to be placed to the right of the title. If suffix and suffixLogo are both set, suffixLogo will take precedence for what is rendered and suffix will be ignored',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  }\n};\nconst logoSet = {\n  none: null,\n  xfinity: xfinity\n};\nconst elementSet = {\n  toggle: {\n    type: Toggle,\n    checked: true\n  },\n  radio: {\n    type: Radio,\n    checked: true\n  },\n  checkbox: {\n    type: Checkbox,\n    checked: true\n  }\n};\nconst sharedArgActions = {\n  prefix: (prefix, component) => {\n    if (prefix == null) {\n      component.tag('ListItem').prefix = [];\n    } else {\n      component.tag('ListItem').prefix = elementSet[prefix];\n    }\n  },\n  prefixLogo: (prefixLogo, component) => {\n    component.tag('ListItem').prefixLogo = logoSet[prefixLogo];\n  },\n  suffixLogo: (suffixLogo, component) => {\n    component.tag('ListItem').suffixLogo = logoSet[suffixLogo];\n  },\n  suffix: (suffix, component) => {\n    if (suffix == null) {\n      component.tag('ListItem').suffix = [];\n    } else {\n      component.tag('ListItem').suffix = elementSet[suffix];\n    }\n  }\n};\nListItem.parameters = {\n  argActions: sharedArgActions\n};\nListItem.parameters = {\n  ...ListItem.parameters,\n  docs: {\n    ...ListItem.parameters?.docs,\n    source: {\n      originalSource: \"() => class ListItem extends lng.Component {\\n  static _template() {\\n    return {\\n      ListItem: {\\n        type: ListItemComponent\\n      }\\n    };\\n  }\\n}\",\n      ...ListItem.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "list-item": {
          "startLoc": {
            "col": 24,
            "line": 29
          },
          "endLoc": {
            "col": 1,
            "line": 37
          },
          "startBody": {
            "col": 24,
            "line": 29
          },
          "endBody": {
            "col": 1,
            "line": 37
          }
        }
      }
    }
  },
  title: 'Components/ListItem/ListItem'
});
var ListItem = function ListItem() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(ListItem, _lng$Component);
    var _super = _createSuper(ListItem);
    function ListItem() {
      _classCallCheck(this, ListItem);
      return _super.apply(this, arguments);
    }
    _createClass(ListItem, null, [{
      key: "_template",
      value: function _template() {
        return {
          ListItem: {
            type: _ListItem__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
          }
        };
      }
    }]);
    return ListItem;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
ListItem.storyName = 'ListItem';
ListItem.args = {
  title: 'List Item',
  shouldCollapse: false,
  description: 'Description',
  prefix: null,
  prefixLogo: 'none',
  suffix: null,
  suffixLogo: 'none',
  mode: 'focused'
};
ListItem.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Ys)({
  summaryValue: ListItem.args.mode
})), {}, {
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  description: {
    control: 'text',
    description: 'Description text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description: 'When in unfocused or disabled mode, if this flag is true the description will collapse (when focused, it will always be expanded)',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  prefix: {
    control: 'radio',
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the left of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  prefixLogo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description: 'Logo to be placed to the left of the title. If prefix and prefixLogo are both set, prefixLogo will take precedence for what is rendered and prefix will be ignored',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  suffix: {
    control: 'radio',
    options: [null, 'toggle', 'radio', 'checkbox'],
    description: 'Lightning components to be placed to the right of the title',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  suffixLogo: {
    control: 'radio',
    options: ['none', 'xfinity'],
    description: 'Logo to be placed to the right of the title. If suffix and suffixLogo are both set, suffixLogo will take precedence for what is rendered and suffix will be ignored',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
});
var logoSet = {
  none: null,
  xfinity: _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_3__
};
var elementSet = {
  toggle: {
    type: _Toggle__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
    checked: true
  },
  radio: {
    type: _Radio__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
    checked: true
  },
  checkbox: {
    type: _Checkbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
    checked: true
  }
};
var sharedArgActions = {
  prefix: function prefix(_prefix, component) {
    if (_prefix == null) {
      component.tag('ListItem').prefix = [];
    } else {
      component.tag('ListItem').prefix = elementSet[_prefix];
    }
  },
  prefixLogo: function prefixLogo(_prefixLogo, component) {
    component.tag('ListItem').prefixLogo = logoSet[_prefixLogo];
  },
  suffixLogo: function suffixLogo(_suffixLogo, component) {
    component.tag('ListItem').suffixLogo = logoSet[_suffixLogo];
  },
  suffix: function suffix(_suffix, component) {
    if (_suffix == null) {
      component.tag('ListItem').suffix = [];
    } else {
      component.tag('ListItem').suffix = elementSet[_suffix];
    }
  }
};
ListItem.parameters = {
  argActions: sharedArgActions
};
ListItem.parameters = _objectSpread(_objectSpread({}, ListItem.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ListItem$parameters = ListItem.parameters) === null || _ListItem$parameters === void 0 ? void 0 : _ListItem$parameters.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class ListItem extends lng.Component {\n  static _template() {\n    return {\n      ListItem: {\n        type: ListItemComponent\n      }\n    };\n  }\n}"
    }, (_ListItem$parameters2 = ListItem.parameters) === null || _ListItem$parameters2 === void 0 || (_ListItem$parameters2 = _ListItem$parameters2.docs) === null || _ListItem$parameters2 === void 0 ? void 0 : _ListItem$parameters2.source)
  })
});
var __namedExportsOrder = ["ListItem"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Checkbox)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.styles.js
var Checkbox_styles_namespaceObject = {};
__webpack_require__.r(Checkbox_styles_namespaceObject);
__webpack_require__.d(Checkbox_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.styles.js
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
  var strokeWidth = theme.stroke.sm;
  var size = theme.spacer.xxl;
  return {
    alpha: theme.alpha.primary,
    width: size,
    height: size,
    iconWidth: theme.spacer.lg,
    iconHeight: theme.spacer.lg,
    icon: theme.asset.check,
    radius: theme.radius.xs,
    strokeWidth: strokeWidth
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      strokeColor: theme.color.strokeNeutralSecondary,
      checkColor: theme.color.fillInverse,
      backgroundColor: theme.color.fillInverseSecondary,
      backgroundColorChecked: theme.color.fillNeutral
    },
    inverse: {
      strokeColor: theme.color.strokeInverseSecondary,
      checkColor: theme.color.fillNeutral,
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillInverse
    },
    brand: {
      strokeColor: theme.color.strokeNeutralSecondary,
      checkColor: theme.color.fillInverse,
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillBrand
    }
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Checkbox/Checkbox.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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





var Checkbox = /*#__PURE__*/function (_Base) {
  _inherits(Checkbox, _Base);
  var _super = _createSuper(Checkbox);
  function Checkbox() {
    _classCallCheck(this, Checkbox);
    return _super.apply(this, arguments);
  }
  _createClass(Checkbox, [{
    key: "_update",
    value: function _update() {
      this._updateBody();
      this._updateStroke();
      this._updateCheck();
      if (this._checkedChanged) {
        this.fireAncestors('$announce', this.announce);
        this._checkedChanged = false;
      }
      this._updateOpacity();
    }
  }, {
    key: "_updateCheck",
    value: function _updateCheck() {
      this._Check.patch({
        w: this.style.iconWidth,
        h: this.style.iconHeight,
        icon: this.style.icon,
        style: {
          color: this.style.checkColor
        }
      });
      var alphaPatch = {
        alpha: this.checked ? 1 : 0
      };
      this.applySmooth(this._Check, alphaPatch);
    }
  }, {
    key: "_updateBody",
    value: function _updateBody() {
      var bodyColor = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor;

      // if the inner checkbox should be square, a rounded corner radius can still be applied to the stroke
      var radius = this.style.radius >= this.w / 2 ? (this.w - this.style.strokeWidth - 2) / 2 : 0;
      this._Body.patch({
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - this.style.strokeWidth * 2 - 2, this.h - this.style.strokeWidth * 2 - 2, radius, 0, null, true, bodyColor)
      });
    }
  }, {
    key: "_updateStroke",
    value: function _updateStroke() {
      this._Stroke.patch({
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - 2, this.h - 2, this.style.radius, this.style.strokeWidth, this.style.strokeColor, false)
      });
    }
  }, {
    key: "_updateOpacity",
    value: function _updateOpacity() {
      this.applySmooth(this, {
        alpha: this.style.alpha
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
      _set(_getPrototypeOf(Checkbox.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Checkbox';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Checkbox_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      var center = {
        mount: 0.5,
        x: function x(w) {
          return w / 2;
        },
        y: function y(h) {
          return h / 2;
        }
      };
      return {
        Body: _objectSpread(_objectSpread({
          rtt: true
        }, center), {}, {
          Check: _objectSpread(_objectSpread({
            type: Icon/* default */.Z
          }, center), {}, {
            alpha: 0
          })
        }),
        Stroke: center
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Check', 'Body', 'Stroke'];
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
        prev: 'checkSrc',
        curr: 'icon'
      }, {
        prev: 'checkH',
        curr: 'iconHeight'
      }, {
        prev: 'checkW',
        curr: 'iconWidth'
      }, {
        prev: 'checkHeight',
        curr: 'iconHeight'
      }, {
        prev: 'checkWidth',
        curr: 'iconWidth'
      }];
    }
  }]);
  return Checkbox;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ListItem/ListItem.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ListItem)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.styles.js
var ListItem_styles_namespaceObject = {};
__webpack_require__.r(ListItem_styles_namespaceObject);
__webpack_require__.d(ListItem_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    alpha: theme.alpha.primary,
    descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutralSecondary
    }),
    height: theme.spacer.xxl * 3,
    logoStyle: {
      width: theme.spacer.xxl * 2,
      height: theme.spacer.xxl * 2,
      radius: theme.radius.sm
    },
    paddingX: theme.spacer.xl,
    contentSpacing: theme.spacer.lg,
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutral
    }),
    width: utils/* default.getWidthByColumnSpan */.ZP.getWidthByColumnSpan(theme, 3)
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive,
      descriptionTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      titleTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    },
    focused: {
      descriptionTextStyle: {
        textColor: theme.color.textInverseSecondary
      },
      titleTextStyle: {
        textColor: theme.color.textInverse
      }
    }
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      mode: {
        focused: {
          descriptionTextStyle: {
            textColor: theme.color.textNeutral
          },
          titleTextStyle: {
            textColor: theme.color.textNeutral
          }
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.js
function ListItem_typeof(o) { "@babel/helpers - typeof"; return ListItem_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ListItem_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ListItem_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ListItem_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ListItem_ownKeys(Object(t), !0).forEach(function (r) { ListItem_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ListItem_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ListItem_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { ListItem_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function ListItem_defineProperty(obj, key, value) { key = ListItem_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ListItem_toPropertyKey(arg) { var key = ListItem_toPrimitive(arg, "string"); return ListItem_typeof(key) === "symbol" ? key : String(key); }
function ListItem_toPrimitive(input, hint) { if (ListItem_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ListItem_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (ListItem_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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





var ListItem = /*#__PURE__*/function (_Button) {
  _inherits(ListItem, _Button);
  var _super = _createSuper(ListItem);
  function ListItem() {
    _classCallCheck(this, ListItem);
    return _super.apply(this, arguments);
  }
  _createClass(ListItem, [{
    key: "_onTextBoxChanged",
    value: function _onTextBoxChanged() {
      this._updateTitle();
      this._updateDescription();
      this._updateTruncation();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updatePrefixLogo();
      this._updateSuffixLogo();
      _get(_getPrototypeOf(ListItem.prototype), "_update", this).call(this);
      this._updateDescription();
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      this._TextWrapper.patch({
        Title: {
          content: this.title,
          style: {
            textStyle: this.style.titleTextStyle
          }
        }
      });
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription() {
      if (this._hasDescription) {
        var descriptionPatch = {
          content: this.description,
          style: {
            textStyle: ListItem_objectSpread(ListItem_objectSpread({}, this.style.descriptionTextStyle), {}, {
              wordWrap: true,
              wordWrapWidth: this._fixedWordWrapWidth
            })
          },
          visible: !this._collapse
        };
        if (!this._Description) {
          descriptionPatch = ListItem_objectSpread({
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_onTextBoxChanged'
            }
          }, descriptionPatch);
        }
        this._TextWrapper.patch({
          Description: descriptionPatch
        });
      } else {
        this._TextWrapper.patch({
          Description: undefined
        });
      }
    }
  }, {
    key: "_updateTruncation",
    value: function _updateTruncation() {
      if (this._Title) {
        this._Title.patch({
          style: {
            textStyle: ListItem_objectSpread(ListItem_objectSpread({}, this.style.titleTextStyle), {}, {
              wordWrap: this.fixed,
              wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
            })
          }
        });
      }
    }
  }, {
    key: "_updatePrefixLogo",
    value: function _updatePrefixLogo() {
      if (this._hasPrefixLogo) {
        this._prefix = this._addLogoProps(this._prefixLogo);
      }
    }
  }, {
    key: "_updateSuffixLogo",
    value: function _updateSuffixLogo() {
      if (this._hasSuffixLogo) {
        this._suffix = this._addLogoProps(this._suffixLogo);
      }
    }
  }, {
    key: "_addLogoProps",
    value: function _addLogoProps(icon) {
      return {
        type: Icon/* default */.Z,
        icon: icon,
        style: ListItem_objectSpread({
          color: undefined
        }, this.style.logoStyle)
      };
    }
  }, {
    key: "_hasPrefixLogo",
    get: function get() {
      return this.prefixLogo;
    }
  }, {
    key: "_hasSuffixLogo",
    get: function get() {
      return this.suffixLogo;
    }
  }, {
    key: "_rowProps",
    get: function get() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem.prototype), "_rowProps", this)), {}, {
        autoResizeHeight: true
      });
    }
  }, {
    key: "_buttonProps",
    get: function get() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem.prototype), "_buttonProps", this)), {}, {
        alpha: this.style.alpha
      });
    }
  }, {
    key: "_hasDescription",
    get: function get() {
      return !!this.description;
    }
  }, {
    key: "_suffixX",
    get: function get() {
      return this.w - this._paddingRight - this._suffixW - this.style.paddingX;
    }
  }, {
    key: "_collapse",
    get: function get() {
      return this.shouldCollapse && !this._isFocusedMode;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      return this.title + this.description + ', List Item';
    },
    set: function set(announce) {
      _set(_getPrototypeOf(ListItem.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ListItem';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ListItem_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem), "_template", this).call(this)), {}, {
        justify: 'left',
        fixed: true,
        Content: ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem), "_template", this).call(this).Content), {}, {
          TextWrapper: {
            mountY: 0.5,
            flex: {
              direction: 'column'
            },
            Title: {
              type: TextBox/* default */.Z,
              signals: {
                textBoxChanged: '_onTextBoxChanged'
              }
            }
          }
        })
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "properties", this)), ['description', 'prefixLogo', 'suffixLogo', 'shouldCollapse']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'titlePadding',
        curr: 'contentSpacing'
      }];
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "tags", this)), [{
        name: 'Description',
        path: 'Content.TextWrapper.Description'
      }]);
    }
  }]);
  return ListItem;
}(Button/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Radio/Radio.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Radio)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Radio/Radio.styles.js
var Radio_styles_namespaceObject = {};
__webpack_require__.r(Radio_styles_namespaceObject);
__webpack_require__.d(Radio_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.styles.js
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
    alpha: theme.alpha.primary,
    width: size,
    height: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2,
    strokeWidth: theme.stroke.sm
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      backgroundColor: theme.color.fillInverseSecondary,
      backgroundColorChecked: theme.color.fillNeutral,
      knobColor: theme.color.fillInverse,
      strokeColor: theme.color.strokeNeutralSecondary
    },
    inverse: {
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillInverse,
      knobColor: theme.color.fillNeutral,
      strokeColor: theme.color.strokeInverseSecondary
    },
    brand: {
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillBrand,
      knobColor: theme.color.fillInverse,
      strokeColor: theme.color.strokeNeutralSecondary
    }
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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




var Radio = /*#__PURE__*/function (_Base) {
  _inherits(Radio, _Base);
  var _super = _createSuper(Radio);
  function Radio() {
    _classCallCheck(this, Radio);
    return _super.apply(this, arguments);
  }
  _createClass(Radio, [{
    key: "_update",
    value: function _update() {
      this._updateBody();
      this._updateStroke();
      this._updateKnob();
      if (this._checkedChanged) {
        this.fireAncestors('$announce', this.announce);
        this._checkedChanged = false;
      }
      this._updateOpacity();
    }
  }, {
    key: "_updateBody",
    value: function _updateBody() {
      var bodyColor = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor;

      // if the inner body should be square, a rounded corner radius can still be applied to the stroke
      var radius = this.style.radius >= this.w / 2 ? (this.w - this.style.strokeWidth - 2) / 2 : 0;
      this._Body.patch({
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        this.w - this.style.strokeWidth * 2 - 2, this.h - this.style.strokeWidth * 2 - 2, radius, null, null, true, bodyColor)
      });
    }
  }, {
    key: "_updateStroke",
    value: function _updateStroke() {
      this._Stroke.patch({
        // Compensating for the extra 2 pixels getRoundRect adds
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.w - 2, this.h - 2, this.style.radius, this.style.strokeWidth, this.style.strokeColor, false)
      });
    }
  }, {
    key: "_updateKnob",
    value: function _updateKnob() {
      this._Knob.patch({
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.style.knobWidth, this.style.knobHeight, this.style.knobWidth / 2, null, null, true, this.style.knobColor)
      });
      this.applySmooth(this._Knob, {
        alpha: this.checked ? 1 : 0
      });
    }
  }, {
    key: "_updateOpacity",
    value: function _updateOpacity() {
      this.applySmooth(this, {
        alpha: this.style.alpha
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
      _set(_getPrototypeOf(Radio.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Radio';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Radio_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      var center = {
        mount: 0.5,
        x: function x(w) {
          return w / 2;
        },
        y: function y(h) {
          return h / 2;
        }
      };
      return {
        Body: _objectSpread(_objectSpread({
          rtt: true
        }, center), {}, {
          Knob: _objectSpread(_objectSpread({}, center), {}, {
            alpha: 0
          })
        }),
        Stroke: center
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Knob', 'Body', 'Stroke'];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['checked'];
    }
  }]);
  return Radio;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-Square.d3aaa87c.png";

/***/ })

}]);
//# sourceMappingURL=components-ListItem-ListItem-stories.0e0c0812.iframe.bundle.js.map