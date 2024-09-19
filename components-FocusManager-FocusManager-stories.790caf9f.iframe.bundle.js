"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9251],{

/***/ "../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/FocusManager/FocusManager.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
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
  title: 'Components/FocusManager'
});
const Basic = () => class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
  static _template() {
    return {
      FocusManager: {
        type: ___WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
        direction: 'row',
        items: []
      },
      itemsCol: [{
        type: ButtonFixedWidth,
        title: 'Top'
      }, {
        type: ButtonFixedWidth,
        title: 'Center',
        y: 250
      }, {
        type: ButtonFixedWidth,
        title: 'Bottom',
        y: 500
      }],
      itemsRow: [{
        type: ButtonFixedWidth,
        title: 'Left',
        x: 0,
        y: 250
      }, {
        type: ButtonFixedWidth,
        title: 'Center',
        x: 250,
        y: 250
      }, {
        type: ButtonFixedWidth,
        title: 'Right',
        x: 500,
        y: 250
      }]
    };
  }
};
class ButtonFixedWidth extends _Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A {
  static get __componentName() {
    return 'ButtonSmall';
  }
  _init() {
    this.fixed = true;
    this.w = 200;
    super._init();
  }
}
Basic.args = {
  direction: 'row',
  wrapSelected: false
};
Basic.argTypes = {
  direction: {
    control: 'radio',
    options: ['row', 'column'],
    description: 'The navigation direction for focus (left/right or up/down)',
    table: {
      defaultValue: {
        summary: 'row'
      }
    }
  },
  wrapSelected: {
    control: 'boolean',
    description: 'When set to true, the focus will loop back to the beginning of the list after reaching the last item, and vice versa. This enables continuous navigation through the list without dead ends. If wrapSelected is set to false (the default value), the focus will stop at the first or last item, depending on the navigation direction',
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
Basic.parameters = {
  argActions: {
    direction: (direction, component) => {
      component.tag('FocusManager').items = direction === 'row' ? component.itemsRow : component.itemsCol;
      component.tag('FocusManager').direction = direction;
    }
  }
};
;
const __namedExportsOrder = ["Basic"];
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => class Basic extends lng.Component {\n  static _template() {\n    return {\n      FocusManager: {\n        type: FocusManager,\n        direction: 'row',\n        items: []\n      },\n      itemsCol: [{\n        type: ButtonFixedWidth,\n        title: 'Top'\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Center',\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Bottom',\n        y: 500\n      }],\n      itemsRow: [{\n        type: ButtonFixedWidth,\n        title: 'Left',\n        x: 0,\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Center',\n        x: 250,\n        y: 250\n      }, {\n        type: ButtonFixedWidth,\n        title: 'Right',\n        x: 500,\n        y: 250\n      }]\n    };\n  }\n}",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=components-FocusManager-FocusManager-stories.790caf9f.iframe.bundle.js.map