"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[1836],{

/***/ "../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  AddingAndRemoving: () => (/* binding */ AddingAndRemoving),
  Basic: () => (/* binding */ Basic),
  LazyLoading: () => (/* binding */ LazyLoading),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ControlRow_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.styles.js
var ControlRow_styles_namespaceObject = {};
__webpack_require__.r(ControlRow_styles_namespaceObject);
__webpack_require__.d(ControlRow_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.js + 1 modules
var Tile = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Control/ControlSmall.js + 1 modules
var ControlSmall = __webpack_require__("../../@lightningjs/ui-components/src/components/Control/ControlSmall.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png
var ic_lightning_white_32 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_play_white_32.png
const ic_play_white_32_namespaceObject = __webpack_require__.p + "static/media/ic_play_white_32.af3043b3.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js
var TitleRow_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.stories.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js + 1 modules
var TitleRow = __webpack_require__("../../@lightningjs/ui-components/src/components/TitleRow/TitleRow.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.styles.js
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
    extraItemSpacing: theme.spacer.lg
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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



var ControlRow = /*#__PURE__*/function (_TitleRow) {
  _inherits(ControlRow, _TitleRow);
  var _super = _createSuper(ControlRow);
  function ControlRow() {
    _classCallCheck(this, ControlRow);
    return _super.apply(this, arguments);
  }
  _createClass(ControlRow, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(ControlRow.prototype), "_construct", this).call(this);
      this._leftControls = [];
      this._contentItems = [];
      this._rightControls = [];
      this._lastLeftControlIndex = -1;
      this._lastItemIndex = -1;
      this._lazyLoadBuffer = 0;
    }
  }, {
    key: "_updateContent",
    value: function _updateContent() {
      var itemsToAppend = [];
      if (this.leftControls.length) {
        itemsToAppend.push.apply(itemsToAppend, _toConsumableArray(this._withExtraSpacing(this.leftControls, true)));
      }
      if (this.contentItems.length) {
        itemsToAppend.push.apply(itemsToAppend, _toConsumableArray(this._withExtraSpacing(this.contentItems)));
      }
      if (this.rightControls.length) {
        itemsToAppend.push.apply(itemsToAppend, _toConsumableArray(this.rightControls));
      }
      if (itemsToAppend.length) {
        this.patch({
          alpha: 1,
          items: itemsToAppend,
          selectedIndex: this.leftControls.length,
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }
  }, {
    key: "_withExtraSpacing",
    value: function _withExtraSpacing(items) {
      var isControl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var itemsCopy = _toConsumableArray(items);
      var prevItems = isControl ? this._prevLeftControls : this._prevItems;

      // after appending remove extra spacing from the previous last item
      if (prevItems && prevItems.length && itemsCopy[prevItems.length - 1]) {
        itemsCopy[prevItems.length - 1].extraItemSpacing = 0;
      }
      itemsCopy[itemsCopy.length - 1].extraItemSpacing = this.extraItemSpacing == undefined ? this.style.extraItemSpacing : this.extraItemSpacing;
      if (isControl) {
        this._prevLeftControls = itemsCopy;
      } else {
        this._prevItems = itemsCopy;
      }
      return itemsCopy;
    }
  }, {
    key: "_getMoreItems",
    value: function _getMoreItems() {
      if (this.lazyLoadBuffer) {
        var loadMoreIndex = this.contentItems.length - 1 - this.lazyLoadBuffer;
        if (this.selectedIndex - this.leftControls.length >= loadMoreIndex && this.selectedIndex < this.leftControls.length + this.contentItems.length) {
          this.loadMoreItems();
        }
      }
    }
  }, {
    key: "loadMoreItems",
    value: function loadMoreItems() {
      this.signal('loadMoreItems');
    }
  }, {
    key: "_selectedChange",
    value: function _selectedChange(selected, prevSelected) {
      _get(_getPrototypeOf(ControlRow.prototype), "_selectedChange", this).call(this, selected, prevSelected);
      this._getMoreItems();
    }
  }, {
    key: "_appendItemsAt",
    value: function _appendItemsAt(items, appendIndex, removeSpacingIndex) {
      var itemsCopy = _toConsumableArray(items);
      if (removeSpacingIndex != undefined) {
        this.items[removeSpacingIndex].extraItemSpacing = undefined;
        itemsCopy[itemsCopy.length - 1].extraItemSpacing = this.extraItemSpacing == undefined ? this.style.extraItemSpacing : this.extraItemSpacing;
      }
      this.appendItemsAt(itemsCopy, appendIndex);
    }
  }, {
    key: "addContentItems",
    value: function addContentItems(items) {
      var itemsToAdd = this._createContentItems(items);
      var addIndex = this._lastItemIndex + 1;
      this._appendItemsAt(itemsToAdd, addIndex, this._lastItemIndex);
      this._lastItemIndex += itemsToAdd.length;
      if (this._contentItems) {
        this._contentItems = [].concat(_toConsumableArray(this.contentItems), _toConsumableArray(itemsToAdd));
      }
      this.patch({
        stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
      });
    }
  }, {
    key: "addContentItemsAt",
    value: function addContentItemsAt(items, itemIndex) {
      var itemsToAdd = this._createContentItems(items);
      var addIndex = this._lastLeftControlIndex + 1 + itemIndex;
      if (addIndex === this._lastItemIndex + 1) {
        this.addContentItems(itemsToAdd);
      } else {
        this._appendItemsAt(itemsToAdd, addIndex);
        if (this._contentItems) {
          var _this$_contentItems;
          (_this$_contentItems = this._contentItems).splice.apply(_this$_contentItems, [addIndex, 0].concat(_toConsumableArray(itemsToAdd)));
          this._lastItemIndex = this.contentItems.length - 1;
        }
        this.patch({
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }
  }, {
    key: "removeContentItemAt",
    value: function removeContentItemAt(index) {
      var removeIndex = this._lastLeftControlIndex + 1 + index;
      this.removeItemAt(removeIndex);
      this._lastItemIndex--;
      if (this._contentItems) {
        this._contentItems.splice(index, 1);
      }
      this.patch({
        startLazyScrollIndex: this.leftControls.length,
        stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
      });
    }
  }, {
    key: "addLeftControls",
    value: function addLeftControls(controls) {
      var itemsToAdd = this._createControls(controls);
      var addIndex = this._lastLeftControlIndex + 1;
      this._appendItemsAt(itemsToAdd, addIndex, this._lastLeftControlIndex);
      if (this._leftControls) {
        this._leftControls = [].concat(_toConsumableArray(this._leftControls), _toConsumableArray(controls));
        this._lastLeftControlIndex = this._leftControls.length - 1;
        this._lastItemIndex += controls.length;
      }
      this.patch({
        startLazyScrollIndex: this.leftControls.length,
        stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
      });
    }
  }, {
    key: "addLeftControlsAt",
    value: function addLeftControlsAt(controls, index) {
      var itemsToAdd = this._createControls(controls);
      if (index === this._lastLeftControlIndex + 1) {
        this.addLeftControls(controls);
      } else {
        this._appendItemsAt(itemsToAdd, index);
        if (this.leftControls) {
          var _this$_leftControls;
          (_this$_leftControls = this._leftControls).splice.apply(_this$_leftControls, [index, 0].concat(_toConsumableArray(controls)));
          this._lastLeftControlIndex = this._leftControls.length - 1;
          this._lastItemIndex += controls.length;
        }
        this.patch({
          startLazyScrollIndex: this.leftControls.length,
          stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
        });
      }
    }
  }, {
    key: "removeLeftControlAt",
    value: function removeLeftControlAt(index) {
      this.removeItemAt(index);
      this._lastLeftControlIndex--;
      this._lastItemIndex--;
      if (this.leftControls) {
        this._leftControls.splice(index, 1);
      }
      this.patch({
        startLazyScrollIndex: this.leftControls.length,
        stopLazyScrollIndex: this.leftControls.length + this.contentItems.length - 1
      });
    }
  }, {
    key: "addRightControls",
    value: function addRightControls(controls) {
      var _this$_rightControls;
      (_this$_rightControls = this._rightControls).push.apply(_this$_rightControls, _toConsumableArray(controls));
      this._appendItemsAt(this._createControls(controls), this.items.length);
    }
  }, {
    key: "addRightControlsAt",
    value: function addRightControlsAt(controls, index) {
      var _this$_rightControls2;
      var appendIndex = this._leftControls.length + this._contentItems.length + index;
      (_this$_rightControls2 = this._rightControls).splice.apply(_this$_rightControls2, [index, 0].concat(_toConsumableArray(controls)));
      this._appendItemsAt(this._createControls(controls), appendIndex);
    }
  }, {
    key: "removeRightControlAt",
    value: function removeRightControlAt(index) {
      var removeIndex = this.leftControls.length + this.contentItems.length + index;
      this.removeItemAt(removeIndex);
      if (this.rightControls) {
        this._rightControls.splice(index, 1);
      }
    }
  }, {
    key: "_createControls",
    value: function _createControls(controls) {
      return controls.map(function (controlProps) {
        return _objectSpread({
          backgroundType: 'fill',
          centerInParent: true
        }, controlProps);
      });
    }
  }, {
    key: "_createContentItems",
    value: function _createContentItems(contentItems) {
      var newContentItems = contentItems.map(function (itemProps) {
        return _objectSpread(_objectSpread({}, itemProps), {}, {
          centerInParent: true
        });
      });
      return newContentItems;
    }
  }, {
    key: "_setLeftControls",
    value: function _setLeftControls(leftControls) {
      this._leftControls = this._createControls(leftControls);
      this._lastLeftControlIndex = leftControls.length - 1;
      this._updateContent();
    }
  }, {
    key: "_getLeftControls",
    value: function _getLeftControls() {
      return this._leftControls;
    }
  }, {
    key: "_setRightControls",
    value: function _setRightControls(rightControls) {
      this._rightControls = this._createControls(rightControls);
      this._updateContent();
    }
  }, {
    key: "_getRightControls",
    value: function _getRightControls() {
      return this._rightControls;
    }
  }, {
    key: "_getContentItems",
    value: function _getContentItems() {
      return this._contentItems;
    }
  }, {
    key: "_setContentItems",
    value: function _setContentItems(items) {
      this._contentItems = this._createContentItems(items);
      this._lastItemIndex = this._lastLeftControlIndex + items.length;
      this._updateContent();
    }
  }, {
    key: "_getLeftControlItems",
    value: function _getLeftControlItems() {
      if (this.leftControls.length) {
        return this.items.slice(0, this._lastLeftControlIndex + 1);
      }
      return [];
    }
  }, {
    key: "_getContentItemItems",
    value: function _getContentItemItems() {
      if (this.contentItems.length) {
        return this.items.slice(this._lastLeftControlIndex + 1, this._lastItemIndex + 1);
      }
      return [];
    }
  }, {
    key: "_getRightControlItems",
    value: function _getRightControlItems() {
      if (this.rightControls.length) {
        var leftSiblingIndex = this._lastItemIndex || this._lastLeftControlIndex;
        return leftSiblingIndex ? this.items.slice(leftSiblingIndex + 1) : this.items;
      }
      return [];
    }
  }, {
    key: "leftControls",
    get: function get() {
      return this._getLeftControls();
    },
    set: function set(leftControls) {
      this._setLeftControls(leftControls);
    }
  }, {
    key: "rightControls",
    get: function get() {
      return this._getRightControls();
    },
    set: function set(rightControls) {
      this._setRightControls(rightControls);
    }
  }, {
    key: "contentItems",
    get: function get() {
      return this._getContentItems();
    },
    set: function set(items) {
      this._setContentItems(items);
    }
  }, {
    key: "lazyLoadBuffer",
    get: function get() {
      return this._lazyLoadBuffer;
    },
    set: function set(lazyLoadBuffer) {
      this._lazyLoadBuffer = lazyLoadBuffer;
      this._getMoreItems();
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ControlRow';
    }
  }, {
    key: "__themeStyles",
    get: function get() {
      return ControlRow_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return _objectSpread(_objectSpread({}, _get(_getPrototypeOf(ControlRow), "_template", this).call(this)), {}, {
        alpha: 0,
        lazyScroll: true,
        signals: {
          selectedChange: '_getMoreItems'
        }
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(ControlRow), "properties", this)), ['extraItemSpacing']);
    }
  }]);
  return ControlRow;
}(TitleRow/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ControlRow/ControlRow.stories.js
var _Basic$parameters, _Basic$parameters2, _LazyLoading$paramete, _LazyLoading$paramete2, _AddingAndRemoving$pa, _AddingAndRemoving$pa2;
function ControlRow_stories_typeof(o) { "@babel/helpers - typeof"; return ControlRow_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ControlRow_stories_typeof(o); }
function ControlRow_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ControlRow_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ControlRow_stories_toPropertyKey(descriptor.key), descriptor); } }
function ControlRow_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) ControlRow_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) ControlRow_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ControlRow_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ControlRow_stories_setPrototypeOf(subClass, superClass); }
function ControlRow_stories_setPrototypeOf(o, p) { ControlRow_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ControlRow_stories_setPrototypeOf(o, p); }
function ControlRow_stories_createSuper(Derived) { var hasNativeReflectConstruct = ControlRow_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ControlRow_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ControlRow_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ControlRow_stories_possibleConstructorReturn(this, result); }; }
function ControlRow_stories_possibleConstructorReturn(self, call) { if (call && (ControlRow_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ControlRow_stories_assertThisInitialized(self); }
function ControlRow_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ControlRow_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ControlRow_stories_getPrototypeOf(o) { ControlRow_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ControlRow_stories_getPrototypeOf(o); }
function ControlRow_stories_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ControlRow_stories_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ControlRow_stories_ownKeys(Object(t), !0).forEach(function (r) { ControlRow_stories_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ControlRow_stories_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ControlRow_stories_defineProperty(obj, key, value) { key = ControlRow_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ControlRow_stories_toPropertyKey(arg) { var key = ControlRow_stories_toPrimitive(arg, "string"); return ControlRow_stories_typeof(key) === "symbol" ? key : String(key); }
function ControlRow_stories_toPrimitive(input, hint) { if (ControlRow_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ControlRow_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Tile from '../Tile';\nimport ControlSmall from '../Control/ControlSmall';\nimport lightningIcon from '../../assets/images/ic_lightning_white_32.png';\nimport playIcon from '../../assets/images/ic_play_white_32.png';\nimport { default as TitleRowStory } from '../TitleRow/TitleRow.stories';\nimport ControlRowComponent from '.';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/ControlRow',\n  args: {\n    ...TitleRowStory.args,\n    lazyScroll: true,\n    mode: 'focused'\n  },\n  argTypes: {\n    ...TitleRowStory.argTypes,\n    ...createModeControl({ summaryValue: 'focused' })\n  }\n};\n\nconst createItems = (length, src, props = {}) => {\n  return Array.from({ length }).map((_, index) => ({\n    type: Tile,\n    artwork: {\n      src\n    },\n    itemLayout: {\n      ratioX: 16,\n      ratioY: 9,\n      upCount: 4\n    },\n    announce: 'Tile',\n    announceContext: `${index + 1} of ${length}`,\n    ...props\n  }));\n};\nconst createControls = (length, icon = lightningIcon, props = {}) => {\n  return Array.from({ length }).map(() => ({\n    type: ControlSmall,\n    icon,\n    fixed: true,\n    h: 64,\n    w: 64,\n    ...props\n  }));\n};\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        ControlRow: {\n          type: ControlRowComponent,\n          leftControls: createControls(3),\n          contentItems: createItems(5),\n          rightControls: createControls(3)\n        }\n      };\n    }\n\n    _getFocused() {\n      return this.tag('ControlRow');\n    }\n  };\n\nexport const LazyLoading = () =>\n  class LazyLoading extends lng.Component {\n    static _template() {\n      return {\n        ControlRow: {\n          type: ControlRowComponent,\n          leftControls: createControls(3),\n          contentItems: createItems(5),\n          rightControls: createControls(3),\n          lazyLoadBuffer: 1,\n          signals: {\n            loadMoreItems: '_loadMore'\n          }\n        }\n      };\n    }\n\n    _construct() {\n      this._counter = 0;\n    }\n\n    _loadMore() {\n      if (this._counter < 2) {\n        this._ControlRow.addContentItems(\n          createItems(\n            3,\n            'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'\n          )\n        );\n        this._counter++;\n      }\n    }\n\n    _getFocused() {\n      return this.tag('ControlRow');\n    }\n\n    get _ControlRow() {\n      return this.tag('ControlRow');\n    }\n  };\n\nLazyLoading.args = { lazyLoadBuffer: 1 };\nLazyLoading.argTypes = {\n  lazyLoadBuffer: {\n    control: 'number',\n    description:\n      'The number of items before the last content item at which a signal, \"loadMoreItems\", is emitted.',\n    remount: true,\n    table: { defaultValue: { summary: 0 } }\n  }\n};\nLazyLoading.parameters = {\n  storyDetails:\n    'The loadMoreItems signal is emitted each time a contentItem is selected at and after the index defined by the lazyLoadBuffer property. This story adds a method that is invoked when that signal is emitted and adds 3 additional contentItems to the ControlRow via ControlRow.addContentItems. That method will append items in response to the signal two times, then will do nothing in response to further invocations from the signal.'\n};\n\nconst createSignal = signalName => ({\n  onEnter: function () {\n    this.signal(signalName);\n  },\n  passSignals: { [signalName]: true }\n});\n\nconst parksUrl =\n  'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg';\n\nexport const AddingAndRemoving = () =>\n  class AddingAndRemoving extends lng.Component {\n    static _template() {\n      return {\n        ControlRow: {\n          type: ControlRowComponent,\n          signals: {\n            addLeftControl: true,\n            removeLeftControl: true,\n            addContentItem: true,\n            removeContentItem: true,\n            addRightControl: true,\n            removeRightControl: true\n          },\n          leftControls: createControls(\n            1,\n            lightningIcon,\n            createSignal('addLeftControl')\n          ),\n          contentItems: createItems(\n            5,\n            undefined,\n            createSignal('addContentItem')\n          ),\n          rightControls: createControls(\n            1,\n            lightningIcon,\n            createSignal('addRightControl')\n          )\n        }\n      };\n    }\n\n    addLeftControl() {\n      this._ControlRow.addLeftControlsAt(\n        createControls(1, playIcon, createSignal('removeLeftControl')),\n        0\n      );\n    }\n\n    removeLeftControl() {\n      this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);\n    }\n\n    addContentItem() {\n      this._ControlRow.addContentItemsAt(\n        createItems(1, parksUrl, createSignal('removeContentItem')),\n        this.contentItemIndex + 1\n      );\n    }\n\n    removeContentItem() {\n      this._ControlRow.removeContentItemAt(this.contentItemIndex);\n    }\n\n    addRightControl() {\n      this._ControlRow.addRightControls(\n        createControls(1, playIcon, createSignal('removeRightControl'))\n      );\n    }\n\n    removeRightControl() {\n      this._ControlRow.removeRightControlAt(this.rightControlIndex);\n    }\n\n    get _ControlRow() {\n      return this.tag('ControlRow');\n    }\n\n    get contentItemIndex() {\n      return (\n        this._ControlRow.selectedIndex - this._ControlRow.leftControls.length\n      );\n    }\n\n    get rightControlIndex() {\n      return (\n        this._ControlRow.selectedIndex -\n        this._ControlRow.leftControls.length -\n        this._ControlRow.contentItems.length\n      );\n    }\n\n    _getFocused() {\n      return this._ControlRow;\n    }\n  };\n\nAddingAndRemoving.parameters = {\n  storyDetails: `\n  Press the Enter key while focused on any controls or items in the ControlRow for the following effects:\n      - left controls: prepend a new control with a play icon to the left controls\n      - content items: append a tile with a background after the selected index\n      - right controls: append a new control with a play icon to the right controls\n  Press the Enter key while focused on any of the added controls or content items to remove that control or content item.\n  `\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 71
    },
    "endLoc": {
      "col": 1,
      "line": 85
    },
    "startBody": {
      "col": 21,
      "line": 71
    },
    "endBody": {
      "col": 1,
      "line": 85
    }
  },
  "LazyLoading": {
    "startLoc": {
      "col": 27,
      "line": 86
    },
    "endLoc": {
      "col": 1,
      "line": 116
    },
    "startBody": {
      "col": 27,
      "line": 86
    },
    "endBody": {
      "col": 1,
      "line": 116
    }
  },
  "AddingAndRemoving": {
    "startLoc": {
      "col": 33,
      "line": 144
    },
    "endLoc": {
      "col": 1,
      "line": 193
    },
    "startBody": {
      "col": 33,
      "line": 144
    },
    "endBody": {
      "col": 1,
      "line": 193
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









/* harmony default export */ const ControlRow_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Tile from '../Tile';\nimport ControlSmall from '../Control/ControlSmall';\nimport lightningIcon from '../../assets/images/ic_lightning_white_32.png';\nimport playIcon from '../../assets/images/ic_play_white_32.png';\nimport { default as TitleRowStory } from '../TitleRow/TitleRow.stories';\nimport ControlRowComponent from '.';\nimport { createModeControl } from '../../docs/utils';\nexport default {\n  title: 'Components/ControlRow',\n  args: {\n    ...TitleRowStory.args,\n    lazyScroll: true,\n    mode: 'focused'\n  },\n  argTypes: {\n    ...TitleRowStory.argTypes,\n    ...createModeControl({\n      summaryValue: 'focused'\n    })\n  }\n};\nconst createItems = (length, src, props = {}) => {\n  return Array.from({\n    length\n  }).map((_, index) => ({\n    type: Tile,\n    artwork: {\n      src\n    },\n    itemLayout: {\n      ratioX: 16,\n      ratioY: 9,\n      upCount: 4\n    },\n    announce: 'Tile',\n    announceContext: `${index + 1} of ${length}`,\n    ...props\n  }));\n};\nconst createControls = (length, icon = lightningIcon, props = {}) => {\n  return Array.from({\n    length\n  }).map(() => ({\n    type: ControlSmall,\n    icon,\n    fixed: true,\n    h: 64,\n    w: 64,\n    ...props\n  }));\n};\nexport const Basic = () => class Basic extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        leftControls: createControls(3),\n        contentItems: createItems(5),\n        rightControls: createControls(3)\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('ControlRow');\n  }\n};\nexport const LazyLoading = () => class LazyLoading extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        leftControls: createControls(3),\n        contentItems: createItems(5),\n        rightControls: createControls(3),\n        lazyLoadBuffer: 1,\n        signals: {\n          loadMoreItems: '_loadMore'\n        }\n      }\n    };\n  }\n  _construct() {\n    this._counter = 0;\n  }\n  _loadMore() {\n    if (this._counter < 2) {\n      this._ControlRow.addContentItems(createItems(3, 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'));\n      this._counter++;\n    }\n  }\n  _getFocused() {\n    return this.tag('ControlRow');\n  }\n  get _ControlRow() {\n    return this.tag('ControlRow');\n  }\n};\nLazyLoading.args = {\n  lazyLoadBuffer: 1\n};\nLazyLoading.argTypes = {\n  lazyLoadBuffer: {\n    control: 'number',\n    description: 'The number of items before the last content item at which a signal, \"loadMoreItems\", is emitted.',\n    remount: true,\n    table: {\n      defaultValue: {\n        summary: 0\n      }\n    }\n  }\n};\nLazyLoading.parameters = {\n  storyDetails: 'The loadMoreItems signal is emitted each time a contentItem is selected at and after the index defined by the lazyLoadBuffer property. This story adds a method that is invoked when that signal is emitted and adds 3 additional contentItems to the ControlRow via ControlRow.addContentItems. That method will append items in response to the signal two times, then will do nothing in response to further invocations from the signal.'\n};\nconst createSignal = signalName => ({\n  onEnter: function () {\n    this.signal(signalName);\n  },\n  passSignals: {\n    [signalName]: true\n  }\n});\nconst parksUrl = 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg';\nexport const AddingAndRemoving = () => class AddingAndRemoving extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        signals: {\n          addLeftControl: true,\n          removeLeftControl: true,\n          addContentItem: true,\n          removeContentItem: true,\n          addRightControl: true,\n          removeRightControl: true\n        },\n        leftControls: createControls(1, lightningIcon, createSignal('addLeftControl')),\n        contentItems: createItems(5, undefined, createSignal('addContentItem')),\n        rightControls: createControls(1, lightningIcon, createSignal('addRightControl'))\n      }\n    };\n  }\n  addLeftControl() {\n    this._ControlRow.addLeftControlsAt(createControls(1, playIcon, createSignal('removeLeftControl')), 0);\n  }\n  removeLeftControl() {\n    this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);\n  }\n  addContentItem() {\n    this._ControlRow.addContentItemsAt(createItems(1, parksUrl, createSignal('removeContentItem')), this.contentItemIndex + 1);\n  }\n  removeContentItem() {\n    this._ControlRow.removeContentItemAt(this.contentItemIndex);\n  }\n  addRightControl() {\n    this._ControlRow.addRightControls(createControls(1, playIcon, createSignal('removeRightControl')));\n  }\n  removeRightControl() {\n    this._ControlRow.removeRightControlAt(this.rightControlIndex);\n  }\n  get _ControlRow() {\n    return this.tag('ControlRow');\n  }\n  get contentItemIndex() {\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length;\n  }\n  get rightControlIndex() {\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length - this._ControlRow.contentItems.length;\n  }\n  _getFocused() {\n    return this._ControlRow;\n  }\n};\nAddingAndRemoving.parameters = {\n  storyDetails: `\n  Press the Enter key while focused on any controls or items in the ControlRow for the following effects:\n      - left controls: prepend a new control with a play icon to the left controls\n      - content items: append a tile with a background after the selected index\n      - right controls: append a new control with a play icon to the right controls\n  Press the Enter key while focused on any of the added controls or content items to remove that control or content item.\n  `\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"() => class Basic extends lng.Component {\\n  static _template() {\\n    return {\\n      ControlRow: {\\n        type: ControlRowComponent,\\n        leftControls: createControls(3),\\n        contentItems: createItems(5),\\n        rightControls: createControls(3)\\n      }\\n    };\\n  }\\n  _getFocused() {\\n    return this.tag('ControlRow');\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nLazyLoading.parameters = {\n  ...LazyLoading.parameters,\n  docs: {\n    ...LazyLoading.parameters?.docs,\n    source: {\n      originalSource: \"() => class LazyLoading extends lng.Component {\\n  static _template() {\\n    return {\\n      ControlRow: {\\n        type: ControlRowComponent,\\n        leftControls: createControls(3),\\n        contentItems: createItems(5),\\n        rightControls: createControls(3),\\n        lazyLoadBuffer: 1,\\n        signals: {\\n          loadMoreItems: '_loadMore'\\n        }\\n      }\\n    };\\n  }\\n  _construct() {\\n    this._counter = 0;\\n  }\\n  _loadMore() {\\n    if (this._counter < 2) {\\n      this._ControlRow.addContentItems(createItems(3, 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'));\\n      this._counter++;\\n    }\\n  }\\n  _getFocused() {\\n    return this.tag('ControlRow');\\n  }\\n  get _ControlRow() {\\n    return this.tag('ControlRow');\\n  }\\n}\",\n      ...LazyLoading.parameters?.docs?.source\n    }\n  }\n};\nAddingAndRemoving.parameters = {\n  ...AddingAndRemoving.parameters,\n  docs: {\n    ...AddingAndRemoving.parameters?.docs,\n    source: {\n      originalSource: \"() => class AddingAndRemoving extends lng.Component {\\n  static _template() {\\n    return {\\n      ControlRow: {\\n        type: ControlRowComponent,\\n        signals: {\\n          addLeftControl: true,\\n          removeLeftControl: true,\\n          addContentItem: true,\\n          removeContentItem: true,\\n          addRightControl: true,\\n          removeRightControl: true\\n        },\\n        leftControls: createControls(1, lightningIcon, createSignal('addLeftControl')),\\n        contentItems: createItems(5, undefined, createSignal('addContentItem')),\\n        rightControls: createControls(1, lightningIcon, createSignal('addRightControl'))\\n      }\\n    };\\n  }\\n  addLeftControl() {\\n    this._ControlRow.addLeftControlsAt(createControls(1, playIcon, createSignal('removeLeftControl')), 0);\\n  }\\n  removeLeftControl() {\\n    this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);\\n  }\\n  addContentItem() {\\n    this._ControlRow.addContentItemsAt(createItems(1, parksUrl, createSignal('removeContentItem')), this.contentItemIndex + 1);\\n  }\\n  removeContentItem() {\\n    this._ControlRow.removeContentItemAt(this.contentItemIndex);\\n  }\\n  addRightControl() {\\n    this._ControlRow.addRightControls(createControls(1, playIcon, createSignal('removeRightControl')));\\n  }\\n  removeRightControl() {\\n    this._ControlRow.removeRightControlAt(this.rightControlIndex);\\n  }\\n  get _ControlRow() {\\n    return this.tag('ControlRow');\\n  }\\n  get contentItemIndex() {\\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length;\\n  }\\n  get rightControlIndex() {\\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length - this._ControlRow.contentItems.length;\\n  }\\n  _getFocused() {\\n    return this._ControlRow;\\n  }\\n}\",\n      ...AddingAndRemoving.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 71
          },
          "endLoc": {
            "col": 1,
            "line": 85
          },
          "startBody": {
            "col": 21,
            "line": 71
          },
          "endBody": {
            "col": 1,
            "line": 85
          }
        },
        "lazy-loading": {
          "startLoc": {
            "col": 27,
            "line": 86
          },
          "endLoc": {
            "col": 1,
            "line": 116
          },
          "startBody": {
            "col": 27,
            "line": 86
          },
          "endBody": {
            "col": 1,
            "line": 116
          }
        },
        "adding-and-removing": {
          "startLoc": {
            "col": 33,
            "line": 144
          },
          "endLoc": {
            "col": 1,
            "line": 193
          },
          "startBody": {
            "col": 33,
            "line": 144
          },
          "endBody": {
            "col": 1,
            "line": 193
          }
        }
      }
    }
  },
  title: 'Components/ControlRow',
  args: ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, TitleRow_stories["default"].args), {}, {
    lazyScroll: true,
    mode: 'focused'
  }),
  argTypes: ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, TitleRow_stories["default"].argTypes), (0,utils/* createModeControl */.Ys)({
    summaryValue: 'focused'
  }))
});
var createItems = function createItems(length, src) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return Array.from({
    length: length
  }).map(function (_, index) {
    return ControlRow_stories_objectSpread({
      type: Tile/* default */.Z,
      artwork: {
        src: src
      },
      itemLayout: {
        ratioX: 16,
        ratioY: 9,
        upCount: 4
      },
      announce: 'Tile',
      announceContext: "".concat(index + 1, " of ").concat(length)
    }, props);
  });
};
var createControls = function createControls(length) {
  var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ic_lightning_white_32;
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return Array.from({
    length: length
  }).map(function () {
    return ControlRow_stories_objectSpread({
      type: ControlSmall/* default */.Z,
      icon: icon,
      fixed: true,
      h: 64,
      w: 64
    }, props);
  });
};
var Basic = function Basic() {
  return /*#__PURE__*/function (_lng$Component) {
    ControlRow_stories_inherits(Basic, _lng$Component);
    var _super = ControlRow_stories_createSuper(Basic);
    function Basic() {
      ControlRow_stories_classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    ControlRow_stories_createClass(Basic, [{
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('ControlRow');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ControlRow: {
            type: ControlRow,
            leftControls: createControls(3),
            contentItems: createItems(5),
            rightControls: createControls(3)
          }
        };
      }
    }]);
    return Basic;
  }(lightning_esm/* default */.Z.Component);
};
;
var LazyLoading = function LazyLoading() {
  return /*#__PURE__*/function (_lng$Component2) {
    ControlRow_stories_inherits(LazyLoading, _lng$Component2);
    var _super2 = ControlRow_stories_createSuper(LazyLoading);
    function LazyLoading() {
      ControlRow_stories_classCallCheck(this, LazyLoading);
      return _super2.apply(this, arguments);
    }
    ControlRow_stories_createClass(LazyLoading, [{
      key: "_construct",
      value: function _construct() {
        this._counter = 0;
      }
    }, {
      key: "_loadMore",
      value: function _loadMore() {
        if (this._counter < 2) {
          this._ControlRow.addContentItems(createItems(3, 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'));
          this._counter++;
        }
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this.tag('ControlRow');
      }
    }, {
      key: "_ControlRow",
      get: function get() {
        return this.tag('ControlRow');
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ControlRow: {
            type: ControlRow,
            leftControls: createControls(3),
            contentItems: createItems(5),
            rightControls: createControls(3),
            lazyLoadBuffer: 1,
            signals: {
              loadMoreItems: '_loadMore'
            }
          }
        };
      }
    }]);
    return LazyLoading;
  }(lightning_esm/* default */.Z.Component);
};
;
LazyLoading.args = {
  lazyLoadBuffer: 1
};
LazyLoading.argTypes = {
  lazyLoadBuffer: {
    control: 'number',
    description: 'The number of items before the last content item at which a signal, "loadMoreItems", is emitted.',
    remount: true,
    table: {
      defaultValue: {
        summary: 0
      }
    }
  }
};
LazyLoading.parameters = {
  storyDetails: 'The loadMoreItems signal is emitted each time a contentItem is selected at and after the index defined by the lazyLoadBuffer property. This story adds a method that is invoked when that signal is emitted and adds 3 additional contentItems to the ControlRow via ControlRow.addContentItems. That method will append items in response to the signal two times, then will do nothing in response to further invocations from the signal.'
};
var createSignal = function createSignal(signalName) {
  return {
    onEnter: function onEnter() {
      this.signal(signalName);
    },
    passSignals: ControlRow_stories_defineProperty({}, signalName, true)
  };
};
var parksUrl = 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg';
var AddingAndRemoving = function AddingAndRemoving() {
  return /*#__PURE__*/function (_lng$Component3) {
    ControlRow_stories_inherits(AddingAndRemoving, _lng$Component3);
    var _super3 = ControlRow_stories_createSuper(AddingAndRemoving);
    function AddingAndRemoving() {
      ControlRow_stories_classCallCheck(this, AddingAndRemoving);
      return _super3.apply(this, arguments);
    }
    ControlRow_stories_createClass(AddingAndRemoving, [{
      key: "addLeftControl",
      value: function addLeftControl() {
        this._ControlRow.addLeftControlsAt(createControls(1, ic_play_white_32_namespaceObject, createSignal('removeLeftControl')), 0);
      }
    }, {
      key: "removeLeftControl",
      value: function removeLeftControl() {
        this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);
      }
    }, {
      key: "addContentItem",
      value: function addContentItem() {
        this._ControlRow.addContentItemsAt(createItems(1, parksUrl, createSignal('removeContentItem')), this.contentItemIndex + 1);
      }
    }, {
      key: "removeContentItem",
      value: function removeContentItem() {
        this._ControlRow.removeContentItemAt(this.contentItemIndex);
      }
    }, {
      key: "addRightControl",
      value: function addRightControl() {
        this._ControlRow.addRightControls(createControls(1, ic_play_white_32_namespaceObject, createSignal('removeRightControl')));
      }
    }, {
      key: "removeRightControl",
      value: function removeRightControl() {
        this._ControlRow.removeRightControlAt(this.rightControlIndex);
      }
    }, {
      key: "_ControlRow",
      get: function get() {
        return this.tag('ControlRow');
      }
    }, {
      key: "contentItemIndex",
      get: function get() {
        return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length;
      }
    }, {
      key: "rightControlIndex",
      get: function get() {
        return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length - this._ControlRow.contentItems.length;
      }
    }, {
      key: "_getFocused",
      value: function _getFocused() {
        return this._ControlRow;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ControlRow: {
            type: ControlRow,
            signals: {
              addLeftControl: true,
              removeLeftControl: true,
              addContentItem: true,
              removeContentItem: true,
              addRightControl: true,
              removeRightControl: true
            },
            leftControls: createControls(1, ic_lightning_white_32, createSignal('addLeftControl')),
            contentItems: createItems(5, undefined, createSignal('addContentItem')),
            rightControls: createControls(1, ic_lightning_white_32, createSignal('addRightControl'))
          }
        };
      }
    }]);
    return AddingAndRemoving;
  }(lightning_esm/* default */.Z.Component);
};
AddingAndRemoving.parameters = {
  storyDetails: "\n  Press the Enter key while focused on any controls or items in the ControlRow for the following effects:\n      - left controls: prepend a new control with a play icon to the left controls\n      - content items: append a tile with a background after the selected index\n      - right controls: append a new control with a play icon to the right controls\n  Press the Enter key while focused on any of the added controls or content items to remove that control or content item.\n  "
};
Basic.parameters = ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, Basic.parameters), {}, {
  docs: ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, (_Basic$parameters = Basic.parameters) === null || _Basic$parameters === void 0 ? void 0 : _Basic$parameters.docs), {}, {
    source: ControlRow_stories_objectSpread({
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        leftControls: createControls(3),\n        contentItems: createItems(5),\n        rightControls: createControls(3)\n      }\n    };\n  }\n  _getFocused() {\n    return this.tag('ControlRow');\n  }\n}"
    }, (_Basic$parameters2 = Basic.parameters) === null || _Basic$parameters2 === void 0 || (_Basic$parameters2 = _Basic$parameters2.docs) === null || _Basic$parameters2 === void 0 ? void 0 : _Basic$parameters2.source)
  })
});
LazyLoading.parameters = ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, LazyLoading.parameters), {}, {
  docs: ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, (_LazyLoading$paramete = LazyLoading.parameters) === null || _LazyLoading$paramete === void 0 ? void 0 : _LazyLoading$paramete.docs), {}, {
    source: ControlRow_stories_objectSpread({
      originalSource: "() => class LazyLoading extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        leftControls: createControls(3),\n        contentItems: createItems(5),\n        rightControls: createControls(3),\n        lazyLoadBuffer: 1,\n        signals: {\n          loadMoreItems: '_loadMore'\n        }\n      }\n    };\n  }\n  _construct() {\n    this._counter = 0;\n  }\n  _loadMore() {\n    if (this._counter < 2) {\n      this._ControlRow.addContentItems(createItems(3, 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg'));\n      this._counter++;\n    }\n  }\n  _getFocused() {\n    return this.tag('ControlRow');\n  }\n  get _ControlRow() {\n    return this.tag('ControlRow');\n  }\n}"
    }, (_LazyLoading$paramete2 = LazyLoading.parameters) === null || _LazyLoading$paramete2 === void 0 || (_LazyLoading$paramete2 = _LazyLoading$paramete2.docs) === null || _LazyLoading$paramete2 === void 0 ? void 0 : _LazyLoading$paramete2.source)
  })
});
AddingAndRemoving.parameters = ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, AddingAndRemoving.parameters), {}, {
  docs: ControlRow_stories_objectSpread(ControlRow_stories_objectSpread({}, (_AddingAndRemoving$pa = AddingAndRemoving.parameters) === null || _AddingAndRemoving$pa === void 0 ? void 0 : _AddingAndRemoving$pa.docs), {}, {
    source: ControlRow_stories_objectSpread({
      originalSource: "() => class AddingAndRemoving extends lng.Component {\n  static _template() {\n    return {\n      ControlRow: {\n        type: ControlRowComponent,\n        signals: {\n          addLeftControl: true,\n          removeLeftControl: true,\n          addContentItem: true,\n          removeContentItem: true,\n          addRightControl: true,\n          removeRightControl: true\n        },\n        leftControls: createControls(1, lightningIcon, createSignal('addLeftControl')),\n        contentItems: createItems(5, undefined, createSignal('addContentItem')),\n        rightControls: createControls(1, lightningIcon, createSignal('addRightControl'))\n      }\n    };\n  }\n  addLeftControl() {\n    this._ControlRow.addLeftControlsAt(createControls(1, playIcon, createSignal('removeLeftControl')), 0);\n  }\n  removeLeftControl() {\n    this._ControlRow.removeLeftControlAt(this._ControlRow.selectedIndex);\n  }\n  addContentItem() {\n    this._ControlRow.addContentItemsAt(createItems(1, parksUrl, createSignal('removeContentItem')), this.contentItemIndex + 1);\n  }\n  removeContentItem() {\n    this._ControlRow.removeContentItemAt(this.contentItemIndex);\n  }\n  addRightControl() {\n    this._ControlRow.addRightControls(createControls(1, playIcon, createSignal('removeRightControl')));\n  }\n  removeRightControl() {\n    this._ControlRow.removeRightControlAt(this.rightControlIndex);\n  }\n  get _ControlRow() {\n    return this.tag('ControlRow');\n  }\n  get contentItemIndex() {\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length;\n  }\n  get rightControlIndex() {\n    return this._ControlRow.selectedIndex - this._ControlRow.leftControls.length - this._ControlRow.contentItems.length;\n  }\n  _getFocused() {\n    return this._ControlRow;\n  }\n}"
    }, (_AddingAndRemoving$pa2 = AddingAndRemoving.parameters) === null || _AddingAndRemoving$pa2 === void 0 || (_AddingAndRemoving$pa2 = _AddingAndRemoving$pa2.docs) === null || _AddingAndRemoving$pa2 === void 0 ? void 0 : _AddingAndRemoving$pa2.source)
  })
});
var __namedExportsOrder = ["Basic", "LazyLoading", "AddingAndRemoving"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Control/ControlSmall.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ControlSmall)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Control/ControlSmall.styles.js
var ControlSmall_styles_namespaceObject = {};
__webpack_require__.r(ControlSmall_styles_namespaceObject);
__webpack_require__.d(ControlSmall_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Control/Control.js
var Control = __webpack_require__("../../@lightningjs/ui-components/src/components/Control/Control.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Control/Control.styles.js
var Control_styles = __webpack_require__("../../@lightningjs/ui-components/src/components/Control/Control.styles.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Control/ControlSmall.styles.js
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
  var parentStyle = (0,Control_styles.base)(theme);
  var height = theme.spacer.md * 7;
  var radiusOffset = (parentStyle.height - height) / 2;
  var radius = Math.max(parentStyle.radius - radiusOffset, 0);
  var logoRadius = Math.max(radius - parentStyle.paddingX / 2, 0);
  return {
    height: height,
    logoStyle: {
      radius: logoRadius,
      height: theme.spacer.md * 5,
      width: theme.spacer.md * 6
    },
    radius: radius,
    minWidth: theme.spacer.md * 8,
    textStyle: theme.typography.button2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Control/ControlSmall.js
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



var ControlSmall = /*#__PURE__*/function (_Control) {
  _inherits(ControlSmall, _Control);
  var _super = _createSuper(ControlSmall);
  function ControlSmall() {
    _classCallCheck(this, ControlSmall);
    return _super.apply(this, arguments);
  }
  _createClass(ControlSmall, null, [{
    key: "__componentName",
    get: function get() {
      return 'ControlSmall';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ControlSmall_styles_namespaceObject;
    }
  }]);
  return ControlSmall;
}(Control/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=1836.41ca5974.iframe.bundle.js.map