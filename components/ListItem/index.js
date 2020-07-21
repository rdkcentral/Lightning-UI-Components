/**
 * List Item Component
 *
 * List Item Class that contains styling and functionality for all ListItems, including
 * RadioListItems and SeriesSeasonListItems.
 *
 */
import lng from 'wpe-lightning';

// styles
import {
  TYPESCALE,
  GRID,
  CORNER_RADIUS,
  COLORS_BASE,
  getHexColor,
  COLORS_NEUTRAL,
  COLORS_TEXT
} from '../Styles';

const COLORS = {
  fill: getHexColor('141417'),
  float: COLORS_BASE.transparent,
  focused: getHexColor('ECECF2')
};

export class ListItemBase extends lng.Component {
  static _template() {
    const h = 88;
    const w = 410;
    return {
      background: 'fill',
      Container: {
        texture: lng.Tools.getRoundRect(
          w,
          h,
          CORNER_RADIUS.medium,
          0,
          0,
          true,
          COLORS.fill
        ),
        flex: {
          direction: 'row',
          wrap: true,
          alignContent: 'center',
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16
        },
        Left: {
          flexItem: { alignSelf: 'center' },
          flex: { direction: 'column' }
        },
        Right: {
          flexItem: { alignSelf: 'center' },
          flex: { direction: 'column' }
        }
      }
    };
  }

  _construct() {
    this.leftSlot = {};
    this.rightSlot = {};
  }

  _init() {
    this._Left.patch(this.leftSlot);
    this._Right.patch(this.rightSlot);

    if (Object.keys(COLORS).includes(this.background)) {
      const color = COLORS[this.background];
      this._Container.patch({ color });
    }
  }

  _focus() {
    this._Container.patch({
      color: COLORS.focused
    });
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

export default class ListItem extends lng.Component {
  static _template() {
    return {
      Item: {
        zIndex: 1,
        Content: {
          zIndex: 2,
          flex: { direction: 'row' },
          Icon: {
            y: 3
          },
          Text: {
            y: 0,
            flex: { direction: 'column' },
            Title: {
              h: TYPESCALE.body.lineHeight,
              text: {
                ...TYPESCALE.body,
                textColor: getHexColor(COLORS_TEXT.light),
                maxLines: 1
              }
            },
            Subtitle: {
              h: TYPESCALE.footnote.lineHeight,
              text: {
                ...TYPESCALE.footnote,
                textColor: getHexColor(COLORS_TEXT.light, 72),
                maxLines: 1
              },
              alpha: 0
            }
          }
        },
        Background: {}
      },
      DropShadow: {
        zIndex: -1,
        color: getHexColor(COLORS_NEUTRAL.dark2, 80),
        x: -16,
        alpha: 0,
        scale: 0.9
      }
    };
  }

  constructor(...args) {
    super(...args);
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  // _init() {
  //   this._Background.texture = lng.Tools.getRoundRect(this.w, this.h, CORNER_RADIUS.small, 0, 0, true, 0xFFFFFFFF);
  //   this._Background.color = 0x00;
  //   this._DropShadow.texture = lng.Tools.getShadowRect(this.w, this.h, CORNER_RADIUS.small, 16, 16);
  //   this._Content.w = this.w;
  //   this._Content.h = this.h;
  // }

  _init() {
    super._init();

    this._Background.texture = lng.Tools.getRoundRect(
      this.w,
      this.h,
      CORNER_RADIUS.small,
      0,
      0,
      true,
      4279505943
    );
    this._Background.color = 0x00;
    this._DropShadow.texture = lng.Tools.getShadowRect(
      this.w,
      this.h,
      CORNER_RADIUS.small,
      16,
      16
    );
    this._Content.w = this.w;
    this._Content.h = this.h;

    this._Title.on('txLoaded', () => {
      let iconWidth = this.icon ? this._iconW + GRID.spacingIncrement * 2 : 0;
      this._Content.patch({
        x: GRID.spacingIncrement * 3 + iconWidth,
        y: (this._Content.h - this._Title.text.lineHeight) / 2
      });
      this._Title.text.wordWrapWidth = this._maxTitleW;
    });

    this._Subtitle.patch({
      color: getHexColor(COLORS_TEXT.dark, 72),
      alpha: 1
    });
  }

  set title(title) {
    super.title = title;
    this._Title.text = this.title || '';
  }

  set subtitle(subtitle) {
    super.subtitle = subtitle;
    this._Subtitle.text = this.subtitle || '';
  }

  set icon(icon) {
    if (icon) {
      super.icon = icon;
      this._whenEnabled.then(() => {
        this._Icon.patch({
          w: this._iconW,
          h: this._iconH,
          flexItem: { marginRight: GRID.spacingIncrement * 2 },
          src: this.icon
        });
      });
    }
  }

  _focus() {
    this._Background.smooth = { color: getHexColor(COLORS_NEUTRAL.light2) };
    this._Title.smooth = { color: getHexColor(COLORS_TEXT.dark) };
    this._Subtitle.smooth = {
      color: getHexColor(COLORS_TEXT.dark, 72),
      alpha: 1
    };
    if (this._Subtitle.text.text !== '' && !this.fixedSubtitle) {
      this._Text.smooth = { y: -14 };
    }
    this._Icon.smooth = { color: getHexColor(COLORS_TEXT.dark) };
    this._DropShadow.smooth = { alpha: 1 };
  }

  _unfocus() {
    this._Background.smooth = { color: getHexColor(COLORS_BASE.transparent) };
    this._Title.smooth = { color: getHexColor(COLORS_TEXT.light) };
    this._Subtitle.smooth = {
      color: getHexColor(COLORS_TEXT.light),
      alpha: this.fixedSubtitle ? 1 : 0
    };
    if (this._Subtitle.text.text !== '' && !this.fixedSubtitle) {
      this._Text.smooth = { y: 1 };
    }
    this._Icon.smooth = { color: getHexColor(COLORS_TEXT.light) };
    this._DropShadow.smooth = { alpha: 0, scale: 0.9 };
  }

  get _iconW() {
    return 32;
  }
  get _iconH() {
    return 32;
  }
  get _maxTitleW() {
    return this._Content.w - GRID.spacingIncrement * 6;
  }
  get _Content() {
    return this.tag('Content');
  }
  get _Text() {
    return this.tag('Content.Text');
  }
  get _Title() {
    return this.tag('Content.Text.Title');
  }
  get _Subtitle() {
    return this.tag('Content.Text.Subtitle');
  }
  get _Icon() {
    return this.tag('Content.Icon');
  }
  get _Background() {
    return this.tag('Item.Background');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
}
