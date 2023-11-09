"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4935],{

/***/ "../../@lightningjs/ui-components/src/docs/ThemingFoundations.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemingTokens: () => (/* binding */ ThemingTokens),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _globals_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
/* harmony import */ var _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _ThemingTokens$parame, _ThemingTokens$parame2;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
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
/* eslint-disable */
// @ts-nocheck
// @ts-expect-error (Converted from ts-ignore)
var __STORY__ = "﻿/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../globals/context';\nimport { Base, Column, TextBox, Tile, Button } from '../components';\nimport tileImage from '../assets/images/tile-image.png';\n\nexport default {\n  title: 'Collections/Theming Tokens'\n};\n\nclass Explanation extends Base {\n  static get __componentName() {\n    return 'Explanation';\n  }\n}\n\nclass Swatch extends Base {\n  static _template() {\n    const size = 24;\n    return {\n      rect: true,\n      w: size,\n      h: size,\n      texture: lng.Tools.getRoundRect(size, size, size / 2)\n    };\n  }\n\n  static get __componentName() {\n    return 'Swatch';\n  }\n\n  static get properties() {\n    return ['themeColor'];\n  }\n\n  _update() {\n    if (this.themeColor) {\n      this.color = context.theme.color[this.themeColor];\n    }\n  }\n}\n\nclass ColorInfo extends Base {\n  static _template() {\n    return {\n      h: 30,\n      Swatch: {\n        type: Swatch\n      },\n      Name: {\n        type: TextBox,\n        style: { textStyle: 'caption1' }\n      }\n    };\n  }\n\n  static get __componentName() {\n    return 'ColorInfo';\n  }\n\n  static get properties() {\n    return ['colorName'];\n  }\n\n  static get tags() {\n    return ['Swatch', 'Name'];\n  }\n\n  _init() {\n    this._Name.x = this._Swatch.w + 10;\n    super._init();\n  }\n\n  _update() {\n    if (this.colorName) {\n      this._Name.content = this.colorName;\n      this._Swatch.themeColor = this.colorName\n        .replace(/-[a-z]/g, match => match.toUpperCase())\n        .replace(/-/g, '');\n    }\n  }\n}\n\nclass Radius extends Base {\n  static _template() {\n    const size = 24;\n    return {\n      h: 25, // Base theme not updating on first load\n      Corner: { w: size, h: size },\n      Text: {\n        x: 34,\n        type: TextBox,\n        style: { textStyle: 'caption1' }\n      }\n    };\n  }\n\n  static get __componentName() {\n    return 'Radius';\n  }\n\n  static get properties() {\n    return ['radiusName'];\n  }\n\n  static get tags() {\n    return ['Text', 'Corner'];\n  }\n\n  _update() {\n    if (this.radiusName) {\n      const radius = context.theme.radius[this.radiusName];\n      this._Text.content = `${this.radiusName}: ${radius}`;\n      this._Corner.patch({\n        texture: lng.Tools.getRoundRect(\n          this._Corner.w,\n          this._Corner.h,\n          [radius, 0, 0, 0],\n          2,\n          false,\n          false,\n          false\n        )\n      });\n    }\n  }\n\n  $itemChanged() {\n    this.h = this._Text.h;\n    this.fireAncestors('$itemChanged');\n  }\n}\n\nclass MiscProp extends Base {\n  static _template() {\n    return {\n      Text: {\n        type: TextBox,\n        style: { textStyle: 'caption1' }\n      }\n    };\n  }\n\n  static get __componentName() {\n    return 'MiscProp';\n  }\n\n  static get properties() {\n    return ['propName', 'propPath'];\n  }\n\n  static get tags() {\n    return ['Text'];\n  }\n\n  _update() {\n    if (this.propName && this.propPath) {\n      if (typeof this.propPath === 'string') {\n        this._Text.content = `${this.propName}: ${\n          context.theme[this.propPath]\n        }`;\n      } else if (this.propPath.length) {\n        let val = context.theme;\n        for (let i = 0; i < this.propPath.length; i++) {\n          val = val[this.propPath[i]];\n        }\n        this._Text.content = `${this.propName}: ${val}`;\n      }\n    }\n    this.signal('miscLoaded');\n  }\n\n  $itemChanged() {\n    this.h = this._Text.h;\n    this.fireAncestors('$itemChanged');\n  }\n}\n\nexport const ThemingTokens = () => {\n  class Basic extends lng.Component {\n    static _template() {\n      const itemSpacing = 10;\n      return {\n        DummyElement: {\n          type: Explanation,\n          announce:\n            'Displays theming tokens and their values, which update on a theme change'\n        },\n        Typography: {\n          type: Column,\n          style: { itemSpacing },\n          Items: {\n            Display1: {\n              type: TextBox,\n              content: 'Display 1',\n              style: { textStyle: 'display1' }\n            },\n            Display2: {\n              type: TextBox,\n              content: 'Display 2',\n              style: { textStyle: 'display2' }\n            },\n            Headline1: {\n              type: TextBox,\n              content: 'Headline 1',\n              style: { textStyle: 'headline1' }\n            },\n            Headline2: {\n              type: TextBox,\n              content: 'Headline 2',\n              style: { textStyle: 'headline2' }\n            },\n            Headline3: {\n              type: TextBox,\n              content: 'Headline 3',\n              style: { textStyle: 'headline3' }\n            },\n            Body1: {\n              type: TextBox,\n              content: 'Body 1',\n              style: { textStyle: 'body1' }\n            },\n            Body2: {\n              type: TextBox,\n              content: 'Body 2',\n              style: { textStyle: 'body2' }\n            },\n            Body3: {\n              type: TextBox,\n              content: 'Body 3',\n              style: { textStyle: 'body3' }\n            },\n            Button1: {\n              type: TextBox,\n              content: 'Button 1',\n              style: { textStyle: 'button1' }\n            },\n            Button2: {\n              type: TextBox,\n              content: 'Button 2',\n              style: { textStyle: 'button2' }\n            },\n            Callout1: {\n              type: TextBox,\n              content: 'CALLOUT 1',\n              style: { textStyle: 'callout1' }\n            },\n            Caption: {\n              type: TextBox,\n              content: 'Caption 1',\n              style: { textStyle: 'caption1' }\n            }\n          }\n        },\n        Colors1: {\n          type: Column,\n          x: 450,\n          style: { itemSpacing },\n          Items: {\n            General: {\n              type: TextBox,\n              content: 'General',\n              style: { textStyle: 'callout1' }\n            },\n            White: {\n              type: ColorInfo,\n              colorName: 'white'\n            },\n            Grey: {\n              type: ColorInfo,\n              colorName: 'grey'\n            },\n            Black: {\n              type: ColorInfo,\n              colorName: 'black'\n            },\n            Red: {\n              type: ColorInfo,\n              colorName: 'red'\n            },\n            Orange: {\n              type: ColorInfo,\n              colorName: 'orange'\n            },\n            Yellow: {\n              type: ColorInfo,\n              colorName: 'yellow'\n            },\n            Green: {\n              type: ColorInfo,\n              colorName: 'green'\n            },\n            Blue: {\n              type: ColorInfo,\n              colorName: 'blue'\n            },\n            Purple: {\n              type: ColorInfo,\n              colorName: 'purple'\n            },\n            Material: {\n              type: TextBox,\n              content: 'Material',\n              style: { textStyle: 'callout1' }\n            },\n            MaterialSwatch: {\n              type: ColorInfo,\n              colorName: 'material'\n            },\n            MaterialBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'material-brand'\n            },\n            Overlay: {\n              type: ColorInfo,\n              colorName: 'overlay'\n            },\n            Shadow: {\n              type: TextBox,\n              content: 'Shadow',\n              style: { textStyle: 'callout1' }\n            },\n            ShadowNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus'\n            },\n            ShadowNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus-soft'\n            },\n            ShadowInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus'\n            },\n            ShadowInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus-soft'\n            },\n            ShadowBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus'\n            },\n            ShadowBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus-soft'\n            }\n          }\n        },\n        Colors2: {\n          type: Column,\n          x: 800,\n          style: { itemSpacing },\n          Items: {\n            Text: {\n              type: TextBox,\n              content: 'Text',\n              style: { textStyle: 'callout1' }\n            },\n            TextNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral'\n            },\n            TextNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-secondary'\n            },\n            TextNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-tertiary'\n            },\n            TextNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-disabled'\n            },\n            TextInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse'\n            },\n            TextInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-secondary'\n            },\n            TextInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-tertiary'\n            },\n            TextInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-disabled'\n            },\n            Fill: {\n              type: TextBox,\n              content: 'Fill',\n              style: { textStyle: 'callout1' }\n            },\n            FillNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral'\n            },\n            FillNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-secondary'\n            },\n            FillNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-tertiary'\n            },\n            FillNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-disabled'\n            },\n            FillInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse'\n            },\n            FillInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-secondary'\n            },\n            FillInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-tertiary'\n            },\n            FillInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-disabled'\n            },\n            FillBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand'\n            },\n            FillBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-secondary'\n            },\n            FillBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-tertiary'\n            },\n            FillBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-disabled'\n            }\n          }\n        },\n        Colors3: {\n          type: Column,\n          x: 1150,\n          style: { itemSpacing },\n          Items: {\n            Stroke: {\n              type: TextBox,\n              content: 'Stroke',\n              style: { textStyle: 'callout1' }\n            },\n            StrokeNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral'\n            },\n            StrokeNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-secondary'\n            },\n            StrokeNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-tertiary'\n            },\n            StrokeNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-disabled'\n            },\n            StrokeInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse'\n            },\n            StrokeInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-secondary'\n            },\n            StrokeInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-tertiary'\n            },\n            StrokeInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-disabled'\n            },\n            StrokeBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand'\n            },\n            StrokeBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-secondary'\n            },\n            StrokeBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-tertiary'\n            },\n            StrokeBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-disabled'\n            },\n            Interactive: {\n              type: TextBox,\n              content: 'Interactive',\n              style: { textStyle: 'callout1' }\n            },\n            InteractiveNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus'\n            },\n            InteractiveNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus-soft'\n            },\n            InteractiveInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus'\n            },\n            InteractiveInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus-soft'\n            },\n            InteractiveBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus'\n            },\n            InteractiveBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus-soft'\n            }\n          }\n        },\n        Elements: {\n          type: Column,\n          x: 1500,\n          style: { itemSpacing },\n          Items: {\n            TileWithFocus: {\n              type: Tile,\n              itemLayout: { ratioX: 1, ratioY: 1, upCount: 6 },\n              artwork: { src: tileImage },\n              progressBar: { progress: 0.5 },\n              metadataLocation: 'inset',\n              metadata: { title: 'Example' },\n              // TODO: Fix metadata not displaying in focused mode w/ out persistentMetadata flag\n              // persistentMetadata: true,\n              extraItemSpacing: itemSpacing * 4,\n              mode: 'focused'\n            },\n            ButtonWithFocus: {\n              type: Button,\n              title: 'Example',\n              style: { minWidth: 0 },\n              extraItemSpacing: itemSpacing * 2,\n              mode: 'focused'\n            },\n            ButtonWithoutFocus: {\n              type: Button,\n              title: 'Example',\n              style: { minWidth: 0 }\n            },\n            Radius: {\n              type: TextBox,\n              content: 'Radius',\n              style: { textStyle: 'callout1' }\n            },\n            RadiusGrid: {\n              type: Column,\n              style: { itemSpacing },\n              w: 150,\n              autoResizeHeight: true,\n              extraItemSpacing: itemSpacing * 4,\n              Items: {\n                RadiusNone: {\n                  type: Radius,\n                  radiusName: 'none'\n                },\n                RadiusXSmall: {\n                  type: Radius,\n                  radiusName: 'xs'\n                },\n                RadiusSmall: {\n                  type: Radius,\n                  radiusName: 'sm'\n                },\n                RadiusMedium: {\n                  type: Radius,\n                  radiusName: 'md'\n                },\n                RadiusLarge: {\n                  type: Radius,\n                  radiusName: 'lg'\n                },\n                RadiusXLarge: {\n                  type: Radius,\n                  radiusName: 'xl'\n                }\n              }\n            },\n            Misc: {\n              type: TextBox,\n              content: 'Misc',\n              style: { textStyle: 'callout1' }\n            },\n            SpacingBase: {\n              type: MiscProp,\n              propName: 'spacing-base',\n              propPath: ['spacer', 'md'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            },\n            FocusScale: {\n              type: MiscProp,\n              propName: 'focus-scale',\n              propPath: ['layout', 'focusScale'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            }\n          }\n        }\n      };\n    }\n  }\n  return Basic;\n};\n";
// @ts-expect-error (Converted from ts-ignore)
var __LOCATIONS_MAP__ = {
  "ThemingTokens": {
    "startLoc": {
      "col": 29,
      "line": 169
    },
    "endLoc": {
      "col": 1,
      "line": 686
    },
    "startBody": {
      "col": 29,
      "line": 169
    },
    "endBody": {
      "col": 1,
      "line": 686
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
      "source": "/**\n * Copyright 2023 Comcast Cable Communications Management, LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n *\n * SPDX-License-Identifier: Apache-2.0\n */\n\nimport lng from '@lightningjs/core';\nimport context from '../globals/context';\nimport { Base, Column, TextBox, Tile, Button } from '../components';\nimport tileImage from '../assets/images/tile-image.png';\nexport default {\n  title: 'Collections/Theming Tokens'\n};\nclass Explanation extends Base {\n  static get __componentName() {\n    return 'Explanation';\n  }\n}\nclass Swatch extends Base {\n  static _template() {\n    const size = 24;\n    return {\n      rect: true,\n      w: size,\n      h: size,\n      texture: lng.Tools.getRoundRect(size, size, size / 2)\n    };\n  }\n  static get __componentName() {\n    return 'Swatch';\n  }\n  static get properties() {\n    return ['themeColor'];\n  }\n  _update() {\n    if (this.themeColor) {\n      this.color = context.theme.color[this.themeColor];\n    }\n  }\n}\nclass ColorInfo extends Base {\n  static _template() {\n    return {\n      h: 30,\n      Swatch: {\n        type: Swatch\n      },\n      Name: {\n        type: TextBox,\n        style: {\n          textStyle: 'caption1'\n        }\n      }\n    };\n  }\n  static get __componentName() {\n    return 'ColorInfo';\n  }\n  static get properties() {\n    return ['colorName'];\n  }\n  static get tags() {\n    return ['Swatch', 'Name'];\n  }\n  _init() {\n    this._Name.x = this._Swatch.w + 10;\n    super._init();\n  }\n  _update() {\n    if (this.colorName) {\n      this._Name.content = this.colorName;\n      this._Swatch.themeColor = this.colorName.replace(/-[a-z]/g, match => match.toUpperCase()).replace(/-/g, '');\n    }\n  }\n}\nclass Radius extends Base {\n  static _template() {\n    const size = 24;\n    return {\n      h: 25,\n      // Base theme not updating on first load\n      Corner: {\n        w: size,\n        h: size\n      },\n      Text: {\n        x: 34,\n        type: TextBox,\n        style: {\n          textStyle: 'caption1'\n        }\n      }\n    };\n  }\n  static get __componentName() {\n    return 'Radius';\n  }\n  static get properties() {\n    return ['radiusName'];\n  }\n  static get tags() {\n    return ['Text', 'Corner'];\n  }\n  _update() {\n    if (this.radiusName) {\n      const radius = context.theme.radius[this.radiusName];\n      this._Text.content = `${this.radiusName}: ${radius}`;\n      this._Corner.patch({\n        texture: lng.Tools.getRoundRect(this._Corner.w, this._Corner.h, [radius, 0, 0, 0], 2, false, false, false)\n      });\n    }\n  }\n  $itemChanged() {\n    this.h = this._Text.h;\n    this.fireAncestors('$itemChanged');\n  }\n}\nclass MiscProp extends Base {\n  static _template() {\n    return {\n      Text: {\n        type: TextBox,\n        style: {\n          textStyle: 'caption1'\n        }\n      }\n    };\n  }\n  static get __componentName() {\n    return 'MiscProp';\n  }\n  static get properties() {\n    return ['propName', 'propPath'];\n  }\n  static get tags() {\n    return ['Text'];\n  }\n  _update() {\n    if (this.propName && this.propPath) {\n      if (typeof this.propPath === 'string') {\n        this._Text.content = `${this.propName}: ${context.theme[this.propPath]}`;\n      } else if (this.propPath.length) {\n        let val = context.theme;\n        for (let i = 0; i < this.propPath.length; i++) {\n          val = val[this.propPath[i]];\n        }\n        this._Text.content = `${this.propName}: ${val}`;\n      }\n    }\n    this.signal('miscLoaded');\n  }\n  $itemChanged() {\n    this.h = this._Text.h;\n    this.fireAncestors('$itemChanged');\n  }\n}\nexport const ThemingTokens = () => {\n  class Basic extends lng.Component {\n    static _template() {\n      const itemSpacing = 10;\n      return {\n        DummyElement: {\n          type: Explanation,\n          announce: 'Displays theming tokens and their values, which update on a theme change'\n        },\n        Typography: {\n          type: Column,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Display1: {\n              type: TextBox,\n              content: 'Display 1',\n              style: {\n                textStyle: 'display1'\n              }\n            },\n            Display2: {\n              type: TextBox,\n              content: 'Display 2',\n              style: {\n                textStyle: 'display2'\n              }\n            },\n            Headline1: {\n              type: TextBox,\n              content: 'Headline 1',\n              style: {\n                textStyle: 'headline1'\n              }\n            },\n            Headline2: {\n              type: TextBox,\n              content: 'Headline 2',\n              style: {\n                textStyle: 'headline2'\n              }\n            },\n            Headline3: {\n              type: TextBox,\n              content: 'Headline 3',\n              style: {\n                textStyle: 'headline3'\n              }\n            },\n            Body1: {\n              type: TextBox,\n              content: 'Body 1',\n              style: {\n                textStyle: 'body1'\n              }\n            },\n            Body2: {\n              type: TextBox,\n              content: 'Body 2',\n              style: {\n                textStyle: 'body2'\n              }\n            },\n            Body3: {\n              type: TextBox,\n              content: 'Body 3',\n              style: {\n                textStyle: 'body3'\n              }\n            },\n            Button1: {\n              type: TextBox,\n              content: 'Button 1',\n              style: {\n                textStyle: 'button1'\n              }\n            },\n            Button2: {\n              type: TextBox,\n              content: 'Button 2',\n              style: {\n                textStyle: 'button2'\n              }\n            },\n            Callout1: {\n              type: TextBox,\n              content: 'CALLOUT 1',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            Caption: {\n              type: TextBox,\n              content: 'Caption 1',\n              style: {\n                textStyle: 'caption1'\n              }\n            }\n          }\n        },\n        Colors1: {\n          type: Column,\n          x: 450,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            General: {\n              type: TextBox,\n              content: 'General',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            White: {\n              type: ColorInfo,\n              colorName: 'white'\n            },\n            Grey: {\n              type: ColorInfo,\n              colorName: 'grey'\n            },\n            Black: {\n              type: ColorInfo,\n              colorName: 'black'\n            },\n            Red: {\n              type: ColorInfo,\n              colorName: 'red'\n            },\n            Orange: {\n              type: ColorInfo,\n              colorName: 'orange'\n            },\n            Yellow: {\n              type: ColorInfo,\n              colorName: 'yellow'\n            },\n            Green: {\n              type: ColorInfo,\n              colorName: 'green'\n            },\n            Blue: {\n              type: ColorInfo,\n              colorName: 'blue'\n            },\n            Purple: {\n              type: ColorInfo,\n              colorName: 'purple'\n            },\n            Material: {\n              type: TextBox,\n              content: 'Material',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            MaterialSwatch: {\n              type: ColorInfo,\n              colorName: 'material'\n            },\n            MaterialBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'material-brand'\n            },\n            Overlay: {\n              type: ColorInfo,\n              colorName: 'overlay'\n            },\n            Shadow: {\n              type: TextBox,\n              content: 'Shadow',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            ShadowNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus'\n            },\n            ShadowNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus-soft'\n            },\n            ShadowInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus'\n            },\n            ShadowInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus-soft'\n            },\n            ShadowBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus'\n            },\n            ShadowBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus-soft'\n            }\n          }\n        },\n        Colors2: {\n          type: Column,\n          x: 800,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Text: {\n              type: TextBox,\n              content: 'Text',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            TextNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral'\n            },\n            TextNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-secondary'\n            },\n            TextNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-tertiary'\n            },\n            TextNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-disabled'\n            },\n            TextInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse'\n            },\n            TextInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-secondary'\n            },\n            TextInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-tertiary'\n            },\n            TextInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-disabled'\n            },\n            Fill: {\n              type: TextBox,\n              content: 'Fill',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            FillNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral'\n            },\n            FillNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-secondary'\n            },\n            FillNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-tertiary'\n            },\n            FillNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-disabled'\n            },\n            FillInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse'\n            },\n            FillInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-secondary'\n            },\n            FillInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-tertiary'\n            },\n            FillInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-disabled'\n            },\n            FillBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand'\n            },\n            FillBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-secondary'\n            },\n            FillBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-tertiary'\n            },\n            FillBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-disabled'\n            }\n          }\n        },\n        Colors3: {\n          type: Column,\n          x: 1150,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Stroke: {\n              type: TextBox,\n              content: 'Stroke',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            StrokeNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral'\n            },\n            StrokeNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-secondary'\n            },\n            StrokeNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-tertiary'\n            },\n            StrokeNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-disabled'\n            },\n            StrokeInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse'\n            },\n            StrokeInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-secondary'\n            },\n            StrokeInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-tertiary'\n            },\n            StrokeInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-disabled'\n            },\n            StrokeBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand'\n            },\n            StrokeBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-secondary'\n            },\n            StrokeBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-tertiary'\n            },\n            StrokeBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-disabled'\n            },\n            Interactive: {\n              type: TextBox,\n              content: 'Interactive',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            InteractiveNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus'\n            },\n            InteractiveNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus-soft'\n            },\n            InteractiveInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus'\n            },\n            InteractiveInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus-soft'\n            },\n            InteractiveBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus'\n            },\n            InteractiveBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus-soft'\n            }\n          }\n        },\n        Elements: {\n          type: Column,\n          x: 1500,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            TileWithFocus: {\n              type: Tile,\n              itemLayout: {\n                ratioX: 1,\n                ratioY: 1,\n                upCount: 6\n              },\n              artwork: {\n                src: tileImage\n              },\n              progressBar: {\n                progress: 0.5\n              },\n              metadataLocation: 'inset',\n              metadata: {\n                title: 'Example'\n              },\n              // TODO: Fix metadata not displaying in focused mode w/ out persistentMetadata flag\n              // persistentMetadata: true,\n              extraItemSpacing: itemSpacing * 4,\n              mode: 'focused'\n            },\n            ButtonWithFocus: {\n              type: Button,\n              title: 'Example',\n              style: {\n                minWidth: 0\n              },\n              extraItemSpacing: itemSpacing * 2,\n              mode: 'focused'\n            },\n            ButtonWithoutFocus: {\n              type: Button,\n              title: 'Example',\n              style: {\n                minWidth: 0\n              }\n            },\n            Radius: {\n              type: TextBox,\n              content: 'Radius',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            RadiusGrid: {\n              type: Column,\n              style: {\n                itemSpacing\n              },\n              w: 150,\n              autoResizeHeight: true,\n              extraItemSpacing: itemSpacing * 4,\n              Items: {\n                RadiusNone: {\n                  type: Radius,\n                  radiusName: 'none'\n                },\n                RadiusXSmall: {\n                  type: Radius,\n                  radiusName: 'xs'\n                },\n                RadiusSmall: {\n                  type: Radius,\n                  radiusName: 'sm'\n                },\n                RadiusMedium: {\n                  type: Radius,\n                  radiusName: 'md'\n                },\n                RadiusLarge: {\n                  type: Radius,\n                  radiusName: 'lg'\n                },\n                RadiusXLarge: {\n                  type: Radius,\n                  radiusName: 'xl'\n                }\n              }\n            },\n            Misc: {\n              type: TextBox,\n              content: 'Misc',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            SpacingBase: {\n              type: MiscProp,\n              propName: 'spacing-base',\n              propPath: ['spacer', 'md'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            },\n            FocusScale: {\n              type: MiscProp,\n              propName: 'focus-scale',\n              propPath: ['layout', 'focusScale'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            }\n          }\n        }\n      };\n    }\n  }\n  return Basic;\n};\nThemingTokens.parameters = {\n  ...ThemingTokens.parameters,\n  docs: {\n    ...ThemingTokens.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  class Basic extends lng.Component {\\n    static _template() {\\n      const itemSpacing = 10;\\n      return {\\n        DummyElement: {\\n          type: Explanation,\\n          announce: 'Displays theming tokens and their values, which update on a theme change'\\n        },\\n        Typography: {\\n          type: Column,\\n          style: {\\n            itemSpacing\\n          },\\n          Items: {\\n            Display1: {\\n              type: TextBox,\\n              content: 'Display 1',\\n              style: {\\n                textStyle: 'display1'\\n              }\\n            },\\n            Display2: {\\n              type: TextBox,\\n              content: 'Display 2',\\n              style: {\\n                textStyle: 'display2'\\n              }\\n            },\\n            Headline1: {\\n              type: TextBox,\\n              content: 'Headline 1',\\n              style: {\\n                textStyle: 'headline1'\\n              }\\n            },\\n            Headline2: {\\n              type: TextBox,\\n              content: 'Headline 2',\\n              style: {\\n                textStyle: 'headline2'\\n              }\\n            },\\n            Headline3: {\\n              type: TextBox,\\n              content: 'Headline 3',\\n              style: {\\n                textStyle: 'headline3'\\n              }\\n            },\\n            Body1: {\\n              type: TextBox,\\n              content: 'Body 1',\\n              style: {\\n                textStyle: 'body1'\\n              }\\n            },\\n            Body2: {\\n              type: TextBox,\\n              content: 'Body 2',\\n              style: {\\n                textStyle: 'body2'\\n              }\\n            },\\n            Body3: {\\n              type: TextBox,\\n              content: 'Body 3',\\n              style: {\\n                textStyle: 'body3'\\n              }\\n            },\\n            Button1: {\\n              type: TextBox,\\n              content: 'Button 1',\\n              style: {\\n                textStyle: 'button1'\\n              }\\n            },\\n            Button2: {\\n              type: TextBox,\\n              content: 'Button 2',\\n              style: {\\n                textStyle: 'button2'\\n              }\\n            },\\n            Callout1: {\\n              type: TextBox,\\n              content: 'CALLOUT 1',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            Caption: {\\n              type: TextBox,\\n              content: 'Caption 1',\\n              style: {\\n                textStyle: 'caption1'\\n              }\\n            }\\n          }\\n        },\\n        Colors1: {\\n          type: Column,\\n          x: 450,\\n          style: {\\n            itemSpacing\\n          },\\n          Items: {\\n            General: {\\n              type: TextBox,\\n              content: 'General',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            White: {\\n              type: ColorInfo,\\n              colorName: 'white'\\n            },\\n            Grey: {\\n              type: ColorInfo,\\n              colorName: 'grey'\\n            },\\n            Black: {\\n              type: ColorInfo,\\n              colorName: 'black'\\n            },\\n            Red: {\\n              type: ColorInfo,\\n              colorName: 'red'\\n            },\\n            Orange: {\\n              type: ColorInfo,\\n              colorName: 'orange'\\n            },\\n            Yellow: {\\n              type: ColorInfo,\\n              colorName: 'yellow'\\n            },\\n            Green: {\\n              type: ColorInfo,\\n              colorName: 'green'\\n            },\\n            Blue: {\\n              type: ColorInfo,\\n              colorName: 'blue'\\n            },\\n            Purple: {\\n              type: ColorInfo,\\n              colorName: 'purple'\\n            },\\n            Material: {\\n              type: TextBox,\\n              content: 'Material',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            MaterialSwatch: {\\n              type: ColorInfo,\\n              colorName: 'material'\\n            },\\n            MaterialBrandSwatch: {\\n              type: ColorInfo,\\n              colorName: 'material-brand'\\n            },\\n            Overlay: {\\n              type: ColorInfo,\\n              colorName: 'overlay'\\n            },\\n            Shadow: {\\n              type: TextBox,\\n              content: 'Shadow',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            ShadowNeutralFocusSwatch: {\\n              type: ColorInfo,\\n              colorName: 'shadow-neutral-focus'\\n            },\\n            ShadowNeutralFocusSoftSwatch: {\\n              type: ColorInfo,\\n              colorName: 'shadow-neutral-focus-soft'\\n            },\\n            ShadowInverseFocusSwatch: {\\n              type: ColorInfo,\\n              colorName: 'shadow-inverse-focus'\\n            },\\n            ShadowInverseFocusSoftSwatch: {\\n              type: ColorInfo,\\n              colorName: 'shadow-inverse-focus-soft'\\n            },\\n            ShadowBrandFocusSwatch: {\\n              type: ColorInfo,\\n              colorName: 'shadow-brand-focus'\\n            },\\n            ShadowBrandFocusSoftSwatch: {\\n              type: ColorInfo,\\n              colorName: 'shadow-brand-focus-soft'\\n            }\\n          }\\n        },\\n        Colors2: {\\n          type: Column,\\n          x: 800,\\n          style: {\\n            itemSpacing\\n          },\\n          Items: {\\n            Text: {\\n              type: TextBox,\\n              content: 'Text',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            TextNeutralSwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-neutral'\\n            },\\n            TextNeutralSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-neutral-secondary'\\n            },\\n            TextNeutralTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-neutral-tertiary'\\n            },\\n            TextNeutralDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-neutral-disabled'\\n            },\\n            TextInverseSwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-inverse'\\n            },\\n            TextInverseSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-inverse-secondary'\\n            },\\n            TextInverseTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-inverse-tertiary'\\n            },\\n            TextInverseDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'text-inverse-disabled'\\n            },\\n            Fill: {\\n              type: TextBox,\\n              content: 'Fill',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            FillNeutralSwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-neutral'\\n            },\\n            FillNeutralSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-neutral-secondary'\\n            },\\n            FillNeutralTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-neutral-tertiary'\\n            },\\n            FillNeutralDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-neutral-disabled'\\n            },\\n            FillInverseSwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-inverse'\\n            },\\n            FillInverseSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-inverse-secondary'\\n            },\\n            FillInverseTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-inverse-tertiary'\\n            },\\n            FillInverseDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-inverse-disabled'\\n            },\\n            FillBrandSwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-brand'\\n            },\\n            FillBrandSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-brand-secondary'\\n            },\\n            FillBrandTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-brand-tertiary'\\n            },\\n            FillBrandDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'fill-brand-disabled'\\n            }\\n          }\\n        },\\n        Colors3: {\\n          type: Column,\\n          x: 1150,\\n          style: {\\n            itemSpacing\\n          },\\n          Items: {\\n            Stroke: {\\n              type: TextBox,\\n              content: 'Stroke',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            StrokeNeutralSwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-neutral'\\n            },\\n            StrokeNeutralSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-neutral-secondary'\\n            },\\n            StrokeNeutralTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-neutral-tertiary'\\n            },\\n            StrokeNeutralDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-neutral-disabled'\\n            },\\n            StrokeInverseSwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-inverse'\\n            },\\n            StrokeInverseSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-inverse-secondary'\\n            },\\n            StrokeInverseTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-inverse-tertiary'\\n            },\\n            StrokeInverseDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-inverse-disabled'\\n            },\\n            StrokeBrandSwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-brand'\\n            },\\n            StrokeBrandSecondarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-brand-secondary'\\n            },\\n            StrokeBrandTertiarySwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-brand-tertiary'\\n            },\\n            StrokeBrandDisabledSwatch: {\\n              type: ColorInfo,\\n              colorName: 'stroke-brand-disabled'\\n            },\\n            Interactive: {\\n              type: TextBox,\\n              content: 'Interactive',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            InteractiveNeutralFocusSwatch: {\\n              type: ColorInfo,\\n              colorName: 'interactive-neutral-focus'\\n            },\\n            InteractiveNeutralFocusSoftSwatch: {\\n              type: ColorInfo,\\n              colorName: 'interactive-neutral-focus-soft'\\n            },\\n            InteractiveInverseFocusSwatch: {\\n              type: ColorInfo,\\n              colorName: 'interactive-inverse-focus'\\n            },\\n            InteractiveInverseFocusSoftSwatch: {\\n              type: ColorInfo,\\n              colorName: 'interactive-inverse-focus-soft'\\n            },\\n            InteractiveBrandFocusSwatch: {\\n              type: ColorInfo,\\n              colorName: 'interactive-brand-focus'\\n            },\\n            InteractiveBrandFocusSoftSwatch: {\\n              type: ColorInfo,\\n              colorName: 'interactive-brand-focus-soft'\\n            }\\n          }\\n        },\\n        Elements: {\\n          type: Column,\\n          x: 1500,\\n          style: {\\n            itemSpacing\\n          },\\n          Items: {\\n            TileWithFocus: {\\n              type: Tile,\\n              itemLayout: {\\n                ratioX: 1,\\n                ratioY: 1,\\n                upCount: 6\\n              },\\n              artwork: {\\n                src: tileImage\\n              },\\n              progressBar: {\\n                progress: 0.5\\n              },\\n              metadataLocation: 'inset',\\n              metadata: {\\n                title: 'Example'\\n              },\\n              // TODO: Fix metadata not displaying in focused mode w/ out persistentMetadata flag\\n              // persistentMetadata: true,\\n              extraItemSpacing: itemSpacing * 4,\\n              mode: 'focused'\\n            },\\n            ButtonWithFocus: {\\n              type: Button,\\n              title: 'Example',\\n              style: {\\n                minWidth: 0\\n              },\\n              extraItemSpacing: itemSpacing * 2,\\n              mode: 'focused'\\n            },\\n            ButtonWithoutFocus: {\\n              type: Button,\\n              title: 'Example',\\n              style: {\\n                minWidth: 0\\n              }\\n            },\\n            Radius: {\\n              type: TextBox,\\n              content: 'Radius',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            RadiusGrid: {\\n              type: Column,\\n              style: {\\n                itemSpacing\\n              },\\n              w: 150,\\n              autoResizeHeight: true,\\n              extraItemSpacing: itemSpacing * 4,\\n              Items: {\\n                RadiusNone: {\\n                  type: Radius,\\n                  radiusName: 'none'\\n                },\\n                RadiusXSmall: {\\n                  type: Radius,\\n                  radiusName: 'xs'\\n                },\\n                RadiusSmall: {\\n                  type: Radius,\\n                  radiusName: 'sm'\\n                },\\n                RadiusMedium: {\\n                  type: Radius,\\n                  radiusName: 'md'\\n                },\\n                RadiusLarge: {\\n                  type: Radius,\\n                  radiusName: 'lg'\\n                },\\n                RadiusXLarge: {\\n                  type: Radius,\\n                  radiusName: 'xl'\\n                }\\n              }\\n            },\\n            Misc: {\\n              type: TextBox,\\n              content: 'Misc',\\n              style: {\\n                textStyle: 'callout1'\\n              }\\n            },\\n            SpacingBase: {\\n              type: MiscProp,\\n              propName: 'spacing-base',\\n              propPath: ['spacer', 'md'],\\n              signals: {\\n                miscLoaded: '_update'\\n              }\\n            },\\n            FocusScale: {\\n              type: MiscProp,\\n              propName: 'focus-scale',\\n              propPath: ['layout', 'focusScale'],\\n              signals: {\\n                miscLoaded: '_update'\\n              }\\n            }\\n          }\\n        }\\n      };\\n    }\\n  }\\n  return Basic;\\n}\",\n      ...ThemingTokens.parameters?.docs?.source\n    }\n  }\n};",
      "locationsMap": {
        "theming-tokens": {
          "startLoc": {
            "col": 29,
            "line": 169
          },
          "endLoc": {
            "col": 1,
            "line": 686
          },
          "startBody": {
            "col": 29,
            "line": 169
          },
          "endBody": {
            "col": 1,
            "line": 686
          }
        }
      }
    }
  },
  title: 'Collections/Theming Tokens'
});
var Explanation = /*#__PURE__*/function (_Base) {
  _inherits(Explanation, _Base);
  var _super = _createSuper(Explanation);
  function Explanation() {
    _classCallCheck(this, Explanation);
    return _super.apply(this, arguments);
  }
  _createClass(Explanation, null, [{
    key: "__componentName",
    get: function get() {
      return 'Explanation';
    }
  }]);
  return Explanation;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
var Swatch = /*#__PURE__*/function (_Base2) {
  _inherits(Swatch, _Base2);
  var _super2 = _createSuper(Swatch);
  function Swatch() {
    _classCallCheck(this, Swatch);
    return _super2.apply(this, arguments);
  }
  _createClass(Swatch, [{
    key: "_update",
    value: function _update() {
      if (this.themeColor) {
        this.color = _globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.theme.color[this.themeColor];
      }
    }
  }], [{
    key: "_template",
    value: function _template() {
      var size = 24;
      return {
        rect: true,
        w: size,
        h: size,
        texture: _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Tools.getRoundRect(size, size, size / 2)
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Swatch';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['themeColor'];
    }
  }]);
  return Swatch;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
var ColorInfo = /*#__PURE__*/function (_Base3) {
  _inherits(ColorInfo, _Base3);
  var _super3 = _createSuper(ColorInfo);
  function ColorInfo() {
    _classCallCheck(this, ColorInfo);
    return _super3.apply(this, arguments);
  }
  _createClass(ColorInfo, [{
    key: "_init",
    value: function _init() {
      this._Name.x = this._Swatch.w + 10;
      _get(_getPrototypeOf(ColorInfo.prototype), "_init", this).call(this);
    }
  }, {
    key: "_update",
    value: function _update() {
      if (this.colorName) {
        this._Name.content = this.colorName;
        this._Swatch.themeColor = this.colorName.replace(/-[a-z]/g, function (match) {
          return match.toUpperCase();
        }).replace(/-/g, '');
      }
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        h: 30,
        Swatch: {
          type: Swatch
        },
        Name: {
          type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          style: {
            textStyle: 'caption1'
          }
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'ColorInfo';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['colorName'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Swatch', 'Name'];
    }
  }]);
  return ColorInfo;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
var Radius = /*#__PURE__*/function (_Base4) {
  _inherits(Radius, _Base4);
  var _super4 = _createSuper(Radius);
  function Radius() {
    _classCallCheck(this, Radius);
    return _super4.apply(this, arguments);
  }
  _createClass(Radius, [{
    key: "_update",
    value: function _update() {
      if (this.radiusName) {
        var radius = _globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.theme.radius[this.radiusName];
        this._Text.content = "".concat(this.radiusName, ": ").concat(radius);
        this._Corner.patch({
          texture: _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Tools.getRoundRect(this._Corner.w, this._Corner.h, [radius, 0, 0, 0], 2, false, false, false)
        });
      }
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.h = this._Text.h;
      this.fireAncestors('$itemChanged');
    }
  }], [{
    key: "_template",
    value: function _template() {
      var size = 24;
      return {
        h: 25,
        // Base theme not updating on first load
        Corner: {
          w: size,
          h: size
        },
        Text: {
          x: 34,
          type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          style: {
            textStyle: 'caption1'
          }
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'Radius';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['radiusName'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Text', 'Corner'];
    }
  }]);
  return Radius;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
var MiscProp = /*#__PURE__*/function (_Base5) {
  _inherits(MiscProp, _Base5);
  var _super5 = _createSuper(MiscProp);
  function MiscProp() {
    _classCallCheck(this, MiscProp);
    return _super5.apply(this, arguments);
  }
  _createClass(MiscProp, [{
    key: "_update",
    value: function _update() {
      if (this.propName && this.propPath) {
        if (typeof this.propPath === 'string') {
          this._Text.content = "".concat(this.propName, ": ").concat(_globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.theme[this.propPath]);
        } else if (this.propPath.length) {
          var val = _globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.theme;
          for (var i = 0; i < this.propPath.length; i++) {
            val = val[this.propPath[i]];
          }
          this._Text.content = "".concat(this.propName, ": ").concat(val);
        }
      }
      this.signal('miscLoaded');
    }
  }, {
    key: "$itemChanged",
    value: function $itemChanged() {
      this.h = this._Text.h;
      this.fireAncestors('$itemChanged');
    }
  }], [{
    key: "_template",
    value: function _template() {
      return {
        Text: {
          type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
          style: {
            textStyle: 'caption1'
          }
        }
      };
    }
  }, {
    key: "__componentName",
    get: function get() {
      return 'MiscProp';
    }
  }, {
    key: "properties",
    get: function get() {
      return ['propName', 'propPath'];
    }
  }, {
    key: "tags",
    get: function get() {
      return ['Text'];
    }
  }]);
  return MiscProp;
}(_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z);
var ThemingTokens = function ThemingTokens() {
  var Basic = /*#__PURE__*/function (_lng$Component) {
    _inherits(Basic, _lng$Component);
    var _super6 = _createSuper(Basic);
    function Basic() {
      _classCallCheck(this, Basic);
      return _super6.apply(this, arguments);
    }
    _createClass(Basic, null, [{
      key: "_template",
      value: function _template() {
        var itemSpacing = 10;
        return {
          DummyElement: {
            type: Explanation,
            announce: 'Displays theming tokens and their values, which update on a theme change'
          },
          Typography: {
            type: _components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            style: {
              itemSpacing: itemSpacing
            },
            Items: {
              Display1: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Display 1',
                style: {
                  textStyle: 'display1'
                }
              },
              Display2: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Display 2',
                style: {
                  textStyle: 'display2'
                }
              },
              Headline1: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Headline 1',
                style: {
                  textStyle: 'headline1'
                }
              },
              Headline2: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Headline 2',
                style: {
                  textStyle: 'headline2'
                }
              },
              Headline3: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Headline 3',
                style: {
                  textStyle: 'headline3'
                }
              },
              Body1: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Body 1',
                style: {
                  textStyle: 'body1'
                }
              },
              Body2: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Body 2',
                style: {
                  textStyle: 'body2'
                }
              },
              Body3: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Body 3',
                style: {
                  textStyle: 'body3'
                }
              },
              Button1: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Button 1',
                style: {
                  textStyle: 'button1'
                }
              },
              Button2: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Button 2',
                style: {
                  textStyle: 'button2'
                }
              },
              Callout1: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'CALLOUT 1',
                style: {
                  textStyle: 'callout1'
                }
              },
              Caption: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Caption 1',
                style: {
                  textStyle: 'caption1'
                }
              }
            }
          },
          Colors1: {
            type: _components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            x: 450,
            style: {
              itemSpacing: itemSpacing
            },
            Items: {
              General: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'General',
                style: {
                  textStyle: 'callout1'
                }
              },
              White: {
                type: ColorInfo,
                colorName: 'white'
              },
              Grey: {
                type: ColorInfo,
                colorName: 'grey'
              },
              Black: {
                type: ColorInfo,
                colorName: 'black'
              },
              Red: {
                type: ColorInfo,
                colorName: 'red'
              },
              Orange: {
                type: ColorInfo,
                colorName: 'orange'
              },
              Yellow: {
                type: ColorInfo,
                colorName: 'yellow'
              },
              Green: {
                type: ColorInfo,
                colorName: 'green'
              },
              Blue: {
                type: ColorInfo,
                colorName: 'blue'
              },
              Purple: {
                type: ColorInfo,
                colorName: 'purple'
              },
              Material: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Material',
                style: {
                  textStyle: 'callout1'
                }
              },
              MaterialSwatch: {
                type: ColorInfo,
                colorName: 'material'
              },
              MaterialBrandSwatch: {
                type: ColorInfo,
                colorName: 'material-brand'
              },
              Overlay: {
                type: ColorInfo,
                colorName: 'overlay'
              },
              Shadow: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Shadow',
                style: {
                  textStyle: 'callout1'
                }
              },
              ShadowNeutralFocusSwatch: {
                type: ColorInfo,
                colorName: 'shadow-neutral-focus'
              },
              ShadowNeutralFocusSoftSwatch: {
                type: ColorInfo,
                colorName: 'shadow-neutral-focus-soft'
              },
              ShadowInverseFocusSwatch: {
                type: ColorInfo,
                colorName: 'shadow-inverse-focus'
              },
              ShadowInverseFocusSoftSwatch: {
                type: ColorInfo,
                colorName: 'shadow-inverse-focus-soft'
              },
              ShadowBrandFocusSwatch: {
                type: ColorInfo,
                colorName: 'shadow-brand-focus'
              },
              ShadowBrandFocusSoftSwatch: {
                type: ColorInfo,
                colorName: 'shadow-brand-focus-soft'
              }
            }
          },
          Colors2: {
            type: _components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            x: 800,
            style: {
              itemSpacing: itemSpacing
            },
            Items: {
              Text: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Text',
                style: {
                  textStyle: 'callout1'
                }
              },
              TextNeutralSwatch: {
                type: ColorInfo,
                colorName: 'text-neutral'
              },
              TextNeutralSecondarySwatch: {
                type: ColorInfo,
                colorName: 'text-neutral-secondary'
              },
              TextNeutralTertiarySwatch: {
                type: ColorInfo,
                colorName: 'text-neutral-tertiary'
              },
              TextNeutralDisabledSwatch: {
                type: ColorInfo,
                colorName: 'text-neutral-disabled'
              },
              TextInverseSwatch: {
                type: ColorInfo,
                colorName: 'text-inverse'
              },
              TextInverseSecondarySwatch: {
                type: ColorInfo,
                colorName: 'text-inverse-secondary'
              },
              TextInverseTertiarySwatch: {
                type: ColorInfo,
                colorName: 'text-inverse-tertiary'
              },
              TextInverseDisabledSwatch: {
                type: ColorInfo,
                colorName: 'text-inverse-disabled'
              },
              Fill: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Fill',
                style: {
                  textStyle: 'callout1'
                }
              },
              FillNeutralSwatch: {
                type: ColorInfo,
                colorName: 'fill-neutral'
              },
              FillNeutralSecondarySwatch: {
                type: ColorInfo,
                colorName: 'fill-neutral-secondary'
              },
              FillNeutralTertiarySwatch: {
                type: ColorInfo,
                colorName: 'fill-neutral-tertiary'
              },
              FillNeutralDisabledSwatch: {
                type: ColorInfo,
                colorName: 'fill-neutral-disabled'
              },
              FillInverseSwatch: {
                type: ColorInfo,
                colorName: 'fill-inverse'
              },
              FillInverseSecondarySwatch: {
                type: ColorInfo,
                colorName: 'fill-inverse-secondary'
              },
              FillInverseTertiarySwatch: {
                type: ColorInfo,
                colorName: 'fill-inverse-tertiary'
              },
              FillInverseDisabledSwatch: {
                type: ColorInfo,
                colorName: 'fill-inverse-disabled'
              },
              FillBrandSwatch: {
                type: ColorInfo,
                colorName: 'fill-brand'
              },
              FillBrandSecondarySwatch: {
                type: ColorInfo,
                colorName: 'fill-brand-secondary'
              },
              FillBrandTertiarySwatch: {
                type: ColorInfo,
                colorName: 'fill-brand-tertiary'
              },
              FillBrandDisabledSwatch: {
                type: ColorInfo,
                colorName: 'fill-brand-disabled'
              }
            }
          },
          Colors3: {
            type: _components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            x: 1150,
            style: {
              itemSpacing: itemSpacing
            },
            Items: {
              Stroke: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Stroke',
                style: {
                  textStyle: 'callout1'
                }
              },
              StrokeNeutralSwatch: {
                type: ColorInfo,
                colorName: 'stroke-neutral'
              },
              StrokeNeutralSecondarySwatch: {
                type: ColorInfo,
                colorName: 'stroke-neutral-secondary'
              },
              StrokeNeutralTertiarySwatch: {
                type: ColorInfo,
                colorName: 'stroke-neutral-tertiary'
              },
              StrokeNeutralDisabledSwatch: {
                type: ColorInfo,
                colorName: 'stroke-neutral-disabled'
              },
              StrokeInverseSwatch: {
                type: ColorInfo,
                colorName: 'stroke-inverse'
              },
              StrokeInverseSecondarySwatch: {
                type: ColorInfo,
                colorName: 'stroke-inverse-secondary'
              },
              StrokeInverseTertiarySwatch: {
                type: ColorInfo,
                colorName: 'stroke-inverse-tertiary'
              },
              StrokeInverseDisabledSwatch: {
                type: ColorInfo,
                colorName: 'stroke-inverse-disabled'
              },
              StrokeBrandSwatch: {
                type: ColorInfo,
                colorName: 'stroke-brand'
              },
              StrokeBrandSecondarySwatch: {
                type: ColorInfo,
                colorName: 'stroke-brand-secondary'
              },
              StrokeBrandTertiarySwatch: {
                type: ColorInfo,
                colorName: 'stroke-brand-tertiary'
              },
              StrokeBrandDisabledSwatch: {
                type: ColorInfo,
                colorName: 'stroke-brand-disabled'
              },
              Interactive: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Interactive',
                style: {
                  textStyle: 'callout1'
                }
              },
              InteractiveNeutralFocusSwatch: {
                type: ColorInfo,
                colorName: 'interactive-neutral-focus'
              },
              InteractiveNeutralFocusSoftSwatch: {
                type: ColorInfo,
                colorName: 'interactive-neutral-focus-soft'
              },
              InteractiveInverseFocusSwatch: {
                type: ColorInfo,
                colorName: 'interactive-inverse-focus'
              },
              InteractiveInverseFocusSoftSwatch: {
                type: ColorInfo,
                colorName: 'interactive-inverse-focus-soft'
              },
              InteractiveBrandFocusSwatch: {
                type: ColorInfo,
                colorName: 'interactive-brand-focus'
              },
              InteractiveBrandFocusSoftSwatch: {
                type: ColorInfo,
                colorName: 'interactive-brand-focus-soft'
              }
            }
          },
          Elements: {
            type: _components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
            x: 1500,
            style: {
              itemSpacing: itemSpacing
            },
            Items: {
              TileWithFocus: {
                type: _components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                itemLayout: {
                  ratioX: 1,
                  ratioY: 1,
                  upCount: 6
                },
                artwork: {
                  src: _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_6__
                },
                progressBar: {
                  progress: 0.5
                },
                metadataLocation: 'inset',
                metadata: {
                  title: 'Example'
                },
                // TODO: Fix metadata not displaying in focused mode w/ out persistentMetadata flag
                // persistentMetadata: true,
                extraItemSpacing: itemSpacing * 4,
                mode: 'focused'
              },
              ButtonWithFocus: {
                type: _components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                title: 'Example',
                style: {
                  minWidth: 0
                },
                extraItemSpacing: itemSpacing * 2,
                mode: 'focused'
              },
              ButtonWithoutFocus: {
                type: _components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,
                title: 'Example',
                style: {
                  minWidth: 0
                }
              },
              Radius: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Radius',
                style: {
                  textStyle: 'callout1'
                }
              },
              RadiusGrid: {
                type: _components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                style: {
                  itemSpacing: itemSpacing
                },
                w: 150,
                autoResizeHeight: true,
                extraItemSpacing: itemSpacing * 4,
                Items: {
                  RadiusNone: {
                    type: Radius,
                    radiusName: 'none'
                  },
                  RadiusXSmall: {
                    type: Radius,
                    radiusName: 'xs'
                  },
                  RadiusSmall: {
                    type: Radius,
                    radiusName: 'sm'
                  },
                  RadiusMedium: {
                    type: Radius,
                    radiusName: 'md'
                  },
                  RadiusLarge: {
                    type: Radius,
                    radiusName: 'lg'
                  },
                  RadiusXLarge: {
                    type: Radius,
                    radiusName: 'xl'
                  }
                }
              },
              Misc: {
                type: _components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                content: 'Misc',
                style: {
                  textStyle: 'callout1'
                }
              },
              SpacingBase: {
                type: MiscProp,
                propName: 'spacing-base',
                propPath: ['spacer', 'md'],
                signals: {
                  miscLoaded: '_update'
                }
              },
              FocusScale: {
                type: MiscProp,
                propName: 'focus-scale',
                propPath: ['layout', 'focusScale'],
                signals: {
                  miscLoaded: '_update'
                }
              }
            }
          }
        };
      }
    }]);
    return Basic;
  }(_lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.Component);
  return Basic;
};
ThemingTokens.parameters = _objectSpread(_objectSpread({}, ThemingTokens.parameters), {}, {
  docs: _objectSpread(_objectSpread({}, (_ThemingTokens$parame = ThemingTokens.parameters) === null || _ThemingTokens$parame === void 0 ? void 0 : _ThemingTokens$parame.docs), {}, {
    source: _objectSpread({
      originalSource: "() => {\n  class Basic extends lng.Component {\n    static _template() {\n      const itemSpacing = 10;\n      return {\n        DummyElement: {\n          type: Explanation,\n          announce: 'Displays theming tokens and their values, which update on a theme change'\n        },\n        Typography: {\n          type: Column,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Display1: {\n              type: TextBox,\n              content: 'Display 1',\n              style: {\n                textStyle: 'display1'\n              }\n            },\n            Display2: {\n              type: TextBox,\n              content: 'Display 2',\n              style: {\n                textStyle: 'display2'\n              }\n            },\n            Headline1: {\n              type: TextBox,\n              content: 'Headline 1',\n              style: {\n                textStyle: 'headline1'\n              }\n            },\n            Headline2: {\n              type: TextBox,\n              content: 'Headline 2',\n              style: {\n                textStyle: 'headline2'\n              }\n            },\n            Headline3: {\n              type: TextBox,\n              content: 'Headline 3',\n              style: {\n                textStyle: 'headline3'\n              }\n            },\n            Body1: {\n              type: TextBox,\n              content: 'Body 1',\n              style: {\n                textStyle: 'body1'\n              }\n            },\n            Body2: {\n              type: TextBox,\n              content: 'Body 2',\n              style: {\n                textStyle: 'body2'\n              }\n            },\n            Body3: {\n              type: TextBox,\n              content: 'Body 3',\n              style: {\n                textStyle: 'body3'\n              }\n            },\n            Button1: {\n              type: TextBox,\n              content: 'Button 1',\n              style: {\n                textStyle: 'button1'\n              }\n            },\n            Button2: {\n              type: TextBox,\n              content: 'Button 2',\n              style: {\n                textStyle: 'button2'\n              }\n            },\n            Callout1: {\n              type: TextBox,\n              content: 'CALLOUT 1',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            Caption: {\n              type: TextBox,\n              content: 'Caption 1',\n              style: {\n                textStyle: 'caption1'\n              }\n            }\n          }\n        },\n        Colors1: {\n          type: Column,\n          x: 450,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            General: {\n              type: TextBox,\n              content: 'General',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            White: {\n              type: ColorInfo,\n              colorName: 'white'\n            },\n            Grey: {\n              type: ColorInfo,\n              colorName: 'grey'\n            },\n            Black: {\n              type: ColorInfo,\n              colorName: 'black'\n            },\n            Red: {\n              type: ColorInfo,\n              colorName: 'red'\n            },\n            Orange: {\n              type: ColorInfo,\n              colorName: 'orange'\n            },\n            Yellow: {\n              type: ColorInfo,\n              colorName: 'yellow'\n            },\n            Green: {\n              type: ColorInfo,\n              colorName: 'green'\n            },\n            Blue: {\n              type: ColorInfo,\n              colorName: 'blue'\n            },\n            Purple: {\n              type: ColorInfo,\n              colorName: 'purple'\n            },\n            Material: {\n              type: TextBox,\n              content: 'Material',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            MaterialSwatch: {\n              type: ColorInfo,\n              colorName: 'material'\n            },\n            MaterialBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'material-brand'\n            },\n            Overlay: {\n              type: ColorInfo,\n              colorName: 'overlay'\n            },\n            Shadow: {\n              type: TextBox,\n              content: 'Shadow',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            ShadowNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus'\n            },\n            ShadowNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus-soft'\n            },\n            ShadowInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus'\n            },\n            ShadowInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus-soft'\n            },\n            ShadowBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus'\n            },\n            ShadowBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus-soft'\n            }\n          }\n        },\n        Colors2: {\n          type: Column,\n          x: 800,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Text: {\n              type: TextBox,\n              content: 'Text',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            TextNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral'\n            },\n            TextNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-secondary'\n            },\n            TextNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-tertiary'\n            },\n            TextNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-disabled'\n            },\n            TextInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse'\n            },\n            TextInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-secondary'\n            },\n            TextInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-tertiary'\n            },\n            TextInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-disabled'\n            },\n            Fill: {\n              type: TextBox,\n              content: 'Fill',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            FillNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral'\n            },\n            FillNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-secondary'\n            },\n            FillNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-tertiary'\n            },\n            FillNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-disabled'\n            },\n            FillInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse'\n            },\n            FillInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-secondary'\n            },\n            FillInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-tertiary'\n            },\n            FillInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-disabled'\n            },\n            FillBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand'\n            },\n            FillBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-secondary'\n            },\n            FillBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-tertiary'\n            },\n            FillBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-disabled'\n            }\n          }\n        },\n        Colors3: {\n          type: Column,\n          x: 1150,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Stroke: {\n              type: TextBox,\n              content: 'Stroke',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            StrokeNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral'\n            },\n            StrokeNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-secondary'\n            },\n            StrokeNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-tertiary'\n            },\n            StrokeNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-disabled'\n            },\n            StrokeInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse'\n            },\n            StrokeInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-secondary'\n            },\n            StrokeInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-tertiary'\n            },\n            StrokeInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-disabled'\n            },\n            StrokeBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand'\n            },\n            StrokeBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-secondary'\n            },\n            StrokeBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-tertiary'\n            },\n            StrokeBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-disabled'\n            },\n            Interactive: {\n              type: TextBox,\n              content: 'Interactive',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            InteractiveNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus'\n            },\n            InteractiveNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus-soft'\n            },\n            InteractiveInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus'\n            },\n            InteractiveInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus-soft'\n            },\n            InteractiveBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus'\n            },\n            InteractiveBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus-soft'\n            }\n          }\n        },\n        Elements: {\n          type: Column,\n          x: 1500,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            TileWithFocus: {\n              type: Tile,\n              itemLayout: {\n                ratioX: 1,\n                ratioY: 1,\n                upCount: 6\n              },\n              artwork: {\n                src: tileImage\n              },\n              progressBar: {\n                progress: 0.5\n              },\n              metadataLocation: 'inset',\n              metadata: {\n                title: 'Example'\n              },\n              // TODO: Fix metadata not displaying in focused mode w/ out persistentMetadata flag\n              // persistentMetadata: true,\n              extraItemSpacing: itemSpacing * 4,\n              mode: 'focused'\n            },\n            ButtonWithFocus: {\n              type: Button,\n              title: 'Example',\n              style: {\n                minWidth: 0\n              },\n              extraItemSpacing: itemSpacing * 2,\n              mode: 'focused'\n            },\n            ButtonWithoutFocus: {\n              type: Button,\n              title: 'Example',\n              style: {\n                minWidth: 0\n              }\n            },\n            Radius: {\n              type: TextBox,\n              content: 'Radius',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            RadiusGrid: {\n              type: Column,\n              style: {\n                itemSpacing\n              },\n              w: 150,\n              autoResizeHeight: true,\n              extraItemSpacing: itemSpacing * 4,\n              Items: {\n                RadiusNone: {\n                  type: Radius,\n                  radiusName: 'none'\n                },\n                RadiusXSmall: {\n                  type: Radius,\n                  radiusName: 'xs'\n                },\n                RadiusSmall: {\n                  type: Radius,\n                  radiusName: 'sm'\n                },\n                RadiusMedium: {\n                  type: Radius,\n                  radiusName: 'md'\n                },\n                RadiusLarge: {\n                  type: Radius,\n                  radiusName: 'lg'\n                },\n                RadiusXLarge: {\n                  type: Radius,\n                  radiusName: 'xl'\n                }\n              }\n            },\n            Misc: {\n              type: TextBox,\n              content: 'Misc',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            SpacingBase: {\n              type: MiscProp,\n              propName: 'spacing-base',\n              propPath: ['spacer', 'md'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            },\n            FocusScale: {\n              type: MiscProp,\n              propName: 'focus-scale',\n              propPath: ['layout', 'focusScale'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            }\n          }\n        }\n      };\n    }\n  }\n  return Basic;\n}"
    }, (_ThemingTokens$parame2 = ThemingTokens.parameters) === null || _ThemingTokens$parame2 === void 0 || (_ThemingTokens$parame2 = _ThemingTokens$parame2.docs) === null || _ThemingTokens$parame2 === void 0 ? void 0 : _ThemingTokens$parame2.source)
  })
});
var __namedExportsOrder = ["ThemingTokens"];

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/tile-image.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/tile-image.56dce1e0.png";

/***/ })

}]);
//# sourceMappingURL=docs-ThemingFoundations-stories.255a4d3d.iframe.bundle.js.map