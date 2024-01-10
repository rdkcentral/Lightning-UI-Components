"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8905],{

/***/ "../../@lightningjs/ui-components/src/components/TabBar/TabBar.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  CustomTabs: () => (/* binding */ CustomTabs),
  MultipleRows: () => (/* binding */ MultipleRows),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ TabBar_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.styles.js
var TabBar_styles_namespaceObject = {};
__webpack_require__.r(TabBar_styles_namespaceObject);
__webpack_require__.d(TabBar_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.js + 1 modules
var Tile = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js + 1 modules
var ButtonSmall = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/assets/images/view_all.png
const view_all_namespaceObject = __webpack_require__.p + "static/media/view_all.17ad8284.png";
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png
var ic_lightning_white_32 = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Column/Column.js + 1 modules
var Column = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TabBar/Tab.js + 1 modules
var Tab = __webpack_require__("../../@lightningjs/ui-components/src/components/TabBar/Tab.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var src_utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/ContentSwitcher.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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



var ContentSwitcher = /*#__PURE__*/function (_Base) {
  _inherits(ContentSwitcher, _Base);
  var _super = _createSuper(ContentSwitcher);
  function ContentSwitcher() {
    _classCallCheck(this, ContentSwitcher);
    return _super.apply(this, arguments);
  }
  _createClass(ContentSwitcher, [{
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(ContentSwitcher.prototype), "_construct", this).call(this);
      this._selectedIndex = 0;
      this._contentItems = [];
    }
  }, {
    key: "_update",
    value: function _update() {
      _get(_getPrototypeOf(ContentSwitcher.prototype), "_update", this).call(this);
      this._updateSelected();
    }
  }, {
    key: "_updateSelected",
    value: function _updateSelected() {
      var _this = this;
      if (this._preveSelectedIndex !== this.selectedIndex) {
        if (this._preveSelectedIndex !== undefined) {
          var prevContent = this.tag("Content".concat(this._preveSelectedIndex));
          prevContent.smooth = {
            alpha: 0
          };
          if (this._hasContent) {
            prevContent._getTransition('alpha').once('finish', function () {
              _this._fadeInContent();
            });
          } else if (this.selectedIndex !== undefined) {
            this._fadeInContent();
          }
        } else if (this._hasContent) {
          this._fadeInContent();
        }
        this._preveSelectedIndex = this.selectedIndex;
      }
    }
  }, {
    key: "_fadeInContent",
    value: function _fadeInContent() {
      var _this2 = this;
      this._selectedContent.smooth = {
        alpha: 1
      };
      this._selectedContent._getTransition('alpha').once('finish', function () {
        _this2.h = _this2._selectedContent.h;
        _this2.signal('contentHeightChange', _this2.h);
      });
    }
  }, {
    key: "_updateContent",
    value: function _updateContent() {
      var _this3 = this;
      var allContent = this.contentItems.reduce(function (acc, item, idx) {
        var component;
        var tagName = "Content".concat(idx);
        if (typeof item === 'function') {
          var componentLoader = item();
          if (componentLoader.then) {
            // update template async after component has loaded
            _this3._loadAsyncComponent(componentLoader, idx);
          } else {
            component = componentLoader;
          }
        } else {
          component = item;
        }
        if (component) {
          acc[tagName] = _objectSpread(_objectSpread({}, component), {}, {
            alpha: 0
          });
        }
        return acc;
      }, {});
      this.patch(allContent);
    }
  }, {
    key: "_loadAsyncComponent",
    value: function _loadAsyncComponent(componentLoader, idx) {
      var _this4 = this;
      componentLoader.then(function (component) {
        var tagName = "Content".concat(idx);
        _this4.patch(_defineProperty({}, tagName, _objectSpread(_objectSpread({}, component), {}, {
          alpha: 0
        })));
      });
    }
  }, {
    key: "contentItems",
    get: function get() {
      return this._contentItems;
    },
    set: function set(contentItems) {
      if (!(0,src_utils/* stringifyCompare */.ir)(contentItems, this._contentItems)) {
        this._contentItems = contentItems;
        this._updateContent();
      }
    }
  }, {
    key: "_hasContent",
    get: function get() {
      return this._selectedContent && this._selectedContent.children.length > 0;
    }
  }, {
    key: "_selectedContent",
    get: function get() {
      return this.tag("Content".concat(this.selectedIndex));
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      if (this._hasContent) {
        return this._selectedContent;
      }
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ContentSwitcher';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['selectedIndex'];
    }
  }]);
  return ContentSwitcher;
}(Base/* default */.Z);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.styles.js
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
    tabSpacing: theme.spacer.lg,
    tabsMarginBottom: theme.spacer.xxl
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function TabBar_typeof(o) { "@babel/helpers - typeof"; return TabBar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, TabBar_typeof(o); }
function TabBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function TabBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, TabBar_toPropertyKey(descriptor.key), descriptor); } }
function TabBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) TabBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) TabBar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function TabBar_toPropertyKey(t) { var i = TabBar_toPrimitive(t, "string"); return "symbol" == TabBar_typeof(i) ? i : String(i); }
function TabBar_toPrimitive(t, r) { if ("object" != TabBar_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != TabBar_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function TabBar_get() { if (typeof Reflect !== "undefined" && Reflect.get) { TabBar_get = Reflect.get.bind(); } else { TabBar_get = function _get(target, property, receiver) { var base = TabBar_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return TabBar_get.apply(this, arguments); }
function TabBar_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = TabBar_getPrototypeOf(object); if (object === null) break; } return object; }
function TabBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) TabBar_setPrototypeOf(subClass, superClass); }
function TabBar_setPrototypeOf(o, p) { TabBar_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TabBar_setPrototypeOf(o, p); }
function TabBar_createSuper(Derived) { var hasNativeReflectConstruct = TabBar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TabBar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TabBar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TabBar_possibleConstructorReturn(this, result); }; }
function TabBar_possibleConstructorReturn(self, call) { if (call && (TabBar_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return TabBar_assertThisInitialized(self); }
function TabBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function TabBar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function TabBar_getPrototypeOf(o) { TabBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TabBar_getPrototypeOf(o); }
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





var TabBar = /*#__PURE__*/function (_Base) {
  TabBar_inherits(TabBar, _Base);
  var _super = TabBar_createSuper(TabBar);
  function TabBar() {
    TabBar_classCallCheck(this, TabBar);
    return _super.apply(this, arguments);
  }
  TabBar_createClass(TabBar, [{
    key: "_construct",
    value: function _construct() {
      TabBar_get(TabBar_getPrototypeOf(TabBar.prototype), "_construct", this).call(this);
      this._tabContent = [];
      this._isTabsFocused = true;
    }
  }, {
    key: "_selectedTabChange",
    value: function _selectedTabChange(selected, prevSelected) {
      this.fireAncestors('$tabChanged', selected, prevSelected, this);
      if (TabBar_typeof(this._tabContent) === 'object' && typeof this._tabContent.then === 'function') {
        return this._tabContent.then(this.queueRequestUpdate);
      }
      return this.queueRequestUpdate();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateTabsLayout();
      this._updateTabs();
      this._updateTabContent();
      this._updateTabBarHeight();
    }
  }, {
    key: "_updateTabsLayout",
    value: function _updateTabsLayout() {
      var _this = this;
      var defaultLayout = {
        style: {
          itemSpacing: this.style.tabSpacing
        }
      };
      var tabsRowPatch = Row/* default */.Z.properties.reduce(function (patchObj, prop) {
        if (_this[prop] != undefined) {
          patchObj[prop] = _this[prop];
        }
        return patchObj;
      }, defaultLayout);
      this._Tabs.patch(tabsRowPatch);
    }
  }, {
    key: "_updateTabs",
    value: function _updateTabs() {
      var _this2 = this;
      this._Tabs.wrapSelected = this.wrapSelected;
      this._Tabs.items.forEach(function (tab) {
        var isSelectedTab = tab === _this2._Tabs.selected;
        if (_this2._isUnfocusedMode) {
          tab.mode = 'unfocused';
        } else if (_this2._isFocusedMode) {
          if (_this2._isTabsFocused) {
            tab.mode = isSelectedTab ? 'focused' : 'unfocused';
          } else {
            tab.mode = isSelectedTab ? 'selected' : 'unfocused';
          }
        }
      });
      if (this.alphaSelectedTab) {
        this._updateTabAlphas();
      }
    }
  }, {
    key: "_updateTabAlphas",
    value: function _updateTabAlphas() {
      var _this3 = this;
      if (this._isTabsFocused) {
        this._Tabs.items.forEach(function (tab) {
          tab.patch({
            alpha: 1
          });
        });
      } else {
        this._Tabs.items.forEach(function (tab) {
          tab.patch({
            alpha: tab === _this3._Tabs.selected ? 1 : 0.3
          });
        });
      }
    }
  }, {
    key: "_updateTabContent",
    value: function _updateTabContent() {
      var margin = this.style.tabsMarginBottom;
      this._TabContent.patch({
        y: this._Tabs.h + margin,
        contentItems: this._tabContent,
        selectedIndex: this._isFocusedMode ? this._Tabs.selectedIndex : undefined
      });
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      // triggered when the Tabs Row resizes
      // update the height of TabBar using the latest h value from Tabs
      this._updateTabBarHeight();
      this._updateTabContent();
    }
  }, {
    key: "_updateTabBarHeight",
    value: function _updateTabBarHeight() {
      var h;
      if (this.collapse) {
        h = this._isFocusedMode && this._tabContent.filter(function (content) {
          return Object.keys(content).length;
        }).length ? this._expandedHeight : this._collapsedHeight;
      } else {
        h = this._expandedHeight;
      }
      this._TabContent.smooth = {
        alpha: !this.collapse || this._isFocusedMode ? 1 : 0.001
      };
      if (this.h !== h) {
        this.h = h;
        this.fireAncestors('$itemChanged');
      }
    }
  }, {
    key: "selectTabs",
    value: function selectTabs() {
      if (!this._isTabsFocused) {
        this._isTabsFocused = true;
        this._updateTabs();
        this._updateTabBarHeight();
      }
    }
  }, {
    key: "resetTabs",
    value: function resetTabs() {
      this._Tabs.selectedIndex = 0;
    }
  }, {
    key: "_handleDown",
    value: function _handleDown() {
      if (this._isTabsFocused && this._TabContent._hasContent) {
        this._isTabsFocused = false;
        this._updateTabs();
        this._updateTabBarHeight();
      }
      return false;
    }
  }, {
    key: "_handleUp",
    value: function _handleUp() {
      this.selectTabs();
      return false;
    }
  }, {
    key: "_setTabs",
    value: function _setTabs(tabs) {
      this._tabContent = [];
      this._tabContent = tabs.map(function (tab) {
        return tab.tabContent || {};
      });
      this._Tabs.items = tabs;
      return tabs;
    }
  }, {
    key: "_collapsedHeight",
    get: function get() {
      return this._Tabs.h;
    }
  }, {
    key: "_expandedHeight",
    get: function get() {
      return this._Tabs.h + this.style.tabsMarginBottom + this._TabContent.h;
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._isTabsFocused ? this._Tabs : this._TabContent;
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      TabBar_get(TabBar_getPrototypeOf(TabBar.prototype), "_unfocus", this).call(this);
      if (this.reset) {
        this.resetTabs();
      }
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Tabs: {
          type: Row/* default */.Z,
          autoResizeHeight: true,
          signals: {
            selectedChange: '_selectedTabChange'
          }
        },
        TabContent: {
          type: ContentSwitcher,
          signals: {
            contentHeightChange: '_updateTabBarHeight'
          }
        }
      };
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return TabBar_styles_namespaceObject;
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'TabBar';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['alphaSelectedTab', 'collapse', 'reset', 'tabs'].concat(_toConsumableArray(Row/* default */.Z.properties));
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Tabs', 'TabContent'];
    }
  }]);
  return TabBar;
}(Base/* default */.Z);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/TabBar/TabBar.stories.js
function TabBar_stories_typeof(o) {
  "@babel/helpers - typeof";

  return TabBar_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, TabBar_stories_typeof(o);
}
function TabBar_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function TabBar_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, TabBar_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function TabBar_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) TabBar_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) TabBar_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function TabBar_stories_get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    TabBar_stories_get = Reflect.get.bind();
  } else {
    TabBar_stories_get = function _get(target, property, receiver) {
      var base = TabBar_stories_superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return TabBar_stories_get.apply(this, arguments);
}
function TabBar_stories_superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = TabBar_stories_getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}
function TabBar_stories_inherits(subClass, superClass) {
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
  if (superClass) TabBar_stories_setPrototypeOf(subClass, superClass);
}
function TabBar_stories_setPrototypeOf(o, p) {
  TabBar_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return TabBar_stories_setPrototypeOf(o, p);
}
function TabBar_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = TabBar_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = TabBar_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = TabBar_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return TabBar_stories_possibleConstructorReturn(this, result);
  };
}
function TabBar_stories_possibleConstructorReturn(self, call) {
  if (call && (TabBar_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return TabBar_stories_assertThisInitialized(self);
}
function TabBar_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function TabBar_stories_isNativeReflectConstruct() {
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
function TabBar_stories_getPrototypeOf(o) {
  TabBar_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return TabBar_stories_getPrototypeOf(o);
}
function TabBar_stories_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function TabBar_stories_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? TabBar_stories_ownKeys(Object(t), !0).forEach(function (r) {
      TabBar_stories_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : TabBar_stories_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function TabBar_stories_defineProperty(obj, key, value) {
  key = TabBar_stories_toPropertyKey(key);
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
function TabBar_stories_toPropertyKey(t) {
  var i = TabBar_stories_toPrimitive(t, "string");
  return "symbol" == TabBar_stories_typeof(i) ? i : String(i);
}
function TabBar_stories_toPrimitive(t, r) {
  if ("object" != TabBar_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != TabBar_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Base from '../Base';\nimport Tile from '../Tile';\nimport Button from '../Button';\nimport ButtonSmall from '../Button/ButtonSmall.js';\nimport Icon from '../Icon';\nimport viewAllIcon from '../../assets/images/view_all.png';\nimport { createModeControl } from '../../docs/utils';\nimport lightningIcon from '../../assets/images/ic_lightning_white_32.png';\nimport Row from '../Row';\nimport Column from '../Column';\nimport { context } from '../../globals';\nimport Tab from './Tab.js';\nimport TabBarComponent from '.';\n\nexport default {\n  title: 'Components/TabBar',\n  args: {\n    collapse: false,\n    alphaSelectedTab: false,\n    wrapSelected: false,\n    mode: 'focused'\n  },\n  argTypes: {\n    ...createModeControl({ summaryValue: 'focused' }),\n    alphaSelectedTab: {\n      control: 'boolean',\n      description:\n        'When true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content',\n      table: { defaultValue: { summary: false } }\n    },\n    collapse: {\n      control: 'boolean',\n      description:\n        'When true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available',\n      table: { defaultValue: { summary: false } }\n    },\n    wrapSelected: {\n      control: 'boolean',\n      description:\n        'Enables wrapping behavior, so selectNext selects the first item if the current item is the last on the list and vice versa',\n      table: { defaultValue: { summary: false } }\n    }\n  }\n};\n\nclass CustomButton extends ButtonSmall {\n  _focus() {\n    super._focus();\n    this.patch({\n      w: 175,\n      title: 'View All'\n    });\n    this.fireAncestors('$itemChanged');\n  }\n  _unfocus() {\n    super._unfocus();\n    this.patch({\n      w: 72,\n      title: ''\n    });\n    this.fireAncestors('$itemChanged');\n  }\n}\n\nconst createTiles = imgSrcs => {\n  return imgSrcs.map(src => ({\n    type: Tile,\n    w: 410,\n    h: 230,\n    artwork: { src }\n  }));\n};\nconst tilesA = createTiles([\n  'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n  'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',\n  'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg',\n  'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg',\n  'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'\n]);\nconst tilesB = tilesA.slice().reverse();\n\nconst createColumn = titles => {\n  return {\n    type: Column,\n    h: 300,\n    w: 410,\n    style: { itemSpacing: 16 },\n    neverScroll: true,\n    items: titles.map(title => ({\n      w: 410,\n      type: Button,\n      title\n    }))\n  };\n};\nconst col1 = createColumn(['Item 1', 'Item 2', 'Item 3']);\nconst col2 = createColumn(['Async Item 1', 'Async Item 2', 'Async Item 3']);\n\nconst rowFunction = () => ({\n  type: Row,\n  items: tilesB,\n  autoResizeHeight: true,\n  alwaysScroll: true\n});\n\nconst colPromise = () => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(col2);\n    }, 2000);\n  });\n};\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TabBar: {\n          type: TabBarComponent,\n          w: 1920 - 160,\n          tabs: [\n            {\n              type: Tab,\n              title: 'No Content Tab'\n            },\n            {\n              type: Tab,\n              title: 'Tab 1',\n              tabContent: {\n                type: Row,\n                items: tilesA,\n                autoResizeHeight: true,\n                lazyScroll: true\n              }\n            },\n            {\n              type: Tab,\n              title: 'Tab 2',\n              tabContent: col1\n            },\n            {\n              type: Tab,\n              title: 'Tab 3',\n              tabContent: rowFunction\n            },\n            {\n              type: Tab,\n              title: 'Tab 4',\n              tabContent: colPromise\n            }\n          ]\n        }\n      };\n    }\n  };\n\nclass CustomTile extends Tile {\n  static _template() {\n    return {\n      ...super._template(),\n      SoftFocus: {}\n    };\n  }\n  _update() {\n    super._update();\n    this._updateSoftFocus();\n  }\n\n  _updateSoftFocus() {\n    const { color, spacer } = context.theme;\n    if (this.mode === 'selected') {\n      this.tag('SoftFocus').patch({\n        rect: true,\n        color: color.interactiveNeutralFocus,\n        h: spacer.xs,\n        w: spacer.xxxl + spacer.xxl + spacer.xs,\n        mountX: 0.5,\n        mountY: 1,\n        y: this.h + spacer.lg + spacer.xs,\n        x: this.w / 2\n      });\n    } else {\n      this.tag('SoftFocus').patch({ h: 0, w: 0 });\n    }\n  }\n}\n\nconst tileProps = {\n  w: 100,\n  h: 100,\n  radius: 50,\n  imgRadius: 50,\n  artwork: { icon: lightningIcon }\n};\n\nexport const CustomTabs = () =>\n  class CustomTabs extends lng.Component {\n    static _template() {\n      return {\n        TabBar: {\n          type: TabBarComponent,\n          w: 1920 - 160,\n          tabs: [\n            {\n              type: CustomButton,\n              fixed: true,\n              prefix: [{ type: Icon, icon: viewAllIcon, w: 20, h: 20 }],\n              centerInParent: true,\n              backgroundType: 'fill'\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: {\n                type: Row,\n                items: tilesA,\n                autoResizeHeight: true,\n                lazyScroll: true\n              }\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: col1\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: rowFunction\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: colPromise\n            }\n          ]\n        }\n      };\n    }\n  };\nCustomTabs.args = {\n  alphaSelectedTab: false\n};\nCustomTabs.argTypes = {};\n\nclass ColumnContainer extends Base {\n  static get __componentName() {\n    return 'ColumnContainer';\n  }\n  static get tags() {\n    return [\n      'ClippingOffsetContainer',\n      { name: 'Column', path: 'ClippingOffsetContainer.Column' }\n    ];\n  }\n  static _template() {\n    return {\n      ClippingOffsetContainer: {\n        w: 1920 - 160,\n        h: 600,\n        clipping: true,\n        y: context.theme.layout.gutterY * -1,\n        x: 40 * -1,\n        Column: {\n          type: Column,\n          y: context.theme.layout.gutterY,\n          x: 40,\n          items: [\n            {\n              type: Row,\n              items: tilesA,\n              autoResizeHeight: true\n            },\n            {\n              type: Row,\n\n              items: tilesA,\n              autoResizeHeight: true\n            },\n            {\n              type: Row,\n\n              items: tilesA,\n              autoResizeHeight: true\n            },\n            {\n              type: Row,\n\n              items: tilesA,\n              autoResizeHeight: true\n            }\n          ]\n        }\n      }\n    };\n  }\n  _getFocused() {\n    return this._Column;\n  }\n}\n\nexport const MultipleRows = () =>\n  class MultipleRows extends lng.Component {\n    static _template() {\n      return {\n        TabBar: {\n          type: TabBarComponent,\n          autoResizeWidth: true,\n          tabs: [\n            {\n              type: Tab,\n              title: 'No Content Tab'\n            },\n            {\n              type: Tab,\n              title: 'Multiple Rows',\n              tabContent: {\n                type: ColumnContainer\n              }\n            },\n            {\n              type: Tab,\n              title: 'Tab 2',\n              tabContent: col1\n            }\n          ]\n        }\n      };\n    }\n  };\n\nMultipleRows.args = {};\nMultipleRows.parameters = {\n  storyDetails:\n    'This is an example of adding multiple rows in the tab content column. A ColumnContainer was created to allow for clipping needed for scrolling'\n};\nMultipleRows.argTypes = {};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 133
    },
    "endLoc": {
      "col": 3,
      "line": 174
    },
    "startBody": {
      "col": 21,
      "line": 133
    },
    "endBody": {
      "col": 3,
      "line": 174
    }
  },
  "CustomTabs": {
    "startLoc": {
      "col": 26,
      "line": 215
    },
    "endLoc": {
      "col": 3,
      "line": 259
    },
    "startBody": {
      "col": 26,
      "line": 215
    },
    "endBody": {
      "col": 3,
      "line": 259
    }
  },
  "MultipleRows": {
    "startLoc": {
      "col": 28,
      "line": 321
    },
    "endLoc": {
      "col": 3,
      "line": 349
    },
    "startBody": {
      "col": 28,
      "line": 321
    },
    "endBody": {
      "col": 3,
      "line": 349
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















/* harmony default export */ const TabBar_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Base from '../Base';\nimport Tile from '../Tile';\nimport Button from '../Button';\nimport ButtonSmall from '../Button/ButtonSmall.js';\nimport Icon from '../Icon';\nimport viewAllIcon from '../../assets/images/view_all.png';\nimport { createModeControl } from '../../docs/utils';\nimport lightningIcon from '../../assets/images/ic_lightning_white_32.png';\nimport Row from '../Row';\nimport Column from '../Column';\nimport { context } from '../../globals';\nimport Tab from './Tab.js';\nimport TabBarComponent from '.';\n\nexport default {\n  title: 'Components/TabBar',\n  args: {\n    collapse: false,\n    alphaSelectedTab: false,\n    wrapSelected: false,\n    mode: 'focused'\n  },\n  argTypes: {\n    ...createModeControl({ summaryValue: 'focused' }),\n    alphaSelectedTab: {\n      control: 'boolean',\n      description:\n        'When true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content',\n      table: { defaultValue: { summary: false } }\n    },\n    collapse: {\n      control: 'boolean',\n      description:\n        'When true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available',\n      table: { defaultValue: { summary: false } }\n    },\n    wrapSelected: {\n      control: 'boolean',\n      description:\n        'Enables wrapping behavior, so selectNext selects the first item if the current item is the last on the list and vice versa',\n      table: { defaultValue: { summary: false } }\n    }\n  }\n};\n\nclass CustomButton extends ButtonSmall {\n  _focus() {\n    super._focus();\n    this.patch({\n      w: 175,\n      title: 'View All'\n    });\n    this.fireAncestors('$itemChanged');\n  }\n  _unfocus() {\n    super._unfocus();\n    this.patch({\n      w: 72,\n      title: ''\n    });\n    this.fireAncestors('$itemChanged');\n  }\n}\n\nconst createTiles = imgSrcs => {\n  return imgSrcs.map(src => ({\n    type: Tile,\n    w: 410,\n    h: 230,\n    artwork: { src }\n  }));\n};\nconst tilesA = createTiles([\n  'https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg',\n  'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg',\n  'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg',\n  'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg',\n  'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg'\n]);\nconst tilesB = tilesA.slice().reverse();\n\nconst createColumn = titles => {\n  return {\n    type: Column,\n    h: 300,\n    w: 410,\n    style: { itemSpacing: 16 },\n    neverScroll: true,\n    items: titles.map(title => ({\n      w: 410,\n      type: Button,\n      title\n    }))\n  };\n};\nconst col1 = createColumn(['Item 1', 'Item 2', 'Item 3']);\nconst col2 = createColumn(['Async Item 1', 'Async Item 2', 'Async Item 3']);\n\nconst rowFunction = () => ({\n  type: Row,\n  items: tilesB,\n  autoResizeHeight: true,\n  alwaysScroll: true\n});\n\nconst colPromise = () => {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve(col2);\n    }, 2000);\n  });\n};\n\nexport const Basic = () =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        TabBar: {\n          type: TabBarComponent,\n          w: 1920 - 160,\n          tabs: [\n            {\n              type: Tab,\n              title: 'No Content Tab'\n            },\n            {\n              type: Tab,\n              title: 'Tab 1',\n              tabContent: {\n                type: Row,\n                items: tilesA,\n                autoResizeHeight: true,\n                lazyScroll: true\n              }\n            },\n            {\n              type: Tab,\n              title: 'Tab 2',\n              tabContent: col1\n            },\n            {\n              type: Tab,\n              title: 'Tab 3',\n              tabContent: rowFunction\n            },\n            {\n              type: Tab,\n              title: 'Tab 4',\n              tabContent: colPromise\n            }\n          ]\n        }\n      };\n    }\n  };\n\nclass CustomTile extends Tile {\n  static _template() {\n    return {\n      ...super._template(),\n      SoftFocus: {}\n    };\n  }\n  _update() {\n    super._update();\n    this._updateSoftFocus();\n  }\n\n  _updateSoftFocus() {\n    const { color, spacer } = context.theme;\n    if (this.mode === 'selected') {\n      this.tag('SoftFocus').patch({\n        rect: true,\n        color: color.interactiveNeutralFocus,\n        h: spacer.xs,\n        w: spacer.xxxl + spacer.xxl + spacer.xs,\n        mountX: 0.5,\n        mountY: 1,\n        y: this.h + spacer.lg + spacer.xs,\n        x: this.w / 2\n      });\n    } else {\n      this.tag('SoftFocus').patch({ h: 0, w: 0 });\n    }\n  }\n}\n\nconst tileProps = {\n  w: 100,\n  h: 100,\n  radius: 50,\n  imgRadius: 50,\n  artwork: { icon: lightningIcon }\n};\n\nexport const CustomTabs = () =>\n  class CustomTabs extends lng.Component {\n    static _template() {\n      return {\n        TabBar: {\n          type: TabBarComponent,\n          w: 1920 - 160,\n          tabs: [\n            {\n              type: CustomButton,\n              fixed: true,\n              prefix: [{ type: Icon, icon: viewAllIcon, w: 20, h: 20 }],\n              centerInParent: true,\n              backgroundType: 'fill'\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: {\n                type: Row,\n                items: tilesA,\n                autoResizeHeight: true,\n                lazyScroll: true\n              }\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: col1\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: rowFunction\n            },\n            {\n              type: CustomTile,\n              ...tileProps,\n              tabContent: colPromise\n            }\n          ]\n        }\n      };\n    }\n  };\nCustomTabs.args = {\n  alphaSelectedTab: false\n};\nCustomTabs.argTypes = {};\n\nclass ColumnContainer extends Base {\n  static get __componentName() {\n    return 'ColumnContainer';\n  }\n  static get tags() {\n    return [\n      'ClippingOffsetContainer',\n      { name: 'Column', path: 'ClippingOffsetContainer.Column' }\n    ];\n  }\n  static _template() {\n    return {\n      ClippingOffsetContainer: {\n        w: 1920 - 160,\n        h: 600,\n        clipping: true,\n        y: context.theme.layout.gutterY * -1,\n        x: 40 * -1,\n        Column: {\n          type: Column,\n          y: context.theme.layout.gutterY,\n          x: 40,\n          items: [\n            {\n              type: Row,\n              items: tilesA,\n              autoResizeHeight: true\n            },\n            {\n              type: Row,\n\n              items: tilesA,\n              autoResizeHeight: true\n            },\n            {\n              type: Row,\n\n              items: tilesA,\n              autoResizeHeight: true\n            },\n            {\n              type: Row,\n\n              items: tilesA,\n              autoResizeHeight: true\n            }\n          ]\n        }\n      }\n    };\n  }\n  _getFocused() {\n    return this._Column;\n  }\n}\n\nexport const MultipleRows = () =>\n  class MultipleRows extends lng.Component {\n    static _template() {\n      return {\n        TabBar: {\n          type: TabBarComponent,\n          autoResizeWidth: true,\n          tabs: [\n            {\n              type: Tab,\n              title: 'No Content Tab'\n            },\n            {\n              type: Tab,\n              title: 'Multiple Rows',\n              tabContent: {\n                type: ColumnContainer\n              }\n            },\n            {\n              type: Tab,\n              title: 'Tab 2',\n              tabContent: col1\n            }\n          ]\n        }\n      };\n    }\n  };\n\nMultipleRows.args = {};\nMultipleRows.parameters = {\n  storyDetails:\n    'This is an example of adding multiple rows in the tab content column. A ColumnContainer was created to allow for clipping needed for scrolling'\n};\nMultipleRows.argTypes = {};\n",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 133
          },
          "endLoc": {
            "col": 3,
            "line": 174
          },
          "startBody": {
            "col": 21,
            "line": 133
          },
          "endBody": {
            "col": 3,
            "line": 174
          }
        },
        "custom-tabs": {
          "startLoc": {
            "col": 26,
            "line": 215
          },
          "endLoc": {
            "col": 3,
            "line": 259
          },
          "startBody": {
            "col": 26,
            "line": 215
          },
          "endBody": {
            "col": 3,
            "line": 259
          }
        },
        "multiple-rows": {
          "startLoc": {
            "col": 28,
            "line": 321
          },
          "endLoc": {
            "col": 3,
            "line": 349
          },
          "startBody": {
            "col": 28,
            "line": 321
          },
          "endBody": {
            "col": 3,
            "line": 349
          }
        }
      }
    }
  },
  title: 'Components/TabBar',
  args: {
    collapse: false,
    alphaSelectedTab: false,
    wrapSelected: false,
    mode: 'focused'
  },
  argTypes: TabBar_stories_objectSpread(TabBar_stories_objectSpread({}, (0,utils/* createModeControl */.Ys)({
    summaryValue: 'focused'
  })), {}, {
    alphaSelectedTab: {
      control: 'boolean',
      description: 'When true, a lower alpha will be applied to unselected tabs when focus is delegated to the tab content',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    collapse: {
      control: 'boolean',
      description: 'When true, the height of the TabBar will only reflect the height of the Tabs when unfocused or no tab content is available',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    wrapSelected: {
      control: 'boolean',
      description: 'Enables wrapping behavior, so selectNext selects the first item if the current item is the last on the list and vice versa',
      table: {
        defaultValue: {
          summary: false
        }
      }
    }
  })
});
var CustomButton = /*#__PURE__*/function (_ButtonSmall) {
  TabBar_stories_inherits(CustomButton, _ButtonSmall);
  var _super = TabBar_stories_createSuper(CustomButton);
  function CustomButton() {
    TabBar_stories_classCallCheck(this, CustomButton);
    return _super.apply(this, arguments);
  }
  TabBar_stories_createClass(CustomButton, [{
    key: "_focus",
    value: function _focus() {
      TabBar_stories_get(TabBar_stories_getPrototypeOf(CustomButton.prototype), "_focus", this).call(this);
      this.patch({
        w: 175,
        title: 'View All'
      });
      this.fireAncestors('$itemChanged');
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      TabBar_stories_get(TabBar_stories_getPrototypeOf(CustomButton.prototype), "_unfocus", this).call(this);
      this.patch({
        w: 72,
        title: ''
      });
      this.fireAncestors('$itemChanged');
    }
  }]);
  return CustomButton;
}(ButtonSmall/* default */.Z);
var createTiles = function createTiles(imgSrcs) {
  return imgSrcs.map(function (src) {
    return {
      type: Tile/* default */.Z,
      w: 410,
      h: 230,
      artwork: {
        src: src
      }
    };
  });
};
var tilesA = createTiles(['https://image.tmdb.org/t/p/w500/zHdQ6yaqDf3OQO5uhr0auAgwK6O.jpg', 'https://image.tmdb.org/t/p/w500/frwl2zBNAl5ZbFDJGoJv0mYo0rF.jpg', 'https://image.tmdb.org/t/p/w500/jauI01vUIkPA0xVsamGj0Gs1nNL.jpg', 'https://image.tmdb.org/t/p/w500/sQBS8MYXN9CZWV3gEDcL95G1KpA.jpg', 'https://image.tmdb.org/t/p/w500/m0iEEib19yHzyD8hLh09qkIWbwz.jpg']);
var tilesB = tilesA.slice().reverse();
var createColumn = function createColumn(titles) {
  return {
    type: Column/* default */.Z,
    h: 300,
    w: 410,
    style: {
      itemSpacing: 16
    },
    neverScroll: true,
    items: titles.map(function (title) {
      return {
        w: 410,
        type: Button/* default */.Z,
        title: title
      };
    })
  };
};
var col1 = createColumn(['Item 1', 'Item 2', 'Item 3']);
var col2 = createColumn(['Async Item 1', 'Async Item 2', 'Async Item 3']);
var rowFunction = function rowFunction() {
  return {
    type: Row/* default */.Z,
    items: tilesB,
    autoResizeHeight: true,
    alwaysScroll: true
  };
};
var colPromise = function colPromise() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(col2);
    }, 2000);
  });
};
var Basic = function Basic() {
  return /*#__PURE__*/function (_lng$Component) {
    TabBar_stories_inherits(Basic, _lng$Component);
    var _super2 = TabBar_stories_createSuper(Basic);
    function Basic() {
      TabBar_stories_classCallCheck(this, Basic);
      return _super2.apply(this, arguments);
    }
    TabBar_stories_createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          TabBar: {
            type: TabBar,
            w: 1920 - 160,
            tabs: [{
              type: Tab/* default */.Z,
              title: 'No Content Tab'
            }, {
              type: Tab/* default */.Z,
              title: 'Tab 1',
              tabContent: {
                type: Row/* default */.Z,
                items: tilesA,
                autoResizeHeight: true,
                lazyScroll: true
              }
            }, {
              type: Tab/* default */.Z,
              title: 'Tab 2',
              tabContent: col1
            }, {
              type: Tab/* default */.Z,
              title: 'Tab 3',
              tabContent: rowFunction
            }, {
              type: Tab/* default */.Z,
              title: 'Tab 4',
              tabContent: colPromise
            }]
          }
        };
      }
    }]);
    return Basic;
  }(lightning_esm/* default */.Z.Component);
};
;
var CustomTile = /*#__PURE__*/function (_Tile) {
  TabBar_stories_inherits(CustomTile, _Tile);
  var _super3 = TabBar_stories_createSuper(CustomTile);
  function CustomTile() {
    TabBar_stories_classCallCheck(this, CustomTile);
    return _super3.apply(this, arguments);
  }
  TabBar_stories_createClass(CustomTile, [{
    key: "_update",
    value: function _update() {
      TabBar_stories_get(TabBar_stories_getPrototypeOf(CustomTile.prototype), "_update", this).call(this);
      this._updateSoftFocus();
    }
  }, {
    key: "_updateSoftFocus",
    value: function _updateSoftFocus() {
      var _context$theme = context/* default */.Z.theme,
        color = _context$theme.color,
        spacer = _context$theme.spacer;
      if (this.mode === 'selected') {
        this.tag('SoftFocus').patch({
          rect: true,
          color: color.interactiveNeutralFocus,
          h: spacer.xs,
          w: spacer.xxxl + spacer.xxl + spacer.xs,
          mountX: 0.5,
          mountY: 1,
          y: this.h + spacer.lg + spacer.xs,
          x: this.w / 2
        });
      } else {
        this.tag('SoftFocus').patch({
          h: 0,
          w: 0
        });
      }
    }
  }], [{
    key: "_template",
    value: function _template() {
      return TabBar_stories_objectSpread(TabBar_stories_objectSpread({}, TabBar_stories_get(TabBar_stories_getPrototypeOf(CustomTile), "_template", this).call(this)), {}, {
        SoftFocus: {}
      });
    }
  }]);
  return CustomTile;
}(Tile/* default */.Z);
var tileProps = {
  w: 100,
  h: 100,
  radius: 50,
  imgRadius: 50,
  artwork: {
    icon: ic_lightning_white_32
  }
};
var CustomTabs = function CustomTabs() {
  return /*#__PURE__*/function (_lng$Component2) {
    TabBar_stories_inherits(CustomTabs, _lng$Component2);
    var _super4 = TabBar_stories_createSuper(CustomTabs);
    function CustomTabs() {
      TabBar_stories_classCallCheck(this, CustomTabs);
      return _super4.apply(this, arguments);
    }
    TabBar_stories_createClass(CustomTabs, null, [{
      key: "_template",
      value: function _template() {
        return {
          TabBar: {
            type: TabBar,
            w: 1920 - 160,
            tabs: [{
              type: CustomButton,
              fixed: true,
              prefix: [{
                type: Icon/* default */.Z,
                icon: view_all_namespaceObject,
                w: 20,
                h: 20
              }],
              centerInParent: true,
              backgroundType: 'fill'
            }, TabBar_stories_objectSpread(TabBar_stories_objectSpread({
              type: CustomTile
            }, tileProps), {}, {
              tabContent: {
                type: Row/* default */.Z,
                items: tilesA,
                autoResizeHeight: true,
                lazyScroll: true
              }
            }), TabBar_stories_objectSpread(TabBar_stories_objectSpread({
              type: CustomTile
            }, tileProps), {}, {
              tabContent: col1
            }), TabBar_stories_objectSpread(TabBar_stories_objectSpread({
              type: CustomTile
            }, tileProps), {}, {
              tabContent: rowFunction
            }), TabBar_stories_objectSpread(TabBar_stories_objectSpread({
              type: CustomTile
            }, tileProps), {}, {
              tabContent: colPromise
            })]
          }
        };
      }
    }]);
    return CustomTabs;
  }(lightning_esm/* default */.Z.Component);
};
;
CustomTabs.args = {
  alphaSelectedTab: false
};
CustomTabs.argTypes = {};
var ColumnContainer = /*#__PURE__*/function (_Base) {
  TabBar_stories_inherits(ColumnContainer, _Base);
  var _super5 = TabBar_stories_createSuper(ColumnContainer);
  function ColumnContainer() {
    TabBar_stories_classCallCheck(this, ColumnContainer);
    return _super5.apply(this, arguments);
  }
  TabBar_stories_createClass(ColumnContainer, [{
    key: "_getFocused",
    value: function _getFocused() {
      return this._Column;
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ColumnContainer';
    }
  }, {
    key: "tags",
    get: function get() {
      return ['ClippingOffsetContainer', {
        name: 'Column',
        path: 'ClippingOffsetContainer.Column'
      }];
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        ClippingOffsetContainer: {
          w: 1920 - 160,
          h: 600,
          clipping: true,
          y: context/* default */.Z.theme.layout.gutterY * -1,
          x: 40 * -1,
          Column: {
            type: Column/* default */.Z,
            y: context/* default */.Z.theme.layout.gutterY,
            x: 40,
            items: [{
              type: Row/* default */.Z,
              items: tilesA,
              autoResizeHeight: true
            }, {
              type: Row/* default */.Z,
              items: tilesA,
              autoResizeHeight: true
            }, {
              type: Row/* default */.Z,
              items: tilesA,
              autoResizeHeight: true
            }, {
              type: Row/* default */.Z,
              items: tilesA,
              autoResizeHeight: true
            }]
          }
        }
      };
    }
  }]);
  return ColumnContainer;
}(Base/* default */.Z);
var MultipleRows = function MultipleRows() {
  return /*#__PURE__*/function (_lng$Component3) {
    TabBar_stories_inherits(MultipleRows, _lng$Component3);
    var _super6 = TabBar_stories_createSuper(MultipleRows);
    function MultipleRows() {
      TabBar_stories_classCallCheck(this, MultipleRows);
      return _super6.apply(this, arguments);
    }
    TabBar_stories_createClass(MultipleRows, null, [{
      key: "_template",
      value: function _template() {
        return {
          TabBar: {
            type: TabBar,
            autoResizeWidth: true,
            tabs: [{
              type: Tab/* default */.Z,
              title: 'No Content Tab'
            }, {
              type: Tab/* default */.Z,
              title: 'Multiple Rows',
              tabContent: {
                type: ColumnContainer
              }
            }, {
              type: Tab/* default */.Z,
              title: 'Tab 2',
              tabContent: col1
            }]
          }
        };
      }
    }]);
    return MultipleRows;
  }(lightning_esm/* default */.Z.Component);
};
MultipleRows.args = {};
MultipleRows.parameters = {
  storyDetails: 'This is an example of adding multiple rows in the tab content column. A ColumnContainer was created to allow for clipping needed for scrolling'
};
MultipleRows.argTypes = {};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      TabBar: {\n        type: TabBarComponent,\n        w: 1920 - 160,\n        tabs: [{\n          type: Tab,\n          title: 'No Content Tab'\n        }, {\n          type: Tab,\n          title: 'Tab 1',\n          tabContent: {\n            type: Row,\n            items: tilesA,\n            autoResizeHeight: true,\n            lazyScroll: true\n          }\n        }, {\n          type: Tab,\n          title: 'Tab 2',\n          tabContent: col1\n        }, {\n          type: Tab,\n          title: 'Tab 3',\n          tabContent: rowFunction\n        }, {\n          type: Tab,\n          title: 'Tab 4',\n          tabContent: colPromise\n        }]\n      }\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
CustomTabs.parameters = {
  ...CustomTabs.parameters,
  docs: {
    ...CustomTabs.parameters?.docs,
    source: {
      originalSource: "() => class CustomTabs extends lng.Component {\n  static _template() {\n    return {\n      TabBar: {\n        type: TabBarComponent,\n        w: 1920 - 160,\n        tabs: [{\n          type: CustomButton,\n          fixed: true,\n          prefix: [{\n            type: Icon,\n            icon: viewAllIcon,\n            w: 20,\n            h: 20\n          }],\n          centerInParent: true,\n          backgroundType: 'fill'\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: {\n            type: Row,\n            items: tilesA,\n            autoResizeHeight: true,\n            lazyScroll: true\n          }\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: col1\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: rowFunction\n        }, {\n          type: CustomTile,\n          ...tileProps,\n          tabContent: colPromise\n        }]\n      }\n    };\n  }\n}",
      ...CustomTabs.parameters?.docs?.source
    }
  }
};
MultipleRows.parameters = {
  ...MultipleRows.parameters,
  docs: {
    ...MultipleRows.parameters?.docs,
    source: {
      originalSource: "() => class MultipleRows extends lng.Component {\n  static _template() {\n    return {\n      TabBar: {\n        type: TabBarComponent,\n        autoResizeWidth: true,\n        tabs: [{\n          type: Tab,\n          title: 'No Content Tab'\n        }, {\n          type: Tab,\n          title: 'Multiple Rows',\n          tabContent: {\n            type: ColumnContainer\n          }\n        }, {\n          type: Tab,\n          title: 'Tab 2',\n          tabContent: col1\n        }]\n      }\n    };\n  }\n}",
      ...MultipleRows.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Basic","CustomTabs","MultipleRows"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ButtonSmall)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.styles.js
var ButtonSmall_styles_namespaceObject = {};
__webpack_require__.r(ButtonSmall_styles_namespaceObject);
__webpack_require__.d(ButtonSmall_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.styles.js
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
    minWidth: (0,utils/* getWidthByColumnSpan */.wO)(theme, 1),
    paddingX: theme.spacer.xxl,
    paddingXNoTitle: theme.spacer.lg,
    paddingY: theme.spacer.lg,
    textStyle: theme.typography.button2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Button/ButtonSmall.js
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



var ButtonSmall = /*#__PURE__*/function (_Button) {
  _inherits(ButtonSmall, _Button);
  var _super = _createSuper(ButtonSmall);
  function ButtonSmall() {
    _classCallCheck(this, ButtonSmall);
    return _super.apply(this, arguments);
  }
  _createClass(ButtonSmall, null, [{
    key: "__componentName",
    get: function get() {
      return 'ButtonSmall';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ButtonSmall_styles_namespaceObject;
    }
  }]);
  return ButtonSmall;
}(Button/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=8905.d960255f.iframe.bundle.js.map