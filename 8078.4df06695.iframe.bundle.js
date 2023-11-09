"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8078],{

/***/ "../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ListItemSlider: () => (/* binding */ ListItemSlider),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ ListItemSlider_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ListItem/NestedSlider.styles.js
var NestedSlider_styles_namespaceObject = {};
__webpack_require__.r(NestedSlider_styles_namespaceObject);
__webpack_require__.d(NestedSlider_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.styles.js
var ListItemSlider_styles_namespaceObject = {};
__webpack_require__.r(ListItemSlider_styles_namespaceObject);
__webpack_require__.d(ListItemSlider_styles_namespaceObject, {
  base: () => (ListItemSlider_styles_base),
  mode: () => (ListItemSlider_styles_mode),
  tone: () => (ListItemSlider_styles_tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/NestedSlider.styles.js
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

var base = function base() {
  return {
    showArrows: false,
    showKnob: false
  };
};
var mode = function mode() {
  return {
    focused: {
      showArrows: true
    }
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      mode: {
        focused: {
          arrowColor: theme.color.fillInverse,
          progressBar: {
            barColor: theme.color.fillInverseTertiary,
            progressColor: theme.color.fillInverse
          }
        }
      }
    },
    inverse: {
      mode: {
        focused: {
          arrowColor: theme.color.fillNeutral,
          progressBar: {
            barColor: theme.color.fillNeutralTertiary,
            progressColor: theme.color.fillNeutral
          }
        }
      }
    },
    brand: {
      mode: {
        focused: {
          arrowColor: theme.color.fillInverse,
          progressBar: {
            barColor: theme.color.fillBrandTertiary,
            progressColor: theme.color.fillBrand
          }
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("../../@lightningjs/ui-components/src/components/Slider/Slider.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/NestedSlider.js
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



var NestedSlider = /*#__PURE__*/function (_Slider) {
  _inherits(NestedSlider, _Slider);
  var _super = _createSuper(NestedSlider);
  function NestedSlider() {
    _classCallCheck(this, NestedSlider);
    return _super.apply(this, arguments);
  }
  _createClass(NestedSlider, null, [{
    key: "__componentName",
    get: function get() {
      return 'NestedSlider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return NestedSlider_styles_namespaceObject;
    }
  }]);
  return NestedSlider;
}(Slider/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.js + 1 modules
var ListItem = __webpack_require__("../../@lightningjs/ui-components/src/components/ListItem/ListItem.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.styles.js
function ListItemSlider_styles_typeof(o) { "@babel/helpers - typeof"; return ListItemSlider_styles_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ListItemSlider_styles_typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = ListItemSlider_styles_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ListItemSlider_styles_toPropertyKey(arg) { var key = ListItemSlider_styles_toPrimitive(arg, "string"); return ListItemSlider_styles_typeof(key) === "symbol" ? key : String(key); }
function ListItemSlider_styles_toPrimitive(input, hint) { if (ListItemSlider_styles_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ListItemSlider_styles_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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

var ListItemSlider_styles_base = function base(theme) {
  return {
    paddingY: theme.spacer.md + theme.spacer.xs,
    valueTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutralSecondary
    })
  };
};
var ListItemSlider_styles_mode = function mode(theme) {
  return {
    disabled: {
      valueTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    },
    focused: {
      valueTextStyle: {
        textColor: theme.color.textInverseSecondary
      }
    }
  };
};
var ListItemSlider_styles_tone = function tone(theme) {
  return {
    neutral: {
      mode: {
        focused: {
          valueTextStyle: {
            textColor: theme.color.textInverseSecondary
          }
        }
      }
    },
    inverse: {
      mode: {
        focused: {
          valueTextStyle: {
            textColor: theme.color.textNeutralSecondary
          }
        }
      }
    },
    brand: {
      mode: {
        focused: {
          valueTextStyle: {
            textColor: theme.color.textInverseSecondary
          }
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.js
function ListItemSlider_typeof(o) { "@babel/helpers - typeof"; return ListItemSlider_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ListItemSlider_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ListItemSlider_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ListItemSlider_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ListItemSlider_ownKeys(Object(t), !0).forEach(function (r) { ListItemSlider_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ListItemSlider_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ListItemSlider_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ListItemSlider_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ListItemSlider_toPropertyKey(descriptor.key), descriptor); } }
function ListItemSlider_createClass(Constructor, protoProps, staticProps) { if (protoProps) ListItemSlider_defineProperties(Constructor.prototype, protoProps); if (staticProps) ListItemSlider_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { ListItemSlider_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function ListItemSlider_defineProperty(obj, key, value) { key = ListItemSlider_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ListItemSlider_toPropertyKey(arg) { var key = ListItemSlider_toPrimitive(arg, "string"); return ListItemSlider_typeof(key) === "symbol" ? key : String(key); }
function ListItemSlider_toPrimitive(input, hint) { if (ListItemSlider_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ListItemSlider_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = ListItemSlider_getPrototypeOf(object); if (object === null) break; } return object; }
function ListItemSlider_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ListItemSlider_setPrototypeOf(subClass, superClass); }
function ListItemSlider_setPrototypeOf(o, p) { ListItemSlider_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ListItemSlider_setPrototypeOf(o, p); }
function ListItemSlider_createSuper(Derived) { var hasNativeReflectConstruct = ListItemSlider_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ListItemSlider_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ListItemSlider_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ListItemSlider_possibleConstructorReturn(this, result); }; }
function ListItemSlider_possibleConstructorReturn(self, call) { if (call && (ListItemSlider_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ListItemSlider_assertThisInitialized(self); }
function ListItemSlider_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ListItemSlider_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ListItemSlider_getPrototypeOf(o) { ListItemSlider_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ListItemSlider_getPrototypeOf(o); }
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





var ListItemSlider_ListItemSlider = /*#__PURE__*/function (_ListItem) {
  ListItemSlider_inherits(ListItemSlider, _ListItem);
  var _super = ListItemSlider_createSuper(ListItemSlider);
  function ListItemSlider() {
    ListItemSlider_classCallCheck(this, ListItemSlider);
    return _super.apply(this, arguments);
  }
  ListItemSlider_createClass(ListItemSlider, [{
    key: "_construct",
    value: function _construct() {
      _get(ListItemSlider_getPrototypeOf(ListItemSlider.prototype), "_construct", this).call(this);
      this.value = 50;
    }
  }, {
    key: "_update",
    value: function _update() {
      _get(ListItemSlider_getPrototypeOf(ListItemSlider.prototype), "_update", this).call(this);
      this._updateSliderPosition();
      this._updateValue();
    }
  }, {
    key: "_onTextBoxChanged",
    value: function _onTextBoxChanged() {
      _get(ListItemSlider_getPrototypeOf(ListItemSlider.prototype), "_onTextBoxChanged", this).call(this);
      this._TextWrapper.h = Math.max(this._Title ? this._Title.h : 0, this._Value ? this._Value.h : 0);
    }
  }, {
    key: "_updateValue",
    value: function _updateValue() {
      if (this._hasValue) {
        var valuePatch = {
          content: this.value.toString(),
          style: {
            textStyle: ListItemSlider_objectSpread({}, this.style.valueTextStyle)
          },
          mountX: 1,
          x: this.w - this._paddingX
        };
        if (!this._Value) {
          valuePatch = ListItemSlider_objectSpread({
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_onTextBoxChanged'
            }
          }, valuePatch);
        }
        this._TextWrapper.patch({
          Value: valuePatch
        });
      } else {
        this._TextWrapper.patch({
          Value: undefined
        });
      }
    }
  }, {
    key: "_updateSliderPosition",
    value: function _updateSliderPosition() {
      var w = this.w - this._paddingLeft - this._paddingRight;
      var sliderProps = ListItemSlider_objectSpread(ListItemSlider_objectSpread({
        mode: this.mode,
        tone: this.tone,
        w: w,
        x: w / 2,
        visible: !this._collapse,
        alpha: this.style.alpha
      }, this.slider), {}, {
        value: this.value
      });
      this._Slider.patch(sliderProps);
    }
  }, {
    key: "_hasValue",
    get: function get() {
      return this.value != undefined || this.value != null;
    }
  }, {
    key: "_fixedWordWrapWidth",
    get: function get() {
      var titleWrapWidth = this.w - this._paddingLeft - this._paddingRight - this._paddingX;
      return titleWrapWidth;
    }
  }, {
    key: "_onSliderChanged",
    value: function _onSliderChanged(value, Slider) {
      if (value >= Slider.max) {
        this.value = Slider.max;
      } else if (value <= Slider.min) {
        this.value = Slider.min;
      } else {
        this.value = Slider.value;
      }
    }
  }, {
    key: "_handleLeft",
    value: function _handleLeft() {
      if (typeof this.onLeft === 'function') {
        return this.onLeft(this);
      } else if (this._Slider && !this._isDisabledMode) {
        return this._Slider._handleLeft();
      }
      return false;
    }
  }, {
    key: "_handleRight",
    value: function _handleRight() {
      if (typeof this.onRight === 'function') {
        return this.onRight(this);
      } else if (this._Slider && !this._isDisabledMode) {
        return this._Slider._handleRight();
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      return this.title + this.value + ', List Item Slider';
    },
    set: function set(announce) {
      _set(ListItemSlider_getPrototypeOf(ListItemSlider.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ListItemSlider';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ListItemSlider_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      var template = _get(ListItemSlider_getPrototypeOf(ListItemSlider), "_template", this);
      return ListItemSlider_objectSpread(ListItemSlider_objectSpread({}, template()), {}, {
        Content: ListItemSlider_objectSpread(ListItemSlider_objectSpread({}, template().Content), {}, {
          flex: {
            direction: 'column'
          },
          TextWrapper: ListItemSlider_objectSpread(ListItemSlider_objectSpread({}, template().Content.TextWrapper), {}, {
            mountY: 0,
            flex: undefined
          }),
          Slider: {
            type: NestedSlider,
            mountX: 0.5,
            signals: {
              onChange: '_onSliderChanged'
            }
          }
        })
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(ListItemSlider_getPrototypeOf(ListItemSlider), "properties", this)), ['slider', 'value']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'titlePadding',
        curr: 'contentSpacing'
      }];
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(ListItemSlider_getPrototypeOf(ListItemSlider), "tags", this)), [{
        name: 'Slider',
        path: 'Content.Slider'
      }, {
        name: 'Value',
        path: 'Content.TextWrapper.Value'
      }]);
    }
  }]);
  return ListItemSlider;
}(ListItem/* default */.Z);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.stories.js
var Slider_stories = __webpack_require__("../../@lightningjs/ui-components/src/components/Slider/Slider.stories.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItemSlider.stories.js
function ListItemSlider_stories_typeof(o) { "@babel/helpers - typeof"; return ListItemSlider_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ListItemSlider_stories_typeof(o); }
var _ListItemSlider$param, _ListItemSlider$param2;
function ListItemSlider_stories_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ListItemSlider_stories_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ListItemSlider_stories_ownKeys(Object(t), !0).forEach(function (r) { ListItemSlider_stories_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ListItemSlider_stories_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ListItemSlider_stories_defineProperty(obj, key, value) { key = ListItemSlider_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ListItemSlider_stories_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ListItemSlider_stories_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ListItemSlider_stories_toPropertyKey(descriptor.key), descriptor); } }
function ListItemSlider_stories_createClass(Constructor, protoProps, staticProps) { if (protoProps) ListItemSlider_stories_defineProperties(Constructor.prototype, protoProps); if (staticProps) ListItemSlider_stories_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ListItemSlider_stories_toPropertyKey(arg) { var key = ListItemSlider_stories_toPrimitive(arg, "string"); return ListItemSlider_stories_typeof(key) === "symbol" ? key : String(key); }
function ListItemSlider_stories_toPrimitive(input, hint) { if (ListItemSlider_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ListItemSlider_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ListItemSlider_stories_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ListItemSlider_stories_setPrototypeOf(subClass, superClass); }
function ListItemSlider_stories_setPrototypeOf(o, p) { ListItemSlider_stories_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ListItemSlider_stories_setPrototypeOf(o, p); }
function ListItemSlider_stories_createSuper(Derived) { var hasNativeReflectConstruct = ListItemSlider_stories_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ListItemSlider_stories_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ListItemSlider_stories_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ListItemSlider_stories_possibleConstructorReturn(this, result); }; }
function ListItemSlider_stories_possibleConstructorReturn(self, call) { if (call && (ListItemSlider_stories_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ListItemSlider_stories_assertThisInitialized(self); }
function ListItemSlider_stories_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ListItemSlider_stories_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ListItemSlider_stories_getPrototypeOf(o) { ListItemSlider_stories_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ListItemSlider_stories_getPrototypeOf(o); }
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ListItemSliderComponent } from './ListItemSlider';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { Basic as SliderStory } from '../Slider/Slider.stories';\n\nexport default {\n  title: 'Components/ListItem/ListItemSlider'\n};\n\nexport const ListItemSlider = () =>\n  class ListItemSlider extends lng.Component {\n    static _template() {\n      return {\n        ListItemSlider: {\n          type: ListItemSliderComponent\n        }\n      };\n    }\n  };\n\nListItemSlider.storyName = 'ListItemSlider';\n\nListItemSlider.args = {\n  title: 'List Item',\n  value: 50,\n  shouldCollapse: false,\n  mode: 'focused'\n};\n\nListItemSlider.argTypes = {\n  ...createModeControl({ summaryValue: ListItemSlider.args.mode }),\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  value: {\n    control: 'number',\n    description: 'Current slider value',\n    table: {\n      defaultValue: { summary: 'undefined' }\n    }\n  },\n  shouldCollapse: {\n    control: 'boolean',\n    description:\n      'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the slider (when focused, it will always be expanded)',\n    table: {\n      defaultValue: { summary: false }\n    }\n  }\n};\n\nListItemSlider.argActions = {\n  shouldCollapse: (shouldCollapse, component) => {\n    component.tag('ListItemSlider').shouldCollapse = shouldCollapse;\n  }\n};\n\ngenerateSubStory({\n  componentName: 'ListItemSlider',\n  baseStory: ListItemSlider,\n  subStory: SliderStory,\n  targetProperty: 'slider',\n  include: ['min', 'max', 'step']\n});\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "ListItemSlider": {
    "startLoc": {
      "col": 30,
      "line": 26
    },
    "endLoc": {
      "col": 1,
      "line": 34
    },
    "startBody": {
      "col": 30,
      "line": 26
    },
    "endBody": {
      "col": 1,
      "line": 34
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





/* harmony default export */ const ListItemSlider_stories = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as ListItemSliderComponent } from './ListItemSlider';\nimport { createModeControl, generateSubStory } from '../../docs/utils';\nimport { Basic as SliderStory } from '../Slider/Slider.stories';\nexport default {\n  title: 'Components/ListItem/ListItemSlider'\n};\nexport const ListItemSlider = () => class ListItemSlider extends lng.Component {\n  static _template() {\n    return {\n      ListItemSlider: {\n        type: ListItemSliderComponent\n      }\n    };\n  }\n};\nListItemSlider.storyName = 'ListItemSlider';\nListItemSlider.args = {\n  title: 'List Item',\n  value: 50,\n  shouldCollapse: false,\n  mode: 'focused'\n};\nListItemSlider.argTypes = {\n  ...createModeControl({\n    summaryValue: ListItemSlider.args.mode\n  }),\n  title: {\n    control: 'text',\n    description: 'Title text',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  value: {\n    control: 'number',\n    description: 'Current slider value',\n    table: {\n      defaultValue: {\n        summary: 'undefined'\n      }\n    }\n  },\n  shouldCollapse: {\n    control: 'boolean',\n    description: 'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the slider (when focused, it will always be expanded)',\n    table: {\n      defaultValue: {\n        summary: false\n      }\n    }\n  }\n};\nListItemSlider.argActions = {\n  shouldCollapse: (shouldCollapse, component) => {\n    component.tag('ListItemSlider').shouldCollapse = shouldCollapse;\n  }\n};\ngenerateSubStory({\n  componentName: 'ListItemSlider',\n  baseStory: ListItemSlider,\n  subStory: SliderStory,\n  targetProperty: 'slider',\n  include: ['min', 'max', 'step']\n});\nListItemSlider.parameters = {\n  ...ListItemSlider.parameters,\n  docs: {\n    ...ListItemSlider.parameters?.docs,\n    source: {\n      originalSource: \"() => class ListItemSlider extends lng.Component {\\n  static _template() {\\n    return {\\n      ListItemSlider: {\\n        type: ListItemSliderComponent\\n      }\\n    };\\n  }\\n}\",\n      ...ListItemSlider.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "list-item-slider": {
          "startLoc": {
            "col": 30,
            "line": 26
          },
          "endLoc": {
            "col": 1,
            "line": 34
          },
          "startBody": {
            "col": 30,
            "line": 26
          },
          "endBody": {
            "col": 1,
            "line": 34
          }
        }
      }
    }
  },
  title: 'Components/ListItem/ListItemSlider'
});
var ListItemSlider = function ListItemSlider() {
  return /*#__PURE__*/function (_lng$Component) {
    ListItemSlider_stories_inherits(ListItemSlider, _lng$Component);
    var _super = ListItemSlider_stories_createSuper(ListItemSlider);
    function ListItemSlider() {
      ListItemSlider_stories_classCallCheck(this, ListItemSlider);
      return _super.apply(this, arguments);
    }
    ListItemSlider_stories_createClass(ListItemSlider, null, [{
      key: "_template",
      value: function _template() {
        return {
          ListItemSlider: {
            type: ListItemSlider_ListItemSlider
          }
        };
      }
    }]);
    return ListItemSlider;
  }(lightning_esm/* default */.Z.Component);
};
ListItemSlider.storyName = 'ListItemSlider';
ListItemSlider.args = {
  title: 'List Item',
  value: 50,
  shouldCollapse: false,
  mode: 'focused'
};
ListItemSlider.argTypes = ListItemSlider_stories_objectSpread(ListItemSlider_stories_objectSpread({}, (0,utils/* createModeControl */.Ys)({
  summaryValue: ListItemSlider.args.mode
})), {}, {
  title: {
    control: 'text',
    description: 'Title text',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  value: {
    control: 'number',
    description: 'Current slider value',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  shouldCollapse: {
    control: 'boolean',
    description: 'When in unfocused or disabled mode, if shouldCollapse property is true it will collapse the slider (when focused, it will always be expanded)',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});
ListItemSlider.argActions = {
  shouldCollapse: function shouldCollapse(_shouldCollapse, component) {
    component.tag('ListItemSlider').shouldCollapse = _shouldCollapse;
  }
};
(0,utils/* generateSubStory */.p9)({
  componentName: 'ListItemSlider',
  baseStory: ListItemSlider,
  subStory: Slider_stories.Basic,
  targetProperty: 'slider',
  include: ['min', 'max', 'step']
});
ListItemSlider.parameters = ListItemSlider_stories_objectSpread(ListItemSlider_stories_objectSpread({}, ListItemSlider.parameters), {}, {
  docs: ListItemSlider_stories_objectSpread(ListItemSlider_stories_objectSpread({}, (_ListItemSlider$param = ListItemSlider.parameters) === null || _ListItemSlider$param === void 0 ? void 0 : _ListItemSlider$param.docs), {}, {
    source: ListItemSlider_stories_objectSpread({
      originalSource: "() => class ListItemSlider extends lng.Component {\n  static _template() {\n    return {\n      ListItemSlider: {\n        type: ListItemSliderComponent\n      }\n    };\n  }\n}"
    }, (_ListItemSlider$param2 = ListItemSlider.parameters) === null || _ListItemSlider$param2 === void 0 || (_ListItemSlider$param2 = _ListItemSlider$param2.docs) === null || _ListItemSlider$param2 === void 0 ? void 0 : _ListItemSlider$param2.source)
  })
});
var __namedExportsOrder = ["ListItemSlider"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/ListItem/ListItem.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ ListItem)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.styles.js
var ListItem_styles_namespaceObject = {};
__webpack_require__.r(ListItem_styles_namespaceObject);
__webpack_require__.d(ListItem_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.styles.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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


var base = function base(theme) {
  return {
    alpha: theme.alpha.primary,
    descriptionTextStyle: _objectSpread(_objectSpread({}, theme.typography.body3), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutralSecondary
    }),
    height: theme.spacer.xxl * 3,
    logoStyle: {
      width: theme.spacer.xxl * 2,
      height: theme.spacer.xxl * 2,
      radius: theme.radius.sm
    },
    paddingX: theme.spacer.xl,
    contentSpacing: theme.spacer.lg,
    titleTextStyle: _objectSpread(_objectSpread({}, theme.typography.headline3), {}, {
      maxLines: 1,
      textColor: theme.color.textNeutral
    }),
    width: utils/* default.getWidthByColumnSpan */.ZP.getWidthByColumnSpan(theme, 3)
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive,
      descriptionTextStyle: {
        textColor: theme.color.textNeutralDisabled
      },
      titleTextStyle: {
        textColor: theme.color.textNeutralDisabled
      }
    },
    focused: {
      descriptionTextStyle: {
        textColor: theme.color.textInverseSecondary
      },
      titleTextStyle: {
        textColor: theme.color.textInverse
      }
    }
  };
};
var tone = function tone(theme) {
  return {
    inverse: {
      mode: {
        focused: {
          descriptionTextStyle: {
            textColor: theme.color.textNeutral
          },
          titleTextStyle: {
            textColor: theme.color.textNeutral
          }
        }
      }
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Button/Button.js + 1 modules
var Button = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Icon/Icon.js + 1 modules
var Icon = __webpack_require__("../../@lightningjs/ui-components/src/components/Icon/Icon.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ListItem/ListItem.js
function ListItem_typeof(o) { "@babel/helpers - typeof"; return ListItem_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, ListItem_typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ListItem_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function ListItem_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ListItem_ownKeys(Object(t), !0).forEach(function (r) { ListItem_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ListItem_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ListItem_toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { ListItem_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function ListItem_defineProperty(obj, key, value) { key = ListItem_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ListItem_toPropertyKey(arg) { var key = ListItem_toPrimitive(arg, "string"); return ListItem_typeof(key) === "symbol" ? key : String(key); }
function ListItem_toPrimitive(input, hint) { if (ListItem_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ListItem_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (ListItem_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
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





var ListItem = /*#__PURE__*/function (_Button) {
  _inherits(ListItem, _Button);
  var _super = _createSuper(ListItem);
  function ListItem() {
    _classCallCheck(this, ListItem);
    return _super.apply(this, arguments);
  }
  _createClass(ListItem, [{
    key: "_onTextBoxChanged",
    value: function _onTextBoxChanged() {
      this._updateTitle();
      this._updateDescription();
      this._updateTruncation();
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updatePrefixLogo();
      this._updateSuffixLogo();
      _get(_getPrototypeOf(ListItem.prototype), "_update", this).call(this);
      this._updateDescription();
    }
  }, {
    key: "_updateTitle",
    value: function _updateTitle() {
      this._TextWrapper.patch({
        Title: {
          content: this.title,
          style: {
            textStyle: this.style.titleTextStyle
          }
        }
      });
    }
  }, {
    key: "_updateDescription",
    value: function _updateDescription() {
      if (this._hasDescription) {
        var descriptionPatch = {
          content: this.description,
          style: {
            textStyle: ListItem_objectSpread(ListItem_objectSpread({}, this.style.descriptionTextStyle), {}, {
              wordWrap: true,
              wordWrapWidth: this._fixedWordWrapWidth
            })
          },
          visible: !this._collapse
        };
        if (!this._Description) {
          descriptionPatch = ListItem_objectSpread({
            type: TextBox/* default */.Z,
            signals: {
              textBoxChanged: '_onTextBoxChanged'
            }
          }, descriptionPatch);
        }
        this._TextWrapper.patch({
          Description: descriptionPatch
        });
      } else {
        this._TextWrapper.patch({
          Description: undefined
        });
      }
    }
  }, {
    key: "_updateTruncation",
    value: function _updateTruncation() {
      if (this._Title) {
        this._Title.patch({
          style: {
            textStyle: ListItem_objectSpread(ListItem_objectSpread({}, this.style.titleTextStyle), {}, {
              wordWrap: this.fixed,
              wordWrapWidth: this.fixed ? this._fixedWordWrapWidth : 0
            })
          }
        });
      }
    }
  }, {
    key: "_updatePrefixLogo",
    value: function _updatePrefixLogo() {
      if (this._hasPrefixLogo) {
        this._prefix = this._addLogoProps(this._prefixLogo);
      }
    }
  }, {
    key: "_updateSuffixLogo",
    value: function _updateSuffixLogo() {
      if (this._hasSuffixLogo) {
        this._suffix = this._addLogoProps(this._suffixLogo);
      }
    }
  }, {
    key: "_addLogoProps",
    value: function _addLogoProps(icon) {
      return {
        type: Icon/* default */.Z,
        icon: icon,
        style: ListItem_objectSpread({
          color: undefined
        }, this.style.logoStyle)
      };
    }
  }, {
    key: "_hasPrefixLogo",
    get: function get() {
      return this.prefixLogo;
    }
  }, {
    key: "_hasSuffixLogo",
    get: function get() {
      return this.suffixLogo;
    }
  }, {
    key: "_rowProps",
    get: function get() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem.prototype), "_rowProps", this)), {}, {
        autoResizeHeight: true
      });
    }
  }, {
    key: "_buttonProps",
    get: function get() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem.prototype), "_buttonProps", this)), {}, {
        alpha: this.style.alpha
      });
    }
  }, {
    key: "_hasDescription",
    get: function get() {
      return !!this.description;
    }
  }, {
    key: "_suffixX",
    get: function get() {
      return this.w - this._paddingRight - this._suffixW - this.style.paddingX;
    }
  }, {
    key: "_collapse",
    get: function get() {
      return this.shouldCollapse && !this._isFocusedMode;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce) {
        return this._announce;
      }
      return this.title + this.description + ', List Item';
    },
    set: function set(announce) {
      _set(_getPrototypeOf(ListItem.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'ListItem';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ListItem_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      return ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem), "_template", this).call(this)), {}, {
        justify: 'left',
        fixed: true,
        Content: ListItem_objectSpread(ListItem_objectSpread({}, _get(_getPrototypeOf(ListItem), "_template", this).call(this).Content), {}, {
          TextWrapper: {
            mountY: 0.5,
            flex: {
              direction: 'column'
            },
            Title: {
              type: TextBox/* default */.Z,
              signals: {
                textBoxChanged: '_onTextBoxChanged'
              }
            }
          }
        })
      });
    }
  }, {
    key: "properties",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "properties", this)), ['description', 'prefixLogo', 'suffixLogo', 'shouldCollapse']);
    }
  }, {
    key: "aliasStyles",
    get: function get() {
      return [{
        prev: 'titlePadding',
        curr: 'contentSpacing'
      }];
    }
  }, {
    key: "tags",
    get: function get() {
      return [].concat(_toConsumableArray(_get(_getPrototypeOf(ListItem), "tags", this)), [{
        name: 'Description',
        path: 'Content.TextWrapper.Description'
      }]);
    }
  }]);
  return ListItem;
}(Button/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=8078.4df06695.iframe.bundle.js.map