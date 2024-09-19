"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[9285],{

/***/ "../../@lightningjs/ui-components/src/mixins/withThemeStyles/withThemeStyles.stories.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withThemeStyles: () => (/* binding */ withThemeStyles)
/* harmony export */ });
/* harmony import */ var _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../../node_modules/@lightningjs/core/dist/lightning.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../@lightningjs/ui-components/src/mixins/withThemeStyles/index.js");
/* harmony import */ var _globals_context_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/globals/context/index.js");
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
  title: 'Utilities/withThemeStyles'
});
const withThemeStyles = () => {
  const style = {
    color: _globals_context_index__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A.theme.color.fillNeutral
  };
  class Box extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
    static get __componentName() {
      return 'Box';
    }
    static get __themeStyle() {
      return style;
    }
    static _template() {
      return {
        Box: {
          w: 150,
          h: 150,
          rect: true
        }
      };
    }
    toggleColor(theme) {
      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;
    }
  }
  return class withThemeStyles extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
    static _template() {
      return {
        Box: {
          type: (0,_index__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(Box)
        }
      };
    }
  };
};
withThemeStyles.storyName = 'withThemeStyles';
withThemeStyles.args = {
  themeColor: true
};
withThemeStyles.argTypes = {
  themeColor: {
    control: 'boolean',
    description: 'Should the box use the color from the theme?',
    table: {
      defaultValue: {
        summary: withThemeStyles.args.themeColor
      }
    }
  }
};
withThemeStyles.parameters = {
  argActions: {
    themeColor: (themeColor, component) => {
      component.tag('Box').toggleColor(themeColor);
    }
  }
};
;
const __namedExportsOrder = ["withThemeStyles"];
withThemeStyles.parameters = {
  ...withThemeStyles.parameters,
  docs: {
    ...withThemeStyles.parameters?.docs,
    source: {
      originalSource: "() => {\n  const style = {\n    color: context.theme.color.fillNeutral\n  };\n  class Box extends lng.Component {\n    static get __componentName() {\n      return 'Box';\n    }\n    static get __themeStyle() {\n      return style;\n    }\n    static _template() {\n      return {\n        Box: {\n          w: 150,\n          h: 150,\n          rect: true\n        }\n      };\n    }\n    toggleColor(theme) {\n      this.tag('Box').color = theme ? this.style.color : 0xff0000ff;\n    }\n  }\n  return class withThemeStyles extends lng.Component {\n    static _template() {\n      return {\n        Box: {\n          type: withThemeStylesMixin(Box)\n        }\n      };\n    }\n  };\n}",
      ...withThemeStyles.parameters?.docs?.source
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=mixins-withThemeStyles-withThemeStyles-stories.57386a4f.iframe.bundle.js.map