"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4042,6115,4827,287],{

/***/ "../../@lightningjs/ui-components/src/components/Knob/Knob.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Knob)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Knob/Knob.styles.js
var Knob_styles_namespaceObject = {};
__webpack_require__.r(Knob_styles_namespaceObject);
__webpack_require__.d(Knob_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Knob/Knob.styles.js
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
  var size = theme.spacer.lg;
  return {
    width: size,
    height: size,
    radius: size / 2
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      circleColor: theme.color.interactiveNeutralFocus,
      mode: {
        disabled: {
          circleColor: theme.color.fillNeutralDisabled
        }
      }
    },
    inverse: {
      circleColor: theme.color.interactiveInverseFocus,
      mode: {
        disabled: {
          circleColor: theme.color.fillInverseDisabled
        }
      }
    },
    brand: {
      circleColor: theme.color.interactiveBrandFocus,
      mode: {
        disabled: {
          circleColor: theme.color.fillInverseDisabled
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Knob/Knob.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
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





var Knob = /*#__PURE__*/function (_Base) {
  function Knob() {
    _classCallCheck(this, Knob);
    return _callSuper(this, Knob, arguments);
  }
  _inherits(Knob, _Base);
  return _createClass(Knob, [{
    key: "_update",
    value: function _update() {
      this._updateLayout();
    }
  }, {
    key: "_updateLayout",
    value: function _updateLayout() {
      this.patch({
        texture: lightning_esm/* default */.A.Tools.getRoundRect(this.w, this.h, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w, this.h), null, null, true, this.style.circleColor)
      });
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Knob';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Knob_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        mount: 0.5
      };
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Slider/Slider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Slider)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Slider/Slider.styles.js
var Slider_styles_namespaceObject = {};
__webpack_require__.r(Slider_styles_namespaceObject);
__webpack_require__.d(Slider_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.styles.js
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
  var size = theme.spacer.lg;
  return {
    arrowAlphaValue: theme.alpha.primary,
    arrowAlphaValueLimit: theme.alpha.secondary,
    arrowHeight: theme.spacer.xxl,
    arrowSpacing: theme.spacer.md,
    arrowWidth: theme.spacer.xxl,
    arrowColor: theme.color.fillNeutral,
    containerHeight: theme.spacer.lg + theme.spacer.xs,
    iconLeftSrc: theme.asset.arrowLeft,
    iconRightSrc: theme.asset.arrowRight,
    minWidth: (0,utils/* getWidthByColumnSpan */._l)(theme, 2),
    progressBar: {},
    width: size,
    height: size,
    radius: size / 2,
    showArrows: true,
    showKnob: true,
    circleAnimation: {}
  };
};
var mode = function mode() {
  return {
    disabled: {
      arrowAlphaValue: 0
    }
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      arrowColor: theme.color.fillNeutral,
      circleColor: theme.color.interactiveNeutralFocus
    },
    inverse: {
      arrowColor: theme.color.fillInverse,
      circleColor: theme.color.interactiveInverseFocus
    },
    brand: {
      arrowColor: theme.color.fillNeutral,
      circleColor: theme.color.interactiveNeutralFocus
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js + 1 modules
var ProgressBar = __webpack_require__("../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Knob/Knob.js + 1 modules
var Knob = __webpack_require__("../../@lightningjs/ui-components/src/components/Knob/Knob.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropSet(t, e, o, r, p, f) { return _set(_getPrototypeOf(f ? t.prototype : t), e, o, r, p); }
function set(e, r, t, o) { return set = "undefined" != typeof Reflect && Reflect.set ? Reflect.set : function (e, r, t, o) { var f, i = _superPropBase(e, r); if (i) { if ((f = Object.getOwnPropertyDescriptor(i, r)).set) return f.set.call(o, t), !0; if (!f.writable) return !1; } if (f = Object.getOwnPropertyDescriptor(o, r)) { if (!f.writable) return !1; f.value = t, Object.defineProperty(o, r, f); } else _defineProperty(o, r, t); return !0; }, set(e, r, t, o); }
function _set(e, r, t, o, f) { if (!set(e, r, t, o || e) && f) throw new TypeError("failed to set property"); return t; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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







var Slider = /*#__PURE__*/function (_Base) {
  function Slider() {
    _classCallCheck(this, Slider);
    return _callSuper(this, Slider, arguments);
  }
  _inherits(Slider, _Base);
  return _createClass(Slider, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(Slider, "_construct", this, 3)([]);
      this._min = 0;
      this._max = 100;
      this._step = 1;
      this._value = 0;
      this._vertical = false;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateDirection();
      this._updateSliderLayout();
      this._updatePositions();
      this._updateArrowAlpha();
      this._updateArrows();
      if (this._valueChanged) {
        this.signal('onChange', this.value, this);
        this.fireAncestors('$announce', this.announce);
        this._valueChanged = false;
      }
      this._checkAndSignalSizeChange();
    }
  }, {
    key: "_handleLeft",
    value: function _handleLeft() {
      if (this._isDisabledMode) {
        return false;
      }
      this._decrementValue();
      if (typeof this.onLeft === 'function') {
        return this.onLeft(this);
      }
      return true;
    }
  }, {
    key: "_handleRight",
    value: function _handleRight() {
      if (this._isDisabledMode) {
        return false;
      }
      this._incrementValue();
      if (typeof this.onRight === 'function') {
        return this.onRight(this);
      }
      return true;
    }
  }, {
    key: "_updateDirection",
    value: function _updateDirection() {
      this.patch({
        pivotX: 0,
        rotation: this.vertical ? (0,utils/* degreesToRadians */.tR)(90) : 0,
        mountY: this.vertical ? 0.5 : 0
      });
    }
  }, {
    key: "_updateSliderLayout",
    value: function _updateSliderLayout() {
      var w = this.w || this.style.minWidth;
      this._Container.patch({
        h: this.style.containerHeight,
        w: w,
        Bar: {
          x: this._calculatedSliderX,
          SliderBar: {
            y: this.style.containerHeight / 2,
            w: this._calculatedSliderWidth,
            style: _objectSpread({
              duration: 0
            }, this.style.progressBar)
          }
        }
      });
      this.h = Math.max(this.style.containerHeight, this.style.arrowHeight);
    }
  }, {
    key: "_checkAndSignalSizeChange",
    value: function _checkAndSignalSizeChange() {
      if (this.h !== this.prevH || this._Container.w !== this.prevW || this.rotation !== this.prevRotation) {
        this.signal('onSizeChange', this);
      }
      this.prevH = this.h;
      this.prevW = this._Container.w;
      this.prevRotation = this.rotation;
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      this._updateSliderProgress();
      this._updateCirclePosition();
    }
  }, {
    key: "_updateSliderProgress",
    value: function _updateSliderProgress() {
      var progress = this.value < this.min ? this.min / this.max : this.value / this.max;
      if (this.value > this.max || this.value - this.step > this.max) {
        progress = this._calculatedSliderWidth;
      } else if (this.min < 0 || this.max < 0) {
        progress = (this.value - this.min) / (this.max - this.min);
      }
      this._SliderBar.progress = progress;
    }
  }, {
    key: "_updateCirclePosition",
    value: function _updateCirclePosition() {
      var xCirclePosition;
      if (this.value < this.min || this.value + this.step < this.min) {
        xCirclePosition = this.min / this.max * this._calculatedSliderWidth;
      } else if (this.value > this.max || this.value - this.step > this.max) {
        xCirclePosition = this._calculatedSliderWidth;
      } else {
        if (this.min < 0 || this.max < 0) {
          xCirclePosition = (this.value - this.min) / (this.max - this.min) * this._calculatedSliderWidth;
        } else {
          xCirclePosition = this.value / this.max * this._calculatedSliderWidth;
        }
      }
      if (this._Circle) {
        this._Circle.patch({
          mode: this.mode,
          style: {
            radius: this.style.radius,
            w: this.style.w,
            h: this.style.h,
            circleColor: this.style.circleColor
          },
          y: this._SliderBar.y + 1,
          alpha: this._isFocusedMode && this.style.showKnob ? 1 : 0
        });
        if (this.style.circleAnimation && Object.keys(this.style.circleAnimation).length) {
          this._Circle.smooth = {
            x: [xCirclePosition, this.style.circleAnimation]
          };
        } else {
          this._Circle.x = xCirclePosition;
        }
      }
    }
  }, {
    key: "_updateArrowAlpha",
    value: function _updateArrowAlpha() {
      // fade arrows at min/max
      var leftAlpha;
      var rightAlpha;

      // ensure arrows are always rendered, otherwise color changes might not apply right away
      var offAlpha = 0.001;
      var alpha = this.style.showArrows ? this.style.arrowAlphaValue : offAlpha;
      var alphaLimit = this.style.showArrows ? this.style.arrowAlphaValueLimit : offAlpha;
      leftAlpha = rightAlpha = alpha;
      if (!this._isDisabledMode && this.value <= this.min) {
        leftAlpha = alphaLimit;
        rightAlpha = alpha;
      } else if (!this._isDisabledMode && this.value >= this.max) {
        leftAlpha = alpha;
        rightAlpha = alphaLimit;
      }
      this._LeftArrow.smooth = {
        alpha: leftAlpha
      };
      this._RightArrow.smooth = {
        alpha: rightAlpha
      };
    }
  }, {
    key: "_updateArrows",
    value: function _updateArrows() {
      var arrowProps = {
        w: this.style.arrowWidth,
        h: this.style.arrowHeight,
        style: {
          color: this.style.arrowColor
        }
      };
      this._LeftArrow.patch(_objectSpread(_objectSpread({}, arrowProps), {}, {
        icon: this.style.iconLeftSrc
      }));
      this._RightArrow.patch(_objectSpread(_objectSpread({}, arrowProps), {}, {
        icon: this.style.iconRightSrc
      }));
      this._RightArrow.smooth = {
        x: this.style.arrowSpacing + this._calculatedSliderWidth + this._Bar.x
      };
    }
  }, {
    key: "_decrementValue",
    value: function _decrementValue() {
      var value = this.value - this.step;
      this.value = value >= this.min ? value : this.min;
      this._updatePositions();
    }
  }, {
    key: "_incrementValue",
    value: function _incrementValue() {
      var value = this.value + this.step;
      this.value = value <= this.max ? value : this.max;
      this._updatePositions();
    }
  }, {
    key: "_handleUp",
    value: function _handleUp() {
      return false;
    }
  }, {
    key: "_handleDown",
    value: function _handleDown() {
      return false;
    }
  }, {
    key: "_calculatedSliderX",
    get: function get() {
      return this.style.showArrows ? this.style.arrowSpacing + this.style.arrowWidth : 0;
    }
  }, {
    key: "_calculatedSliderWidth",
    get: function get() {
      var totalArrowSize = this.style.showArrows ? this.style.arrowSpacing * 2 + this.style.arrowWidth * 2 : 0;
      return this.w < totalArrowSize + this._circleW ? this.style.minWidth - totalArrowSize : this.w - totalArrowSize;
    }
  }, {
    key: "_circleW",
    get: function get() {
      return this._Circle ? this._Circle.w : 0;
    }
  }, {
    key: "_setVertical",
    value: function _setVertical(vertical) {
      this._setState(vertical ? 'VerticalSlider' : '');
      return vertical;
    }
  }, {
    key: "_setValue",
    value: function _setValue(value) {
      this._valueChanged = value !== this._value;
      return value;
    }
  }, {
    key: "_setMin",
    value: function _setMin(min) {
      var value = this.value;
      this.value = min > value ? min : value;
      this._valueChanged = value !== this.value;
      return min;
    }
  }, {
    key: "_setMax",
    value: function _setMax(max) {
      var value = this.value;
      this.value = max < value ? max : value;
      this._valueChanged = value !== this.value;
      return max;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce !== undefined && this._announce !== null) {
        return this._announce;
      }
      return this.value.toString();
    },
    set: function set(announce) {
      _superPropSet(Slider, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Slider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Slider_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Container: {
          mountY: 0.5,
          y: function y(h) {
            return h / 2;
          },
          Bar: {
            mountY: 0.5,
            SliderBar: {
              type: ProgressBar/* default */.A,
              progress: 0.5,
              mountY: 0.5,
              announce: ''
            },
            Circle: {
              type: Knob/* default */.A,
              zIndex: 5 // places circle knob on top of sliderBar
            }
          },
          LeftArrow: {
            type: Icon/* default */.A,
            mountY: 0.5,
            y: function y(h) {
              return h / 2;
            }
          },
          RightArrow: {
            type: Icon/* default */.A,
            mountY: 0.5,
            y: function y(h) {
              return h / 2;
            }
          }
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['max', 'min', 'step', 'value', 'vertical'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Container', {
        name: 'Bar',
        path: 'Container.Bar'
      }, {
        name: 'SliderBar',
        path: 'Container.Bar.SliderBar'
      }, {
        name: 'Circle',
        path: 'Container.Bar.Circle'
      }, {
        name: 'LeftArrow',
        path: 'Container.LeftArrow'
      }, {
        name: 'RightArrow',
        path: 'Container.RightArrow'
      }];
    }
  }, {
    key: "_states",
    value: function _states() {
      return [/*#__PURE__*/function (_this) {
        function VerticalSlider() {
          _classCallCheck(this, VerticalSlider);
          return _callSuper(this, VerticalSlider, arguments);
        }
        _inherits(VerticalSlider, _this);
        return _createClass(VerticalSlider, [{
          key: "_handleLeft",
          value: function _handleLeft() {
            return false;
          }
        }, {
          key: "_handleRight",
          value: function _handleRight() {
            return false;
          }
        }, {
          key: "_handleUp",
          value: function _handleUp() {
            if (this._isDisabledMode) {
              return false;
            }
            this._decrementValue();
            if (typeof this.onUp === 'function') {
              return this.onUp(this);
            }
            return true;
          }
        }, {
          key: "_handleDown",
          value: function _handleDown() {
            if (this._isDisabledMode) {
              return false;
            }
            this._incrementValue();
            if (typeof this.onDown === 'function') {
              return this.onDown(this);
            }
            return true;
          }
        }]);
      }(this)];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pg: () => (/* binding */ createModeControl),
/* harmony export */   cY: () => (/* binding */ DocsLink),
/* harmony export */   jb: () => (/* binding */ generateSubStory)
/* harmony export */ });
/* unused harmony exports nestedArgs, nestedArgTypes, prevValues, nestedArgActions, Item, ObjectFormat, GenericType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

// eslint-disable-next-line no-unused-vars



// creates Mode control on stories
var createModeControl = function createModeControl() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    options = _ref.options,
    summaryValue = _ref.summaryValue;
  return {
    mode: {
      control: 'radio',
      options: options && Array.isArray(options) ? ['unfocused'].concat(_toConsumableArray(options)) : ['unfocused', 'focused', 'disabled'],
      description: 'Sets the visual mode for the component',
      table: {
        defaultValue: {
          summary: summaryValue
        }
      },
      type: {
        name: 'string',
        required: true
      }
    }
  };
};

/**
 * @param {object} config Parameters for generating nested args: { argsObj, targetProp, include, overrides }
 */
function nestedArgs(config) {
  var argsObj = config.argsObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argsObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, overrides.args && overrides.args[curr] || argsObj[curr]));
  }, {});
}

/**
 * @param {object} config Parameters for generating nested arg types: { argsObj, targetProp, include, overrides }
 */
function nestedArgTypes(config) {
  var argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, _objectSpread(_objectSpread(_objectSpread({
      // Namespaced to avoid conflicts
      name: curr
    }, argTypesObj[curr]), overrides[curr]), {}, {
      table: _objectSpread(_objectSpread(_objectSpread({}, argTypesObj[curr].table || {}), overrides[curr] && overrides[curr].table), {}, {
        category: targetProp
      })
    })));
  }, {});
}
var prevValues = {};

/**
 * @param {object} config Parameters for generating nested arg actions: { componentName, argsTypeObj, targetProp, include, overrides }
 */
function nestedArgActions(config) {
  var componentName = config.componentName,
    argTypesObj = config.argTypesObj,
    targetProp = config.targetProp,
    include = config.include,
    overrides = config.overrides;
  return Object.keys(argTypesObj).reduce(function (acc, curr) {
    if (!include.includes(curr)) return acc;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, targetProp + '_' + curr, function (value, component) {
      component.tag(componentName).patch(_defineProperty({}, targetProp, _objectSpread(_objectSpread({}, prevValues[targetProp]), {}, _defineProperty({}, curr.replace(targetProp + '_', ''), value === 'none' ? undefined : overrides && overrides[curr] || value))));
      // Allow patching to work with nested objects
      if (!prevValues[targetProp]) {
        prevValues[targetProp] = {};
      }
      prevValues[targetProp][curr.replace(targetProp + '_', '')] = value === 'none' ? undefined : overrides && overrides[curr] || value;
    }));
  }, {});
}

/**
 * @param {object} config Parameters for generating story: { componentName, baseStory, subStory, targetProperty, include, options }
 */
function generateSubStory(config) {
  config.baseStory.args = _objectSpread(_objectSpread({}, config.baseStory.args), nestedArgs({
    argsObj: config.subStory.args || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.args || {}
  }));
  config.baseStory.argTypes = _objectSpread(_objectSpread({}, config.baseStory.argTypes), nestedArgTypes({
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argTypes || {}
  }));
  if (!(config.baseStory && config.baseStory.parameters && config.baseStory.parameters.argActions)) {
    config.baseStory.parameters = {
      argActions: {}
    };
  }
  config.baseStory.parameters.argActions = _objectSpread(_objectSpread({}, config.baseStory.parameters.argActions), nestedArgActions({
    componentName: config.componentName,
    argTypesObj: config.subStory.argTypes || {},
    targetProp: config.targetProperty,
    include: config.include,
    overrides: config.overrides && config.overrides.argActions || {}
  }));
}

// used to create links to Lightning docs given an id
var DocsLink = function DocsLink(_ref2) {
  var children = _ref2.children,
    id = _ref2.id;
  var docsmap = {
    lng: {
      _base: 'https://rdkcentral.github.io/Lightning/docs',
      Component: '/components/overview',
      Text: '/textures/text',
      Transition: '/transitions/attributes'
    }
  };
  var _id$split = id.split('.'),
    _id$split2 = _slicedToArray(_id$split, 2),
    source = _id$split2[0],
    path = _id$split2[1];
  var href = docsmap[source]._base + docsmap[source][path];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: href,
    target: "_blank"
  }, children || id);
};
var Item = function Item(_ref3) {
  var children = _ref3.children;
  return children;
};

/**
 * Creates formatted object for markdown prop tables
 * see Column and Row stories
 * @param {object} props
 * @param {object} props.type - TS-style generic/utility type
 */
var ObjectFormat = function ObjectFormat(_ref4) {
  var object = _ref4.object;
  return ['{', /*#__PURE__*/React.createElement("br", null), '  '].concat(_toConsumableArray(utils.flatten(Object.entries(object).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
      k = _ref6[0],
      v = _ref6[1];
    return [/*#__PURE__*/React.createElement("span", null, "\xA0\xA0"), "".concat(k, ": "), v, ',', /*#__PURE__*/React.createElement("br", null)];
  }))), ['}']).map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
};

/**
 * Formats TS-style generic types
 * See Columns and Row stories
 * @param {object} props
 * @param {object} props.children - component children
 * @param {string} props.type - Name of generic type
 */
var GenericType = function GenericType(_ref7) {
  var children = _ref7.children,
    type = _ref7.type;
  return [type, '<', children, '>'].map(function (x, i) {
    return /*#__PURE__*/React.createElement(Item, {
      key: i
    }, x);
  });
};

/***/ })

}]);
//# sourceMappingURL=4042.d02cd3a4.iframe.bundle.js.map