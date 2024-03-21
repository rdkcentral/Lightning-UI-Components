"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6639],{

/***/ "../../@lightningjs/ui-components/src/components/Card/CardRadio.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CardRadio: () => (/* binding */ CardRadio),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ CardRadio_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Card/CardRadio.styles.js
var CardRadio_styles_namespaceObject = {};
__webpack_require__.r(CardRadio_styles_namespaceObject);
__webpack_require__.d(CardRadio_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Card/CardTitle.js + 1 modules
var CardTitle = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/CardTitle.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardRadio.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
      textColor: theme.color.textNeutralSecondary,
      wordWrap: true,
      maxLines: 8
    }),
    height: theme.spacer.xxxl * 15,
    subtitleTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
      maxLines: 2,
      textColor: theme.color.textNeutral,
      wordWrap: true
    }),
    width: utils/* default.getWidthByColumnSpan */.ZP.getWidthByColumnSpan(theme, 4)
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      descriptionTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      subtitleTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.js + 1 modules
var Radio = __webpack_require__("../../@lightningjs/ui-components/src/components/Radio/Radio.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardRadio.js
function CardRadio_typeof(o) { "@babel/helpers - typeof"; return CardRadio_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CardRadio_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CardRadio_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CardRadio_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CardRadio_ownKeys(Object(t), !0).forEach(function (r) { CardRadio_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CardRadio_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CardRadio_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { CardRadio_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function CardRadio_defineProperty(obj, key, value) { key = CardRadio_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CardRadio_toPropertyKey(t) { var i = CardRadio_toPrimitive(t, "string"); return "symbol" == CardRadio_typeof(i) ? i : String(i); }
function CardRadio_toPrimitive(t, r) { if ("object" != CardRadio_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CardRadio_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (CardRadio_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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





var CardRadio_CardRadio = /*#__PURE__*/function (_CardTitle) {
  _inherits(CardRadio, _CardTitle);
  var _super = _createSuper(CardRadio);
  function CardRadio() {
    _classCallCheck(this, CardRadio);
    return _super.apply(this, arguments);
  }
  _createClass(CardRadio, [{
    key: "_update",
    value: function _update() {
      _get(_getPrototypeOf(CardRadio.prototype), "_update", this).call(this);
      this._updateRadio();
      this._updateSubtitle();
      this._updatePositions();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      _get(_getPrototypeOf(CardRadio.prototype), "_updatePositions", this).call(this);
      this._updateSubtitlePosition();
    }
  }, {
    key: "_updateSubtitle",
    value: function _updateSubtitle() {
      this._Subtitle.patch({
        content: this.subtitle,
        style: {
          textStyle: CardRadio_objectSpread(CardRadio_objectSpread({}, this.style.subtitleTextStyle), {}, {
            wordWrapWidth: this._calculateTextWidth()
          })
        }
      });
    }
  }, {
    key: "_updateRadio",
    value: function _updateRadio() {
      var radioPatch = CardRadio_objectSpread(CardRadio_objectSpread({}, this.radio), {}, {
        mode: this.mode,
        mountX: 1,
        x: this.w - this.style.paddingHorizontal,
        y: this.style.paddingVertical
      });
      if (!this._Radio) {
        radioPatch.type = Radio/* default */.Z;
      }
      this.patch({
        Radio: radioPatch
      });
    }
  }, {
    key: "_updateSubtitlePosition",
    value: function _updateSubtitlePosition() {
      this._Subtitle.x = this.style.paddingHorizontal;
      this._Subtitle.y = this.style.paddingVertical + this._Title.h;
    }
  }, {
    key: "_updateDescriptionPosition",
    value: function _updateDescriptionPosition() {
      this._Description.x = this.style.paddingHorizontal;
      this._Description.y = this.style.paddingVertical * 2 + this._Title.h + this._Subtitle.h;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Title && this._Title.announce, this._Subtitle && this._Subtitle.announce, this._Description && this._Description.announce, this._Details && this._Details.announce];
    },
    set: function set(announce) {
      _set(_getPrototypeOf(CardRadio.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardRadio';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardRadio_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardRadio), "properties", this)), ['radio', 'subtitle']);
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardRadio), "tags", this)), ['Radio', 'Subtitle']);
    }
  }, {
    key: "_template",
    value: function _template() {
      return CardRadio_objectSpread(CardRadio_objectSpread({}, _get(_getPrototypeOf(CardRadio), "_template", this).call(this)), {}, {
        Subtitle: {
          type: TextBox/* default */.Z,
          signals: {
            textBoxChanged: '_updatePositions'
          }
        }
      });
    }
  }]);
  return CardRadio;
}(CardTitle/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.stories.js
var Radio_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Radio/Radio.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var docs_utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardRadio.stories.js
function CardRadio_stories_typeof(o) {
  "@babel/helpers - typeof";

  return CardRadio_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, CardRadio_stories_typeof(o);
}
function CardRadio_stories_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function CardRadio_stories_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? CardRadio_stories_ownKeys(Object(t), !0).forEach(function (r) {
      CardRadio_stories_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CardRadio_stories_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function CardRadio_stories_defineProperty(obj, key, value) {
  key = CardRadio_stories_toPropertyKey(key);
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
function CardRadio_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function CardRadio_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, CardRadio_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function CardRadio_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) CardRadio_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) CardRadio_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function CardRadio_stories_toPropertyKey(t) {
  var i = CardRadio_stories_toPrimitive(t, "string");
  return "symbol" == CardRadio_stories_typeof(i) ? i : String(i);
}
function CardRadio_stories_toPrimitive(t, r) {
  if ("object" != CardRadio_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != CardRadio_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function CardRadio_stories_inherits(subClass, superClass) {
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
  if (superClass) CardRadio_stories_setPrototypeOf(subClass, superClass);
}
function CardRadio_stories_setPrototypeOf(o, p) {
  CardRadio_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return CardRadio_stories_setPrototypeOf(o, p);
}
function CardRadio_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = CardRadio_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = CardRadio_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = CardRadio_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return CardRadio_stories_possibleConstructorReturn(this, result);
  };
}
function CardRadio_stories_possibleConstructorReturn(self, call) {
  if (call && (CardRadio_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return CardRadio_stories_assertThisInitialized(self);
}
function CardRadio_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function CardRadio_stories_isNativeReflectConstruct() {
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
function CardRadio_stories_getPrototypeOf(o) {
  CardRadio_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return CardRadio_stories_getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as CardRadioComponent } from './CardRadio';\nimport { Radio as RadioStory } from '../Radio/Radio.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Card/CardRadio'\n};\n\nconst description =\n  \"Get Hulu and stream the TV you love, anytime, on your favorite devices. We're talking new TV, classic TV, laugh-your-face-off TV, cry-your-eyes-out TV, and every other kind of TV.  Plus, get Hulu Originals –- shows you can't watch anywhere else -- and movies, docs, kids shows, and more. It's all on Hulu, and it's all waiting for you\";\n\nconst Details =\n  'This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer';\n\nexport const CardRadio = () =>\n  class CardRadio extends lng.Component {\n    static _template() {\n      return {\n        CardRadio: {\n          type: CardRadioComponent\n        }\n      };\n    }\n  };\n\nCardRadio.storyName = 'CardRadio';\n\nCardRadio.args = {\n  title: 'Hulu (ad-supported)',\n  description: description,\n  details: Details,\n  subtitle: '$6.99 per month plus taxes & fees',\n  mode: 'focused'\n};\n\nCardRadio.argTypes = {\n  ...createModeControl({ summaryValue: CardRadio.args.mode }),\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  description: {\n    control: 'text',\n    description: 'Description text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  subtitle: {\n    control: 'text',\n    description: 'subtitle text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  details: {\n    control: 'text',\n    description: 'Details text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'CardRadio',\n  baseStory: CardRadio,\n  subStory: RadioStory,\n  targetProperty: 'radio',\n  include: ['checked']\n});\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "CardRadio": {
    "startLoc": {
      "col": 25,
      "line": 34
    },
    "endLoc": {
      "col": 3,
      "line": 43
    },
    "startBody": {
      "col": 25,
      "line": 34
    },
    "endBody": {
      "col": 3,
      "line": 43
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





/* harmony default export */ const CardRadio_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as CardRadioComponent } from './CardRadio';\nimport { Radio as RadioStory } from '../Radio/Radio.stories';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Card/CardRadio'\n};\n\nconst description =\n  \"Get Hulu and stream the TV you love, anytime, on your favorite devices. We're talking new TV, classic TV, laugh-your-face-off TV, cry-your-eyes-out TV, and every other kind of TV.  Plus, get Hulu Originals –- shows you can't watch anywhere else -- and movies, docs, kids shows, and more. It's all on Hulu, and it's all waiting for you\";\n\nconst Details =\n  'This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer';\n\nexport const CardRadio = () =>\n  class CardRadio extends lng.Component {\n    static _template() {\n      return {\n        CardRadio: {\n          type: CardRadioComponent\n        }\n      };\n    }\n  };\n\nCardRadio.storyName = 'CardRadio';\n\nCardRadio.args = {\n  title: 'Hulu (ad-supported)',\n  description: description,\n  details: Details,\n  subtitle: '$6.99 per month plus taxes & fees',\n  mode: 'focused'\n};\n\nCardRadio.argTypes = {\n  ...createModeControl({ summaryValue: CardRadio.args.mode }),\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  description: {\n    control: 'text',\n    description: 'Description text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  subtitle: {\n    control: 'text',\n    description: 'subtitle text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  details: {\n    control: 'text',\n    description: 'Details text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  }\n};\n\ngenerateSubStory({\n  componentName: 'CardRadio',\n  baseStory: CardRadio,\n  subStory: RadioStory,\n  targetProperty: 'radio',\n  include: ['checked']\n});\n",
      "locationsMap": {
        "card-radio": {
          "startLoc": {
            "col": 25,
            "line": 34
          },
          "endLoc": {
            "col": 3,
            "line": 43
          },
          "startBody": {
            "col": 25,
            "line": 34
          },
          "endBody": {
            "col": 3,
            "line": 43
          }
        }
      }
    }
  },
  title: 'Components/Card/CardRadio'
});
var description = "Get Hulu and stream the TV you love, anytime, on your favorite devices. We're talking new TV, classic TV, laugh-your-face-off TV, cry-your-eyes-out TV, and every other kind of TV.  Plus, get Hulu Originals –- shows you can't watch anywhere else -- and movies, docs, kids shows, and more. It's all on Hulu, and it's all waiting for you";
var Details = 'This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer. This is a sample disclaimer';
var CardRadio = function CardRadio() {
  return /*#__PURE__*/function (_lng$Component) {
    CardRadio_stories_inherits(CardRadio, _lng$Component);
    var _super = CardRadio_stories_createSuper(CardRadio);
    function CardRadio() {
      CardRadio_stories_classCallCheck(this, CardRadio);
      return _super.apply(this, arguments);
    }
    CardRadio_stories_createClass(CardRadio, null, [{
      key: "_template",
      value: function _template() {
        return {
          CardRadio: {
            type: CardRadio_CardRadio
          }
        };
      }
    }]);
    return CardRadio;
  }(lightning_esm/* default */.Z.Component);
};
CardRadio.storyName = 'CardRadio';
CardRadio.args = {
  title: 'Hulu (ad-supported)',
  description: description,
  details: Details,
  subtitle: '$6.99 per month plus taxes & fees',
  mode: 'focused'
};
CardRadio.argTypes = CardRadio_stories_objectSpread(CardRadio_stories_objectSpread({}, (0,docs_utils/* createModeControl */.Ys)({
  summaryValue: CardRadio.args.mode
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
  subtitle: {
    control: 'text',
    description: 'subtitle text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  details: {
    control: 'text',
    description: 'Details text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  }
});
(0,docs_utils/* generateSubStory */.p9)({
  componentName: 'CardRadio',
  baseStory: CardRadio,
  subStory: Radio_stories.Radio,
  targetProperty: 'radio',
  include: ['checked']
});
CardRadio.parameters = {
  ...CardRadio.parameters,
  docs: {
    ...CardRadio.parameters?.docs,
    source: {
      originalSource: "() => class CardRadio extends lng.Component {\n  static _template() {\n    return {\n      CardRadio: {\n        type: CardRadioComponent\n      }\n    };\n  }\n}",
      ...CardRadio.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["CardRadio"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Card/CardTitle.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ CardTitle)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Card/CardTitle.styles.js
var CardTitle_styles_namespaceObject = {};
__webpack_require__.r(CardTitle_styles_namespaceObject);
__webpack_require__.d(CardTitle_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Card/Card.js + 1 modules
var Card = __webpack_require__("../../@lightningjs/ui-components/src/components/Card/Card.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardTitle.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
    // TODO radius from design or token change
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
      wordWrap: true,
      maxLines: 2,
      textColor: theme.color.textNeutral
    }),
    descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
      textColor: theme.color.textNeutral,
      wordWrap: true,
      maxLines: 3
    }),
    detailsTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
      textColor: theme.color.textNeutral,
      wordWrap: true,
      maxLines: 1
    })
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      descriptionTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      detailsTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Card/CardTitle.js
function CardTitle_typeof(o) { "@babel/helpers - typeof"; return CardTitle_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, CardTitle_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function CardTitle_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function CardTitle_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? CardTitle_ownKeys(Object(t), !0).forEach(function (r) { CardTitle_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : CardTitle_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, CardTitle_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { CardTitle_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function CardTitle_defineProperty(obj, key, value) { key = CardTitle_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function CardTitle_toPropertyKey(t) { var i = CardTitle_toPrimitive(t, "string"); return "symbol" == CardTitle_typeof(i) ? i : String(i); }
function CardTitle_toPrimitive(t, r) { if ("object" != CardTitle_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != CardTitle_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (CardTitle_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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




var CardTitle = /*#__PURE__*/function (_Card) {
  _inherits(CardTitle, _Card);
  var _super = _createSuper(CardTitle);
  function CardTitle() {
    _classCallCheck(this, CardTitle);
    return _super.apply(this, arguments);
  }
  _createClass(CardTitle, [{
    key: "_update",
    value: function _update() {
      _get(_getPrototypeOf(CardTitle.prototype), "_update", this).call(this);
      this._updateDescription();
      this._updateDetails();
      this._updatePositions();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      _get(_getPrototypeOf(CardTitle.prototype), "_updatePositions", this).call(this);
      this._updateDescriptionPosition();
      this._updateDetailsPosition();
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription() {
      this._Description.patch({
        content: this.description,
        style: {
          textStyle: CardTitle_objectSpread(CardTitle_objectSpread({}, this.style.descriptionTextStyle), {}, {
            wordWrapWidth: this._calculateTextWidth()
          })
        }
      });
    }
  }, {
    key: "_updateDescriptionPosition",
    value: function _updateDescriptionPosition() {
      this._Description.x = this.style.paddingHorizontal;
      this._Description.y = this.style.paddingVertical + this._Title.h;
    }
  }, {
    key: "_updateDetails",
    value: function _updateDetails() {
      this._Details.patch({
        content: this.details,
        style: {
          textStyle: CardTitle_objectSpread(CardTitle_objectSpread({}, this.style.detailsTextStyle), {}, {
            wordWrapWidth: this._calculateTextWidth()
          })
        }
      });
    }
  }, {
    key: "_updateDetailsPosition",
    value: function _updateDetailsPosition() {
      this._Details.x = this.style.paddingHorizontal;
      this._Details.y = this.h - this.style.paddingVertical;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Title && this._Title.announce, this._Description && this._Description.announce, this._Details && this._Details.announce];
    },
    set: function set(announce) {
      _set(_getPrototypeOf(CardTitle.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'CardTitle';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return CardTitle_styles_namespaceObject;
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardTitle), "tags", this)), ['Description', 'Details']);
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(CardTitle), "properties", this)), ['description', 'details']);
    }
  }, {
    key: "_template",
    value: function _template() {
      return CardTitle_objectSpread(CardTitle_objectSpread({}, _get(_getPrototypeOf(CardTitle), "_template", this).call(this)), {}, {
        Description: {
          type: TextBox/* default */.Z,
          signals: {
            textBoxChanged: '_updatePositions'
          }
        },
        Details: {
          type: TextBox/* default */.Z,
          mountY: 1
        }
      });
    }
  }]);
  return CardTitle;
}(Card/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=6639.32440182.iframe.bundle.js.map