"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5859],{

/***/ "../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  ObjectArray: () => (/* binding */ ObjectArray),
  TextArray: () => (/* binding */ TextArray),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ScrollWrapper_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.styles.js
var ScrollWrapper_styles_namespaceObject = {};
__webpack_require__.r(ScrollWrapper_styles_namespaceObject);
__webpack_require__.d(ScrollWrapper_styles_namespaceObject, {
  base: () => (ScrollWrapper_styles_base)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollSlider.styles.js
var ScrollSlider_styles_namespaceObject = {};
__webpack_require__.r(ScrollSlider_styles_namespaceObject);
__webpack_require__.d(ScrollSlider_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.styles.js
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

var ScrollWrapper_styles_base = function base(theme) {
  return {
    textStyle: theme.typography.body2,
    fadeHeight: 100,
    scroll: {
      timingFunction: 'linear',
      duration: theme.animation.duration.xfast
    },
    contentMarginTop: theme.spacer.md,
    contentMarginLeft: theme.spacer.xl,
    sliderMarginLeft: theme.spacer.lg + theme.spacer.xxs
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("../../@lightningjs/ui-components/src/components/Slider/Slider.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollSlider.styles.js
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
  var _scrollWrapperBase = ScrollWrapper_styles_base(theme),
    scroll = _scrollWrapperBase.scroll;
  return {
    progressBar: {
      animation: scroll
    },
    circleAnimation: scroll
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollSlider.js
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



var ScrollSlider = /*#__PURE__*/function (_Slider) {
  _inherits(ScrollSlider, _Slider);
  var _super = _createSuper(ScrollSlider);
  function ScrollSlider() {
    _classCallCheck(this, ScrollSlider);
    return _super.apply(this, arguments);
  }
  _createClass(ScrollSlider, null, [{
    key: "__componentName",
    get: function get() {
      return 'ScrollSlider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ScrollSlider_styles_namespaceObject;
    }
  }]);
  return ScrollSlider;
}(Slider/* default */.Z);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.js
function ScrollWrapper_typeof(o) { "@babel/helpers - typeof"; return ScrollWrapper_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ScrollWrapper_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ScrollWrapper_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ScrollWrapper_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ScrollWrapper_toPropertyKey(descriptor.key), descriptor); } }
function ScrollWrapper_createClass(Constructor, protoProps, staticProps) { if (protoProps) ScrollWrapper_defineProperties(Constructor.prototype, protoProps); if (staticProps) ScrollWrapper_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = ScrollWrapper_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ScrollWrapper_toPropertyKey(t) { var i = ScrollWrapper_toPrimitive(t, "string"); return "symbol" == ScrollWrapper_typeof(i) ? i : String(i); }
function ScrollWrapper_toPrimitive(t, r) { if ("object" != ScrollWrapper_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != ScrollWrapper_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = ScrollWrapper_getPrototypeOf(object); if (object === null) break; } return object; }
function ScrollWrapper_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ScrollWrapper_setPrototypeOf(subClass, superClass); }
function ScrollWrapper_setPrototypeOf(o, p) { ScrollWrapper_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ScrollWrapper_setPrototypeOf(o, p); }
function ScrollWrapper_createSuper(Derived) { var hasNativeReflectConstruct = ScrollWrapper_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ScrollWrapper_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ScrollWrapper_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ScrollWrapper_possibleConstructorReturn(this, result); }; }
function ScrollWrapper_possibleConstructorReturn(self, call) { if (call && (ScrollWrapper_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ScrollWrapper_assertThisInitialized(self); }
function ScrollWrapper_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ScrollWrapper_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ScrollWrapper_getPrototypeOf(o) { ScrollWrapper_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ScrollWrapper_getPrototypeOf(o); }
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






var ScrollWrapper = /*#__PURE__*/function (_Base) {
  ScrollWrapper_inherits(ScrollWrapper, _Base);
  var _super = ScrollWrapper_createSuper(ScrollWrapper);
  function ScrollWrapper() {
    ScrollWrapper_classCallCheck(this, ScrollWrapper);
    return _super.apply(this, arguments);
  }
  ScrollWrapper_createClass(ScrollWrapper, [{
    key: "_construct",
    value: function _construct() {
      _get(ScrollWrapper_getPrototypeOf(ScrollWrapper.prototype), "_construct", this).call(this);
      this._scrollStep = 10;
      this._shouldWrap = false;
      this._flexDirection = 'column';
      this._fadeContent = true;
      this._sliderWidth = 0;
    }
  }, {
    key: "_afterTextBoxUpdate",
    value: function _afterTextBoxUpdate(textBox) {
      // NOTE: this does get called every time ScrollWrapper updates (ex. on each scroll change)
      if (this._prevW !== textBox.finalW || this._prevH !== textBox.finalH) {
        this._prevW = textBox.finalW;
        this._prevH = textBox.finalH;
        this._updateScrollWrapperLayout();
        this._updateAlpha();
      }
    }
  }, {
    key: "_resetFlexContainer",
    value: function _resetFlexContainer() {
      this._FadeContainer.patch({
        ScrollContainer: undefined
      });
      this._FadeContainer.patch({
        ScrollContainer: {
          w: function w(_w) {
            return _w;
          },
          wordWrap: true
        }
      });
    }
  }, {
    key: "_update",
    value: function _update() {
      if (this._contentChanged) {
        this._resetFlexContainer();
        this._updateAutoScroll();
      }
      this._updateScrollContainer();
      this._updateScrollWrapperLayout();
      this._updateAlpha();
    }
  }, {
    key: "_updateAutoScroll",
    value: function _updateAutoScroll() {
      this.resetScroll();
      this._setupAutoScroll();
      this._contentChanged = false;
    }
  }, {
    key: "_updateScrollWrapperLayout",
    value: function _updateScrollWrapperLayout() {
      this._ScrollContainer.patch({
        w: this._contentWidth
      });
      this._updateFadeContainer();
      this._updateSlider();
    }
  }, {
    key: "_updateAlpha",
    value: function _updateAlpha() {
      this._Slider.smooth = {
        alpha: this.showScrollBar && this._isFocusedMode ? 1 : 0
      };
    }
  }, {
    key: "_updateFadeContainer",
    value: function _updateFadeContainer() {
      var isScrollable = this._ScrollContainer.finalH > this.h;
      var shouldFade = this.fadeContent && isScrollable && !this._isEndContentVisible;
      this._FadeContainer.patch({
        h: this.h,
        w: this._contentWidth,
        y: this.style.contentMarginTop,
        x: this.style.contentMarginLeft,
        rtt: true,
        shader: shouldFade ? {
          type: lightning_esm/* default */.Z.shaders.FadeOut,
          bottom: this.style.fadeHeight
        } : undefined
      });
    }
  }, {
    key: "_scrollContainerLoaded",
    value: function _scrollContainerLoaded(_ref) {
      var h = _ref.h;
      this._ScrollContainer.h = h;
      this._updateScrollWrapperLayout();
    }
  }, {
    key: "_updateScrollContainer",
    value: function _updateScrollContainer() {
      var _this = this;
      if (!this.content) return;
      if (typeof this.content === 'string') {
        this._ScrollContainer.patch({
          flex: {
            direction: 'column'
          },
          ScrollableText: {
            h: 0,
            w: this._contentWidth,
            type: TextBox/* default */.Z,
            content: this.content,
            style: {
              textStyle: _objectSpread(_objectSpread({}, this.style.textStyle), {}, {
                wordWrap: true,
                wordWrapWidth: this._contentWidth
              })
            },
            signals: {
              textBoxChanged: '_scrollContainerLoaded'
            },
            onAfterUpdate: this._afterTextBoxUpdate.bind(this)
          }
        });
      } else if (Array.isArray(this.content)) {
        var content = {};
        this.content.forEach(function (item, index) {
          var id = "ScrollText".concat(index);
          content[id] = _objectSpread({
            w: _this._contentWidth
          }, item);
          if (item.text) {
            content[id] = {
              type: TextBox/* default */.Z,
              content: item.text,
              style: {
                textStyle: _objectSpread(_objectSpread(_objectSpread({}, _this.style.textStyle), item.style), {}, {
                  wordWrap: true,
                  wordWrapWidth: _this._contentWidth
                })
              },
              onAfterUpdate: _this._afterTextBoxUpdate.bind(_this)
            };
          }
        });
        this._ScrollContainer.patch(_objectSpread({
          flex: {
            direction: this.flexDirection,
            wrap: this.shouldWrap
          }
        }, content));
      }
    }
  }, {
    key: "_scrollDown",
    value: function _scrollDown() {
      var hasContentToScrollTo = this._scrollContainerY + this._ScrollContainer.finalH > this.renderHeight;
      if (hasContentToScrollTo) {
        var targetY = this._scrollContainerY - this.scrollStep;
        var canScrollByStepLength = targetY + this._ScrollContainer.finalH > this.renderHeight;
        var scrollEndY = this.renderHeight - this._ScrollContainer.finalH - this.style.contentMarginTop;
        this._ScrollContainer.patch({
          smooth: {
            y: [canScrollByStepLength ? targetY : scrollEndY, this._scrollAnimation]
          }
        });
        var hasScrolledToEnd = this._scrollContainerY + this._ScrollContainer.finalH <= this.h;
        if (hasScrolledToEnd) {
          this._isEndContentVisible = true;
          this._autoScrollComplete = true;
          this.fireAncestors('$scrollChanged', 'endDown', this);
          this._updateFadeContainer();
        }
      }
    }
  }, {
    key: "_scrollUp",
    value: function _scrollUp() {
      var canScrollUp = this._scrollContainerY < 0;
      if (canScrollUp) {
        var targetY = this._scrollContainerY + this.scrollStep;
        var canScrollByStepLength = targetY < 0;
        this._ScrollContainer.patch({
          smooth: {
            y: [canScrollByStepLength ? targetY : 0, this._scrollAnimation]
          }
        });
        var isScrollable = this._scrollContainerY + this._ScrollContainer.finalH > this.renderHeight;
        if (isScrollable) {
          this._autoScrollComplete = false;
        }
        if (this._scrollContainerY >= 0) {
          this.fireAncestors('$scrollChanged', 'endUp', this);
        }
        if (this._isEndContentVisible) {
          this._isEndContentVisible = false;
          this._updateFadeContainer();
        }
      }
    }
  }, {
    key: "resetScroll",
    value: function resetScroll() {
      this._ScrollContainer.y = 0;
      this._Slider.value = 0;
      this._ScrollContainer.transition('y').finish();
      delete this._ScrollContainer._transitions;
      this._autoScrollComplete = false;
    }
  }, {
    key: "_setAutoScroll",
    value: function _setAutoScroll(val) {
      if (this._autoScroll !== val) {
        this._autoScroll = val;
      }
      this._setupAutoScroll();
      return val;
    }
  }, {
    key: "_setupAutoScroll",
    value: function _setupAutoScroll() {
      var _this2 = this;
      clearTimeout(this._startAutoScroll);
      clearTimeout(this._performAutoScrollTimer);
      if (this.autoScroll) {
        this._startAutoScroll = setTimeout(function () {
          return _this2._performAutoScroll();
        }, isNaN(this.autoScrollDelay) ? 2000 : this.autoScrollDelay);
      }
    }
  }, {
    key: "_performAutoScroll",
    value: function _performAutoScroll() {
      var _this3 = this;
      if (this.autoScroll && !this._autoScrollComplete) {
        this._Slider._handleDown();
        this._performAutoScrollTimer = setTimeout(function () {
          return _this3._performAutoScroll();
        }, isNaN(this.autoScrollSpeed) ? 200 : this.autoScrollSpeed);
      }
    }
  }, {
    key: "_setContent",
    value: function _setContent(content) {
      if (content !== this._content && this.enabled) {
        this._contentChanged = true;
      }
      return content;
    }
  }, {
    key: "_updateScrollContainerSize",
    value: function _updateScrollContainerSize(slider) {
      if (this._sliderWidth !== slider._Container.h) {
        this._sliderWidth = slider._Container.h;
        this._updateScrollContainer();
      }
    }
  }, {
    key: "_updateSlider",
    value: function _updateSlider() {
      // height of off screen items that can be scrolled to
      var scrollHeight = this._ScrollContainer.finalH - this.renderHeight;
      // number of steps to scroll to bottom of ScrollContainer
      var contentScrollSteps = Math.ceil(scrollHeight / this.scrollStep);
      // max value of slider
      var sliderMax = this.renderHeight;
      // distance slider should move on each key press
      var sliderStep = sliderMax / contentScrollSteps;

      // This is a vertical slider, so w is actually controlling the height
      this._Slider.patch({
        x: this.w - this._sliderWidth,
        w: sliderMax,
        min: 0,
        max: sliderMax,
        step: sliderStep,
        onUp: this._scrollUp.bind(this),
        onDown: this._scrollDown.bind(this)
      });
    }
  }, {
    key: "_contentWidth",
    get: function get() {
      return this.w - this.style.contentMarginLeft - this.style.sliderMarginLeft - this._sliderWidth;
    }
  }, {
    key: "_scrollContainerY",
    get: function get() {
      return this._ScrollContainer.transition('y').targetValue;
    }
  }, {
    key: "_scrollAnimation",
    get: function get() {
      var duration = isNaN(this.scrollDuration) ? this.style.scroll.duration : this.scrollDuration;
      return _objectSpread(_objectSpread({}, this.style.scroll), {}, {
        duration: duration
      });
    }
  }, {
    key: "_getFocused",
    value: function _getFocused() {
      return this._Slider;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      if (Array.isArray(this.content)) {
        if (this._ScrollContainer && this._ScrollContainer.children && this._ScrollContainer.children.length) {
          return this._ScrollContainer.children.map(function (item) {
            return item.announce;
          });
        } else {
          return this.content.map(function (item) {
            return item.announce || item.text;
          });
        }
      }
      return this.content;
    },
    set: function set(announce) {
      _set(ScrollWrapper_getPrototypeOf(ScrollWrapper.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__themeStyle",
    get: function get() {
      return ScrollWrapper_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        clipping: true,
        FadeContainer: {
          ScrollContainer: {
            w: function w(_w2) {
              return _w2;
            },
            wordWrap: true
          }
        },
        Slider: {
          type: ScrollSlider,
          vertical: true,
          signals: {
            onSizeChange: '_updateScrollContainerSize'
          },
          announce: ' '
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'ScrollWrapper';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['autoScroll', 'autoScrollDelay', 'autoScrollSpeed', 'content', 'fadeContent', 'scrollDuration', 'scrollStep', 'showScrollBar', 'shouldWrap', 'flexDirection'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['FadeContainer', 'Slider', {
        name: 'ScrollContainer',
        path: 'FadeContainer.ScrollContainer'
      }, {
        name: 'ScrollableText',
        path: 'ScrollContainer.ScrollableText'
      }];
    }
  }]);
  return ScrollWrapper;
}(Base/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Tile/Tile.js + 1 modules
var Tile = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ScrollWrapper/ScrollWrapper.stories.js
function ScrollWrapper_stories_typeof(o) {
  "@babel/helpers - typeof";

  return ScrollWrapper_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, ScrollWrapper_stories_typeof(o);
}
function ScrollWrapper_stories_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function ScrollWrapper_stories_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, ScrollWrapper_stories_toPropertyKey(descriptor.key), descriptor);
  }
}
function ScrollWrapper_stories_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) ScrollWrapper_stories_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) ScrollWrapper_stories_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function ScrollWrapper_stories_inherits(subClass, superClass) {
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
  if (superClass) ScrollWrapper_stories_setPrototypeOf(subClass, superClass);
}
function ScrollWrapper_stories_setPrototypeOf(o, p) {
  ScrollWrapper_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return ScrollWrapper_stories_setPrototypeOf(o, p);
}
function ScrollWrapper_stories_createSuper(Derived) {
  var hasNativeReflectConstruct = ScrollWrapper_stories_isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = ScrollWrapper_stories_getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = ScrollWrapper_stories_getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return ScrollWrapper_stories_possibleConstructorReturn(this, result);
  };
}
function ScrollWrapper_stories_possibleConstructorReturn(self, call) {
  if (call && (ScrollWrapper_stories_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return ScrollWrapper_stories_assertThisInitialized(self);
}
function ScrollWrapper_stories_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function ScrollWrapper_stories_isNativeReflectConstruct() {
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
function ScrollWrapper_stories_getPrototypeOf(o) {
  ScrollWrapper_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return ScrollWrapper_stories_getPrototypeOf(o);
}
function ScrollWrapper_stories_ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function ScrollWrapper_stories_objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ScrollWrapper_stories_ownKeys(Object(t), !0).forEach(function (r) {
      ScrollWrapper_stories_defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ScrollWrapper_stories_ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function ScrollWrapper_stories_defineProperty(obj, key, value) {
  key = ScrollWrapper_stories_toPropertyKey(key);
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
function ScrollWrapper_stories_toPropertyKey(t) {
  var i = ScrollWrapper_stories_toPrimitive(t, "string");
  return "symbol" == ScrollWrapper_stories_typeof(i) ? i : String(i);
}
function ScrollWrapper_stories_toPrimitive(t, r) {
  if ("object" != ScrollWrapper_stories_typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != ScrollWrapper_stories_typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ScrollWrapperComponent } from '.';\nimport Tile from '../Tile';\nimport { createModeControl } from '../../docs/utils';\nimport TextBox from '../TextBox/TextBox';\n\nconst terms = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna. Nunc sed velit dignissim sodales. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Facilisis gravida neque convallis a cras semper auctor. Pellentesque pulvinar pellentesque habitant morbi tristique. Non tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet risus nullam eget felis eget nunc. Auctor urna nunc id cursus metus aliquam eleifend mi in. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ac felis donec et odio pellentesque. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Sit amet risus nullam eget felis eget.\n\nMi proin sed libero enim sed faucibus. Arcu vitae elementum curabitur vitae nunc sed velit. Volutpat blandit aliquam etiam erat velit. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tristique risus nec feugiat in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Eget est lorem ipsum dolor sit amet consectetur. At tellus at urna condimentum mattis pellentesque id. Maecenas accumsan lacus vel facilisis. Metus dictum at tempor commodo ullamcorper a lacus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tempor nec feugiat nisl pretium fusce id velit ut.`;\n\nexport default {\n  title: 'Components/ScrollWrapper'\n};\n\nconst sharedArgs = {\n  autoScroll: false,\n  autoScrollDelay: 2000,\n  autoScrollSpeed: 200,\n  fadeContent: true,\n  scrollDuration: 0.2,\n  scrollStep: 10,\n  showScrollBar: true,\n  mode: 'focused'\n};\n\nconst sharedArgTypes = {\n  ...createModeControl({\n    options: ['unfocused', 'focused'],\n    summaryValue: false\n  }),\n  autoScroll: {\n    control: 'boolean',\n    description: 'Whether or not to auto scroll the content',\n    type: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  autoScrollDelay: {\n    control: 'number',\n    description: 'Delay, in ms, before auto scroll starts',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 2000 }\n    }\n  },\n  autoScrollSpeed: {\n    control: 'number',\n    description: 'Time delay, in ms, before each scroll step',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 2000 }\n    }\n  },\n  fadeContent: {\n    control: 'boolean',\n    description: 'Fade out content at the bottom of the ScrollWrapper',\n    type: 'boolean',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  scrollDuration: {\n    control: 'number',\n    description: 'Animation duration for the scroll',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 0.2 }\n    }\n  },\n  scrollStep: {\n    control: 'number',\n    description: 'How many pixels to scroll by on every up/down keypress',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 10 }\n    }\n  },\n  showScrollBar: {\n    control: 'boolean',\n    description: 'Show the scroll bar when focused ',\n    type: 'boolean',\n    table: {\n      defaultValue: { summary: true }\n    }\n  }\n};\n\nexport const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        ScrollWrapper: {\n          type: ScrollWrapperComponent,\n          h: 448,\n          w: 796,\n          content: terms,\n          signals: {\n            scrollChanged: true\n          }\n        }\n      };\n    }\n\n    $scrollChanged(type) {\n      args.scrollChanged(type);\n    }\n  };\n\nBasic.args = sharedArgs;\nBasic.argTypes = sharedArgTypes;\nBasic.parameters = {\n  storyDetails: 'The ScrollWrapper content property is set as a string.'\n};\n\nexport const TextArray = args =>\n  class TextArray extends lng.Component {\n    static _template() {\n      return {\n        ScrollWrapper: {\n          type: ScrollWrapperComponent,\n          h: 450,\n          w: 600,\n          wordWrap: true,\n          content: [\n            {\n              text: 'Text Heading',\n              style: {\n                fontFace: 'XfinityBrownBold',\n                alignContent: 'center'\n              }\n            },\n            {\n              text: terms,\n              style: {\n                alignContent: 'left',\n                fontSize: '30'\n              }\n            }\n          ],\n          signals: {\n            scrollChanged: true\n          }\n        }\n      };\n    }\n\n    $scrollChanged(type) {\n      args.scrollChanged(type);\n    }\n  };\n\nTextArray.args = sharedArgs;\nTextArray.argTypes = sharedArgTypes;\nTextArray.parameters = {\n  storyDetails:\n    'The ScrollWrapper content property is set as an array of text objects. See the InlineContent documentation for more details on these types of objects.'\n};\n\nexport const ObjectArray = args =>\n  class ObjectArray extends lng.Component {\n    static _template() {\n      return {\n        ScrollWrapper: {\n          type: ScrollWrapperComponent,\n          h: 764,\n          w: 1200,\n          shouldWrap: true, // determines if items should wrap around ScrollContainer\n          flexDirection: 'row', //determines the direction items are placed in flexContainer\n          content: Array.from(Array(6)).map(() => ({\n            shader: {\n              type: lng.shaders.RoundedRectangle,\n              radius: 16\n            },\n            type: Tile,\n            rect: true,\n            w: 308,\n            h: 400,\n            color: 0xf53e3e45,\n            flexItem: {\n              margin: 24\n            },\n            Text: {\n              type: TextBox,\n              x: 20,\n              y: 10,\n              content:\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna.',\n              style: {\n                textStyle: {\n                  fontSize: 27,\n                  lineHeight: null,\n                  maxLines: 0,\n                  textAlign: 'left',\n                  verticalAlign: 'middle',\n                  wordWrapWidth: 270\n                }\n              },\n              shader: {\n                type: lng.shaders.RoundedRectangle,\n                radius: 0\n              }\n            }\n          })),\n          signals: {\n            scrollChanged: true\n          }\n        }\n      };\n    }\n\n    $scrollChanged(type) {\n      args.scrollChanged(type);\n    }\n  };\n\nObjectArray.args = sharedArgs;\nObjectArray.argTypes = sharedArgTypes;\nObjectArray.parameters = {\n  storyDetails:\n    'The ScrollWrapper content property is set as an array of Lightning elements.'\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 107
    },
    "endLoc": {
      "col": 3,
      "line": 126
    },
    "startBody": {
      "col": 21,
      "line": 107
    },
    "endBody": {
      "col": 3,
      "line": 126
    }
  },
  "TextArray": {
    "startLoc": {
      "col": 25,
      "line": 134
    },
    "endLoc": {
      "col": 3,
      "line": 169
    },
    "startBody": {
      "col": 25,
      "line": 134
    },
    "endBody": {
      "col": 3,
      "line": 169
    }
  },
  "ObjectArray": {
    "startLoc": {
      "col": 27,
      "line": 178
    },
    "endLoc": {
      "col": 3,
      "line": 233
    },
    "startBody": {
      "col": 27,
      "line": 178
    },
    "endBody": {
      "col": 3,
      "line": 233
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






var terms = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna. Nunc sed velit dignissim sodales. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Facilisis gravida neque convallis a cras semper auctor. Pellentesque pulvinar pellentesque habitant morbi tristique. Non tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet risus nullam eget felis eget nunc. Auctor urna nunc id cursus metus aliquam eleifend mi in. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ac felis donec et odio pellentesque. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Sit amet risus nullam eget felis eget.\n\nMi proin sed libero enim sed faucibus. Arcu vitae elementum curabitur vitae nunc sed velit. Volutpat blandit aliquam etiam erat velit. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tristique risus nec feugiat in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Eget est lorem ipsum dolor sit amet consectetur. At tellus at urna condimentum mattis pellentesque id. Maecenas accumsan lacus vel facilisis. Metus dictum at tempor commodo ullamcorper a lacus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tempor nec feugiat nisl pretium fusce id velit ut.";
/* harmony default export */ const ScrollWrapper_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ScrollWrapperComponent } from '.';\nimport Tile from '../Tile';\nimport { createModeControl } from '../../docs/utils';\nimport TextBox from '../TextBox/TextBox';\n\nconst terms = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna. Nunc sed velit dignissim sodales. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Facilisis gravida neque convallis a cras semper auctor. Pellentesque pulvinar pellentesque habitant morbi tristique. Non tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Amet risus nullam eget felis eget nunc. Auctor urna nunc id cursus metus aliquam eleifend mi in. Integer malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Ac felis donec et odio pellentesque. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Sit amet risus nullam eget felis eget.\n\nMi proin sed libero enim sed faucibus. Arcu vitae elementum curabitur vitae nunc sed velit. Volutpat blandit aliquam etiam erat velit. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Tristique risus nec feugiat in. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Eget est lorem ipsum dolor sit amet consectetur. At tellus at urna condimentum mattis pellentesque id. Maecenas accumsan lacus vel facilisis. Metus dictum at tempor commodo ullamcorper a lacus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Tempor nec feugiat nisl pretium fusce id velit ut.`;\n\nexport default {\n  title: 'Components/ScrollWrapper'\n};\n\nconst sharedArgs = {\n  autoScroll: false,\n  autoScrollDelay: 2000,\n  autoScrollSpeed: 200,\n  fadeContent: true,\n  scrollDuration: 0.2,\n  scrollStep: 10,\n  showScrollBar: true,\n  mode: 'focused'\n};\n\nconst sharedArgTypes = {\n  ...createModeControl({\n    options: ['unfocused', 'focused'],\n    summaryValue: false\n  }),\n  autoScroll: {\n    control: 'boolean',\n    description: 'Whether or not to auto scroll the content',\n    type: 'boolean',\n    table: {\n      defaultValue: { summary: false }\n    }\n  },\n  autoScrollDelay: {\n    control: 'number',\n    description: 'Delay, in ms, before auto scroll starts',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 2000 }\n    }\n  },\n  autoScrollSpeed: {\n    control: 'number',\n    description: 'Time delay, in ms, before each scroll step',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 2000 }\n    }\n  },\n  fadeContent: {\n    control: 'boolean',\n    description: 'Fade out content at the bottom of the ScrollWrapper',\n    type: 'boolean',\n    table: {\n      defaultValue: { summary: true }\n    }\n  },\n  scrollDuration: {\n    control: 'number',\n    description: 'Animation duration for the scroll',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 0.2 }\n    }\n  },\n  scrollStep: {\n    control: 'number',\n    description: 'How many pixels to scroll by on every up/down keypress',\n    type: 'number',\n    table: {\n      defaultValue: { summary: 10 }\n    }\n  },\n  showScrollBar: {\n    control: 'boolean',\n    description: 'Show the scroll bar when focused ',\n    type: 'boolean',\n    table: {\n      defaultValue: { summary: true }\n    }\n  }\n};\n\nexport const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        ScrollWrapper: {\n          type: ScrollWrapperComponent,\n          h: 448,\n          w: 796,\n          content: terms,\n          signals: {\n            scrollChanged: true\n          }\n        }\n      };\n    }\n\n    $scrollChanged(type) {\n      args.scrollChanged(type);\n    }\n  };\n\nBasic.args = sharedArgs;\nBasic.argTypes = sharedArgTypes;\nBasic.parameters = {\n  storyDetails: 'The ScrollWrapper content property is set as a string.'\n};\n\nexport const TextArray = args =>\n  class TextArray extends lng.Component {\n    static _template() {\n      return {\n        ScrollWrapper: {\n          type: ScrollWrapperComponent,\n          h: 450,\n          w: 600,\n          wordWrap: true,\n          content: [\n            {\n              text: 'Text Heading',\n              style: {\n                fontFace: 'XfinityBrownBold',\n                alignContent: 'center'\n              }\n            },\n            {\n              text: terms,\n              style: {\n                alignContent: 'left',\n                fontSize: '30'\n              }\n            }\n          ],\n          signals: {\n            scrollChanged: true\n          }\n        }\n      };\n    }\n\n    $scrollChanged(type) {\n      args.scrollChanged(type);\n    }\n  };\n\nTextArray.args = sharedArgs;\nTextArray.argTypes = sharedArgTypes;\nTextArray.parameters = {\n  storyDetails:\n    'The ScrollWrapper content property is set as an array of text objects. See the InlineContent documentation for more details on these types of objects.'\n};\n\nexport const ObjectArray = args =>\n  class ObjectArray extends lng.Component {\n    static _template() {\n      return {\n        ScrollWrapper: {\n          type: ScrollWrapperComponent,\n          h: 764,\n          w: 1200,\n          shouldWrap: true, // determines if items should wrap around ScrollContainer\n          flexDirection: 'row', //determines the direction items are placed in flexContainer\n          content: Array.from(Array(6)).map(() => ({\n            shader: {\n              type: lng.shaders.RoundedRectangle,\n              radius: 16\n            },\n            type: Tile,\n            rect: true,\n            w: 308,\n            h: 400,\n            color: 0xf53e3e45,\n            flexItem: {\n              margin: 24\n            },\n            Text: {\n              type: TextBox,\n              x: 20,\n              y: 10,\n              content:\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna.',\n              style: {\n                textStyle: {\n                  fontSize: 27,\n                  lineHeight: null,\n                  maxLines: 0,\n                  textAlign: 'left',\n                  verticalAlign: 'middle',\n                  wordWrapWidth: 270\n                }\n              },\n              shader: {\n                type: lng.shaders.RoundedRectangle,\n                radius: 0\n              }\n            }\n          })),\n          signals: {\n            scrollChanged: true\n          }\n        }\n      };\n    }\n\n    $scrollChanged(type) {\n      args.scrollChanged(type);\n    }\n  };\n\nObjectArray.args = sharedArgs;\nObjectArray.argTypes = sharedArgTypes;\nObjectArray.parameters = {\n  storyDetails:\n    'The ScrollWrapper content property is set as an array of Lightning elements.'\n};\n",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 107
          },
          "endLoc": {
            "col": 3,
            "line": 126
          },
          "startBody": {
            "col": 21,
            "line": 107
          },
          "endBody": {
            "col": 3,
            "line": 126
          }
        },
        "text-array": {
          "startLoc": {
            "col": 25,
            "line": 134
          },
          "endLoc": {
            "col": 3,
            "line": 169
          },
          "startBody": {
            "col": 25,
            "line": 134
          },
          "endBody": {
            "col": 3,
            "line": 169
          }
        },
        "object-array": {
          "startLoc": {
            "col": 27,
            "line": 178
          },
          "endLoc": {
            "col": 3,
            "line": 233
          },
          "startBody": {
            "col": 27,
            "line": 178
          },
          "endBody": {
            "col": 3,
            "line": 233
          }
        }
      }
    }
  },
  title: 'Components/ScrollWrapper'
});
var sharedArgs = {
  autoScroll: false,
  autoScrollDelay: 2000,
  autoScrollSpeed: 200,
  fadeContent: true,
  scrollDuration: 0.2,
  scrollStep: 10,
  showScrollBar: true,
  mode: 'focused'
};
var sharedArgTypes = ScrollWrapper_stories_objectSpread(ScrollWrapper_stories_objectSpread({}, (0,utils/* createModeControl */.Ys)({
  options: ['unfocused', 'focused'],
  summaryValue: false
})), {}, {
  autoScroll: {
    control: 'boolean',
    description: 'Whether or not to auto scroll the content',
    type: 'boolean',
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  autoScrollDelay: {
    control: 'number',
    description: 'Delay, in ms, before auto scroll starts',
    type: 'number',
    table: {
      defaultValue: {
        summary: 2000
      }
    }
  },
  autoScrollSpeed: {
    control: 'number',
    description: 'Time delay, in ms, before each scroll step',
    type: 'number',
    table: {
      defaultValue: {
        summary: 2000
      }
    }
  },
  fadeContent: {
    control: 'boolean',
    description: 'Fade out content at the bottom of the ScrollWrapper',
    type: 'boolean',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  scrollDuration: {
    control: 'number',
    description: 'Animation duration for the scroll',
    type: 'number',
    table: {
      defaultValue: {
        summary: 0.2
      }
    }
  },
  scrollStep: {
    control: 'number',
    description: 'How many pixels to scroll by on every up/down keypress',
    type: 'number',
    table: {
      defaultValue: {
        summary: 10
      }
    }
  },
  showScrollBar: {
    control: 'boolean',
    description: 'Show the scroll bar when focused ',
    type: 'boolean',
    table: {
      defaultValue: {
        summary: true
      }
    }
  }
});
var Basic = function Basic(args) {
  return /*#__PURE__*/function (_lng$Component) {
    ScrollWrapper_stories_inherits(Basic, _lng$Component);
    var _super = ScrollWrapper_stories_createSuper(Basic);
    function Basic() {
      ScrollWrapper_stories_classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    ScrollWrapper_stories_createClass(Basic, [{
      key: "$scrollChanged",
      value: function $scrollChanged(type) {
        args.scrollChanged(type);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ScrollWrapper: {
            type: ScrollWrapper,
            h: 448,
            w: 796,
            content: terms,
            signals: {
              scrollChanged: true
            }
          }
        };
      }
    }]);
    return Basic;
  }(lightning_esm/* default */.Z.Component);
};
;
Basic.args = sharedArgs;
Basic.argTypes = sharedArgTypes;
Basic.parameters = {
  storyDetails: 'The ScrollWrapper content property is set as a string.'
};
var TextArray = function TextArray(args) {
  return /*#__PURE__*/function (_lng$Component2) {
    ScrollWrapper_stories_inherits(TextArray, _lng$Component2);
    var _super2 = ScrollWrapper_stories_createSuper(TextArray);
    function TextArray() {
      ScrollWrapper_stories_classCallCheck(this, TextArray);
      return _super2.apply(this, arguments);
    }
    ScrollWrapper_stories_createClass(TextArray, [{
      key: "$scrollChanged",
      value: function $scrollChanged(type) {
        args.scrollChanged(type);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ScrollWrapper: {
            type: ScrollWrapper,
            h: 450,
            w: 600,
            wordWrap: true,
            content: [{
              text: 'Text Heading',
              style: {
                fontFace: 'XfinityBrownBold',
                alignContent: 'center'
              }
            }, {
              text: terms,
              style: {
                alignContent: 'left',
                fontSize: '30'
              }
            }],
            signals: {
              scrollChanged: true
            }
          }
        };
      }
    }]);
    return TextArray;
  }(lightning_esm/* default */.Z.Component);
};
;
TextArray.args = sharedArgs;
TextArray.argTypes = sharedArgTypes;
TextArray.parameters = {
  storyDetails: 'The ScrollWrapper content property is set as an array of text objects. See the InlineContent documentation for more details on these types of objects.'
};
var ObjectArray = function ObjectArray(args) {
  return /*#__PURE__*/function (_lng$Component3) {
    ScrollWrapper_stories_inherits(ObjectArray, _lng$Component3);
    var _super3 = ScrollWrapper_stories_createSuper(ObjectArray);
    function ObjectArray() {
      ScrollWrapper_stories_classCallCheck(this, ObjectArray);
      return _super3.apply(this, arguments);
    }
    ScrollWrapper_stories_createClass(ObjectArray, [{
      key: "$scrollChanged",
      value: function $scrollChanged(type) {
        args.scrollChanged(type);
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          ScrollWrapper: {
            type: ScrollWrapper,
            h: 764,
            w: 1200,
            shouldWrap: true,
            // determines if items should wrap around ScrollContainer
            flexDirection: 'row',
            //determines the direction items are placed in flexContainer
            content: Array.from(Array(6)).map(function () {
              return {
                shader: {
                  type: lightning_esm/* default */.Z.shaders.RoundedRectangle,
                  radius: 16
                },
                type: Tile/* default */.Z,
                rect: true,
                w: 308,
                h: 400,
                color: 0xf53e3e45,
                flexItem: {
                  margin: 24
                },
                Text: {
                  type: TextBox/* default */.Z,
                  x: 20,
                  y: 10,
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna.',
                  style: {
                    textStyle: {
                      fontSize: 27,
                      lineHeight: null,
                      maxLines: 0,
                      textAlign: 'left',
                      verticalAlign: 'middle',
                      wordWrapWidth: 270
                    }
                  },
                  shader: {
                    type: lightning_esm/* default */.Z.shaders.RoundedRectangle,
                    radius: 0
                  }
                }
              };
            }),
            signals: {
              scrollChanged: true
            }
          }
        };
      }
    }]);
    return ObjectArray;
  }(lightning_esm/* default */.Z.Component);
};
ObjectArray.args = sharedArgs;
ObjectArray.argTypes = sharedArgTypes;
ObjectArray.parameters = {
  storyDetails: 'The ScrollWrapper content property is set as an array of Lightning elements.'
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapperComponent,\n        h: 448,\n        w: 796,\n        content: terms,\n        signals: {\n          scrollChanged: true\n        }\n      }\n    };\n  }\n  $scrollChanged(type) {\n    args.scrollChanged(type);\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
TextArray.parameters = {
  ...TextArray.parameters,
  docs: {
    ...TextArray.parameters?.docs,
    source: {
      originalSource: "args => class TextArray extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapperComponent,\n        h: 450,\n        w: 600,\n        wordWrap: true,\n        content: [{\n          text: 'Text Heading',\n          style: {\n            fontFace: 'XfinityBrownBold',\n            alignContent: 'center'\n          }\n        }, {\n          text: terms,\n          style: {\n            alignContent: 'left',\n            fontSize: '30'\n          }\n        }],\n        signals: {\n          scrollChanged: true\n        }\n      }\n    };\n  }\n  $scrollChanged(type) {\n    args.scrollChanged(type);\n  }\n}",
      ...TextArray.parameters?.docs?.source
    }
  }
};
ObjectArray.parameters = {
  ...ObjectArray.parameters,
  docs: {
    ...ObjectArray.parameters?.docs,
    source: {
      originalSource: "args => class ObjectArray extends lng.Component {\n  static _template() {\n    return {\n      ScrollWrapper: {\n        type: ScrollWrapperComponent,\n        h: 764,\n        w: 1200,\n        shouldWrap: true,\n        // determines if items should wrap around ScrollContainer\n        flexDirection: 'row',\n        //determines the direction items are placed in flexContainer\n        content: Array.from(Array(6)).map(() => ({\n          shader: {\n            type: lng.shaders.RoundedRectangle,\n            radius: 16\n          },\n          type: Tile,\n          rect: true,\n          w: 308,\n          h: 400,\n          color: 0xf53e3e45,\n          flexItem: {\n            margin: 24\n          },\n          Text: {\n            type: TextBox,\n            x: 20,\n            y: 10,\n            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in ante metus dictum. Pretium fusce id velit ut tortor pretium viverra suspendisse. Pharetra convallis posuere morbi leo urna.',\n            style: {\n              textStyle: {\n                fontSize: 27,\n                lineHeight: null,\n                maxLines: 0,\n                textAlign: 'left',\n                verticalAlign: 'middle',\n                wordWrapWidth: 270\n              }\n            },\n            shader: {\n              type: lng.shaders.RoundedRectangle,\n              radius: 0\n            }\n          }\n        })),\n        signals: {\n          scrollChanged: true\n        }\n      }\n    };\n  }\n  $scrollChanged(type) {\n    args.scrollChanged(type);\n  }\n}",
      ...ObjectArray.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Basic","TextArray","ObjectArray"];

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

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
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
        this.innerH - 2, (0,utils/* getMaxRoundRadius */.JS)(this.style.radius, this.w, this.h), 0, null, true, this.style.backgroundColor)
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
//# sourceMappingURL=5859.bbbacaa9.iframe.bundle.js.map