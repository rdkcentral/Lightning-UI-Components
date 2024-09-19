"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6915],{

/***/ "../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ MetadataCardContent)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.styles.js
var MetadataCardContent_styles_namespaceObject = {};
__webpack_require__.r(MetadataCardContent_styles_namespaceObject);
__webpack_require__.d(MetadataCardContent_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.js + 2 modules
var MetadataBase = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataBase/MetadataBase.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.js + 1 modules
var Provider = __webpack_require__("../../@lightningjs/ui-components/src/components/Provider/Provider.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/shaders/FadeShader.js
var FadeShader = __webpack_require__("../../@lightningjs/ui-components/src/shaders/FadeShader.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.styles.js
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
    detailsTextStyle: theme.typography.body3,
    descriptionTextStyle: {
      maxLines: 3
    },
    descriptionDetailsStyle: {
      paddingY: 5
    },
    fadeWidth: theme.spacer.md * theme.spacer.md,
    provider: {
      itemSize: theme.spacer.xxxl + theme.spacer.md
    }
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      detailsTextStyle: {
        textColor: theme.color.textNeutral
      },
      mode: {
        disabled: {
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    },
    inverse: {
      detailsTextStyle: {
        textColor: theme.color.textInverse
      },
      mode: {
        disabled: {
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    },
    brand: {
      detailsTextStyle: {
        textColor: theme.color.textNeutral
      },
      mode: {
        disabled: {
          detailsTextStyle: {
            textColor: theme.color.textNeutralDisabled
          }
        }
      }
    }
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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






var MetadataCardContent = /*#__PURE__*/function (_MetadataBase) {
  function MetadataCardContent() {
    _classCallCheck(this, MetadataCardContent);
    return _callSuper(this, MetadataCardContent, arguments);
  }
  _inherits(MetadataCardContent, _MetadataBase);
  return _createClass(MetadataCardContent, [{
    key: "_setDetails",
    value: function _setDetails(details) {
      var _this = this;
      if (details) {
        this._detailsPromise = new Promise(function (resolve) {
          _this._detailsPromiseResolver = resolve;
        });
      } else {
        this._detailsPromise = undefined;
      }
      return details;
    }
  }, {
    key: "_setProvider",
    value: function _setProvider(provider) {
      var _this2 = this;
      if (provider) {
        this._providerPromise = new Promise(function (resolve) {
          _this2._providerPromiseResolver = resolve;
        });
      } else {
        this._providerPromise = undefined;
      }
      return provider;
    }
  }, {
    key: "_update",
    value: function () {
      var _update2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this._updateLines();
              this._updateProvider();
              _context.next = 4;
              return Promise.all([this._detailsPromise, this._providerPromise].filter(Boolean));
            case 4:
              this._updatePositions();
            case 5:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _update() {
        return _update2.apply(this, arguments);
      }
      return _update;
    }()
  }, {
    key: "_updateLines",
    value: function _updateLines() {
      this._Text.w = this.w;
      this._updateTitle();
      this._updateSubtitle();
      this._updateDescription();
      this._updateDescriptionDetails();
      this._updateDetails();
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
          type: TextBox/* default */.A
        });
      }
      this._Subtitle.patch({
        content: this.subtitle,
        style: {
          textStyle: _objectSpread(_objectSpread({}, this.style.subtitleTextStyle), {}, {
            maxLines: 1,
            wordWrap: true,
            wordWrapWidth: this._Text.w
          })
        }
      });
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription() {
      this._Description.patch({
        content: this.description,
        style: {
          textStyle: _objectSpread(_objectSpread({}, this.style.descriptionTextStyle), {}, {
            wordWrap: true,
            wordWrapWidth: this._Text.w
          })
        }
      });
    }
  }, {
    key: "_updateDescriptionDetails",
    value: function _updateDescriptionDetails() {
      this._DescriptionDetails.patch({
        content: this.descriptionDetails,
        style: {
          textStyle: _objectSpread(_objectSpread({}, this.style.descriptionDetailsTextStyle), {}, {
            maxLines: 1,
            wordWrap: true,
            wordWrapWidth: this._Text.w
          })
        },
        y: this.style.descriptionDetailsStyle.paddingY
      });
    }
  }, {
    key: "_updateDetails",
    value: function _updateDetails() {
      var maxWidth = this._detailsMaxW;
      this._Details.patch({
        content: this.details,
        style: {
          textStyle: _objectSpread(_objectSpread({}, this.style.detailsTextStyle), {}, {
            wordWrap: true,
            maxLines: 1,
            // sets default for details
            wordWrapWidth: maxWidth + this.style.fadeWidth / 2
          })
        }
      });
      if (this._Details.finalW > maxWidth) {
        this._DetailsFader.patch({
          w: maxWidth + this.style.fadeWidth / 2,
          shader: {
            type: FadeShader/* default */.A,
            positionLeft: 0,
            positionRight: this.style.fadeWidth
          }
        });
      } else {
        this._DetailsFader.shader = undefined;
      }
    }
  }, {
    key: "_resolveDetails",
    value: function _resolveDetails() {
      this._detailsPromiseResolver && this._detailsPromiseResolver();
      this._updatePositions();
    }
  }, {
    key: "_updateProvider",
    value: function _updateProvider() {
      if (this.provider) {
        this._Provider.patch(_objectSpread(_objectSpread({
          mode: this.mode
        }, this.provider), {}, {
          style: this.style.provider
        }));
      }
    }
  }, {
    key: "_resolveProvider",
    value: function _resolveProvider() {
      this._providerPromiseResolver && this._providerPromiseResolver();
      this._updatePositions();
      this._updateDetails();
    }
  }, {
    key: "_updatePositions",
    value: function _updatePositions() {
      this._Text.h = this._textH;
      this._Text.w = this._textW;
      this._DetailsWrapper.w = this._textW;
      this._DetailsWrapper.h = Math.max(this._providerH, this._Details.h);
      this._DetailsWrapper.y = this.h - this._DetailsWrapper.h;
      this._Details.y = this._DetailsWrapper.h / 2;
      this._Provider.x = this._DetailsWrapper.w - this._providerW;
      this._Provider.y = this._DetailsWrapper.h - this._providerH;
    }
  }, {
    key: "_textW",
    get: function get() {
      return this.w;
    }
  }, {
    key: "_textH",
    get: function get() {
      return this.h - this._providerH;
    }
  }, {
    key: "_providerW",
    get: function get() {
      return this._Provider.w;
    }
  }, {
    key: "_providerH",
    get: function get() {
      return this._Provider._Row._Items.h;
    }
  }, {
    key: "_detailsMaxW",
    get: function get() {
      return this.w - this._providerW - this.style.fadeWidth / 2;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || [this._Title && this._Title.announce, this._Subtitle && this._Subtitle.announce, this._Description && this._Description.announce, this._DescriptionDetails && this._DescriptionDetails.announce, this._Details && this._Details.announce, this._Provider && this._Provider.announce];
    },
    set: function set(announce) {
      _superPropSet(MetadataCardContent, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'MetadataCardContent';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return MetadataCardContent_styles_namespaceObject;
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
            type: TextBox/* default */.A
          },
          Subtitle: {
            type: TextBox/* default */.A
          },
          Description: {
            type: TextBox/* default */.A
          },
          DescriptionDetails: {
            type: TextBox/* default */.A
          }
        },
        DetailsWrapper: {
          DetailsFader: {
            Details: {
              mountY: 0.5,
              type: TextBox/* default */.A,
              signals: {
                textBoxChanged: '_resolveDetails'
              }
            }
          },
          Provider: {
            mount: 1,
            type: Provider/* default */.A,
            signals: {
              providerChanged: '_resolveProvider'
            }
          }
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['description', 'descriptionDetails', 'details', 'provider', 'subtitle', 'title'];
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
        name: 'Description',
        path: 'Text.Description'
      }, {
        name: 'DescriptionDetails',
        path: 'Text.DescriptionDetails'
      }, 'DetailsWrapper', {
        name: 'DetailsFader',
        path: 'DetailsWrapper.DetailsFader'
      }, {
        name: 'Details',
        path: 'DetailsWrapper.DetailsFader.Details'
      }, {
        name: 'Provider',
        path: 'DetailsWrapper.Provider'
      }];
    }
  }]);
}(MetadataBase/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Provider/Provider.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Provider)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Provider/Provider.styles.js
var Provider_styles_namespaceObject = {};
__webpack_require__.r(Provider_styles_namespaceObject);
__webpack_require__.d(Provider_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.styles.js
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

function base(theme) {
  return {
    alpha: theme.alpha.primary,
    counterTextStyle: theme.typography.headline3,
    itemSize: theme.layout.gutterX * 2,
    itemSpacing: theme.spacer.md,
    radius: theme.radius.sm
  };
}
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      counterBackgroundColor: theme.color.fillInverseSecondary
    },
    inverse: {
      counterBackgroundColor: theme.color.fillNeutralSecondary
    },
    brand: {
      counterBackgroundColor: theme.color.fillInverseSecondary
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Provider/Provider.js
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








var Provider = /*#__PURE__*/function (_Base) {
  function Provider() {
    _classCallCheck(this, Provider);
    return _callSuper(this, Provider, arguments);
  }
  _inherits(Provider, _Base);
  return _createClass(Provider, [{
    key: "providersHidden",
    get: function get() {
      return this.providers.length - this._visibleCount;
    }
  }, {
    key: "_construct",
    value: function _construct() {
      this._providers = [];
      _superPropGet(Provider, "_construct", this, 3)([]);
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateProviders();
      this._updateCounter();
    }
  }, {
    key: "_updateProviders",
    value: function _updateProviders() {
      var _this = this;
      var providerList = [];
      this.providers.slice(0, this.visibleCount).forEach(function (provider) {
        // Create a starting point for each provider icon.

        var patch = {
          centerInParent: true,
          radius: _this.disableRadius ? 0 : (0,utils/* getMaxRoundRadius */.XG)(_this.style.radius, _this.style.itemSize, _this.style.itemSize),
          alpha: _this.style.alpha,
          style: provider.style || {}
        };
        if (
        // If the provider is a pre-configured Icon, allow it to override the default behavior.
        provider.type === Icon/* default */.A && provider.icon && provider.w && provider.h) {
          // Maintain the ratio of the source icon while enforcing the height specified in the styles.
          var ratio = provider.w / provider.h;
          patch = _objectSpread(_objectSpread({
            type: Icon/* default */.A,
            icon: provider.icon
          }, provider), {}, {
            w: _this.style.itemSize * ratio,
            h: _this.style.itemSize
          }, patch);
        } else {
          // If the provider is just a string, create the rest of the Icon.
          patch = _objectSpread({
            type: Icon/* default */.A,
            w: _this.style.itemSize,
            h: _this.style.itemSize
          }, patch);
          if (_typeof(provider) === 'object') {
            patch = _objectSpread(_objectSpread({}, patch), provider);
          } else {
            patch.icon = provider;
          }
        }
        providerList.push(patch);
      });
      this._Row.patch({
        style: {
          itemSpacing: this.style.itemSpacing
        },
        items: providerList,
        h: this.style.itemSize
      });
    }
  }, {
    key: "_updateCounter",
    value: function _updateCounter() {
      if (this.providers.length > this.visibleCount) {
        var remaining = this.providersHidden;
        var counter = {
          announce: "+".concat(remaining),
          alpha: this.style.alpha,
          w: this.style.itemSize,
          h: this.style.itemSize,
          centerInParent: true,
          Background: {
            w: this.style.itemSize,
            h: this.style.itemSize,
            texture: lightning_esm/* default */.A.Tools.getRoundRect(this.style.itemSize, this.style.itemSize, (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.style.itemSize, this.style.itemSize), 0, null, true, this.style.counterBackgroundColor)
          },
          Text: {
            type: TextBox/* default */.A,
            mountX: 0.5,
            mountY: 0.5,
            x: this.style.itemSize / 2,
            y: this.style.itemSize / 2,
            content: this.counterText || "+".concat(remaining),
            style: {
              textStyle: this.style.counterTextStyle
            }
          }
        };
        this._Row.appendItems([counter]);
      }
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.signal('providerChanged');
    }
  }, {
    key: "_getVisibleCount",
    value: function _getVisibleCount() {
      var min = 1;
      var max = this.providers.length;
      var visibleCount = Math.min(Math.max(min, this._visibleCount), max);
      if (this._visibleCount < min) {
        console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is less than the minimum value (").concat(min, "). Setting it to ").concat(min, "."));
      }
      if (this._visibleCount > max) {
        console.warn("Warning: The specified visible count (".concat(this._visibleCount, ") is greater than the maximum value (").concat(max, "). Setting it to ").concat(max, "."));
      }
      return visibleCount;
    }
  }, {
    key: "w",
    get: function get() {
      return this._Row.w;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || this._Row.items && this._Row.items.length && this._Row.items.map(function (item) {
        return item.announce;
      });
    },
    set: function set(announce) {
      _superPropSet(Provider, "announce", announce, this, 1, 1);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Provider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Provider_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return {
        Row: {
          type: Row/* default */.A,
          autoResizeWidth: true
        }
      };
    }
  }, {
    key: "properties",
    get: function get() {
      return ['disableRadius', 'counterText', 'providers', 'visibleCount'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Row'];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataCardContent: () => (/* binding */ MetadataCardContent),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/MetadataCardContent/MetadataCardContent.js");
/* harmony import */ var _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
/* harmony import */ var _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png");
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







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/MetadataCardContent'
});
const MetadataCardContent = () => class MetadataCardContent extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      MetadataCardContent: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A
      }
    };
  }
};
MetadataCardContent.storyName = 'MetadataCardContent';

// used to show example of longer text in description
const descriptionSample = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
MetadataCardContent.args = {
  w: 600,
  h: 300,
  title: 'Title',
  subtitle: 'Subtitle',
  description: descriptionSample,
  descriptionDetails: ['94%', {
    icon: _assets_images_ic_lightning_white_32_png__WEBPACK_IMPORTED_MODULE_2__,
    style: {
      color: (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .getHexColor */ .H2)('00ff00')
    },
    title: 'Green Lightning Bolt'
  }, '86%', {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Tomato-Torrent-Icon.png',
    title: 'Rotten Tomatoes rating'
  }],
  details: 'Details',
  visibleCount: 3,
  mode: 'unfocused'
};
MetadataCardContent.argTypes = {
  ...(0,_docs_utils__WEBPACK_IMPORTED_MODULE_4__/* .createModeControl */ .Pg)({
    summaryValue: MetadataCardContent.args.mode
  }),
  w: {
    control: 'number',
    description: 'Width of component',
    table: {
      defaultValue: {
        summary: 0
      },
      type: {
        summary: 'number'
      }
    }
  },
  h: {
    control: 'number',
    description: 'Height of component',
    table: {
      defaultValue: {
        summary: 0
      },
      type: {
        summary: 'number'
      }
    }
  },
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  subtitle: {
    control: 'text',
    description: 'Subtitle text below title',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  description: {
    control: 'text',
    description: 'Description text below subtitle',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  descriptionDetails: {
    control: 'object',
    description: 'Description details directly below the description text',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  details: {
    control: 'text',
    description: 'Details text at bottom left of componentDetails text',
    table: {
      defaultValue: {
        summary: 'undefined'
      },
      type: {
        summary: 'string'
      }
    }
  },
  visibleCount: {
    control: {
      type: 'range',
      min: 1,
      max: 10,
      step: 1
    },
    description: 'Number of visible providers',
    table: {
      defaultValue: {
        summary: 1
      },
      type: {
        summary: 'number'
      }
    }
  }
};
MetadataCardContent.parameters = {
  argActions: {
    visibleCount(visibleCount, component) {
      component.tag('MetadataCardContent').provider = {
        visibleCount: visibleCount,
        providers: Array(10).fill({
          icon: _assets_images_Xfinity_Provider_Logo_Square_png__WEBPACK_IMPORTED_MODULE_5__,
          announce: 'xFinity',
          visibleCount: 3
        })
      };
    }
  }
};
;
const __namedExportsOrder = ["MetadataCardContent"];
MetadataCardContent.parameters = {
  ...MetadataCardContent.parameters,
  docs: {
    ...MetadataCardContent.parameters?.docs,
    source: {
      originalSource: "() => class MetadataCardContent extends lng.Component {\n  static _template() {\n    return {\n      MetadataCardContent: {\n        type: MetadataCardContentComponent\n      }\n    };\n  }\n}",
      ...MetadataCardContent.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/Xfinity-Provider-Logo-Square.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Xfinity-Provider-Logo-Square.d3aaa87c.png";

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/ic_lightning_white_32.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ic_lightning_white_32.06aecfeb.png";

/***/ })

}]);
//# sourceMappingURL=6915.3dc325ac.iframe.bundle.js.map