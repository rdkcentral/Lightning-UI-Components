"use strict";
(self["webpackChunklightning_ui_docs"] = self["webpackChunklightning_ui_docs"] || []).push([[6491],{

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
/* harmony import */ var _components_Base_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Base/Base.js");
/* harmony import */ var _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Column/Column.js");
/* harmony import */ var _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../@lightningjs/ui-components/src/components/TextBox/TextBox.js");
/* harmony import */ var _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Tile/Tile.js");
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../@lightningjs/ui-components/src/components/Button/Button.js");
/* harmony import */ var _assets_images_tile_image_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../@lightningjs/ui-components/src/assets/images/tile-image.png");
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
  title: 'Collections/Theming Tokens'
});
class Explanation extends _components_Base_Base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A {
  static get __componentName() {
    return 'Explanation';
  }
}
class Swatch extends _components_Base_Base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A {
  static _template() {
    const size = 24;
    return {
      rect: true,
      w: size,
      h: size,
      texture: _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Tools.getRoundRect(size, size, size / 2)
    };
  }
  static get __componentName() {
    return 'Swatch';
  }
  static get properties() {
    return ['themeColor'];
  }
  _update() {
    if (this.themeColor) {
      this.color = _globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme.color[this.themeColor];
    }
  }
}
class ColorInfo extends _components_Base_Base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A {
  static _template() {
    return {
      h: 30,
      Swatch: {
        type: Swatch
      },
      Name: {
        type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        style: {
          textStyle: 'caption1'
        }
      }
    };
  }
  static get __componentName() {
    return 'ColorInfo';
  }
  static get properties() {
    return ['colorName'];
  }
  static get tags() {
    return ['Swatch', 'Name'];
  }
  _init() {
    this._Name.x = this._Swatch.w + 10;
    super._init();
  }
  _update() {
    if (this.colorName) {
      this._Name.content = this.colorName;
      this._Swatch.themeColor = this.colorName.replace(/-[a-z]/g, match => match.toUpperCase()).replace(/-/g, '');
    }
  }
}
class Radius extends _components_Base_Base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A {
  static _template() {
    const size = 24;
    return {
      h: 25,
      // Base theme not updating on first load
      Corner: {
        w: size,
        h: size
      },
      Text: {
        x: 34,
        type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        style: {
          textStyle: 'caption1'
        }
      }
    };
  }
  static get __componentName() {
    return 'Radius';
  }
  static get properties() {
    return ['radiusName'];
  }
  static get tags() {
    return ['Text', 'Corner'];
  }
  _update() {
    if (this.radiusName) {
      const radius = _globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme.radius[this.radiusName];
      this._Text.content = `${this.radiusName}: ${radius}`;
      this._Corner.patch({
        texture: _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Tools.getRoundRect(this._Corner.w, this._Corner.h, [radius, 0, 0, 0], 2, false, false, false)
      });
    }
  }
  $itemChanged() {
    this.h = this._Text.h;
    this.fireAncestors('$itemChanged');
  }
}
class MiscProp extends _components_Base_Base__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A {
  static _template() {
    return {
      Text: {
        type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
        style: {
          textStyle: 'caption1'
        }
      }
    };
  }
  static get __componentName() {
    return 'MiscProp';
  }
  static get properties() {
    return ['propName', 'propPath'];
  }
  static get tags() {
    return ['Text'];
  }
  _update() {
    if (this.propName && this.propPath) {
      if (typeof this.propPath === 'string') {
        this._Text.content = `${this.propName}: ${_globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme[this.propPath]}`;
      } else if (this.propPath.length) {
        let val = _globals_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A.theme;
        for (let i = 0; i < this.propPath.length; i++) {
          val = val[this.propPath[i]];
        }
        this._Text.content = `${this.propName}: ${val}`;
      }
    }
    this.signal('miscLoaded');
  }
  $itemChanged() {
    this.h = this._Text.h;
    this.fireAncestors('$itemChanged');
  }
}
const ThemingTokens = () => {
  class Basic extends _lightningjs_core__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Component {
    static _template() {
      const itemSpacing = 10;
      return {
        DummyElement: {
          type: Explanation,
          announce: 'Displays theming tokens and their values, which update on a theme change'
        },
        Typography: {
          type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          style: {
            itemSpacing
          },
          Items: {
            Display1: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Display 1',
              style: {
                textStyle: 'display1'
              }
            },
            Display2: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Display 2',
              style: {
                textStyle: 'display2'
              }
            },
            Headline1: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Headline 1',
              style: {
                textStyle: 'headline1'
              }
            },
            Headline2: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Headline 2',
              style: {
                textStyle: 'headline2'
              }
            },
            Headline3: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Headline 3',
              style: {
                textStyle: 'headline3'
              }
            },
            Body1: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Body 1',
              style: {
                textStyle: 'body1'
              }
            },
            Body2: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Body 2',
              style: {
                textStyle: 'body2'
              }
            },
            Body3: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Body 3',
              style: {
                textStyle: 'body3'
              }
            },
            Button1: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Button 1',
              style: {
                textStyle: 'button1'
              }
            },
            Button2: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Button 2',
              style: {
                textStyle: 'button2'
              }
            },
            Callout1: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'CALLOUT 1',
              style: {
                textStyle: 'callout1'
              }
            },
            Caption: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Caption 1',
              style: {
                textStyle: 'caption1'
              }
            }
          }
        },
        Colors1: {
          type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          x: 450,
          style: {
            itemSpacing
          },
          Items: {
            General: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
          type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          x: 800,
          style: {
            itemSpacing
          },
          Items: {
            Text: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
          type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          x: 1150,
          style: {
            itemSpacing
          },
          Items: {
            Stroke: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
          type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
          x: 1500,
          style: {
            itemSpacing
          },
          Items: {
            TileWithFocus: {
              type: _components_Tile_Tile__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,
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
              type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
              title: 'Example',
              style: {
                minWidth: 0
              },
              extraItemSpacing: itemSpacing * 2,
              mode: 'focused'
            },
            ButtonWithoutFocus: {
              type: _components_Button_Button__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A,
              title: 'Example',
              style: {
                minWidth: 0
              }
            },
            Radius: {
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
              content: 'Radius',
              style: {
                textStyle: 'callout1'
              }
            },
            RadiusGrid: {
              type: _components_Column_Column__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,
              style: {
                itemSpacing
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
              type: _components_TextBox_TextBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,
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
  }
  return Basic;
};
;
const __namedExportsOrder = ["ThemingTokens"];
ThemingTokens.parameters = {
  ...ThemingTokens.parameters,
  docs: {
    ...ThemingTokens.parameters?.docs,
    source: {
      originalSource: "() => {\n  class Basic extends lng.Component {\n    static _template() {\n      const itemSpacing = 10;\n      return {\n        DummyElement: {\n          type: Explanation,\n          announce: 'Displays theming tokens and their values, which update on a theme change'\n        },\n        Typography: {\n          type: Column,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Display1: {\n              type: TextBox,\n              content: 'Display 1',\n              style: {\n                textStyle: 'display1'\n              }\n            },\n            Display2: {\n              type: TextBox,\n              content: 'Display 2',\n              style: {\n                textStyle: 'display2'\n              }\n            },\n            Headline1: {\n              type: TextBox,\n              content: 'Headline 1',\n              style: {\n                textStyle: 'headline1'\n              }\n            },\n            Headline2: {\n              type: TextBox,\n              content: 'Headline 2',\n              style: {\n                textStyle: 'headline2'\n              }\n            },\n            Headline3: {\n              type: TextBox,\n              content: 'Headline 3',\n              style: {\n                textStyle: 'headline3'\n              }\n            },\n            Body1: {\n              type: TextBox,\n              content: 'Body 1',\n              style: {\n                textStyle: 'body1'\n              }\n            },\n            Body2: {\n              type: TextBox,\n              content: 'Body 2',\n              style: {\n                textStyle: 'body2'\n              }\n            },\n            Body3: {\n              type: TextBox,\n              content: 'Body 3',\n              style: {\n                textStyle: 'body3'\n              }\n            },\n            Button1: {\n              type: TextBox,\n              content: 'Button 1',\n              style: {\n                textStyle: 'button1'\n              }\n            },\n            Button2: {\n              type: TextBox,\n              content: 'Button 2',\n              style: {\n                textStyle: 'button2'\n              }\n            },\n            Callout1: {\n              type: TextBox,\n              content: 'CALLOUT 1',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            Caption: {\n              type: TextBox,\n              content: 'Caption 1',\n              style: {\n                textStyle: 'caption1'\n              }\n            }\n          }\n        },\n        Colors1: {\n          type: Column,\n          x: 450,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            General: {\n              type: TextBox,\n              content: 'General',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            White: {\n              type: ColorInfo,\n              colorName: 'white'\n            },\n            Grey: {\n              type: ColorInfo,\n              colorName: 'grey'\n            },\n            Black: {\n              type: ColorInfo,\n              colorName: 'black'\n            },\n            Red: {\n              type: ColorInfo,\n              colorName: 'red'\n            },\n            Orange: {\n              type: ColorInfo,\n              colorName: 'orange'\n            },\n            Yellow: {\n              type: ColorInfo,\n              colorName: 'yellow'\n            },\n            Green: {\n              type: ColorInfo,\n              colorName: 'green'\n            },\n            Blue: {\n              type: ColorInfo,\n              colorName: 'blue'\n            },\n            Purple: {\n              type: ColorInfo,\n              colorName: 'purple'\n            },\n            Material: {\n              type: TextBox,\n              content: 'Material',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            MaterialSwatch: {\n              type: ColorInfo,\n              colorName: 'material'\n            },\n            MaterialBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'material-brand'\n            },\n            Overlay: {\n              type: ColorInfo,\n              colorName: 'overlay'\n            },\n            Shadow: {\n              type: TextBox,\n              content: 'Shadow',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            ShadowNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus'\n            },\n            ShadowNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-neutral-focus-soft'\n            },\n            ShadowInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus'\n            },\n            ShadowInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-inverse-focus-soft'\n            },\n            ShadowBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus'\n            },\n            ShadowBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'shadow-brand-focus-soft'\n            }\n          }\n        },\n        Colors2: {\n          type: Column,\n          x: 800,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Text: {\n              type: TextBox,\n              content: 'Text',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            TextNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral'\n            },\n            TextNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-secondary'\n            },\n            TextNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-tertiary'\n            },\n            TextNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-neutral-disabled'\n            },\n            TextInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse'\n            },\n            TextInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-secondary'\n            },\n            TextInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-tertiary'\n            },\n            TextInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'text-inverse-disabled'\n            },\n            Fill: {\n              type: TextBox,\n              content: 'Fill',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            FillNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral'\n            },\n            FillNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-secondary'\n            },\n            FillNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-tertiary'\n            },\n            FillNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-neutral-disabled'\n            },\n            FillInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse'\n            },\n            FillInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-secondary'\n            },\n            FillInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-tertiary'\n            },\n            FillInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-inverse-disabled'\n            },\n            FillBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand'\n            },\n            FillBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-secondary'\n            },\n            FillBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-tertiary'\n            },\n            FillBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'fill-brand-disabled'\n            }\n          }\n        },\n        Colors3: {\n          type: Column,\n          x: 1150,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            Stroke: {\n              type: TextBox,\n              content: 'Stroke',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            StrokeNeutralSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral'\n            },\n            StrokeNeutralSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-secondary'\n            },\n            StrokeNeutralTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-tertiary'\n            },\n            StrokeNeutralDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-neutral-disabled'\n            },\n            StrokeInverseSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse'\n            },\n            StrokeInverseSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-secondary'\n            },\n            StrokeInverseTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-tertiary'\n            },\n            StrokeInverseDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-inverse-disabled'\n            },\n            StrokeBrandSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand'\n            },\n            StrokeBrandSecondarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-secondary'\n            },\n            StrokeBrandTertiarySwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-tertiary'\n            },\n            StrokeBrandDisabledSwatch: {\n              type: ColorInfo,\n              colorName: 'stroke-brand-disabled'\n            },\n            Interactive: {\n              type: TextBox,\n              content: 'Interactive',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            InteractiveNeutralFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus'\n            },\n            InteractiveNeutralFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-neutral-focus-soft'\n            },\n            InteractiveInverseFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus'\n            },\n            InteractiveInverseFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-inverse-focus-soft'\n            },\n            InteractiveBrandFocusSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus'\n            },\n            InteractiveBrandFocusSoftSwatch: {\n              type: ColorInfo,\n              colorName: 'interactive-brand-focus-soft'\n            }\n          }\n        },\n        Elements: {\n          type: Column,\n          x: 1500,\n          style: {\n            itemSpacing\n          },\n          Items: {\n            TileWithFocus: {\n              type: Tile,\n              itemLayout: {\n                ratioX: 1,\n                ratioY: 1,\n                upCount: 6\n              },\n              artwork: {\n                src: tileImage\n              },\n              progressBar: {\n                progress: 0.5\n              },\n              metadataLocation: 'inset',\n              metadata: {\n                title: 'Example'\n              },\n              // TODO: Fix metadata not displaying in focused mode w/ out persistentMetadata flag\n              // persistentMetadata: true,\n              extraItemSpacing: itemSpacing * 4,\n              mode: 'focused'\n            },\n            ButtonWithFocus: {\n              type: Button,\n              title: 'Example',\n              style: {\n                minWidth: 0\n              },\n              extraItemSpacing: itemSpacing * 2,\n              mode: 'focused'\n            },\n            ButtonWithoutFocus: {\n              type: Button,\n              title: 'Example',\n              style: {\n                minWidth: 0\n              }\n            },\n            Radius: {\n              type: TextBox,\n              content: 'Radius',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            RadiusGrid: {\n              type: Column,\n              style: {\n                itemSpacing\n              },\n              w: 150,\n              autoResizeHeight: true,\n              extraItemSpacing: itemSpacing * 4,\n              Items: {\n                RadiusNone: {\n                  type: Radius,\n                  radiusName: 'none'\n                },\n                RadiusXSmall: {\n                  type: Radius,\n                  radiusName: 'xs'\n                },\n                RadiusSmall: {\n                  type: Radius,\n                  radiusName: 'sm'\n                },\n                RadiusMedium: {\n                  type: Radius,\n                  radiusName: 'md'\n                },\n                RadiusLarge: {\n                  type: Radius,\n                  radiusName: 'lg'\n                },\n                RadiusXLarge: {\n                  type: Radius,\n                  radiusName: 'xl'\n                }\n              }\n            },\n            Misc: {\n              type: TextBox,\n              content: 'Misc',\n              style: {\n                textStyle: 'callout1'\n              }\n            },\n            SpacingBase: {\n              type: MiscProp,\n              propName: 'spacing-base',\n              propPath: ['spacer', 'md'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            },\n            FocusScale: {\n              type: MiscProp,\n              propName: 'focus-scale',\n              propPath: ['layout', 'focusScale'],\n              signals: {\n                miscLoaded: '_update'\n              }\n            }\n          }\n        }\n      };\n    }\n  }\n  return Basic;\n}",
      ...ThemingTokens.parameters?.docs?.source
    }
  }
};

/***/ }),

/***/ "../../@lightningjs/ui-components/src/assets/images/tile-image.png":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/tile-image.56dce1e0.png";

/***/ })

}]);
//# sourceMappingURL=docs-ThemingFoundations-stories.bda5d467.iframe.bundle.js.map