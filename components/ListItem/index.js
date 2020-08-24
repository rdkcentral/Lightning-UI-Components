/**
 * List Item Component
 *
 * List Item Class that contains styling and functionality for all ListItems, including
 * RadioListItems and SeriesSeasonListItems.
 *
 */
import lng from 'wpe-lightning';
import Tile from '../Tile';
import Toggle from '../Toggle';
import { RoundRect } from '../../utils';

// styles
import { CORNER_RADIUS, COLORS_BASE, getHexColor } from '../Styles';

export const COLORS = {
  fill: getHexColor('141417'),
  float: COLORS_BASE.transparent,
  focused: getHexColor('ECECF2')
};

export const DIMENSIONS = {
  large: 860,
  small: 410
};

export class ListItemBase extends lng.Component {
  static _template() {
    const slot = {
      flex: {
        direction: 'column'
      }
    };

    return {
      background: 'fill',
      color: COLORS_BASE.transparent,
      Container: {
        flex: {
          direction: 'row',
          wrap: true,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16
        },
        Left: { ...slot },
        Right: { ...slot }
      }
    };
  }

  _init() {
    // Init Container
    const h = 88;
    const w = this.w || DIMENSIONS[this.size] || DIMENSIONS.large;
    const color = COLORS[this.background];
    const texture = lng.Tools.getRoundRect(
      RoundRect.getWidth(w, { padding: 16 }),
      RoundRect.getHeight(h),
      CORNER_RADIUS.small
    );

    this._Container.patch({
      color,
      texture
    });
  }

  _focus() {
    this._Container.smooth = {
      color: COLORS.focused
    };
  }

  _unfocus() {
    this._Container.smooth = {
      color: COLORS[this.background]
    };
  }

  _handleEnter() {
    if (typeof this.onEnter === 'function') {
      this.onEnter(this);
    }
  }

  get _Container() {
    return this.tag('Container');
  }

  get _Left() {
    return this._Container.tag('Left');
  }

  get _Right() {
    return this._Container.tag('Right');
  }
}

export default class ListItem extends ListItemBase {
  _init() {
    super._init();

    const left = {};
    const right = {};

    if (this.title) {
      left.Title = {
        alpha: 0.95,
        text: {
          h: 40,
          fontFace: 'XfinityStandardBold',
          fontSize: 28,
          text: this.title
        }
      };
    }

    if (this.subtitle) {
      left.Subtitle = {
        alpha: 0.8,
        text: {
          h: 32,
          fontFace: 'XfinityStandardMedium',
          fontSize: 24,
          text: this.subtitle
        }
      };
    }

    if (this.icon) {
      right.flex = {
        direction: 'row'
      };

      [...(Array.isArray(this.icon) ? this.icon : [this.icon])].forEach(
        (icon, index) => {
          right[`Icon${index || ''}`] = {
            h: 40,
            w: 40,
            src: icon
          };
        }
      );
    }

    this._Left.patch({ ...left });
    this._Right.patch({ ...right });
  }

  _focus() {
    super._focus();
    const color = 0xff000000;
    [this._Title, this._Subtitle, ...this._icons]
      .filter(Boolean)
      .forEach(tag => tag.setSmooth('color', color));
  }

  _unfocus() {
    super._unfocus();
    const color = 0xffffffff;
    [this._Title, this._Subtitle, ...this._icons]
      .filter(Boolean)
      .forEach(tag => tag.setSmooth('color', color));
  }

  get _Title() {
    return this._Left.tag('Title');
  }

  get _Subtitle() {
    return this._Left.tag('Subtitle');
  }

  get _Icon() {
    return this._Right.tag('Icon');
  }

  get _icons() {
    return this._Right.children;
  }
}

export class ListItemToggle extends ListItem {
  _init() {
    super._init();
    this.icon = undefined;
    this._Right.patch({
      w: 64,
      h: 32,
      Toggle: {
        type: Toggle,
        checked: this.checked
      }
    });
  }

  isChecked() {
    return Boolean(this._Toggle.checked);
  }

  toggle() {
    return this._Toggle.toggle();
  }

  _getFocused() {
    return this._Toggle;
  }

  _handleEnter() {
    this._Toggle._handleEnter();
  }

  get onEnter() {
    return this._Toggle.onEnter;
  }

  set onEnter(onEnter) {
    this._Toggle.onEnter = onEnter;
  }

  get _Toggle() {
    return this.tag('Container').tag('Toggle');
  }
}

export class ListItemImage extends ListItem {
  static _template() {
    const template = super._template();
    return {
      ...template,
      Container: {
        Image: {
          type: Tile,
          flexItem: {
            marginRight: 16
          },
          rounded: 8,
          h: 56,
          w: 56
        },
        ...template.Container,
        flex: {
          ...template.Container.flex,
          justifyContent: 'flex-start'
        }
      }
    };
  }

  _init() {
    super._init();

    if (this.icon) {
      this._Right.patch({
        flexItem: {
          grow: 1
        },
        Icon: {
          flexItem: {
            alignSelf: 'flex-end'
          }
        }
      });
    }
    this._Image.patch({ src: this.src });
  }

  get _Image() {
    return this._Container.tag('Image');
  }
}
