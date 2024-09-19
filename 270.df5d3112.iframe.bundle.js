"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[270],{

/***/ "../../@lightningjs/ui-components/src/components/Card/CardSection.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CardSection: () => (/* binding */ CardSection),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ CardSection_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Card/CardSection.styles.js
var CardSection_styles_namespaceObject = {};
__webpack_require__.r(CardSection_styles_namespaceObject);
__webpack_require__.d(CardSection_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Card/Card.js + 1 modules
var Card = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardSection.styles.js
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
    height: theme.spacer.xxl * 5,
    iconWidth: theme.spacer.xxl,
    iconHeight: theme.spacer.xxl,
    width: utils/* default.getWidthByColumnSpan */.Ay.getWidthByColumnSpan(theme, 3)
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardSection.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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




var CardSection_CardSection = /*#__PURE__*/function (_Card) {
  _inherits(CardSection, _Card);
  var _super = _createSuper(CardSection);
  function CardSection() {
    _classCallCheck(this, CardSection);
    return _super.apply(this, arguments);
  }
  _createClass(CardSection, [{
    key: "_update",
    value: function _update() {
      _get(_getPrototypeOf(CardSection.prototype), "_update", this).call(this);
      this._updateIcon();
    }
  }, {
    key: "_updateIcon",
    value: function _updateIcon() {
      var _this$style = this.style,
        iconWidth = _this$style.iconWidth,
        iconHeight = _this$style.iconHeight;
      var iconObject = {
        w: iconWidth,
        h: iconHeight,
        icon: this.iconSrc,
        x: this.w - iconWidth - this.style.paddingHorizontal,
        y: (this._Title.style.textStyle.lineHeight - iconHeight) / 2 + this.style.paddingVertical
      };
      if (!this._Icon) {
        iconObject.type = Icon/* default */.A;
      }
      this.patch({
        Icon: iconObject
      });
    }
  }, {
    key: "_calculateTextWidth",
    value: function _calculateTextWidth() {
      var textWidth = this.w - this.style.paddingHorizontal * 2;
      return this.iconSrc ? textWidth - this.iconWidth : textWidth;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardSection';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardSection_styles_namespaceObject;
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardSection), "tags", this)), ['Icon']);
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardSection), "properties", this)), ['iconWidth', 'iconHeight', 'iconSrc']);
    }
  }]);
  return CardSection;
}(Card/* default */.A);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_check_circle_outline_inverse_24.png
const ic_check_circle_outline_inverse_24_namespaceObject = __webpack_require__.p + "static/media/ic_check_circle_outline_inverse_24.fa707615.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var docs_utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardSection.stories.js
function CardSection_stories_typeof(o) {
  "@babel/helpers - typeof";

  return CardSection_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, CardSection_stories_typeof(o);
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
  key = CardSection_stories_toPropertyKey(key);
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
function CardSection_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function CardSection_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, CardSection_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function CardSection_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) CardSection_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) CardSection_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function CardSection_stories_toPropertyKey(t) {
  var i = CardSection_stories_toPrimitive(t, "string");
  return "symbol" == CardSection_stories_typeof(i) ? i : String(i);
}
function CardSection_stories_toPrimitive(t, r) {
  if ("object" != CardSection_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != CardSection_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function CardSection_stories_inherits(subClass, superClass) {
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
  if (superClass) CardSection_stories_setPrototypeOf(subClass, superClass);
}
function CardSection_stories_setPrototypeOf(o, p) {
  CardSection_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return CardSection_stories_setPrototypeOf(o, p);
}
function CardSection_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = CardSection_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = CardSection_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = CardSection_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return CardSection_stories_possibleConstructorReturn(this, result);
  };
}
function CardSection_stories_possibleConstructorReturn(self, call) {
  if (call && (CardSection_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return CardSection_stories_assertThisInitialized(self);
}
function CardSection_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function CardSection_stories_isNativeReflectConstruct() {
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
function CardSection_stories_getPrototypeOf(o) {
  CardSection_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return CardSection_stories_getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as CardSectionComponent } from './CardSection';\nimport sectionIcon from '../../assets/images/ic_check_circle_outline_inverse_24.png';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Card/CardSection'\n};\n\nexport const CardSection = () =>\n  class CardSection extends lng.Component {\n    static _template() {\n      return {\n        Card: {\n          type: CardSectionComponent\n        }\n      };\n    }\n  };\n\nCardSection.args = {\n  iconSrc: sectionIcon,\n  title: 'Section',\n  mode: 'focused'\n};\n\nCardSection.argTypes = {\n  ...createModeControl({ summaryValue: CardSection.args.mode }),\n  iconSrc: {\n    control: 'select',\n    options: [sectionIcon, 'null'],\n    description: 'Icon source',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nCardSection.storyName = 'CardSection';\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "CardSection": {
    "startLoc": {
      "col": 27,
      "line": 28
    },
    "endLoc": {
      "col": 3,
      "line": 37
    },
    "startBody": {
      "col": 27,
      "line": 28
    },
    "endBody": {
      "col": 3,
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





/* harmony default export */ const CardSection_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as CardSectionComponent } from './CardSection';\nimport sectionIcon from '../../assets/images/ic_check_circle_outline_inverse_24.png';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Card/CardSection'\n};\n\nexport const CardSection = () =>\n  class CardSection extends lng.Component {\n    static _template() {\n      return {\n        Card: {\n          type: CardSectionComponent\n        }\n      };\n    }\n  };\n\nCardSection.args = {\n  iconSrc: sectionIcon,\n  title: 'Section',\n  mode: 'focused'\n};\n\nCardSection.argTypes = {\n  ...createModeControl({ summaryValue: CardSection.args.mode }),\n  iconSrc: {\n    control: 'select',\n    options: [sectionIcon, 'null'],\n    description: 'Icon source',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\nCardSection.storyName = 'CardSection';\n",
      "locationsMap": {
        "card-section": {
          "startLoc": {
            "col": 27,
            "line": 28
          },
          "endLoc": {
            "col": 3,
            "line": 37
          },
          "startBody": {
            "col": 27,
            "line": 28
          },
          "endBody": {
            "col": 3,
            "line": 37
          }
        }
      }
    }
  },
  title: 'Components/Card/CardSection'
});
var CardSection = function CardSection() {
  return /*#__PURE__*/function (_lng$Component) {
    CardSection_stories_inherits(CardSection, _lng$Component);
    var _super = CardSection_stories_createSuper(CardSection);
    function CardSection() {
      CardSection_stories_classCallCheck(this, CardSection);
      return _super.apply(this, arguments);
    }
    CardSection_stories_createClass(CardSection, null, [{
      key: "_template",
      value: function _template() {
        return {
          Card: {
            type: CardSection_CardSection
          }
        };
      }
    }]);
    return CardSection;
  }(lightning_esm/* default */.A.Component);
};
CardSection.args = {
  iconSrc: ic_check_circle_outline_inverse_24_namespaceObject,
  title: 'Section',
  mode: 'focused'
};
CardSection.argTypes = _objectSpread(_objectSpread({}, (0,docs_utils/* createModeControl */.Pg)({
  summaryValue: CardSection.args.mode
})), {}, {
  iconSrc: {
    control: 'select',
    options: [ic_check_circle_outline_inverse_24_namespaceObject, 'null'],
    description: 'Icon source',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
});
CardSection.storyName = 'CardSection';
CardSection.parameters = {
  ...CardSection.parameters,
  docs: {
    ...CardSection.parameters?.docs,
    source: {
      originalSource: "() => class CardSection extends lng.Component {\n  static _template() {\n    return {\n      Card: {\n        type: CardSectionComponent\n      }\n    };\n  }\n}",
      ...CardSection.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["CardSection"];

/***/ })

}]);
//# sourceMappingURL=270.df5d3112.iframe.bundle.js.map