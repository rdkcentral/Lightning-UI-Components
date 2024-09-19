"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[4179],{

/***/ "../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridOverlay: () => (/* binding */ GridOverlay),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/GridOverlay/GridOverlay.js");
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
  title: 'Components/GridOverlay'
});
const GridOverlay = args => class GridOverlay extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      GridOverlay: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        x: _globals_context_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme.layout.marginX * -1,
        y: _globals_context_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme.layout.marginY * -1,
        showColumns: args.showColumns,
        showMargins: args.showMargins,
        showSafe: args.showSafe,
        showGutters: args.showGutters,
        showText: args.showText,
        alpha: args.alpha
      }
    };
  }
};
GridOverlay.storyName = 'GridOverlay';
GridOverlay.args = {
  alpha: 1,
  showColumns: true,
  showMargins: true,
  showSafe: true,
  showGutters: true,
  showText: true
};
GridOverlay.argTypes = {
  alpha: {
    control: {
      type: 'range',
      min: 0,
      max: 1,
      step: 0.01
    },
    description: 'Adjusts the opacity, parameter should be a value between 0 and 1',
    table: {
      defaultValue: {
        summary: 'undefined'
      }
    }
  },
  showColumns: {
    control: 'boolean',
    description: 'When true, displays the column span rectangles',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showMargins: {
    control: 'boolean',
    description: 'When true, displays the X and Y margin rulers',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showSafe: {
    control: 'boolean',
    description: 'When true, displays the X and Y "safe" zone rulers (this is the area that content should not be rendered in to avoid screen clipping on a device)',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showGutters: {
    control: 'boolean',
    description: 'When true, displays the rulers for spacing between columns',
    table: {
      defaultValue: {
        summary: true
      }
    }
  },
  showText: {
    control: 'boolean',
    description: 'When true, displays the textbox containing the exact numbers associated with the screen, margin, safe, and gutter sizes',
    table: {
      defaultValue: {
        summary: true
      }
    }
  }
};
GridOverlay.parameters = {
  argActions: {}
};
;
const __namedExportsOrder = ["GridOverlay"];
GridOverlay.parameters = {
  ...GridOverlay.parameters,
  docs: {
    ...GridOverlay.parameters?.docs,
    source: {
      originalSource: "args => class GridOverlay extends lng.Component {\n  static _template() {\n    return {\n      GridOverlay: {\n        type: GridOverlayComponent,\n        x: context.theme.layout.marginX * -1,\n        y: context.theme.layout.marginY * -1,\n        showColumns: args.showColumns,\n        showMargins: args.showMargins,\n        showSafe: args.showSafe,\n        showGutters: args.showGutters,\n        showText: args.showText,\n        alpha: args.alpha\n      }\n    };\n  }\n}",
      ...GridOverlay.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-GridOverlay-GridOverlay-stories.e659ab37.iframe.bundle.js.map