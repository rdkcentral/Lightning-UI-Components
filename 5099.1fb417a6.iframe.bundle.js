"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5099],{

/***/ "../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  LongTitle: () => (/* binding */ LongTitle),
  WithButton: () => (/* binding */ WithButton),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ Tooltip_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.styles.js
var Tooltip_styles_namespaceObject = {};
__webpack_require__.r(Tooltip_styles_namespaceObject);
__webpack_require__.d(Tooltip_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/textures/index.js
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


var Circle = /*#__PURE__*/function (_lng$Texture) {
  _inherits(Circle, _lng$Texture);
  var _super = _createSuper(Circle);
  function Circle(stage) {
    var _this;
    _classCallCheck(this, Circle);
    _this = _super.call(this, stage);
    _this._color = 'rgb(0,0,0)';
    _this._fill = true;
    _this._radius = 100;
    _this._stroke = false;
    _this._strokeColor = 'rgb(0,0,0)';
    _this._strokeWidth = 1;
    return _this;
  }
  _createClass(Circle, [{
    key: "fill",
    get: function get() {
      return this._fill;
    },
    set: function set(fill) {
      this._fill = fill;
      this._changed();
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(radius) {
      this._radius = radius;
      this._changed();
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      this._color = color;
      this._changed();
    }
  }, {
    key: "stroke",
    get: function get() {
      return this._stroke;
    },
    set: function set(stroke) {
      this._stroke = stroke;
      this._changed();
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      return this._strokeWidth;
    },
    set: function set(strokeWidth) {
      this._strokeWidth = strokeWidth;
      this._changed();
    }
  }, {
    key: "strokeColor",
    get: function get() {
      return this._strokeColor;
    },
    set: function set(strokeColor) {
      this._strokeColor = strokeColor;
      this._changed();
    }
  }, {
    key: "_getLookupId",
    value: function _getLookupId() {
      return "__circle_".concat(this._radius);
    }
  }, {
    key: "_getSourceLoader",
    value: function _getSourceLoader() {
      // We need to scope these to protect them from modifications while loading (which may be async).
      var color = this._color;
      var fill = this._fill;
      var radius = this._radius;
      var stroke = this._stroke;
      var strokeColor = this._strokeColor;
      var strokeWidth = this._strokeWidth;
      var canvas = this.stage.platform.getDrawingCanvas();
      var dimension = radius;
      if (stroke) {
        dimension = radius + strokeWidth * 2;
      }
      canvas.width = dimension * 2;
      canvas.height = dimension * 2;
      return function (cb) {
        var ctx = canvas.getContext('2d');
        ctx.lineWidth = strokeWidth;
        ctx.strokeStyle = strokeColor;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(dimension, dimension, radius, 0, 2 * Math.PI);
        if (fill) {
          ctx.fill();
        }
        if (stroke) {
          ctx.stroke();
        }
        cb(null, {
          source: canvas,
          radius: radius
        });
      };
    }
  }]);
  return Circle;
}(lightning_esm/* default */.Z.Texture);
var Arrow = /*#__PURE__*/function (_lng$Texture2) {
  _inherits(Arrow, _lng$Texture2);
  var _super2 = _createSuper(Arrow);
  function Arrow(stage) {
    var _this2;
    _classCallCheck(this, Arrow);
    _this2 = _super2.call(this, stage);
    _this2._color = 'rgb(13, 13, 15)';
    _this2._w = 0;
    _this2._h = 0;
    _this2._direction = 'right';
    return _this2;
  }
  _createClass(Arrow, [{
    key: "w",
    get: function get() {
      return this._w;
    },
    set: function set(l) {
      this._w = l;
      this._changed();
    }
  }, {
    key: "h",
    get: function get() {
      return this._h;
    },
    set: function set(l) {
      this._h = l;
      this._changed();
    }
  }, {
    key: "direction",
    get: function get() {
      return this._direction;
    },
    set: function set(direction) {
      this._direction = direction;
      this._changed();
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      this._color = color;
      this._changed();
    }
  }, {
    key: "_getLookupId",
    value: function _getLookupId() {
      return "__triangle_".concat(this._direction, "_").concat(this._w, "x").concat(this._h);
    }
  }, {
    key: "_getSourceLoader",
    value: function _getSourceLoader() {
      // We need to scope these to protect them from modifications while loading (which may be async).

      var color = this._color;
      var w = this._w;
      var h = this._h;
      var direction = this._direction;
      var canvas = this.stage.platform.getDrawingCanvas();
      return function (cb) {
        var ctx = canvas.getContext('2d');
        canvas.width = w;
        canvas.height = h;
        ctx.fillStyle = color;
        ctx.strokeStyle = ctx.fillStyle;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        var p = ctx.lineWidth / 2;
        ctx.beginPath();
        if (direction === 'right') {
          ctx.moveTo(p, p);
          ctx.lineTo(p, h - p);
          ctx.lineTo(w - p, h / 2);
        } else if (direction === 'down') {
          ctx.moveTo(p, p);
          ctx.lineTo(w - p, p);
          ctx.lineTo(w / 2, h - p);
        } else {
          // default is left arrow
          ctx.moveTo(p, h / 2);
          ctx.lineTo(w - p, p);
          ctx.lineTo(w - p, h - p);
        }
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
        cb(null, {
          source: canvas,
          w: w,
          h: h,
          direction: direction
        });
      };
    }
  }]);
  return Arrow;
}(lightning_esm/* default */.Z.Texture);
var Line = /*#__PURE__*/function (_lng$Texture3) {
  _inherits(Line, _lng$Texture3);
  var _super3 = _createSuper(Line);
  function Line(stage) {
    var _this3;
    _classCallCheck(this, Line);
    _this3 = _super3.call(this, stage);
    _this3._w = 0;
    _this3._h = 0;
    _this3._rounded = false;
    return _this3;
  }
  _createClass(Line, [{
    key: "w",
    get: function get() {
      return this._w;
    },
    set: function set(l) {
      this._w = l;
      this._changed();
    }
  }, {
    key: "h",
    get: function get() {
      return this._h;
    },
    set: function set(l) {
      this._h = l;
      this._changed();
    }
  }, {
    key: "rounded",
    get: function get() {
      return this._rounded;
    },
    set: function set(rounded) {
      this._rounded = rounded;
      this._changed();
    }
  }, {
    key: "_getLookupId",
    value: function _getLookupId() {
      return "__line_".concat(this._w, "x").concat(this._h).concat(this._rounded ? '_rounded' : '');
    }
  }, {
    key: "_getSourceLoader",
    value: function _getSourceLoader() {
      // We need to scope these to protect them from modifications while loading (which may be async).
      var w = this._w;
      var h = this._h;
      var rounded = this._rounded;
      var canvas = this.stage.platform.getDrawingCanvas();
      return function (cb) {
        var ctx = canvas.getContext('2d');
        canvas.width = w;
        canvas.height = h;
        ctx.lineWidth = h;
        if (rounded) {
          ctx.lineCap = 'round';
        }
        ctx.strokeStyle = 'white';
        ctx.beginPath();
        ctx.moveTo(rounded ? 2 : 0, h / 2);
        ctx.lineTo(rounded ? w - 2 : w, h / 2);
        ctx.stroke();
        cb(null, {
          source: canvas,
          w: w,
          h: h,
          rounded: rounded
        });
      };
    }
  }]);
  return Line;
}(lightning_esm/* default */.Z.Texture);
var Bubble = /*#__PURE__*/function (_lng$Texture4) {
  _inherits(Bubble, _lng$Texture4);
  var _super4 = _createSuper(Bubble);
  function Bubble(stage) {
    var _this4;
    _classCallCheck(this, Bubble);
    _this4 = _super4.call(this, stage);
    _this4._w = 0;
    _this4._h = 0;
    _this4._radius = 0;
    _this4._pointerWidth = 0;
    _this4._pointerHeight = 0;
    _this4._strokeWidth = 0;
    _this4._color = 'white';
    return _this4;
  }
  _createClass(Bubble, [{
    key: "w",
    get: function get() {
      return this._w;
    },
    set: function set(w) {
      this._w = w;
      this._changed();
    }
  }, {
    key: "h",
    get: function get() {
      return this._h;
    },
    set: function set(h) {
      this._h = h;
      this._changed();
    }
  }, {
    key: "radius",
    get: function get() {
      return this._radius;
    },
    set: function set(radius) {
      if (Array.isArray(radius)) {
        this._radius = new Array(4).fill().map(function (_, index) {
          return radius[index] || 0;
        });
      } else {
        this._radius = radius;
      }
      this._changed();
    }
  }, {
    key: "pointerWidth",
    get: function get() {
      return this._pointerWidth;
    },
    set: function set(pointerWidth) {
      this._pointerWidth = pointerWidth;
      this._changed();
    }
  }, {
    key: "pointerHeight",
    get: function get() {
      return this._pointerHeight;
    },
    set: function set(pointerHeight) {
      this._pointerHeight = pointerHeight;
      this._changed();
    }
  }, {
    key: "strokeWidth",
    get: function get() {
      return this._strokeWidth;
    },
    set: function set(strokeWidth) {
      this._strokeWidth = strokeWidth;
      this._changed();
    }
  }, {
    key: "color",
    get: function get() {
      return this._color;
    },
    set: function set(color) {
      this._color = lightning_esm/* default */.Z.StageUtils.getRgbaString(color);
      this._changed();
    }
  }, {
    key: "createBubble",
    value: function createBubble(_ref) {
      var stage = _ref.stage,
        _ref$w = _ref.w,
        w = _ref$w === void 0 ? 0 : _ref$w,
        _ref$h = _ref.h,
        h = _ref$h === void 0 ? 0 : _ref$h,
        _ref$radius = _ref.radius,
        radius = _ref$radius === void 0 ? 0 : _ref$radius,
        _ref$pointerWidth = _ref.pointerWidth,
        pointerWidth = _ref$pointerWidth === void 0 ? 0 : _ref$pointerWidth,
        _ref$pointerHeight = _ref.pointerHeight,
        pointerHeight = _ref$pointerHeight === void 0 ? 0 : _ref$pointerHeight,
        _ref$strokeWidth = _ref.strokeWidth,
        strokeWidth = _ref$strokeWidth === void 0 ? 1 : _ref$strokeWidth,
        _ref$color = _ref.color,
        color = _ref$color === void 0 ? 'white' : _ref$color;
      var canvas = stage.platform.getDrawingCanvas();
      var ctx = canvas.getContext('2d');
      canvas.width = w + strokeWidth + 4;
      canvas.height = h + strokeWidth + 4;
      ctx.imageSmoothingEnabled = true;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.lineWidth = strokeWidth;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      var initialCoord = 0.5 * strokeWidth + 1;
      var leftX = initialCoord;
      var rightX = leftX + w;
      var topY = initialCoord;
      var bottomY = topY + h;
      var bottomBubbleY = bottomY - pointerHeight;
      var isRadiusAnArray = Array.isArray(radius);
      // start: top left
      ctx.beginPath();
      ctx.moveTo(leftX + (isRadiusAnArray ? radius[0] : radius), topY);
      // top side
      ctx.lineTo(rightX - (isRadiusAnArray ? radius[0] : radius), topY);
      // top right corner
      ctx.arcTo(rightX, topY, rightX, topY + (isRadiusAnArray ? radius[1] : radius), isRadiusAnArray ? radius[1] : radius);

      // right side
      ctx.lineTo(rightX, bottomBubbleY - (isRadiusAnArray ? radius[2] : radius));

      // bottom right corner
      ctx.arcTo(rightX, bottomBubbleY, rightX - (isRadiusAnArray ? radius[2] : radius), bottomBubbleY, isRadiusAnArray ? radius[2] : radius);

      // bottom side, right of point
      ctx.lineTo(w / 2 + pointerWidth / 2, bottomBubbleY);

      // point
      ctx.arcTo(w / 2, bottomY, w / 2 - pointerWidth / 2, bottomBubbleY, 2);
      ctx.lineTo(w / 2 - pointerWidth / 2, bottomBubbleY);

      // bottom side, left of point
      ctx.lineTo(leftX + (isRadiusAnArray ? radius[3] : radius), bottomBubbleY);

      // bottom left corner
      ctx.arcTo(leftX, bottomBubbleY, leftX, bottomBubbleY - (isRadiusAnArray ? radius[3] : radius), isRadiusAnArray ? radius[3] : radius);

      // left side
      ctx.lineTo(leftX, topY + (isRadiusAnArray ? radius[0] : radius));

      // top left corner
      ctx.arcTo(leftX, topY, leftX + (isRadiusAnArray ? radius[0] : radius), topY, isRadiusAnArray ? radius[0] : radius);

      // draw shape and fill with color
      ctx.stroke();
      ctx.fill();
      return canvas;
    }
  }, {
    key: "_getLookupId",
    value: function _getLookupId() {
      var w = this.w,
        h = this.h,
        radius = this.radius,
        pointerWidth = this.pointerWidth,
        pointerHeight = this.pointerHeight,
        color = this.color;
      return "__bubble_".concat(w, "x").concat(h, "_radius-").concat(radius, "_pointer-").concat(pointerWidth, "x").concat(pointerHeight, "_fill-").concat(color);
    }
  }, {
    key: "_getSourceLoader",
    value: function _getSourceLoader() {
      var _this5 = this;
      return function (cb) {
        cb(null, {
          source: _this5.createBubble(_this5)
        });
      };
    }
  }]);
  return Bubble;
}(lightning_esm/* default */.Z.Texture); // TODO: Make sure FadeShader is exported in shaders

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.styles.js
function Tooltip_styles_typeof(o) { "@babel/helpers - typeof"; return Tooltip_styles_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Tooltip_styles_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = Tooltip_styles_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Tooltip_styles_toPropertyKey(arg) { var key = Tooltip_styles_toPrimitive(arg, "string"); return Tooltip_styles_typeof(key) === "symbol" ? key : String(key); }
function Tooltip_styles_toPrimitive(input, hint) { if (Tooltip_styles_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Tooltip_styles_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    marginBottom: theme.spacer.xxxl,
    paddingX: theme.spacer.lg,
    paddingY: theme.spacer.md,
    pointerWidth: theme.spacer.xl,
    pointerHeight: theme.spacer.md + theme.spacer.xs,
    radius: theme.radius.md,
    textStyle: _objectSpread(_objectSpread({}, theme.typography.caption1), {}, {
      textColor: theme.color.textInverse
    }),
    transition: theme.animation.utility // TODO: should delay and duration be xfast?
  };
};

var tone = function tone(theme) {
  return {
    neutral: {
      backgroundColor: theme.color.fillNeutral,
      textStyle: {
        textColor: theme.color.textInverse
      }
    },
    inverse: {
      backgroundColor: theme.color.fillInverse,
      textStyle: {
        textColor: theme.color.textNeutral
      }
    },
    brand: {
      backgroundColor: theme.color.fillBrand,
      textStyle: {
        textColor: theme.color.textNeutral
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.js
function Tooltip_typeof(o) { "@babel/helpers - typeof"; return Tooltip_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Tooltip_typeof(o); }
function Tooltip_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Tooltip_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Tooltip_toPropertyKey(descriptor.key), descriptor); } }
function Tooltip_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tooltip_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tooltip_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { Tooltip_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function Tooltip_defineProperty(obj, key, value) { key = Tooltip_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Tooltip_toPropertyKey(arg) { var key = Tooltip_toPrimitive(arg, "string"); return Tooltip_typeof(key) === "symbol" ? key : String(key); }
function Tooltip_toPrimitive(input, hint) { if (Tooltip_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Tooltip_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = Tooltip_getPrototypeOf(object); if (object === null) break; } return object; }
function Tooltip_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Tooltip_setPrototypeOf(subClass, superClass); }
function Tooltip_setPrototypeOf(o, p) { Tooltip_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tooltip_setPrototypeOf(o, p); }
function Tooltip_createSuper(Derived) { var hasNativeReflectConstruct = Tooltip_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Tooltip_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Tooltip_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Tooltip_possibleConstructorReturn(this, result); }; }
function Tooltip_possibleConstructorReturn(self, call) { if (call && (Tooltip_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Tooltip_assertThisInitialized(self); }
function Tooltip_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Tooltip_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function Tooltip_getPrototypeOf(o) { Tooltip_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tooltip_getPrototypeOf(o); }
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





var Tooltip = /*#__PURE__*/function (_Base) {
  Tooltip_inherits(Tooltip, _Base);
  var _super = Tooltip_createSuper(Tooltip);
  function Tooltip() {
    Tooltip_classCallCheck(this, Tooltip);
    return _super.apply(this, arguments);
  }
  Tooltip_createClass(Tooltip, [{
    key: "_update",
    value: function _update() {
      this._updateText();
    }
  }, {
    key: "_updateText",
    value: function _updateText() {
      if (this._Text) {
        this._Text.patch({
          content: this.title,
          style: {
            textStyle: this.style.textStyle
          }
        });
      }
    }
  }, {
    key: "_textLoaded",
    value: function _textLoaded() {
      this._updateBackground();
      this._updateTextPosition();
    }
  }, {
    key: "_updateBackground",
    value: function _updateBackground() {
      var backgroundH = this._Text.finalH + this.style.paddingY * 2 + this.style.pointerHeight;
      var backgroundW = this._Text.finalW + this.style.paddingX * 2;
      this.patch({
        w: backgroundW,
        h: backgroundH,
        mountY: 1,
        y: -this.style.marginBottom,
        Background: {
          w: backgroundW,
          h: backgroundH,
          texture: {
            type: Bubble,
            w: backgroundW,
            h: backgroundH,
            radius: this.style.radius,
            pointerWidth: this.style.pointerWidth,
            pointerHeight: this.style.pointerHeight,
            color: this.style.backgroundColor
          }
        }
      });
    }
  }, {
    key: "_updateTextPosition",
    value: function _updateTextPosition() {
      if (this._Text) {
        this._Text.patch({
          mount: 0.5,
          x: this._Background.w / 2,
          y: (this._Background.h - this.style.pointerHeight) / 2
        });
      }
    }
  }, {
    key: "_clearTimers",
    value: function _clearTimers() {
      clearTimeout(this._hideTimer);
      clearTimeout(this._showTimer);
    }
  }, {
    key: "_transitionIn",
    value: function _transitionIn() {
      var _this = this;
      var smooth = {
        smooth: {
          alpha: [1, this.style.transition],
          scale: [1, this.style.transition]
        }
      };
      if (this.delayVisible) {
        this._showTimer = setTimeout(function () {
          _this.patch({
            smooth: smooth
          });
        }, this.delayVisible);
      } else {
        this._showTimer = undefined;
        this.patch({
          smooth: smooth
        });
      }
      this._hideTimer = this.timeVisible ? setTimeout(function () {
        _this._unfocus();
      }, this.timeVisible + (this.delayVisible || 0)) : undefined;
    }
  }, {
    key: "_transitionOut",
    value: function _transitionOut() {
      this.patch({
        smooth: {
          alpha: [0, this.style.transition],
          scale: [0.5, this.style.transition]
        }
      });
    }
  }, {
    key: "_focus",
    value: function _focus() {
      this._clearTimers();
      this._transitionIn();
    }
  }, {
    key: "_unfocus",
    value: function _unfocus() {
      this._clearTimers();
      this._transitionOut();
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Text && this._Text.announce;
    },
    set: function set(announce) {
      _set(Tooltip_getPrototypeOf(Tooltip.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Tooltip';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Tooltip_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        alpha: 0,
        scale: 0.5,
        mountX: 0.5,
        x: function x(w) {
          return w / 2;
        },
        Background: {
          Text: {
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_textLoaded'
            }
          }
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['title', 'delayVisible', 'timeVisible'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Background', {
        name: 'Text',
        path: 'Background.Text'
      }];
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'pointerH',
        curr: 'pointerHeight'
      }, {
        prev: 'pointerW',
        curr: 'pointerWidth'
      }];
    }
  }]);
  return Tooltip;
}(Base/* default */.Z);

;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Tooltip/Tooltip.stories.js
var _Basic$parameters, _Basic$parameters2, _LongTitle$parameters, _LongTitle$parameters2, _WithButton$parameter, _WithButton$parameter2;
function Tooltip_stories_typeof(o) { "@babel/helpers - typeof"; return Tooltip_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Tooltip_stories_typeof(o); }
function Tooltip_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Tooltip_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Tooltip_stories_toPropertyKey(descriptor.key), descriptor); } }
function Tooltip_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) Tooltip_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) Tooltip_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Tooltip_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Tooltip_stories_setPrototypeOf(subClass, superClass); }
function Tooltip_stories_setPrototypeOf(o, p) { Tooltip_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Tooltip_stories_setPrototypeOf(o, p); }
function Tooltip_stories_createSuper(Derived) { var hasNativeReflectConstruct = Tooltip_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Tooltip_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Tooltip_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Tooltip_stories_possibleConstructorReturn(this, result); }; }
function Tooltip_stories_possibleConstructorReturn(self, call) { if (call && (Tooltip_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Tooltip_stories_assertThisInitialized(self); }
function Tooltip_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Tooltip_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function Tooltip_stories_getPrototypeOf(o) { Tooltip_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Tooltip_stories_getPrototypeOf(o); }
function Tooltip_stories_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Tooltip_stories_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Tooltip_stories_ownKeys(Object(t), !0).forEach(function (r) { Tooltip_stories_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Tooltip_stories_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Tooltip_stories_defineProperty(obj, key, value) { key = Tooltip_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Tooltip_stories_toPropertyKey(arg) { var key = Tooltip_stories_toPrimitive(arg, "string"); return Tooltip_stories_typeof(key) === "symbol" ? key : String(key); }
function Tooltip_stories_toPrimitive(input, hint) { if (Tooltip_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Tooltip_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Button from '../Button';\nimport { createModeControl } from '../../docs/utils';\nimport { default as TooltipComponent } from '.';\n\nexport default {\n  title: 'Components/Tooltip',\n  args: {\n    title: 'Tooltip',\n    delayVisible: 0,\n    timeVisible: 0,\n    mode: 'focused'\n  },\n  argTypes: {\n    ...createModeControl({ options: ['focused'], summaryValue: 'focused' }),\n    title: {\n      control: 'text',\n      description: 'Text content of tooltip',\n      table: { defaultValue: { summary: 'undefined' } }\n    },\n    delayVisible: {\n      control: 'number',\n      description:\n        'Start with unfocused mode and set the delay value in milliseconds, now change the mode to focused to see the required changes',\n      table: { defaultValue: { summary: 'undefined' } }\n    },\n    timeVisible: {\n      control: 'number',\n      description:\n        'Start with unfocused mode and set the time value in milliseconds, now change the mode to focused to see the required changes',\n      table: { defaultValue: { summary: 'undefined' } }\n    }\n  }\n};\n\nconst sharedArgActions = {\n  argActions: {\n    delayVisible: (delayVisible, component) => {\n      component.tag('Tooltip').delayVisible = delayVisible;\n    },\n    timeVisible: (timeVisible, component) => {\n      component.tag('Tooltip').timeVisible = timeVisible;\n    }\n  }\n};\n\nexport const Basic = args =>\n  class Basic extends lng.Component {\n    static _template() {\n      return {\n        Tooltip: {\n          type: TooltipComponent,\n          x: 1280 / 2,\n          delayVisible: args.delayVisible,\n          timeVisible: args.timeVisible\n        }\n      };\n    }\n  };\n\nBasic.parameters = { ...sharedArgActions };\n\nexport const LongTitle = Basic.bind({});\nLongTitle.args = {\n  title:\n    'This is a long message. Text will remain on a single line and does not have a maximum width'\n};\n\nLongTitle.parameters = { ...sharedArgActions };\n\nexport const WithButton = args =>\n  class WithButton extends lng.Component {\n    static _template() {\n      return {\n        Button: {\n          type: class extends Button {\n            _getFocused() {\n              return this.childList.getByRef('Tooltip');\n            }\n          },\n          x: 200,\n          y: 100,\n          title: 'Button',\n          backgroundType: 'stroke',\n          Tooltip: {\n            type: TooltipComponent,\n            title: args.title,\n            delayVisible: args.delayVisible,\n            timeVisible: args.timeVisible\n          }\n        }\n      };\n    }\n  };\n\nWithButton.args = {};\n\nWithButton.parameters = {\n  argActions: {\n    title: (title, component) => {\n      component.tag('Button.Tooltip').title = title;\n    },\n    delayVisible: (delayVisible, component) => {\n      component.tag('Button.Tooltip').delayVisible = delayVisible;\n    },\n    timeVisible: (timeVisible, component) => {\n      component.tag('Button.Tooltip').timeVisible = timeVisible;\n    }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Basic": {
    "startLoc": {
      "col": 21,
      "line": 75
    },
    "endLoc": {
      "col": 1,
      "line": 86
    },
    "startBody": {
      "col": 21,
      "line": 75
    },
    "endBody": {
      "col": 1,
      "line": 86
    }
  },
  "LongTitle": {
    "startLoc": {
      "col": 21,
      "line": 75
    },
    "endLoc": {
      "col": 1,
      "line": 86
    },
    "startBody": {
      "col": 21,
      "line": 75
    },
    "endBody": {
      "col": 1,
      "line": 86
    }
  },
  "WithButton": {
    "startLoc": {
      "col": 26,
      "line": 97
    },
    "endLoc": {
      "col": 1,
      "line": 119
    },
    "startBody": {
      "col": 26,
      "line": 97
    },
    "endBody": {
      "col": 1,
      "line": 119
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





/* harmony default export */ const Tooltip_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport Button from '../Button';\nimport { createModeControl } from '../../docs/utils';\nimport { default as TooltipComponent } from '.';\nexport default {\n  title: 'Components/Tooltip',\n  args: {\n    title: 'Tooltip',\n    delayVisible: 0,\n    timeVisible: 0,\n    mode: 'focused'\n  },\n  argTypes: {\n    ...createModeControl({\n      options: ['focused'],\n      summaryValue: 'focused'\n    }),\n    title: {\n      control: 'text',\n      description: 'Text content of tooltip',\n      table: {\n        defaultValue: {\n          summary: 'undefined'\n        }\n      }\n    },\n    delayVisible: {\n      control: 'number',\n      description: 'Start with unfocused mode and set the delay value in milliseconds, now change the mode to focused to see the required changes',\n      table: {\n        defaultValue: {\n          summary: 'undefined'\n        }\n      }\n    },\n    timeVisible: {\n      control: 'number',\n      description: 'Start with unfocused mode and set the time value in milliseconds, now change the mode to focused to see the required changes',\n      table: {\n        defaultValue: {\n          summary: 'undefined'\n        }\n      }\n    }\n  }\n};\nconst sharedArgActions = {\n  argActions: {\n    delayVisible: (delayVisible, component) => {\n      component.tag('Tooltip').delayVisible = delayVisible;\n    },\n    timeVisible: (timeVisible, component) => {\n      component.tag('Tooltip').timeVisible = timeVisible;\n    }\n  }\n};\nexport const Basic = args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Tooltip: {\n        type: TooltipComponent,\n        x: 1280 / 2,\n        delayVisible: args.delayVisible,\n        timeVisible: args.timeVisible\n      }\n    };\n  }\n};\nBasic.parameters = {\n  ...sharedArgActions\n};\nexport const LongTitle = Basic.bind({});\nLongTitle.args = {\n  title: 'This is a long message. Text will remain on a single line and does not have a maximum width'\n};\nLongTitle.parameters = {\n  ...sharedArgActions\n};\nexport const WithButton = args => class WithButton extends lng.Component {\n  static _template() {\n    return {\n      Button: {\n        type: class extends Button {\n          _getFocused() {\n            return this.childList.getByRef('Tooltip');\n          }\n        },\n        x: 200,\n        y: 100,\n        title: 'Button',\n        backgroundType: 'stroke',\n        Tooltip: {\n          type: TooltipComponent,\n          title: args.title,\n          delayVisible: args.delayVisible,\n          timeVisible: args.timeVisible\n        }\n      }\n    };\n  }\n};\nWithButton.args = {};\nWithButton.parameters = {\n  argActions: {\n    title: (title, component) => {\n      component.tag('Button.Tooltip').title = title;\n    },\n    delayVisible: (delayVisible, component) => {\n      component.tag('Button.Tooltip').delayVisible = delayVisible;\n    },\n    timeVisible: (timeVisible, component) => {\n      component.tag('Button.Tooltip').timeVisible = timeVisible;\n    }\n  }\n};\nBasic.parameters = {\n  ...Basic.parameters,\n  docs: {\n    ...Basic.parameters?.docs,\n    source: {\n      originalSource: \"args => class Basic extends lng.Component {\\n  static _template() {\\n    return {\\n      Tooltip: {\\n        type: TooltipComponent,\\n        x: 1280 / 2,\\n        delayVisible: args.delayVisible,\\n        timeVisible: args.timeVisible\\n      }\\n    };\\n  }\\n}\",\n      ...Basic.parameters?.docs?.source\n    }\n  }\n};\nLongTitle.parameters = {\n  ...LongTitle.parameters,\n  docs: {\n    ...LongTitle.parameters?.docs,\n    source: {\n      originalSource: \"args => class Basic extends lng.Component {\\n  static _template() {\\n    return {\\n      Tooltip: {\\n        type: TooltipComponent,\\n        x: 1280 / 2,\\n        delayVisible: args.delayVisible,\\n        timeVisible: args.timeVisible\\n      }\\n    };\\n  }\\n}\",\n      ...LongTitle.parameters?.docs?.source\n    }\n  }\n};\nWithButton.parameters = {\n  ...WithButton.parameters,\n  docs: {\n    ...WithButton.parameters?.docs,\n    source: {\n      originalSource: \"args => class WithButton extends lng.Component {\\n  static _template() {\\n    return {\\n      Button: {\\n        type: class extends Button {\\n          _getFocused() {\\n            return this.childList.getByRef('Tooltip');\\n          }\\n        },\\n        x: 200,\\n        y: 100,\\n        title: 'Button',\\n        backgroundType: 'stroke',\\n        Tooltip: {\\n          type: TooltipComponent,\\n          title: args.title,\\n          delayVisible: args.delayVisible,\\n          timeVisible: args.timeVisible\\n        }\\n      }\\n    };\\n  }\\n}\",\n      ...WithButton.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "basic": {
          "startLoc": {
            "col": 21,
            "line": 75
          },
          "endLoc": {
            "col": 1,
            "line": 86
          },
          "startBody": {
            "col": 21,
            "line": 75
          },
          "endBody": {
            "col": 1,
            "line": 86
          }
        },
        "long-title": {
          "startLoc": {
            "col": 21,
            "line": 75
          },
          "endLoc": {
            "col": 1,
            "line": 86
          },
          "startBody": {
            "col": 21,
            "line": 75
          },
          "endBody": {
            "col": 1,
            "line": 86
          }
        },
        "with-button": {
          "startLoc": {
            "col": 26,
            "line": 97
          },
          "endLoc": {
            "col": 1,
            "line": 119
          },
          "startBody": {
            "col": 26,
            "line": 97
          },
          "endBody": {
            "col": 1,
            "line": 119
          }
        }
      }
    }
  },
  title: 'Components/Tooltip',
  args: {
    title: 'Tooltip',
    delayVisible: 0,
    timeVisible: 0,
    mode: 'focused'
  },
  argTypes: Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, (0,utils/* createModeControl */.Ys)({
    options: ['focused'],
    summaryValue: 'focused'
  })), {}, {
    title: {
      control: 'text',
      description: 'Text content of tooltip',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    delayVisible: {
      control: 'number',
      description: 'Start with unfocused mode and set the delay value in milliseconds, now change the mode to focused to see the required changes',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    },
    timeVisible: {
      control: 'number',
      description: 'Start with unfocused mode and set the time value in milliseconds, now change the mode to focused to see the required changes',
      table: {
        defaultValue: {
          summary: 'undefined'
        }
      }
    }
  })
});
var sharedArgActions = {
  argActions: {
    delayVisible: function delayVisible(_delayVisible, component) {
      component.tag('Tooltip').delayVisible = _delayVisible;
    },
    timeVisible: function timeVisible(_timeVisible, component) {
      component.tag('Tooltip').timeVisible = _timeVisible;
    }
  }
};
var Basic = function Basic(args) {
  return /*#__PURE__*/function (_lng$Component) {
    Tooltip_stories_inherits(Basic, _lng$Component);
    var _super = Tooltip_stories_createSuper(Basic);
    function Basic() {
      Tooltip_stories_classCallCheck(this, Basic);
      return _super.apply(this, arguments);
    }
    Tooltip_stories_createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        return {
          Tooltip: {
            type: Tooltip,
            x: 1280 / 2,
            delayVisible: args.delayVisible,
            timeVisible: args.timeVisible
          }
        };
      }
    }]);
    return Basic;
  }(lightning_esm/* default */.Z.Component);
};
;
Basic.parameters = Tooltip_stories_objectSpread({}, sharedArgActions);
var LongTitle = Basic.bind({});
;
LongTitle.args = {
  title: 'This is a long message. Text will remain on a single line and does not have a maximum width'
};
LongTitle.parameters = Tooltip_stories_objectSpread({}, sharedArgActions);
var WithButton = function WithButton(args) {
  return /*#__PURE__*/function (_lng$Component2) {
    Tooltip_stories_inherits(WithButton, _lng$Component2);
    var _super2 = Tooltip_stories_createSuper(WithButton);
    function WithButton() {
      Tooltip_stories_classCallCheck(this, WithButton);
      return _super2.apply(this, arguments);
    }
    Tooltip_stories_createClass(WithButton, null, [{
      key: "_template",
      value: function _template() {
        return {
          Button: {
            type: /*#__PURE__*/function (_Button) {
              Tooltip_stories_inherits(type, _Button);
              var _super3 = Tooltip_stories_createSuper(type);
              function type() {
                Tooltip_stories_classCallCheck(this, type);
                return _super3.apply(this, arguments);
              }
              Tooltip_stories_createClass(type, [{
                key: "_getFocused",
                value: function _getFocused() {
                  return this.childList.getByRef('Tooltip');
                }
              }]);
              return type;
            }(Button/* default */.Z),
            x: 200,
            y: 100,
            title: 'Button',
            backgroundType: 'stroke',
            Tooltip: {
              type: Tooltip,
              title: args.title,
              delayVisible: args.delayVisible,
              timeVisible: args.timeVisible
            }
          }
        };
      }
    }]);
    return WithButton;
  }(lightning_esm/* default */.Z.Component);
};
WithButton.args = {};
WithButton.parameters = {
  argActions: {
    title: function title(_title, component) {
      component.tag('Button.Tooltip').title = _title;
    },
    delayVisible: function delayVisible(_delayVisible2, component) {
      component.tag('Button.Tooltip').delayVisible = _delayVisible2;
    },
    timeVisible: function timeVisible(_timeVisible2, component) {
      component.tag('Button.Tooltip').timeVisible = _timeVisible2;
    }
  }
};
Basic.parameters = Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, Basic.parameters), {}, {
  docs: Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, (_Basic$parameters = Basic.parameters) === null || _Basic$parameters === void 0 ? void 0 : _Basic$parameters.docs), {}, {
    source: Tooltip_stories_objectSpread({
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Tooltip: {\n        type: TooltipComponent,\n        x: 1280 / 2,\n        delayVisible: args.delayVisible,\n        timeVisible: args.timeVisible\n      }\n    };\n  }\n}"
    }, (_Basic$parameters2 = Basic.parameters) === null || _Basic$parameters2 === void 0 || (_Basic$parameters2 = _Basic$parameters2.docs) === null || _Basic$parameters2 === void 0 ? void 0 : _Basic$parameters2.source)
  })
});
LongTitle.parameters = Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, LongTitle.parameters), {}, {
  docs: Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, (_LongTitle$parameters = LongTitle.parameters) === null || _LongTitle$parameters === void 0 ? void 0 : _LongTitle$parameters.docs), {}, {
    source: Tooltip_stories_objectSpread({
      originalSource: "args => class Basic extends lng.Component {\n  static _template() {\n    return {\n      Tooltip: {\n        type: TooltipComponent,\n        x: 1280 / 2,\n        delayVisible: args.delayVisible,\n        timeVisible: args.timeVisible\n      }\n    };\n  }\n}"
    }, (_LongTitle$parameters2 = LongTitle.parameters) === null || _LongTitle$parameters2 === void 0 || (_LongTitle$parameters2 = _LongTitle$parameters2.docs) === null || _LongTitle$parameters2 === void 0 ? void 0 : _LongTitle$parameters2.source)
  })
});
WithButton.parameters = Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, WithButton.parameters), {}, {
  docs: Tooltip_stories_objectSpread(Tooltip_stories_objectSpread({}, (_WithButton$parameter = WithButton.parameters) === null || _WithButton$parameter === void 0 ? void 0 : _WithButton$parameter.docs), {}, {
    source: Tooltip_stories_objectSpread({
      originalSource: "args => class WithButton extends lng.Component {\n  static _template() {\n    return {\n      Button: {\n        type: class extends Button {\n          _getFocused() {\n            return this.childList.getByRef('Tooltip');\n          }\n        },\n        x: 200,\n        y: 100,\n        title: 'Button',\n        backgroundType: 'stroke',\n        Tooltip: {\n          type: TooltipComponent,\n          title: args.title,\n          delayVisible: args.delayVisible,\n          timeVisible: args.timeVisible\n        }\n      }\n    };\n  }\n}"
    }, (_WithButton$parameter2 = WithButton.parameters) === null || _WithButton$parameter2 === void 0 || (_WithButton$parameter2 = _WithButton$parameter2.docs) === null || _WithButton$parameter2 === void 0 ? void 0 : _WithButton$parameter2.source)
  })
});
var __namedExportsOrder = ["Basic", "LongTitle", "WithButton"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/docs/utils.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ys: () => (/* binding */ createModeControl),
/* harmony export */   cG: () => (/* binding */ DocsLink),
/* harmony export */   p9: () => (/* binding */ generateSubStory)
/* harmony export */ });
/* unused harmony exports nestedArgs, nestedArgTypes, prevValues, nestedArgActions, Item, ObjectFormat, GenericType */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/react/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
//# sourceMappingURL=5099.1fb417a6.iframe.bundle.js.map