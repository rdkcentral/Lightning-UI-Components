/**
 * List Item Component
 *
 * List Item Class that contains styling and functionality for all ListItems, including
 * RadioListItems and SeriesSeasonListItems.
 *
 */
import lng from 'wpe-lightning';
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
      leftSlot: {},
      rightSlot: {},
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
      CORNER_RADIUS.medium
    );

    this._Container.patch({
      color,
      texture
    });

    // Init Slots
    this._Left.patch(this.leftSlot);
    this._Right.patch(this.rightSlot);
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

  _handleEnter() {} // to be overridden

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
    this.leftSlot = {};
    this.rightSlot = {};

    if (this.title) {
      this.leftSlot.Title = {
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
      this.leftSlot.Subtitle = {
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
      this.rightSlot.Icon = {
        h: 40,
        w: 40,
        src: this.icon
      };
    }
    super._init();
  }

  _focus() {
    super._focus();
    const color = 0xff000000;
    [this._Title, this._Subtitle, this._Icon]
      .filter(Boolean)
      .forEach(tag => tag.patch({ color }));
  }

  get _Title() {
    return this.tag('Container')
      .tag('Left')
      .tag('Title');
  }

  get _Subtitle() {
    return this.tag('Container')
      .tag('Left')
      .tag('Subtitle');
  }

  get _Icon() {
    return this.tag('Container')
      .tag('Right')
      .tag('Icon');
  }
}
