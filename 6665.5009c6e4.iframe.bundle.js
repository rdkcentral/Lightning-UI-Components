"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6665],{

/***/ "../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ MetadataBase_MetadataBase)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.styles.js
var MetadataBase_styles_namespaceObject = {};
__webpack_require__.r(MetadataBase_styles_namespaceObject);
__webpack_require__.d(MetadataBase_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/shaders/FadeShader.js
var FadeShader = __webpack_require__("../../@lightningjs/ui-components/src/shaders/FadeShader.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js
var withMarqueeSync = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withMarqueeSync/index.js
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


/* harmony default export */ const mixins_withMarqueeSync = (withMarqueeSync/* default */.Z);
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.styles.js
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
    descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body2), {}, {
      maxLines: 1
    }),
    fadeWidth: 100,
    logoWidth: theme.typography.body3.lineHeight,
    logoHeight: theme.typography.body3.lineHeight,
    logoPadding: theme.spacer.lg,
    detailsTextStyle: theme.typography.body3,
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline1), {}, {
      maxLines: 1
    }),
    marqueeSync: true,
    alpha: theme.alpha.primary
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      detailsTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      alpha: theme.alpha.inactive
    }
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      titleTextStyle: {
        textColor: theme.color.textNeutral
      },
      detailsTextStyle: {
        textColor: theme.color.textNeutral
      },
      descriptionTextStyle: {
        textColor: theme.color.textNeutralSecondary
      },
      mode: {
        disabled: {
          titleTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          descriptionTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    },
    inverse: {
      titleTextStyle: {
        textColor: theme.color.textInverse
      },
      detailsTextStyle: {
        textColor: theme.color.textInverse
      },
      descriptionTextStyle: {
        textColor: theme.color.textInverseSecondary
      },
      mode: {
        disabled: {
          titleTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          descriptionTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    },
    brand: {
      titleTextStyle: {
        textColor: theme.color.textNeutral
      },
      detailsTextStyle: {
        textColor: theme.color.textNeutral
      },
      descriptionTextStyle: {
        textColor: theme.color.textNeutralSecondary
      },
      mode: {
        disabled: {
          titleTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          },
          descriptionTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.js
function MetadataBase_typeof(o) { "@babel/helpers - typeof"; return MetadataBase_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, MetadataBase_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function MetadataBase_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function MetadataBase_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? MetadataBase_ownKeys(Object(t), !0).forEach(function (r) { MetadataBase_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : MetadataBase_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, MetadataBase_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { MetadataBase_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function MetadataBase_defineProperty(obj, key, value) { key = MetadataBase_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function MetadataBase_toPropertyKey(arg) { var key = MetadataBase_toPrimitive(arg, "string"); return MetadataBase_typeof(key) === "symbol" ? key : String(key); }
function MetadataBase_toPrimitive(input, hint) { if (MetadataBase_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (MetadataBase_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (MetadataBase_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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







var MetadataBase = /*#__PURE__*/function (_Base) {
  _inherits(MetadataBase, _Base);
  var _super = _createSuper(MetadataBase);
  function MetadataBase() {
    _classCallCheck(this, MetadataBase);
    return _super.apply(this, arguments);
  }
  _createClass(MetadataBase, [{
    key: "_init",
    value: function _init() {
      this.requestUpdate(true);
    }
  }, {
    key: "_titleLoaded",
    value: function _titleLoaded() {
      this._updateLayout();
    }
  }, {
    key: "_detailsLoaded",
    value: function _detailsLoaded(_ref) {
      var w = _ref.w,
        h = _ref.h;
      this._updateDetailsLayout({
        w: w,
        h: h
      });
      this._updateLayout();
    }
  }, {
    key: "_descriptionLoaded",
    value: function _descriptionLoaded() {
      this._updateLayout();
    }
  }, {
    key: "_updateDetailsLayout",
    value: function _updateDetailsLayout(_ref2) {
      var w = _ref2.w,
        h = _ref2.h;
      this._DetailsWrapper.alpha = this.style.alpha;
      this._DetailsWrapper.w = w;
      this._DetailsWrapper.h = h;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateLines();
      this._updateLayout();
    }
  }, {
    key: "_updateLines",
    value: function _updateLines() {
      this._Text.w = this._textW();
      this._updateTitle();
      this._updateDetails();
      this._updateDescription();
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      this._updatePositions();
      this._updateMetadataHeight();
      this._updateLogo();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      this._Text.h = this._textH();
      this._Text.x = this.logo && this.logoPosition === 'left' ? this.logoWidth + this.style.logoPadding : 0;
      this._Text.y = (this.h - this._Text.h) / 2;
    }
  }, {
    key: "_updateMetadataHeight",
    value: function _updateMetadataHeight() {
      var newH = Math.max(this.logoHeight, this._Text.h);
      if (this.h !== newH) {
        this.h = newH;
        this.signal('updateComponentDimensions');
      }
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      this._Title.patch({
        content: this.title,
        marquee: this.marquee,
        style: {
          textStyle: MetadataBase_objectSpread(MetadataBase_objectSpread({}, this.style.titleTextStyle), {}, {
            maxLines: 1,
            wordWrap: true,
            wordWrapWidth: this._Text.w
          })
        }
      });
    }
  }, {
    key: "resetMarquee",
    value: function resetMarquee() {
      if (this.marquee) {
        if (this.title) {
          this._Title.toggleMarquee();
        }
        if (this.description) {
          this._Description.toggleMarquee();
        }
      }
    }
  }, {
    key: "_updateDetails",
    value: function _updateDetails() {
      this._Details.patch({
        content: this.details,
        style: {
          textStyle: this.style.detailsTextStyle
        }
      });
      if (this._Details.finalW > this._textW()) {
        this._Details.patch({
          w: this._textW() + this.style.fadeWidth / 2,
          shader: {
            type: FadeShader/* default */.Z,
            positionLeft: 0,
            positionRight: this.style.fadeWidth
          },
          rtt: true
        });
      } else {
        this._DetailsWrapper.shader = undefined;
      }
      this._DetailsWrapper.visible = this.details ? true : false;
      this._DetailsWrapper.alpha = this.style.alpha;
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription() {
      this._Description.patch({
        content: this.description,
        marquee: this.marquee,
        style: {
          textStyle: MetadataBase_objectSpread(MetadataBase_objectSpread({}, this.style.descriptionTextStyle), {}, {
            maxLines: 1,
            wordWrap: true,
            wordWrapWidth: this._Text.w
          })
        }
      });
    }
  }, {
    key: "_updateLogo",
    value: function _updateLogo() {
      this.logoPosition = this.logoPosition || 'right';
      this._Logo.patch({
        type: Icon/* default */.Z,
        w: this.logoWidth,
        h: this.logoHeight,
        icon: this.logo,
        alpha: this.style.alpha
      });
      this._Logo.x = this.logoPosition === 'left' ? 0 : this.w - this._Logo.w;
      this._Logo.y = (this.h - this.logoHeight) / 2;
    }
  }, {
    key: "_textW",
    value: function _textW() {
      return this.w - (this.logo ? this.logoWidth + this.style.logoPadding : 0);
    }
  }, {
    key: "_textH",
    value: function _textH() {
      var titleH = this.title && this._Title && this._Title.h || 0;
      var detailsH = this.details && this._DetailsWrapper && this._DetailsWrapper.h || 0;
      var descriptionH = this.description && this._Description && this._Description.h || 0;
      return titleH + detailsH + descriptionH;
    }
  }, {
    key: "_getLogoWidth",
    value: function _getLogoWidth() {
      return this._logoWidth !== undefined ? this._logoWidth : this.style.logoWidth;
    }
  }, {
    key: "_setLogoWidth",
    value: function _setLogoWidth(w) {
      return w !== undefined ? w : this.logoWidth;
    }
  }, {
    key: "_getLogoHeight",
    value: function _getLogoHeight() {
      return this._logoHeight !== undefined ? this._logoHeight : this.style.logoHeight;
    }
  }, {
    key: "_setLogoHeight",
    value: function _setLogoHeight(h) {
      return h !== undefined ? h : this.logoHeight;
    }
  }, {
    key: "syncArray",
    get: function get() {
      return [].concat(_toConsumableArray(this.title ? [this._Title] : []), _toConsumableArray(this.description ? [this._Description] : []), _toConsumableArray(this.details ? [this._Details] : []));
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Title && this._Title.announce, this._Details && this._Details.announce, this._Description && this._Description.announce, this.logoTitle];
    },
    set: function set(announce) {
      _set(_getPrototypeOf(MetadataBase.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'MetadataBase';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return MetadataBase_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Text: {
          flex: {
            direction: 'column',
            justifyContent: 'flex-start'
          },
          Title: {
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_titleLoaded'
            }
          },
          DetailsWrapper: {
            Details: {
              type: TextBox/* default */.Z,
              signals: {
                textBoxChanged: '_detailsLoaded'
              }
            }
          },
          Description: {
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_descriptionLoaded'
            }
          }
        },
        Logo: {
          flexItem: false,
          type: Icon/* default */.Z
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['description', 'logo', 'logoHeight', 'logoPosition', 'logoTitle', 'logoWidth', 'details', 'title', 'marquee'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Text', {
        name: 'Title',
        path: 'Text.Title'
      }, {
        name: 'DetailsWrapper',
        path: 'Text.DetailsWrapper'
      }, {
        name: 'Details',
        path: 'Text.DetailsWrapper.Details'
      }, {
        name: 'Description',
        path: 'Text.Description'
      }, 'Logo'];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'subtitleTextStyle',
        curr: 'detailsTextStyle'
      }];
    }
  }, {
    key: "aliasProperties",
    get: function get() {
      return [{
        prev: 'subtitle',
        curr: 'details'
      }];
    }
  }]);
  return MetadataBase;
}(Base/* default */.Z);
/* harmony default export */ const MetadataBase_MetadataBase = (mixins_withMarqueeSync(MetadataBase));

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ withMarqueeSync)
/* harmony export */ });
/* harmony import */ var _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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


/**
 * apply to a component to synchronize the marquee scroll
 * timing of child TextBox components. Target class must
 * have a `get syncArray` property, which contains an
 * array of the tags of all TextBoxes to be synchronized.
 *
 * @param {*} Base class to be extended
 * @returns class with marquee sync functionality
 */
function withMarqueeSync(Base) {
  return /*#__PURE__*/function (_Base) {
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_init",
      value: function _init() {
        // use _init instead of _construct to ensure elements exist before running setup
        _get(_getPrototypeOf(_class.prototype), "_init", this).call(this);
        if (this._shouldSync) {
          this._updateSignals();
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        _get(_getPrototypeOf(_class.prototype), "_update", this).call(this);
        if (this._shouldSync) {
          this._updateSignals();
        } else {
          this._cleanupSyncValues();
        }
      }
    }, {
      key: "_cleanupSyncValues",
      value: function _cleanupSyncValues() {
        this.syncArray.map(function (component) {
          component.marqueeOverrideLoopX = undefined;
          component.signals && component.signals.willMarquee && delete component.signals.willMarquee;
        });
      }
    }, {
      key: "_updateSignals",
      value: function _updateSignals() {
        if (this.syncArray) {
          this.syncArray.map(function (component) {
            // preserve signals set in Base class
            component.signals = _objectSpread(_objectSpread({}, component.signals), {}, {
              willMarquee: '_willMarquee'
            });
          });
        }
      }
    }, {
      key: "_willMarquee",
      value: function _willMarquee(compRef) {
        var _this = this;
        if (this._shouldSync) {
          this._longestMarqueeWidth = Math.max(compRef._textRenderedW || 0, this._longestMarqueeWidth || 0);
          this.syncArray.map(function (component) {
            component.marqueeOverrideLoopX = _this._longestMarqueeWidth;
          });
        }
      }
    }, {
      key: "_shouldSync",
      get: function get() {
        if (this.style.marqueeSync === false) {
          // only fail this case if explicitly false
          return false;
        }
        if (!this.syncArray) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.warn('warning: components using MarqueeSync must have a syncArray getter defined.');
          return false;
        } else if (!Array.isArray(this.syncArray)) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.warn('warning: syncArray must be typeof array.');
          return false;
        } else if (this.syncArray.length < 2) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.warn('warning: syncArray must contain at least two component references.');
          return false;
        } else {
          return true;
        }
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }]);
    return _class;
  }(Base);
}

/***/ })

}]);
//# sourceMappingURL=6665.5009c6e4.iframe.bundle.js.map