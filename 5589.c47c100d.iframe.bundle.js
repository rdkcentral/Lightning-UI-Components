"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[5589],{

/***/ "../../@lightningjs/ui-components/src/components/Radio/Radio.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Radio: () => (/* binding */ Radio),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Radio/Radio.js");
/* harmony import */ var _docs_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/docs/utils.js");
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _inherits(subClass, superClass) {
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
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
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as RadioComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Radio/Radio'\n};\n\nexport const Radio = () =>\n  class Radio extends lng.Component {\n    static _template() {\n      return {\n        Radio: {\n          type: RadioComponent\n        }\n      };\n    }\n  };\nRadio.args = { checked: false, mode: 'unfocused' };\nRadio.argTypes = {\n  ...createModeControl({ summaryValue: 'unfocused' }),\n  checked: {\n    control: 'boolean',\n    description: 'Toggles checked between on and off',\n    table: { defaultValue: { summary: false } }\n  }\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "Radio": {
    "startLoc": {
      "col": 21,
      "line": 27
    },
    "endLoc": {
      "col": 3,
      "line": 36
    },
    "startBody": {
      "col": 21,
      "line": 27
    },
    "endBody": {
      "col": 3,
      "line": 36
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




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  parameters: {
    "storySource": {
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport { default as RadioComponent } from '.';\nimport { createModeControl } from '../../docs/utils';\n\nexport default {\n  title: 'Components/Radio/Radio'\n};\n\nexport const Radio = () =>\n  class Radio extends lng.Component {\n    static _template() {\n      return {\n        Radio: {\n          type: RadioComponent\n        }\n      };\n    }\n  };\nRadio.args = { checked: false, mode: 'unfocused' };\nRadio.argTypes = {\n  ...createModeControl({ summaryValue: 'unfocused' }),\n  checked: {\n    control: 'boolean',\n    description: 'Toggles checked between on and off',\n    table: { defaultValue: { summary: false } }\n  }\n};\n",
      "locationsMap": {
        "radio": {
          "startLoc": {
            "col": 21,
            "line": 27
          },
          "endLoc": {
            "col": 3,
            "line": 36
          },
          "startBody": {
            "col": 21,
            "line": 27
          },
          "endBody": {
            "col": 3,
            "line": 36
          }
        }
      }
    }
  },
  title: 'Components/Radio/Radio'
});
var Radio = function Radio() {
  return /*#__PURE__*/function (_lng$Component) {
    _inherits(Radio, _lng$Component);
    var _super = _createSuper(Radio);
    function Radio() {
      _classCallCheck(this, Radio);
      return _super.apply(this, arguments);
    }
    _createClass(Radio, null, [{
      key: "_template",
      value: function _template() {
        return {
          Radio: {
            type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
          }
        };
      }
    }]);
    return Radio;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
};
Radio.args = {
  checked: false,
  mode: 'unfocused'
};
Radio.argTypes = _objectSpread(_objectSpread({}, (0,_docs_utils__WEBPACK_IMPORTED_MODULE_2__/* .createModeControl */ .Ys)({
  summaryValue: 'unfocused'
})), {}, {
  checked: {
    control: 'boolean',
    description: 'Toggles checked between on and off',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
});
Radio.parameters = {
  ...Radio.parameters,
  docs: {
    ...Radio.parameters?.docs,
    source: {
      originalSource: "() => class Radio extends lng.Component {\n  static _template() {\n    return {\n      Radio: {\n        type: RadioComponent\n      }\n    };\n  }\n}",
      ...Radio.parameters?.docs?.source
    }
  }
};;const __namedExportsOrder = ["Radio"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/components/Radio/Radio.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Radio)
});

// NAMESPACE OBJECT: ../../@lightningjs/ui-components/src/components/Radio/Radio.styles.js
var Radio_styles_namespaceObject = {};
__webpack_require__.r(Radio_styles_namespaceObject);
__webpack_require__.d(Radio_styles_namespaceObject, {
  base: () => (base),
  mode: () => (mode),
  tone: () => (tone)
});

// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/components/Base/Base.js + 2 modules
var Base = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
// EXTERNAL MODULE: ../../../node_modules/@lightningjs/core/dist/lightning.esm.js
var lightning_esm = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.styles.js
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
    alpha: theme.alpha.primary,
    width: size,
    height: size,
    knobHeight: size / 2,
    knobWidth: size / 2,
    radius: size / 2,
    strokeWidth: theme.stroke.sm
  };
};
var tone = function tone(theme) {
  return {
    neutral: {
      backgroundColor: theme.color.fillInverseSecondary,
      backgroundColorChecked: theme.color.fillNeutral,
      knobColor: theme.color.fillInverse,
      strokeColor: theme.color.strokeNeutralSecondary
    },
    inverse: {
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillInverse,
      knobColor: theme.color.fillNeutral,
      strokeColor: theme.color.strokeInverseSecondary
    },
    brand: {
      backgroundColor: theme.color.fillNeutralSecondary,
      backgroundColorChecked: theme.color.fillBrand,
      knobColor: theme.color.fillInverse,
      strokeColor: theme.color.strokeNeutralSecondary
    }
  };
};
var mode = function mode(theme) {
  return {
    disabled: {
      alpha: theme.alpha.inactive
    }
  };
};
// EXTERNAL MODULE: ../../@lightningjs/ui-components/src/utils/index.js
var utils = __webpack_require__("../../@lightningjs/ui-components/src/utils/index.js");
;// CONCATENATED MODULE: ../../@lightningjs/ui-components/src/components/Radio/Radio.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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





var Radio = /*#__PURE__*/function (_Base) {
  _inherits(Radio, _Base);
  var _super = _createSuper(Radio);
  function Radio() {
    _classCallCheck(this, Radio);
    return _super.apply(this, arguments);
  }
  _createClass(Radio, [{
    key: "_update",
    value: function _update() {
      this._updateBody();
      this._updateStroke();
      this._updateKnob();
      if (this._checkedChanged) {
        this.fireAncestors('$announce', this.announce);
        this._checkedChanged = false;
      }
      this._updateOpacity();
    }
  }, {
    key: "_updateBody",
    value: function _updateBody() {
      var bodyColor = this.checked ? this.style.backgroundColorChecked : this.style.backgroundColor;
      var width = this.w - this.style.strokeWidth * 2 - 2;
      var height = this.h - this.style.strokeWidth * 2 - 2;
      this._Body.patch({
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(
        // Compensating for the extra 2 pixels getRoundRect adds
        width, height, (0,utils/* getMaxRoundRadius */.JS)(this.style.radius, width, height, this.style.strokeWidth * 2 - 2), null, null, true, bodyColor)
      });
    }
  }, {
    key: "_updateStroke",
    value: function _updateStroke() {
      this._Stroke.patch({
        // Compensating for the extra 2 pixels getRoundRect adds
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.w - 2, this.h - 2, (0,utils/* getMaxRoundRadius */.JS)(this.style.radius, this.w, this.h), this.style.strokeWidth, this.style.strokeColor, false)
      });
    }
  }, {
    key: "_updateKnob",
    value: function _updateKnob() {
      this._Knob.patch({
        texture: lightning_esm/* default */.Z.Tools.getRoundRect(this.style.knobWidth, this.style.knobHeight, this.style.knobWidth / 2, null, null, true, this.style.knobColor)
      });
      this.applySmooth(this._Knob, {
        alpha: this.checked ? 1 : 0
      });
    }
  }, {
    key: "_updateOpacity",
    value: function _updateOpacity() {
      this.applySmooth(this, {
        alpha: this.style.alpha
      });
    }
  }, {
    key: "_setChecked",
    value: function _setChecked(checked) {
      this._checkedChanged = checked !== this._checked;
      return checked;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (!this._isDisabledMode) {
        this.checked = !this.checked;
      }
      return this;
    }
  }, {
    key: "_handleEnter",
    value: function _handleEnter() {
      if (typeof this.onEnter === 'function') {
        return this.onEnter(this);
      } else {
        this.toggle();
      }
      return false;
    }
  }, {
    key: "announce",
    get: function get() {
      return this._announce || (this.checked ? 'Checked' : 'Unchecked');
    },
    set: function set(announce) {
      _set(_getPrototypeOf(Radio.prototype), "announce", announce, this, true);
    }
  }], [{
    key: "__componentName",
    get: function get() {
      return 'Radio';
    }
  }, {
    key: "__themeStyle",
    get: function get() {
      return Radio_styles_namespaceObject;
    }
  }, {
    key: "_template",
    value: function _template() {
      var center = {
        mount: 0.5,
        x: function x(w) {
          return w / 2;
        },
        y: function y(h) {
          return h / 2;
        }
      };
      return {
        Body: _objectSpread(_objectSpread({
          rtt: true
        }, center), {}, {
          Knob: _objectSpread(_objectSpread({}, center), {}, {
            alpha: 0
          })
        }),
        Stroke: center
      };
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Knob', 'Body', 'Stroke'];
    }
  }, {
    key: "properties",
    get: function get() {
      return ['checked'];
    }
  }]);
  return Radio;
}(Base/* default */.Z);


/***/ })

}]);
//# sourceMappingURL=5589.c47c100d.iframe.bundle.js.map