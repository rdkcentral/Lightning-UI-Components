"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8477],{

/***/ "../../@lightningjs/ui-components/src/mixins/withSelections/withSelections.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ withSelections_stories),
  withSelections: () => (/* binding */ withSelections)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Row/Row.js + 1 modules
var Row = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withSelections/index.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
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

function withSelections_withSelections(Base) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultOpts = {
    captureKey: 'Enter',
    defaultIndex: 0,
    eventName: 'onSelect',
    keys: {
      currentSelected: 'currentSelected',
      currentSelectedIndex: 'currentSelectedIndex',
      isSelected: 'isSelected',
      items: 'items',
      setSelected: 'setSelected'
    }
  };
  var _defaultOpts$options$ = _objectSpread(_objectSpread(_objectSpread({}, defaultOpts), options), {}, {
      keys: _objectSpread(_objectSpread({}, defaultOpts.keys), options.keys)
    }),
    captureKey = _defaultOpts$options$.captureKey,
    defaultIndex = _defaultOpts$options$.defaultIndex,
    eventName = _defaultOpts$options$.eventName,
    _defaultOpts$options$2 = _defaultOpts$options$.keys,
    currentSelected = _defaultOpts$options$2.currentSelected,
    currentSelectedIndex = _defaultOpts$options$2.currentSelectedIndex,
    isSelected = _defaultOpts$options$2.isSelected,
    items = _defaultOpts$options$2.items,
    setSelected = _defaultOpts$options$2.setSelected;
  return /*#__PURE__*/function (_Base) {
    function _class() {
      _classCallCheck(this, _class);
      return _callSuper(this, _class, arguments);
    }
    _inherits(_class, _Base);
    return _createClass(_class, [{
      key: "_construct",
      value: function _construct() {
        _superPropGet(_class, "_construct", this, 3)([]);
        this[currentSelectedIndex] = defaultIndex;
      }
    }, {
      key: "_init",
      value: function _init() {
        _superPropGet(_class, "_init", this, 3)([]);
        this[currentSelected][isSelected] = true;
      }
    }, {
      key: setSelected,
      value: function value(selected, val) {
        var prevSelected = (this[items] || [])[this[currentSelectedIndex]];
        if (selected && (selected !== prevSelected || selected[isSelected] !== val)) {
          prevSelected && (prevSelected[isSelected] = false);
          selected[isSelected] = val;
          this[currentSelectedIndex] = Array.from(this[items] || []).indexOf(selected);
          this.fireAncestors('$' + eventName, selected, val);
        }
      }
    }, {
      key: "_captureKey",
      value: function _captureKey(event) {
        if (Array.isArray(captureKey) && captureKey.indexOf(event.key) > -1 || event.key === captureKey) {
          var _this$stage$applicati = this.stage.application.focusPath.slice(-1),
            _this$stage$applicati2 = _slicedToArray(_this$stage$applicati, 1),
            selected = _this$stage$applicati2[0];
          this[setSelected](selected, true);
        }
        return false;
      }
    }, {
      key: '$' + setSelected,
      value: function value(selected, val) {
        this[setSelected](selected, val);
      }
    }, {
      key: currentSelected,
      get: function get() {
        return this[items][this[currentSelectedIndex]];
      }
    }], [{
      key: "name",
      get: function get() {
        return Base.name;
      }
    }]);
  }(Base);
}
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withSelections/withSelections.stories.js
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





/* harmony default export */ const withSelections_stories = ({
  title: 'Utilities/withSelections'
});
const withSelections = () => {
  class UnderlineButton extends Button/* default */.A {
    get isSelected() {
      return this._isSelected;
    }
    set isSelected(v) {
      this._whenEnabled.then(() => {
        if (v !== this._isSelected) {
          this._isSelected = v;
          if (v) {
            this.patch({
              Line: {
                rect: true,
                color: 0xffffffff,
                w: w => w,
                h: 4,
                y: h => h + 20
              }
            });
          } else {
            this.patch({
              Line: undefined
            });
          }
        }
      });
    }
  }
  return class withSelections extends lightning_esm/* default */.A.Component {
    static _template() {
      return {
        Items: {
          type: withSelections_withSelections(Row/* default */.A),
          y: 100,
          items: [{
            type: UnderlineButton,
            title: 'Left'
          }, {
            type: UnderlineButton,
            title: 'Center',
            x: 150
          }, {
            type: UnderlineButton,
            title: 'Right',
            x: 312
          }]
        },
        Title: {
          text: {}
        }
      };
    }
    _firstEnable() {
      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;
    }
    $onSelect() {
      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;
    }
  };
};
withSelections.storyName = 'withSelections';
;
const __namedExportsOrder = ["withSelections"];
withSelections.parameters = {
  ...withSelections.parameters,
  docs: {
    ...withSelections.parameters?.docs,
    source: {
      originalSource: "() => {\n  class UnderlineButton extends Button {\n    get isSelected() {\n      return this._isSelected;\n    }\n    set isSelected(v) {\n      this._whenEnabled.then(() => {\n        if (v !== this._isSelected) {\n          this._isSelected = v;\n          if (v) {\n            this.patch({\n              Line: {\n                rect: true,\n                color: 0xffffffff,\n                w: w => w,\n                h: 4,\n                y: h => h + 20\n              }\n            });\n          } else {\n            this.patch({\n              Line: undefined\n            });\n          }\n        }\n      });\n    }\n  }\n  return class withSelections extends lng.Component {\n    static _template() {\n      return {\n        Items: {\n          type: withSelectionsMixin(Row),\n          y: 100,\n          items: [{\n            type: UnderlineButton,\n            title: 'Left'\n          }, {\n            type: UnderlineButton,\n            title: 'Center',\n            x: 150\n          }, {\n            type: UnderlineButton,\n            title: 'Right',\n            x: 312\n          }]\n        },\n        Title: {\n          text: {}\n        }\n      };\n    }\n    _firstEnable() {\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n    $onSelect() {\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n  };\n}",
      ...withSelections.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=mixins-withSelections-withSelections-stories.317168bd.iframe.bundle.js.map