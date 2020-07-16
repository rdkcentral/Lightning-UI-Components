/**
 * Pivot Button Component
 *
 * Pivot Class that contains styling and functionality for all pivot items.
 * These buttons are dynmaically sized.
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

export default class Pivot extends lng.Component {
  static _template() {
    return {
      Pivot: {
        zIndex: 1,
        Content: {
          zIndex: 2,
          flex: { direction: 'row' },
          Icon: {
            y: GRID.spacingIncrement
          },
          Title: {
            text: {
              ...TYPESCALE.tag,
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
    this.h = 48;
    this.w = 185;
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

  get title() {
    return this._title;
  }

  set title(title = '') {
    this._title = title;
    this._whenEnabled.then(() => {
      this._Title.text = title;
      this._Background.color = getHexColor(COLORS_BASE.transparent);

      this._Title.on('txLoaded', () => {
        this._Content.patch({ w: this.w, h: this.h });
        if (this._Title.renderWidth > this.w - 32) {
          this.w = this._Title.renderWidth + 32;
          this._Content.w = this._Title.renderWidth + 32;
        }
        this.patch({
          Pivot: {
            Content: {
              x: (this._Content.w - this._Title.renderWidth) / 2,
              y: (this._Content.h - this._Title.text.lineHeight) / 2
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
        this.fireAncestors('$itemChanged');
      });
    });
  }

  _focus() {
    this._whenEnabled.then(() => {
      this._Background.smooth = {
        color: getHexColor(COLORS_NEUTRAL.light2)
      };
      this._Title.smooth = { color: getHexColor(COLORS_TEXT.dark) };
      this._DropShadow.smooth = { alpha: 1 };
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
      this._DropShadow.smooth = { alpha: 0, scale: 0.9 };
    });
  }

  get _Content() {
    return this.tag('Content');
  }
  get _Title() {
    return this.tag('Content.Title');
  }
  get _Background() {
    return this.tag('Pivot.Background');
  }
  get _Stroke() {
    return this.tag('Pivot.Stroke');
  }
  get _DropShadow() {
    return this.tag('DropShadow');
  }
}
