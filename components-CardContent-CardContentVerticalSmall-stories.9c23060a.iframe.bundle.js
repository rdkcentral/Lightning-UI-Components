"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5187],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CardContentVerticalSmall: () => (/* binding */ CardContentVerticalSmall),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ CardContentVerticalSmall_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.styles.js
var CardContentVerticalSmall_styles_namespaceObject = {};
__webpack_require__.r(CardContentVerticalSmall_styles_namespaceObject);
__webpack_require__.d(CardContentVerticalSmall_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/tile-image.png
var tile_image = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js
var MetadataCardContent_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var src_utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.styles.js
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
    expandedHeight: src_utils/* default.getDimensions */.ZP.getDimensions(theme, {
      ratioX: 16,
      ratioY: 9,
      upCount: 4
    }).h + theme.spacer.md * 14,
    metadata: {
      descriptionTextStyle: {
        maxLines: 1
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js + 1 modules
var CardContentVertical = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContentVertical.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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



var CardContentVerticalSmall_CardContentVerticalSmall = /*#__PURE__*/function (_CardContentVertical) {
  _inherits(CardContentVerticalSmall, _CardContentVertical);
  var _super = _createSuper(CardContentVerticalSmall);
  function CardContentVerticalSmall() {
    _classCallCheck(this, CardContentVerticalSmall);
    return _super.apply(this, arguments);
  }
  _createClass(CardContentVerticalSmall, [{
    key: "_setMetadata",
    value: function _setMetadata(metadata) {
      return _objectSpread(_objectSpread({}, metadata), {}, {
        details: undefined,
        provider: undefined
      });
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContentVerticalSmall';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardContentVerticalSmall_styles_namespaceObject;
    }
  }]);
  return CardContentVerticalSmall;
}(CardContentVertical/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js
var CardContent_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentVerticalSmall.stories.js
function CardContentVerticalSmall_stories_typeof(o) { "@babel/helpers - typeof"; return CardContentVerticalSmall_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CardContentVerticalSmall_stories_typeof(o); }
var _CardContentVerticalS, _CardContentVerticalS2;
function CardContentVerticalSmall_stories_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CardContentVerticalSmall_stories_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CardContentVerticalSmall_stories_ownKeys(Object(t), !0).forEach(function (r) { CardContentVerticalSmall_stories_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CardContentVerticalSmall_stories_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function CardContentVerticalSmall_stories_defineProperty(obj, key, value) { key = CardContentVerticalSmall_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CardContentVerticalSmall_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function CardContentVerticalSmall_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CardContentVerticalSmall_stories_toPropertyKey(descriptor.key), descriptor); } }
function CardContentVerticalSmall_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) CardContentVerticalSmall_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) CardContentVerticalSmall_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function CardContentVerticalSmall_stories_toPropertyKey(arg) { var key = CardContentVerticalSmall_stories_toPrimitive(arg, "string"); return CardContentVerticalSmall_stories_typeof(key) === "symbol" ? key : String(key); }
function CardContentVerticalSmall_stories_toPrimitive(input, hint) { if (CardContentVerticalSmall_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (CardContentVerticalSmall_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function CardContentVerticalSmall_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) CardContentVerticalSmall_stories_setPrototypeOf(subClass, superClass); }
function CardContentVerticalSmall_stories_setPrototypeOf(o, p) { CardContentVerticalSmall_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CardContentVerticalSmall_stories_setPrototypeOf(o, p); }
function CardContentVerticalSmall_stories_createSuper(Derived) { var hasNativeReflectConstruct = CardContentVerticalSmall_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CardContentVerticalSmall_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CardContentVerticalSmall_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CardContentVerticalSmall_stories_possibleConstructorReturn(this, result); }; }
function CardContentVerticalSmall_stories_possibleConstructorReturn(self, call) { if (call && (CardContentVerticalSmall_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return CardContentVerticalSmall_stories_assertThisInitialized(self); }
function CardContentVerticalSmall_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function CardContentVerticalSmall_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function CardContentVerticalSmall_stories_getPrototypeOf(o) { CardContentVerticalSmall_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CardContentVerticalSmall_stories_getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport CardContentVerticalSmallComponent from './CardContentVerticalSmall';\nimport { CardContent } from './CardContent.stories';\n\nexport default {\n  title: 'Components/CardContent/CardContentVerticalSmall'\n};\n\nexport const CardContentVerticalSmall = args =>\n  class CardContentVerticalSmall extends lng.Component {\n    static _template() {\n      return {\n        CardContentVerticalSmall: {\n          type: CardContentVerticalSmallComponent,\n          src: tileImage,\n          shouldCollapse: args.shouldCollapse\n        }\n      };\n    }\n  };\n\nCardContentVerticalSmall.storyName = 'CardContentVerticalSmall';\n\n//Creating a shallow copy of CardContent.args object and removing metadata details property from cardContentArgs\nconst cardContentArgs = { ...CardContent.args };\ndelete cardContentArgs.metadata_details;\n\nCardContentVerticalSmall.args = {\n  mode: 'focused',\n  ...cardContentArgs\n};\n\n//Creating a shallow copy of CardContent.argTypes object and removing metadata details property from cardContentArgsTypes\nconst cardContentArgsTypes = { ...CardContent.argTypes };\ndelete cardContentArgsTypes.metadata_details;\n\nCardContentVerticalSmall.argTypes = {\n  ...createModeControl({ summaryValue: CardContentVerticalSmall.args.mode }),\n  ...cardContentArgsTypes\n};\n\nCardContentVerticalSmall.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentVerticalSmall')\n};\n\ngenerateSubStory({\n  componentName: 'CardContentVerticalSmall',\n  baseStory: CardContentVerticalSmall,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description']\n});\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "CardContentVerticalSmall": {
    "startLoc": {
      "col": 40,
      "line": 28
    },
    "endLoc": {
      "col": 1,
      "line": 38
    },
    "startBody": {
      "col": 40,
      "line": 28
    },
    "endBody": {
      "col": 1,
      "line": 38
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







/* harmony default export */ const CardContentVerticalSmall_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport CardContentVerticalSmallComponent from './CardContentVerticalSmall';\nimport { CardContent } from './CardContent.stories';\nexport default {\n  title: 'Components/CardContent/CardContentVerticalSmall'\n};\nexport const CardContentVerticalSmall = args => class CardContentVerticalSmall extends lng.Component {\n  static _template() {\n    return {\n      CardContentVerticalSmall: {\n        type: CardContentVerticalSmallComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse\n      }\n    };\n  }\n};\nCardContentVerticalSmall.storyName = 'CardContentVerticalSmall';\n\n//Creating a shallow copy of CardContent.args object and removing metadata details property from cardContentArgs\nconst cardContentArgs = {\n  ...CardContent.args\n};\ndelete cardContentArgs.metadata_details;\nCardContentVerticalSmall.args = {\n  mode: 'focused',\n  ...cardContentArgs\n};\n\n//Creating a shallow copy of CardContent.argTypes object and removing metadata details property from cardContentArgsTypes\nconst cardContentArgsTypes = {\n  ...CardContent.argTypes\n};\ndelete cardContentArgsTypes.metadata_details;\nCardContentVerticalSmall.argTypes = {\n  ...createModeControl({\n    summaryValue: CardContentVerticalSmall.args.mode\n  }),\n  ...cardContentArgsTypes\n};\nCardContentVerticalSmall.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentVerticalSmall')\n};\ngenerateSubStory({\n  componentName: 'CardContentVerticalSmall',\n  baseStory: CardContentVerticalSmall,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description']\n});\nCardContentVerticalSmall.parameters = {\n  ...CardContentVerticalSmall.parameters,\n  docs: {\n    ...CardContentVerticalSmall.parameters?.docs,\n    source: {\n      originalSource: \"args => class CardContentVerticalSmall extends lng.Component {\\n  static _template() {\\n    return {\\n      CardContentVerticalSmall: {\\n        type: CardContentVerticalSmallComponent,\\n        src: tileImage,\\n        shouldCollapse: args.shouldCollapse\\n      }\\n    };\\n  }\\n}\",\n      ...CardContentVerticalSmall.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "card-content-vertical-small": {
          "startLoc": {
            "col": 40,
            "line": 28
          },
          "endLoc": {
            "col": 1,
            "line": 38
          },
          "startBody": {
            "col": 40,
            "line": 28
          },
          "endBody": {
            "col": 1,
            "line": 38
          }
        }
      }
    }
  },
  title: 'Components/CardContent/CardContentVerticalSmall'
});
var CardContentVerticalSmall = function CardContentVerticalSmall(args) {
  return /*#__PURE__*/function (_lng$Component) {
    CardContentVerticalSmall_stories_inherits(CardContentVerticalSmall, _lng$Component);
    var _super = CardContentVerticalSmall_stories_createSuper(CardContentVerticalSmall);
    function CardContentVerticalSmall() {
      CardContentVerticalSmall_stories_classCallCheck(this, CardContentVerticalSmall);
      return _super.apply(this, arguments);
    }
    CardContentVerticalSmall_stories_createClass(CardContentVerticalSmall, null, [{
      key: "_template",
      value: function _template() {
        return {
          CardContentVerticalSmall: {
            type: CardContentVerticalSmall_CardContentVerticalSmall,
            src: tile_image,
            shouldCollapse: args.shouldCollapse
          }
        };
      }
    }]);
    return CardContentVerticalSmall;
  }(lightning_esm/* default */.Z.Component);
};
CardContentVerticalSmall.storyName = 'CardContentVerticalSmall';

//Creating a shallow copy of CardContent.args object and removing metadata details property from cardContentArgs
var cardContentArgs = CardContentVerticalSmall_stories_objectSpread({}, CardContent_stories.CardContent.args);
delete cardContentArgs.metadata_details;
CardContentVerticalSmall.args = CardContentVerticalSmall_stories_objectSpread({
  mode: 'focused'
}, cardContentArgs);

//Creating a shallow copy of CardContent.argTypes object and removing metadata details property from cardContentArgsTypes
var cardContentArgsTypes = CardContentVerticalSmall_stories_objectSpread({}, CardContent_stories.CardContent.argTypes);
delete cardContentArgsTypes.metadata_details;
CardContentVerticalSmall.argTypes = CardContentVerticalSmall_stories_objectSpread(CardContentVerticalSmall_stories_objectSpread({}, (0,utils/* createModeControl */.Ys)({
  summaryValue: CardContentVerticalSmall.args.mode
})), cardContentArgsTypes);
CardContentVerticalSmall.parameters = {
  argActions: CardContent_stories.CardContent.tileProps.argActions('CardContentVerticalSmall')
};
(0,utils/* generateSubStory */.p9)({
  componentName: 'CardContentVerticalSmall',
  baseStory: CardContentVerticalSmall,
  subStory: MetadataCardContent_stories.MetadataCardContent,
  targetProperty: 'metadata',
  include: ['title', 'description']
});
CardContentVerticalSmall.parameters = CardContentVerticalSmall_stories_objectSpread(CardContentVerticalSmall_stories_objectSpread({}, CardContentVerticalSmall.parameters), {}, {
  docs: CardContentVerticalSmall_stories_objectSpread(CardContentVerticalSmall_stories_objectSpread({}, (_CardContentVerticalS = CardContentVerticalSmall.parameters) === null || _CardContentVerticalS === void 0 ? void 0 : _CardContentVerticalS.docs), {}, {
    source: CardContentVerticalSmall_stories_objectSpread({
      originalSource: "args => class CardContentVerticalSmall extends lng.Component {\n  static _template() {\n    return {\n      CardContentVerticalSmall: {\n        type: CardContentVerticalSmallComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse\n      }\n    };\n  }\n}"
    }, (_CardContentVerticalS2 = CardContentVerticalSmall.parameters) === null || _CardContentVerticalS2 === void 0 || (_CardContentVerticalS2 = _CardContentVerticalS2.docs) === null || _CardContentVerticalS2 === void 0 ? void 0 : _CardContentVerticalS2.source)
  })
});
var __namedExportsOrder = ["CardContentVerticalSmall"];

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


/***/ })

}]);
//# sourceMappingURL=components-CardContent-CardContentVerticalSmall-stories.9c23060a.iframe.bundle.js.map