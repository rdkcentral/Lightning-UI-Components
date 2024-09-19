"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[8232],{

/***/ "../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProgressBar)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.styles.js
var ProgressBar_styles_namespaceObject = {};
__webpack_require__.r(ProgressBar_styles_namespaceObject);
__webpack_require__.d(ProgressBar_styles_namespaceObject, {
  base: () => (base),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.styles.js
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
    height: theme.spacer.md,
    animation: theme.animation.utility,
    radius: theme.radius.xs
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      barColor: theme.color.fillNeutralTertiary,
      progressColor: theme.color.fillNeutral
    },
    inverse: {
      barColor: theme.color.fillInverseTertiary,
      progressColor: theme.color.fillInverse
    },
    brand: {
      barColor: theme.color.fillNeutralTertiary,
      progressColor: theme.color.fillBrand
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/ProgressBar/ProgressBar.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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





var ProgressBar = /*#__PURE__*/function (_Base) {
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);
    return _callSuper(this, ProgressBar, arguments);
  }
  _inherits(ProgressBar, _Base);
  return _createClass(ProgressBar, [{
    key: "_construct",
    value: function _construct() {
      _superPropGet(ProgressBar, "_construct", this, 1) && _superPropGet(ProgressBar, "_construct", this, 3)([]);
      this._progress = 0;
    }
  }, {
    key: "_update",
    value: function _update() {
      this._updateTextures();
      this._updateProgress();
      if (this._progressChanged) {
        this.fireAncestors('$announce', this.announce);
        this._progressChanged = false;
      }
    }
  }, {
    key: "_updateTextures",
    value: function _updateTextures() {
      var w = this._getProgressWidth();
      var radius = (0,utils/* getMaxRoundRadius */.XG)(this.style.radius, this.w - 2, this.h);
      this._Bar.texture = lightning_esm/* default */.A.Tools.getRoundRect(
      // getRoundRect adds 2 to the width
      this.w - 2, this.h, radius, 0, 0, true, this.style.barColor);
      this._Progress.texture = lightning_esm/* default */.A.Tools.getRoundRect(w + 1, this.h, radius, 0, 0, true, this.style.progressColor);
    }
  }, {
    key: "_updateProgress",
    value: function _updateProgress() {
      var w = this._getProgressWidth();
      this._Progress.smooth = {
        w: [w, this.style.animation],
        alpha: Number(w > 0)
      };
    }
  }, {
    key: "_setProgress",
    value: function _setProgress(progress) {
      this._progressChanged = progress !== this._progress;
      return progress;
    }
  }, {
    key: "announce",
    get: function get() {
      if (this._announce !== undefined && this._announce !== null) {
        return this._announce;
      }
      var progress = this.progress;
      if (progress > 1) {
        progress = 1;
      } else if (progress < 0) {
        progress = 0;
      }
      return "".concat(Math.round(progress * 100), "%");
    },
    set: function set(announce) {
      _superPropSet(ProgressBar, "announce", announce, this, 1, 1);
    }
  }, {
    key: "_getProgressWidth",
    value: function _getProgressWidth() {
      var p = this.w * this._progress;
      var w = p <= 0 ? 0 : Math.min(p, this.w);
      return w;
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Bar: {
          zIndex: 1
        },
        Progress: {
          alpha: 0,
          zIndex: 2
        }
      };
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return ProgressBar_styles_namespaceObject;
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'ProgressBar';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['progress'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Bar', 'Progress'];
    }
  }]);
}(Base/* default */.A);


/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Slider/SliderLarge.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Basic: () => (/* binding */ Basic),
  SignalHandlingLarge: () => (/* binding */ SignalHandlingLarge),
  __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ SliderLarge_stories)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.styles.js
var SliderLarge_styles_namespaceObject = {};
__webpack_require__.r(SliderLarge_styles_namespaceObject);
__webpack_require__.d(SliderLarge_styles_namespaceObject, {
  base: () => (base)
});

// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Slider/Slider.js + 1 modules
var Slider = __webpack_require__("../../@lightningjs/ui-components/src/components/Slider/Slider.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.styles.js
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
  var size = theme.spacer.xxl;
  return {
    width: size,
    height: size,
    radius: size / 2
  };
};
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.js
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



var SliderLarge = /*#__PURE__*/function (_Slider) {
  function SliderLarge() {
    _classCallCheck(this, SliderLarge);
    return _callSuper(this, SliderLarge, arguments);
  }
  _inherits(SliderLarge, _Slider);
  return _createClass(SliderLarge, null, [{
    key: "__componentName",
    get: function get() {
      return 'SliderLarge';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return SliderLarge_styles_namespaceObject;
    }
  }]);
}(Slider/* default */.A);

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/docs/utils.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/TextBox/TextBox.js + 1 modules
var TextBox = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Slider/SliderLarge.stories.js
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





// TODO: Re-implement after figuring out how to in Storybook 8; worked in 7.
// import { useArgs } from '@storybook/manager-api';

/* harmony default export */ const SliderLarge_stories = ({
  title: 'Components/Slider/SliderLarge'
});
const Basic = () => {
  // const [{ value }, updateArgs] = useArgs();
  return class Basic extends lightning_esm/* default */.A.Component {
    static _template() {
      return {
        Slider: {
          type: SliderLarge
          // value: value,
          // signals: {
          //   onChange: true
          // }
        }
      };
    }
    // update arg control when value changes
    // onChange(value) {
    //   updateArgs({ value });
    // }
  };
};
Basic.args = {
  min: 0,
  max: 100,
  value: 50,
  step: 1,
  vertical: false,
  mode: 'focused'
};
Basic.argTypes = {
  ...(0,utils/* createModeControl */.Pg)({
    summaryValue: 'focused'
  }),
  min: {
    control: 'number',
    description: 'Lower bound of value',
    table: {
      defaultValue: {
        summary: 0
      }
    }
  },
  max: {
    control: 'number',
    description: 'Upper bound of value',
    table: {
      defaultValue: {
        summary: 100
      }
    }
  },
  value: {
    control: 'number',
    description: 'Current value',
    table: {
      defaultValue: {
        summary: '0 or min'
      }
    }
  },
  step: {
    control: 'number',
    description: '+/- value on change',
    table: {
      defaultValue: {
        summary: 1
      }
    }
  },
  vertical: {
    control: 'boolean',
    description: 'If true, the slider is displayed vertically',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
const SignalHandlingLarge = () => class SignalHandling extends lightning_esm/* default */.A.Component {
  static _template() {
    return {
      flex: {
        direction: 'column'
      },
      Slider: {
        type: SliderLarge,
        y: 20,
        step: 10,
        value: 30,
        w: 328,
        signals: {
          onChange: true
        }
      },
      Text: {
        y: 60,
        type: TextBox/* default */.A
      }
    };
  }
  onChange(value) {
    this.tag('Text').content = `Value: ${value}`;
  }
};
SignalHandlingLarge.args = {
  mode: 'focused'
};
SignalHandlingLarge.argTypes = (0,utils/* createModeControl */.Pg)({
  summaryValue: 'focused'
});
SignalHandlingLarge.parameters = {
  storyDetails: 'When the onChange signal is emitted from the Slider the number in the TextBox is updated with the Slider value.'
};
;
const __namedExportsOrder = ["Basic", "SignalHandlingLarge"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => {\n  // const [{ value }, updateArgs] = useArgs();\n  return class Basic extends lng.Component {\n    static _template() {\n      return {\n        Slider: {\n          type: Slider\n          // value: value,\n          // signals: {\n          //   onChange: true\n          // }\n        }\n      };\n    }\n    // update arg control when value changes\n    // onChange(value) {\n    //   updateArgs({ value });\n    // }\n  };\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
SignalHandlingLarge.parameters = {
  ...SignalHandlingLarge.parameters,
  docs: {
    ...SignalHandlingLarge.parameters?.docs,
    source: {
      originalSource: "() => class SignalHandling extends lng.Component {\n  static _template() {\n    return {\n      flex: {\n        direction: 'column'\n      },\n      Slider: {\n        type: Slider,\n        y: 20,\n        step: 10,\n        value: 30,\n        w: 328,\n        signals: {\n          onChange: true\n        }\n      },\n      Text: {\n        y: 60,\n        type: TextBox\n      }\n    };\n  }\n  onChange(value) {\n    this.tag('Text').content = `Value: ${value}`;\n  }\n}",
      ...SignalHandlingLarge.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-Slider-SliderLarge-stories.1e173ab1.iframe.bundle.js.map