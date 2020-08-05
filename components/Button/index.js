/**
 * Button Component
 *
 * Generic Button Component that handles setting text
 * and focus and unfocus states for the button background.
 */
import lng from 'wpe-lightning';
import { RoundRect, getTheme } from '../../utils';

export const DEFAULT_THEME = {
  radius: 0,
  text: { fontSize: 20 },
  w: 150,
  h: 40,
  padding: 50,
  unfocus: {
    background: 0xff1f1f1f,
    text: 0xffffffff,
    icon: 0xffffffff,
    patch: function() {
      this.patch({
        smooth: { color: this._theme.unfocus.background },
        Content: {
          Title: { smooth: { color: this._theme.unfocus.text } },
          Icon: { smooth: { color: this._theme.unfocus.icon } }
        }
      });
    }
  },
  focus: {
    background: 0xffffffff,
    text: 0xff1f1f1f,
    icon: 0xff1f1f1f,
    patch: function() {
      this.patch({
        smooth: { color: this._theme.focus.background },
        Content: {
          Title: { smooth: { color: 0xff1f1f1f } },
          Icon: { smooth: { color: this._theme.focus.icon } }
        }
      });
    }
  }
};

export default class Button extends lng.Component {
  static _template() {
    return {
      Content: {
        zIndex: 1,
        mount: 0.5,
        x: w => w / 2,
        y: h => h / 2,
        flex: {
          direction: 'row',
          alignContent: 'center',
          alignItems: 'center'
        },
        Icon: {},
        // TODO: Wonky lineHeight / fontsize from Lightning
        // Move title down 2 pixels to _visually_ center it
        // inside the button
        Title: { y: 2 }
      },
      Stroke: { zIndex: 2 }
    };
  }

  constructor(...args) {
    super(...args);
    this._whenEnabled = new Promise(resolve => (this._firstEnable = resolve));
  }

  _init() {
    this.icon = this.icon || {};
    this.theme = getTheme(DEFAULT_THEME, this.theme || {});
    this.background = this.background || this._theme.unfocus.background;
    this.patch({
      texture: lng.Tools.getRoundRect(
        RoundRect.getWidth(this.w),
        RoundRect.getHeight(this.h),
        this.radius
      ),
      Content: {
        Title: { color: this._theme.text.color || this._theme.unfocus.text },
        Icon: { color: this._theme.color || this._theme.unfocus.icon }
      }
    });
  }

  set theme(theme) {
    this._theme = theme;
    this._Title.text = this._theme.text || {};
    if (this._theme.stroke) this.stroke = this._theme.stroke;
    this.h = this.h || this._theme.h;
    this.w = this.w || this._theme.w;
    this.radius = this.radius || this._theme.radius;
  }

  set title(title) {
    this._title = title;
    this._Title.text = title;
    this._Title.on('txLoaded', () => {
      let iconSize = this._icon ? this._icon.size + this._icon.spacing : 0;
      if (
        this._Title.renderWidth + iconSize >
          this.w - (this._theme.padding || 50) &&
        !this.fixed
      ) {
        this.w = this._Title.renderWidth + this._theme.padding || 50;
        if (this._stroke) this.stroke = this._stroke;
      }
    });
  }

  set icon({ src, size = 20, spacing = 5, color = 0xffffffff }) {
    if (src) {
      this._icon = { src, size, spacing, color };
      this._Icon.patch({
        color: color,
        w: size,
        h: size,
        flexItem: { marginRight: spacing },
        src
      });
    }
  }

  set stroke({ weight = 2, color = 0xff00ff00 }) {
    this._stroke = { weight, color };
    this._whenEnabled.then(() => {
      this._Stroke.patch({
        texture: lng.Tools.getRoundRect(
          RoundRect.getWidth(this.w - weight),
          RoundRect.getHeight(this.h - weight),
          this.radius,
          weight,
          0xffffffff,
          true,
          0x00
        ),
        color
      });
    });
  }

  set background(color) {
    this._background = color;
    this.color = color;
  }

  _focus() {
    this._theme.focus.patch.apply(this);
  }

  _unfocus() {
    this._theme.unfocus.patch.apply(this);
  }

  get announce() {
    // TODO - Localization?
    // Do we need a locale file with
    // component translations?
    return this._title + ', Button';
  }

  get theme() {
    return this._theme;
  }
  get _Title() {
    return this.tag('Content.Title');
  }
  get _Icon() {
    return this.tag('Content.Icon');
  }
  get _Stroke() {
    return this.tag('Stroke');
  }
}
