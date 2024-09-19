"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[7807],{

/***/ "../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Column: () => (/* binding */ Column),
/* harmony export */   ColumnOfRows: () => (/* binding */ ColumnOfRows),
/* harmony export */   Row: () => (/* binding */ Row),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/NavigationManager/NavigationManager.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
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




class ButtonFixedWidth extends _Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A {
  static get __componentName() {
    return 'ButtonSmall';
  }
  _init() {
    this.fixed = true;
    this.w = 200;
    super._init();
  }
}
function createRow(props = {}) {
  return {
    type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
    direction: 'row',
    items: [{
      type: ButtonFixedWidth,
      title: 'Left'
    }, {
      type: ButtonFixedWidth,
      title: 'Center',
      x: 250
    }, {
      type: ButtonFixedWidth,
      title: 'Right',
      x: 500
    }],
    ...props
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'Components/NavigationManager'
});
const Row = () => class RowExample extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Row: createRow()
    };
  }
};
const Column = () => class RowExample extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Row: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        direction: 'column',
        items: [{
          type: ButtonFixedWidth,
          title: 'Top'
        }, {
          type: ButtonFixedWidth,
          title: 'Center'
        }, {
          type: ButtonFixedWidth,
          title: 'Bottom'
        }]
      }
    };
  }
};
const ColumnOfRows = () => class RowExample extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      Row: {
        type: ___WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
        direction: 'column',
        plinko: true,
        items: [createRow({
          autoResizeHeight: true
        }), createRow({
          autoResizeHeight: true
        }), createRow({
          autoResizeHeight: true
        })]
      }
    };
  }
};
;
const __namedExportsOrder = ["Row", "Column", "ColumnOfRows"];
Row.parameters = {
  ...Row.parameters,
  docs: {
    ...Row.parameters?.docs,
    source: {
      originalSource: "() => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: createRow()\n    };\n  }\n}",
      ...Row.parameters?.docs?.source
    }
  }
};
Column.parameters = {
  ...Column.parameters,
  docs: {
    ...Column.parameters?.docs,
    source: {
      originalSource: "() => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: NavigationManager,\n        direction: 'column',\n        items: [{\n          type: ButtonFixedWidth,\n          title: 'Top'\n        }, {\n          type: ButtonFixedWidth,\n          title: 'Center'\n        }, {\n          type: ButtonFixedWidth,\n          title: 'Bottom'\n        }]\n      }\n    };\n  }\n}",
      ...Column.parameters?.docs?.source
    }
  }
};
ColumnOfRows.parameters = {
  ...ColumnOfRows.parameters,
  docs: {
    ...ColumnOfRows.parameters?.docs,
    source: {
      originalSource: "() => class RowExample extends lng.Component {\n  static _template() {\n    return {\n      Row: {\n        type: NavigationManager,\n        direction: 'column',\n        plinko: true,\n        items: [createRow({\n          autoResizeHeight: true\n        }), createRow({\n          autoResizeHeight: true\n        }), createRow({\n          autoResizeHeight: true\n        })]\n      }\n    };\n  }\n}",
      ...ColumnOfRows.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-NavigationManager-NavigationManager-stories.5d1cb242.iframe.bundle.js.map