"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5875],{

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontalLarge.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CardContentHorizontalLarge: () => (/* binding */ CardContentHorizontalLarge),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ CardContentHorizontalLarge_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontalLarge.styles.js
var CardContentHorizontalLarge_styles_namespaceObject = {};
__webpack_require__.r(CardContentHorizontalLarge_styles_namespaceObject);
__webpack_require__.d(CardContentHorizontalLarge_styles_namespaceObject, {
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
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontalLarge.styles.js
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
  var _utils$getDimensions = src_utils/* default.getDimensions */.ZP.getDimensions(theme, {
      ratioX: 16,
      ratioY: 9,
      upCount: 3
    }),
    w = _utils$getDimensions.w,
    h = _utils$getDimensions.h;
  return {
    expandedWidth: src_utils/* default.getWidthByColumnSpan */.ZP.getWidthByColumnSpan(theme, 8),
    expandedHeight: h,
    imageSize: {
      width: w,
      height: h
    },
    metadata: {
      descriptionTextStyle: {
        maxLines: 3
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.js
var CardContentHorizontal = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontalLarge.js
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



var CardContentHorizontalLarge_CardContentHorizontalLarge = /*#__PURE__*/function (_CardContentHorizonta) {
  _inherits(CardContentHorizontalLarge, _CardContentHorizonta);
  var _super = _createSuper(CardContentHorizontalLarge);
  function CardContentHorizontalLarge() {
    _classCallCheck(this, CardContentHorizontalLarge);
    return _super.apply(this, arguments);
  }
  _createClass(CardContentHorizontalLarge, null, [{
    key: "__componentName",
    get: function get() {
      return 'CardContentHorizontalLarge';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardContentHorizontalLarge_styles_namespaceObject;
    }
  }]);
  return CardContentHorizontalLarge;
}(CardContentHorizontal/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png
var Xfinity_Provider_Logo_2x1 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js
var CardContent_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/constants.js
var constants = __webpack_require__("../../@lightningjs/ui-components/src/docs/constants.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontalLarge.stories.js
function CardContentHorizontalLarge_stories_typeof(o) { "@babel/helpers - typeof"; return CardContentHorizontalLarge_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CardContentHorizontalLarge_stories_typeof(o); }
var _CardContentHorizonta, _CardContentHorizonta2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = CardContentHorizontalLarge_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CardContentHorizontalLarge_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function CardContentHorizontalLarge_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CardContentHorizontalLarge_stories_toPropertyKey(descriptor.key), descriptor); } }
function CardContentHorizontalLarge_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) CardContentHorizontalLarge_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) CardContentHorizontalLarge_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function CardContentHorizontalLarge_stories_toPropertyKey(arg) { var key = CardContentHorizontalLarge_stories_toPrimitive(arg, "string"); return CardContentHorizontalLarge_stories_typeof(key) === "symbol" ? key : String(key); }
function CardContentHorizontalLarge_stories_toPrimitive(input, hint) { if (CardContentHorizontalLarge_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (CardContentHorizontalLarge_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function CardContentHorizontalLarge_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) CardContentHorizontalLarge_stories_setPrototypeOf(subClass, superClass); }
function CardContentHorizontalLarge_stories_setPrototypeOf(o, p) { CardContentHorizontalLarge_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CardContentHorizontalLarge_stories_setPrototypeOf(o, p); }
function CardContentHorizontalLarge_stories_createSuper(Derived) { var hasNativeReflectConstruct = CardContentHorizontalLarge_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CardContentHorizontalLarge_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CardContentHorizontalLarge_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CardContentHorizontalLarge_stories_possibleConstructorReturn(this, result); }; }
function CardContentHorizontalLarge_stories_possibleConstructorReturn(self, call) { if (call && (CardContentHorizontalLarge_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return CardContentHorizontalLarge_stories_assertThisInitialized(self); }
function CardContentHorizontalLarge_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function CardContentHorizontalLarge_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function CardContentHorizontalLarge_stories_getPrototypeOf(o) { CardContentHorizontalLarge_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CardContentHorizontalLarge_stories_getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { default as CardContentHorizontalLargeComponent } from './CardContentHorizontalLarge';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\nimport { CardContent } from './CardContent.stories';\nimport { controlDescriptions } from '../../docs/constants';\n\nexport default {\n  title: 'Components/CardContent/CardContentHorizontalLarge'\n};\n\nexport const CardContentHorizontalLarge = args =>\n  class CardContentHorizontalLarge extends lng.Component {\n    static _template() {\n      return {\n        CardContentHorizontalLarge: {\n          type: CardContentHorizontalLargeComponent,\n          src: tileImage,\n          shouldCollapse: args.shouldCollapse,\n          collapseToMetadata: args.collapseToMetadata,\n          metadata: {\n            provider: {\n              providers: [\n                {\n                  type: Icon,\n                  w: 96,\n                  h: 48,\n                  icon: xfinityLogo\n                }\n              ],\n              visibleCount: 3\n            }\n          }\n        }\n      };\n    }\n  };\nCardContentHorizontalLarge.args = {\n  collapseToMetadata: false,\n  mode: 'focused',\n  ...CardContent.args\n};\nCardContentHorizontalLarge.argTypes = {\n  ...createModeControl({ summaryValue: CardContentHorizontalLarge.args.mode }),\n  collapseToMetadata: {\n    control: 'boolean',\n    description: controlDescriptions.collapseToMetadata,\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  ...CardContent.argTypes\n};\nCardContentHorizontalLarge.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentHorizontalLarge')\n};\n\ngenerateSubStory({\n  componentName: 'CardContentHorizontalLarge',\n  baseStory: CardContentHorizontalLarge,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'details']\n});\n\nCardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "CardContentHorizontalLarge": {
    "startLoc": {
      "col": 42,
      "line": 31
    },
    "endLoc": {
      "col": 1,
      "line": 53
    },
    "startBody": {
      "col": 42,
      "line": 31
    },
    "endBody": {
      "col": 1,
      "line": 53
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










/* harmony default export */ const CardContentHorizontalLarge_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { default as CardContentHorizontalLargeComponent } from './CardContentHorizontalLarge';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\nimport { CardContent } from './CardContent.stories';\nimport { controlDescriptions } from '../../docs/constants';\nexport default {\n  title: 'Components/CardContent/CardContentHorizontalLarge'\n};\nexport const CardContentHorizontalLarge = args => class CardContentHorizontalLarge extends lng.Component {\n  static _template() {\n    return {\n      CardContentHorizontalLarge: {\n        type: CardContentHorizontalLargeComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse,\n        collapseToMetadata: args.collapseToMetadata,\n        metadata: {\n          provider: {\n            providers: [{\n              type: Icon,\n              w: 96,\n              h: 48,\n              icon: xfinityLogo\n            }],\n            visibleCount: 3\n          }\n        }\n      }\n    };\n  }\n};\nCardContentHorizontalLarge.args = {\n  collapseToMetadata: false,\n  mode: 'focused',\n  ...CardContent.args\n};\nCardContentHorizontalLarge.argTypes = {\n  ...createModeControl({\n    summaryValue: CardContentHorizontalLarge.args.mode\n  }),\n  collapseToMetadata: {\n    control: 'boolean',\n    description: controlDescriptions.collapseToMetadata,\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  },\n  ...CardContent.argTypes\n};\nCardContentHorizontalLarge.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentHorizontalLarge')\n};\ngenerateSubStory({\n  componentName: 'CardContentHorizontalLarge',\n  baseStory: CardContentHorizontalLarge,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'details']\n});\nCardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';\nCardContentHorizontalLarge.parameters = {\n  ...CardContentHorizontalLarge.parameters,\n  docs: {\n    ...CardContentHorizontalLarge.parameters?.docs,\n    source: {\n      originalSource: \"args => class CardContentHorizontalLarge extends lng.Component {\\n  static _template() {\\n    return {\\n      CardContentHorizontalLarge: {\\n        type: CardContentHorizontalLargeComponent,\\n        src: tileImage,\\n        shouldCollapse: args.shouldCollapse,\\n        collapseToMetadata: args.collapseToMetadata,\\n        metadata: {\\n          provider: {\\n            providers: [{\\n              type: Icon,\\n              w: 96,\\n              h: 48,\\n              icon: xfinityLogo\\n            }],\\n            visibleCount: 3\\n          }\\n        }\\n      }\\n    };\\n  }\\n}\",\n      ...CardContentHorizontalLarge.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "card-content-horizontal-large": {
          "startLoc": {
            "col": 42,
            "line": 31
          },
          "endLoc": {
            "col": 1,
            "line": 53
          },
          "startBody": {
            "col": 42,
            "line": 31
          },
          "endBody": {
            "col": 1,
            "line": 53
          }
        }
      }
    }
  },
  title: 'Components/CardContent/CardContentHorizontalLarge'
});
var CardContentHorizontalLarge = function CardContentHorizontalLarge(args) {
  return /*#__PURE__*/function (_lng$Component) {
    CardContentHorizontalLarge_stories_inherits(CardContentHorizontalLarge, _lng$Component);
    var _super = CardContentHorizontalLarge_stories_createSuper(CardContentHorizontalLarge);
    function CardContentHorizontalLarge() {
      CardContentHorizontalLarge_stories_classCallCheck(this, CardContentHorizontalLarge);
      return _super.apply(this, arguments);
    }
    CardContentHorizontalLarge_stories_createClass(CardContentHorizontalLarge, null, [{
      key: "_template",
      value: function _template() {
        return {
          CardContentHorizontalLarge: {
            type: CardContentHorizontalLarge_CardContentHorizontalLarge,
            src: tile_image,
            shouldCollapse: args.shouldCollapse,
            collapseToMetadata: args.collapseToMetadata,
            metadata: {
              provider: {
                providers: [{
                  type: Icon/* default */.Z,
                  w: 96,
                  h: 48,
                  icon: Xfinity_Provider_Logo_2x1
                }],
                visibleCount: 3
              }
            }
          }
        };
      }
    }]);
    return CardContentHorizontalLarge;
  }(lightning_esm/* default */.Z.Component);
};
CardContentHorizontalLarge.args = _objectSpread({
  collapseToMetadata: false,
  mode: 'focused'
}, CardContent_stories.CardContent.args);
CardContentHorizontalLarge.argTypes = _objectSpread(_objectSpread({}, (0,utils/* createModeControl */.Ys)({
  summaryValue: CardContentHorizontalLarge.args.mode
})), {}, {
  collapseToMetadata: {
    control: 'boolean',
    description: constants/* controlDescriptions */.oD.collapseToMetadata,
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
}, CardContent_stories.CardContent.argTypes);
CardContentHorizontalLarge.parameters = {
  argActions: CardContent_stories.CardContent.tileProps.argActions('CardContentHorizontalLarge')
};
(0,utils/* generateSubStory */.p9)({
  componentName: 'CardContentHorizontalLarge',
  baseStory: CardContentHorizontalLarge,
  subStory: MetadataCardContent_stories.MetadataCardContent,
  targetProperty: 'metadata',
  include: ['title', 'description', 'details']
});
CardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';
CardContentHorizontalLarge.parameters = _objectSpread(_objectSpread({}, CardContentHorizontalLarge.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_CardContentHorizonta = CardContentHorizontalLarge.parameters) === null || _CardContentHorizonta === void 0 ? void 0 : _CardContentHorizonta.docs), {}, {
    source: _objectSpread({
      originalSource: "args => class CardContentHorizontalLarge extends lng.Component {\n  static _template() {\n    return {\n      CardContentHorizontalLarge: {\n        type: CardContentHorizontalLargeComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse,\n        collapseToMetadata: args.collapseToMetadata,\n        metadata: {\n          provider: {\n            providers: [{\n              type: Icon,\n              w: 96,\n              h: 48,\n              icon: xfinityLogo\n            }],\n            visibleCount: 3\n          }\n        }\n      }\n    };\n  }\n}"
    }, (_CardContentHorizonta2 = CardContentHorizontalLarge.parameters) === null || _CardContentHorizonta2 === void 0 || (_CardContentHorizonta2 = _CardContentHorizonta2.docs) === null || _CardContentHorizonta2 === void 0 ? void 0 : _CardContentHorizonta2.source)
  })
});
var __namedExportsOrder = ["CardContentHorizontalLarge"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CardContentHorizontal)
/* harmony export */ });
/* harmony import */ var _CardContent_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.styles.js");
/* harmony import */ var _CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.js");
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



var CardContentHorizontal = /*#__PURE__*/function (_CardContent) {
  _inherits(CardContentHorizontal, _CardContent);
  var _super = _createSuper(CardContentHorizontal);
  function CardContentHorizontal() {
    _classCallCheck(this, CardContentHorizontal);
    return _super.apply(this, arguments);
  }
  _createClass(CardContentHorizontal, [{
    key: "_init",
    value: function _init() {
      this._orientation = 'horizontal';
      _get(_getPrototypeOf(CardContentHorizontal.prototype), "_init", this).call(this);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardContentHorizontal';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return _CardContent_styles_js__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
  return CardContentHorizontal;
}(_CardContent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-2x1.257f7e9d.png";

/***/ })

}]);
//# sourceMappingURL=components-CardContent-CardContentHorizontalLarge-stories.fbc92d46.iframe.bundle.js.map