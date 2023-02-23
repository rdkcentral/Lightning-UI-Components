import lng from '@lightningjs/core';
import context from '../src/globals/context';
import { Base, Column, TextBox, Tile, Button } from '../src/components';
import tileImage from '../src/assets/images/tile-image.png';

export default {
  title: 'Collections/Theming Tokens'
};

class Explanation extends Base {
  static get __componentName() {
    return 'Explanation';
  }
}

class Swatch extends Base {
  static _template() {
    const size = 24;
    return {
      rect: true,
      w: size,
      h: size,
      texture: lng.Tools.getRoundRect(size, size, size / 2)
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
      this.color = context.theme.color[this.themeColor];
    }
  }
}

class ColorInfo extends Base {
  static _template() {
    return {
      h: 30,
      Swatch: {
        type: Swatch
      },
      Name: {
        type: TextBox,
        style: { textStyle: 'caption1' }
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
      this._Swatch.themeColor = this.colorName
        .replace(/-[a-z]/g, match => match.toUpperCase())
        .replace(/-/g, '');
    }
  }
}

class Radius extends Base {
  static _template() {
    const size = 24;
    return {
      h: 25, // Base theme not updating on first load
      Corner: { w: size, h: size },
      Text: {
        x: 34,
        type: TextBox,
        style: { textStyle: 'caption1' }
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
      const radius = context.theme.radius[this.radiusName];
      this._Text.content = `${this.radiusName}: ${radius}px`;
      this._Corner.patch({
        texture: lng.Tools.getRoundRect(
          this._Corner.w,
          this._Corner.h,
          [radius, 0, 0, 0],
          2,
          false,
          false,
          false
        )
      });
    }
  }

  $itemChanged() {
    this.h = this._Text.h;
    this.fireAncestors('$itemChanged');
  }
}

class MiscProp extends Base {
  static _template() {
    return {
      Text: {
        type: TextBox,
        style: { textStyle: 'caption1' }
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
        this._Text.content = `${this.propName}: ${
          context.theme[this.propPath]
        }`;
      } else if (this.propPath.length) {
        let val = context.theme;
        for (let i = 0; i < this.propPath.length; i++) {
          val = val[this.propPath[i]];
        }
        this._Text.content = `${this.propName}: ${val}`;
      }
    }
  }

  $itemChanged() {
    this.h = this._Text.h;
    this.fireAncestors('$itemChanged');
  }
}

export const ThemingTokens = () => {
  class Basic extends lng.Component {
    static _template() {
      const itemSpacing = 10;
      return {
        DummyElement: {
          type: Explanation,
          announce: 'Displays theming tokens and their values, which update on a theme change'
        },
        Typography: {
          type: Column,
          style: { itemSpacing },
          Items: {
            Display1: {
              type: TextBox,
              content: 'Display 1',
              style: { textStyle: 'display1' }
            },
            Display2: {
              type: TextBox,
              content: 'Display 2',
              style: { textStyle: 'display2' }
            },
            Headline1: {
              type: TextBox,
              content: 'Headline 1',
              style: { textStyle: 'headline1' }
            },
            Headline2: {
              type: TextBox,
              content: 'Headline 2',
              style: { textStyle: 'headline2' }
            },
            Headline3: {
              type: TextBox,
              content: 'Headline 3',
              style: { textStyle: 'headline3' }
            },
            Body1: {
              type: TextBox,
              content: 'Body 1',
              style: { textStyle: 'body1' }
            },
            Body2: {
              type: TextBox,
              content: 'Body 2',
              style: { textStyle: 'body2' }
            },
            Body3: {
              type: TextBox,
              content: 'Body 3',
              style: { textStyle: 'body3' }
            },
            Button1: {
              type: TextBox,
              content: 'Button 1',
              style: { textStyle: 'button1' }
            },
            Button2: {
              type: TextBox,
              content: 'Button 2',
              style: { textStyle: 'button2' }
            },
            Callout1: {
              type: TextBox,
              content: 'CALLOUT 1',
              style: { textStyle: 'callout1' }
            },
            Caption: {
              type: TextBox,
              content: 'Caption 1',
              style: { textStyle: 'caption1' }
            }
          }
        },
        Colors1: {
          type: Column,
          x: 450,
          style: { itemSpacing },
          Items: {
            General: {
              type: TextBox,
              content: 'General',
              style: { textStyle: 'callout1' }
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
              type: TextBox,
              content: 'Material',
              style: { textStyle: 'callout1' }
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
              type: TextBox,
              content: 'Shadow',
              style: { textStyle: 'callout1' }
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
            },
          }
        },
        Colors2: {
          type: Column,
          x: 800,
          style: { itemSpacing },
          Items: {
            Text: {
              type: TextBox,
              content: 'Text',
              style: { textStyle: 'callout1' }
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
              type: TextBox,
              content: 'Fill',
              style: { textStyle: 'callout1' }
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
          type: Column,
          x: 1150,
          style: { itemSpacing },
          Items: {
            Stroke: {
              type: TextBox,
              content: 'Stroke',
              style: { textStyle: 'callout1' }
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
              type: TextBox,
              content: 'Interactive',
              style: { textStyle: 'callout1' }
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
          type: Column,
          x: 1500,
          style: { itemSpacing },
          Items: {
            TileWithFocus: {
              type: Tile,
              itemLayout: { ratioX: 1, ratioY: 1, upCount: 6 },
              artwork: { src: tileImage },
              progressBar: { progress: 0.5 },
              metadataLocation: 'inset',
              metadata: { title: 'Example' },
              // TODO: Fix metadata not displaying in focused mode w/ out persistentMetadata flag
              // persistentMetadata: true,
              extraItemSpacing: itemSpacing * 4,
              mode: 'focused'
            },
            ButtonWithFocus: {
              type: Button,
              title: 'Example',
              style: { minWidth: 0 },
              extraItemSpacing: itemSpacing * 2,
              mode: 'focused'
            },
            ButtonWithoutFocus: {
              type: Button,
              title: 'Example',
              style: { minWidth: 0 }
            },
            Radius: {
              type: TextBox,
              content: 'Radius',
              style: { textStyle: 'callout1' }
            },
            RadiusGrid: {
              type: Column,
              style: { itemSpacing },
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
              type: TextBox,
              content: 'Misc',
              style: { textStyle: 'callout1' },
            },
            SpacingBase: {
              type: MiscProp,
              propName: 'spacing-base',
              propPath: ['spacer', 'md']
            },
            FocusScale: {
              type: MiscProp,
              propName: 'focus-scale',
              propPath: ['layout', 'focusScale']
            }
          }
        }
      };
    }
  }

  return Basic;
};
