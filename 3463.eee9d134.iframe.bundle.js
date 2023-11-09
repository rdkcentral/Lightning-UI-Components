"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[3463],{

/***/ "../../@lightningjs/ui-components/src/components/Artwork/Artwork.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Artwork)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Artwork/Artwork.styles.js
var Artwork_styles_namespaceObject = {};
__webpack_require__.r(Artwork_styles_namespaceObject);
__webpack_require__.d(Artwork_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Gradient/Gradient.js + 1 modules
var Gradient = __webpack_require__("../../@lightningjs/ui-components/src/components/Gradient/Gradient.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Artwork/Artwork.styles.js
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
    animationBlurEntrance: theme.animation.utilityEntrance,
    animationBlurExit: theme.animation.utilityExit,
    animationComponentEntrance: theme.animation.utilityEntrance,
    animationGradientEntrance: theme.animation.utilityEntrance,
    animationGradientExit: theme.animation.utilityExit,
    animationImageScaleEntrance: theme.animation.standardEntrance,
    animationImageScaleExit: theme.animation.standardEntrance,
    blur: 4,
    centerImageRadius: theme.radius.md,
    fallbackSrc: undefined,
    fillColor: theme.color.overlay,
    gradientColor: theme.color.material,
    imageScale: undefined,
    imageScalePivotX: 0.5,
    imageScalePivotY: 0.5,
    padding: theme.spacer.md,
    radius: 0,
    zIndexSet: {
      image: 1,
      blur: 2,
      centerImage: 3,
      fill: 4,
      gradient: 5,
      foreground: 6
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/globals/context/index.js + 6 modules
var context = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/textures/CustomImageTexture.js
var CustomImageTexture = __webpack_require__("../../@lightningjs/ui-components/src/textures/CustomImageTexture.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Artwork/Artwork.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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








var Artwork = /*#__PURE__*/function (_Base) {
  _inherits(Artwork, _Base);
  var _super = _createSuper(Artwork);
  function Artwork() {
    _classCallCheck(this, Artwork);
    return _super.apply(this, arguments);
  }
  _createClass(Artwork, [{
    key: "_shouldBlur",
    get: function get() {
      var shouldBur = this._blur || this._hasCenterImage;
      this._Image.rtt = shouldBur; // rtt can cause a performance hit. Remove if not needed on Image
      return shouldBur; // Artwork should always use blur when circleImage is set to true
    }
  }, {
    key: "_hasCenterImage",
    get: function get() {
      return -1 < ['circle', 'square'].indexOf(this.format) || 'contain' === this.format && !this._aspectRatioEqual;
    }
  }, {
    key: "w",
    get: function get() {
      return _get(_getPrototypeOf(Artwork.prototype), "w", this);
    },
    set: function set(v) {
      _set(_getPrototypeOf(Artwork.prototype), "w", v, this, true);
      this._componentSrc = this._generatePromise();
    }
  }, {
    key: "h",
    get: function get() {
      return _get(_getPrototypeOf(Artwork.prototype), "h", this);
    },
    set: function set(v) {
      _set(_getPrototypeOf(Artwork.prototype), "h", v, this, true);
      this._componentSrc = this._generatePromise();
    }
  }, {
    key: "_actualAspectRatio",
    get: function get() {
      if (!this.w || !this.h) return null;
      return (0,utils/* reduceFraction */.wG)("".concat(this.w, "/").concat(this.h)).replace('/', 'x');
    }
  }, {
    key: "_supportedAspectRatioHeights",
    get: function get() {
      var _this = this;
      return this.srcCallbackAspectRatios.map(function (ratio) {
        var _ratio$split$map = ratio.split('x').map(function (v) {
            return parseInt(v);
          }),
          _ratio$split$map2 = _slicedToArray(_ratio$split$map, 2),
          rw = _ratio$split$map2[0],
          rh = _ratio$split$map2[1];
        var calcHeight = _this.w / rw * rh;
        return calcHeight;
      });
    }
  }, {
    key: "_closestSupportedAspectRatio",
    get: function get() {
      var _this2 = this;
      var closest = this._supportedAspectRatioHeights.reduce(function (prev, curr) {
        return Math.abs(curr - _this2.h) < Math.abs(prev - _this2.h) ? curr : prev;
      });
      return this.srcCallbackAspectRatios[this._supportedAspectRatioHeights.indexOf(closest)];
    }
  }, {
    key: "_processedImageSrc",
    get: function get() {
      var src = this.src || this.fallbackSrc;
      if (src !== this.fallbackSrc && this.srcCallback && typeof this.srcCallback === 'function') {
        src = this.srcCallback({
          closestAspectRatio: this._closestSupportedAspectRatio,
          aspectRatio: this._actualAspectRatio,
          src: this.src,
          w: this.w,
          h: this.h
        });
      }
      return src && src.then ? src : Promise.resolve(src);
    }
  }, {
    key: "_gradientPatch",
    get: function get() {
      return {
        alpha: !this._Gradient && this.shouldSmooth ? 0.001 : 1,
        style: {
          gradientColor: (0,utils/* getValidColor */.C2)(this.style.gradientColor)
        },
        h: this.h + 4,
        type: Gradient/* default */.Z,
        w: this.w + 4,
        x: -2,
        y: -2,
        zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.gradient
      };
    }
  }, {
    key: "_construct",
    value: function _construct() {
      _get(_getPrototypeOf(Artwork.prototype), "_construct", this).call(this);
      this._srcCallbackAspectRatios = ['16x9', '3x4', '4x3', '2x1', '1x1'];
    }
  }, {
    key: "_setSrc",
    value: function _setSrc(v) {
      this._componentSrc = this._generatePromise();
      return v;
    }
  }, {
    key: "_getFallbackSrc",
    value: function _getFallbackSrc() {
      return this._fallbackSrc || this.style && this.style.fallbackSrc;
    }
  }, {
    key: "_generatePromise",
    value: function _generatePromise() {
      // When a new src, w, or h value is added promises need to be reset
      var resolvePromise, rejectPromise;
      var complete = new Promise(function (resolve, reject) {
        resolvePromise = resolve;
        rejectPromise = reject;
      });
      return {
        complete: complete,
        resolve: resolvePromise,
        reject: rejectPromise
      };
    }
  }, {
    key: "_setup",
    value: function _setup() {
      this.alpha = 0.001; // Hide on first load to stop flash of un-styled content on first creation
      this._componentSrc = this._generatePromise(); // Initialize loading promises
      this._aspectRatioEqual = false;
      // Wait for _Image to be added to the tree to set listeners
      this._Image.on('txLoaded', this._resolveLoading.bind(this));
      this._Image.on('txError', this._rejectLoading.bind(this));
    }
  }, {
    key: "_resolveLoading",
    value: function _resolveLoading() {
      this._aspectRatioEqual = this._Image.texture.source ? parseFloat(this.finalW / this.finalH).toFixed(2) === parseFloat(this._Image.texture.source.w / this._Image.texture.source.h).toFixed(2) : false;
      this._componentSrc.resolve && this._componentSrc.resolve();
      this.signal('imageLoaded');
    }
  }, {
    key: "_rejectLoading",
    value: function _rejectLoading(error) {
      this._componentSrc.reject && this._componentSrc.reject(error);
    }
  }, {
    key: "_update",
    value: function () {
      var _update2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this._updateRadius();
              this._updateGradient();
              _context.next = 4;
              return this._updateImage();
            case 4:
              this._updateFillColor();
              this._updateForegroundImage();
              if (this.src) {
                _context.next = 9;
                break;
              }
              this._showComponent(); // Ensure that component displays even in the case that src is not set
              return _context.abrupt("return");
            case 9:
              _context.prev = 9;
              _context.next = 12;
              return this._componentSrc.complete;
            case 12:
              _context.next = 14;
              return this._updateCenterImage();
            case 14:
              this._updateBlur();
              // After everything is setup fade in the Artwork component for the first time
              this._showComponent();
              this._updateScale();
              _context.next = 22;
              break;
            case 19:
              _context.prev = 19;
              _context.t0 = _context["catch"](9);
              this._handleImageLoadError();
            case 22:
              if (this.shouldSmooth === undefined) this.shouldSmooth = true;
            case 23:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[9, 19]]);
      }));
      function _update() {
        return _update2.apply(this, arguments);
      }
      return _update;
    }()
  }, {
    key: "_updateScale",
    value: function _updateScale() {
      if (this.shouldScale) {
        var imageScale;
        switch (_typeof(this.style.imageScale)) {
          case 'function':
            imageScale = this.style.imageScale(this.w);
            break;
          case 'number':
            imageScale = this.style.imageScale;
            break;
          default:
            imageScale = 1;
        }
        this._Image.smooth = {
          pivotX: this.style.imageScalePivotX,
          pivotY: this.style.imageScalePivotY,
          scale: [imageScale, this._Image.scale < imageScale ? this.style.animationImageScaleEntrance : this.style.animationImageScaleExit]
        };
      } else {
        var scale = 1;
        this._Image.smooth = {
          scale: [scale, this.style.animationImageScaleExit]
        };
      }
    }
  }, {
    key: "_handleImageLoadError",
    value: function _handleImageLoadError() {
      if (this.src === this.fallbackSrc) return;
      context/* default */.Z.error("Image ".concat(this._src, " failed to load"));
      if (this.fallbackSrc && this.fallbackSrc !== this.src) {
        this.src = this.fallbackSrc;
      }
    }
  }, {
    key: "_showComponent",
    value: function _showComponent() {
      this.smooth = {
        alpha: [1, this.style.animationComponentEntrance]
      };
    }
  }, {
    key: "_updateForegroundImage",
    value: function () {
      var _updateForegroundImage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this3 = this;
        var foregroundImagePatch;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this._foregroundSrc) {
                _context2.next = 3;
                break;
              }
              if (this._ForegroundImage) {
                this.patch({
                  ForegroundImage: undefined
                });
              }
              return _context2.abrupt("return");
            case 3:
              foregroundImagePatch = {
                mount: 0.5,
                x: this.w / 2,
                y: this.h / 2,
                zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.foreground,
                texture: {
                  type: CustomImageTexture/* default */.Z,
                  src: this._foregroundSrc,
                  hasAlpha: true
                }
              };
              if (this.foregroundWidth && this.foregroundHeight) {
                // The image size is already known so we can just patch it
                foregroundImagePatch.h = this.foregroundHeight;
                foregroundImagePatch.w = this.foregroundWidth;
                this.patch({
                  ForegroundImage: foregroundImagePatch
                });
              } else if (this.foregroundWidth || this.foregroundHeight) {
                // Load the image to get the aspect ratio before showing
                this.patch({
                  ForegroundImage: _objectSpread(_objectSpread({}, foregroundImagePatch), {}, {
                    alpha: 0.001
                  })
                });
                this._ForegroundImage.once('txLoaded', function () {
                  var imageW = _this3._ForegroundImage.texture.getRenderWidth();
                  var imageH = _this3._ForegroundImage.texture.getRenderHeight();
                  _this3._ForegroundImage.patch({
                    alpha: 1,
                    w: _this3.foregroundHeight ? _this3.foregroundHeight * (imageW / imageH) : _this3.foregroundWidth,
                    h: _this3.foregroundWidth ? _this3.foregroundWidth * (imageH / imageW) : _this3.foregroundHeight
                  });
                });
              }
              this.patch({
                ForegroundImage: foregroundImagePatch
              });
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function _updateForegroundImage() {
        return _updateForegroundImage2.apply(this, arguments);
      }
      return _updateForegroundImage;
    }()
  }, {
    key: "_updateBlur",
    value: function _updateBlur() {
      var _this4 = this;
      if ((!this._shouldBlur || this._Image && this._Image.texture && this._Image.texture.src === this.fallbackSrc) && this._Blur) {
        // Remove Blur element as it is not longer required
        if (this.shouldSmooth) {
          this._Blur._getTransition('alpha').once('finish', function () {
            // Clean up gradient after animation is complete
            _this4.patch({
              Blur: undefined
            });
          });
          this._Blur.smooth = {
            alpha: [0, this.style.animationBlurExit]
          };
        } else {
          this.patch({
            Blur: undefined
          });
        }
        return;
      }
      // Create/update the Blur element
      if (!this._srcFailed && this._shouldBlur) {
        this.patch({
          Blur: {
            alpha: !this._Blur && this.shouldSmooth ? 0.001 : 1,
            // If the Blur element already exists there is no need to fade it in again
            amount: this.style.blur,
            zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.blur,
            content: {
              Image: {
                h: this.h,
                texture: this._Image.getTexture(),
                w: this.w
              }
            },
            h: this.h,
            rtt: true,
            type: lightning_esm/* default */.Z.components.FastBlurComponent,
            w: this.w
          }
        });
        if (this._Blur.alpha < 1) {
          this._Blur.smooth = {
            alpha: [1, this.style.animationBlurEntrance]
          };
        }
      }
    }
  }, {
    key: "_updateCenterImage",
    value: function _updateCenterImage() {
      if (this.format === 'contain') {
        this._updateFormatContain();
      } else if (this.format === 'circle' || this.format === 'square') {
        this._updateFormatSquareCircle();
      } else if (this._CenterImage) {
        // Remove the center image element if no longer required
        this.patch({
          CenterImage: undefined
        });
      }
    }
  }, {
    key: "_updateFormatContain",
    value: function () {
      var _updateFormatContain2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var imageW, imageH, ratioW, ratioH, src;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(this._CenterImage && this._CenterImage.mode !== this.format || this.src === this.fallbackSrc || this._aspectRatioEqual)) {
                _context3.next = 5;
                break;
              }
              // Make sure previous mode is propertly cleaned up
              this.patch({
                CenterImage: undefined
              });
              if (!(this.src === this.fallbackSrc || this._aspectRatioEqual)) {
                _context3.next = 5;
                break;
              }
              this._Image.alpha = 1;
              return _context3.abrupt("return");
            case 5:
              ratioW = Math.abs(this._Image.texture.source.w / this._Image.texture.source.h);
              ratioH = Math.abs(this._Image.texture.source.h / this._Image.texture.source.w);
              if (this._Image.texture.source.w < this._Image.texture.source.h) {
                // portrait
                if (this.h * ratioW < this.w) {
                  // make sure it is set to show 100% height
                  imageW = this.h * ratioW;
                  imageH = this.h;
                } else {
                  // make 100% width

                  imageW = this.w;
                  imageH = this.w * ratioH;
                }
              } else if (this._Image.texture.source.w > this._Image.texture.source.h) {
                // landscape
                if (this.w * ratioH < this.h) {
                  // make sure it is set to show 100% w
                  imageW = this.w;
                  imageH = this.w * ratioH;
                } else {
                  // make 100% width
                  imageW = this.h * ratioW;
                  imageH = this.h;
                }
              } else {
                // render a square
                imageW = Math.min(this.w, this.h);
                imageH = imageW;
              }
              _context3.next = 10;
              return this._processedImageSrc;
            case 10:
              src = _context3.sent;
              this.patch({
                CenterImage: {
                  format: this.format,
                  mount: 0.5,
                  w: imageW,
                  h: imageH,
                  x: this.w / 2,
                  y: this.h / 2,
                  zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.centerImage,
                  texture: {
                    src: src,
                    resizeMode: {
                      h: imageH,
                      type: 'cover',
                      w: imageW
                    },
                    type: CustomImageTexture/* default */.Z
                  }
                }
              });
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function _updateFormatContain() {
        return _updateFormatContain2.apply(this, arguments);
      }
      return _updateFormatContain;
    }()
  }, {
    key: "_updateFormatSquareCircle",
    value: function _updateFormatSquareCircle() {
      if (this._CenterImage && this._CenterImage.mode !== this.format || this.src === this.fallbackSrc) {
        // Make sure previous mode is properly cleaned up
        this.patch({
          CenterImage: undefined
        });
        if (this.src === this.fallbackSrc) return;
      }
      var imageSize = Math.min(this.w, this.h) - this.style.padding * 2;
      this.patch({
        CenterImage: {
          format: this.format,
          h: imageSize,
          shader: {
            radius: 'circle' === this.format ? imageSize / 2 : this.style.centerImageRadius,
            type: lightning_esm/* default */.Z.shaders.RoundedRectangle
          },
          w: imageSize,
          zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.centerImage,
          Image: {
            h: imageSize,
            mount: 0.5,
            rtt: true,
            // Required for shader to work
            w: imageSize,
            x: this.w / 2,
            y: this.h / 2,
            texture: {
              src: this._Image.texture.src,
              resizeMode: {
                h: imageSize,
                type: 'cover',
                w: imageSize
              },
              type: CustomImageTexture/* default */.Z
            }
          }
        }
      });
    }
  }, {
    key: "_updateGradient",
    value: function _updateGradient() {
      var _this5 = this;
      if (!this.gradient) {
        if (this._Gradient) {
          // Cleanup previous gradient
          if (this.shouldSmooth) {
            this._Gradient._getTransition('alpha').once('finish', function () {
              // Remove gradient if no longer required
              var transition = _this5._Gradient && _this5._Gradient._getTransition('alpha');
              if (!_this5.gradient && transition && transition.p === 1) _this5.patch({
                Gradient: undefined
              });
            });
            this._Gradient.patch(this._gradientPatch); // Make sure any mode updates are patched ex.radius changes when focused/unfocused
            this._Gradient.smooth = {
              alpha: [0, this.style.animationGradientExit]
            };
          } else {
            this.patch({
              Gradient: undefined
            });
          }
        }
        return;
      }
      this._createGradient();
    }
  }, {
    key: "_createGradient",
    value: function _createGradient() {
      this.patch({
        Gradient: this._gradientPatch // Allows for an easier way to extend and replace the gradient
      });

      if (this.shouldSmooth) {
        this.applySmooth(this._Gradient, {
          alpha: [1, this.style.animationGradientEntrance]
        });
      }
    }
  }, {
    key: "_updateImage",
    value: function () {
      var _updateImage2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var src;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this._aspectRatioEqual = false; // Set this back to false since we will not know the aspect ratio until after the image has loaded
              if (this._processedImageSrc) {
                _context4.next = 4;
                break;
              }
              if (this._Image) {
                this._Image.texture = undefined;
              }
              return _context4.abrupt("return");
            case 4:
              _context4.next = 6;
              return this._processedImageSrc;
            case 6:
              src = _context4.sent;
              this._Image.patch({
                alpha: this.src !== this.fallbackSrc && (this._blur || this._hasCenterImage) ? 0.001 : 1,
                // Prevent image from flashing on first load if mode requires a center image or blur is true
                h: this.h,
                texture: {
                  type: CustomImageTexture/* default */.Z,
                  src: src,
                  resizeMode: {
                    type: 'cover',
                    w: this.w,
                    h: this.h
                  }
                },
                w: this.w,
                zIndex: this.core.findZContext().zIndex + this.style.zIndexSet.image
              });
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function _updateImage() {
        return _updateImage2.apply(this, arguments);
      }
      return _updateImage;
    }()
  }, {
    key: "_updateFillColor",
    value: function _updateFillColor() {
      if (!this.fill) {
        this.patch({
          FillColor: undefined
        });
      } else {
        this.patch({
          FillColor: {
            rect: true,
            w: this.w,
            h: this.h,
            color: this.style.fillColor,
            zIndex: 5
          }
        });
      }
    }
  }, {
    key: "_updateRadius",
    value: function _updateRadius() {
      // Add shader to all items in component if greater than 0, remove shader otherwise.
      this.patch(this.style.radius ? {
        shader: {
          type: lightning_esm/* default */.Z.shaders.RoundedRectangle,
          radius: this.style.radius
        }
      } : {
        shader: undefined
      });
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Artwork';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Artwork_styles_namespaceObject;
    }
  }, {
    key: "properties",
    get: function get() {
      return ['blur', 'fallbackSrc', 'foregroundHeight', 'foregroundSrc', 'foregroundWidth', 'gradient', 'format', 'src', 'fill', 'shouldScale', 'srcCallback', 'srcCallbackAspectRatios'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Blur', 'CenterImage', 'FillColor', 'ForegroundImage', 'Gradient', 'Image', 'Item'];
    }
  }, {
    key: "aliasProperties",
    get: function get() {
      return [{
        prev: 'foregroundH',
        curr: 'foregroundHeight'
      }, {
        prev: 'foregroundW',
        curr: 'foregroundWidth'
      }];
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        rtt: true,
        Image: {}
      };
    }
  }]);
  return Artwork;
}(Base/* default */.Z);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Gradient/Gradient.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Gradient)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Gradient/Gradient.styles.js
var Gradient_styles_namespaceObject = {};
__webpack_require__.r(Gradient_styles_namespaceObject);
__webpack_require__.d(Gradient_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Gradient/Gradient.styles.js
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
    gradientTop: theme.color.fillTransparent,
    radius: theme.radius.none
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      gradientColor: theme.color.material
    },
    inverse: {
      gradientColor: theme.color.fillNeutral
    },
    brand: {
      gradientColor: theme.color.fillBrand
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Gradient/Gradient.js
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




var Gradient = /*#__PURE__*/function (_Base) {
  _inherits(Gradient, _Base);
  var _super = _createSuper(Gradient);
  function Gradient() {
    _classCallCheck(this, Gradient);
    return _super.apply(this, arguments);
  }
  _createClass(Gradient, [{
    key: "_update",
    value: function _update() {
      this.patch({
        rect: true,
        rtt: true,
        colorTop: this.style.gradientTop,
        colorBottom: this.style.gradientColor,
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.w, this.h, this.style.radius)
      });
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Gradient';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Gradient_styles_namespaceObject;
    }
  }]);
  return Gradient;
}(Base/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=3463.eee9d134.iframe.bundle.js.map