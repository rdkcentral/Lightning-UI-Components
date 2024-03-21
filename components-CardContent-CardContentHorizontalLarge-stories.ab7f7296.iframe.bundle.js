"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5875,2494,9140,95,7883,4390,1819,8152,4497,5748,7309,120,3929,9718,4804,6598,7613,1325,8869],{

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
function CardContentHorizontalLarge_stories_typeof(o) {
  "@babel/helpers - typeof";

  return CardContentHorizontalLarge_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, CardContentHorizontalLarge_stories_typeof(o);
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
  key = CardContentHorizontalLarge_stories_toPropertyKey(key);
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
function CardContentHorizontalLarge_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function CardContentHorizontalLarge_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, CardContentHorizontalLarge_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function CardContentHorizontalLarge_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) CardContentHorizontalLarge_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) CardContentHorizontalLarge_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function CardContentHorizontalLarge_stories_toPropertyKey(t) {
  var i = CardContentHorizontalLarge_stories_toPrimitive(t, "string");
  return "symbol" == CardContentHorizontalLarge_stories_typeof(i) ? i : String(i);
}
function CardContentHorizontalLarge_stories_toPrimitive(t, r) {
  if ("object" != CardContentHorizontalLarge_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != CardContentHorizontalLarge_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function CardContentHorizontalLarge_stories_inherits(subClass, superClass) {
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
  if (superClass) CardContentHorizontalLarge_stories_setPrototypeOf(subClass, superClass);
}
function CardContentHorizontalLarge_stories_setPrototypeOf(o, p) {
  CardContentHorizontalLarge_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return CardContentHorizontalLarge_stories_setPrototypeOf(o, p);
}
function CardContentHorizontalLarge_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = CardContentHorizontalLarge_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = CardContentHorizontalLarge_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = CardContentHorizontalLarge_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return CardContentHorizontalLarge_stories_possibleConstructorReturn(this, result);
  };
}
function CardContentHorizontalLarge_stories_possibleConstructorReturn(self, call) {
  if (call && (CardContentHorizontalLarge_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return CardContentHorizontalLarge_stories_assertThisInitialized(self);
}
function CardContentHorizontalLarge_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function CardContentHorizontalLarge_stories_isNativeReflectConstruct() {
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
function CardContentHorizontalLarge_stories_getPrototypeOf(o) {
  CardContentHorizontalLarge_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return CardContentHorizontalLarge_stories_getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { default as CardContentHorizontalLargeComponent } from './CardContentHorizontalLarge';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\nimport { CardContent } from './CardContent.stories';\nimport { controlDescriptions } from '../../docs/constants';\n\nexport default {\n  title: 'Components/CardContent/CardContentHorizontalLarge'\n};\n\nexport const CardContentHorizontalLarge = args =>\n  class CardContentHorizontalLarge extends lng.Component {\n    static _template() {\n      return {\n        CardContentHorizontalLarge: {\n          type: CardContentHorizontalLargeComponent,\n          src: tileImage,\n          shouldCollapse: args.shouldCollapse,\n          collapseToMetadata: args.collapseToMetadata,\n          metadata: {\n            provider: {\n              providers: [\n                {\n                  type: Icon,\n                  w: 96,\n                  h: 48,\n                  icon: xfinityLogo\n                }\n              ],\n              visibleCount: 3\n            }\n          }\n        }\n      };\n    }\n  };\nCardContentHorizontalLarge.args = {\n  collapseToMetadata: false,\n  mode: 'focused',\n  ...CardContent.args\n};\nCardContentHorizontalLarge.argTypes = {\n  ...createModeControl({ summaryValue: CardContentHorizontalLarge.args.mode }),\n  collapseToMetadata: {\n    control: 'boolean',\n    description: controlDescriptions.collapseToMetadata,\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  ...CardContent.argTypes\n};\nCardContentHorizontalLarge.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentHorizontalLarge')\n};\n\ngenerateSubStory({\n  componentName: 'CardContentHorizontalLarge',\n  baseStory: CardContentHorizontalLarge,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'descriptionDetails', 'details']\n});\n\nCardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "CardContentHorizontalLarge": {
    "startLoc": {
      "col": 42,
      "line": 33
    },
    "endLoc": {
      "col": 3,
      "line": 58
    },
    "startBody": {
      "col": 42,
      "line": 33
    },
    "endBody": {
      "col": 3,
      "line": 58
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport tileImage from '../../assets/images/tile-image.png';\nimport { MetadataCardContent as MetadataStory } from '../MetadataCardContent/MetadataCardContent.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { default as CardContentHorizontalLargeComponent } from './CardContentHorizontalLarge';\nimport { default as Icon } from '../Icon';\nimport xfinityLogo from '../../assets/images/Xfinity-Provider-Logo-2x1.png';\nimport { CardContent } from './CardContent.stories';\nimport { controlDescriptions } from '../../docs/constants';\n\nexport default {\n  title: 'Components/CardContent/CardContentHorizontalLarge'\n};\n\nexport const CardContentHorizontalLarge = args =>\n  class CardContentHorizontalLarge extends lng.Component {\n    static _template() {\n      return {\n        CardContentHorizontalLarge: {\n          type: CardContentHorizontalLargeComponent,\n          src: tileImage,\n          shouldCollapse: args.shouldCollapse,\n          collapseToMetadata: args.collapseToMetadata,\n          metadata: {\n            provider: {\n              providers: [\n                {\n                  type: Icon,\n                  w: 96,\n                  h: 48,\n                  icon: xfinityLogo\n                }\n              ],\n              visibleCount: 3\n            }\n          }\n        }\n      };\n    }\n  };\nCardContentHorizontalLarge.args = {\n  collapseToMetadata: false,\n  mode: 'focused',\n  ...CardContent.args\n};\nCardContentHorizontalLarge.argTypes = {\n  ...createModeControl({ summaryValue: CardContentHorizontalLarge.args.mode }),\n  collapseToMetadata: {\n    control: 'boolean',\n    description: controlDescriptions.collapseToMetadata,\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  ...CardContent.argTypes\n};\nCardContentHorizontalLarge.parameters = {\n  argActions: CardContent.tileProps.argActions('CardContentHorizontalLarge')\n};\n\ngenerateSubStory({\n  componentName: 'CardContentHorizontalLarge',\n  baseStory: CardContentHorizontalLarge,\n  subStory: MetadataStory,\n  targetProperty: 'metadata',\n  include: ['title', 'description', 'descriptionDetails', 'details']\n});\n\nCardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';\n",
      "locationsMap": {
        "card-content-horizontal-large": {
          "startLoc": {
            "col": 42,
            "line": 33
          },
          "endLoc": {
            "col": 3,
            "line": 58
          },
          "startBody": {
            "col": 42,
            "line": 33
          },
          "endBody": {
            "col": 3,
            "line": 58
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
  include: ['title', 'description', 'descriptionDetails', 'details']
});
CardContentHorizontalLarge.storyName = 'CardContentHorizontalLarge';
CardContentHorizontalLarge.parameters = {
  ...CardContentHorizontalLarge.parameters,
  docs: {
    ...CardContentHorizontalLarge.parameters?.docs,
    source: {
      originalSource: "args => class CardContentHorizontalLarge extends lng.Component {\n  static _template() {\n    return {\n      CardContentHorizontalLarge: {\n        type: CardContentHorizontalLargeComponent,\n        src: tileImage,\n        shouldCollapse: args.shouldCollapse,\n        collapseToMetadata: args.collapseToMetadata,\n        metadata: {\n          provider: {\n            providers: [{\n              type: Icon,\n              w: 96,\n              h: 48,\n              icon: xfinityLogo\n            }],\n            visibleCount: 3\n          }\n        }\n      }\n    };\n  }\n}",
      ...CardContentHorizontalLarge.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["CardContentHorizontalLarge"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/CardContent/CardContentHorizontal.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ CardContentHorizontal)
/* harmony export */ });
/* harmony import */ var _CardContent_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.styles.js");
/* harmony import */ var _CardContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/CardContent/CardContent.js");
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
      return _CardContent_styles__WEBPACK_IMPORTED_MODULE_0__;
    }
  }]);
  return CardContentHorizontal;
}(_CardContent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);


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


/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-2x1.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-2x1.257f7e9d.png";

/***/ })

}]);
//# sourceMappingURL=components-CardContent-CardContentHorizontalLarge-stories.ab7f7296.iframe.bundle.js.map