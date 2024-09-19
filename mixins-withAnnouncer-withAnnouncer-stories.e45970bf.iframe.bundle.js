"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[133],{

/***/ "../../@lightningjs/ui-components/src/mixins/withAnnouncer/withAnnouncer.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   WithDefaultAbbreviations: () => (/* binding */ WithDefaultAbbreviations),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withAnnouncer/abbreviations.js");
/* harmony import */ var _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Row/Row.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
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
  title: 'Utilities/withAnnouncer',
  component: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay
});
const rows = [{
  type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  w: 1920 - 160,
  // x offset from preview.js * 2,
  h: 100,
  itemSpacing: 30,
  items: [{
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 1',
    announceContext: '1 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 2',
    announceContext: '2 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 3',
    announceContext: '3 of 3'
  }]
}, {
  type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  w: 1920 - 160,
  // x offset from preview.js * 2,
  h: 100,
  itemSpacing: 30,
  items: [{
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 1',
    announceContext: '1 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 2',
    announceContext: '2 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 3',
    announceContext: '3 of 3'
  }]
}, {
  type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  w: 1920 - 160,
  // x offset from preview.js * 2,
  h: 100,
  itemSpacing: 30,
  items: [{
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 1',
    announceContext: '1 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 2',
    announceContext: '2 of 3'
  }, {
    type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
    title: 'Button 3',
    announceContext: '3 of 3'
  }]
}];
const Basic = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      debug: true,
      announcerEnabled: true,
      announcerTimeout: 15 * 1000,
      Column: {
        type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
        w: 1920 - 160,
        // x offset from preview.js * 2,
        h: 400,
        style: {
          itemSpacing: 20
        },
        items: rows
      }
    };
  }
  get announceContext() {
    return ['PAUSE-2.2', `Press LEFT or RIGHT to review items,
              press UP or DOWN to review categories,
              press CENTER to select`];
  }
};
const createRow = items => ({
  type: _components_Row_Row__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  w: 900,
  h: 100,
  itemSpacing: 30,
  items
});
const createButton = (title, announceContext) => ({
  type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
  title,
  announceContext
});
const abbrevRows = [createRow([createButton('TV-14', '1 of 9'), createButton('(CC)', '2 of 9'), createButton('HD', '3 of 9')]), createRow([createButton('ENG', '4 of 9'), createButton('ENG+ES', '5 of 9'), createButton('AD', '6 of 9')]), createRow([createButton('RT 95%', '7 of 9'), createButton('S3E12', '8 of 9'), createButton('S12E1, TV-14, CC, HD, ENG+ES, AD, RT 95%', '9 of 9')])];
const WithDefaultAbbreviations = () => {
  class WithAbbreviations extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
    static _template() {
      return {
        debug: true,
        announcerEnabled: true,
        announcerTimeout: 15 * 1000,
        Column: {
          type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          w: 900,
          h: 400,
          style: {
            itemSpacing: 20
          },
          items: abbrevRows
        }
      };
    }
    get announceContext() {
      return ['PAUSE-2.2', `Press LEFT or RIGHT to review items,
              press UP or DOWN to review categories,
              press CENTER to select`];
    }
  }
  return WithAbbreviations;
};
WithDefaultAbbreviations.parameters = {
  announcerOptions: {
    abbreviations: ___WEBPACK_IMPORTED_MODULE_5__/* .defaultAbbrevConfig */ ._8
  }
};
;
const __namedExportsOrder = ["Basic", "WithDefaultAbbreviations"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      debug: true,\n      announcerEnabled: true,\n      announcerTimeout: 15 * 1000,\n      Column: {\n        type: Column,\n        w: 1920 - 160,\n        // x offset from preview.js * 2,\n        h: 400,\n        style: {\n          itemSpacing: 20\n        },\n        items: rows\n      }\n    };\n  }\n  get announceContext() {\n    return ['PAUSE-2.2', `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`];\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};
WithDefaultAbbreviations.parameters = {
  ...WithDefaultAbbreviations.parameters,
  docs: {
    ...WithDefaultAbbreviations.parameters?.docs,
    source: {
      originalSource: "() => {\n  class WithAbbreviations extends lng.Component {\n    static _template() {\n      return {\n        debug: true,\n        announcerEnabled: true,\n        announcerTimeout: 15 * 1000,\n        Column: {\n          type: Column,\n          w: 900,\n          h: 400,\n          style: {\n            itemSpacing: 20\n          },\n          items: abbrevRows\n        }\n      };\n    }\n    get announceContext() {\n      return ['PAUSE-2.2', `Press LEFT or RIGHT to review items,\n              press UP or DOWN to review categories,\n              press CENTER to select`];\n    }\n  }\n  return WithAbbreviations;\n}",
      ...WithDefaultAbbreviations.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=mixins-withAnnouncer-withAnnouncer-stories.e45970bf.iframe.bundle.js.map