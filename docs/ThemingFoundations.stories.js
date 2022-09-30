import lng from '@lightningjs/core';
import context from '../context';
import TextBox from '../elements/TextBox';
import Column from '../layout/Column';
import Base from '../Base';
import { Tile } from '../elements';
import { Row } from '../layout';
import tileImage from '../assets/images/tile-image.png';

export default {
  title: 'Collections/Theming Foundations'
};

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
        textStyle: 'caption1'
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
        textStyle: 'caption1'
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
        textStyle: 'caption1'
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

export const TypographyAndColors = () => {
  class Basic extends lng.Component {
    static _template() {
      return {
        y: -50,
        Typography: {
          type: Column,
          Items: {
            Display1: {
              type: TextBox,
              content: 'Display 1',
              textStyle: 'display1'
            },
            Display2: {
              type: TextBox,
              content: 'Display 2',
              textStyle: 'display2'
            },
            Headline1: {
              type: TextBox,
              content: 'Headline 1',
              textStyle: 'headline1'
            },
            Headline2: {
              type: TextBox,
              content: 'Headline 2',
              textStyle: 'headline2'
            },
            Headline3: {
              type: TextBox,
              content: 'Headline 3',
              textStyle: 'headline3'
            },
            Body1: {
              type: TextBox,
              content: 'Body 1',
              textStyle: 'body1'
            },
            Body2: {
              type: TextBox,
              content: 'Body 2',
              textStyle: 'body2'
            },
            Body3: {
              type: TextBox,
              content: 'Body 3',
              textStyle: 'body3'
            },
            Button1: {
              type: TextBox,
              content: 'Button 1',
              textStyle: 'button1'
            },
            Button2: {
              type: TextBox,
              content: 'Button 2',
              textStyle: 'button2'
            },
            Callout1: {
              type: TextBox,
              content: 'CALLOUT 1',
              textStyle: 'callout1'
            },
            Caption: {
              type: TextBox,
              content: 'Caption 1',
              textStyle: 'caption1'
            }
          }
        },
        Colors1: {
          type: Column,
          x: 450,
          Items: {
            Material: {
              type: TextBox,
              content: 'Material',
              textStyle: 'callout1'
            },
            MaterialSwatch: {
              type: ColorInfo,
              colorName: 'material'
            },
            MaterialBrandSwatch: {
              type: ColorInfo,
              colorName: 'material-brand'
            },
            Core: {
              type: TextBox,
              content: 'Core',
              textStyle: 'callout1'
            },
            CoreNeutralSwatch: {
              type: ColorInfo,
              colorName: 'core-neutral'
            },
            CoreNeutralSecondarySwatch: {
              type: ColorInfo,
              colorName: 'core-neutral-secondary'
            },
            CoreNeutralTertiarySwatch: {
              type: ColorInfo,
              colorName: 'core-neutral-tertiary'
            },
            CoreNeutralDisabledSwatch: {
              type: ColorInfo,
              colorName: 'core-neutral-disabled'
            },
            CoreInverseSwatch: {
              type: ColorInfo,
              colorName: 'core-inverse'
            },
            CoreInverseSecondarySwatch: {
              type: ColorInfo,
              colorName: 'core-inverse-secondary'
            },
            CoreInverseTertiarySwatch: {
              type: ColorInfo,
              colorName: 'core-inverse-tertiary'
            },
            CoreInverseDisabledSwatch: {
              type: ColorInfo,
              colorName: 'core-inverse-disabled'
            },
            CoreBrandSwatch: {
              type: ColorInfo,
              colorName: 'core-brand'
            },
            CoreBrandSecondarySwatch: {
              type: ColorInfo,
              colorName: 'core-brand-secondary'
            },
            CoreBrandTertiarySwatch: {
              type: ColorInfo,
              colorName: 'core-brand-tertiary'
            },
            CoreBrandDisabledSwatch: {
              type: ColorInfo,
              colorName: 'core-brand-disabled'
            },
            CoreOverlaySwatch: {
              type: ColorInfo,
              colorName: 'core-overlay'
            }
          }
        },
        Colors2: {
          type: Column,
          x: 800,
          Items: {
            Interactive: {
              type: TextBox,
              content: 'Interactive',
              textStyle: 'callout1'
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
            },
            General: {
              type: TextBox,
              content: 'General',
              textStyle: 'callout1'
            },
            Grey: {
              type: ColorInfo,
              colorName: 'grey'
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
            }
          }
        },
        Elements: {
          type: Column,
          x: 1200,
          Items: {
            TileWithFocus: {
              type: Tile,
              itemLayout: {
                ratioX: 1,
                ratioY: 1,
                upCount: 6
              },
              artwork: {
                src: tileImage
              },
              progressBar: { progress: 0.5 },
              metadataLocation: 'inset',
              metadata: { title: 'Example' },
              extraItemSpacing: 48,
              mode: 'focused'
            },
            Radius: {
              type: TextBox,
              content: 'Radius',
              textStyle: 'callout1'
            },
            RadiusGrid: {
              type: Row,
              autoResizeHeight: true,
              Items: {
                Left: {
                  type: Column,
                  w: 150,
                  autoResizeHeight: true,
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
                    }
                  }
                },
                Right: {
                  type: Column,
                  autoResizeHeight: true,
                  Items: {
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
                }
              }
            },
            Misc: {
              type: TextBox,
              content: 'Misc',
              textStyle: 'callout1'
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
