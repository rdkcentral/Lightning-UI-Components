"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[295],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardContentVertical: () => (/* binding */ CardContentVertical),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
/* harmony import */ var _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _CardContentVertical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png");
/* harmony import */ var _CardContent_stories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _CardContentVertical$, _CardContentVertical$2;
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
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport CardContentVerticalComponent from './CardContentVertical';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\nimport { CardContent } from './CardContent.stories';\n\nexport default {\n  title: 'Components/CardContent/CardContentVertical'\n};\n\nexport const CardContentVertical = args =>\n  class CardContentVertical extends lng.Component {\n    static _template() {\n      return {\n        CardContentVertical: {\n          type: CardContentVerticalComponent,\n          src: tileImage,\n          shouldCollapse: args.shouldCollapse,\n          metadata: {\n            provider: {\n              providers: [\n                {\n                  type: Icon,\n                  w: 96,\n                  h: 48,\n                  icon: xfinityLogo\n                }\n              ]\n            }\n          }\n        }\n      };\n    }\n  };\nCardContentVertical.args = {\n  mode: 'focused',\n  ...CardContent.args\n};\nCardContentVertical.argTypes = {\n  ...createModeControl({ summaryValue: 'focused' }),\n  ...CardContent.argTypes\n};\n\nCardContentVertical.storyName = 'CardContentVertical';\nCardContentVertical.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentVertical')\n};\n\ngenerateSubStory({\n  componentName: 'CardContentVertical',\n  baseStory: CardContentVertical,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'details']\n});\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "CardContentVertical": {
    "startLoc": {
      "col": 35,
      "line": 30
    },
    "endLoc": {
      "col": 1,
      "line": 50
    },
    "startBody": {
      "col": 35,
      "line": 30
    },
    "endBody": {
      "col": 1,
      "line": 50
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport CardContentVerticalComponent from './CardContentVertical';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\nimport { CardContent } from './CardContent.stories';\nexport default {\n  title: 'Components/CardContent/CardContentVertical'\n};\nexport const CardContentVertical = args => class CardContentVertical extends lng.Component {\n  static _template() {\n    return {\n      CardContentVertical: {\n        type: CardContentVerticalComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse,\n        metadata: {\n          provider: {\n            providers: [{\n              type: Icon,\n              w: 96,\n              h: 48,\n              icon: xfinityLogo\n            }]\n          }\n        }\n      }\n    };\n  }\n};\nCardContentVertical.args = {\n  mode: 'focused',\n  ...CardContent.args\n};\nCardContentVertical.argTypes = {\n  ...createModeControl({\n    summaryValue: 'focused'\n  }),\n  ...CardContent.argTypes\n};\nCardContentVertical.storyName = 'CardContentVertical';\nCardContentVertical.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentVertical')\n};\ngenerateSubStory({\n  componentName: 'CardContentVertical',\n  baseStory: CardContentVertical,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'details']\n});\nCardContentVertical.parameters = {\n  ...CardContentVertical.parameters,\n  docs: {\n    ...CardContentVertical.parameters?.docs,\n    source: {\n      originalSource: \"args => class CardContentVertical extends lng.Component {\\n  static _template() {\\n    return {\\n      CardContentVertical: {\\n        type: CardContentVerticalComponent,\\n        src: tileImage,\\n        shouldCollapse: args.shouldCollapse,\\n        metadata: {\\n          provider: {\\n            providers: [{\\n              type: Icon,\\n              w: 96,\\n              h: 48,\\n              icon: xfinityLogo\\n            }]\\n          }\\n        }\\n      }\\n    };\\n  }\\n}\",\n      ...CardContentVertical.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "card-content-vertical": {
          "startLoc": {
            "col": 35,
            "line": 30
          },
          "endLoc": {
            "col": 1,
            "line": 50
          },
          "startBody": {
            "col": 35,
            "line": 30
          },
          "endBody": {
            "col": 1,
            "line": 50
          }
        }
      }
    }
  },
  title: 'Components/CardContent/CardContentVertical'
});
var CardContentVertical = function CardContentVertical(args) {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(CardContentVertical, _lng$Component);
    var _super = _createSuper(CardContentVertical);
    function CardContentVertical() {
      _classCallCheck(this, CardContentVertical);
      return _super.apply(this, arguments);
    }
    _createClass(CardContentVertical, null, [{
      key: "_template",
      value: function _template() {
        return {
          CardContentVertical: {
            type: _CardContentVertical__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
            src: _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_2__,
            shouldCollapse: args.shouldCollapse,
            metadata: {
              provider: {
                providers: [{
                  type: _Icon__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                  w: 96,
                  h: 48,
                  icon: _assets_images_Xfinity_Provider_Logo_2x1_png__WEBPACK_IMPORTED_MODULE_4__
                }]
              }
            }
          }
        };
      }
    }]);
    return CardContentVertical;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
CardContentVertical.args = _objectSpread({
  mode: 'focused'
}, _CardContent_stories__WEBPACK_IMPORTED_MODULE_5__.CardContent.args);
CardContentVertical.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .createModeControl */ .Ys)({
  summaryValue: 'focused'
})), _CardContent_stories__WEBPACK_IMPORTED_MODULE_5__.CardContent.argTypes);
CardContentVertical.storyName = 'CardContentVertical';
CardContentVertical.parameters = {
  argActions: _CardContent_stories__WEBPACK_IMPORTED_MODULE_5__.CardContent.tileProps.argActions('CardContentVertical')
};
(0,_docs_utils__WEBPACK_IMPORTED_MODULE_6__/* .generateSubStory */ .p9)({
  componentName: 'CardContentVertical',
  baseStory: CardContentVertical,
  subStory: _MetadataCardContent_MetadataCardContent_stories__WEBPACK_IMPORTED_MODULE_7__.MetadataCardContent,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});
CardContentVertical.parameters = _objectSpread(_objectSpread({}, CardContentVertical.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CardContentVertical$ = CardContentVertical.parameters) === null || _CardContentVertical$ === void 0 ? void 0 : _CardContentVertical$.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class CardContentVertical extends lng.Component {\n  static _template() {\n    return {\n      CardContentVertical: {\n        type: CardContentVerticalComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse,\n        metadata: {\n          provider: {\n            providers: [{\n              type: Icon,\n              w: 96,\n              h: 48,\n              icon: xfinityLogo\n            }]\n          }\n        }\n      }\n    };\n  }\n}"
    }, (_CardContentVertical$2 = CardContentVertical.parameters) === null || _CardContentVertical$2 === void 0 || (_CardContentVertical$2 = _CardContentVertical$2.docs) === null || _CardContentVertical$2 === void 0 ? void 0 : _CardContentVertical$2.source)
  })
});
var __namedExportsOrder = ["CardContentVertical"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CardContentVertical)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.styles.js
var CardContentVertical_styles_namespaceObject = {};
__webpack_require__.r(CardContentVertical_styles_namespaceObject);
__webpack_require__.d(CardContentVertical_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.styles.js
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
    expandedWidth: utils/* default.getWidthByUpCount */.ZP.getWidthByUpCount(theme, 4),
    expandedHeight: utils/* default.getDimensions */.ZP.getDimensions(theme, {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    }).h + theme.spacer.xxxl * 7 + theme.spacer.lg + theme.spacer.xxs,
    metadata: {
      descriptionTextStyle: {
        maxLines: 3
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContent.js
var CardContent = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js
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



var CardContentVertical = /*#__PURE__*/function (_CardContent) {
  _inherits(CardContentVertical, _CardContent);
  var _super = _createSuper(CardContentVertical);
  function CardContentVertical() {
    _classCallCheck(this, CardContentVertical);
    return _super.apply(this, arguments);
  }
  _createClass(CardContentVertical, [{
    key: "_init",
    value: function _init() {
      this._orientation = 'vertical';
      _get(_getPrototypeOf(CardContentVertical.prototype), "_init", this).call(this);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContentVertical';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardContentVertical_styles_namespaceObject;
    }
  }]);
  return CardContentVertical;
}(CardContent/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-2x1.257f7e9d.png";

/***/ })

}]);
//# sourceMappingURL=components-CardContent-CardContentVertical-stories.5ce4c506.iframe.bundle.js.map