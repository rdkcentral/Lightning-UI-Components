"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6918],{

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
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    _inherits(_class, _Base);
    var _super = _createSuper(_class);
    function _class() {
      _classCallCheck(this, _class);
      return _super.apply(this, arguments);
    }
    _createClass(_class, [{
      key: "_construct",
      value: function _construct() {
        _get(_getPrototypeOf(_class.prototype), "_construct", this).call(this);
        this[currentSelectedIndex] = defaultIndex;
      }
    }, {
      key: "_init",
      value: function _init() {
        _get(_getPrototypeOf(_class.prototype), "_init", this).call(this);
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
    return _class;
  }(Base);
}
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/mixins/withSelections/withSelections.stories.js
function withSelections_stories_typeof(o) { "@babel/helpers - typeof"; return withSelections_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, withSelections_stories_typeof(o); }
var _withSelections$param, _withSelections$param2;
function withSelections_stories_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function withSelections_stories_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? withSelections_stories_ownKeys(Object(t), !0).forEach(function (r) { withSelections_stories_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : withSelections_stories_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function withSelections_stories_defineProperty(obj, key, value) { key = withSelections_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function withSelections_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function withSelections_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, withSelections_stories_toPropertyKey(descriptor.key), descriptor); } }
function withSelections_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) withSelections_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) withSelections_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function withSelections_stories_toPropertyKey(arg) { var key = withSelections_stories_toPrimitive(arg, "string"); return withSelections_stories_typeof(key) === "symbol" ? key : String(key); }
function withSelections_stories_toPrimitive(input, hint) { if (withSelections_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (withSelections_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function withSelections_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) withSelections_stories_setPrototypeOf(subClass, superClass); }
function withSelections_stories_setPrototypeOf(o, p) { withSelections_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withSelections_stories_setPrototypeOf(o, p); }
function withSelections_stories_createSuper(Derived) { var hasNativeReflectConstruct = withSelections_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = withSelections_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = withSelections_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return withSelections_stories_possibleConstructorReturn(this, result); }; }
function withSelections_stories_possibleConstructorReturn(self, call) { if (call && (withSelections_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return withSelections_stories_assertThisInitialized(self); }
function withSelections_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function withSelections_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function withSelections_stories_getPrototypeOf(o) { withSelections_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withSelections_stories_getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Button, Row } from '../../components';\nimport withSelectionsMixin from '.';\n\nexport default {\n  title: 'Utilities/withSelections'\n};\n\nexport const withSelections = () => {\n  class UnderlineButton extends Button {\n    get isSelected() {\n      return this._isSelected;\n    }\n\n    set isSelected(v) {\n      this._whenEnabled.then(() => {\n        if (v !== this._isSelected) {\n          this._isSelected = v;\n          if (v) {\n            this.patch({\n              Line: {\n                rect: true,\n                color: 0xffffffff,\n                w: w => w,\n                h: 4,\n                y: h => h + 20\n              }\n            });\n          } else {\n            this.patch({\n              Line: undefined\n            });\n          }\n        }\n      });\n    }\n  }\n\n  return class withSelections extends lng.Component {\n    static _template() {\n      return {\n        Items: {\n          type: withSelectionsMixin(Row),\n          y: 100,\n          items: [\n            {\n              type: UnderlineButton,\n              title: 'Left'\n            },\n            {\n              type: UnderlineButton,\n              title: 'Center',\n              x: 150\n            },\n            {\n              type: UnderlineButton,\n              title: 'Right',\n              x: 312\n            }\n          ]\n        },\n        Title: {\n          text: {}\n        }\n      };\n    }\n\n    _firstEnable() {\n      this.tag('Title').text.text =\n        'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n\n    $onSelect() {\n      this.tag('Title').text.text =\n        'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n  };\n};\n\nwithSelections.storyName = 'withSelections';\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "withSelections": {
    "startLoc": {
      "col": 30,
      "line": 25
    },
    "endLoc": {
      "col": 1,
      "line": 84
    },
    "startBody": {
      "col": 30,
      "line": 25
    },
    "endBody": {
      "col": 1,
      "line": 84
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




/* harmony default export */ const withSelections_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { Button, Row } from '../../components';\nimport withSelectionsMixin from '.';\nexport default {\n  title: 'Utilities/withSelections'\n};\nexport const withSelections = () => {\n  class UnderlineButton extends Button {\n    get isSelected() {\n      return this._isSelected;\n    }\n    set isSelected(v) {\n      this._whenEnabled.then(() => {\n        if (v !== this._isSelected) {\n          this._isSelected = v;\n          if (v) {\n            this.patch({\n              Line: {\n                rect: true,\n                color: 0xffffffff,\n                w: w => w,\n                h: 4,\n                y: h => h + 20\n              }\n            });\n          } else {\n            this.patch({\n              Line: undefined\n            });\n          }\n        }\n      });\n    }\n  }\n  return class withSelections extends lng.Component {\n    static _template() {\n      return {\n        Items: {\n          type: withSelectionsMixin(Row),\n          y: 100,\n          items: [{\n            type: UnderlineButton,\n            title: 'Left'\n          }, {\n            type: UnderlineButton,\n            title: 'Center',\n            x: 150\n          }, {\n            type: UnderlineButton,\n            title: 'Right',\n            x: 312\n          }]\n        },\n        Title: {\n          text: {}\n        }\n      };\n    }\n    _firstEnable() {\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n    $onSelect() {\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n  };\n};\nwithSelections.storyName = 'withSelections';\nwithSelections.parameters = {\n  ...withSelections.parameters,\n  docs: {\n    ...withSelections.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  class UnderlineButton extends Button {\\n    get isSelected() {\\n      return this._isSelected;\\n    }\\n    set isSelected(v) {\\n      this._whenEnabled.then(() => {\\n        if (v !== this._isSelected) {\\n          this._isSelected = v;\\n          if (v) {\\n            this.patch({\\n              Line: {\\n                rect: true,\\n                color: 0xffffffff,\\n                w: w => w,\\n                h: 4,\\n                y: h => h + 20\\n              }\\n            });\\n          } else {\\n            this.patch({\\n              Line: undefined\\n            });\\n          }\\n        }\\n      });\\n    }\\n  }\\n  return class withSelections extends lng.Component {\\n    static _template() {\\n      return {\\n        Items: {\\n          type: withSelectionsMixin(Row),\\n          y: 100,\\n          items: [{\\n            type: UnderlineButton,\\n            title: 'Left'\\n          }, {\\n            type: UnderlineButton,\\n            title: 'Center',\\n            x: 150\\n          }, {\\n            type: UnderlineButton,\\n            title: 'Right',\\n            x: 312\\n          }]\\n        },\\n        Title: {\\n          text: {}\\n        }\\n      };\\n    }\\n    _firstEnable() {\\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\\n    }\\n    $onSelect() {\\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\\n    }\\n  };\\n}\",\n      ...withSelections.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "with-selections": {
          "startLoc": {
            "col": 30,
            "line": 25
          },
          "endLoc": {
            "col": 1,
            "line": 84
          },
          "startBody": {
            "col": 30,
            "line": 25
          },
          "endBody": {
            "col": 1,
            "line": 84
          }
        }
      }
    }
  },
  title: 'Utilities/withSelections'
});
var withSelections = function withSelections() {
  var UnderlineButton = /*#__PURE__*/function (_Button) {
    withSelections_stories_inherits(UnderlineButton, _Button);
    var _super = withSelections_stories_createSuper(UnderlineButton);
    function UnderlineButton() {
      withSelections_stories_classCallCheck(this, UnderlineButton);
      return _super.apply(this, arguments);
    }
    withSelections_stories_createClass(UnderlineButton, [{
      key: "isSelected",
      get: function get() {
        return this._isSelected;
      },
      set: function set(v) {
        var _this = this;
        this._whenEnabled.then(function () {
          if (v !== _this._isSelected) {
            _this._isSelected = v;
            if (v) {
              _this.patch({
                Line: {
                  rect: true,
                  color: 0xffffffff,
                  w: function w(_w) {
                    return _w;
                  },
                  h: 4,
                  y: function y(h) {
                    return h + 20;
                  }
                }
              });
            } else {
              _this.patch({
                Line: undefined
              });
            }
          }
        });
      }
    }]);
    return UnderlineButton;
  }(Button/* default */.Z);
  return /*#__PURE__*/function (_lng$Component) {
    withSelections_stories_inherits(withSelections, _lng$Component);
    var _super2 = withSelections_stories_createSuper(withSelections);
    function withSelections() {
      withSelections_stories_classCallCheck(this, withSelections);
      return _super2.apply(this, arguments);
    }
    withSelections_stories_createClass(withSelections, [{
      key: "_firstEnable",
      value: function _firstEnable() {
        this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;
      }
    }, {
      key: "$onSelect",
      value: function $onSelect() {
        this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;
      }
    }], [{
      key: "_template",
      value: function _template() {
        return {
          Items: {
            type: withSelections_withSelections(Row/* default */.Z),
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
    }]);
    return withSelections;
  }(lightning_esm/* default */.Z.Component);
};
withSelections.storyName = 'withSelections';
withSelections.parameters = withSelections_stories_objectSpread(withSelections_stories_objectSpread({}, withSelections.parameters), {}, {
  docs: withSelections_stories_objectSpread(withSelections_stories_objectSpread({}, (_withSelections$param = withSelections.parameters) === null || _withSelections$param === void 0 ? void 0 : _withSelections$param.docs), {}, {
    source: withSelections_stories_objectSpread({
      originalSource: "() => {\n  class UnderlineButton extends Button {\n    get isSelected() {\n      return this._isSelected;\n    }\n    set isSelected(v) {\n      this._whenEnabled.then(() => {\n        if (v !== this._isSelected) {\n          this._isSelected = v;\n          if (v) {\n            this.patch({\n              Line: {\n                rect: true,\n                color: 0xffffffff,\n                w: w => w,\n                h: 4,\n                y: h => h + 20\n              }\n            });\n          } else {\n            this.patch({\n              Line: undefined\n            });\n          }\n        }\n      });\n    }\n  }\n  return class withSelections extends lng.Component {\n    static _template() {\n      return {\n        Items: {\n          type: withSelectionsMixin(Row),\n          y: 100,\n          items: [{\n            type: UnderlineButton,\n            title: 'Left'\n          }, {\n            type: UnderlineButton,\n            title: 'Center',\n            x: 150\n          }, {\n            type: UnderlineButton,\n            title: 'Right',\n            x: 312\n          }]\n        },\n        Title: {\n          text: {}\n        }\n      };\n    }\n    _firstEnable() {\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n    $onSelect() {\n      this.tag('Title').text.text = 'Selected: ' + this.tag('Items').currentSelected.title;\n    }\n  };\n}"
    }, (_withSelections$param2 = withSelections.parameters) === null || _withSelections$param2 === void 0 || (_withSelections$param2 = _withSelections$param2.docs) === null || _withSelections$param2 === void 0 ? void 0 : _withSelections$param2.source)
  })
});
var __namedExportsOrder = ["withSelections"];

/***/ })

}]);
//# sourceMappingURL=mixins-withSelections-withSelections-stories.08c28c62.iframe.bundle.js.map