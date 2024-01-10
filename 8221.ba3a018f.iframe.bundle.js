"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8221],{

/***/ "../../@lightningjs/ui-components/src/components/Button/Button.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Button)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Button/Button.styles.js
var Button_styles_namespaceObject = {};
__webpack_require__.r(Button_styles_namespaceObject);
__webpack_require__.d(Button_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.styles.js
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
    width: 0,
    justify: 'center',
    minWidth: (0,utils/* getWidthByColumnSpan */.wO)(theme, 3),
    paddingX: theme.spacer.xxxl,
    paddingXNoTitle: theme.spacer.xl,
    paddingY: theme.spacer.xl,
    radius: theme.radius.sm,
    contentSpacing: theme.spacer.md,
    itemSpacing: theme.spacer.md,
    textStyle: _objectSpread(_objectSpread({}, theme.typography.button1), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutral
    }),
    contentColor: theme.color.fillNeutral
  };
};
var mode = function mode(theme) {
  return {
    focused: {
      textStyle: {
        textColor: theme.color.textInverse
      },
      contentColor: theme.color.fillInverse,
      tone: {
        inverse: {
          textStyle: {
            textColor: theme.color.textNeutral
          },
          contentColor: theme.color.fillNeutral
        },
        brand: {
          contentColor: theme.color.fillNeutral
        }
      }
    },
    disabled: {
      textStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      contentColor: theme.color.fillNeutralDisabled
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.js + 1 modules
var Surface = __webpack_require__("../../@lightningjs/ui-components/src/components/Surface/Surface.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js
function Button_typeof(o) { "@babel/helpers - typeof"; return Button_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Button_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Button_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Button_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Button_ownKeys(Object(t), !0).forEach(function (r) { Button_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Button_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Button_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { Button_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function Button_defineProperty(obj, key, value) { key = Button_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Button_toPropertyKey(t) { var i = Button_toPrimitive(t, "string"); return "symbol" == Button_typeof(i) ? i : String(i); }
function Button_toPrimitive(t, r) { if ("object" != Button_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != Button_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (Button_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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




 // There seams to be some issue with the circular dependency here

/**
 * Button Component
 *
 * Generic Button Component that handles setting text icon and checkbox
 */
var Button = /*#__PURE__*/function (_Surface) {
  _inherits(Button, _Surface);
  var _super = _createSuper(Button);
  function Button() {
    _classCallCheck(this, Button);
    return _super.apply(this, arguments);
  }
  _createClass(Button, [{
    key: "_update",
    value: function _update() {
      this._updatePrefix();
      this._updateTitle();
      this._updateSuffix();
      this._updateAllPositioning();
      this._updateTruncation();
    }
  }, {
    key: "_updateAllPositioning",
    value: function _updateAllPositioning() {
      this._updatePositions();
      this._updateContentDimensions();
      this._updateSurfaceDimensions();
      this._updateContentPosition();
      // delaying the super._update call so we update the surface sizing after the button has finished updating
      _get(_getPrototypeOf(Button.prototype), "_update", this).call(this);
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this._updateAllPositioning();
      this._updateTruncation();
    }
  }, {
    key: "_onTitleTextBoxChanged",
    value: function _onTitleTextBoxChanged() {
      this._updateAllPositioning();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      if (this._hasPrefix) {
        this._Prefix.x = this._prefixX;
      }
      if (this._hasTitle) {
        this._TextWrapper.x = this._titleX;
      }
      if (this._hasSuffix) {
        this._Suffix.x = this._suffixX;
      }
    }
  }, {
    key: "_updatePrefix",
    value: function _updatePrefix() {
      var prefixString = JSON.stringify(this.prefix);
      if (this.prefix) {
        var prefixPatch = {
          style: {
            itemSpacing: this.style.itemSpacing
          }
        };
        if (!this._Prefix) {
          prefixPatch = Button_objectSpread(Button_objectSpread({}, this._rowProps), prefixPatch);
        }
        this._Content.patch({
          Prefix: prefixPatch
        });
        this._updatePrefixSuffixStyles('prefix');
      } else {
        this._Content.patch({
          Prefix: undefined
        });
      }
      this._prevPrefix = prefixString;
    }
  }, {
    key: "_updatePrefixSuffixStyles",
    value: function _updatePrefixSuffixStyles() {
      var _this = this;
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'prefix';
      /**
       * Repatching all items re-renders all the components in the Prefix/Suffix Rows.
       * This can cause items to shift while their layout in the Row is re-calculated if
       * any of the items do not have width or height on their initial render (ex. an Icon
       * does not have width and height until after its texture loads).
       * If the contents of the Prefix/Suffix are the same components and this update was triggered
       * from something else (ex. a change in mode), only update the styles applied to the
       * items in the Prefix (ex. updating the color to the value appropriate to the new mode).
       */
      var map = {
        prefix: {
          tag: this._Prefix,
          prop: this.prefix,
          prevProp: this._prevPrefix
        },
        suffix: {
          tag: this._Suffix,
          prop: this.suffix,
          prevProp: this._prevSuffix
        }
      };
      var _map$type = map[type],
        tag = _map$type.tag,
        prop = _map$type.prop;
      var prevProp = map[type].prevProp;
      var propString = JSON.stringify(prop);
      if (propString !== prevProp) {
        prevProp = propString;
        tag.items = this._addButtonProps(prop);
      } else {
        tag.Items.children.forEach(function (item, idx) {
          item.color = Array.isArray(prop) ? prop[idx].color : prop.color;
          item.style = Button_objectSpread(Button_objectSpread({}, item.style), {}, {
            color: _this.style.contentColor
          });
        });
      }
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      if (this._hasTitle) {
        var titlePatch = {
          content: this.title,
          style: {
            textStyle: this.style.textStyle
          }
        };
        if (!this._Title) {
          titlePatch = Button_objectSpread({
            type: TextBox/* default */.Z,
            mountY: 0.5,
            y: function y(h) {
              return h / 2;
            },
            signals: {
              textBoxChanged: '_onTitleTextBoxChanged'
            }
          }, titlePatch);
        }
        this._Content.patch({
          TextWrapper: {
            mountY: 0.5,
            Title: titlePatch
          }
        });
      } else {
        this._Content.patch({
          TextWrapper: {
            Title: undefined
          }
        });
      }
    }
  }, {
    key: "_updateSuffix",
    value: function _updateSuffix() {
      if (this.suffix) {
        var suffixPatch = {
          style: {
            itemSpacing: this.style.itemSpacing
          }
        };
        if (!this._Suffix) {
          suffixPatch = Button_objectSpread(Button_objectSpread({}, this._rowProps), suffixPatch);
        }
        this._Content.patch({
          Suffix: suffixPatch
        });
        this._updatePrefixSuffixStyles('suffix');
      } else {
        this._Content.patch({
          Suffix: undefined
        });
      }
    }
  }, {
    key: "_updateTruncation",
    value: function _updateTruncation() {
      /**
       * needs to run before rest of content updates to prevent a bug causing text
       * to sometimes truncate and then un-truncate(with no width change) when
       * toggling fixed after toggling focus
       */
      if (this._Title) {
        this._Title.patch({
          style: {
            textStyle: Button_objectSpread(Button_objectSpread({}, this.style.textStyle), {}, {
              wordWrap: this.fixed,
              wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
            })
          }
        });
      }
    }
  }, {
    key: "_updateContentDimensions",
    value: function _updateContentDimensions() {
      var contentDimensionsPatch = {};
      var y = this.h / 2;

      // reference transition targets to ensure we aren't checking against intermittent values
      if (this._Content.transition('w').targetValue !== this._contentW) {
        this._Content.w = this._contentW;
      }
      if (this._Content.y !== y) {
        contentDimensionsPatch.y = y;
      }
      if (Object.keys(contentDimensionsPatch).length > 0) {
        this._Content.patch(contentDimensionsPatch);
      }
    }
  }, {
    key: "_updateContentPosition",
    value: function _updateContentPosition() {
      this._Content.patch(this._contentProps);
    }
  }, {
    key: "_updateSurfaceDimensions",
    value: function _updateSurfaceDimensions() {
      var newWidth = this.w;
      if (this.fixed) {
        newWidth = this._w;
      } else {
        newWidth = this._calcDynamicWidth();
      }
      if (newWidth !== this.w) {
        this.w = newWidth;
      }

      // In order to ensure the "hSetByUser" flag is not set to true,
      // skip over "set h" by directly updating "_h"
      // Using the "get h" return statement does not force an update to the inspector,
      // whereas this will ensure the "height" attribute is updated
      if (!this._hSetByUser && !this.style.h) {
        this._h = this.style.textStyle.lineHeight + this.style.paddingY * 2;
      }

      // TODO breaks row resizing if this is wrapped in the width conditional above
      this.fireAncestors('$itemChanged');
    }
  }, {
    key: "_calcDynamicWidth",
    value: function _calcDynamicWidth() {
      // if no title, ignore minWidth and use prefix/suffix width
      // when the title is collapsed, width should be the same as if there is no title
      return !this._hasTitle && (this._hasPrefix || this._hasSuffix) || this._Title && !this._Title.visible && (this._hasPrefix || this._hasSuffix) ? this._contentW + this._paddingX : Math.max(this._contentW + this._paddingX, this.style.minWidth);
    }
  }, {
    key: "_addButtonProps",
    value: function _addButtonProps(arr) {
      var _this2 = this;
      var items = Array.isArray(arr) ? arr : [arr];
      return items.map(function (item) {
        return Button_objectSpread(Button_objectSpread(Button_objectSpread({}, _this2._buttonProps), item), {}, {
          style: Button_objectSpread({
            color: _this2.style.contentColor
          }, item.style)
        });
      });
    }
  }, {
    key: "_getJustify",
    value: function _getJustify() {
      return !!this._justify ? this._justify : this.style.justify;
    }
  }, {
    key: "_contentProps",
    get: function get() {
      var mountX;
      var x;
      switch (this.justify) {
        case 'left':
          mountX = 0;
          x = this._paddingLeft;
          break;
        case 'right':
          mountX = 1;
          x = this.w - this._paddingRight;
          break;
        case 'center':
        default:
          mountX = 0.5;
          x = this.w / 2;
          break;
      }
      return {
        mountX: mountX,
        x: x
      };
    }
  }, {
    key: "_buttonProps",
    get: function get() {
      return {
        centerInParent: true,
        mode: this.mode
      };
    }
  }, {
    key: "_hasPrefix",
    get: function get() {
      return !!(this.prefix && Object.keys(this.prefix).length);
    }
  }, {
    key: "_prefixW",
    get: function get() {
      return this._hasPrefix ? this._Prefix.w : 0;
    }
  }, {
    key: "_prefixX",
    get: function get() {
      return 0;
    }
  }, {
    key: "_hasTitle",
    get: function get() {
      return !!this.title;
    }
  }, {
    key: "_titleW",
    get: function get() {
      // get the pre-calculated text width of the title to solve some race condition bugs
      if (this._hasTitle && this._Title && this._Title._Text && this._Title.visible) {
        return this._Title.w;
      }
      return 0;
    }
  }, {
    key: "_titleX",
    get: function get() {
      return this._hasPrefix ? this._prefixW + this.style.contentSpacing : 0;
    }
  }, {
    key: "_hasSuffix",
    get: function get() {
      return !!(this.suffix && Object.keys(this.suffix).length);
    }
  }, {
    key: "_suffixW",
    get: function get() {
      return this._hasSuffix ? this._Suffix.w : 0;
    }
  }, {
    key: "_suffixX",
    get: function get() {
      if (this._hasTitle) {
        return this._titleW + this._TextWrapper.x + this.style.contentSpacing;
      } else if (this._hasPrefix) {
        return this._prefixW + this.style.itemSpacing;
      }
      return 0;
    }
  }, {
    key: "_contentW",
    get: function get() {
      if (this._hasSuffix) {
        return this._suffixX + this._suffixW;
      } else if (this._hasTitle && this._Title && this._Title.visible) {
        return this._titleX + this._titleW;
      } else if (this._hasPrefix) {
        return this._prefixX + this._prefixW;
      }
      return 0;
    }
  }, {
    key: "_rowProps",
    get: function get() {
      return {
        type: Row/* default */.Z,
        mountY: 0.5,
        autoResizeHeight: true,
        autoResizeWidth: true
      };
    }
  }, {
    key: "_totalTitlePaddingX",
    get: function get() {
      var totalTitlePadding = 0;
      if (this._hasPrefix) {
        totalTitlePadding += this.style.contentSpacing;
      }
      if (this._hasSuffix) {
        totalTitlePadding += this.style.contentSpacing;
      }
      return totalTitlePadding;
    }

    /**
     * Button w must be >= nonTextSpace + smallest possible width of truncated
     * text(width of the first set of characters before a space + width of TextBox.maxLinesSuffix).
     * Disregarding this results in the contents of the button being a greater width than the
     * fixed w of the Button(w/o decreasing _paddingX or _totalTitlePadding).
     */
  }, {
    key: "_fixedWordWrapWidth",
    get: function get() {
      var w = this.w,
        _paddingX = this._paddingX,
        _prefixW = this._prefixW,
        _suffixW = this._suffixW,
        _totalTitlePaddingX = this._totalTitlePaddingX;
      var nonTextSpace = _paddingX + _prefixW + _suffixW + _totalTitlePaddingX;
      return Math.max(1, w - nonTextSpace);
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }

      // TODO - Localization?
      // Do we need a locale file with
      // component translations?
      var announce = [];
      if (this.title) {
        announce.push(this.title);
      }
      announce.push(this._announceComponentName);
      if (this._hasPrefix && this._Prefix.items.length) {
        announce.push.apply(announce, _toConsumableArray(this._Prefix.items.map(function (item) {
          return item.announce;
        })));
      }
      if (this._hasSuffix && this._Suffix.items.length) {
        announce.push.apply(announce, _toConsumableArray(this._Suffix.items.map(function (item) {
          return item.announce;
        })));
      }
      return announce;
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Button.prototype), "announce", announce, this, true);
    }
  }, {
    key: "_announceComponentName",
    get: function get() {
      return Button.__componentName;
    }
  }, {
    key: "_paddingX",
    get: function get() {
      return this._paddingLeft + this._paddingRight;
    }
  }, {
    key: "_paddingLeft",
    get: function get() {
      return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
    }
  }, {
    key: "_paddingRight",
    get: function get() {
      return this._hasTitle ? this.style.paddingX : this.style.paddingXNoTitle;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Button';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Button_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return ['fixed', 'justify', 'prefix', 'suffix', 'title'];
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
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(Button), "tags", this)), ['Content', {
        name: 'TextWrapper',
        path: 'Content.TextWrapper'
      }, {
        name: 'Title',
        path: 'Content.TextWrapper.Title'
      }, {
        name: 'Prefix',
        path: 'Content.Prefix'
      }, {
        name: 'Suffix',
        path: 'Content.Suffix'
      }]);
    }
  }, {
    key: "_template",
    value: function _template() {
      return Button_objectSpread(Button_objectSpread({}, _get(_getPrototypeOf(Button), "_template", this).call(this)), {}, {
        Content: {
          mount: 0.5,
          x: function x(w) {
            return w / 2;
          },
          y: function y(h) {
            return h / 2;
          },
          zIndex: 2 // ensure content (title) is rendered above Surface Background
        }
      });
    }
  }]);
  return Button;
}(Surface/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Surface/Surface.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Surface)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Surface/Surface.styles.js
var Surface_styles_namespaceObject = {};
__webpack_require__.r(Surface_styles_namespaceObject);
__webpack_require__.d(Surface_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.styles.js
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
    backgroundColor: theme.color.interactiveNeutral,
    radius: theme.radius.md,
    animation: {}
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      backgroundColor: theme.color.interactiveInverse
    }
  };
};
var mode = function mode(theme) {
  return {
    focused: {
      backgroundColor: theme.color.interactiveNeutralFocus,
      tone: {
        inverse: {
          backgroundColor: theme.color.interactiveInverseFocus
        }
      }
    },
    disabled: {
      backgroundColor: theme.color.fillNeutralDisabled
    }
  };
};
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Surface/Surface.js
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




var Surface = /*#__PURE__*/function (_Base) {
  _inherits(Surface, _Base);
  var _super = _createSuper(Surface);
  function Surface() {
    _classCallCheck(this, Surface);
    return _super.apply(this, arguments);
  }
  _createClass(Surface, [{
    key: "innerH",
    get: function get() {
      return this.h;
    }
  }, {
    key: "innerW",
    get: function get() {
      return this.w;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateLayout();
      this._updateScale();
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      this._Background.patch({
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.innerW - 2,
        // Reference the underscored values here in cause the h or w getters need to be overwritten for alignment - see Tile
        this.innerH - 2, this.style.radius, 0, null, true, this.style.backgroundColor)
      });
    }
  }, {
    key: "_updateScale",
    value: function _updateScale() {
      var scale = this._isFocusedMode ? this.getFocusScale(this.w, this.h) : this.getUnfocusScale(this.w, this.h);
      this.applySmooth(this, {
        scale: scale
      }, {
        scale: [scale, this.style.animation]
      });
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Background: {}
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Surface';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Surface_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return [];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Background'];
    }
  }]);
  return Surface;
}(Base/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=8221.ba3a018f.iframe.bundle.js.map