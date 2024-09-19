"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[7679],{

/***/ "../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MetadataBase_MetadataBase)
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


/* harmony default export */ const mixins_withMarqueeSync = (withMarqueeSync/* default */.A);
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
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
      maxLines: 1
    }),
    fadeWidth: 100,
    logoWidth: theme.typography.body3.lineHeight,
    logoHeight: theme.typography.body3.lineHeight,
    logoPadding: theme.spacer.lg,
    detailsTextStyle: theme.typography.body3,
    subtitleTextStyle: theme.typography.body3,
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
      subtitleTextStyle: {
        textColor: theme.color.textNeutralSecondary
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
      subtitleTextStyle: {
        textColor: theme.color.textInverseSecondary
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
          subtitleTextStyle: {
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
      subtitleTextStyle: {
        textColor: theme.color.textNeutralSecondary
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
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function MetadataBase_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function MetadataBase_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? MetadataBase_ownKeys(Object(t), !0).forEach(function (r) { MetadataBase_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : MetadataBase_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, MetadataBase_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == MetadataBase_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else MetadataBase_defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function MetadataBase_defineProperty(e, r, t) { return (r = MetadataBase_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function MetadataBase_toPropertyKey(t) { var i = MetadataBase_toPrimitive(t, "string"); return "symbol" == MetadataBase_typeof(i) ? i : i + ""; }
function MetadataBase_toPrimitive(t, r) { if ("object" != MetadataBase_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != MetadataBase_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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
  function MetadataBase() {
    _classCallCheck(this, MetadataBase);
    return _callSuper(this, MetadataBase, arguments);
  }
  _inherits(MetadataBase, _Base);
  return _createClass(MetadataBase, [{
    key: "_titleLoaded",
    value: function _titleLoaded() {
      this._updateLayout();
    }
  }, {
    key: "_subtitleLoaded",
    value: function _subtitleLoaded() {
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
      if (!this.details && !this._Details) {
        return;
      }
      if (this._DetailsWrapper) {
        this._DetailsWrapper.alpha = this.style.alpha;
        this._DetailsWrapper.w = w;
        this._DetailsWrapper.h = h;
      }
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
      this._updateSubtitle();
      this._updateDetails();
      this._updateDescription();
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      this._Text.h = this._textH();
      this._updateMetadataHeight();
      this._updatePositions();
      this._updateLogo();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
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
      if (!this.title && !this._Title) {
        return;
      }
      if (!this._Title) {
        this._Text.childList.addAt({
          ref: 'Title',
          type: TextBox/* default */.A,
          signals: {
            textBoxChanged: '_titleLoaded'
          }
        }, 0);
      }
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
    key: "_updateSubtitle",
    value: function _updateSubtitle() {
      if (!this.subtitle && !this._Subtitle) {
        return;
      }
      if (!this._Subtitle) {
        this._Text.childList.addAt({
          ref: 'Subtitle',
          type: TextBox/* default */.A,
          signals: {
            textBoxChanged: '_subtitleLoaded'
          }
        }, 1);
      }
      this._Subtitle.patch({
        content: this.subtitle,
        marquee: this.marquee,
        style: {
          textStyle: MetadataBase_objectSpread(MetadataBase_objectSpread({}, this.style.subtitleTextStyle), {}, {
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
          if (!this._Title) {
            this._updateTitle();
          }
          this._Title.toggleMarquee();
        }
        if (this.description) {
          if (!this._Description) {
            this._updateDescription();
          }
          this._Description.toggleMarquee();
        }
      }
    }
  }, {
    key: "_updateDetails",
    value: function _updateDetails() {
      if (!this.details && !this._Details) {
        return;
      }
      if (!this._Details) {
        this._DetailsWrapper.patch({
          Details: {
            type: TextBox/* default */.A,
            signals: {
              textBoxChanged: '_detailsLoaded'
            }
          }
        });
      }
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
            type: FadeShader/* default */.A,
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
      if (!this.description && !this._Description) {
        return;
      }
      if (!this._Description) {
        this._Text.childList.add({
          ref: 'Description',
          type: TextBox/* default */.A,
          signals: {
            textBoxChanged: '_descriptionLoaded'
          }
        });
      }
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
      if (!this.logo && !this._Logo) {
        return;
      }
      if (!this._Logo) {
        this.patch({
          Logo: {
            flexItem: false,
            type: Icon/* default */.A
          }
        });
      }
      this.logoPosition = this.logoPosition || 'right';
      var subtitleH = this.subtitle && this._Subtitle && this._Subtitle.h || 0;
      this._Logo.patch({
        w: this.logoWidth,
        h: this.logoHeight,
        icon: this.logo,
        alpha: this.style.alpha
      });
      this._Logo.x = this.logoPosition === 'left' ? 0 : this.w - this._Logo.w;
      this._Logo.y = (this.h - this.logoHeight + subtitleH) / 2;
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
      var subtitleH = this.subtitle && this._Subtitle && this._Subtitle.h || 0;
      var detailsH = this.details && this._DetailsWrapper && this._DetailsWrapper.h || 0;
      var descriptionH = this.description && this._Description && this._Description.h || 0;
      return titleH + subtitleH + detailsH + descriptionH;
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
      return [].concat(_toConsumableArray(this._Title ? [this._Title] : []), _toConsumableArray(this._Subtitle ? [this._Subtitle] : []), _toConsumableArray(this._Description ? [this._Description] : []), _toConsumableArray(this._Details ? [this._Details] : []));
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Title && this._Title.announce, this._Subtitle && this._Subtitle.announce, this._Details && this._Details.announce, this._Description && this._Description.announce, this.logoTitle];
    },
    set: function set(announce) {
      _superPropSet(MetadataBase, "announce", announce, this, 1, 1);
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
      // Comments indicate where child components are inserted
      return {
        Text: {
          flex: {
            direction: 'column',
            justifyContent: 'flex-start'
          },
          // Title: {},
          // Subtitle: {},
          DetailsWrapper: {
            // Details: {}
          }
          // Description: {}
        }
        // Logo: {
        //   flexItem: false,
        //   type: Icon
        // }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['description', 'logo', 'logoHeight', 'logoPosition', 'logoTitle', 'logoWidth', 'details', 'subtitle', 'title', 'marquee'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Text', {
        name: 'Title',
        path: 'Text.Title'
      }, {
        name: 'Subtitle',
        path: 'Text.Subtitle'
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
  }]);
}(Base/* default */.A);
/* harmony default export */ const MetadataBase_MetadataBase = (mixins_withMarqueeSync(MetadataBase));

/***/ }),

/***/ "../../@lightningjs/ui-components/src/mixins/withMarqueeSync/withMarqueeSync.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ withMarqueeSync)
/* harmony export */ });
/* harmony import */ var _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/logger.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, o, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), e, o); return 2 & r && "function" == typeof p ? function (t) { return p.apply(o, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _Base);
    return _createClass(_class, [{
      key: "_init",
      value: function _init() {
        // use _init instead of _construct to ensure elements exist before running setup
        _superPropGet(_class, "_init", this, 3)([]);
        if (this._shouldSync) {
          this._updateSignals();
        }
      }
    }, {
      key: "_update",
      value: function _update() {
        _superPropGet(_class, "_update", this, 3)([]);
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
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.warn('warning: components using MarqueeSync must have a syncArray getter defined.');
          return false;
        } else if (!Array.isArray(this.syncArray)) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.warn('warning: syncArray must be typeof array.');
          return false;
        } else if (this.syncArray.length < 2) {
          _globals_context_logger__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.warn('warning: syncArray must contain at least two component references.');
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
  }(Base);
}

/***/ })

}]);
//# sourceMappingURL=7679.277f2729.iframe.bundle.js.map