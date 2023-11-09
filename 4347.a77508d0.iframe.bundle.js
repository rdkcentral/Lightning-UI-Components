"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4347],{

/***/ "../../@lightningjs/ui-components/src/mixins/withEditItems/withEditItems.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ withEditItems_stories),
  withEditItems: () => (/* binding */ withEditItems)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withEditItems/index.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
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

/* harmony default export */ function mixins_withEditItems(Base) {
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
        _get(_getPrototypeOf(_class.prototype), "_init", this).call(this);
        this.isEditing = false;
      }
    }, {
      key: "toggleEdit",
      value: function toggleEdit() {
        this.isEditing = !this.isEditing;
      }
    }, {
      key: "_swapItemArrayPos",
      value: function _swapItemArrayPos(array, current, previous) {
        var _ref = [array[previous], array[current]];
        array[current] = _ref[0];
        array[previous] = _ref[1];
        _set(_getPrototypeOf(_class.prototype), "selectedIndex", current, this, true);
      }
    }, {
      key: "_unfocus",
      value: function _unfocus() {
        this.isEditing = false;
        _get(_getPrototypeOf(_class.prototype), "_unfocus", this).call(this);
      }
    }, {
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(index) {
        var _this = this;
        if (!this.isEditing) {
          _set(_getPrototypeOf(_class.prototype), "selectedIndex", index, this, true);
          return;
        }
        if (this.selectedIndex >= this.items.length - 1 && index > this.selectedIndex) {
          return;
        }
        var currentItem = this.selected;
        this.prevSelected = currentItem;
        var nextItem = this.items[index];
        var previousIndex = this.selectedIndex;
        var oldPosX = currentItem.transition('x') ? currentItem.transition('x').targetValue : currentItem.x;
        var oldPosY = currentItem.transition('y') ? currentItem.transition('y').targetValue : currentItem.y;
        var newPosX = nextItem.transition('x') ? nextItem.transition('x').targetValue : nextItem.x;
        var newPosY = nextItem.transition('y') ? nextItem.transition('y').targetValue : nextItem.y;
        this._swapItemArrayPos(this.items, index, previousIndex);

        // self invoking async function that waits for setSmooth calls to complete before triggering
        // render and signaling selected changed event.
        // This allows time for items to be in their final position before the row component check world context
        // to identify items off screen to trigger scrolling
        _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return currentItem.setSmooth('x', newPosX);
              case 2:
                _context.next = 4;
                return currentItem.setSmooth('y', newPosY);
              case 4:
                _context.next = 6;
                return nextItem.setSmooth('x', oldPosX);
              case 6:
                _context.next = 8;
                return nextItem.setSmooth('y', oldPosY);
              case 8:
                if (!_this.Items.children.length || !_this.Items.children[index] || !_this.Items.children[index].skipFocus) {
                  if (_this.selected) {
                    _this._selectedIndex = index;
                    _this._render(_this.selected, _this.prevSelected);
                    _this.signal('selectedChange', _this.selected, _this.prevSelected);
                  }
                  // Don't call refocus until after a new render in case of a situation like Plinko nav
                  // where we don't want to focus the previously selected item and need to get the new one first
                  _this._refocus();
                }
              case 9:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    }]);
    return _class;
  }(Base);
}
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.stories.js
var Row_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withEditItems/withEditItems.stories.js
function withEditItems_stories_typeof(o) { "@babel/helpers - typeof"; return withEditItems_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, withEditItems_stories_typeof(o); }
var _withEditItems$parame, _withEditItems$parame2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { withEditItems_stories_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function withEditItems_stories_defineProperty(obj, key, value) { key = withEditItems_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function withEditItems_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function withEditItems_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, withEditItems_stories_toPropertyKey(descriptor.key), descriptor); } }
function withEditItems_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) withEditItems_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) withEditItems_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function withEditItems_stories_toPropertyKey(arg) { var key = withEditItems_stories_toPrimitive(arg, "string"); return withEditItems_stories_typeof(key) === "symbol" ? key : String(key); }
function withEditItems_stories_toPrimitive(input, hint) { if (withEditItems_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (withEditItems_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function withEditItems_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) withEditItems_stories_setPrototypeOf(subClass, superClass); }
function withEditItems_stories_setPrototypeOf(o, p) { withEditItems_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withEditItems_stories_setPrototypeOf(o, p); }
function withEditItems_stories_createSuper(Derived) { var hasNativeReflectConstruct = withEditItems_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = withEditItems_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = withEditItems_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return withEditItems_stories_possibleConstructorReturn(this, result); }; }
function withEditItems_stories_possibleConstructorReturn(self, call) { if (call && (withEditItems_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return withEditItems_stories_assertThisInitialized(self); }
function withEditItems_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function withEditItems_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function withEditItems_stories_getPrototypeOf(o) { withEditItems_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withEditItems_stories_getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Button, TextBox, Row } from '../../components';\nimport { default as withEditItemsMixin } from '.';\n\n/**\n * Shared Args and Arg Types from Row\n */\nimport * as RowProps from '../../components/Row/Row.stories.js';\nexport default {\n  title: 'Utilities/withEditItems',\n  parameters: {\n    remountAll: true\n  }\n};\n\nexport const withEditItems = () =>\n  class withEditItems extends lng.Component {\n    static _template() {\n      return {\n        RowComponent: {\n          type: withEditItemsMixin(Row),\n          y: 300,\n          items: Array.apply(null, { length: 6 }).map((_, i) => ({\n            type: Button,\n            title: `Button ${i + 1}`,\n            w: 150\n          }))\n        },\n        TextBox: {\n          type: TextBox,\n          content:\n            'Press enter to toggle edit mode. \\nWhen in edit mode, use left/right arrows to move items \\nPress enter again to exit edit mode'\n        }\n      };\n    }\n\n    _handleEnter() {\n      this.tag('RowComponent').toggleEdit();\n    }\n  };\nwithEditItems.args = RowProps.Row.args;\nwithEditItems.argTypes = RowProps.Row.argTypes;\n\nwithEditItems.storyName = 'withEditItems';\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "withEditItems": {
    "startLoc": {
      "col": 29,
      "line": 33
    },
    "endLoc": {
      "col": 1,
      "line": 56
    },
    "startBody": {
      "col": 29,
      "line": 33
    },
    "endBody": {
      "col": 1,
      "line": 56
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





/**
 * Shared Args and Arg Types from Row
 */

/* harmony default export */ const withEditItems_stories = ({
  title: 'Utilities/withEditItems',
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Button, TextBox, Row } from '../../components';\nimport { default as withEditItemsMixin } from '.';\n\n/**\n * Shared Args and Arg Types from Row\n */\nimport * as RowProps from '../../components/Row/Row.stories.js';\nexport default {\n  title: 'Utilities/withEditItems',\n  parameters: {\n    remountAll: true\n  }\n};\nexport const withEditItems = () => class withEditItems extends lng.Component {\n  static _template() {\n    return {\n      RowComponent: {\n        type: withEditItemsMixin(Row),\n        y: 300,\n        items: Array.apply(null, {\n          length: 6\n        }).map((_, i) => ({\n          type: Button,\n          title: `Button ${i + 1}`,\n          w: 150\n        }))\n      },\n      TextBox: {\n        type: TextBox,\n        content: 'Press enter to toggle edit mode. \\nWhen in edit mode, use left/right arrows to move items \\nPress enter again to exit edit mode'\n      }\n    };\n  }\n  _handleEnter() {\n    this.tag('RowComponent').toggleEdit();\n  }\n};\nwithEditItems.args = RowProps.Row.args;\nwithEditItems.argTypes = RowProps.Row.argTypes;\nwithEditItems.storyName = 'withEditItems';\nwithEditItems.parameters = {\n  ...withEditItems.parameters,\n  docs: {\n    ...withEditItems.parameters?.docs,\n    source: {\n      originalSource: \"() => class withEditItems extends lng.Component {\\n  static _template() {\\n    return {\\n      RowComponent: {\\n        type: withEditItemsMixin(Row),\\n        y: 300,\\n        items: Array.apply(null, {\\n          length: 6\\n        }).map((_, i) => ({\\n          type: Button,\\n          title: `Button ${i + 1}`,\\n          w: 150\\n        }))\\n      },\\n      TextBox: {\\n        type: TextBox,\\n        content: 'Press enter to toggle edit mode. \\\\nWhen in edit mode, use left/right arrows to move items \\\\nPress enter again to exit edit mode'\\n      }\\n    };\\n  }\\n  _handleEnter() {\\n    this.tag('RowComponent').toggleEdit();\\n  }\\n}\",\n      ...withEditItems.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "with-edit-items": {
          "startLoc": {
            "col": 29,
            "line": 33
          },
          "endLoc": {
            "col": 1,
            "line": 56
          },
          "startBody": {
            "col": 29,
            "line": 33
          },
          "endBody": {
            "col": 1,
            "line": 56
          }
        }
      }
    },
    remountAll: true
  }
});
var withEditItems = function withEditItems() {
  return /*#__PURE__*/function (_lng$Component) {
    withEditItems_stories_inherits(withEditItems, _lng$Component);
    var _super = withEditItems_stories_createSuper(withEditItems);
    function withEditItems() {
      withEditItems_stories_classCallCheck(this, withEditItems);
      return _super.apply(this, arguments);
    }
    withEditItems_stories_createClass(withEditItems, [{
      key: "_handleEnter",
      value: function _handleEnter() {
        this.tag('RowComponent').toggleEdit();
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          RowComponent: {
            type: mixins_withEditItems(Row/* default */.Z),
            y: 300,
            items: Array.apply(null, {
              length: 6
            }).map(function (_, i) {
              return {
                type: Button/* default */.Z,
                title: "Button ".concat(i + 1),
                w: 150
              };
            })
          },
          TextBox: {
            type: TextBox/* default */.Z,
            content: 'Press enter to toggle edit mode. \nWhen in edit mode, use left/right arrows to move items \nPress enter again to exit edit mode'
          }
        };
      }
    }]);
    return withEditItems;
  }(lightning_esm/* default */.Z.Component);
};
withEditItems.args = Row_stories.Row.args;
withEditItems.argTypes = Row_stories.Row.argTypes;
withEditItems.storyName = 'withEditItems';
withEditItems.parameters = _objectSpread(_objectSpread({}, withEditItems.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_withEditItems$parame = withEditItems.parameters) === null || _withEditItems$parame === void 0 ? void 0 : _withEditItems$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "() => class withEditItems extends lng.Component {\n  static _template() {\n    return {\n      RowComponent: {\n        type: withEditItemsMixin(Row),\n        y: 300,\n        items: Array.apply(null, {\n          length: 6\n        }).map((_, i) => ({\n          type: Button,\n          title: `Button ${i + 1}`,\n          w: 150\n        }))\n      },\n      TextBox: {\n        type: TextBox,\n        content: 'Press enter to toggle edit mode. \\nWhen in edit mode, use left/right arrows to move items \\nPress enter again to exit edit mode'\n      }\n    };\n  }\n  _handleEnter() {\n    this.tag('RowComponent').toggleEdit();\n  }\n}"
    }, (_withEditItems$parame2 = withEditItems.parameters) === null || _withEditItems$parame2 === void 0 || (_withEditItems$parame2 = _withEditItems$parame2.docs) === null || _withEditItems$parame2 === void 0 ? void 0 : _withEditItems$parame2.source)
  })
});
var __namedExportsOrder = ["withEditItems"];

/***/ })

}]);
//# sourceMappingURL=4347.a77508d0.iframe.bundle.js.map