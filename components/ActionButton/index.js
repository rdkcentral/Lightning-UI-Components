/**
 * Action Button Component
 *
 * Action Button Class that contains styling and functionality for all Button items
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

export default class ActionButton extends lng.Component {
  static _template() {
    return {
      Button: {
        zIndex: 1,
        Content: {
          zIndex: 2,
          flex: { direction: 'row' },
          Icon: {
            y: GRID.spacingIncrement
          },
          Title: {
            text: {
              ...TYPESCALE.caption,
              textColor: getHexColor(COLORS_TEXT.light)
            }
          }
        },
        Stroke: {},
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
    this.h = this.h || 88;
    this.w = this.w || 410;
  }

  _init() {
    this._loading = this._Background.animation({
      duration: 2,
      repeat: -1,
      stopMethod: 'immediate',
      actions: [{ p: 'alpha', v: { 0: 0.5, 0.5: 1, 1: 0.5 } }]
    });
    this._Background.texture = lng.Tools.getRoundRect(
      this.w,
      this.h,
      CORNER_RADIUS.small,
      0,
      0,
      true,
      0xffffffff
    );
    this._Background.color = getHexColor(COLORS_NEUTRAL.light2, 24);
    if (!this.title) {
      this._loading.start();
    }
  }

  get announce() {
    return this.title + ', Button';
  }

  set title(title) {
    super.title = title;
    this._whenEnabled.then(() => {
      this.patch({
        Button: {
          Content: {
            w: this.w,
            h: this.h,
            Title: { text: { text: this.title || '' } }
          },
          Stroke: {
            texture: lng.Tools.getRoundRect(
              this.w,
              this.h,
              CORNER_RADIUS.small,
              2,
              getHexColor(COLORS_NEUTRAL.light2),
              false,
              false
            )
          },
          Background: {
            texture: lng.Tools.getRoundRect(
              this.w,
              this.h,
              CORNER_RADIUS.small,
              0,
              0,
              true,
              0xffffffff
            )
          }
        },
        DropShadow: {
          texture: lng.Tools.getShadowRect(
            this.w,
            this.h,
            CORNER_RADIUS.small,
            16,
            16
          )
        }
      });
      this._Background.color = getHexColor(COLORS_BASE.transparent);

      this._Title.on('txLoaded', () => {
        let iconWidth = this.icon ? this._iconW + GRID.spacingIncrement * 2 : 0;
        this._Content.patch({
          x: (this._Content.w - (this._Title.renderWidth + iconWidth)) / 2,
          y: (this._Content.h - this._Title.text.lineHeight) / 2
        });
      });
    });
  }

  set icon(url) {
    super.icon = url;
    this._whenEnabled.then(() => {
      this._Icon.patch({
        w: this._iconW,
        h: this._iconH,
        flexItem: { marginRight: GRID.spacingIncrement * 2 },
        src: url
      });
    });
  }

  _focus() {
    this._whenEnabled.then(() => {
      let focusScale = (this.w + 16) / this.w;
      this._Background.smooth = {
        color: getHexColor(COLORS_NEUTRAL.light2),
        scale: focusScale
      };
      this._Stroke.smooth = { scale: focusScale };
      this._Title.smooth = { color: getHexColor(COLORS_TEXT.dark) };
      this._Icon.smooth = { color: getHexColor(COLORS_TEXT.dark) };
      this._DropShadow.smooth = { alpha: 1, scale: focusScale };
    });
  }

  _unfocus() {
    this._whenEnabled.then(() => {
      this._Background.smooth = {
        color: getHexColor(COLORS_BASE.transparent),
        scale: 1
      };
      this._Stroke.smooth = { scale: 1 };
      this._Title.smooth = { color: getHexColor(COLORS_TEXT.light) };
      this._Icon.smooth = { color: getHexColor(COLORS_TEXT.light) };
      this._DropShadow.smooth = { alpha: 0, scale: 0.9 };
    });
  }

  get _iconW() {
    return 32;
  }
  get _iconH() {
    return 32;
  }
  get _Content() {
    return this.tag('Content');
  }
  get _Title() {
    return this.tag('Content.Title');
  }
  get _Icon() {
    return this.tag('Content.Icon');
  }
  get _Background() {
    return this.tag('Button.Background');
  }
  get _Stroke() {
    return this.tag('Button.Stroke');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
}
